import { WINDOW_WIDTH, WINDOW_HEIGHT } from './config'
import Game from './state/Game'
var globalPlayerCount = 8
class App extends Phaser.Game {
  constructor () {
  	
    super(WINDOW_WIDTH, WINDOW_HEIGHT, Phaser.AUTO)
    this.state.add('Game', Game)
    this.state.start('Game')
  }
}

const SimpleGame = new App()
