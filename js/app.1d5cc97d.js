(function(t){function e(e){for(var a,c,i=e[0],l=e[1],s=e[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/bitcoin_consumption/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0210":function(t,e,n){},"21d1":function(t,e,n){"use strict";var a=n("0210"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("5f5b"),r=(n("f9e3"),n("2dd8"),n("2b0e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[t._v("Projet DataViz - BTC")]),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("router-link",{staticClass:"nav-link",attrs:{to:"/WorldMapView"}},[t._v(" Pays ")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/Companies"}},[t._v(" Entreprises ")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/StackedBarChartView"}},[t._v(" StackedBarChartView ")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/LineChartView"}},[t._v(" LineChartView ")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("FR")])],1)],1)],1)],1)],1),n("router-view")],1)},c=[],i={name:"app"},l=i,s=n("2877"),u=Object(s["a"])(l,o,c,!1,null,null,null),d=u.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"companies"}},[t._v("Wow !")])},h=[],g={name:"Companies"},m=g,b=Object(s["a"])(m,f,h,!1,null,null,null),v=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WorldMapView"},[n("WorldMap")],1)},_=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"my_dataviz"}})},k=[],x=(n("99af"),n("b0c0"),n("a9e3"),n("c35a"),n("b680"),n("5698")),C=n("87da"),P={name:"WorldMap",mounted:function(){var t=x["s"]("#my_dataviz").append("svg").attr("width",900).attr("height",700).attr("transform","translate(".concat(0,",",0,")")),e=+t.attr("width"),n=+t.attr("height"),a=20,r=["#d4eac7","#c6e3b5","#b7dda2","#a9d68f","#9bcf7d","#8cc86a","#7ec157","#77be4e","#70ba45","#65a83e","#599537","#4e8230","#437029","#385d22","#2d4a1c","#223815"],o=t.append("g").attr("transform","translate(40, 50)");o.selectAll().data(x["m"](r.length)).enter().append("svg:rect").attr("height","".concat(a,"px")).attr("width","".concat(a,"px")).attr("x",5).attr("y",(function(t){return t*a})).style("fill",(function(t){return r[t]}));var c=x["o"]().domain([0,100]).range([0,r.length*a]);o.append("g").attr("class","axis").call(x["b"](c));x["g"]();var i=x["f"]().scale(120).center([0,20]).translate([e/2,n/2]),l=x["j"](),s=x["q"]().domain([5,10,20,30,40,50,75,90,100]).range(C["a"][9]);function u(e,n){var a=x["s"]("body").append("div").style("position","absolute").attr("class","tooltip").style("opacity",1).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px").style("pointer-events","none");function r(){a.style("opacity",0).classed("hidden",!0),x["t"]("path").attr("stroke","#fff").attr("stroke-width","1px")}function o(t){var e=l.get(t.properties.name)||0,n="<strong>".concat(t.properties.name,"</strong><br>Consommation : <i>").concat(e," kWH</i><br>Rapport : <i>").concat(Number.parseFloat((75e9/e).toFixed(2)),"</i>");a.style("opacity",.99).classed("hidden",!1).style("left","".concat(x["d"].pageX+30,"px")).style("top","".concat(x["d"].pageY-80,"px")).html(n),x["s"](this).attr("stroke-width","2px").attr("stroke","#2e006c")}function c(){a.style("opacity",0).classed("hidden",!0),x["t"]("path").attr("stroke","#fff").attr("stroke-width","1px")}t.append("g").selectAll("path").data(n.features).enter().append("path").attr("stroke","#fff").attr("stroke-width","1px").attr("d",x["g"]().projection(i)).attr("fill",(function(t){var e=l.get(t.properties.name)||0;return s(75e11/e)})).on("mouseover",r).on("mousemove",o).on("mouseleave",c)}x["l"]().defer(x["h"],"https://pierrejonin.github.io/bitcoin_consumption".concat("/data/custom.geo.json")).defer(x["c"],"https://pierrejonin.github.io/bitcoin_consumption".concat("/data/data_countries.csv"),(function(t){l.set(t.Country,+t.Consumption)})).await(u)}},j=P,S=(n("21d1"),Object(s["a"])(j,w,k,!1,null,null,null)),E=S.exports,O={name:"WorldMapView",components:{WorldMap:E}},V=O,M=Object(s["a"])(V,y,_,!1,null,null,null),B=M.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"StackedBarChartView"},[n("StackedBarChart")],1)},W=[],$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"my_dataviz"}},[n("button",{attrs:{id:"fossil"}},[t._v("Fossil")]),n("button",{attrs:{id:"nuclear"}},[t._v("Nuclear")]),n("button",{attrs:{id:"hydroelectric"}},[t._v("Hydroelectric")]),n("button",{attrs:{id:"renewable"}},[t._v("Renewable")])])}],A=(n("fb6a"),n("4e82"),n("9129"),n("d3b7"),n("159b"),n("ddb0"),{name:"StackedBarChart",mounted:function(){var t={top:10,right:30,bottom:50,left:50},e=400-t.left-t.right,n=400-t.top-t.bottom,a=x["s"]("#my_dataviz").append("svg").attr("width",e+t.left+t.right).attr("height",n+t.top+t.bottom).append("g").attr("transform","translate(".concat(t.left,",").concat(t.top,")"));x["c"]("https://pierrejonin.github.io/bitcoin_consumption".concat("/data/data_countries.csv"),(function(t){var r=["Percentage_fossil","Percentage_nuclear","Percentage_hydroelectric","Percentage_renewable"];t.sort((function(t,e){return e.Consumption-t.Consumption}));var o=t.slice(0,10);o.sort((function(t,e){return e.Percentage_fossil-t.Percentage_fossil}));var c=[];o.forEach((function(t){return c.push(t.Country)}));var i=x["n"]().domain(c).range([0,e]).padding([.2]);a.append("g").attr("transform","translate(0,".concat(n,")")).call(x["a"](i).tickSizeOuter(0)).selectAll("text").attr("y",0).attr("x",5).attr("transform","rotate(45)").style("text-anchor","start");var l=x["o"]().domain([0,100]).range([n,0]);a.append("g").call(x["b"](l));var s=x["p"]().domain(r).range(["black","red","blue","green"]),u=x["s"]("div").append("div").style("position","absolute").attr("class","tooltip").style("opacity",1).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px").style("pointer-events","none");function d(t){var e=x["s"](this.parentNode).datum().key,n=t.data.Country;u.html("".concat(e,":").concat(t[1]-t[0],"%<br>").concat(n)).style("opacity",1)}function p(){u.style("left","".concat(x["d"].pageX,"px")).style("top","".concat(x["d"].pageY,"px"))}function f(){u.style("opacity",0)}function h(t,r,o){var c=x["u"]().keys(r)(o);a.selectAll("a").remove(),a.selectAll("g").remove(),i=x["n"]().domain(t).range([0,e]).padding([.2]),a.append("g").attr("transform","translate(0,".concat(n,")")).call(x["a"](i).tickSizeOuter(0)).selectAll("text").attr("y",0).attr("x",5).attr("transform","rotate(45)").style("text-anchor","start"),l=x["o"]().domain([0,100]).range([n,0]),a.append("g").call(x["b"](l)),a.append("a").selectAll("g").data(c).enter().append("g").attr("fill",(function(t){return s(t.key)})).selectAll("rect").data((function(t){return t})).enter().append("rect").attr("x",(function(t){return i(t.data.Country)})).attr("y",(function(t){return l(t[1])})).attr("height",(function(t){return Number.isNaN(l(t[0])-l(t[1]))?0:l(t[0])-l(t[1])})).attr("width",i.bandwidth()).attr("stroke","grey").on("mouseover",d).on("mousemove",p).on("mouseleave",f)}h(c,r,o),x["t"]("#fossil").on("click",(function(){r=["Percentage_fossil","Percentage_nuclear","Percentage_hydroelectric","Percentage_renewable"],s=x["p"]().domain(r).range(["black","red","blue","green"]),o.sort((function(t,e){return e.Percentage_fossil-t.Percentage_fossil})),c=[],o.forEach((function(t){return c.push(t.Country)})),h(c,r,o)})),x["t"]("#nuclear").on("click",(function(){r=["Percentage_nuclear","Percentage_fossil","Percentage_hydroelectric","Percentage_renewable"],s=x["p"]().domain(r).range(["red","black","blue","green"]),o.sort((function(t,e){return e.Percentage_nuclear-t.Percentage_nuclear})),c=[],o.forEach((function(t){return c.push(t.Country)})),h(c,r,o)})),x["t"]("#hydroelectric").on("click",(function(){r=["Percentage_hydroelectric","Percentage_fossil","Percentage_nuclear","Percentage_renewable"],s=x["p"]().domain(r).range(["blue","black","red","green"]),o.sort((function(t,e){return e.Percentage_hydroelectric-t.Percentage_hydroelectric})),c=[],o.forEach((function(t){return c.push(t.Country)})),h(c,r,o)})),x["t"]("#renewable").on("click",(function(){r=["Percentage_renewable","Percentage_fossil","Percentage_hydroelectric","Percentage_nuclear"],s=x["p"]().domain(r).range(["green","black","blue","red"]),o.sort((function(t,e){return e.Percentage_renewable-t.Percentage_renewable})),c=[],o.forEach((function(t){return c.push(t.Country)})),h(c,r,o)}))}))}}),T=A,N=Object(s["a"])(T,$,z,!1,null,null,null),D=N.exports,F={name:"StackedBarChartView",components:{StackedBarChart:D}},G=F,U=Object(s["a"])(G,L,W,!1,null,null,null),Y=U.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"LineChartView"},[n("LineChart")],1)},R=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"my_dataviz"}})},X=[],q={name:"LineChart",mounted:function(){var t={top:20,right:20,bottom:100,left:50},e=960-t.left-t.right,n=500-t.top-t.bottom,a=x["w"]("%Y-%m-%dT%H:%M:%S"),r=x["r"]().range([0,e]),o=x["o"]().range([n,0]),c=x["i"]().x((function(t){return r(t.DateandTime)})).y((function(t){return o(t.GUESS)})),i=x["s"]("#my_dataviz").append("svg").attr("width",e+t.left+t.right).attr("height",n+t.top+t.bottom).append("g").attr("transform","translate(".concat(t.left,",").concat(t.top,")"));x["c"]("https://pierrejonin.github.io/bitcoin_consumption".concat("/data/bitcoin_electric.csv"),(function(t,l){if(t)throw t;l.forEach((function(t){t.DateandTime=a(t.DateandTime),t.GUESS=+t.GUESS})),r.domain(x["e"](l,(function(t){return t.DateandTime}))),o.domain([0,x["k"](l,(function(t){return t.GUESS}))]),i.append("path").data([l]).attr("class","line").attr("d",c),i.append("g").attr("class","axis").attr("transform","translate(0,".concat(n,")")).call(x["a"](r).tickFormat(x["v"]("%b %Y"))).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy",".15em").attr("transform","rotate(-65)"),i.append("g").attr("class","axis").call(x["b"](o)),i.append("svg:line").attr("x1",0).attr("x2",e).attr("y1",o(10)).attr("y2",o(10)).style("stroke","rgb(189, 189, 189)")}))}},I=q,K=(n("f968"),Object(s["a"])(I,J,X,!1,null,null,null)),Q=K.exports,Z={name:"LineChartView",components:{LineChart:Q}},tt=Z,et=Object(s["a"])(tt,H,R,!1,null,null,null),nt=et.exports;r["default"].use(p["a"]);var at=new p["a"]({routes:[{path:"/Companies",name:"Companies",component:v},{path:"/WorldMapView",name:"WorldMapView",component:B},{path:"/StackedBarChartView",name:"StackedBarChartView",component:Y},{path:"/LineChartView",name:"LineChartView",component:nt}]});r["default"].config.productionTip=!1,r["default"].use(a["a"]),new r["default"]({render:function(t){return t(d)},router:at}).$mount("#app")},a324:function(t,e,n){},f968:function(t,e,n){"use strict";var a=n("a324"),r=n.n(a);r.a}});
//# sourceMappingURL=app.1d5cc97d.js.map