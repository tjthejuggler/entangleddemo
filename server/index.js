'use strict'
const http = require('http')
const app = require('./config')
const Server = http.Server(app)
const PORT = process.env.PORT || 8000
const io = require('socket.io')(Server)

Server.listen(PORT, () => console.log('Game server running on:', PORT))

const players = {}
//todo
//  right now we should be showing a player count on all the other cars, just not the players, so we cannot show the player
//    count by pressing a key either, in order to do this
//  we need a way to share variables between files, maybe this will have a lead:
//    https://stackoverflow.com/questions/7612011/how-to-get-a-variable-from-a-file-to-another-file-in-node-js/7612052
//  

io.on('connection', socket => {
  // When a player connects
  socket.on('new-player', state => {
      //   var count = 0
      // for (let index in players) {
      //   count++
      // }
      // if (count < 2){
    console.log('New player joined with state:', state)
    players[socket.id] = state
  }
    // Emit the update-players method in the client side
    io.emit('update-players', players)
    //io.emit('count-players', players)
  })

  socket.on('disconnect', state => {
    delete players[socket.id]
    io.emit('update-players', players)
    //io.emit('count-players', players)
  })

  // When a player moves
  socket.on('move-player', data => {
    const { x, y, angle, playerName, speed, myVariable, playerCount } = data

    // If the player is invalid, return
    if (players[socket.id] === undefined) {
      return
    }

    // Update the player's data if he moved
    players[socket.id].x = x
    players[socket.id].y = y
    players[socket.id].angle = angle
    players[socket.id].playerName = {
      name: playerName.name,
      x: playerName.x,
      y: playerName.y
    }
    players[socket.id].speed = {
      value: speed.value,
      x: speed.x,
      y: speed.y
    }
    players[socket.id].myVariable = {
      value: myVariable.value,
      x: myVariable.x,
      y: myVariable.y
    }
    var count = 0
      for (let index in players) {
        count++
      }
    players[socket.id].playerCount = {
      value: count
    }
    

    //io.emit('players-count', players.length())
    // Send the data back to the client
    io.emit('update-players', players)
    //io.emit('count-players', players)
  })




})
