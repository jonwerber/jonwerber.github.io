(function(e){function t(t){for(var o,a,c=t[0],i=t[1],u=t[2],f=0,p=[];f<c.length;f++)a=c[f],r[a]&&p.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(t);while(p.length)p.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(l.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},l=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=i;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"46ef":function(e,t,n){"use strict";var o=n("c847"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},l=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("button",{staticClass:"cloudinary-button",attrs:{id:"upload_widget"}},[e._v("Upload files")])])}],i={name:"HelloWorld",props:{msg:String},beforeCreate:function(){console.log("before create");var e=document.createElement("script");e.src="https://widget.cloudinary.com/v2.0/global/all.js",e.id="cloudinary",e.onload=function(){var e=cloudinary.createUploadWidget({cloudName:"uwm",apiKey:"767347319899842",styles:{palette:{window:"#EAF7FF",sourceBg:"#FFFFFF",windowBorder:"#CCCCCC",tabIcon:"#005F9E",inactiveTabIcon:"#69778A",menuIcons:"#005F9E",link:"#005F9E",action:"#005F9E",inProgress:"#0194c7",complete:"#53ad9d",error:"#c43737",textDark:"#000000",textLight:"#FFFFFF"},fonts:{default:null,"font-family: 'Roboto', sans-serif":{url:"https://fonts.googleapis.com/css?family=Roboto&display=swap",active:!0}}},uploadPreset:"my_preset"},function(e,t){!e&&t&&"success"===t.event&&console.log("Done! Here is the image info: ",t.info)});document.getElementById("upload_widget").addEventListener("click",function(){e.open()},!1)},document.getElementsByTagName("head")[0].appendChild(e)},mounted:function(){console.log("mounted"),console.log("this =",document)}},u=i,s=(n("46ef"),n("2877")),f=Object(s["a"])(u,a,c,!1,null,"9729c8da",null),p=f.exports,d={name:"app",components:{HelloWorld:p}},m=d,g=(n("034f"),Object(s["a"])(m,r,l,!1,null,null,null)),v=g.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(v)}}).$mount("#app")},"64a9":function(e,t,n){},c847:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.49852440.js.map