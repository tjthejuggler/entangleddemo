'use strict'
const http = require('http')
const app = require('./config')
const Server = http.Server(app)
const PORT = process.env.PORT || 8000
const io = require('socket.io')(Server)

Server.listen(PORT, () => console.log('Game server running on:', PORT))
//todo - currently crashing because of new attempt at putting the particle into labs{},
//      i tried to remove all the labs{} stuff, but it is still not working like it should.
//      there is an issue with getting 'data.playerLabName' to print correctly over in
//      getOtherPlayerInfo.js

const players = {}
const labs = {}
let theParticle = -1
io.on('connection', socket => {
  // When a player connects
  socket.on('new-player', state => {

    console.log('New player joined with state:', state)
    players[socket.id] = state
    labs[players[socket.id].playerLabName] = {particle: -1} 
console.log('Should be -1:', labs[players[socket.id].playerLabName].particle)
  //   for (let index in players){
  //     if (players[index].playerName == 'house'){
  //       delete players[index]
  // }
  //   }

      // var count = 0
      // for (let index in players) {
      //   count++
      // }
      // if (count > 2){
      //   delete players[socket.id]
      // }
  
    // Emit the update-players method in the client side
    //io.emit('update-players', {playersVar: players, theParticleVar: theParticle} )
    io.emit('update-players', {playersVar: players, theParticleVar: labs})
  })

  socket.on('disconnect', state => {
    delete players[socket.id]
    //io.emit('update-players', {playersVar: players, theParticleVar: theParticle})
    io.emit('update-players', {playersVar: players, theParticleVar: labs})
  })

  // When a player moves
  socket.on('move-player', data => {
    const { playerName, playerLabName, toSetTheParticleTo } = data

    // If the player is invalid, return
    if (players[socket.id] === undefined) {
      return
    }

    players[socket.id].playerName = playerName
    players[socket.id].playerLabName = playerLabName

    // if (labs[playerLabName] === undefined) {
    //   return
    // }

    labs[playerLabName] = {particle: -1} 
    labs[playerLabName].particle = toSetTheParticleTo

    theParticle = toSetTheParticleTo
    //io.emit('update-players', {playersVar: players, theParticleVar: theParticle})
    io.emit('update-players', {playersVar: players, theParticleVar: labs})
  })




})//minor change to push
//another minor change to see if can push on new comp

//TO DEPLOY:
//npx webpack --config webpack.config.js 

//IDEAS
//3 settings, 1)"I have no idea about anything, just want to be amazed"
//            2)"The exadurated version of the CHSH quantum effect"
//            3)"The way things actually are."

//to check server logs: heroku logs -t --app entangleddemo