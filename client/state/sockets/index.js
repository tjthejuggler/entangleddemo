export function getOtherPlayersCount()  {
	getOtherPlayerInfo(socket, myName, otherPlayer, theParticle)
	    var count = 1
	if (otherPlayer.playerName !== "otherPlayer"){
		count = 2
		myUserNumber = determineMyUserNumber()
	}
    return count+100
}

const getOtherPlayerInfo = (socket, myName, otherPlayer, theParticle) => {
  socket.on('update-players', function(data) {
      var playersData = data.playersVar
      //console.log("playersData", playersData)
      var theParticleFromServer = data.theParticleVar 
      //console.log("theParticleFromServer", theParticleFromServer)
    // Iterate over all players
    for (let index in playersData) {
      const data = playersData[index]

      // Update otherPlayer data
      if (data.playerName !== myName) {
        otherPlayer.playerName = data.playerName

      }
    }
  theParticle.isSetTo = theParticleFromServer
  })
}

export default getOtherPlayerInfo