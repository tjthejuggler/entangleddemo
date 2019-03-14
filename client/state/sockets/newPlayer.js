const newPlayer = (socket, myName, particle, otherPlayerParticleShouldBe) => {
  console.log("in newPlayer")
  socket.on('connect', () => {
    console.log("more inside newPlayer")
    socket.emit('new-player', {
      playerName: myName,
      particle: particle,
      otherPlayerParticleShouldBe: otherPlayerParticleShouldBe,
    })
  })
}

export default newPlayer
