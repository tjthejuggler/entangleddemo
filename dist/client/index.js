!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";function n(){if(3==g){(0,u.getOtherPlayersCount)()}if(getOtherPlayerInfo(d,y,p,m),m.isSetTo<0&&(h=!1,T="superposition",k.innerHTML=T),N.innerHTML="#:"+g,"superposition"==T){var e="",t="";m.isSetTo>0&&(1==g&&m.isSetTo<150||2==g&&m.isSetTo>150)&&(1==r(m.isSetTo)?e="Down Spin ":2==r(m.isSetTo)&&(e="Up Spin "),1==a(m.isSetTo)?t="(X)":2==a(m.isSetTo)?t="(D)":3==a(m.isSetTo)&&(t="(Y)"),T=e+t),k.innerHTML=T}}function r(e){return e%10}function a(e){return Math.round(e/10)%10}function i(){d.emit("move-player",{playerName:y,toSetTheParticleTo:m.isSetTo})}var l=o(1),c=function(e){return e&&e.__esModule?e:{default:e}}(l),u=o(3),s=o(4);console.log("begin program");var d=io("https://entangleddemo.herokuapp.com/"),p={playerName:"otherPlayer"},m={isSetTo:-1},y="house",f="austinLab",g=3,h=!1,T="";(0,c.default)(d,y),function(){console.log("getMyName()"),setTimeout(function(){y=String(d.id),i()},500)}();var S=(setInterval(n,100),document.createElement("input"));S.type="text",S.name="labText",S.id="labText",document.body.appendChild(S);var b=(0,s.createButton)("setLab","Set Lab Name","200px");b.onclick=function(){f=document.getElementById("labText").value,console.log("lab set as",f)},document.body.appendChild(b);var v=(0,s.createButton)("checkStatusButton","Check Status","200px");v.onclick=function(){i(),getOtherPlayerInfo(d,y,p,m),console.log("String(socket.id)2",String(d.id)),console.log("myName",String(y)),console.log("myUserNumber",g),console.log("playerCount",(0,u.getOtherPlayersCount)()),console.log("otherPlayer.playerName",p.playerName),console.log("theParticle",m.isSetTo)},document.body.appendChild(v);var P=(0,s.createButton)("measureOnX","measure On X","200px");P.onclick=function(){if(h)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=m.isSetTo<0||3==a(m.isSetTo)?o:r(m.isSetTo),m.isSetTo=100*g+10+e,h=!0,i()}console.log("theParticle",m.isSetTo)},document.body.appendChild(P);var x=(0,s.createButton)("measureOnD","measure On D","200px");x.onclick=function(){if(h)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=m.isSetTo<0?o:r(m.isSetTo),m.isSetTo=100*g+20+e,h=!0,i()}console.log("theParticle",m.isSetTo)},document.body.appendChild(x);var C=(0,s.createButton)("measureOnY","measure On Y","200px");C.onclick=function(){if(h)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=m.isSetTo<0||1==a(m.isSetTo)?o:r(m.isSetTo),m.isSetTo=100*g+30+e,h=!0,i()}console.log("theParticle",m.isSetTo)},document.body.appendChild(C);var M=(0,s.createButton)("createEntangledPair","create entangled particle pair","200px");M.onclick=function(){m.isSetTo=-1,h=!1,T="superposition",k.innerHTML=T,i(),console.log("theParticle",m.isSetTo)},document.body.appendChild(M);var B=(0,s.createRadioButton)("radioButtonSimple","radioButtons","Easy");B.onclick=function(){console.log("simple")},document.body.appendChild(B);var O=(0,s.createRadioButton)("radioButtonCHSH","radioButtons","CHSH");O.onclick=function(){console.log("CHSH")},document.body.appendChild(O);var H=(0,s.createRadioButton)("radioButtonGHZ","radioButtons","GHZ");document.body.appendChild(H);var k=(0,s.createMessageUnder)(v,"superposition","measurementReadingText","65px");document.body.appendChild(k);var N=(0,s.createMessageUnder)(k,"#:","userNumberText","35px");document.body.appendChild(N)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,o,n){e.on("connect",function(){e.emit("new-player",{playerName:t})})};t.default=n},,function(e,t,o){"use strict";function n(){getOtherPlayerInfo(socket,myName,otherPlayer,theParticle);var e=1;return"otherPlayer"!==otherPlayer.playerName&&(e=2,myUserNumber=determineMyUserNumber()),e}Object.defineProperty(t,"__esModule",{value:!0}),t.getOtherPlayersCount=n},function(e,t,o){"use strict";function n(e,t,o){var n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("name","radioGroup"),n.setAttribute("id",e);var r=document.createElement("radioLabel");return r.innerHTML=o,document.body.appendChild(r),n}function r(e,t,o){var n=document.createElement("button");return n.id=e,n.innerHTML=t,n.style.background="#4FFF8F",n.style.width=o,n.style.height=o,n.style.zIndex=1e3,n}function a(e,t,o,n){var r=document.createElement("div");r.style.cssText="position:fixed; color: red",r.style.fontSize=n,r.id=o;var a=e.getBoundingClientRect();return r.style.left=a.left+"px",r.style.top=a.bottom+"px",r.innerHTML=t,r}Object.defineProperty(t,"__esModule",{value:!0}),t.createRadioButton=n,t.createButton=r,t.createMessageUnder=a}]);