(function(t){function e(e){for(var r,c,i=e[0],s=e[1],l=e[2],d=0,u=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&u.push(n[c][0]),n[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},o=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/bitcoin_consumption/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0210":function(t,e,a){},"21d1":function(t,e,a){"use strict";var r=a("0210"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("5f5b"),n=(a("f9e3"),a("2dd8"),a("2b0e")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("Projet DataViz - BTC")]),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("router-link",{staticClass:"nav-link",attrs:{to:"/WorldMapView"}},[t._v(" Pays ")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/Companies"}},[t._v(" Entreprises ")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/StackedBarChartView"}},[t._v(" StackedBarChartView ")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/LineChartView"}},[t._v(" LineChartView ")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("FR")])],1)],1)],1)],1)],1),a("router-view")],1)},c=[],i={name:"app"},s=i,l=a("2877"),p=Object(l["a"])(s,o,c,!1,null,null,null),d=p.exports,u=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"companies"}},[a("svg",{staticClass:"companies"})])},y=[],h=(a("159b"),a("5698")),m=a("1157"),g=a.n(m);window.$=g.a;var v={name:"Companies",data:function(){return{isConnected:!1,socketMessage:"",lastBlock:""}},methods:{connect:function(){var t=this;this.socket=new WebSocket("wss://ws.blockchain.info/inv"),this.socket.onopen=function(){t.socketMessage="connected",t.socket.send('{"op":"ping_tx"}'),t.socket.onmessage=function(e){var a=e.data;console.log(t.socket),t.lastBlock=a}}}},mounted:function(){if(localStorage.days)console.log("lol");else{var t="https://blockchain.info/blocks/",e=Date.now();localStorage.timeStamp=e,localStorage.days=[];for(var a=0;a<14;a+=1){var r="".concat(t).concat(e-3600*a*24*1e3,"?format=json");console.log(r),window.$.ajax({url:r,type:"GET",crossDomain:!0,dataType:"json",success:function(t){var e=JSON.parse(t);console.log(e.status)},error:function(t){console.log(t)}})}}var n=600,o=300,c=[];h["c"]("https://pierrejonin.github.io/bitcoin_consumption".concat("/data/test.csv"),(function(t){t.forEach((function(t){c.push(t.id)}));var e=5,a=n/c.length;h["s"]("svg.companies").attr("width",n).attr("height",o).attr("class","bar-chart").selectAll("rect").data(c).enter().append("rect").attr("y",(function(t){return o-t})).attr("height",(function(t){return t})).attr("width",a-e).attr("transform",(function(t,e){var r=[a*e,0];return"translate(".concat(r,")")}))}))}},b=v,x=Object(l["a"])(b,f,y,!1,null,null,null),_=x.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"WorldMapView"},[a("WorldMap")],1)},w=[],C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"my_dataviz"}},[a("div",{attrs:{id:"legendes"}},[a("div",{attrs:{id:"legende1"}}),a("div",{attrs:{id:"legende2"}})])])}],S=(a("99af"),a("b0c0"),a("a9e3"),a("c35a"),a("b680"),a("87da")),j=a("e740"),E={name:"WorldMap",mounted:function(){var t=h["s"]("#my_dataviz").append("svg").attr("width",900).attr("height",700).attr("transform","translate(".concat(0,",",0,")")),e=+t.attr("width"),a=+t.attr("height");t.append("text").attr("x",500).attr("y",590).attr("text-anchor","middle").style("font-size","24px").style("text-decoration","underline").text("Bitcoin Electricity Consumption vs. Country Electricicty Consumption"),t.append("text").attr("x",500).attr("y",610).attr("text-anchor","middle").style("font-size","12px").text("Sources : CIA Factbook; Digiconomist");h["g"]();var r=h["f"]().scale(120).center([0,20]).translate([e/2,a/2]),n=h["j"](),o=h["q"](S["a"]).domain([0,1]),c=h["q"](j["a"]).domain([1,200]),i=300,s=50,l=h["s"]("#legende1").append("svg").attr("width",i+15).attr("height",s),p=l.append("defs").append("svg:linearGradient").attr("id","gradientB").attr("x1","0%").attr("y1","100%").attr("x2","100%").attr("y2","100%").attr("spreadMethod","pad");p.append("stop").attr("offset","0%").attr("stop-color",o(0)).attr("stop-opacity",1),p.append("stop").attr("offset","100%").attr("stop-color",o(1)).attr("stop-opacity",1),l.append("rect").attr("width",i).attr("height",s-30).style("fill","url(#gradientB)").attr("transform","translate(0,10)");var d=h["o"]().range([300,0]).domain([100,0]),u=h["a"]().scale(d).ticks(5);l.append("g").attr("class","y axis").attr("transform","translate(0,30)").call(u).append("text").attr("transform","rotate(-90)").attr("y",0).attr("dy",".71em").style("text-anchor","end").text("axis title");var f=h["s"]("#legende2").append("svg").attr("width",i+30).attr("height",s),y=f.append("defs").append("svg:linearGradient").attr("id","gradient").attr("x1","0%").attr("y1","100%").attr("x2","100%").attr("y2","100%").attr("spreadMethod","pad");y.append("stop").attr("offset","0%").attr("stop-color",c(1)).attr("stop-opacity",1),y.append("stop").attr("offset","15%").attr("stop-color",c(13)).attr("stop-opacity",1),y.append("stop").attr("offset","80%").attr("stop-color",c(160)).attr("stop-opacity",1),y.append("stop").attr("offset","100%").attr("stop-color",c(250)).attr("stop-opacity",1),f.append("rect").attr("width",i).attr("height",s-30).style("fill","url(#gradient)").attr("transform","translate(0,10)");var m=h["o"]().range([300,0]).domain([2e4,100]),g=h["a"]().scale(m).ticks(5);function v(e,a){var i=h["s"]("body").append("div").style("position","absolute").attr("class","tooltip").style("opacity",1).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px").style("pointer-events","none");function s(){i.style("opacity",0).classed("hidden",!0),h["t"]("path").attr("stroke","#fff").attr("stroke-width","1px")}function l(t){var e=n.get(t.properties.name)||0,a="<strong>".concat(t.properties.name,"</strong><br>Consommation : <i>").concat(e.toLocaleString()," kWH</i><br>Rapport : <i>").concat(100*Number.parseFloat((75e9/e).toFixed(2)),"%</i>");i.style("opacity",.99).classed("hidden",!1).style("left","".concat(h["d"].pageX+30,"px")).style("top","".concat(h["d"].pageY-80,"px")).html(a),h["s"](this).attr("stroke-width","2px").attr("stroke","#2e006c")}function p(){i.style("opacity",0).classed("hidden",!0),h["t"]("path").attr("stroke","#fff").attr("stroke-width","1px")}t.append("g").selectAll("path").data(a.features).enter().append("path").attr("stroke","#fff").attr("stroke-width","1px").attr("d",h["g"]().projection(r)).attr("fill",(function(t){var e=n.get(t.properties.name)||0;if(0===e)return"grey";var a=Number.parseFloat(75e9/e);return a<1?o(a):c(a)})).on("mouseover",s).on("mousemove",l).on("mouseleave",p)}f.append("g").attr("class","y axis").attr("transform","translate(0,30)").call(g).append("text").attr("transform","rotate(-90)").attr("y",0).attr("dy",".71em").style("text-anchor","end").text("axis title"),h["m"]().defer(h["h"],"https://pierrejonin.github.io/bitcoin_consumption".concat("/data/custom.geo.json")).defer(h["c"],"https://pierrejonin.github.io/bitcoin_consumption".concat("/data/data_countries.csv"),(function(t){n.set(t.Country,+t.Consumption)})).await(v)}},O=E,M=(a("21d1"),Object(l["a"])(O,C,P,!1,null,null,null)),V=M.exports,B={name:"WorldMapView",components:{WorldMap:V}},z=B,D=Object(l["a"])(z,k,w,!1,null,null,null),$=D.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"StackedBarChartView"},[a("StackedBarChart")],1)},L=[],T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"my_dataviz"}},[a("button",{attrs:{id:"fossil"}},[t._v("Fossil")]),a("button",{attrs:{id:"nuclear"}},[t._v("Nuclear")]),a("button",{attrs:{id:"hydroelectric"}},[t._v("Hydroelectric")]),a("button",{attrs:{id:"renewable"}},[t._v("Renewable")])])}],N=(a("fb6a"),a("4e82"),a("9129"),a("d3b7"),a("ddb0"),{name:"StackedBarChart",mounted:function(){var t={top:10,right:30,bottom:50,left:50},e=400-t.left-t.right,a=400-t.top-t.bottom,r=h["s"]("#my_dataviz").append("svg").attr("width",1500+t.left+t.right).attr("height",800+t.top+t.bottom).append("g").attr("transform","translate(".concat(t.left,",").concat(t.top,")"));r.append("text").attr("x",180).attr("y",450).attr("text-anchor","middle").style("font-size","24px").style("text-decoration","underline").text("Electric energy sources by Country"),r.append("text").attr("x",500).attr("y",610).attr("text-anchor","middle").style("font-size","12px").text("Sources : CIA Factbook; Digiconomist"),h["c"]("https://pierrejonin.github.io/bitcoin_consumption".concat("/data/data_countries.csv"),(function(t){var n=["Percentage_fossil","Percentage_nuclear","Percentage_hydroelectric","Percentage_renewable"];t.sort((function(t,e){return e.Consumption-t.Consumption}));var o=t.slice(0,10);o.sort((function(t,e){return e.Percentage_fossil-t.Percentage_fossil}));var c=[];o.forEach((function(t){return c.push(t.Country)}));var i=h["n"]().domain(c).range([0,e]).padding([.2]);r.append("g").attr("transform","translate(0,".concat(a,")")).call(h["a"](i).tickSizeOuter(0)).selectAll("text").attr("y",0).attr("x",5).attr("transform","rotate(45)").style("text-anchor","start");var s=h["o"]().domain([0,100]).range([a,0]);r.append("g").call(h["b"](s));var l=h["p"]().domain(n).range(["black","red","blue","green"]),p=h["s"]("div").append("div").style("position","absolute").attr("class","tooltip").style("opacity",1).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px").style("pointer-events","none");function d(t){var e=h["s"](this.parentNode).datum().key,a=t.data.Country;p.html("".concat(e,":").concat(t[1]-t[0],"%<br>").concat(a)).style("opacity",1)}function u(){p.style("left","".concat(h["d"].pageX,"px")).style("top","".concat(h["d"].pageY,"px"))}function f(){p.style("opacity",0)}function y(t,n,o){var c=h["u"]().keys(n)(o);r.selectAll("a").remove(),r.selectAll("g").remove(),i=h["n"]().domain(t).range([0,e]).padding([.2]),r.append("g").attr("transform","translate(0,".concat(a,")")).call(h["a"](i).tickSizeOuter(0)).selectAll("text").attr("y",0).attr("x",5).attr("transform","rotate(45)").style("text-anchor","start"),s=h["o"]().domain([0,100]).range([a,0]),r.append("g").call(h["b"](s)),r.append("a").selectAll("g").data(c).enter().append("g").attr("fill",(function(t){return l(t.key)})).selectAll("rect").data((function(t){return t})).enter().append("rect").attr("x",(function(t){return i(t.data.Country)})).attr("y",(function(t){return s(t[1])})).attr("height",(function(t){return Number.isNaN(s(t[0])-s(t[1]))?0:s(t[0])-s(t[1])})).attr("width",i.bandwidth()).attr("stroke","grey").on("mouseover",d).on("mousemove",u).on("mouseleave",f)}y(c,n,o),h["t"]("#fossil").on("click",(function(){n=["Percentage_fossil","Percentage_nuclear","Percentage_hydroelectric","Percentage_renewable"],l=h["p"]().domain(n).range(["black","red","blue","green"]),o.sort((function(t,e){return e.Percentage_fossil-t.Percentage_fossil})),c=[],o.forEach((function(t){return c.push(t.Country)})),y(c,n,o)})),h["t"]("#nuclear").on("click",(function(){n=["Percentage_nuclear","Percentage_fossil","Percentage_hydroelectric","Percentage_renewable"],l=h["p"]().domain(n).range(["red","black","blue","green"]),o.sort((function(t,e){return e.Percentage_nuclear-t.Percentage_nuclear})),c=[],o.forEach((function(t){return c.push(t.Country)})),y(c,n,o)})),h["t"]("#hydroelectric").on("click",(function(){n=["Percentage_hydroelectric","Percentage_fossil","Percentage_nuclear","Percentage_renewable"],l=h["p"]().domain(n).range(["blue","black","red","green"]),o.sort((function(t,e){return e.Percentage_hydroelectric-t.Percentage_hydroelectric})),c=[],o.forEach((function(t){return c.push(t.Country)})),y(c,n,o)})),h["t"]("#renewable").on("click",(function(){n=["Percentage_renewable","Percentage_fossil","Percentage_hydroelectric","Percentage_nuclear"],l=h["p"]().domain(n).range(["green","black","blue","red"]),o.sort((function(t,e){return e.Percentage_renewable-t.Percentage_renewable})),c=[],o.forEach((function(t){return c.push(t.Country)})),y(c,n,o)}))}))}}),F=N,G=(a("8b66"),Object(l["a"])(F,T,W,!1,null,null,null)),U=G.exports,Y={name:"StackedBarChartView",components:{StackedBarChart:U}},H=Y,J=Object(l["a"])(H,A,L,!1,null,null,null),R=J.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"LineChartView"},[a("LineChart")],1)},I=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"my_dataviz"}})},K=[],Q={name:"LineChart",mounted:function(){var t={top:20,right:20,bottom:100,left:50},e=960-t.left-t.right,a=500-t.top-t.bottom,r=h["w"]("%Y-%m-%dT%H:%M:%S"),n=h["r"]().range([0,e]),o=h["o"]().range([a,0]),c=h["i"]().x((function(t){return n(t.DateandTime)})).y((function(t){return o(t.GUESS)})),i=h["s"]("#my_dataviz").append("svg").attr("width",e+t.left+t.right).attr("height",a+t.top+t.bottom).append("g").attr("transform","translate(".concat(t.left,",").concat(t.top,")")),s=h["s"]("#my_dataviz").append("div").style("opacity",0).attr("class","tooltip").style("background-color","lightblue").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px");h["c"]("https://pierrejonin.github.io/bitcoin_consumption".concat("/data/bitcoin_electric.csv"),(function(t,e){if(t)throw t;e.forEach((function(t){t.DateandTime=r(t.DateandTime),t.GUESS=+t.GUESS})),n.domain(h["e"](e,(function(t){return t.DateandTime}))),o.domain([0,h["k"](e,(function(t){return t.GUESS}))]),i.append("path").data([e]).attr("class","line").attr("d",c),i.append("g").attr("class","axis").attr("transform","translate(0,".concat(a,")")).call(h["a"](n).tickFormat(h["v"]("%b %Y"))).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy",".15em").attr("transform","rotate(-65)"),i.append("g").attr("class","axis").call(h["b"](o)),i.append("circle").attr("id","circle1").attr("cx",n(new Date(2017,4,23))).attr("cy",o(10.048)).attr("r",5).attr("fill","#69b3a2");var l=function(){s.style("opacity",1),h["s"](this).style("stroke","black").style("opacity",1)},p=function(){s.html("a").style("left","".concat(h["l"](this)[0]-50,"px")).style("top","".concat(h["l"](this)[1],"px"))},d=function(){s.style("opacity",0),h["s"](this).style("stroke","none").style("opacity",.8)};h["s"]("#circle1").on("mouseover",l).on("mousemove",p).on("mouseleave",d),i.append("circle").attr("id","circle2").attr("cx",n(new Date(2017,4,23))).attr("cy",o(10.048)).attr("r",5).attr("fill","#69b3a2");var u=function(){s.style("opacity",1),h["s"](this).style("stroke","black").style("opacity",1)},f=function(){s.html("b").style("left","".concat(h["l"](this)[0]-50,"px")).style("top","".concat(h["l"](this)[1],"px"))},y=function(){s.style("opacity",0),h["s"](this).style("stroke","none").style("opacity",.8)};h["s"]("#circle2").on("mouseover",u).on("mousemove",f).on("mouseleave",y),i.append("circle").attr("id","circle3").attr("cx",n(new Date(2017,4,23))).attr("cy",o(10.048)).attr("r",5).attr("fill","#69b3a2");var m=function(){s.style("opacity",1),h["s"](this).style("stroke","black").style("opacity",1)},g=function(){s.html("c").style("left","".concat(h["l"](this)[0]-30,"px")).style("top","".concat(h["l"](this)[1]+30,"px"))},v=function(){s.style("opacity",0),h["s"](this).style("stroke","none").style("opacity",.8)};h["s"]("#circle1").on("mouseover",m).on("mousemove",g).on("mouseleave",v),i.append("circle").attr("id","circle4").attr("cx",n(new Date(2019,8,22))).attr("cy",o(80.2968)).attr("r",5).attr("fill","#69b3a2");var b=function(){s.style("opacity",1),h["s"](this).style("stroke","black").style("opacity",1)},x=function(){s.html("Max conso").style("left","".concat(h["l"](this)[0]-30,"px")).style("top","".concat(h["l"](this)[1]+30,"px"))},_=function(){s.style("opacity",0),h["s"](this).style("stroke","none").style("opacity",.8)};h["s"]("#circle4").on("mouseover",b).on("mousemove",x).on("mouseleave",_)}))}},Z=Q,tt=(a("f968"),Object(l["a"])(Z,X,K,!1,null,null,null)),et=tt.exports,at={name:"LineChartView",components:{LineChart:et}},rt=at,nt=Object(l["a"])(rt,q,I,!1,null,null,null),ot=nt.exports;n["default"].use(u["a"]);var ct=new u["a"]({routes:[{path:"/Companies",name:"Companies",component:_},{path:"/WorldMapView",name:"WorldMapView",component:$},{path:"/StackedBarChartView",name:"StackedBarChartView",component:R},{path:"/LineChartView",name:"LineChartView",component:ot}]});n["default"].config.productionTip=!1,n["default"].use(r["a"]),new n["default"]({render:function(t){return t(d)},router:ct}).$mount("#app")},"713c":function(t,e,a){},"8b66":function(t,e,a){"use strict";var r=a("713c"),n=a.n(r);n.a},a324:function(t,e,a){},f968:function(t,e,a){"use strict";var r=a("a324"),n=a.n(r);n.a}});
//# sourceMappingURL=app.ffb2cb2a.js.map