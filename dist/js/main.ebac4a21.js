(function(t){function e(e){for(var r,i,c=e[0],a=e[1],s=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(e);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={main:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=a;u.push(["c96c","chunk-vendors"]),n()})({7617:function(t,e,n){"use strict";n("f9b1")},c96c:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",[t._v(t._s(t.count))]),e("button",{on:{click:t.clickBtn}},[t._v("点击")])])},u=[],i={name:"App",data(){return{count:1,show:!1}},components:{},methods:{clickBtn(){this.count++,this.show=!this.show,console.log("ppm ",this.show)}}},c=i,a=(n("7617"),n("2877")),s=Object(a["a"])(c,o,u,!1,null,"81cd896e",null),l=s.exports,p=n("8c4f"),f=function(){var t=this;t._self._c;return t._m(0)},d=[function(){var t=this,e=t._self._c;return e("div",[e("div",[t._v("home")])])}],h={},m=h,v=Object(a["a"])(m,f,d,!1,null,null,null),_=v.exports,b=function(){var t=this,e=t._self._c;return e("div",[t._v("About Page")])},w=[],y={},g=Object(a["a"])(y,b,w,!1,null,null,null),O=g.exports;r["a"].use(p["a"]);const j=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:O}];function I(){return new p["a"]({mode:"history",routes:j})}var P=n("2f62");function S(t){const e=[{name:"item1",id:1},{name:"item2",id:2},{name:"item3",id:3}],n=e.find(e=>e.id==t);return Promise.resolve(n)}function T(){return new P["a"].Store({state:{item:{}},actions:{fetchItem({commit:t},e){return S(e).then(e=>{t("setItem",e)})}},mutations:{setItem(t,e){t.item=e}}})}function x(t){const e=I(),n=T(),o=new r["a"]({router:e,store:n,render:t=>t(l)});return{router:e,store:n,app:o}}r["a"].use(P["a"]),r["a"].config.productionTip=!1;const{app:A,router:k,store:M}=x();window.__INITIAL_STATE__&&M.replaceState(window.__INITIAL_STATE__),k.onReady(()=>{A.$mount("#app",!0)})},f9b1:function(t,e,n){}});
//# sourceMappingURL=main.ebac4a21.js.map