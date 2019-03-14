//import player from './../player'
//import { createText } from '../utils'
//RIGHT NOW THE FIRST PLAYER DOESNT GET TO SEE SECOND PLAYERS SPEED OR MYVARIABLE

const updatePlayers = (socket, myName, otherPlayer) => {
  socket.on('update-players', playersData => {
    // Iterate over all players
    for (let index in playersData) {
      const data = playersData[index]

      // Update otherPlayer data
      if (data.playerName !== myName) {
        otherPlayer.playerName = data.playerName
        otherPlayer.myVar = data.myVar
      }
    }

  })
}

export default updatePlayers


