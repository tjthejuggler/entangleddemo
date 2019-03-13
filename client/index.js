import { WINDOW_WIDTH, WINDOW_HEIGHT } from './config'
import Game from './state/Game'
import { getPlayerCount } from './state/player'
class App extends Phaser.Game {
  constructor () {
  	if (getPlayerCount()<3){
    super(WINDOW_WIDTH, WINDOW_HEIGHT, Phaser.AUTO)
    this.state.add('Game', Game)
    this.state.start('Game')
	}
  }
}

const SimpleGame = new App()
