const newPlayer = (socket, myVar) => {
  socket.on('connect', () => {
    socket.emit('new-player', {
      playerName: String(socket.id),
      myVar: myVar,
    })
  })
}

export default newPlayer
