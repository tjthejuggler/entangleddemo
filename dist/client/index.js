!function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){if(3==b){c()}if((0,m.default)(f,T,g,S),S.isSetTo<0&&(h=!1,x="superposition",E.innerHTML=x),w.innerHTML="#:"+b,"superposition"==x){var e="",t="";S.isSetTo>0&&(1==b&&S.isSetTo<150||2==b&&S.isSetTo>150)&&(1==r(S.isSetTo)?e="Down Spin ":2==r(S.isSetTo)&&(e="Up Spin "),1==i(S.isSetTo)?t="(X)":2==i(S.isSetTo)?t="(D)":3==i(S.isSetTo)&&(t="(Y)"),x=e+t),E.innerHTML=x}}function r(e){return e%10}function i(e){return Math.round(e/10)%10}function l(){var e=g.playerName,t=T.replace(/[^\w\s]/gi,"");console.log("myNameWithoutSpecialCharacter ",t);var o=e.replace(/[^\w\s]/gi,"");return console.log("otherPlayersNameWithoutSpecialCharacter",o),t<o?(console.log("returning 1"),1):(console.log("returning 2"),2)}function c(){(0,m.default)(f,T,g,S);var e=1;return"otherPlayer"!==g.playerName&&(e=2,b=l()),e}function u(){f.emit("move-player",{playerName:T,playerLabName:v,toSetTheParticleTo:S.isSetTo})}var s=o(1),d=n(s),p=o(2),m=n(p),y=o(3);console.log("begin program");var f=io("https://entangleddemo.herokuapp.com/"),g={playerName:"otherPlayer"},S={isSetTo:-1},T="house",v="austinLab",b=3,h=!1,x="";(0,d.default)(f,T),function(){console.log("getMyName()"),setTimeout(function(){T=String(f.id),u()},500)}();var C=(setInterval(a,100),document.createElement("input"));C.type="text",C.name="labText",C.id="labText",document.body.appendChild(C);var N=(0,y.createButton)("setLab","Set Lab Name","200px");N.onclick=function(){v=document.getElementById("labText").value,console.log("lab set as",v)},document.body.appendChild(N);var B=(0,y.createButton)("checkStatusButton","Check Status","200px");B.onclick=function(){u(),(0,m.default)(f,T,g,S),console.log("String(socket.id)2",String(f.id)),console.log("myName",String(T)),console.log("myUserNumber",b),console.log("playerCount",c()),console.log("otherPlayer.playerName",g.playerName),console.log("theParticle",S.isSetTo)},document.body.appendChild(B);var M=(0,y.createButton)("measureOnX","measure On X","200px");M.onclick=function(){if(h)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=S.isSetTo<0||3==i(S.isSetTo)?o:r(S.isSetTo),S.isSetTo=100*b+10+e,h=!0,u()}console.log("theParticle",S.isSetTo)},document.body.appendChild(M);var P=(0,y.createButton)("measureOnD","measure On D","200px");P.onclick=function(){if(h)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=S.isSetTo<0?o:r(S.isSetTo),S.isSetTo=100*b+20+e,h=!0,u()}console.log("theParticle",S.isSetTo)},document.body.appendChild(P);var H=(0,y.createButton)("measureOnY","measure On Y","200px");H.onclick=function(){if(h)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=S.isSetTo<0||1==i(S.isSetTo)?o:r(S.isSetTo),S.isSetTo=100*b+30+e,h=!0,u()}console.log("theParticle",S.isSetTo)},document.body.appendChild(H);var L=(0,y.createButton)("createEntangledPair","create entangled particle pair","200px");L.onclick=function(){S.isSetTo=-1,h=!1,x="superposition",E.innerHTML=x,u(),console.log("theParticle",S.isSetTo)},document.body.appendChild(L);var k=(0,y.createRadioButton)("radioButtonSimple","radioButtons","Easy");k.onclick=function(){console.log("simple")},document.body.appendChild(k);var O=(0,y.createRadioButton)("radioButtonCHSH","radioButtons","CHSH");O.onclick=function(){console.log("CHSH")},document.body.appendChild(O);var _=(0,y.createRadioButton)("radioButtonGHZ","radioButtons","GHZ");document.body.appendChild(_);var E=(0,y.createMessageUnder)(B,"superposition","measurementReadingText","65px");document.body.appendChild(E);var w=(0,y.createMessageUnder)(E,"#:","userNumberText","35px");document.body.appendChild(w)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,o){e.on("connect",function(){e.emit("new-player",{playerName:t,playerLabName:o})})};t.default=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,o,n){e.on("update-players",function(e){var a=e.playersVar,r=e.theParticleVar;for(var i in a){var l=a[i];l.playeLabName==myLabName&&l.playerName!==t&&(o.playerName=l.playerName)}n.isSetTo=r})};t.default=n},function(e,t,o){"use strict";function n(e,t,o){var n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("name","radioGroup"),n.setAttribute("id",e);var a=document.createElement("radioLabel");return a.innerHTML=o,document.body.appendChild(a),n}function a(e,t,o){var n=document.createElement("button");return n.id=e,n.innerHTML=t,n.style.background="#4FFF8F",n.style.width=o,n.style.height=o,n.style.zIndex=1e3,n}function r(e,t,o,n){var a=document.createElement("div");a.style.cssText="position:fixed; color: red",a.style.fontSize=n,a.id=o;var r=e.getBoundingClientRect();return a.style.left=r.left+"px",a.style.top=r.bottom+"px",a.innerHTML=t,a}Object.defineProperty(t,"__esModule",{value:!0}),t.createRadioButton=n,t.createButton=a,t.createMessageUnder=r}]);