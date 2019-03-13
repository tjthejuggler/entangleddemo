import { WINDOW_WIDTH, WINDOW_HEIGHT } from './config'
import Game from './state/Game'
class App extends Phaser.Game {
  constructor () {

    super(WINDOW_WIDTH, WINDOW_HEIGHT, Phaser.AUTO)
    this.state.add('Game', Game)
    this.state.start('Game')
    var clickMeButton = document.createElement('button');

	clickMeButton.id = 'myButton';
	clickMeButton.innerHTML = 'Click Me';
	clickMeButton.style.background = '#4FFF8F';
	clickMeButton.style.width = '200px'; // setting the width to 200px
	clickMeButton.style.height = '200px'; // setting the height to 200px
	clickMeButton.onclick = function(){
		alert("Button clicked!")
	}
	document.body.appendChild(clickMeButton);
	
  }
}

const SimpleGame = new App()
