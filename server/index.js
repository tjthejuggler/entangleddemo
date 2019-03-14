'use strict'
const http = require('http')
const app = require('./config')
const Server = http.Server(app)
const PORT = process.env.PORT || 8000
const io = require('socket.io')(Server)

Server.listen(PORT, () => console.log('Game server running on:', PORT))

const players = {}
let theParticle = -1
//todo
//  right now we should be showing a player count on all the other cars, just not the players, so we cannot show the player
//    count by pressing a key either, in order to do this
//  we need a way to share variables between files, maybe this will have a lead:
//    https://stackoverflow.com/questions/7612011/how-to-get-a-variable-from-a-file-to-another-file-in-node-js/7612052
//  

io.on('connection', socket => {
  // When a player connects
  socket.on('new-player', state => {

    console.log('New player joined with state:', state)
    players[socket.id] = state

      var count = 0
      for (let index in players) {
        count++
      }
      if (count > 2){
        delete players[socket.id]
      }
  
    // Emit the update-players method in the client side
    io.emit('update-players', {playersVar: players, theParticleVar: theParticle} )
    //io.emit('count-players', players)
  })

  socket.on('disconnect', state => {
    delete players[socket.id]
    io.emit('update-players', {playersVar: players, theParticleVar: theParticle})
    //io.emit('count-players', players)
  })

  // When a player moves
  socket.on('move-player', data => {
    const { playerName, particle, otherPlayerParticleShouldBe, toSetTheParticleTo } = data

    // If the player is invalid, return
    if (players[socket.id] === undefined) {
      return
    }

    // Update the player's data if he moved
    
    players[socket.id].playerName = playerName
    players[socket.id].particle = particle
    players[socket.id].otherPlayerParticleShouldBe = otherPlayerParticleShouldBe
    console.log("theParticle before set", theParticle)
    theParticle = toSetTheParticleTo
    console.log("theParticle after set", theParticle)

    

    //io.emit('players-count', players.length())
    // Send the data back to the client
    io.emit('update-players', {playersVar: players, theParticleVar:theParticle})
    //io.emit('count-players', players)
  })




})

//TO DEPLOY:
//npx webpack --config webpack.config.js 

//IDEAS
//3 settings, 1)"I have no idea about anything, just want to be amazed"
//            2)"The exadurated version of the CHSH quantum effect"
//            3)"The way things actually are."