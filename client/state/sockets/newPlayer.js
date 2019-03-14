const newPlayer = (socket, myVar, myName) => {
  console.log("in newPlayer")
  socket.on('connect', () => {
    console.log("more inside newPlayer")
    socket.emit('new-player', {
      playerName: myName,
      myVar: myVar,
    })
  })
}

export default newPlayer
