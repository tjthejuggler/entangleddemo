!function(e){function t(r){if(a[r])return a[r].exports;var i=a[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.WINDOW_WIDTH=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t.WINDOW_HEIGHT=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t.WORLD_SIZE={width:1600,height:1200},t.ASSETS_URL="../assets"},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.isDown=function(e,t){return e.input.keyboard.isDown(t)},t.createText=function(e,t){return e.add.text(t.x,t.y,"",{fontSize:"12px",fill:"#FFF",align:"center"})}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,r){return{socket:r,sprite:(0,i.default)(e,t,a),playerName:null,speed:0,myVariable:0,speedText:null,myVariableText:null,drive:function(e){var t={W:Phaser.Keyboard.W,S:Phaser.Keyboard.S,A:Phaser.Keyboard.A,D:Phaser.Keyboard.D,F:Phaser.Keyboard.F,G:Phaser.Keyboard.G};0!==this.speed&&this.emitPlayerData(),(0,s.isDown)(e,t.F)&&(this.myVariable=1),(0,s.isDown)(e,t.G)&&(this.myVariable=0),(0,s.isDown)(e,t.W)&&this.speed<=400?this.speed+=10:this.speed>=10&&(this.speed-=10),(0,s.isDown)(e,t.S)&&this.speed>=-200?this.speed-=5:this.speed<=-5&&(this.speed+=5),(0,s.isDown)(e,t.A)?this.sprite.body.angularVelocity=this.speed/1e3*-5:(0,s.isDown)(e,t.D)?this.sprite.body.angularVelocity=this.speed/1e3*5:this.sprite.body.angularVelocity=0,this.sprite.body.velocity.x=this.speed*Math.cos(.01745*(this.sprite.body.angle-360)),this.sprite.body.velocity.y=this.speed*Math.sin(.01745*(this.sprite.body.angle-360)),e.world.bringToTop(this.sprite),this.updatePlayerName(),this.updatePlayerStatusText("speed",this.sprite.body.x-57,this.sprite.body.y-39,this.speedText)},emitPlayerData:function(){r.emit("move-player",{x:this.sprite.body.x,y:this.sprite.body.y,angle:this.sprite.body.rotation,playerName:{name:this.playerName.text,x:this.playerName.x,y:this.playerName.y},speed:{value:this.speed,x:this.speedText.x,y:this.speedText.y},myVariable:{value:this.myVariable,x:this.myVariableText.x,y:this.myVariableText.y}})},updatePlayerName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.socket.id,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.sprite.body.x-57,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.sprite.body.y-59;this.playerName.text=String(e),this.playerName.x=t,this.playerName.y=r,a.world.bringToTop(this.playerName)},updatePlayerStatusText:function(e,t,r,i){var s=e[0].toUpperCase()+e.substring(1);this[e]<0?this.newText=0:this.newText=this[e],i.x=t,i.y=r,i.text=s+": "+parseInt(this.newText),a.world.bringToTop(i)}}};var r=a(7),i=function(e){return e&&e.__esModule?e:{default:e}}(r),s=a(1)},function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var n=a(0),o=a(4),l=function(e){return e&&e.__esModule?e:{default:e}}(o),y=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n.WINDOW_WIDTH,n.WINDOW_HEIGHT,Phaser.AUTO));return e.state.add("Game",l.default),e.state.start("Game"),e}return s(t,e),t}(Phaser.Game);new y},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),l=a(0),y=a(1),p=a(5),u=r(p),d=a(6),c=r(d),h=a(2),f=r(h),m=a(8),b=r(m),x=a(9),_=r(x),g=a(10),v=r(g),T=null,P={},w=function(e){function t(){i(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.player={},e}return n(t,e),o(t,[{key:"preload",value:function(){(0,u.default)(this.game)}},{key:"create",value:function(){var e=l.WORLD_SIZE.width,t=l.WORLD_SIZE.height;(0,c.default)(this.game),T=io("https://entangleddemo.herokuapp.com/"),this.player=(0,f.default)(Math.random()*e,Math.random()*t/2,this.game,T),this.player.playerName=(0,y.createText)(this.game,this.player.sprite.body),this.player.speedText=(0,y.createText)(this.game,this.player.sprite.body),this.player.myVariableText=(0,y.createText)(this.game,this.player.sprite.body),(0,b.default)(T,this.player),(0,_.default)(T,P,this.game),this.game.camera.x=this.player.sprite.x-400,this.game.camera.y=this.player.sprite.y-300,this.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL}},{key:"update",value:function(){this.player.drive(this.game);var e=this.player.sprite.x-400,t=this.player.sprite.y-300;this.game.camera.x+=.08*(e-this.game.camera.x),this.game.camera.y+=.08*(t-this.game.camera.y),(0,v.default)(P)}}]),t}(Phaser.State);t.default=w},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),i=function(e){e.load.crossOrigin="Anonymous",e.stage.backgroundColor="#1E1E1E",e.load.image("asphalt",r.ASSETS_URL+"/sprites/asphalt/asphalt.png"),e.load.image("car",r.ASSETS_URL+"/sprites/car/car.png")};t.default=i},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),i=r.WORLD_SIZE.width,s=r.WORLD_SIZE.height,n=function(e){e.physics.startSystem(Phaser.Physics.P2JS),e.stage.disableVisibilityChange=!0,e.world.setBounds(0,0,i/4,s/4),o(e)},o=function(e){for(var t=[],a=0;a<=i/64+1;a++)for(var r=0;r<=s/64+1;r++){var n=e.add.sprite(64*a,64*r,"asphalt");t.push(n)}};t.default=n},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,a){var r=a.add.sprite(e,t,"car");return a.physics.p2.enable(r,!1),r};t.default=r},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){e.on("connect",function(){e.emit("new-player",{x:t.sprite.body.x,y:t.sprite.body.y,angle:t.sprite.rotation,playerName:{name:String(e.id),x:t.playerName.x,y:t.playerName.y},speed:{value:t.speed,x:t.speed.x,y:t.speed.y},myVariable:{value:t.myVariable,x:t.myVariable.x,y:t.myVariable.y}})})};t.default=r},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),i=function(e){return e&&e.__esModule?e:{default:e}}(r),s=a(1),n=function(e,t,a){e.on("update-players",function(r){var n={};for(var o in r){var l=r[o];if(void 0===t[o]&&o!==e.id){var y=(0,i.default)(l.x,l.y,a);y.playerName=(0,s.createText)(a,y),y.speedText=(0,s.createText)(a,y),y.myVariableText=(0,s.createText)(a,y),y.updatePlayerName(l.playerName.name,l.playerName.x,l.playerName.y),t[o]=y}n[o]=!0,o!==e.id&&(t[o].target_x=l.x,t[o].target_y=l.y,t[o].target_rotation=l.angle,t[o].playerName.target_x=l.playerName.x,t[o].playerName.target_y=l.playerName.y,t[o].speedText.target_x=l.speed.x,t[o].speedText.target_y=l.speed.y,t[o].speed=l.speed.value,t[o].myVariableText.target_x=l.myVariable.x,t[o].myVariableText.target_y=l.myVariable.y,t[o].myVariable=l.myVariable.value)}for(var p in t)n[p]||(t[p].sprite.destroy(),t[p].playerName.destroy(),t[p].speedText.destroy(),t[p].myVariableText.destroy(),delete t[p])})};t.default=n},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){for(var t in e){var a=e[t];if(void 0!==a.target_x){a.sprite.body.x+=.3*(a.target_x-a.sprite.body.x),a.sprite.body.y+=.3*(a.target_y-a.sprite.body.y);var r=a.target_rotation,i=(r-a.sprite.body.rotation)/(2*Math.PI);i-=Math.round(i),i*=2*Math.PI,a.sprite.body.rotation+=.3*i,a.playerName.x+=.3*(a.playerName.target_x-a.playerName.x),a.playerName.y+=.3*(a.playerName.target_y-a.playerName.y),a.speedText.x+=.3*(a.speedText.target_x-a.speedText.x),a.speedText.y+=.3*(a.speedText.target_y-a.speedText.y),a.myVariableText.x+=.3*(a.myVariableText.target_x-a.myVariableText.x),a.myVariableText.y+=.3*(a.myVariableText.target_y-a.myVariableText.y),a.updatePlayerStatusText("speed",a.speedText.x,a.speedText.y,a.speedText)}}};t.default=r}]);