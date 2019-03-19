const newPlayer = (socket, myName, myLabName) => {
  socket.on('connect', () => {
    socket.emit('new-player', {
      playerName: myName,
      playerLabName: myLabName,
    })
  })
}

export default newPlayer
