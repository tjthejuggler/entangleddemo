function countPlayers(otherPlayers) {
  var counter = 0
  for (let id in otherPlayers) {
    counter = counter+1
  }
  return counter.toString()
}

export default countPlayers