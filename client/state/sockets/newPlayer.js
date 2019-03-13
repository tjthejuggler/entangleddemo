const newPlayer = (socket, player) => {
  socket.on('connect', () => {
    socket.emit('new-player', {
      x: player.sprite.body.x,
      y: player.sprite.body.y,
      angle: player.sprite.rotation,
      playerName: {
        name: String(socket.id),
        //name: String(player.myVariable),
        x: player.playerName.x,
        y: player.playerName.y
      },
      speed: {
        value: player.speed,
        x: player.speed.x,
        y: player.speed.y
      },
      myVariable: {//TJ added this
        value: player.myVariable,
        x: player.myVariable.x,
        y: player.myVariable.y
      },
      playerCount: { 
        value: player.playerCount
      },

    })
  })
}

export default newPlayer
