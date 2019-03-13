import { WINDOW_WIDTH, WINDOW_HEIGHT } from './config'
import Game from './state/Game'
import player from './state/player/index'
import newPlayer from './state/sockets/newPlayer'
import updatePlayers from './state/sockets/updatePlayers'

console.log("begin program")

const SERVER_IP = 'https://entangleddemo.herokuapp.com/'
let socket = null
let otherPlayers = {}
let partnerVar = 0

//myPlayer = {}

var myVar = 1


socket = io(SERVER_IP)

newPlayer(socket, myVar)


// Creates the player passing the X, Y, game and socket as arguments
//myPlayer = player(socket)

const functionAsObjectProperty = {
    print: (value) => console.log(value)
};

function getOtherPlayers()  {
	updatePlayers(socket, otherPlayers)
	      var count = 0
      for (let index in otherPlayers) {
        count++
      }
    return count
}

functionAsObjectProperty.print("mic check"); // "mic check"

console.log("String(socket.id)1", String(socket.id))  

let myName = "house"
let firstPress = false

window.onkeydown = function(event) {
     if (event.keyCode === 80) {
     	if (firstPress){
			myName = String(socket.id)
     	}
      //console.log('New player joined with state:', this)
    console.log("this is a test1") 
    alert("This is a test1.")
    console.log("String(socket.id)2", String(socket.id))  
    console.log("myName", String(myName))
    console.log("getOtherPlayers count", getOtherPlayers())  
    //console.log("this.playerName.name", this.playerName.name)
    alert("This is a test2." + String(socket.id))
    //console.log("this.playerName.name", this.playerName.name)
    alert("This is a test3.")
    }
}


// class App extends Phaser.Game {
//   constructor () {


//     super(WINDOW_WIDTH, WINDOW_HEIGHT, Phaser.AUTO)
//     this.state.add('Game', Game)
//     this.state.start('Game')

// 		// var clickMeButton = document.createElement('button');
//   //   clickMeButton.id = 'myButton';
//   //   clickMeButton.innerHTML = 'Click Me';
//   //   clickMeButton.style.background = '#4FFF8F';
//   //   clickMeButton.style.width = '200px'; // setting the width to 200px
//   //   clickMeButton.style.height = '200px'; // setting the height to 200px
//   //   clickMeButton.style.zIndex = 1000;
//   //   clickMeButton.onclick = function(){
//   //       if(this.player.myVariable == 0){
//   //           this.player.myVariable = 1
//   //       }else{
//   //           this.player.myVariable = 0
//   //       }
//   //       console.log("Button clicked!")
//   //       alert("Button clicked!")
//   //   }
//   //   document.body.appendChild(clickMeButton);
	
//   // }
// }
// }

// const SimpleGame = new App()
