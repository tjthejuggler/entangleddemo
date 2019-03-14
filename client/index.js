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

const theParticle = {isSetTo: -1}
var myParticle = 1
let myName = 'house'
let myOtherPlayerParticleShouldBe = 0
let myUserNumber = 3
socket = io(SERVER_IP)
newPlayer(socket, myName, myParticle, myOtherPlayerParticleShouldBe)
getMyName()

var t=setInterval(checkStatus,1000);

function checkStatus(){
	getOtherPlayerInfo(socket, myName, otherPlayer, theParticle)	
	myText.innerHTML = theParticle.isSetTo
}

function getOtherPlayersCount()  {

	getOtherPlayerInfo(socket, myName, otherPlayer, theParticle)
	      var count = 1
if (otherPlayer.playerName !== "otherPlayer"){
	count = 2
	myUserNumber = determineMyUserNumber()

}
    return count
}

function determineMyUserNumber(){
	let otherPlayersName = otherPlayer.playerName

const myNameIntsOnly = myName.replace(/\D/g,'');
const otherPlayerNameIntsOnly = otherPlayersName.replace(/\D/g,'');

if (myNameIntsOnly < otherPlayerNameIntsOnly){
	return 1
}else{
	return 2
}

return 0
}

function getOtherPlayersName()  {
	getOtherPlayerInfo(socket, myName, otherPlayer, theParticle)
	//let otherPlayer.playerName = 'missing'
    return otherPlayer.playerName

}

function emitMyData () {
      // Emit the 'move-player' event, updating the player's data on the server
      socket.emit('move-player', {
        playerName: myName,
        particle: myParticle,
        otherPlayerParticleShouldBe: myOtherPlayerParticleShouldBe,
        theParticle: theParticle.isSetTo,
      })
    }


function getMyName(){
	console.log("getMyName()") 
    setTimeout(function () {
		myName = String(socket.id)
		emitMyData ()
    }, 500);


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
   	getOtherPlayerInfo(socket, myName, otherPlayer, theParticle)
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
    	getOtherPlayerInfo(socket, myName, otherPlayer, theParticle)
	    if (otherPlayer.particle == 0){
	    	myOtherPlayerParticleShouldBe = 1
	    }else{
	    	myOtherPlayerParticleShouldBe = 0
	    }
    emitMyData()
    console.log("otherPlayerParticleShouldBe", myOtherPlayerParticleShouldBe) 

    }
    document.body.appendChild(changeOtherPlayerVar);

    var measureOnX = document.createElement('button');
    measureOnX.id = 'measureOnX';
    measureOnX.innerHTML = 'measure On X';
    measureOnX.style.background = '#4FFF8F';
    measureOnX.style.width = '200px'; // setting the width to 200px
    measureOnX.style.height = '200px'; // setting the height to 200px
    measureOnX.style.zIndex = 1000;
    measureOnX.onclick = function(){
		theParticle.isSetTo = myUserNumber*100+10+1
		emitMyData ()
    }
    document.body.appendChild(measureOnX);

        var measureOnD = document.createElement('button');
    measureOnD.id = 'measureOnD';
    measureOnD.innerHTML = 'measure On D';
    measureOnD.style.background = '#4FFF8F';
    measureOnD.style.width = '200px'; // setting the width to 200px
    measureOnD.style.height = '200px'; // setting the height to 200px
    measureOnD.style.zIndex = 1000;
    measureOnD.onclick = function(){
		theParticle.isSetTo = myUserNumber*100+20+1
		emitMyData ()
    }
    document.body.appendChild(measureOnD);

        var measureOnY = document.createElement('button');
    measureOnY.id = 'measureOnY';
    measureOnY.innerHTML = 'measure On Y';
    measureOnY.style.background = '#4FFF8F';
    measureOnY.style.width = '200px'; // setting the width to 200px
    measureOnY.style.height = '200px'; // setting the height to 200px
    measureOnY.style.zIndex = 1000;
    measureOnY.onclick = function(){
		theParticle.isSetTo = myUserNumber*100+30+1
		emitMyData ()
    }
    document.body.appendChild(measureOnY);



var myText = createMessageUnder(changeParticleButton, 'Hello, world!');
    myText.id = 'myText';
    myText.style.fontSize = "100px";
    document.body.appendChild(myText);

function createMessageUnder(elem, html) {
  // create message element
  let message = document.createElement('div');
  // better to use a css class for the style here
  message.style.cssText = "position:fixed; color: red";

  // assign coordinates, don't forget "px"!
  let coords = elem.getBoundingClientRect();

  message.style.left = coords.left + "px";
  message.style.top = coords.bottom + "px";

  message.innerHTML = html;

  return message;
}





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
