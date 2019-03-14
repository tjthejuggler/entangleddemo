//import player from './../player'
//import { createText } from '../utils'
//RIGHT NOW THE FIRST PLAYER DOESNT GET TO SEE SECOND PLAYERS SPEED OR MYVARIABLE

const updatePlayers = (socket, myName, otherPlayerName, otherPlayerVar) => {
  socket.on('update-players', playersData => {
    let playersFound = {}
    // Iterate over all players
    
    for (let index in playersData) {
      const data = playersData[index]

      playersFound[index] = true

      // Update otherPlayer data
      if (data.playerName !== myName) {
        otherPlayerName = data.playerName
        otherPlayerVar = data.myVar
      }
    }

  })
}

export default updatePlayers


