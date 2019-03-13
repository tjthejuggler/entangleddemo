!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=r(1),l=r(4),s=n(l),c=r(3),y=(n(c),function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,u.WINDOW_WIDTH,u.WINDOW_HEIGHT,Phaser.AUTO));e.state.add("Game",s.default),e.state.start("Game");var r=document.createElement("button");return r.id="myButton",r.innerHTML="Click Me",r.style.background="#4FFF8F",r.style.width="200px",r.style.height="200px",r.style.zIndex=1e3,r.onclick=function(){0==this.player.myVariable?this.player.myVariable=1:this.player.myVariable=0,console.log("Button clicked!"),alert("Button clicked!")},document.body.appendChild(r),e}return i(t,e),t}(Phaser.Game));new y},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.WINDOW_WIDTH=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t.WINDOW_HEIGHT=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t.WORLD_SIZE={width:1600,height:1200},t.ASSETS_URL="../assets"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.isDown=function(e,t){return e.input.keyboard.isDown(t)},t.createText=function(e,t){return e.add.text(t.x,t.y,"",{fontSize:"12px",fill:"#FFF",align:"center"})}},function(e,t,r){"use strict";function n(){return o}Object.defineProperty(t,"__esModule",{value:!0}),t.getPlayerCount=n,t.default=function(e){return{socket:e,playerName:null,myVariable:0,playerCount:0,drive:function(){window.onkeydown=function(e){80===e.keyCode&&(alert("This is a test1."),alert("This is a test2."+this.socket.id))}},emitPlayerData:function(){e.emit("move-player",{myVariable:{value:this.myVariable,x:this.myVariableText.x,y:this.myVariableText.y},playerCount:{value:this.playerCount}})},updatePlayerName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.socket.id;this.playerName.text=String(e),game.world.bringToTop(this.playerName)},updatePlayerStatusText:function(e,t,r,n){var a=e[0].toUpperCase()+e.substring(1);this[e]<0?this.newText=0:this.newText=this[e],o=this[e],n.x=t,n.y=r,n.text=a+":::: "+parseInt(this.newText),game.world.bringToTop(n)}}};var a=r(7),o=(function(e){e&&e.__esModule}(a),r(2),0)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),s=(r(2),r(5)),c=(n(s),r(6)),y=(n(c),r(3)),d=n(y),p=r(8),f=n(p),h=r(9),b=n(h),m=r(10),_=(n(m),null),v={},x=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.player={},e}return i(t,e),u(t,[{key:"preload",value:function(){}},{key:"create",value:function(){l.WORLD_SIZE.width,l.WORLD_SIZE.height;_=io("https://entangleddemo.herokuapp.com/"),this.player=(0,d.default)(_),(0,f.default)(_,this.player),(0,b.default)(_,v)}},{key:"createButton",value:function(){var e=game.add.button(game.world.centerX,game.world.centerY,"ms",function(){alert("Hello Phaser!")},this,0,1,2,3);e.anchor.x=.5,e.anchor.y=.5,e.input.useHandCursor=!0}},{key:"update",value:function(){this.player.drive()}}]),t}(Phaser.State);t.default=x},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=function(e){e.load.crossOrigin="Anonymous",e.stage.backgroundColor="#1E1E1E",e.load.image("asphalt",n.ASSETS_URL+"/sprites/asphalt/asphalt.png"),e.load.image("car",n.ASSETS_URL+"/sprites/car/car.png")};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=n.WORLD_SIZE.width,o=n.WORLD_SIZE.height,i=function(e){e.physics.startSystem(Phaser.Physics.P2JS),e.stage.disableVisibilityChange=!0,e.world.setBounds(0,0,a/4,o/4),u(e),createButton()},u=function(e){for(var t=[],r=0;r<=a/64+1;r++)for(var n=0;n<=o/64+1;n++){var i=e.add.sprite(64*r,64*n,"asphalt");t.push(i)}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,r){var n=r.add.sprite(e,t,"car");return r.physics.p2.enable(n,!1),n};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){e.on("connect",function(){e.emit("new-player",{playerName:{name:String(e.id)},myVariable:{value:t.myVariable,x:t.myVariable.x,y:t.myVariable.y},playerCount:{value:t.playerCount}})})};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o=(r(2),function(e,t){e.on("update-players",function(r){var n={};for(var o in r){var i=r[o];if(void 0===t[o]&&o!==e.id){var u=(0,a.default)();u.updatePlayerName(i.playerName.name),t[o]=u}n[o]=!0,o!==e.id&&(t[o].myVariable=i.myVariable.value,t[o].playerCount=i.playerCount.value)}for(var l in t)n[l]||delete t[l]})});t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t in e){var r=e[t];if(void 0!==r.target_x){r.sprite.body.x+=.3*(r.target_x-r.sprite.body.x),r.sprite.body.y+=.3*(r.target_y-r.sprite.body.y);var n=r.target_rotation,a=(n-r.sprite.body.rotation)/(2*Math.PI);a-=Math.round(a),a*=2*Math.PI,r.sprite.body.rotation+=.3*a,r.playerName.x+=.3*(r.playerName.target_x-r.playerName.x),r.playerName.y+=.3*(r.playerName.target_y-r.playerName.y),r.speedText.x+=.3*(r.speedText.target_x-r.speedText.x),r.speedText.y+=.3*(r.speedText.target_y-r.speedText.y),r.myVariableText.x+=.3*(r.myVariableText.target_x-r.myVariableText.x),r.myVariableText.y+=.3*(r.myVariableText.target_y-r.myVariableText.y),r.updatePlayerStatusText("playerCount",r.speedText.x,r.speedText.y,r.speedText)}}};t.default=n}]);