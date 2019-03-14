import { WINDOW_WIDTH, WINDOW_HEIGHT } from './config'
import Game from './state/Game'
import player from './state/player/index'
import newPlayer from './state/sockets/newPlayer'
import getOtherPlayerInfo from './state/sockets/getOtherPlayerInfo'


console.log("begin program")

const SERVER_IP = 'https://entangleddemo.herokuapp.com/'
let socket = null
let otherPlayer = {playerName:"otherPlayer",particle:6,otherPlayerParticleShouldBe:0}
//let partnerVar = 0

//myPlayer = {}

var myParticle = 1
let myName = 'house'
let myOtherPlayerParticleShouldBe = 0
socket = io(SERVER_IP)
newPlayer(socket, myName, myParticle, myOtherPlayerParticleShouldBe)
getMyName()

var t=setInterval(checkStatus,1000);

function checkStatus(){
	getOtherPlayerInfo(socket, myName, otherPlayer)	
}

function getOtherPlayersCount()  {

	getOtherPlayerInfo(socket, myName, otherPlayer)
	      var count = 1
if (otherPlayer.playerName !== "otherPlayer"){
	count = 2
}
    return count
}

function getOtherPlayersName()  {
	getOtherPlayerInfo(socket, myName, otherPlayer)
	//let otherPlayer.playerName = 'missing'
    return otherPlayer.playerName

}

function emitMyData () {
      // Emit the 'move-player' event, updating the player's data on the server
      socket.emit('move-player', {
        playerName: myName,
        particle: myParticle,
        otherPlayerParticleShouldBe: myOtherPlayerParticleShouldBe,
      })
    }


function getMyName(){
	console.log("getMyName()") 
    setTimeout(function () {
		myName = String(socket.id)
		emitMyData ()
    }, 5000);


}



	var changeParticleButton = document.createElement('button');
    changeParticleButton.id = 'changeParticleButton';
    changeParticleButton.innerHTML = 'Change myParticle';
    changeParticleButton.style.background = '#4FFF8F';
    changeParticleButton.style.width = '200px'; // setting the width to 200px
    changeParticleButton.style.height = '200px'; // setting the height to 200px
    changeParticleButton.style.zIndex = 1000;
    changeParticleButton.onclick = function(){
	    if (myParticle == 0){
	    	myParticle = 1
	    }else{
	    	myParticle = 0
	    }
	    //useOtherPlayerParticleShouldBe = false
    console.log("my particle", myParticle)
    console.log("emitMyData ()") 
    emitMyData()
    }
    document.body.appendChild(changeParticleButton);


    var checkStatusButton = document.createElement('button');
    checkStatusButton.id = 'checkStatusButton';
    checkStatusButton.innerHTML = 'Check Status';
    checkStatusButton.style.background = '#4FFF8F';
    checkStatusButton.style.width = '200px'; // setting the width to 200px
    checkStatusButton.style.height = '200px'; // setting the height to 200px
    checkStatusButton.style.zIndex = 1000;
    checkStatusButton.onclick = function(){
    emitMyData()
   	getOtherPlayerInfo(socket, myName, otherPlayer)
 //   	if (useOtherPlayerParticleShouldBe){
 //   		particle = otherPlayer.otherPlayerParticleShouldBe
	// }
      //console.log('New player joined with state:', this)
    console.log("String(socket.id)2", String(socket.id))  
    console.log("myName", String(myName))
    console.log("my particle", myParticle)
    console.log("playerCount", getOtherPlayersCount())  
    console.log("otherPlayer.playerName", otherPlayer.playerName)
    console.log("otherPlayer.particle", otherPlayer.particle) 
    }
    document.body.appendChild(checkStatusButton);



    var changeOtherPlayerVar = document.createElement('button');
    changeOtherPlayerVar.id = 'changeOtherPlayerVar';
    changeOtherPlayerVar.innerHTML = 'Change otherPlayer particle';
    changeOtherPlayerVar.style.background = '#4FFF8F';
    changeOtherPlayerVar.style.width = '200px'; // setting the width to 200px
    changeOtherPlayerVar.style.height = '200px'; // setting the height to 200px
    changeOtherPlayerVar.style.zIndex = 1000;
    changeOtherPlayerVar.onclick = function(){
    	getOtherPlayerInfo(socket, myName, otherPlayer)
	    if (otherPlayer.particle == 0){
	    	myOtherPlayerParticleShouldBe = 1
	    }else{
	    	myOtherPlayerParticleShouldBe = 0
	    }
    emitMyData()
    console.log("otherPlayerParticleShouldBe", myOtherPlayerParticleShouldBe) 

    }
    document.body.appendChild(changeOtherPlayerVar);

var myText = document.createElement('text');
    myText.id = 'myText';
    myText.innerHTML = 'Hello world!';
    document.body.appendChild(myText);

//document.getElementById("myelement1") = "Hello world!";

// class App extends Phaser.Game {
//   constructor () {


//     super(WINDOW_WIDTH, WINDOW_HEIGHT, Phaser.AUTO)
//     this.state.add('Game', Game)
//     this.state.start('Game')


	
//   // }
// }
// }

// const SimpleGame = new App()
