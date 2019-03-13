import { WINDOW_WIDTH, WINDOW_HEIGHT } from './config'
import Game from './state/Game'
import player from './state/player/index'



const functionAsObjectProperty = {
    print: (value) => console.log(value)
};

functionAsObjectProperty.print("mic check"); // "mic check"

console.log("mic check 2")


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
