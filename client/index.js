import { WINDOW_WIDTH, WINDOW_HEIGHT } from './config'
import Game from './state/Game'
import player from './state/player/index'
class App extends Phaser.Game {
  constructor () {

    super(WINDOW_WIDTH, WINDOW_HEIGHT, Phaser.AUTO)
    this.state.add('Game', Game)
    this.state.start('Game')

	
  }
}

const SimpleGame = new App()
