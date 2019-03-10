import player from './../player'
//RIGHT NOW THE FIRST PLAYER DOESNT GET TO SEE SECOND PLAYERS SPEED OR MYVARIABLE
const countPlayers = (socket, otherPlayers, game) => {
  socket.on('count-players', playersData => {
    let playersFound = {}
    // Iterate over all players
    let counter = 0;
    for (let index in playersData) {
        counter = counter + 1;
    }
    return 1;
  })
}

export default countPlayers
