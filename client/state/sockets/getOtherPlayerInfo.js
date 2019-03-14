//import player from './../player'
//import { createText } from '../utils'


const getOtherPlayerInfo = (socket, myName, otherPlayer) => {
  socket.on('update-players', playersData => {
    // Iterate over all players
    for (let index in playersData) {
      const data = playersData[index]

      // Update otherPlayer data
      if (data.playerName !== myName) {
        otherPlayer.playerName = data.playerName
        otherPlayer.particle = data.particle
        otherPlayer.otherPlayerParticleShouldBe = data.otherPlayerParticleShouldBe
      }
    }

  })
}

export default getOtherPlayerInfo


