!function(e){function t(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,a){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(){if(3==v){c()}if(f.playerLabName!==h&&(f.playerName=""),(0,m.default)(b,T,h,f,g),console.log("otherPlayer.playerLabName",f.playerLabName),console.log("myLabName",h),g.isSetTo<0&&(S=!1,N="superposition",L.innerHTML=N),x.innerHTML="number:"+v,M.innerHTML="myName:"+T,C.innerHTML="otherPlayerName:"+f.playerName,P.innerHTML="myLabName:"+h,"superposition"==N){var e="",t="";g.isSetTo>0&&(1==v&&g.isSetTo<150||2==v&&g.isSetTo>150)&&(1==r(g.isSetTo)?e="Down Spin ":2==r(g.isSetTo)&&(e="Up Spin "),1==i(g.isSetTo)?t="(X)":2==i(g.isSetTo)?t="(D)":3==i(g.isSetTo)&&(t="(Y)"),N=e+t),L.innerHTML=N}}function r(e){return e%10}function i(e){return Math.round(e/10)%10}function l(){var e=f.playerName,t=T.replace(/[^\w\s]/gi,"");console.log("myNameWithoutSpecialCharacter ",t);var o=e.replace(/[^\w\s]/gi,"");return console.log("otherPlayersNameWithoutSpecialCharacter",o),t<o?(console.log("returning 1"),1):(console.log("returning 2"),2)}function c(){(0,m.default)(b,T,h,f,g);var e=1;return"otherPlayer"!==f.playerName&&(e=2,v=l()),e}function u(){b.emit("move-player",{playerName:T,playerLabName:h,toSetTheParticleTo:g.isSetTo})}var s=o(1),d=a(s),p=o(2),m=a(p),y=o(3);console.log("begin program");var b=io("https://entangleddemo.herokuapp.com/"),f={playerName:"otherPlayer",playerLabName:"austinLab"},g={isSetTo:-1},T="house",h="austinLab",v=3,S=!1,N="";(0,d.default)(b,T),function(){console.log("getMyName()"),setTimeout(function(){T=String(b.id),u()},500)}();var L=(setInterval(n,100),(0,y.createMessageUnder)(k,"superposition","measurementReadingText","65px"));document.body.appendChild(L);var x=(0,y.createMessageUnder)(L,"user number:","userNumberText","35px");document.body.appendChild(x);var M=(0,y.createMessageUnder)(L,"username:","userNameText","35px");document.body.appendChild(M);var C=(0,y.createMessageUnder)(L,"other username:","otherUserNameText","35px");document.body.appendChild(C);var P=(0,y.createMessageUnder)(L,"My Lab name:","myLabNameText","35px");document.body.appendChild(P);var B=document.createElement("input");B.type="text",B.name="labText",B.id="labText",document.body.appendChild(B);var H=(0,y.createButton)("setLab","Set Lab Name","200px");H.onclick=function(){h=document.getElementById("labText").value,console.log("lab set as",h),u()},document.body.appendChild(H);var k=(0,y.createButton)("checkStatusButton","Check Status","200px");k.onclick=function(){u(),(0,m.default)(b,T,h,f,g),console.log("String(socket.id)2",String(b.id)),console.log("myName",String(T)),console.log("myUserNumber",v),console.log("playerCount",c()),console.log("otherPlayer.playerName",f.playerName),console.log("theParticle",g.isSetTo)},document.body.appendChild(k);var O=(0,y.createButton)("measureOnX","measure On X","200px");O.onclick=function(){if(S)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=g.isSetTo<0||3==i(g.isSetTo)?o:r(g.isSetTo),g.isSetTo=100*v+10+e,S=!0,u()}console.log("theParticle",g.isSetTo)},document.body.appendChild(O);var _=(0,y.createButton)("measureOnD","measure On D","200px");_.onclick=function(){if(S)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=g.isSetTo<0?o:r(g.isSetTo),g.isSetTo=100*v+20+e,S=!0,u()}console.log("theParticle",g.isSetTo)},document.body.appendChild(_);var U=(0,y.createButton)("measureOnY","measure On Y","200px");U.onclick=function(){if(S)alert("Particle already measured.");else{var e=0,t=Math.random();console.log(t);var o=t<.5?1:2;e=g.isSetTo<0||1==i(g.isSetTo)?o:r(g.isSetTo),g.isSetTo=100*v+30+e,S=!0,u()}console.log("theParticle",g.isSetTo)},document.body.appendChild(U);var E=(0,y.createButton)("createEntangledPair","create entangled particle pair","200px");E.onclick=function(){g.isSetTo=-1,S=!1,N="superposition",L.innerHTML=N,u(),console.log("theParticle",g.isSetTo)},document.body.appendChild(E);var w=(0,y.createRadioButton)("radioButtonSimple","radioButtons","Easy");w.onclick=function(){console.log("simple")},document.body.appendChild(w);var j=(0,y.createRadioButton)("radioButtonCHSH","radioButtons","CHSH");j.onclick=function(){console.log("CHSH")},document.body.appendChild(j);var R=(0,y.createRadioButton)("radioButtonGHZ","radioButtons","GHZ");document.body.appendChild(R)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t,o){e.on("connect",function(){e.emit("new-player",{playerName:t,playerLabName:o})})};t.default=a},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t,o,a,n){e.on("update-players",function(e){var r=e.playersVar,i=e.theParticleVar;for(var l in r){var c=r[l];console.log("myLabName",o),console.log("data.playerLabName",c.playerLabName),c.playerLabName==o&&c.playerName!==t&&(a.playerName=c.playerName,n.isSetTo=i)}})};t.default=a},function(e,t,o){"use strict";function a(e,t,o){var a=document.createElement("input");a.setAttribute("type","radio"),a.setAttribute("name","radioGroup"),a.setAttribute("id",e);var n=document.createElement("radioLabel");return n.innerHTML=o,document.body.appendChild(n),a}function n(e,t,o){var a=document.createElement("button");return a.id=e,a.innerHTML=t,a.style.background="#4FFF8F",a.style.width=o,a.style.height=o,a.style.zIndex=1e3,a}function r(e,t,o,a){var n=document.createElement("div");return n.style.cssText="color: red",n.style.fontSize=a,n.id=o,n.innerHTML=t,n}Object.defineProperty(t,"__esModule",{value:!0}),t.createRadioButton=a,t.createButton=n,t.createMessageUnder=r}]);