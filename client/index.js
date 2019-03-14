import { WINDOW_WIDTH, WINDOW_HEIGHT } from './config'
import Game from './state/Game'
import player from './state/player/index'
import newPlayer from './state/sockets/newPlayer'
import updatePlayers from './state/sockets/updatePlayers'


console.log("begin program")

const SERVER_IP = 'https://entangleddemo.herokuapp.com/'
let socket = null
let otherPlayer = {playerName:"otherPlayer",myVar:6}
//let partnerVar = 0

//myPlayer = {}

var myVar = 1
let myName = 'house'
socket = io(SERVER_IP)
newPlayer(socket, myVar, myName)
getMyName()
function getOtherPlayersCount()  {

	updatePlayers(socket, myName, otherPlayer)
	      var count = 1
if (otherPlayer.playerName !== "otherPlayer"){
	count = 2
}
    return count
}

function getOtherPlayersName()  {
	updatePlayers(socket, myName, otherPlayer)
	//let otherplayer.playerName = 'missing'
    return otherPlayer.playerName

}




function emitMyData () {
      // Emit the 'move-player' event, updating the player's data on the server
      socket.emit('move-player', {
        playerName: myName,
        myVar: myVar,
      })
    }


function getMyName(){
	console.log("getMyName()") 
    setTimeout(function () {
		myName = String(socket.id)
		emitMyData ()
    }, 5000);


}

window.onkeydown = function(event) {
     if (event.keyCode === 80) {//P keypress (checkStatusButton)
   //   	if (firstPress){
			// myName = String(socket.id)
			// firstPress = false
   //   	}
   updatePlayers(socket, myName, otherPlayer)
      //console.log('New player joined with state:', this)
    console.log("String(socket.id)2", String(socket.id))  
    console.log("myName", String(myName))
    console.log("playerCount", getOtherPlayersCount())  
    console.log("otherPlayer.playerName", otherPlayer.playerName)
    console.log("otherPlayer.myVar", otherPlayer.myVar) 

    }
     
     if (event.keyCode === 79) {//O keypress
	emitMyData()
    console.log("emitMyData ()") 

    }

    if (event.keyCode === 73) {//I keyPress (changeMyVarButton)

	    if (myVar == 0){
	    	myVar = 1
	    }else{
	    	myVar = 0
	    }
    console.log("myVar", myVar) 
    emitMyData()
    }
}

	var changeMyVarButton = document.createElement('button');
    changeMyVarButton.id = 'changeMyVarButton';
    changeMyVarButton.innerHTML = 'Change myVar';
    changeMyVarButton.style.background = '#4FFF8F';
    changeMyVarButton.style.width = '200px'; // setting the width to 200px
    changeMyVarButton.style.height = '200px'; // setting the height to 200px
    changeMyVarButton.style.zIndex = 1000;
    changeMyVarButton.onclick = function(){
	    if (myVar == 0){
	    	myVar = 1
	    }else{
	    	myVar = 0
	    }
    console.log("myVar", myVar)
    console.log("emitMyData ()") 
    emitMyData()
    }
    document.body.appendChild(changeMyVarButton);

    var checkStatusButton = document.createElement('button');
    checkStatusButton.id = 'checkStatusButton';
    checkStatusButton.innerHTML = 'Check Status';
    checkStatusButton.style.background = '#4FFF8F';
    checkStatusButton.style.width = '200px'; // setting the width to 200px
    checkStatusButton.style.height = '200px'; // setting the height to 200px
    checkStatusButton.style.zIndex = 1000;
    checkStatusButton.onclick = function(){
   updatePlayers(socket, myName, otherPlayer)
      //console.log('New player joined with state:', this)
    console.log("String(socket.id)2", String(socket.id))  
    console.log("myName", String(myName))
    console.log("playerCount", getOtherPlayersCount())  
    console.log("otherPlayer.playerName", otherPlayer.playerName)
    console.log("otherPlayer.myVar", otherPlayer.myVar) 
    }
    document.body.appendChild(checkStatusButton);




// class App extends Phaser.Game {
//   constructor () {


//     super(WINDOW_WIDTH, WINDOW_HEIGHT, Phaser.AUTO)
//     this.state.add('Game', Game)
//     this.state.start('Game')


	
//   // }
// }
// }

// const SimpleGame = new App()
