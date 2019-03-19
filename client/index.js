import newPlayer from './state/sockets/newPlayer'
import getOtherPlayerInfo from './state/sockets/getOtherPlayerInfo'

//TODO
//	-allow user to input 'lab name'
//		-this is a combination of text inout and a 'ok' button
//		-when ok is clicked, emit the lab name to the server just like playerName,
//			and also set a local variable, myLabName
//		-when determining the player count, only use players from the same lab
//		-when ok is clicked, update a little stats readout that says the name of who is in the lab
//	-make an array of entangled particles and show their states with the buttons
//	-get rid of all the phaser stuff
//	-see what i need in node_modules and get rid of anything extra

console.log("begin program")

const SERVER_IP = 'https://entangleddemo.herokuapp.com/'
let socket = io(SERVER_IP)
let otherPlayer = {playerName:"otherPlayer"}
const theParticle = {isSetTo: -1}
let myName = 'house'
let myUserNumber = 3
let hasMeasured = false
let theParticleState = ''
//socket = io(SERVER_IP)  --> IF there is a problem then init socket as null and uncomment this
newPlayer(socket, myName)
getMyName()
var t=setInterval(checkStatus,100);

function checkStatus(){
	if (myUserNumber == 3){
		var playerCount = getOtherPlayersCount()
	}
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
	console.log("myNameWithoutSpecialCharacter ",myNameWithoutSpecialCharacter)
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

var checkStatusButton = createButton('checkStatusButton','Check Status')
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


var measureOnX = createButton('measureOnX','measure On X');
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

var measureOnD = createButton('measureOnD','measure On D');
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

var measureOnY = createButton('measureOnY','measure On Y');
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






var createEntangledPair = createButton
    	('createEntangledPair','create entangled particle pair');
createEntangledPair.onclick = function(){
	theParticle.isSetTo = -1
	hasMeasured = false
	theParticleState = 'superposition'
	measurementReadingText.innerHTML = theParticleState
	emitMyData ()
	console.log("theParticle", theParticle.isSetTo)
    }
document.body.appendChild(createEntangledPair);

var radioButtonSimple = createRadioButton
	('radioButtonSimple','radioButtons','Easy')
	radioButtonSimple.onclick = function(){
		console.log("simple") 
	}
document.body.appendChild(radioButtonSimple);

var radioButtonCHSH = createRadioButton
	('radioButtonCHSH','radioButtons','CHSH')
		radioButtonCHSH.onclick = function(){
		console.log("CHSH") 
	}
document.body.appendChild(radioButtonCHSH);

var radioButtonGHZ = createRadioButton
	('radioButtonGHZ','radioButtons','GHZ')
document.body.appendChild(radioButtonGHZ);

var measurementReadingText = createMessageUnder
	(checkStatusButton, 'superposition', 'measurementReadingText', "65px");
    document.body.appendChild(measurementReadingText);

var userNumberText = createMessageUnder
	(measurementReadingText, '#:', 'userNumberText', "35px");
    document.body.appendChild(userNumberText);

var labText = document.createElement('text');
document.body.appendChild(labText);

function createButton(id,text){
    var but = document.createElement('button');
    but.id = id;
    but.innerHTML = text;
    but.style.background = '#4FFF8F';
    but.style.width = '200px'; // setting the width to 200px
    but.style.height = '200px'; // setting the height to 200px
    but.style.zIndex = 1000;
    return but;
}

function createMessageUnder(elem, html, id, fontSize) {
  // create message element
  let message = document.createElement('div');
  // better to use a css class for the style here
  message.style.cssText = "position:fixed; color: red";
  message.style.fontSize = fontSize;
  message.id = id;


  // assign coordinates, don't forget "px"!
  let coords = elem.getBoundingClientRect();

  message.style.left = coords.left + "px";
  message.style.top = coords.bottom + "px";

  message.innerHTML = html;

  return message;
}

function createRadioButton(id,groupName,text){
    var radioInput = document.createElement('input');
    radioInput.setAttribute('type', 'radio');
	radioInput.setAttribute('name', 'radioGroup');
	radioInput.setAttribute('id', id);

	var label = document.createElement('radioLabel');
    label.innerHTML = text;
    document.body.appendChild(label);

    return radioInput
    
}


