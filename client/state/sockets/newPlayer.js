const newPlayer = (socket, myName, myParticle, myOtherPlayerParticleShouldBe) => {
  socket.on('connect', () => {
    socket.emit('new-player', {
      playerName: myName,
    })
  })
}

export default newPlayer
