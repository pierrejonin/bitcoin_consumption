(function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],p=0,u=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/bitcoin_consumption/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0210":function(t,e,a){},"10cd":function(t,e,a){"use strict";var r=a("3d8f"),n=a.n(r);n.a},"21d1":function(t,e,a){"use strict";var r=a("0210"),n=a.n(r);n.a},"3d8f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("5f5b"),n=(a("f9e3"),a("2dd8"),a("2b0e")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"scroll"}},[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",{attrs:{href:"#",to:"/"}},[t._v("Projet DataViz - BTC")])],1),a("router-view")],1)},i=[],c={name:"app"},s=c,l=a("2877"),d=Object(l["a"])(s,o,i,!1,null,null,null),p=d.exports,u=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("div",{attrs:{role:"tablist"}},[a("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],attrs:{block:"",href:"#",variant:"info"}},[t._v(" Goal of the Project ")])],1),a("b-card-body",[a("b-card-text",[t._v(" Bitcoin is a crypto-currency often criticized for its viability. Why ? The energy chasm it represents. "),a("br"),t._v(" Mining bitcoin requires a great computing power, meaning a proportional amount of energy. "),a("br"),t._v(" This vizualisation aims to give information about the energetic viability of Bitcoin : its origins, its evolution, comparision elements. It is therefore aimed at anyone interested in cryptocurrencies and the ecological impact. ")])],1)],1)],1),a("b-row",[a("LineChart",{staticClass:"firstDiv"})],1),a("b-row",[a("CompaniesDonut",{staticClass:"firstDiv"})],1),a("b-row",[a("StackedBarChart",{staticClass:"firstDiv"})],1),a("b-row",[a("WorldMap",{staticClass:"firstDiv"})],1),a("div",{attrs:{role:"tablist"}},[a("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],attrs:{block:"",href:"#",variant:"info"}},[t._v(" About the project")])],1),a("b-card-body",[a("b-card-text",[t._v(" This project was developed during "),a("a",{attrs:{href:"https://lyondataviz.github.io/teaching/lyon1-m2/2019/"}},[t._v("Aurélien Tabard's Data Vizualisation course")]),t._v(" and the details are available "),a("a",{attrs:{href:"https://lyondataviz.github.io/teaching/lyon1-m2/2019/projets.html"}},[t._v("here")]),t._v(". "),a("br")])],1)],1),a("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":!0}}],attrs:{block:"",href:"#",variant:"info"}},[t._v("Data sources")])],1),a("b-card-body",[a("b-card-text",[a("a",{attrs:{href:"https://www.cia.gov/library/publications/the-world-factbook/"}},[t._v("CIA Factbook ")]),t._v(" : Used to create a dataset with multiple values on each country (electricity comsumption, population, ...) "),a("br"),a("a",{attrs:{href:"https://digiconomist.net/bitcoin-energy-consumption"}},[t._v("Digiconomist")]),a("br"),a("a",{attrs:{href:"https://www.blockchain.com/api/blockchain_api"}},[t._v("API blockchain.com")]),a("br"),a("a",{attrs:{href:"https://en.bitcoin.it/wiki/Comparison_of_mining_pools"}},[t._v(" bitcoin.it")])])],1)],1)],1)],1)},f=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"donut"},[a("b-row",[a("b-col",{attrs:{cols:"6"}},[a("svg",{staticClass:"cam"})]),a("b-col",{attrs:{cols:"3"}},[a("svg",{staticClass:"legend"}),a("br"),a("br"),a("div",{staticClass:"lComplementary"},[t._v(" More the blue is intense, more the pool's mining percentage is big. ")])]),a("b-col",[a("span",{staticClass:"legende"},[a("div",[t._v(" A mining pool is a groupement of cryptocurrency miners. They group to have a greater mining power. Since the biggest mining power has more chance to be rewarded for mining the next block, it's totally in their interest to group. Moreover, we are not able to know who mined every block. Indeed, only miners who chose to sign can be retrieved. ")]),a("br"),a("div",[t._v(" As we can observe, the majority of the pools are from China. That's because China's electricity is cheap. Hence miners can have a larger profit by mining. ")]),a("br"),a("div",[t._v(" Data scraped from "),a("a",{attrs:{href:"https://www.blockchain.com/api/blockchain_api"}},[t._v(" the blockchain data API")]),t._v(". "),a("br"),t._v(" Pools countries from "),a("a",{attrs:{href:"https://en.bitcoin.it/wiki/Comparison_of_mining_pools"}},[t._v(" bitcoin.it")]),t._v(". ")])])])],1)],1)},b=[],h=(a("a4d3"),a("e01a"),a("d28b"),a("99af"),a("caad"),a("b0c0"),a("b64b"),a("d3b7"),a("07ac"),a("2532"),a("3ca3"),a("159b"),a("ddb0"),a("5698")),g={name:"CompaniesDonut",methods:{reloadVue:function(){this.$forceUpdate()},connect:function(){var t=this;this.socket=new WebSocket("wss://ws.blockchain.info/inv"),this.socket.onopen=function(){t.socket.send('{"op":"blocks_sub"}'),t.socket.onmessage=function(e){e.data;t.reloadVue()}}}},mounted:function(){var t="https://docs.google.com/spreadsheets/u/0/d/1gw_V0IF139kLkQ96k2WNdU1bTobevqlnI_80kYUeic0/export?format=csv&id=1gw_V0IF139kLkQ96k2WNdU1bTobevqlnI_80kYUeic0&gid=0";this.connect();for(var e=["AntPool","Poolin","Huobi","BTC.COM","Okex","BitFury","bytepool","viaBTC","🐟","BTC.TOP","Unknown"],a={AntPool:["China - 🇨🇳"],Huobi:["China - 🇨🇳"],"BTC.COM":["Europe - 🇪🇺","USA - 🇺🇸","China - 🇨🇳"],SpiderPool:["China - 🇨🇳"],BitFury:["Netherlands - 🇳🇱"],bytepool:["China - 🇨🇳"],F2Pool:["Europe - 🇪🇺","USA - 🇺🇸","China - 🇨🇳"],Poolin:["China - 🇨🇳"]},r={},n=[],o=-1,i=-1,c=650,s=720,l=50,d=210,p=20,u=2.4,y=3.5,f=h["u"]("svg.cam").attr("width",s).attr("height",c),m=h["u"]("svg.legend").attr("width",d).attr("height",l),b=(f.append("g").attr("transform","translate(".concat(s/u,",").concat(c/y,")")),m.append("defs").append("svg:linearGradient").attr("id","gradientB").attr("x1","0%").attr("y1","100%").attr("x2","100%").attr("y2","100%").attr("spreadMethod","pad")),g=h["u"](".donut").append("div").attr("class","hidden tooltip"),v=h["n"]().value((function(t){return t.value})),x=0,k=e;x<k.length;x++){var _=k[x];r[_]=0}h["d"]("".concat(t),(function(t){t.forEach((function(t){var a=!1,n=!0,o=!1,i=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done);n=!0){var l=c.value;t.Donnee.toLowerCase().includes(l.toLowerCase())&&(r[l]+=1,a=!0)}}catch(d){o=!0,i=d}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}a||(r.Unknown+=1,a=!0)}));for(var x=Object.values(r),k=0,_=Object.keys(r);k<_.length;k++){var w=_[k];n.push({name:w,value:r[w]})}o=h["l"](x),i=x.reduce((function(t,e){return t+e}));h["q"]().domain([0,o]);var C=v(n),P=Math.min(s/1.5,c/1.5)/2-p,A=h["a"]().innerRadius(.6*P).outerRadius(.8*P),E=h["a"]().innerRadius(.9*P).outerRadius(.9*P),j=h["a"]().innerRadius(1.02*P).outerRadius(1.01*P);P=Math.min(s,c)/2.5;h["a"]().innerRadius(P).outerRadius(P);var B=h["q"]().domain([0,o]).range(["#ecfcff","#3e64ff"]),z=document.body.getBoundingClientRect(),S=document.getElementsByClassName("donut")[0].getBoundingClientRect();f.selectAll("g").selectAll("slices").data(C).enter().append("path").attr("class","donutPath").attr("fill",(function(t){return B(t.data.value)})).attr("d",A).attr("stroke","white").attr("transform","translate(0,25)").style("stroke-width","2px").on("mousemove",(function(t){var e=h["m"](h["e"].currentTarget);g.classed("hidden",!1).attr("style","left:".concat(e[0]+s/2.3,"px; top:").concat(e[1]+Math.abs(z.y-S.y)+100,"px")).html("Pool's name : ".concat("🐟"==t.data.name?"F2Pool":t.data.name,"\n              <br>Bitcoins mined : ").concat(12.5*t.data.value,"\n              <br>Countries : ").concat("🐟"==t.data.name?a.F2Pool:void 0!=a[t.data.name]?a[t.data.name]:"Unknown","\n              <br>Percentage : ").concat(Math.round(t.data.value/i*100),"%"))})).on("mouseout",(function(){g.classed("hidden",!0)})),f.selectAll("allPolylines").data(C).enter().append("polyline").attr("stroke","black").style("fill","none").attr("stroke-width",1).attr("points",(function(t){var e=A.centroid(t),a=E.centroid(t);return[e,a]})).attr("transform","translate(".concat(s/u,",").concat(c/y+30,")")),f.selectAll("g").attr("font-family","sans-serif").attr("font-size",11).attr("text-anchor","middle").selectAll("labels").data(C).enter().append("text").text((function(t){return"".concat(t.data.name)})).attr("transform",(function(t){var e=j.centroid(t);t.startAngle,t.endAngle,t.startAngle;return e[0]+=2,e[1]+=40,"translate(".concat(e,")")})).attr("padding","10px;"),f.append("text").attr("x",.5*s).attr("y",.73*c).attr("text-anchor","middle").attr("text-decoration","underline").style("font-size","24px").text("BTC mined per pool between 01/03 - 01/14"),f.append("text").attr("x",s/2.87).attr("y",c/2).attr("text-anchor","middle").attr("fill","#F5C52C").style("font-size","150px").style("font-weight","bold").attr("transform","rotate(-13)").text("₿"),b.append("stop").attr("offset","0%").attr("stop-color",B(0)).attr("stop-opacity",1),b.append("stop").attr("offset","100%").attr("stop-color",B(o)).attr("stop-opacity",1),m.append("rect").attr("width",d-9).attr("height",l-30).style("fill","url(#gradientB)").attr("transform","translate(0,10)");var D=h["q"]().range([200,0]).domain([20,-.3]),O=h["b"]().scale(D).ticks(5);m.append("g").attr("class","y axis").attr("transform","translate(0,30)").call(O)}))}},v=g,x=(a("b0bb"),Object(l["a"])(v,m,b,!1,null,null,null)),k=x.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"my_dataviz_line"}})},w=[],C={name:"LineChart",mounted:function(){var t={top:20,right:20,bottom:300,left:80},e=990-t.left-t.right,a=700-t.top-t.bottom,r=h["y"]("%Y-%m-%dT%H:%M:%S"),n=h["t"]().range([0,e]),o=h["q"]().range([a,0]),i=h["j"]().x((function(t){return n(t.DateandTime)})).y((function(t){return o(t.GUESS)})),c=h["u"]("#my_dataviz_line").append("svg").attr("width",e+t.left+t.right).attr("height",a+t.top+t.bottom),s=c.append("g").attr("transform","translate(".concat(t.left,",").concat(t.top,")")),l=h["u"]("#my_dataviz_line").append("div").style("opacity",0).attr("class","tooltip").style("background-color","#e3d0b0").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px");c.append("text").attr("x",500).attr("y",550).attr("text-anchor","middle").style("font-size","24px").style("text-decoration","underline").text("Consommation énergétique du Bitcoin au cours du temps"),c.append("text").attr("x",500).attr("y",600).attr("text-anchor","middle").style("font-size","12px").text("Sources : CIA Factbook; University of Cambridge"),h["d"]("https://pierrejonin.github.io/bitcoin_consumption".concat("/data/bitcoin_electric.csv"),(function(t,c){if(t)throw t;c.forEach((function(t){t.DateandTime=r(t.DateandTime),t.GUESS=+t.GUESS})),n.domain(h["f"](c,(function(t){return t.DateandTime}))),o.domain([0,h["l"](c,(function(t){return t.GUESS}))]),s.append("path").data([c]).attr("class","line").attr("d",i),s.append("g").attr("class","axis").attr("transform","translate(0,".concat(a,")")).call(h["b"](n).tickFormat(h["x"]("%b %Y")).ticks(11)).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy",".15em").attr("transform","rotate(-65)"),s.append("g").attr("class","axis").call(h["c"](o)).append("text").attr("class","axis-title").attr("transform","rotate(-90)").attr("y",-50).attr("dy",".71em").style("text-anchor","end").attr("fill","#5D6971").text("Consommation électrique annualisée(en TW/H)"),s.append("circle").attr("id","circle1").attr("cx",n(new Date(2016,0,29))).attr("cy",o(4.7181)).attr("r",7).attr("fill","#1A7EF7");var d=function(){l.style("opacity",1),h["u"](this).style("stroke","black").style("opacity",1)},p=function(){l.html("Le Bitcoin consomme <br> autant qu'un million <br> de foyers français").style("text-align","center").style("left","".concat(h["m"](this)[0]+100,"px")).style("top","".concat(h["m"](this)[1]-30,"px"))},u=function(){l.style("opacity",0),h["u"](this).style("stroke","none").style("opacity",.8)};h["u"]("#circle1").on("mouseover",d).on("mousemove",p).on("mouseleave",u),s.append("circle").attr("id","circle2").attr("cx",n(new Date(2018,10,3))).attr("cy",o(51.673)).attr("r",7).attr("fill","#1A7EF7");var y=function(){l.style("opacity",1),h["u"](this).style("stroke","black").style("opacity",1)},f=function(){l.html("Le Bitcoin consomme <br> maintenant autant <br> que le Bengladesh <br> (+150M d'habitants)").style("text-align","center").style("left","".concat(h["m"](this)[0]+100,"px")).style("top","".concat(h["m"](this)[1]-50,"px"))},m=function(){l.style("opacity",0),h["u"](this).style("stroke","none").style("opacity",.8)};h["u"]("#circle2").on("mouseover",y).on("mousemove",f).on("mouseleave",m),s.append("circle").attr("id","circle3").attr("cx",n(new Date(2017,6,14))).attr("cy",o(14.0462)).attr("r",7).attr("fill","#1A7EF7");var b=function(){l.style("opacity",1),h["u"](this).style("stroke","black").style("opacity",1)},g=function(){l.html("Le Bitcoin consomme <br> plus que la Corée! <br> (du nord)").style("text-align","center").style("left","".concat(h["m"](this)[0]+100,"px")).style("top","".concat(h["m"](this)[1]-30,"px"))},v=function(){l.style("opacity",0),h["u"](this).style("stroke","none").style("opacity",.8)};h["u"]("#circle3").on("mouseover",b).on("mousemove",g).on("mouseleave",v),s.append("circle").attr("id","circle4").attr("cx",n(new Date(2019,8,22))).attr("cy",o(80.2968)).attr("r",7).attr("fill","#1A7EF7");var x=function(){l.style("opacity",1),h["u"](this).style("stroke","black").style("opacity",1)},k=function(){l.html("Max conso").style("left","".concat(h["m"](this)[0]+100,"px")).style("top","".concat(h["m"](this)[1]+30,"px"))},_=function(){l.style("opacity",0),h["u"](this).style("stroke","none").style("opacity",.8)};h["u"]("#circle4").on("mouseover",x).on("mousemove",k).on("mouseleave",_),s.append("circle").attr("id","circle5").attr("cx",n(new Date(2018,1,7))).attr("cy",o(38.4544)).attr("r",7).attr("fill","#1A7EF7");var w=function(){l.style("opacity",1),h["u"](this).style("stroke","black").style("opacity",1)},C=function(){l.html("Eclatement de la <br> bulle au début 2018. <br> Le bitcoin consomme <br> plus que l'Irak").style("text-align","center").style("left","".concat(h["m"](this)[0]+100,"px")).style("top","".concat(h["m"](this)[1]-50,"px"))},P=function(){l.style("opacity",0),h["u"](this).style("stroke","none").style("opacity",.8)};h["u"]("#circle5").on("mouseover",w).on("mousemove",C).on("mouseleave",P),s.append("circle").attr("id","circle6").attr("cx",n(new Date(2019,8,22))).attr("cy",o(80.2968)).attr("r",7).attr("fill","#1A7EF7");var A=function(){l.style("opacity",1),h["u"](this).style("stroke","black").style("opacity",1)},E=function(){l.html("Maximum de la <br> consommation électrique. <br> Le niveau est équivalent <br> à celui de la Belgique").style("text-align","center").style("left","".concat(h["m"](this)[0]+100,"px")).style("top","".concat(h["m"](this)[1]+120,"px"))},j=function(){l.style("opacity",0),h["u"](this).style("stroke","none").style("opacity",.8)};h["u"]("#circle6").on("mouseover",A).on("mousemove",E).on("mouseleave",j),s.append("circle").attr("id","circle7").attr("cx",n(new Date(2020,0,3))).attr("cy",o(74.3374)).attr("r",7).attr("fill","#1A7EF7");var B=function(){l.style("opacity",1),h["u"](this).style("stroke","black").style("opacity",1)},z=function(){l.html("Consommation actuelle. <br> Elle correspond à celle du Chili. <br> Ou deux fois celle du Qatar. <br> Ou trois fois celle de l'Irlande").style("text-align","center").style("left","".concat(h["m"](this)[0]+100,"px")).style("top","".concat(h["m"](this)[1]+100,"px"))},S=function(){l.style("opacity",0),h["u"](this).style("stroke","none").style("opacity",.8)};h["u"]("#circle7").on("mouseover",B).on("mousemove",z).on("mouseleave",S),s.append("line").style("stroke","grey").style("z-index",-1).attr("x1",0).attr("y1",o(10)).attr("x2",e).attr("y2",o(10)),s.append("line").style("stroke","grey").attr("x1",0).attr("y1",o(20)).attr("x2",e).attr("y2",o(20)),s.append("line").style("stroke","grey").attr("x1",0).attr("y1",o(30)).attr("x2",e).attr("y2",o(30)),s.append("line").style("stroke","grey").attr("x1",0).attr("y1",o(40)).attr("x2",e).attr("y2",o(40)),s.append("line").style("stroke","grey").attr("x1",0).attr("y1",o(50)).attr("x2",e).attr("y2",o(50)),s.append("line").style("stroke","grey").attr("x1",0).attr("y1",o(60)).attr("x2",e).attr("y2",o(60)),s.append("line").style("stroke","grey").attr("x1",0).attr("y1",o(70)).attr("x2",e).attr("y2",o(70)),s.append("line").style("stroke","grey").attr("x1",0).attr("y1",o(80)).attr("x2",e).attr("y2",o(80))}))}},P=C,A=(a("f968"),Object(l["a"])(P,_,w,!1,null,null,null)),E=A.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-row",{attrs:{"align-h":"center"}},[a("div",{attrs:{id:"my_dataviz"}},[a("div",{attrs:{id:"stackedbarchart"}})])])],1)},B=[],z=(a("fb6a"),a("4e82"),a("4ec9"),a("a9e3"),a("9129"),{name:"StackedBarChart",mounted:function(){var t={top:10,right:30,bottom:50,left:50},e=400-t.left-t.right,a=400-t.top-t.bottom,r=h["u"]("#stackedbarchart").append("svg").attr("width",3*e).attr("height",500+t.top+t.bottom).append("g").attr("transform","translate(".concat(t.left,",").concat(t.top,")")),n=new Map([["black","#373534"],["red","#FF2700"],["blue","#0A98EE"],["green","#41C626"]]);r.append("text").attr("x",380).attr("y",100).text("Click on the source you want to sort").style("font-size","15px").attr("alignment-baseline","middle"),r.append("text").attr("x",200).attr("y",430).attr("text-anchor","middle").style("font-size","24px").style("text-decoration","underline").text("Electric energy sources by Country"),r.append("text").attr("x",200).attr("y",460).attr("text-anchor","middle").style("font-size","24px").style("text-decoration","underline").text("that might be used for bitcoin mining"),r.append("text").attr("x",180).attr("y",480).attr("text-anchor","middle").style("font-size","12px").text("Sources : CIA Factbook; Digiconomist"),h["d"]("https://pierrejonin.github.io/bitcoin_consumption".concat("/data/data_countries.csv"),(function(t){var o=["Percentage_fossil","Percentage_nuclear","Percentage_hydroelectric","Percentage_renewable"];t.sort((function(t,e){return e.Consumption-t.Consumption}));var i=t.slice(0,10);i.sort((function(t,e){return e.Percentage_fossil-t.Percentage_fossil}));var c=[];i.forEach((function(t){return c.push(t.Country)}));var s=h["p"]().domain(c).range([0,e]).padding([.2]);r.append("g").attr("transform","translate(0,".concat(a,")")).call(h["b"](s).tickSizeOuter(0)).selectAll("text").attr("y",0).attr("x",5).attr("transform","rotate(45)").style("text-anchor","start");var l=h["q"]().domain([0,100]).range([a,0]);r.append("g").call(h["c"](l));var d=h["r"]().domain(o).range([n.get("black"),n.get("red"),n.get("blue"),n.get("green")]),p=h["u"]("div").append("div").style("position","absolute").attr("class","tooltip").style("opacity",1).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px").style("pointer-events","none");function u(t){var e=h["u"](this.parentNode).datum().key,a=t.data.Country;p.html("".concat(e,":").concat(t[1]-t[0],"%<br>").concat(a)).style("opacity",1)}function y(){p.style("left","".concat(h["e"].pageX,"px")).style("top","".concat(h["e"].pageY,"px"))}function f(){p.style("opacity",0)}function m(t,n,o){var i=h["w"]().keys(n)(o);r.selectAll("a").remove(),r.selectAll("g").remove(),s=h["p"]().domain(t).range([0,e]).padding([.2]),r.append("g").attr("transform","translate(0,".concat(a,")")).call(h["b"](s).tickSizeOuter(0)).selectAll("text").attr("y",0).attr("x",5).attr("transform","rotate(45)").style("text-anchor","start"),l=h["q"]().domain([0,100]).range([a,0]),r.append("g").call(h["c"](l)),r.append("a").selectAll("g").data(i).enter().append("g").attr("fill",(function(t){return d(t.key)})).selectAll("rect").data((function(t){return t})).enter().append("rect").attr("x",(function(t){return s(t.data.Country)})).attr("y",(function(t){return l(t[1])})).attr("height",(function(t){return Number.isNaN(l(t[0])-l(t[1]))?0:l(t[0])-l(t[1])})).attr("width",s.bandwidth()).attr("stroke","grey").on("mouseover",u).on("mousemove",y).on("mouseleave",f)}function b(){o=["Percentage_fossil","Percentage_nuclear","Percentage_hydroelectric","Percentage_renewable"],d=h["r"]().domain(o).range([n.get("black"),n.get("red"),n.get("blue"),n.get("green")]),i.sort((function(t,e){return e.Percentage_fossil-t.Percentage_fossil})),c=[],i.forEach((function(t){return c.push(t.Country)})),m(c,o,i)}function g(){o=["Percentage_nuclear","Percentage_fossil","Percentage_hydroelectric","Percentage_renewable"],d=h["r"]().domain(o).range([n.get("red"),n.get("black"),n.get("blue"),n.get("green")]),i.sort((function(t,e){return e.Percentage_nuclear-t.Percentage_nuclear})),c=[],i.forEach((function(t){return c.push(t.Country)})),m(c,o,i)}function v(){o=["Percentage_hydroelectric","Percentage_fossil","Percentage_nuclear","Percentage_renewable"],d=h["r"]().domain(o).range([n.get("blue"),n.get("black"),n.get("red"),n.get("green")]),i.sort((function(t,e){return e.Percentage_hydroelectric-t.Percentage_hydroelectric})),c=[],i.forEach((function(t){return c.push(t.Country)})),m(c,o,i)}function x(){o=["Percentage_renewable","Percentage_fossil","Percentage_hydroelectric","Percentage_nuclear"],d=h["r"]().domain(o).range([n.get("green"),n.get("black"),n.get("blue"),n.get("red")]),i.sort((function(t,e){return e.Percentage_renewable-t.Percentage_renewable})),c=[],i.forEach((function(t){return c.push(t.Country)})),m(c,o,i)}p.style("opacity",0),m(c,o,i),r.append("circle").attr("cx",400).attr("cy",130).attr("r",6).style("fill",n.get("black")).on("click",(function(){b()})),r.append("circle").attr("cx",400).attr("cy",160).attr("r",6).style("fill",n.get("red")).on("click",(function(){g()})),r.append("circle").attr("cx",400).attr("cy",190).attr("r",6).style("fill",n.get("blue")).on("click",(function(){v()})),r.append("circle").attr("cx",400).attr("cy",220).attr("r",6).style("fill",n.get("green")).on("click",(function(){x()})),r.append("text").attr("x",420).attr("y",130).text("Fossil").style("font-size","15px").attr("alignment-baseline","middle").on("click",(function(){b()})),r.append("text").attr("x",420).attr("y",160).text("Nuclear").style("font-size","15px").attr("alignment-baseline","middle").on("click",(function(){g()})),r.append("text").attr("x",420).attr("y",190).text("Hydroelectric").style("font-size","15px").attr("alignment-baseline","middle").on("click",(function(){v()})),r.append("text").attr("x",420).attr("y",220).text("Renewable").style("font-size","15px").attr("alignment-baseline","middle").on("click",(function(){x()})),m(c,o,i)}))}}),S=z,D=(a("8b66"),Object(l["a"])(S,j,B,!1,null,null,null)),O=D.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-row",[a("b-col",{staticClass:"mapCol",attrs:{cols:"8"}},[a("div",{attrs:{id:"world_dataviz"}})]),a("b-col",[a("div",{attrs:{id:"legende"}},[a("div",{attrs:{id:"legende1"}}),a("div",{attrs:{id:"legende2"}}),a("div",{attrs:{id:"explication"}},[a("br"),a("b",[t._v("Rapport en % :")]),a("br"),t._v(" (Conso. du Bitcoin sur un an / Conso. du pays sur un an)*100 "),a("br"),a("br"),t._v(" Les pays en "),a("b",{staticClass:"blue"},[t._v("bleu")]),t._v(" sont ceux dont la consommation en éléctricité est "),a("b",{staticClass:"blue"},[t._v("supérieure")]),t._v(" ou égale à celle du Bitcoin (par an). "),a("br"),a("br"),t._v(" Les pays en "),a("b",{staticClass:"red"},[t._v("rouge")]),t._v(" sont ceux dont la consommation en éléctricité est "),a("b",{staticClass:"red"},[t._v("inférieure")]),t._v(" à celle du Bitcoin (par an). ")])])])],1)],1)},T=[],M=(a("c35a"),a("b680"),a("87da")),q=a("e740"),U={name:"WorldMap",mounted:function(){var t=h["u"]("#world_dataviz").append("svg").attr("width",900).attr("height",700).attr("transform","translate(".concat(0,",",0,")")),e=+t.attr("width"),a=+t.attr("height");t.append("text").attr("x",500).attr("y",590).attr("text-anchor","middle").style("font-size","24px").style("text-decoration","underline").text("Bitcoin Electricity Consumption vs. Country Electricicty Consumption"),t.append("text").attr("x",500).attr("y",610).attr("text-anchor","middle").style("font-size","12px").text("Sources : CIA Factbook; Digiconomist");h["h"]();var r=h["g"]().scale(120).center([0,20]).translate([e/2,a/2]),n=h["k"](),o=h["s"](M["a"]).domain([0,1]),i=h["s"](q["a"]).domain([1,200]),c=300,s=50,l=h["u"]("#legende1").append("svg").attr("width",c+15).attr("height",s).attr("transform","translate(20,0)"),d=l.append("defs").append("svg:linearGradient").attr("id","gradientB").attr("x1","0%").attr("y1","100%").attr("x2","100%").attr("y2","100%").attr("spreadMethod","pad");d.append("stop").attr("offset","0%").attr("stop-color",o(0)).attr("stop-opacity",1),d.append("stop").attr("offset","100%").attr("stop-color",o(1)).attr("stop-opacity",1),l.append("rect").attr("width",c).attr("height",s-30).style("fill","url(#gradientB)").attr("transform","translate(0,10)");var p=h["q"]().range([300,0]).domain([100,0]),u=h["b"]().scale(p).ticks(5);l.append("g").attr("class","y axis").attr("transform","translate(0,30)").call(u).append("text").attr("transform","rotate(-90)").attr("y",0).attr("dy",".71em").style("text-anchor","end").text("axis title");var y=h["u"]("#legende2").append("svg").attr("width",c+30).attr("height",s).attr("transform","translate(20,0)"),f=y.append("defs").append("svg:linearGradient").attr("id","gradient").attr("x1","0%").attr("y1","100%").attr("x2","100%").attr("y2","100%").attr("spreadMethod","pad");f.append("stop").attr("offset","0%").attr("stop-color",i(1)).attr("stop-opacity",1),f.append("stop").attr("offset","15%").attr("stop-color",i(13)).attr("stop-opacity",1),f.append("stop").attr("offset","80%").attr("stop-color",i(160)).attr("stop-opacity",1),f.append("stop").attr("offset","100%").attr("stop-color",i(250)).attr("stop-opacity",1),y.append("rect").attr("width",c).attr("height",s-30).style("fill","url(#gradient)").attr("transform","translate(0,10)");var m=h["q"]().range([300,0]).domain([2e4,100]),b=h["b"]().scale(m).ticks(5);function g(e,a){var c=h["u"]("body").append("div").style("position","absolute").attr("class","tooltip").style("opacity",1).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px").style("pointer-events","none");function s(){c.style("opacity",0).classed("hidden",!0),h["v"]("path").attr("stroke","#fff").attr("stroke-width","1px")}function l(t){var e=n.get(t.properties.name)||0,a="";a=0===e?"<strong>".concat(t.properties.name,"</strong><br>Consommation : <i>/</i><br>Rapport : <i>/</i>"):"<strong>".concat(t.properties.name,"</strong><br>Consommation : <i>").concat(e.toLocaleString()," kWH</i><br>Rapport : <i>").concat(100*Number.parseFloat((75e9/e).toFixed(2)),"%</i>"),c.style("opacity",.99).classed("hidden",!1).style("left","".concat(h["e"].pageX+30,"px")).style("top","".concat(h["e"].pageY-80,"px")).html(a),h["u"](this).attr("stroke-width","2px").attr("stroke","#2e006c")}function d(){c.style("opacity",0).classed("hidden",!0),h["v"]("path").attr("stroke","#fff").attr("stroke-width","1px")}c.style("opacity",0),t.append("g").selectAll("path").data(a.features).enter().append("path").attr("stroke","#fff").attr("stroke-width","1px").attr("d",h["h"]().projection(r)).attr("fill",(function(t){var e=n.get(t.properties.name)||0;if(0===e)return"grey";var a=Number.parseFloat(75e9/e);return a<1?o(a):i(a)})).on("mouseover",s).on("mousemove",l).on("mouseleave",d)}y.append("g").attr("class","y axis").attr("transform","translate(0,30)").call(b).append("text").attr("transform","rotate(-90)").attr("y",0).attr("dy",".71em").style("text-anchor","end").text("axis title"),h["o"]().defer(h["i"],"https://pierrejonin.github.io/bitcoin_consumption".concat("/data/custom.geo.json")).defer(h["d"],"https://pierrejonin.github.io/bitcoin_consumption".concat("/data/data_countries.csv"),(function(t){n.set(t.Country,+t.Consumption)})).await(g)}},L=U,I=(a("21d1"),Object(l["a"])(L,F,T,!1,null,null,null)),N=I.exports,R={name:"Companies",components:{CompaniesDonut:k,LineChart:E,StackedBarChart:O,WorldMap:N}},W=R,G=(a("10cd"),Object(l["a"])(W,y,f,!1,null,null,null)),$=G.exports;n["default"].use(u["a"]);var H=new u["a"]({routes:[{path:"/",name:"ProjectView",component:$}]});n["default"].config.productionTip=!1,n["default"].use(r["a"]),new n["default"]({render:function(t){return t(p)},router:H}).$mount("#app")},"713c":function(t,e,a){},"8b66":function(t,e,a){"use strict";var r=a("713c"),n=a.n(r);n.a},a324:function(t,e,a){},b0bb:function(t,e,a){"use strict";var r=a("e6c2"),n=a.n(r);n.a},e6c2:function(t,e,a){},f968:function(t,e,a){"use strict";var r=a("a324"),n=a.n(r);n.a}});
//# sourceMappingURL=app.beaf1356.js.map