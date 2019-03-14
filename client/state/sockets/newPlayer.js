const newPlayer = (socket, myName, myParticle, myOtherPlayerParticleShouldBe) => {
  console.log("in newPlayer")
  socket.on('connect', () => {
    console.log("more inside newPlayer")
    socket.emit('new-player', {
      playerName: myName,
      particle: myParticle,
      otherPlayerParticleShouldBe: myOtherPlayerParticleShouldBe,
    })
  })
}

export default newPlayer
