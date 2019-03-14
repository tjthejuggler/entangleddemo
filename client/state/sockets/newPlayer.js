const newPlayer = (socket, myVar) => {
  console.log("in newPlayer")
  socket.on('connect', () => {
    console.log("more inside newPlayer")
    socket.emit('new-player', {
      playerName: String(socket.id),
      myVar: myVar,
    })
  })
}

export default newPlayer
