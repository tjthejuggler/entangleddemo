!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.WINDOW_WIDTH=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t.WINDOW_HEIGHT=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t.WORLD_SIZE={width:1600,height:1200},t.ASSETS_URL="../assets"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.isDown=function(e,t){return e.input.keyboard.isDown(t)},t.createText=function(e,t){return e.add.text(t.x,t.y,"",{fontSize:"12px",fill:"#FFF",align:"center"})}},function(e,t,r){"use strict";function n(){return a}Object.defineProperty(t,"__esModule",{value:!0}),t.getPlayerCount=n,t.default=function(e){return console.log("before const player"),{socket:e,playerName:"orig",myVar:0,drive:function(){},emitPlayerData:function(){e.emit("move-player",{playerName:myName,myVar:myVar})},updatePlayerName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.socket.id;this.playerName=String(e)},updatePlayerStatusText:function(e,t,r,n){var o=e[0].toUpperCase()+e.substring(1);this[e]<0?this.newText=0:this.newText=this[e],a=this[e],n.x=t,n.y=r,n.text=o+":::: "+parseInt(this.newText),game.world.bringToTop(n)}}};var o=r(9),a=(function(e){e&&e.__esModule}(o),r(1),0);console.log("before export default function")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,r,n){console.log("in newPlayer"),e.on("connect",function(){console.log("more inside newPlayer"),e.emit("new-player",{playerName:t,particle:r,otherPlayerParticleShouldBe:n})})};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,r){e.on("update-players",function(e){for(var n in e){var o=e[n];o.playerName!==t&&(r.playerName=o.playerName,r.particle=o.particle,r.otherPlayerParticleShouldBe=o.otherPlayerParticleShouldBe)}})};t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){(0,p.default)(y,m,f),_.innerHTML=f.particle}function a(){(0,p.default)(y,m,f);var e=1;return"otherPlayer"!==f.playerName&&(e=2),e}function i(){y.emit("move-player",{playerName:m,particle:h,otherPlayerParticleShouldBe:g})}var l=(r(0),r(6)),u=(n(l),r(2)),c=(n(u),r(3)),s=n(c),d=r(4),p=n(d);console.log("begin program");var y=null,f={playerName:"otherPlayer",particle:6,otherPlayerParticleShouldBe:0},h=1,m="house",g=0;y=io("https://entangleddemo.herokuapp.com/"),(0,s.default)(y,m,h,g),function(){console.log("getMyName()"),setTimeout(function(){m=String(y.id),i()},500)}();var b=(setInterval(o,1e3),document.createElement("button"));b.id="changeParticleButton",b.innerHTML="Change myParticle",b.style.background="#4FFF8F",b.style.width="200px",b.style.height="200px",b.style.zIndex=1e3,b.onclick=function(){h=0==h?1:0,console.log("my particle",h),console.log("emitMyData ()"),i()},document.body.appendChild(b);var x=document.createElement("button");x.id="checkStatusButton",x.innerHTML="Check Status",x.style.background="#4FFF8F",x.style.width="200px",x.style.height="200px",x.style.zIndex=1e3,x.onclick=function(){i(),(0,p.default)(y,m,f),console.log("String(socket.id)2",String(y.id)),console.log("myName",String(m)),console.log("my particle",h),console.log("playerCount",a()),console.log("otherPlayer.playerName",f.playerName),console.log("otherPlayer.particle",f.particle)},document.body.appendChild(x);var v=document.createElement("button");v.id="changeOtherPlayerVar",v.innerHTML="Change otherPlayer particle",v.style.background="#4FFF8F",v.style.width="200px",v.style.height="200px",v.style.zIndex=1e3,v.onclick=function(){(0,p.default)(y,m,f),g=0==f.particle?1:0,i(),console.log("otherPlayerParticleShouldBe",g)},document.body.appendChild(v);var _=function(e,t){var r=document.createElement("div");r.style.cssText="position:fixed; color: red";var n=e.getBoundingClientRect();return r.style.left=n.left+"px",r.style.top=n.bottom+"px",r.innerHTML=t,r}(b,"Hello, world!");_.id="myText",_.style.fontSize="100px",document.body.appendChild(_)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(0),c=(r(1),r(7)),s=(n(c),r(8)),d=(n(s),r(2)),p=n(d),y=r(3),f=n(y),h=r(4),m=n(h),g=r(10),b=(n(g),null),x={},v=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.player={},e}return i(t,e),l(t,[{key:"preload",value:function(){}},{key:"create",value:function(){u.WORLD_SIZE.width,u.WORLD_SIZE.height;b=io("https://entangleddemo.herokuapp.com/"),this.player=(0,p.default)(b),(0,f.default)(b,this.player),(0,m.default)(b,x);var e=game.add.button(game.world.centerX,game.world.centerY,"ms",function(){alert("Hello Phaser!")},this,0,1,2,3);e.anchor.x=.5,e.anchor.y=.5,e.input.useHandCursor=!0}},{key:"createButton",value:function(){}},{key:"update",value:function(){this.player.drive()}}]),t}(Phaser.State);t.default=v},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=function(e){e.load.crossOrigin="Anonymous",e.stage.backgroundColor="#1E1E1E",e.load.image("asphalt",n.ASSETS_URL+"/sprites/asphalt/asphalt.png"),e.load.image("car",n.ASSETS_URL+"/sprites/car/car.png")};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=n.WORLD_SIZE.width,a=n.WORLD_SIZE.height,i=function(e){e.physics.startSystem(Phaser.Physics.P2JS),e.stage.disableVisibilityChange=!0,e.world.setBounds(0,0,o/4,a/4),l(e)},l=function(e){for(var t=[],r=0;r<=o/64+1;r++)for(var n=0;n<=a/64+1;n++){var i=e.add.sprite(64*r,64*n,"asphalt");t.push(i)}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,r){var n=r.add.sprite(e,t,"car");return r.physics.p2.enable(n,!1),n};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t in e){var r=e[t];if(void 0!==r.target_x){r.sprite.body.x+=.3*(r.target_x-r.sprite.body.x),r.sprite.body.y+=.3*(r.target_y-r.sprite.body.y);var n=r.target_rotation,o=(n-r.sprite.body.rotation)/(2*Math.PI);o-=Math.round(o),o*=2*Math.PI,r.sprite.body.rotation+=.3*o,r.playerName.x+=.3*(r.playerName.target_x-r.playerName.x),r.playerName.y+=.3*(r.playerName.target_y-r.playerName.y),r.speedText.x+=.3*(r.speedText.target_x-r.speedText.x),r.speedText.y+=.3*(r.speedText.target_y-r.speedText.y),r.myVariableText.x+=.3*(r.myVariableText.target_x-r.myVariableText.x),r.myVariableText.y+=.3*(r.myVariableText.target_y-r.myVariableText.y),r.updatePlayerStatusText("playerCount",r.speedText.x,r.speedText.y,r.speedText)}}};t.default=n}]);