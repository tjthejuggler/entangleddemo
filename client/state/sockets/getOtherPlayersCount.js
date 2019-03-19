export function getOtherPlayersCount()  {
	getOtherPlayerInfo(socket, myName, otherPlayer, theParticle)
	    var count = 1
	if (otherPlayer.playerName !== "otherPlayer"){
		count = 2
		myUserNumber = determineMyUserNumber()
	}
    return count
}