(function(t){function e(e){for(var r,i,c=e[0],l=e[1],u=e[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);s&&s(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/bitcoin_consumption/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"019b":function(t,e,n){},"0210":function(t,e,n){},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"21d1":function(t,e,n){"use strict";var r=n("0210"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Hello World"}}),r("WorldMap")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))])])},c=[],l={name:"HelloWorld",props:{msg:String}},u=l,s=(n("bb87"),n("2877")),p=Object(s["a"])(u,i,c,!1,null,"681cb1d5",null),d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"my_dataviz"}})},b=[],v=(n("99af"),n("b0c0"),n("a9e3"),n("c35a"),n("b680"),n("5698")),h=n("87da"),m={name:"BarChart",mounted:function(){var t=v["i"]("#my_dataviz").append("svg").attr("width",800).attr("height",600).attr("transform","translate(".concat(0,",",0,")")),e=+t.attr("width"),n=+t.attr("height"),r=(v["d"](),v["c"]().scale(120).center([0,20]).translate([e/2,n/2])),o=v["f"](),a=v["h"]().domain([5,10,20,30,40,50,75,90,100]).range(h["a"][9]);function i(e,n){var i=v["i"]("body").append("div").style("position","absolute").attr("class","tooltip").style("opacity",1).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px");function c(){i.style("opacity",1)}function l(t){var e=o.get(t.properties.name)||0;i.html("".concat(t.properties.name,"<br>").concat(e,"<br>").concat(Number.parseFloat(75e11/e).toFixed(2))).style("left","".concat(v["b"].pageX,"px")).style("top","".concat(v["b"].pageY,"px"))}function u(){i.style("opacity",0)}t.append("g").selectAll("path").data(n.features).enter().append("path").attr("d",v["d"]().projection(r)).attr("fill",(function(t){var e=o.get(t.properties.name)||0;return a(75e11/e)})).on("mouseover",c).on("mousemove",l).on("mouseleave",u)}v["g"]().defer(v["e"],"https://pierrejonin.github.io/bitcoin_consumption".concat("./data/custom.geo.json")).defer(v["a"],"https://pierrejonin.github.io/bitcoin_consumption".concat("./data/data_countries.csv"),(function(t){o.set(t.Country,+t.Consumption)})).await(i)}},g=m,y=(n("21d1"),Object(s["a"])(g,f,b,!1,null,null,null)),_=y.exports,j={name:"app",components:{HelloWorld:d,WorldMap:_}},w=j,x=(n("034f"),Object(s["a"])(w,o,a,!1,null,null,null)),O=x.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,n){},bb87:function(t,e,n){"use strict";var r=n("019b"),o=n.n(r);o.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.ee4e921f.js.map