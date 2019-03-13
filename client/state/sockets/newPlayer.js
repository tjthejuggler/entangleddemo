const newPlayer = (socket, myVar) => {
  console.log("in newPlayer")
  socket.on('connect', () => {
    socket.emit('new-player', {
      playerName: String(socket.id),
      myVar: myVar,
    })
  })
}

export default newPlayer
