!function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){if(3==v){c()}if(b.playerLabName!==h&&(b.playerName=""),(0,m.default)(f,g,h,b,T),T.isSetTo<0&&(S=!1,N="superposition",x.innerHTML=N),M.innerHTML="number:"+v,L.innerHTML="myName:"+g,C.innerHTML="otherPlayerName:"+b.playerName,P.innerHTML="myLabName:"+h,"superposition"==N){var e="",t="";T.isSetTo>0&&(1==v&&T.isSetTo<150||2==v&&T.isSetTo>150)&&(1==r(T.isSetTo)?e="Down Spin ":2==r(T.isSetTo)&&(e="Up Spin "),1==i(T.isSetTo)?t="(X)":2==i(T.isSetTo)?t="(D)":3==i(T.isSetTo)&&(t="(Y)"),N=e+t),x.innerHTML=N}}function r(e){return e%10}function i(e){return Math.round(e/10)%10}function l(){var e=b.playerName,t=g.replace(/[^\w\s]/gi,"");console.log("myNameWithoutSpecialCharacter ",t);var o=e.replace(/[^\w\s]/gi,"");return console.log("otherPlayersNameWithoutSpecialCharacter",o),t<o?(console.log("returning 1"),1):(console.log("returning 2"),2)}function c(){(0,m.default)(f,g,h,b,T);var e=1;return"otherPlayer"!==b.playerName&&(e=2,v=l()),e}function u(){f.emit("move-player",{playerName:g,playerLabName:h,toSetTheParticleTo:T.isSetTo})}var s=o(1),d=n(s),p=o(2),m=n(p),y=o(3);console.log("begin program");var f=io("https://entangleddemo.herokuapp.com/"),b={playerName:"otherPlayer",playerLabName:"austinLab"},T={isSetTo:-1},g="house",h="austinLab",v=3,S=!1,N="";(0,d.default)(f,g),function(){console.log("getMyName()"),setTimeout(function(){g=String(f.id),u()},500)}();var x=(setInterval(a,100),(0,y.createMessageUnder)(k,"superposition","measurementReadingText","65px"));document.body.appendChild(x);var M=(0,y.createMessageUnder)(x,"user number:","userNumberText","35px");document.body.appendChild(M);var L=(0,y.createMessageUnder)(x,"username:","userNameText","35px");document.body.appendChild(L);var C=(0,y.createMessageUnder)(x,"other username:","otherUserNameText","35px");document.body.appendChild(C);var P=(0,y.createMessageUnder)(x,"My Lab name:","myLabNameText","35px");document.body.appendChild(P);var B=document.createElement("input");B.type="text",B.name="labText",B.id="labText",document.body.appendChild(B);var H=(0,y.createButton)("setLab","Set Lab Name","200px");H.onclick=function(){h=document.getElementById("labText").value,console.log("lab set as",h),u()},document.body.appendChild(H);var k=(0,y.createButton)("checkStatusButton","Check Status","200px");k.onclick=function(){u(),(0,m.default)(f,g,h,b,T),console.log("String(socket.id)2",String(f.id)),console.log("myName",String(g)),console.log("myUserNumber",v),console.log("playerCount",c()),console.log("otherPlayer.playerName",b.playerName),console.log("theParticle",T.isSetTo)},document.body.appendChild(k);var O=(0,y.createButton)("measureOnX","measure On X","200px");O.onclick=function(){if(S)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=T.isSetTo<0||3==i(T.isSetTo)?o:r(T.isSetTo),T.isSetTo=100*v+10+e,S=!0,u()}console.log("theParticle",T.isSetTo)},document.body.appendChild(O);var _=(0,y.createButton)("measureOnD","measure On D","200px");_.onclick=function(){if(S)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=T.isSetTo<0?o:r(T.isSetTo),T.isSetTo=100*v+20+e,S=!0,u()}console.log("theParticle",T.isSetTo)},document.body.appendChild(_);var U=(0,y.createButton)("measureOnY","measure On Y","200px");U.onclick=function(){if(S)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=T.isSetTo<0||1==i(T.isSetTo)?o:r(T.isSetTo),T.isSetTo=100*v+30+e,S=!0,u()}console.log("theParticle",T.isSetTo)},document.body.appendChild(U);var E=(0,y.createButton)("createEntangledPair","create entangled particle pair","200px");E.onclick=function(){T.isSetTo=-1,S=!1,N="superposition",x.innerHTML=N,u(),console.log("theParticle",T.isSetTo)},document.body.appendChild(E);var w=(0,y.createRadioButton)("radioButtonSimple","radioButtons","Easy");w.onclick=function(){console.log("simple")},document.body.appendChild(w);var j=(0,y.createRadioButton)("radioButtonCHSH","radioButtons","CHSH");j.onclick=function(){console.log("CHSH")},document.body.appendChild(j);var R=(0,y.createRadioButton)("radioButtonGHZ","radioButtons","GHZ");document.body.appendChild(R)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,o){e.on("connect",function(){e.emit("new-player",{playerName:t,playerLabName:o})})};t.default=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,o,n,a){e.on("update-players",function(e){var r=e.playersVar,i=e.theParticleVar;for(var l in r){var c=r[l];c.playerLabName==o&&c.playerName!==t&&(n.playerName=c.playerName,n.playerLabName=c.playerLabName,a.isSetTo=i)}})};t.default=n},function(e,t,o){"use strict";function n(e,t,o){var n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("name","radioGroup"),n.setAttribute("id",e);var a=document.createElement("radioLabel");return a.innerHTML=o,document.body.appendChild(a),n}function a(e,t,o){var n=document.createElement("button");return n.id=e,n.innerHTML=t,n.style.background="#4FFF8F",n.style.width=o,n.style.height=o,n.style.zIndex=1e3,n}function r(e,t,o,n){var a=document.createElement("div");return a.style.cssText="color: red",a.style.fontSize=n,a.id=o,a.innerHTML=t,a}Object.defineProperty(t,"__esModule",{value:!0}),t.createRadioButton=n,t.createButton=a,t.createMessageUnder=r}]);