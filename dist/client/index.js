!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.WINDOW_WIDTH=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t.WINDOW_HEIGHT=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t.WORLD_SIZE={width:1600,height:1200},t.ASSETS_URL="../assets"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.isDown=function(e,t){return e.input.keyboard.isDown(t)},t.createText=function(e,t){return e.add.text(t.x,t.y,"",{fontSize:"12px",fill:"#FFF",align:"center"})}},function(e,t,r){"use strict";function n(){return a}Object.defineProperty(t,"__esModule",{value:!0}),t.getPlayerCount=n,t.default=function(e){return console.log("before const player"),{socket:e,playerName:"orig",myVar:0,drive:function(){},emitPlayerData:function(){e.emit("move-player",{playerName:this.playerName,myVariable:{value:this.myVariable}})},updatePlayerName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.socket.id;this.playerName=String(e)},updatePlayerStatusText:function(e,t,r,n){var o=e[0].toUpperCase()+e.substring(1);this[e]<0?this.newText=0:this.newText=this[e],a=this[e],n.x=t,n.y=r,n.text=o+":::: "+parseInt(this.newText),game.world.bringToTop(n)}}};var o=r(9),a=(function(e){e&&e.__esModule}(o),r(1),0);console.log("before export default function")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){console.log("in newPlayer"),e.on("connect",function(){e.emit("new-player",{playerName:String(e.id),myVar:t})})};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=function(e){return e&&e.__esModule?e:{default:e}}(n),a=(r(1),function(e,t){e.on("update-players",function(r){var n={};for(var a in r){var i=r[a];if(void 0===t[a]&&a!==e.id){var u=(0,o.default)();u.playerName=i.playerName,t[a]=u}n[a]=!0,a!==e.id&&(t[a].myVar=i.myVar)}for(var l in t)n[l]||delete t[l]})});t.default=a},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){(0,c.default)(d,f);var e=0;for(var t in f)e++;return e}var a=(r(0),r(6)),i=(n(a),r(2)),u=(n(i),r(3)),l=n(u),s=r(4),c=n(s);console.log("begin program");var d=null,f={},p=null;d=io("https://entangleddemo.herokuapp.com/"),(0,l.default)(d,1),{print:function(e){return console.log(e)}}.print("mic check"),console.log("mic check 2"),p=d.id,window.onkeydown=function(e){80===e.keyCode&&(console.log("this is a test1"),alert("This is a test1."),console.log("String(socket.id)",String(d.id)),console.log("myName",String(p)),console.log("getOtherPlayers count",o()),alert("This is a test2."+String(d.id)),alert("This is a test3."))}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(0),s=(r(1),r(7)),c=(n(s),r(8)),d=(n(c),r(2)),f=n(d),p=r(3),y=n(p),h=r(4),g=n(h),m=r(10),_=(n(m),null),b={},v=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.player={},e}return i(t,e),u(t,[{key:"preload",value:function(){}},{key:"create",value:function(){l.WORLD_SIZE.width,l.WORLD_SIZE.height;_=io("https://entangleddemo.herokuapp.com/"),this.player=(0,f.default)(_),(0,y.default)(_,this.player),(0,g.default)(_,b);var e=game.add.button(game.world.centerX,game.world.centerY,"ms",function(){alert("Hello Phaser!")},this,0,1,2,3);e.anchor.x=.5,e.anchor.y=.5,e.input.useHandCursor=!0}},{key:"createButton",value:function(){}},{key:"update",value:function(){this.player.drive()}}]),t}(Phaser.State);t.default=v},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=function(e){e.load.crossOrigin="Anonymous",e.stage.backgroundColor="#1E1E1E",e.load.image("asphalt",n.ASSETS_URL+"/sprites/asphalt/asphalt.png"),e.load.image("car",n.ASSETS_URL+"/sprites/car/car.png")};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=n.WORLD_SIZE.width,a=n.WORLD_SIZE.height,i=function(e){e.physics.startSystem(Phaser.Physics.P2JS),e.stage.disableVisibilityChange=!0,e.world.setBounds(0,0,o/4,a/4),u(e)},u=function(e){for(var t=[],r=0;r<=o/64+1;r++)for(var n=0;n<=a/64+1;n++){var i=e.add.sprite(64*r,64*n,"asphalt");t.push(i)}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,r){var n=r.add.sprite(e,t,"car");return r.physics.p2.enable(n,!1),n};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t in e){var r=e[t];if(void 0!==r.target_x){r.sprite.body.x+=.3*(r.target_x-r.sprite.body.x),r.sprite.body.y+=.3*(r.target_y-r.sprite.body.y);var n=r.target_rotation,o=(n-r.sprite.body.rotation)/(2*Math.PI);o-=Math.round(o),o*=2*Math.PI,r.sprite.body.rotation+=.3*o,r.playerName.x+=.3*(r.playerName.target_x-r.playerName.x),r.playerName.y+=.3*(r.playerName.target_y-r.playerName.y),r.speedText.x+=.3*(r.speedText.target_x-r.speedText.x),r.speedText.y+=.3*(r.speedText.target_y-r.speedText.y),r.myVariableText.x+=.3*(r.myVariableText.target_x-r.myVariableText.x),r.myVariableText.y+=.3*(r.myVariableText.target_y-r.myVariableText.y),r.updatePlayerStatusText("playerCount",r.speedText.x,r.speedText.y,r.speedText)}}};t.default=n}]);