!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.WINDOW_WIDTH=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t.WINDOW_HEIGHT=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t.WORLD_SIZE={width:1600,height:1200},t.ASSETS_URL="../assets"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.isDown=function(e,t){return e.input.keyboard.isDown(t)},t.createText=function(e,t){return e.add.text(t.x,t.y,"",{fontSize:"12px",fill:"#FFF",align:"center"})}},function(e,t,r){"use strict";function n(){return i}Object.defineProperty(t,"__esModule",{value:!0}),t.getPlayerCount=n,t.default=function(e){return console.log("before const player"),{socket:e,playerName:"orig",myVariable:0,drive:function(){window.onkeydown=function(e){80===e.keyCode&&(console.log("New player joined with state:",this),console.log("this is a test0.5"),alert("This is a test1."),alert("This is a test1.5"),console.log("this.socket.id",String(this.socket.id)),alert("This is a test2."+String(this.socket.id)),alert("This is a test2.",this.playerName),alert("This is a test3."))},this.playerName=String(this.socket.id)},emitPlayerData:function(){e.emit("move-player",{playerName:this.playerName,myVariable:{value:this.myVariable}})},updatePlayerName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.socket.id;this.playerName=String(e)},updatePlayerStatusText:function(e,t,r,n){var a=e[0].toUpperCase()+e.substring(1);this[e]<0?this.newText=0:this.newText=this[e],i=this[e],n.x=t,n.y=r,n.text=a+":::: "+parseInt(this.newText),game.world.bringToTop(n)}}};var a=r(8),i=(function(e){e&&e.__esModule}(a),r(1),0);console.log("before export default function")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){console.log("in newPlayer"),e.on("connect",function(){e.emit("new-player",{playerName:String(e.id),myVar:t})})};t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=(r(0),r(5)),i=(n(a),r(2)),o=(n(i),r(3)),s=n(o),l=null;l=io("https://entangleddemo.herokuapp.com/"),(0,s.default)(l,1),{print:function(e){return console.log(e)}}.print("mic check"),console.log("mic check 2"),window.onkeydown=function(e){80===e.keyCode&&(console.log("this is a test0.5"),alert("This is a test1."),alert("This is a test1.5"),console.log("this.socket.id",String(l.id)),alert("This is a test2."+String(l.id)),alert("This is a test2.",playerName),alert("This is a test3."))}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(0),u=(r(1),r(6)),c=(n(u),r(7)),d=(n(c),r(2)),f=n(d),p=r(3),y=n(p),h=r(9),m=n(h),g=r(10),b=(n(g),null),_={},v=function(e){function t(){a(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.player={},e}return o(t,e),s(t,[{key:"preload",value:function(){}},{key:"create",value:function(){l.WORLD_SIZE.width,l.WORLD_SIZE.height;b=io("https://entangleddemo.herokuapp.com/"),this.player=(0,f.default)(b),(0,y.default)(b,this.player),(0,m.default)(b,_);var e=game.add.button(game.world.centerX,game.world.centerY,"ms",function(){alert("Hello Phaser!")},this,0,1,2,3);e.anchor.x=.5,e.anchor.y=.5,e.input.useHandCursor=!0}},{key:"createButton",value:function(){}},{key:"update",value:function(){this.player.drive()}}]),t}(Phaser.State);t.default=v},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){e.load.crossOrigin="Anonymous",e.stage.backgroundColor="#1E1E1E",e.load.image("asphalt",n.ASSETS_URL+"/sprites/asphalt/asphalt.png"),e.load.image("car",n.ASSETS_URL+"/sprites/car/car.png")};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=n.WORLD_SIZE.width,i=n.WORLD_SIZE.height,o=function(e){e.physics.startSystem(Phaser.Physics.P2JS),e.stage.disableVisibilityChange=!0,e.world.setBounds(0,0,a/4,i/4),s(e)},s=function(e){for(var t=[],r=0;r<=a/64+1;r++)for(var n=0;n<=i/64+1;n++){var o=e.add.sprite(64*r,64*n,"asphalt");t.push(o)}};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,r){var n=r.add.sprite(e,t,"car");return r.physics.p2.enable(n,!1),n};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),a=function(e){return e&&e.__esModule?e:{default:e}}(n),i=(r(1),function(e,t){e.on("update-players",function(r){var n={};for(var i in r){var o=r[i];if(void 0===t[i]&&i!==e.id){var s=(0,a.default)();s.updatePlayerName(o.playerName.name),t[i]=s}n[i]=!0,i!==e.id&&(t[i].myVariable=o.myVariable.value)}for(var l in t)n[l]||delete t[l]})});t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t in e){var r=e[t];if(void 0!==r.target_x){r.sprite.body.x+=.3*(r.target_x-r.sprite.body.x),r.sprite.body.y+=.3*(r.target_y-r.sprite.body.y);var n=r.target_rotation,a=(n-r.sprite.body.rotation)/(2*Math.PI);a-=Math.round(a),a*=2*Math.PI,r.sprite.body.rotation+=.3*a,r.playerName.x+=.3*(r.playerName.target_x-r.playerName.x),r.playerName.y+=.3*(r.playerName.target_y-r.playerName.y),r.speedText.x+=.3*(r.speedText.target_x-r.speedText.x),r.speedText.y+=.3*(r.speedText.target_y-r.speedText.y),r.myVariableText.x+=.3*(r.myVariableText.target_x-r.myVariableText.x),r.myVariableText.y+=.3*(r.myVariableText.target_y-r.myVariableText.y),r.updatePlayerStatusText("playerCount",r.speedText.x,r.speedText.y,r.speedText)}}};t.default=n}]);