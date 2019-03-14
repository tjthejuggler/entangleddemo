import newPlayer from './state/sockets/newPlayer'
import getOtherPlayerInfo from './state/sockets/getOtherPlayerInfo'

//TODO
//	-remove files not being used
//	-get rid of the personal particle stuff
//	-make the userNumber situation more robust, maybe give either player a spot for it for the other to see,
//		if someone has a number, the other should take the other, if neighter has a number, get it from name
//	-allow user to input 'lab name'
//	-make an array of entangled particles and show their states with the buttons
//	-get rid of all the phaser stuff
//	-see what i need in node_modules and get rid of anything extra

console.log("begin program")

const SERVER_IP = 'https://entangleddemo.herokuapp.com/'
let socket = null
let otherPlayer = {playerName:"otherPlayer"}
const theParticle = {isSetTo: -1}
let myName = 'house'
let myUserNumber = 3
let hasMeasured = false
let theParticleState = ''
socket = io(SERVER_IP)
newPlayer(socket, myName)
getMyName()

var t=setInterval(checkStatus,100);

function checkStatus(){
	if (myUserNumber == 3){
		var playerCount = getOtherPlayersCount()
	}
	//emitMyData()
	getOtherPlayerInfo(socket, myName, otherPlayer, theParticle)	
	if (theParticle.isSetTo < 0){
		hasMeasured = false
		theParticleState = 'superposition'
		measurementReadingText.innerHTML = theParticleState
	}
	userNumberText.innerHTML = '#:'+myUserNumber
	if (theParticleState == 'superposition'){
	let measurementResult = ''
	let measurementAxis = ''
		if (theParticle.isSetTo>0){
			if ((myUserNumber == 1 && theParticle.isSetTo<150) || (myUserNumber == 2 && theParticle.isSetTo>150) ){
				if (getOnesDigit(theParticle.isSetTo) == 1){ 
					measurementResult = 'Down Spin '
				}else if(getOnesDigit(theParticle.isSetTo) == 2){
					measurementResult = 'Up Spin '
				}
				if (getTensDigit(theParticle.isSetTo) == 1){//TODO these conditionals could turn into some kind of case usage
					measurementAxis = '(X)'
				}else if (getTensDigit(theParticle.isSetTo) == 2){
					measurementAxis = '(D)'
				}else if (getTensDigit(theParticle.isSetTo) == 3){
					measurementAxis = '(Y)'
				}
				theParticleState = measurementResult + measurementAxis			
			}
		}
		measurementReadingText.innerHTML = theParticleState
	}	
	
}

function getOnesDigit(numberToUse){
	return numberToUse % 10
}

function getTensDigit(numberToUse){
	return Math.round(numberToUse/10) % 10  
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
	const myNameWithoutSpecialCharacter = myName.replace(/[^\w\s]/gi, '')
	console.log("myNameWithoutSpecialCharacter",myNameWithoutSpecialCharacter)
	const otherPlayersNameWithoutSpecialCharacter = otherPlayersName.replace(/[^\w\s]/gi, '')
	console.log("otherPlayersNameWithoutSpecialCharacter",otherPlayersNameWithoutSpecialCharacter)
	if (myNameWithoutSpecialCharacter < otherPlayersNameWithoutSpecialCharacter){
		console.log("returning 1")
		return 1
	}else{
		console.log("returning 2")
		return 2
	}
	return 0
}

function emitMyData () {
      // Emit the 'move-player' event, updating the player's data on the server
      socket.emit('move-player', {
        playerName: myName,
        toSetTheParticleTo: theParticle.isSetTo,
      })
    }

function getMyName(){
	console.log("getMyName()") 
    setTimeout(function () {
		myName = String(socket.id)
		emitMyData ()
    }, 500);
}

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
	    console.log("String(socket.id)2", String(socket.id))  
	    console.log("myName", String(myName))
	    console.log("myUserNumber", myUserNumber)
	    console.log("playerCount", getOtherPlayersCount())  
	    console.log("otherPlayer.playerName", otherPlayer.playerName)
	    console.log("theParticle", theParticle.isSetTo) 
    }
    document.body.appendChild(checkStatusButton);


    var measureOnX = document.createElement('button');
    measureOnX.id = 'measureOnX';
    measureOnX.innerHTML = 'measure On X';
    measureOnX.style.background = '#4FFF8F';
    measureOnX.style.width = '200px'; // setting the width to 200px
    measureOnX.style.height = '200px'; // setting the height to 200px
    measureOnX.style.zIndex = 1000;
    measureOnX.onclick = function(){
    	if (!hasMeasured){
    		let measurement = 0
    		let randomNumber = Math.random()
    		console.log(randomNumber)
    		const randomMeasurement = randomNumber < 0.5 ? 1 : 2;
	    	if (theParticle.isSetTo < 0 || getTensDigit(theParticle.isSetTo) == 3 ){
	    		measurement = randomMeasurement
	    	}else{
	    		measurement = getOnesDigit(theParticle.isSetTo)
	    	}
			theParticle.isSetTo = myUserNumber*100+10+measurement
			hasMeasured = true
			emitMyData ()
		}else{
			alert("Particle already measured.")
		}
		console.log("theParticle", theParticle.isSetTo)
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
    	if (!hasMeasured){
    		let measurement = 0
    		let randomNumber = Math.random()
    		console.log(randomNumber)
    		const randomMeasurement = randomNumber < 0.5 ? 1 : 2;
	    	if (theParticle.isSetTo < 0){
	    		measurement = randomMeasurement
	    	}else{
	    		measurement = getOnesDigit(theParticle.isSetTo)
	    	}
			theParticle.isSetTo = myUserNumber*100+20+measurement
			hasMeasured = true
			emitMyData ()
		}else{
			alert("Particle already measured.")
		}
		console.log("theParticle", theParticle.isSetTo)
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
    	if (!hasMeasured){
    		let measurement = 0
    		let randomNumber = Math.random()
    		console.log(randomNumber)
    		const randomMeasurement = randomNumber < 0.5 ? 1 : 2;
	    	if (theParticle.isSetTo < 0 || getTensDigit(theParticle.isSetTo) == 1 ){
	    		measurement = randomMeasurement
	    	}else{
	    		measurement = getOnesDigit(theParticle.isSetTo)
	    	}
			theParticle.isSetTo = myUserNumber*100+30+measurement
			hasMeasured = true
			emitMyData ()
		}else{
			alert("Particle already measured.")
		}
		console.log("theParticle", theParticle.isSetTo) 
    }
    document.body.appendChild(measureOnY);

    var createEntangledPair = document.createElement('button');
    createEntangledPair.id = 'createEntangledPair';
    createEntangledPair.innerHTML = 'create entangled particle pair';
    createEntangledPair.style.background = '#4FFF8F';
    createEntangledPair.style.width = '200px'; // setting the width to 200px
    createEntangledPair.style.height = '200px'; // setting the height to 200px
    createEntangledPair.style.zIndex = 1000;
    createEntangledPair.onclick = function(){
		theParticle.isSetTo = -1
		hasMeasured = false
		theParticleState = 'superposition'
		measurementReadingText.innerHTML = theParticleState
		emitMyData ()
		console.log("theParticle", theParticle.isSetTo)
    }
    document.body.appendChild(createEntangledPair);



var measurementReadingText = createMessageUnder(checkStatusButton, 'superposition');
    measurementReadingText.id = 'measurementReadingText';
    measurementReadingText.style.fontSize = "65px";
    document.body.appendChild(measurementReadingText);

var userNumberText = createMessageUnder(userNumberText, '#:');
    userNumberText.id = 'userNumberText';
    userNumberText.style.fontSize = "35px";
    document.body.appendChild(userNumberText);

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
