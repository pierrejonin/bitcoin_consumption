(function(t){function n(n){for(var r,c,u=n[0],l=n[1],i=n[2],f=0,p=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);s&&s(n);while(p.length)p.shift()();return a.push.apply(a,i||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,u=1;u<e.length;u++){var l=e[u];0!==o[l]&&(r=!1)}r&&(a.splice(n--,1),t=c(c.s=e[0]))}return t}var r={},o={app:0},a=[];function c(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=r,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)c.d(e,r,function(n){return t[n]}.bind(null,r));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/bitcoin_consumption/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var i=0;i<u.length;i++)n(u[i]);var s=l;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"019b":function(t,n,e){},"034f":function(t,n,e){"use strict";var r=e("85ec"),o=e.n(r);o.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:e("cf05")}}),r("HelloWorld",{attrs:{msg:"Hello World"}}),r("BarChart")],1)},a=[],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))])])},u=[],l={name:"HelloWorld",props:{msg:String}},i=l,s=(e("bb87"),e("2877")),f=Object(s["a"])(i,c,u,!1,null,"681cb1d5",null),p=f.exports,d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg")},h=[],b=(e("159b"),e("5698")),v={name:"BarChart",mounted:function(){var t=500,n=300,e=[];b["a"]("/data/test.csv").then((function(r){r.forEach((function(t){e.push(t.id)})),console.log(e);var o=5,a=t/e.length;b["b"]("svg").attr("width",t).attr("height",n).attr("class","bar-chart").selectAll("rect").data(e).enter().append("rect").attr("y",(function(t){return n-t})).attr("height",(function(t){return t})).attr("width",a-o).attr("transform",(function(t,n){var e=[a*n,0];return"translate(".concat(e,")")}))}))}},g=v,m=(e("c660"),Object(s["a"])(g,d,h,!1,null,null,null)),y=m.exports,_={name:"app",components:{HelloWorld:p,BarChart:y}},O=_,w=(e("034f"),Object(s["a"])(O,o,a,!1,null,null,null)),j=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(j)}}).$mount("#app")},7048:function(t,n,e){},"85ec":function(t,n,e){},bb87:function(t,n,e){"use strict";var r=e("019b"),o=e.n(r);o.a},c660:function(t,n,e){"use strict";var r=e("7048"),o=e.n(r);o.a},cf05:function(t,n,e){t.exports=e.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.e5f3eea5.js.map