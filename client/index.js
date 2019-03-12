import { WINDOW_WIDTH, WINDOW_HEIGHT } from './config'
import Game from './state/Game'

class App extends Phaser.Game {
  constructor () {
  	var globalPlayerCount = 8
    super(WINDOW_WIDTH, WINDOW_HEIGHT, Phaser.AUTO)
    this.state.add('Game', Game)
    this.state.start('Game')
  }
}

const SimpleGame = new App()
