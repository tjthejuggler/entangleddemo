import createPlayer from './createPlayer'
import { isDown } from '../utils'

export default function (x, y, game, socket) {
  const player = {
    socket,
    sprite: createPlayer(x, y, game),
    playerName: null,
    speed: 0,
    myVariable: 0,
    speedText: null,
    myVariableText: null,
    drive (game) {
      /*
      Most of the driving logic was written by Daniel Wuggenig
      https://www.anexia-it.com/blog/en/introduction-to-the-phaser-framework/
      I decided to use it since this is supposed to be an introduction to multiplayer
      online car game, his driving solution is simple and clean and fits perfectly
      */

      const KEYS = {
        W: Phaser.Keyboard.W,
        S: Phaser.Keyboard.S,
        A: Phaser.Keyboard.A,
        D: Phaser.Keyboard.D,
        F: Phaser.Keyboard.F,
        G: Phaser.Keyboard.G
      }

      // Only emit if the player is moving
      if (this.speed !== 0) {
        this.emitPlayerData()
      }

      // TJ added F is pressed down
      if (isDown(game, KEYS.F)) {
        this.myVariable = 1
        //this.emitPlayerData()
      }
      // TJ added G is pressed down
      if (isDown(game, KEYS.G)) {
        this.myVariable = 0
        //this.emitPlayerData()
      }

      // Drive forward if W is pressed down
      if (isDown(game, KEYS.W) && this.speed <= 400) {
        this.speed += 10
      } else {
        if (this.speed >= 10) {
          this.speed -= 10
        }
      }

      // Drive backwards if S is pressed down
      if (isDown(game, KEYS.S) && this.speed >= -200) {
        this.speed -= 5
      } else {
        if (this.speed <= -5) {
          this.speed += 5
        }
      }

      // Steers the car
      if (isDown(game, KEYS.A)) {
        this.sprite.body.angularVelocity = -5 * (this.speed / 1000)
      } else if (isDown(game, KEYS.D)) {
        this.sprite.body.angularVelocity = 5 * (this.speed / 1000)
      } else {
        this.sprite.body.angularVelocity = 0
      }

      this.sprite.body.velocity.x = this.speed * Math.cos((this.sprite.body.angle - 360) * 0.01745)
      this.sprite.body.velocity.y = this.speed * Math.sin((this.sprite.body.angle - 360) * 0.01745)

      // Brings the player's sprite to top
      game.world.bringToTop(this.sprite)

      this.updatePlayerName()
      //TJ's observations on this 'speedMINE' and 'speedOTHERS'(playerMovementInterpolation):
      //  If a player already exists when another player is born, then they will be labeled as speedOTHERS,
      //  All players see themseleves as speedMINE
      
      //this.updatePlayerStatusText('speed', this.sprite.body.x - 57, this.sprite.body.y - 39, this.speedText)
      this.updatePlayerStatusText('myVariable', this.sprite.body.x - 57, this.sprite.body.y - 39, this.myVariableText)
    },
    emitPlayerData () {
      // Emit the 'move-player' event, updating the player's data on the server
      socket.emit('move-player', {
        x: this.sprite.body.x,
        y: this.sprite.body.y,
        angle: this.sprite.body.rotation,
        playerName: {
          name: this.playerName.text,
          x: this.playerName.x,
          y: this.playerName.y
        },
        speed: {
          value: this.speed,
          x: this.speedText.x,
          y: this.speedText.y
        },
        myVariable: {
          value: this.myVariable,
          x: this.myVariableText.x,
          y: this.myVariableText.y
        }
      })
    },
    updatePlayerName (name = this.socket.id, x = this.sprite.body.x - 57, y = this.sprite.body.y - 59) {
    //updatePlayerName (name = this.myVariable, x = this.sprite.body.x - 57, y = this.sprite.body.y - 59) {
      // Updates the player's name text and position
      this.playerName.text = String(name)
      this.playerName.x = x
      this.playerName.y = y
      // Bring the player's name to top
      game.world.bringToTop(this.playerName)
    },
    //updatePlayerStatusText (status, x, y, text, myVariable) {
    updatePlayerStatusText (status, x, y, text) {
      // Capitalize the status text
      const capitalizedStatus = status[0].toUpperCase() + status.substring(1)
      //const capitalizedStatus = this.myVariable.toString()
      let newText = ''
      // Set the speed text to either 0 or the current speed
      this[status] < 0 ? this.newText = 0 : this.newText = this[status]
      //this.newText = this['myVariable']
      // Updates the text position and string
      text.x = x
      text.y = y
      //this.newText = mySentVariable.toString()
      text.text = `${capitalizedStatus}: ${parseInt(this.newText)}` //TJ changed speed text to show myVariable instead of newText
      //text.text = `speeeeeeed2: ${parseInt(this.myVariable)}`
      game.world.bringToTop(text)
    }

  }
  return player
}
