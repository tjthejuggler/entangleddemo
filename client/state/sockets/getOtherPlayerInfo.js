const getOtherPlayerInfo = (socket, myName, myLabName, otherPlayer, theParticle) => {
  socket.on('update-players', function(data) {
      var playersData = data.playersVar
      //console.log("playersData", playersData)
      var theParticleFromServer = data.theParticleVar 
      //console.log("theParticleFromServer", theParticleFromServer)
    // Iterate over all players
    for (let index in playersData) {
      const data = playersData[index]

//TODO make it so it only shows other player name if in the same lab


      // Update otherPlayer data
      if (data.playerLabName == myLabName && data.playerName !== myName) {
        //TODO, USE SOME CONSOLE PRINTS TO FIGURE OUT WHY THE ABOVE LINE LEAVES BOTH PLAYERS AS PLAYER 3
              //if (data.playerName !== myName) {
        otherPlayer.playerName = data.playerName
        theParticle.isSetTo = theParticleFromServer
      }
    }
  
  })
}

export default getOtherPlayerInfo


