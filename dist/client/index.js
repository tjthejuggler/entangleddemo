!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(){if(3==v){l()}if((0,y.default)(S,h,T,g),g.isSetTo<0&&(b=!1,P="superposition",k.innerHTML=P),_.innerHTML="#:"+v,"superposition"==P){var e="",t="";g.isSetTo>0&&(1==v&&g.isSetTo<150||2==v&&g.isSetTo>150)&&(1==a(g.isSetTo)?e="Down Spin ":2==a(g.isSetTo)&&(e="Up Spin "),1==i(g.isSetTo)?t="(X)":2==i(g.isSetTo)?t="(D)":3==i(g.isSetTo)&&(t="(Y)"),P=e+t),k.innerHTML=P}}function a(e){return e%10}function i(e){return Math.round(e/10)%10}function l(){(0,y.default)(S,h,T,g);var e=1;return"otherPlayer"!==T.playerName&&(e=2,v=c()),e}function c(){var e=T.playerName,t=h.replace(/[^\w\s]/gi,"");console.log("myNameWithoutSpecialCharacter ",t);var o=e.replace(/[^\w\s]/gi,"");return console.log("otherPlayersNameWithoutSpecialCharacter",o),t<o?(console.log("returning 1"),1):(console.log("returning 2"),2)}function s(){S.emit("move-player",{playerName:h,toSetTheParticleTo:g.isSetTo})}function u(e,t){var o=document.createElement("button");return o.id=e,o.innerHTML=t,o.style.background="#4FFF8F",o.style.width="200px",o.style.height="200px",o.style.zIndex=1e3,o}function d(e,t,o,n){var r=document.createElement("div");r.style.cssText="position:fixed; color: red",r.style.fontSize=n,r.id=o;var a=e.getBoundingClientRect();return r.style.left=a.left+"px",r.style.top=a.bottom+"px",r.innerHTML=t,r}var p=o(1),m=n(p),f=o(2),y=n(f);console.log("begin program");var S=null,T={playerName:"otherPlayer"},g={isSetTo:-1},h="house",v=3,b=!1,P="";S=io("https://entangleddemo.herokuapp.com/"),(0,m.default)(S,h),function(){console.log("getMyName()"),setTimeout(function(){h=String(S.id),s()},500)}();var x=(setInterval(r,100),u("checkStatusButton","Check Status"));x.onclick=function(){s(),(0,y.default)(S,h,T,g),console.log("String(socket.id)2",String(S.id)),console.log("myName",String(h)),console.log("myUserNumber",v),console.log("playerCount",l()),console.log("otherPlayer.playerName",T.playerName),console.log("theParticle",g.isSetTo)},document.body.appendChild(x);var N=u("measureOnX","measure On X");N.onclick=function(){if(b)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=g.isSetTo<0||3==i(g.isSetTo)?o:a(g.isSetTo),g.isSetTo=100*v+10+e,b=!0,s()}console.log("theParticle",g.isSetTo)},document.body.appendChild(N);var M=u("measureOnD","measure On D");M.onclick=function(){if(b)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=g.isSetTo<0?o:a(g.isSetTo),g.isSetTo=100*v+20+e,b=!0,s()}console.log("theParticle",g.isSetTo)},document.body.appendChild(M);var C=u("measureOnY","measure On Y");C.onclick=function(){if(b)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=g.isSetTo<0||1==i(g.isSetTo)?o:a(g.isSetTo),g.isSetTo=100*v+30+e,b=!0,s()}console.log("theParticle",g.isSetTo)},document.body.appendChild(C);var O=u("createEntangledPair","create entangled particle pair");O.onclick=function(){g.isSetTo=-1,b=!1,P="superposition",k.innerHTML=P,s(),console.log("theParticle",g.isSetTo)},document.body.appendChild(O);var k=d(x,"superposition","measurementReadingText","65px");document.body.appendChild(k);var _=d(k,"#:","userNumberText","35px");document.body.appendChild(_)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,o,n){e.on("connect",function(){e.emit("new-player",{playerName:t})})};t.default=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,o,n){e.on("update-players",function(e){var r=e.playersVar,a=e.theParticleVar;for(var i in r){var l=r[i];l.playerName!==t&&(o.playerName=l.playerName)}n.isSetTo=a})};t.default=n}]);