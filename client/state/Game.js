import { WORLD_SIZE } from '../config'
import { createText } from './utils'
import fileLoader from '../config/fileloader'
import createWorld from './world/createWorld'
import player from './player'
import newPlayer from './sockets/newPlayer'
import updatePlayers from './sockets/updatePlayers'
import countPlayers from './sockets/countPlayers'
import playerMovementInterpolation from './predictions/playerMovementInterpolation'
//SIMPLEST VERSION REQUIREMENTS:
//  -when second user joins, both users get 10 particles, each a part of a pair of entangled particles
//  -one at a time each user can measure their particles on the X,Y, or D
//TODO: (this is a complete todo list for the 'easy to understand' method)
//  -make an indication to both players when player 2 joins, this is when either user is given their particles
//  -show stuff to just client
//  -make particle arrays for each client, arrays should be initialized with 0s(superposition) 
//      and can collapse into 1 or 2 when measured
//  -the particle arrays should also keep track of the measurement that was done,
//      possible array readings: 0, X1, X2, D1, D2, Y1, Y2, 1, 2
//              (If the entangled particle is already collapsed we dont need to keep track of the method of this one)
//  -when a player measures a particle:
//      1) check the array of this set of particles, if it is 1 or 2, just tell the user the result, but
//              if it is 0, then continue to next step
//      2) check the state of the entangled particle
//          Is entangled particle a 0? 
//              YES-> randomly collapse this particle and indicate measurement 
//                    type and result in array, if measurement type is D, go ahead and set
//                    entangled particle as well based on this particle
//              NO -> 
//                  If entangled particle is measured in the same orientation as this one,
//                      set this one based on entangled one.
//                  If entangled particle is measured in the other axis (at this point either must be X or Y),
//                      randomly set this particle

const SERVER_IP = 'https://entangleddemo.herokuapp.com/'
let socket = null
let otherPlayers = {}

class Game extends Phaser.State {
  constructor () {
    super()
    this.player = {}
  }

  preload () {
    // Loads files
    fileLoader(this.game)
  }

  create () {

    
    const { width, height } = WORLD_SIZE

    // Creates the world
    createWorld(this.game)
    // Connects the player to the server
    socket = io(SERVER_IP)
    // Creates the player passing the X, Y, game and socket as arguments
    this.player = player(Math.random() * width, Math.random() * height / 2, this.game, socket)
    // Creates the player name text
    this.player.playerName = createText(this.game, this.player.sprite.body)
    // Creates the player speed text
    this.player.speedText = createText(this.game, this.player.sprite.body)
        // Creates the player myVariable text
    this.player.myVariableText = createText(this.game, this.player.sprite.body)//TJ added this

    //alert(countPlayers().toString());

    // Sends a new-player event to the server
    newPlayer(socket, this.player)
    // update all players
    updatePlayers(socket, otherPlayers, this.game)

    // Configures the game camera
    this.game.camera.x = this.player.sprite.x - 800 / 2
    this.game.camera.y = this.player.sprite.y - 600 / 2

    // Scale game to fit the entire window
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
  }

  update () {
    this.player.drive(this.game)

    // Move the camera to follow the player
    let cameraX = this.player.sprite.x - 800 / 2
    let cameraY = this.player.sprite.y - 600 / 2
    this.game.camera.x += (cameraX - this.game.camera.x) * 0.08
    this.game.camera.y += (cameraY - this.game.camera.y) * 0.08

    // Interpolates the players movement
    playerMovementInterpolation(otherPlayers)
  }
}

export default Game
