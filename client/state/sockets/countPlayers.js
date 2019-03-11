function countPlayers (otherPlayers){
socket.on('update-players', playersData => {
  var counter = 0
  for (let index in playersData) {
    counter = counter+1
  }
  return counter.toString()
  //return "myTest"
	})
}

export default countPlayers
