import { WORLD_SIZE } from './../../config'

const { width, height } = WORLD_SIZE
const worldCreator = game => {
  // Start P2 physics engine
  game.physics.startSystem(Phaser.Physics.P2JS)
  // We set this to true so our game won't pause if we focus
  // something else other than the browser
  game.stage.disableVisibilityChange = true
  // Here we set the bounds of our game world
  game.world.setBounds(0, 0, width/4, height/4)
  createMap(game)
  createButton()
}

const createMap = game => {
  let groundTiles = []
  for (let i = 0; i <= width / 64 + 1; i++) {
    for (let j = 0; j <= height / 64 + 1; j++) {
      const groundSprite = game.add.sprite(i * 64, j * 64, 'asphalt')
      groundTiles.push(groundSprite)
    }
  }
}

  function createButton(){

                    var button = game.add.button(
                        game.world.centerX,
                        game.world.centerY,
                        'ms',
                        function openWindow() {
                            alert('Hello Phaser!');
                        },
                        this,
                        0,
                        1,
                        2,
                        3);
                    button.anchor.x = .5;
                    button.anchor.y = .5;
                    button.input.useHandCursor = true;

  
  }

export default worldCreator
