import player from './../player'
import { createText } from '../utils'
//RIGHT NOW THE FIRST PLAYER DOESNT GET TO SEE SECOND PLAYERS SPEED OR MYVARIABLE
const updatePlayers = (socket, otherPlayers, game) => {
  socket.on('update-players', playersData => {
    let playersFound = {}
    // Iterate over all players
    for (let index in playersData) {
      const data = playersData[index]
      // In case a player hasn't been created yet
      // We make sure that we won't create a second instance of it

      if (otherPlayers[index] === undefined && index !== socket.id) {
        const newPlayer = player(data.x, data.y, game)
        newPlayer.playerName = createText(game, newPlayer)
        newPlayer.speedText = createText(game, newPlayer)
        newPlayer.myVariableText = createText(game, newPlayer)
        newPlayer.updatePlayerName(data.playerName.name, data.playerName.x, data.playerName.y)
        otherPlayers[index] = newPlayer
      }

      playersFound[index] = true

      // Update players data
      if (index !== socket.id) {
        // Update players target but not their real position
        otherPlayers[index].target_x = data.x
        otherPlayers[index].target_y = data.y
        otherPlayers[index].target_rotation = data.angle

        otherPlayers[index].playerName.target_x = data.playerName.x
        otherPlayers[index].playerName.target_y = data.playerName.y

        otherPlayers[index].speedText.target_x = data.speed.x
        otherPlayers[index].speedText.target_y = data.speed.y

        otherPlayers[index].speed = data.speed.value

        otherPlayers[index].myVariableText.target_x = data.myVariable.x//TJ added this
        otherPlayers[index].myVariableText.target_y = data.myVariable.y//TJ added this

        otherPlayers[index].myVariable = data.myVariable.value//TJ added this


      }
    }

    // Check if there's no missing players, if there is, delete them
    for (let id in otherPlayers) {
      if (!playersFound[id]) {
        otherPlayers[id].sprite.destroy()
        otherPlayers[id].playerName.destroy()
        otherPlayers[id].speedText.destroy()
        otherPlayers[id].myVariableText.destroy()//TJ added this
        delete otherPlayers[id]
      }
    }
  })
}

export default updatePlayers

// function countPlayers(otherPlayers) {
//   var counter = 0
//   for (let id in otherPlayers) {
//     counter = counter+1
//   }
//   return counter.toString()
// }

// export default countPlayers
