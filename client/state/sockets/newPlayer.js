const newPlayer = (socket, player) => {
  socket.on('connect', () => {
    socket.emit('new-player', {
      playerName: String(socket.id),
      myVariable: {
        value: player.myVariable
      },
    })
  })
}

export default newPlayer
