(function(e){function t(t){for(var r,o,l=t[0],i=t[1],s=t[2],f=0,u=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(u.length)u.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0afe":function(e,t,n){},"2aba":function(e,t,n){},"3ac5":function(e,t,n){"use strict";n("74c9")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,o){var l=Object(r["k"])("FolderView");return Object(r["g"])(),Object(r["c"])(l,{name:"$",folders:e.folders,files:e.files},null,8,["folders","files"])}n("b0c0");Object(r["i"])("data-v-1899edd4");var c={class:"folder"},o=Object(r["e"])("img",{src:"typeIcons/folder.svg",alt:""},null,-1);function l(e,t,n,a,l,i){var s=Object(r["k"])("FileView"),p=Object(r["k"])("FolderView",!0);return Object(r["g"])(),Object(r["d"])("p",c,[Object(r["f"])(Object(r["l"])(n.name)+" ",1),o,(Object(r["g"])(!0),Object(r["d"])(r["a"],null,Object(r["j"])(n.files,(function(e){return Object(r["g"])(),Object(r["c"])(s,{name:e.name,type:e.type},null,8,["name","type"])})),256)),(Object(r["g"])(!0),Object(r["d"])(r["a"],null,Object(r["j"])(n.folders,(function(e){return Object(r["g"])(),Object(r["c"])(p,{name:e.name,folders:e.folders,files:e.files},null,8,["name","folders","files"])})),256))])}Object(r["h"])(),Object(r["i"])("data-v-93e1c438");var i={class:"file"},s=["src"];function p(e,t,n,a,c,o){return Object(r["g"])(),Object(r["d"])("p",i,[Object(r["f"])(Object(r["l"])(n.name)+" ",1),Object(r["e"])("img",{src:"typeIcons/"+n.type+".svg"},null,8,s)])}Object(r["h"])();var f={name:"FileView",props:{name:String,type:String,length:String}},u=(n("3ac5"),n("6b0d")),g=n.n(u);const d=g()(f,[["render",p],["__scopeId","data-v-93e1c438"]]);var b=d,j={name:"FolderView",components:{FileView:b},props:{name:String,folders:Array,files:Array}};n("ebe9");const m=g()(j,[["render",l],["__scopeId","data-v-1899edd4"]]);var v=m,O={folders:[{name:"assets",folders:[{name:"icons",folders:[],files:[{name:"close.svg",type:"image/svg",length:"1024"},{name:"open.svg",type:"image/svg",length:"1024"},{name:"exit.svg",type:"image/svg",length:"1024"},{name:"relocat.svg",type:"image/svg",length:"1024"}]},{name:"backgrounds",folders:[],files:[{name:"common.jpeg",type:"image/jpeg",length:"1024"},{name:"secondary.jpg",type:"image/jpeg",length:"1024"},{name:"overlay.png",type:"image/png",length:"1024"}]}],files:[]}],files:[{name:".browserslistrc",type:"application/octet-stream",length:"1024"},{name:".gitignore",type:"text/plain",length:"231"},{name:"babel.config.js",type:"application/javascript",length:"73"},{name:"package-lock.json",type:"application/json",length:"47941"}]},y={name:"App",components:{FolderView:v},data:function(){return O}};n("aa15");const h=g()(y,[["render",a]]);var w=h;Object(r["b"])(w).mount("#app")},"74c9":function(e,t,n){},aa15:function(e,t,n){"use strict";n("2aba")},ebe9:function(e,t,n){"use strict";n("0afe")}});
//# sourceMappingURL=app.cd30d5f7.js.map