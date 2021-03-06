import newPlayer from './state/sockets/newPlayer'
import getOtherPlayerInfo from './state/sockets/getOtherPlayerInfo'
import { createRadioButton } from './state/utils'
import { createButton } from './state/utils'
import { createMessageUnder } from './state/utils'

//TODO
//	-make simple and chsh radiobuttons actually change behavior
//	-changing the entanglement type should automatically change it for any other users in the lab
//	-just like how we have a list of player objects we also want a list of lab
//		objects which will have their own particle
//	-ignoring ghz for now, if a player tries to join a lab and there are already 2 users in
//		the lab, it should not let them join and give them a message telling them
//	-see what i need in node_modules and get rid of anything extra

console.log("begin program2")

const SERVER_IP = 'https://entangleddemo.herokuapp.com/'
const buttonSize = '70px'
const textSize = '20px'
let socket = io(SERVER_IP)
let otherPlayer = {playerName:"otherPlayer", playerLabName:"austinLab"}
//let myLabInfo = {theParticle: -1, name: 'austinLab'}
const theParticle = {isSetTo: -1}
let myName = 'houser'
let myLabName = 'austinLab'
let myUserNumber = 3
let hasMeasured = false
let theParticleState = ''
//socket = io(SERVER_IP)  --> IF there is a problem then init socket as null and uncomment this
newPlayer(socket, myName, myLabName)
getMyName()
var t=setInterval(checkStatus,100);

function checkStatus(){
	if (myUserNumber == 3){
		var playerCount = getOtherPlayersCount()
	}

	if (otherPlayer.playerLabName !== myLabName){
		otherPlayer.playerName = ''
	}
	getOtherPlayerInfo(socket, myName, myLabName, otherPlayer, theParticle)	
	      //console.log('otherPlayer.playerLabName',otherPlayer.playerLabName)
      //console.log('myLabName',myLabName)
	if (theParticle.isSetTo < 0){
		hasMeasured = false
		theParticleState = 'superposition'
		measurementReadingText.innerHTML = theParticleState
	}
	userNumberText.innerHTML = 'number:'+myUserNumber
	userNameText.innerHTML = 'myName:'+myName
	otherUserNameText.innerHTML = 'otherPlayerName:'+otherPlayer.playerName
	myLabNameText.innerHTML = 'myLabName:'+myLabName
	if (theParticleState == 'superposition'){
	let measurementResult = ''
	let measurementAxis = ''
		if (theParticle.isSetTo>0){
			if ((myUserNumber == 1 && theParticle.isSetTo<150) || (myUserNumber == 2 && theParticle.isSetTo>150) ){
				if (getOnesDigit(theParticle.isSetTo) == 1){ 
					if (myUserNumber == 1){
						measurementResult = 'Down Spin '
					}else if (myUserNumber == 2){
						measurementResult = 'Up Spin '
					}
				}else if(getOnesDigit(theParticle.isSetTo) == 2){
					if (myUserNumber == 1){
						measurementResult = 'Up Spin '
					}else if (myUserNumber == 2){
						measurementResult = 'Down Spin '
					}
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

document.body.style.textAlign = 'center'

var measurementReadingText = createMessageUnder
	(checkStatusButton, 'superposition', 'measurementReadingText', "45px");
    document.body.appendChild(measurementReadingText);

var userNumberText = createMessageUnder
	(measurementReadingText, 'user number:', 'userNumberText', textSize);
    document.body.appendChild(userNumberText);

var userNameText = createMessageUnder
	(measurementReadingText, 'username:', 'userNameText', textSize);
    document.body.appendChild(userNameText);

var otherUserNameText = createMessageUnder
	(measurementReadingText, 'other username:', 'otherUserNameText', textSize);
    document.body.appendChild(otherUserNameText);

var myLabNameText = createMessageUnder
	(measurementReadingText, 'My Lab name:', 'myLabNameText', textSize);
    document.body.appendChild(myLabNameText);

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

document.body.appendChild(document.createElement("br"));

var labText = document.createElement('input');
labText.type = 'text'
labText.name = 'labText'
labText.id = 'labText'
document.body.appendChild(labText);

var setLab = createButton
    	('setLab','Set Lab Name', buttonSize);
setLab.onclick = function(){
	otherPlayer.playerName = ''
	myLabName = document.getElementById('labText').value
	console.log('lab set as',myLabName)
	emitMyData()
    }
document.body.appendChild(setLab);

//this is a line break
document.body.appendChild(document.createElement("br"));




var measureOnX = createButton('measureOnX','measure On X',buttonSize);
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

var measureOnD = createButton('measureOnD','measure On D',buttonSize);
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

var measureOnY = createButton('measureOnY','measure On Y',buttonSize);
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
document.body.appendChild(document.createElement("br"));

var createEntangledPair = createButton('createEntangledPair','entangle',buttonSize);
createEntangledPair.onclick = function(){
	theParticle.isSetTo = -1
	hasMeasured = false
	theParticleState = 'superposition'
	measurementReadingText.innerHTML = theParticleState
	emitMyData ()
	console.log("theParticle", theParticle.isSetTo)
    }
document.body.appendChild(createEntangledPair);
document.body.appendChild(document.createElement("br"));


var checkStatusButton = createButton('checkStatusButton','Check Status',buttonSize)
checkStatusButton.onclick = function(){
    emitMyData()
   	getOtherPlayerInfo(socket, myName, myLabName, otherPlayer, theParticle)
    console.log("String(socket.id)2", String(socket.id))  
    console.log("myName", String(myName))
    console.log("myUserNumber", myUserNumber)
    console.log("playerCount", getOtherPlayersCount())  
    console.log("otherPlayer.playerName", otherPlayer.playerName)
    console.log("theParticle", theParticle.isSetTo) 
}
document.body.appendChild(checkStatusButton);

function getOnesDigit(numberToUse){
	return numberToUse % 10
}

function getTensDigit(numberToUse){
	return Math.round(numberToUse/10) % 10  
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

function getOtherPlayersCount()  {
	getOtherPlayerInfo(socket, myName, myLabName, otherPlayer, theParticle)
	    var count = 1
	if (otherPlayer.playerName !== "otherPlayer"){
		count = 2
		myUserNumber = determineMyUserNumber()
	}
    return count
}

function emitMyData () {
      // Emit the 'move-player' event, updating the player's data on the server
      socket.emit('move-player', {
        playerName: myName,
        playerLabName: myLabName,
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






