!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.WINDOW_WIDTH=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t.WINDOW_HEIGHT=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t.WORLD_SIZE={width:1600,height:1200},t.ASSETS_URL="../assets"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.isDown=function(e,t){return e.input.keyboard.isDown(t)},t.createText=function(e,t){return e.add.text(t.x,t.y,"",{fontSize:"12px",fill:"#FFF",align:"center"})}},function(e,t,n){"use strict";function r(){return a}Object.defineProperty(t,"__esModule",{value:!0}),t.getPlayerCount=r,t.default=function(e){return console.log("before const player"),{socket:e,playerName:"orig",myVar:0,drive:function(){},emitPlayerData:function(){e.emit("move-player",{playerName:myName,myVar:myVar})},updatePlayerName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.socket.id;this.playerName=String(e)},updatePlayerStatusText:function(e,t,n,r){var o=e[0].toUpperCase()+e.substring(1);this[e]<0?this.newText=0:this.newText=this[e],a=this[e],r.x=t,r.y=n,r.text=o+":::: "+parseInt(this.newText),game.world.bringToTop(r)}}};var o=n(9),a=(function(e){e&&e.__esModule}(o),n(1),0);console.log("before export default function")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n,r){console.log("in newPlayer"),e.on("connect",function(){console.log("more inside newPlayer"),e.emit("new-player",{playerName:t,particle:n,otherPlayerParticleShouldBe:r})})};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n,r){e.on("update-players",function(e){var o=e.playersVar,a=e.theParticleVar;for(var i in o){var l=o[i];l.playerName!==t&&(n.playerName=l.playerName,n.particle=l.particle,n.otherPlayerParticleShouldBe=l.otherPlayerParticleShouldBe)}r.isSetTo=a})};t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){(0,y.default)(f,b,h,m),F.innerHTML=m.isSetTo}function a(){(0,y.default)(f,b,h,m);var e=1;return"otherPlayer"!==h.playerName&&(e=2,v=i()),e}function i(){var e=h.playerName;return b.replace(/\D/g,"")<e.replace(/\D/g,"")?1:2}function l(){f.emit("move-player",{playerName:b,particle:g,otherPlayerParticleShouldBe:x,theParticle:m.isSetTo})}var u=(n(0),n(6)),c=(r(u),n(2)),s=(r(c),n(3)),d=r(s),p=n(4),y=r(p);console.log("begin program");var f=null,h={playerName:"otherPlayer",particle:6,otherPlayerParticleShouldBe:0},m={isSetTo:-1},g=1,b="house",x=0,v=3;f=io("https://entangleddemo.herokuapp.com/"),(0,d.default)(f,b,g,x),function(){console.log("getMyName()"),setTimeout(function(){b=String(f.id),l()},500)}();var _=(setInterval(o,1e3),document.createElement("button"));_.id="changeParticleButton",_.innerHTML="Change myParticle",_.style.background="#4FFF8F",_.style.width="200px",_.style.height="200px",_.style.zIndex=1e3,_.onclick=function(){g=0==g?1:0,console.log("my particle",g),console.log("emitMyData ()"),l()},document.body.appendChild(_);var P=document.createElement("button");P.id="checkStatusButton",P.innerHTML="Check Status",P.style.background="#4FFF8F",P.style.width="200px",P.style.height="200px",P.style.zIndex=1e3,P.onclick=function(){l(),(0,y.default)(f,b,h,m),console.log("String(socket.id)2",String(f.id)),console.log("myName",String(b)),console.log("my particle",g),console.log("playerCount",a()),console.log("otherPlayer.playerName",h.playerName),console.log("otherPlayer.particle",h.particle),console.log("theParticle",m.isSetTo)},document.body.appendChild(P);var T=document.createElement("button");T.id="changeOtherPlayerVar",T.innerHTML="Change otherPlayer particle",T.style.background="#4FFF8F",T.style.width="200px",T.style.height="200px",T.style.zIndex=1e3,T.onclick=function(){(0,y.default)(f,b,h,m),x=0==h.particle?1:0,l(),console.log("otherPlayerParticleShouldBe",x)},document.body.appendChild(T);var S=document.createElement("button");S.id="measureOnX",S.innerHTML="measure On X",S.style.background="#4FFF8F",S.style.width="200px",S.style.height="200px",S.style.zIndex=1e3,S.onclick=function(){m.isSetTo=100*v+10+1,l()},document.body.appendChild(S);var O=document.createElement("button");O.id="measureOnD",O.innerHTML="measure On D",O.style.background="#4FFF8F",O.style.width="200px",O.style.height="200px",O.style.zIndex=1e3,O.onclick=function(){m.isSetTo=100*v+20+1,l()},document.body.appendChild(O);var w=document.createElement("button");w.id="measureOnY",w.innerHTML="measure On Y",w.style.background="#4FFF8F",w.style.width="200px",w.style.height="200px",w.style.zIndex=1e3,w.onclick=function(){m.isSetTo=100*v+30+1,l()},document.body.appendChild(w);var F=function(e,t){var n=document.createElement("div");n.style.cssText="position:fixed; color: red";var r=e.getBoundingClientRect();return n.style.left=r.left+"px",n.style.top=r.bottom+"px",n.innerHTML=t,n}(_,"Hello, world!");F.id="myText",F.style.fontSize="100px",document.body.appendChild(F)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=(n(1),n(7)),s=(r(c),n(8)),d=(r(s),n(2)),p=r(d),y=n(3),f=r(y),h=n(4),m=r(h),g=n(10),b=(r(g),null),x={},v=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.player={},e}return i(t,e),l(t,[{key:"preload",value:function(){}},{key:"create",value:function(){u.WORLD_SIZE.width,u.WORLD_SIZE.height;b=io("https://entangleddemo.herokuapp.com/"),this.player=(0,p.default)(b),(0,f.default)(b,this.player),(0,m.default)(b,x);var e=game.add.button(game.world.centerX,game.world.centerY,"ms",function(){alert("Hello Phaser!")},this,0,1,2,3);e.anchor.x=.5,e.anchor.y=.5,e.input.useHandCursor=!0}},{key:"createButton",value:function(){}},{key:"update",value:function(){this.player.drive()}}]),t}(Phaser.State);t.default=v},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){e.load.crossOrigin="Anonymous",e.stage.backgroundColor="#1E1E1E",e.load.image("asphalt",r.ASSETS_URL+"/sprites/asphalt/asphalt.png"),e.load.image("car",r.ASSETS_URL+"/sprites/car/car.png")};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.WORLD_SIZE.width,a=r.WORLD_SIZE.height,i=function(e){e.physics.startSystem(Phaser.Physics.P2JS),e.stage.disableVisibilityChange=!0,e.world.setBounds(0,0,o/4,a/4),l(e)},l=function(e){for(var t=[],n=0;n<=o/64+1;n++)for(var r=0;r<=a/64+1;r++){var i=e.add.sprite(64*n,64*r,"asphalt");t.push(i)}};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){var r=n.add.sprite(e,t,"car");return n.physics.p2.enable(r,!1),r};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){for(var t in e){var n=e[t];if(void 0!==n.target_x){n.sprite.body.x+=.3*(n.target_x-n.sprite.body.x),n.sprite.body.y+=.3*(n.target_y-n.sprite.body.y);var r=n.target_rotation,o=(r-n.sprite.body.rotation)/(2*Math.PI);o-=Math.round(o),o*=2*Math.PI,n.sprite.body.rotation+=.3*o,n.playerName.x+=.3*(n.playerName.target_x-n.playerName.x),n.playerName.y+=.3*(n.playerName.target_y-n.playerName.y),n.speedText.x+=.3*(n.speedText.target_x-n.speedText.x),n.speedText.y+=.3*(n.speedText.target_y-n.speedText.y),n.myVariableText.x+=.3*(n.myVariableText.target_x-n.myVariableText.x),n.myVariableText.y+=.3*(n.myVariableText.target_y-n.myVariableText.y),n.updatePlayerStatusText("playerCount",n.speedText.x,n.speedText.y,n.speedText)}}};t.default=r}]);