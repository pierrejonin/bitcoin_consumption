(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],d=0,u=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/bitcoin_consumption/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0210":function(t,e,a){},"21d1":function(t,e,a){"use strict";var r=a("0210"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("5f5b"),n=(a("f9e3"),a("2dd8"),a("2b0e")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("Projet DataViz - BTC")]),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("router-link",{staticClass:"nav-link",attrs:{to:"/WorldMapView"}},[t._v(" Pays ")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/Companies"}},[t._v(" Entreprises ")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/StackedBarChartView"}},[t._v(" StackedBarChartView ")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/LineChartView"}},[t._v(" LineChartView ")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("FR")])],1)],1)],1)],1)],1),a("router-view")],1)},s=[],i={name:"app"},c=i,l=a("2877"),p=Object(l["a"])(c,o,s,!1,null,null,null),d=p.exports,u=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"companies"}},[a("svg",{staticClass:"companies"})])},f=[],m=(a("159b"),a("5698")),h=a("1157"),g=a.n(h);window.$=g.a;var v={name:"Companies",data:function(){return{isConnected:!1,socketMessage:"",lastBlock:""}},methods:{connect:function(){var t=this;this.socket=new WebSocket("wss://ws.blockchain.info/inv"),this.socket.onopen=function(){t.socketMessage="connected",t.socket.send('{"op":"ping_tx"}'),t.socket.onmessage=function(e){var a=e.data;console.log(t.socket),t.lastBlock=a}}}},mounted:function(){if(localStorage.days)console.log("lol");else{var t="https://blockchain.info/blocks/",e=Date.now();localStorage.timeStamp=e,localStorage.days=[];for(var a=0;a<14;a+=1){var r="".concat(t).concat(e-3600*a*24*1e3,"?format=json");console.log(r),window.$.ajax({url:r,type:"GET",crossDomain:!0,dataType:"json",success:function(t){var e=JSON.parse(t);console.log(e.status)},error:function(t){console.log(t)}})}}var n=600,o=300,s=[];m["c"]("https://pierrejonin.github.io/bitcoin_consumption".concat("/data/test.csv"),(function(t){t.forEach((function(t){s.push(t.id)}));var e=5,a=n/s.length;m["s"]("svg.companies").attr("width",n).attr("height",o).attr("class","bar-chart").selectAll("rect").data(s).enter().append("rect").attr("y",(function(t){return o-t})).attr("height",(function(t){return t})).attr("width",a-e).attr("transform",(function(t,e){var r=[a*e,0];return"translate(".concat(r,")")}))}))}},b=v,x=Object(l["a"])(b,y,f,!1,null,null,null),k=x.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"WorldMapView"},[a("WorldMap")],1)},w=[],C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"my_dataviz"}},[a("div",{attrs:{id:"legendes"}},[a("div",{attrs:{id:"legende1"}}),a("div",{attrs:{id:"legende2"}})])])}],E=(a("99af"),a("b0c0"),a("a9e3"),a("c35a"),a("b680"),a("87da")),S=a("e740"),j={name:"WorldMap",mounted:function(){var t=m["s"]("#my_dataviz").append("svg").attr("width",900).attr("height",700).attr("transform","translate(".concat(0,",",0,")")),e=+t.attr("width"),a=+t.attr("height");t.append("text").attr("x",500).attr("y",590).attr("text-anchor","middle").style("font-size","24px").style("text-decoration","underline").text("Bitcoin Electricity Consumption vs. Country Electricicty Consumption"),t.append("text").attr("x",500).attr("y",610).attr("text-anchor","middle").style("font-size","12px").text("Sources : CIA Factbook; Digiconomist");m["g"]();var r=m["f"]().scale(120).center([0,20]).translate([e/2,a/2]),n=m["j"](),o=m["q"](E["a"]).domain([0,1]),s=m["q"](S["a"]).domain([1,200]),i=300,c=50,l=m["s"]("#legende1").append("svg").attr("width",i+15).attr("height",c),p=l.append("defs").append("svg:linearGradient").attr("id","gradientB").attr("x1","0%").attr("y1","100%").attr("x2","100%").attr("y2","100%").attr("spreadMethod","pad");p.append("stop").attr("offset","0%").attr("stop-color",o(0)).attr("stop-opacity",1),p.append("stop").attr("offset","100%").attr("stop-color",o(1)).attr("stop-opacity",1),l.append("rect").attr("width",i).attr("height",c-30).style("fill","url(#gradientB)").attr("transform","translate(0,10)");var d=m["o"]().range([300,0]).domain([100,0]),u=m["a"]().scale(d).ticks(5);l.append("g").attr("class","y axis").attr("transform","translate(0,30)").call(u).append("text").attr("transform","rotate(-90)").attr("y",0).attr("dy",".71em").style("text-anchor","end").text("axis title");var y=m["s"]("#legende2").append("svg").attr("width",i+30).attr("height",c),f=y.append("defs").append("svg:linearGradient").attr("id","gradient").attr("x1","0%").attr("y1","100%").attr("x2","100%").attr("y2","100%").attr("spreadMethod","pad");f.append("stop").attr("offset","0%").attr("stop-color",s(1)).attr("stop-opacity",1),f.append("stop").attr("offset","15%").attr("stop-color",s(13)).attr("stop-opacity",1),f.append("stop").attr("offset","80%").attr("stop-color",s(160)).attr("stop-opacity",1),f.append("stop").attr("offset","100%").attr("stop-color",s(250)).attr("stop-opacity",1),y.append("rect").attr("width",i).attr("height",c-30).style("fill","url(#gradient)").attr("transform","translate(0,10)");var h=m["o"]().range([300,0]).domain([2e4,100]),g=m["a"]().scale(h).ticks(5);function v(e,a){var i=m["s"]("body").append("div").style("position","absolute").attr("class","tooltip").style("opacity",1).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px").style("pointer-events","none");function c(){i.style("opacity",0).classed("hidden",!0),m["t"]("path").attr("stroke","#fff").attr("stroke-width","1px")}function l(t){var e=n.get(t.properties.name)||0,a="<strong>".concat(t.properties.name,"</strong><br>Consommation : <i>").concat(e.toLocaleString()," kWH</i><br>Rapport : <i>").concat(100*Number.parseFloat((75e9/e).toFixed(2)),"%</i>");i.style("opacity",.99).classed("hidden",!1).style("left","".concat(m["d"].pageX+30,"px")).style("top","".concat(m["d"].pageY-80,"px")).html(a),m["s"](this).attr("stroke-width","2px").attr("stroke","#2e006c")}function p(){i.style("opacity",0).classed("hidden",!0),m["t"]("path").attr("stroke","#fff").attr("stroke-width","1px")}t.append("g").selectAll("path").data(a.features).enter().append("path").attr("stroke","#fff").attr("stroke-width","1px").attr("d",m["g"]().projection(r)).attr("fill",(function(t){var e=n.get(t.properties.name)||0;if(0===e)return"grey";var a=Number.parseFloat(75e9/e);return a<1?o(a):s(a)})).on("mouseover",c).on("mousemove",l).on("mouseleave",p)}y.append("g").attr("class","y axis").attr("transform","translate(0,30)").call(g).append("text").attr("transform","rotate(-90)").attr("y",0).attr("dy",".71em").style("text-anchor","end").text("axis title"),m["m"]().defer(m["h"],"https://pierrejonin.github.io/bitcoin_consumption".concat("/data/custom.geo.json")).defer(m["c"],"https://pierrejonin.github.io/bitcoin_consumption".concat("/data/data_countries.csv"),(function(t){n.set(t.Country,+t.Consumption)})).await(v)}},O=j,B=(a("21d1"),Object(l["a"])(O,C,P,!1,null,null,null)),M=B.exports,A={name:"WorldMapView",components:{WorldMap:M}},V=A,z=Object(l["a"])(V,_,w,!1,null,null,null),D=z.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"StackedBarChartView"},[a("StackedBarChart")],1)},L=[],$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"my_dataviz"}},[a("button",{attrs:{id:"fossil"}},[t._v("Fossil")]),a("button",{attrs:{id:"nuclear"}},[t._v("Nuclear")]),a("button",{attrs:{id:"hydroelectric"}},[t._v("Hydroelectric")]),a("button",{attrs:{id:"renewable"}},[t._v("Renewable")])])}],q=(a("fb6a"),a("4e82"),a("9129"),a("d3b7"),a("ddb0"),{name:"StackedBarChart",mounted:function(){var t={top:10,right:30,bottom:50,left:50},e=400-t.left-t.right,a=400-t.top-t.bottom,r=m["s"]("#my_dataviz").append("svg").attr("width",1500+t.left+t.right).attr("height",800+t.top+t.bottom).append("g").attr("transform","translate(".concat(t.left,",").concat(t.top,")"));r.append("text").attr("x",180).attr("y",450).attr("text-anchor","middle").style("font-size","24px").style("text-decoration","underline").text("Electric energy sources by Country"),r.append("text").attr("x",500).attr("y",610).attr("text-anchor","middle").style("font-size","12px").text("Sources : CIA Factbook; Digiconomist"),m["c"]("https://pierrejonin.github.io/bitcoin_consumption".concat("/data/data_countries.csv"),(function(t){var n=["Percentage_fossil","Percentage_nuclear","Percentage_hydroelectric","Percentage_renewable"];t.sort((function(t,e){return e.Consumption-t.Consumption}));var o=t.slice(0,10);o.sort((function(t,e){return e.Percentage_fossil-t.Percentage_fossil}));var s=[];o.forEach((function(t){return s.push(t.Country)}));var i=m["n"]().domain(s).range([0,e]).padding([.2]);r.append("g").attr("transform","translate(0,".concat(a,")")).call(m["a"](i).tickSizeOuter(0)).selectAll("text").attr("y",0).attr("x",5).attr("transform","rotate(45)").style("text-anchor","start");var c=m["o"]().domain([0,100]).range([a,0]);r.append("g").call(m["b"](c));var l=m["p"]().domain(n).range(["black","red","blue","green"]),p=m["s"]("div").append("div").style("position","absolute").attr("class","tooltip").style("opacity",1).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px").style("pointer-events","none");function d(t){var e=m["s"](this.parentNode).datum().key,a=t.data.Country;p.html("".concat(e,":").concat(t[1]-t[0],"%<br>").concat(a)).style("opacity",1)}function u(){p.style("left","".concat(m["d"].pageX,"px")).style("top","".concat(m["d"].pageY,"px"))}function y(){p.style("opacity",0)}function f(t,n,o){var s=m["u"]().keys(n)(o);r.selectAll("a").remove(),r.selectAll("g").remove(),i=m["n"]().domain(t).range([0,e]).padding([.2]),r.append("g").attr("transform","translate(0,".concat(a,")")).call(m["a"](i).tickSizeOuter(0)).selectAll("text").attr("y",0).attr("x",5).attr("transform","rotate(45)").style("text-anchor","start"),c=m["o"]().domain([0,100]).range([a,0]),r.append("g").call(m["b"](c)),r.append("a").selectAll("g").data(s).enter().append("g").attr("fill",(function(t){return l(t.key)})).selectAll("rect").data((function(t){return t})).enter().append("rect").attr("x",(function(t){return i(t.data.Country)})).attr("y",(function(t){return c(t[1])})).attr("height",(function(t){return Number.isNaN(c(t[0])-c(t[1]))?0:c(t[0])-c(t[1])})).attr("width",i.bandwidth()).attr("stroke","grey").on("mouseover",d).on("mousemove",u).on("mouseleave",y)}f(s,n,o),m["t"]("#fossil").on("click",(function(){n=["Percentage_fossil","Percentage_nuclear","Percentage_hydroelectric","Percentage_renewable"],l=m["p"]().domain(n).range(["black","red","blue","green"]),o.sort((function(t,e){return e.Percentage_fossil-t.Percentage_fossil})),s=[],o.forEach((function(t){return s.push(t.Country)})),f(s,n,o)})),m["t"]("#nuclear").on("click",(function(){n=["Percentage_nuclear","Percentage_fossil","Percentage_hydroelectric","Percentage_renewable"],l=m["p"]().domain(n).range(["red","black","blue","green"]),o.sort((function(t,e){return e.Percentage_nuclear-t.Percentage_nuclear})),s=[],o.forEach((function(t){return s.push(t.Country)})),f(s,n,o)})),m["t"]("#hydroelectric").on("click",(function(){n=["Percentage_hydroelectric","Percentage_fossil","Percentage_nuclear","Percentage_renewable"],l=m["p"]().domain(n).range(["blue","black","red","green"]),o.sort((function(t,e){return e.Percentage_hydroelectric-t.Percentage_hydroelectric})),s=[],o.forEach((function(t){return s.push(t.Country)})),f(s,n,o)})),m["t"]("#renewable").on("click",(function(){n=["Percentage_renewable","Percentage_fossil","Percentage_hydroelectric","Percentage_nuclear"],l=m["p"]().domain(n).range(["green","black","blue","red"]),o.sort((function(t,e){return e.Percentage_renewable-t.Percentage_renewable})),s=[],o.forEach((function(t){return s.push(t.Country)})),f(s,n,o)}))}))}}),W=q,N=(a("8b66"),Object(l["a"])(W,$,T,!1,null,null,null)),G=N.exports,I={name:"StackedBarChartView",components:{StackedBarChart:G}},U=I,H=Object(l["a"])(U,F,L,!1,null,null,null),Y=H.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"LineChartView"},[a("LineChart")],1)},R=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"my_dataviz"}})},Q=[],K={name:"LineChart",mounted:function(){var t={top:20,right:20,bottom:300,left:80},e=990-t.left-t.right,a=700-t.top-t.bottom,r=m["w"]("%Y-%m-%dT%H:%M:%S"),n=m["r"]().range([0,e]),o=m["o"]().range([a,0]),s=m["i"]().x((function(t){return n(t.DateandTime)})).y((function(t){return o(t.GUESS)})),i=m["s"]("#my_dataviz").append("svg").attr("width",e+t.left+t.right).attr("height",a+t.top+t.bottom),c=i.append("g").attr("transform","translate(".concat(t.left,",").concat(t.top,")")),l=m["s"]("#my_dataviz").append("div").style("opacity",0).attr("class","tooltip").style("background-color","#e3d0b0").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px");i.append("text").attr("x",500).attr("y",550).attr("text-anchor","middle").style("font-size","24px").style("text-decoration","underline").text("Consommation énergétique du Bitcoin au cours du temps"),i.append("text").attr("x",500).attr("y",600).attr("text-anchor","middle").style("font-size","12px").text("Sources : CIA Factbook; University of Cambridge"),m["c"]("https://pierrejonin.github.io/bitcoin_consumption".concat("/data/bitcoin_electric.csv"),(function(t,i){if(t)throw t;i.forEach((function(t){t.DateandTime=r(t.DateandTime),t.GUESS=+t.GUESS})),n.domain(m["e"](i,(function(t){return t.DateandTime}))),o.domain([0,m["k"](i,(function(t){return t.GUESS}))]),c.append("path").data([i]).attr("class","line").attr("d",s),c.append("g").attr("class","axis").attr("transform","translate(0,".concat(a,")")).call(m["a"](n).tickFormat(m["v"]("%b %Y")).ticks(11)).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy",".15em").attr("transform","rotate(-65)"),c.append("g").attr("class","axis").call(m["b"](o)).append("text").attr("class","axis-title").attr("transform","rotate(-90)").attr("y",-50).attr("dy",".71em").style("text-anchor","end").attr("fill","#5D6971").text("Consommation électrique annualisée(en TW/H)"),c.append("circle").attr("id","circle1").attr("cx",n(new Date(2016,0,29))).attr("cy",o(4.7181)).attr("r",5).attr("fill","#1A7EF7");var p=function(){l.style("opacity",1),m["s"](this).style("stroke","black").style("opacity",1)},d=function(){l.html("Le Bitcoin consomme <br> autant qu'un million <br> de foyers français").style("text-align","center").style("left","".concat(m["l"](this)[0]-20,"px")).style("top","".concat(m["l"](this)[1]-30,"px"))},u=function(){l.style("opacity",0),m["s"](this).style("stroke","none").style("opacity",.8)};m["s"]("#circle1").on("mouseover",p).on("mousemove",d).on("mouseleave",u),c.append("circle").attr("id","circle2").attr("cx",n(new Date(2018,10,3))).attr("cy",o(51.673)).attr("r",5).attr("fill","#1A7EF7");var y=function(){l.style("opacity",1),m["s"](this).style("stroke","black").style("opacity",1)},f=function(){l.html("Le Bitcoin consomme <br> maintenant autant <br> que le Bengladesh <br> (+150M d'habitants)").style("text-align","center").style("left","".concat(m["l"](this)[0]-20,"px")).style("top","".concat(m["l"](this)[1]-50,"px"))},h=function(){l.style("opacity",0),m["s"](this).style("stroke","none").style("opacity",.8)};m["s"]("#circle2").on("mouseover",y).on("mousemove",f).on("mouseleave",h),c.append("circle").attr("id","circle3").attr("cx",n(new Date(2017,6,14))).attr("cy",o(14.0462)).attr("r",5).attr("fill","#1A7EF7");var g=function(){l.style("opacity",1),m["s"](this).style("stroke","black").style("opacity",1)},v=function(){l.html("Le Bitcoin consomme <br> plus que la Corée! <br> (du nord)").style("text-align","center").style("left","".concat(m["l"](this)[0]-20,"px")).style("top","".concat(m["l"](this)[1]-30,"px"))},b=function(){l.style("opacity",0),m["s"](this).style("stroke","none").style("opacity",.8)};m["s"]("#circle3").on("mouseover",g).on("mousemove",v).on("mouseleave",b),c.append("circle").attr("id","circle4").attr("cx",n(new Date(2019,8,22))).attr("cy",o(80.2968)).attr("r",5).attr("fill","#1A7EF7");var x=function(){l.style("opacity",1),m["s"](this).style("stroke","black").style("opacity",1)},k=function(){l.html("Max conso").style("left","".concat(m["l"](this)[0]-30,"px")).style("top","".concat(m["l"](this)[1]+30,"px"))},_=function(){l.style("opacity",0),m["s"](this).style("stroke","none").style("opacity",.8)};m["s"]("#circle4").on("mouseover",x).on("mousemove",k).on("mouseleave",_),c.append("circle").attr("id","circle5").attr("cx",n(new Date(2018,1,7))).attr("cy",o(38.4544)).attr("r",5).attr("fill","#1A7EF7");var w=function(){l.style("opacity",1),m["s"](this).style("stroke","black").style("opacity",1)},C=function(){l.html("Eclatement de la <br> bulle au début 2018. <br> Le bitcoin consomme <br> plus que l'Irak").style("text-align","center").style("left","".concat(m["l"](this)[0]-30,"px")).style("top","".concat(m["l"](this)[1]-50,"px"))},P=function(){l.style("opacity",0),m["s"](this).style("stroke","none").style("opacity",.8)};m["s"]("#circle5").on("mouseover",w).on("mousemove",C).on("mouseleave",P),c.append("circle").attr("id","circle6").attr("cx",n(new Date(2019,8,22))).attr("cy",o(80.2968)).attr("r",5).attr("fill","#1A7EF7");var E=function(){l.style("opacity",1),m["s"](this).style("stroke","black").style("opacity",1)},S=function(){l.html("Maximum de la <br> consommation électrique. <br> Le niveau est équivalent <br> à celui de la Belgique").style("text-align","center").style("left","".concat(m["l"](this)[0]-30,"px")).style("top","".concat(m["l"](this)[1]+120,"px"))},j=function(){l.style("opacity",0),m["s"](this).style("stroke","none").style("opacity",.8)};m["s"]("#circle6").on("mouseover",E).on("mousemove",S).on("mouseleave",j),c.append("circle").attr("id","circle7").attr("cx",n(new Date(2020,0,3))).attr("cy",o(74.3374)).attr("r",5).attr("fill","#1A7EF7");var O=function(){l.style("opacity",1),m["s"](this).style("stroke","black").style("opacity",1)},B=function(){l.html("Consommation actuelle. <br> Elle correspond à celle du Chili. <br> Ou deux fois celle du Qatar. <br> Ou trois fois celle de l'Irlande").style("text-align","center").style("left","".concat(m["l"](this)[0]-30,"px")).style("top","".concat(m["l"](this)[1]+100,"px"))},M=function(){l.style("opacity",0),m["s"](this).style("stroke","none").style("opacity",.8)};m["s"]("#circle7").on("mouseover",O).on("mousemove",B).on("mouseleave",M),c.append("line").style("stroke","grey").style("z-index",-1).attr("x1",0).attr("y1",o(10)).attr("x2",e).attr("y2",o(10)),c.append("line").style("stroke","grey").attr("x1",0).attr("y1",o(20)).attr("x2",e).attr("y2",o(20)),c.append("line").style("stroke","grey").attr("x1",0).attr("y1",o(30)).attr("x2",e).attr("y2",o(30)),c.append("line").style("stroke","grey").attr("x1",0).attr("y1",o(40)).attr("x2",e).attr("y2",o(40)),c.append("line").style("stroke","grey").attr("x1",0).attr("y1",o(50)).attr("x2",e).attr("y2",o(50)),c.append("line").style("stroke","grey").attr("x1",0).attr("y1",o(60)).attr("x2",e).attr("y2",o(60)),c.append("line").style("stroke","grey").attr("x1",0).attr("y1",o(70)).attr("x2",e).attr("y2",o(70)),c.append("line").style("stroke","grey").attr("x1",0).attr("y1",o(80)).attr("x2",e).attr("y2",o(80))}))}},Z=K,tt=(a("f968"),Object(l["a"])(Z,X,Q,!1,null,null,null)),et=tt.exports,at={name:"LineChartView",components:{LineChart:et}},rt=at,nt=Object(l["a"])(rt,J,R,!1,null,null,null),ot=nt.exports;n["default"].use(u["a"]);var st=new u["a"]({routes:[{path:"/Companies",name:"Companies",component:k},{path:"/WorldMapView",name:"WorldMapView",component:D},{path:"/StackedBarChartView",name:"StackedBarChartView",component:Y},{path:"/LineChartView",name:"LineChartView",component:ot}]});n["default"].config.productionTip=!1,n["default"].use(r["a"]),new n["default"]({render:function(t){return t(d)},router:st}).$mount("#app")},"713c":function(t,e,a){},"8b66":function(t,e,a){"use strict";var r=a("713c"),n=a.n(r);n.a},a324:function(t,e,a){},f968:function(t,e,a){"use strict";var r=a("a324"),n=a.n(r);n.a}});
//# sourceMappingURL=app.2a3f5a4c.js.map