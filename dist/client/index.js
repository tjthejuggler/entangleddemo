!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(){if(3==b){l()}if((0,v.default)(S,g,T,h),h.isSetTo<0&&(C=!1,P="superposition",A.innerHTML=P),B.innerHTML="#:"+b,"superposition"==P){var e="",t="";h.isSetTo>0&&(1==b&&h.isSetTo<150||2==b&&h.isSetTo>150)&&(1==a(h.isSetTo)?e="Down Spin ":2==a(h.isSetTo)&&(e="Up Spin "),1==i(h.isSetTo)?t="(X)":2==i(h.isSetTo)?t="(D)":3==i(h.isSetTo)&&(t="(Y)"),P=e+t),A.innerHTML=P}}function a(e){return e%10}function i(e){return Math.round(e/10)%10}function l(){(0,v.default)(S,g,T,h);var e=1;return"otherPlayer"!==T.playerName&&(e=2,b=u()),e}function u(){var e=T.playerName,t=g.replace(/[^\w\s]/gi,"");console.log("myNameWithoutSpecialCharacter ",t);var o=e.replace(/[^\w\s]/gi,"");return console.log("otherPlayersNameWithoutSpecialCharacter",o),t<o?(console.log("returning 1"),1):(console.log("returning 2"),2)}function c(){S.emit("move-player",{playerName:g,toSetTheParticleTo:h.isSetTo})}function s(e,t){var o=document.createElement("button");return o.id=e,o.innerHTML=t,o.style.background="#4FFF8F",o.style.width="200px",o.style.height="200px",o.style.zIndex=1e3,o}function d(e,t,o,n){var r=document.createElement("div");r.style.cssText="position:fixed; color: red",r.style.fontSize=n,r.id=o;var a=e.getBoundingClientRect();return r.style.left=a.left+"px",r.style.top=a.bottom+"px",r.innerHTML=t,r}function p(e,t,o){var n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("name","radioGroup"),n.setAttribute("id",e);var r=document.createElement("radioLabel");return r.innerHTML=o,document.body.appendChild(r),n}var m=o(1),y=n(m),f=o(2),v=n(f);console.log("begin program");var S=io("https://entangleddemo.herokuapp.com/"),T={playerName:"otherPlayer"},h={isSetTo:-1},g="house",b=3,C=!1,P="";(0,y.default)(S,g),function(){console.log("getMyName()"),setTimeout(function(){g=String(S.id),c()},500)}();var M=(setInterval(r,100),s("checkStatusButton","Check Status"));M.onclick=function(){c(),(0,v.default)(S,g,T,h),console.log("String(socket.id)2",String(S.id)),console.log("myName",String(g)),console.log("myUserNumber",b),console.log("playerCount",l()),console.log("otherPlayer.playerName",T.playerName),console.log("theParticle",h.isSetTo)},document.body.appendChild(M);var x=s("measureOnX","measure On X");x.onclick=function(){if(C)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=h.isSetTo<0||3==i(h.isSetTo)?o:a(h.isSetTo),h.isSetTo=100*b+10+e,C=!0,c()}console.log("theParticle",h.isSetTo)},document.body.appendChild(x);var N=s("measureOnD","measure On D");N.onclick=function(){if(C)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=h.isSetTo<0?o:a(h.isSetTo),h.isSetTo=100*b+20+e,C=!0,c()}console.log("theParticle",h.isSetTo)},document.body.appendChild(N);var H=s("measureOnY","measure On Y");H.onclick=function(){if(C)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=h.isSetTo<0||1==i(h.isSetTo)?o:a(h.isSetTo),h.isSetTo=100*b+30+e,C=!0,c()}console.log("theParticle",h.isSetTo)},document.body.appendChild(H);var O=s("createEntangledPair","create entangled particle pair");O.onclick=function(){h.isSetTo=-1,C=!1,P="superposition",A.innerHTML=P,c(),console.log("theParticle",h.isSetTo)},document.body.appendChild(O);var k=p("radioButtonSimple","radioButtons","Easy");document.body.appendChild(k);var E=p("radioButtonCHSH","radioButtons","CHSH");document.body.appendChild(E);var L=p("radioButtonGHZ","radioButtons","GHZ");document.body.appendChild(L);var A=d(M,"superposition","measurementReadingText","65px");document.body.appendChild(A);var B=d(A,"#:","userNumberText","35px");document.body.appendChild(B);var _=document.createElement("input");_.setAttribute("type","radio"),_.setAttribute("name","testing"),_.setAttribute("id","first value");var w=document.createElement("mylabel");w.innerHTML+="oops",document.body.appendChild(w),document.body.appendChild(_);var j=document.createElement("input");j.setAttribute("type","radio"),j.setAttribute("name","testing"),j.setAttribute("id","second value"),document.body.appendChild(j);var D=document.createElement("mylabel");D.innerHTML+="oops2",document.body.appendChild(D)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,o,n){e.on("connect",function(){e.emit("new-player",{playerName:t})})};t.default=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,o,n){e.on("update-players",function(e){var r=e.playersVar,a=e.theParticleVar;for(var i in r){var l=r[i];l.playerName!==t&&(o.playerName=l.playerName)}n.isSetTo=a})};t.default=n}]);