/*! vue-ydui v0.0.5 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.KeyBoard=void 0;var o=r(66),i=n(o);t.KeyBoard=i.default},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},2:function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=c[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(l(n.parts[i],t))}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(l(n.parts[i],t));c[n.id]={id:n.id,refs:1,parts:s}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],i=o[0],s=o[1],a=o[2],l=o[3],d={css:s,media:a,sourceMap:l};r[i]?r[i].parts.push(d):t.push(r[i]={id:i,parts:[d]})}return t}function i(e,t){var r=b(),n=k[k.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),k.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=k.indexOf(e);t>=0&&k.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e,t){var r,n,o;if(t.singleton){var i=h++;r=m||(m=a(t)),n=d.bind(null,r,i,!1),o=d.bind(null,r,i,!0)}else r=a(t),n=f.bind(null,r),o=function(){s(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function d(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function f(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var c={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=u(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,h=0,k=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],s=0;s<r.length;s++){var a=r[s],l=c[a.id];l.refs--,i.push(l)}if(e){var d=o(e);n(d,t)}for(var s=0;s<i.length;s++){var l=i[s];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete c[l.id]}}}};var y=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},14:function(e,t,r){t=e.exports=r(1)(),t.push([e.id,'.mask-keyboard{background-color:rgba(0,0,0,.4);z-index:500;right:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.m-keyboard,.mask-keyboard{position:fixed;bottom:0;left:0}.m-keyboard{width:100%;z-index:1000;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;background-color:#f7f7f7}.m-keyboard.keyboard-active{-webkit-transform:translate(0);transform:translate(0)}.keyboard-content{background-color:#fff;margin-top:.3rem;position:relative}.keyboard-content:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;height:1px;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-title{overflow:hidden;padding:.2rem 0 .12rem;color:#222;margin-bottom:1px;font-size:.24rem;text-align:center;background-color:#fff}.keyboard-title:before{font-family:YDUI-INLAY;content:"\\E60A";font-size:.26rem;color:#ff2424;line-height:1;margin-right:.06rem}.keyboard-numbers{font-size:.48rem;background-color:#fff}.keyboard-numbers>li{width:100%}.keyboard-numbers>li,.keyboard-numbers>li>a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.keyboard-numbers>li>a{width:1%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#222;height:1rem;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#fff}.keyboard-numbers>li>a:active{background-color:#f2f2f2}.keyboard-numbers>li>a:not(:last-child):after{content:"";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-numbers>li>a:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;height:1px;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-numbers>li:last-child>a:last-child,.keyboard-numbers>li:last-child>a:nth-last-child(3){background-color:#f7f7f7;font-size:.3rem;color:#686868}.keyboard-numbers>li:last-child>a:last-child:after{font-family:YDUI-INLAY;content:"\\E609";font-size:.6rem}.keyboard-head{height:.8rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#1f2324;font-size:.3rem;position:relative}.keyboard-head:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;height:1px;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-password{margin:0 .8rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;background-color:#fff}.keyboard-password:after{content:"";width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);position:absolute;border:1px solid #d9d9d9;top:0;left:0;-webkit-transform-origin:0 0;transform-origin:0 0;border-radius:4px}.keyboard-password li{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:1rem}.keyboard-password li:not(:last-child):after{content:"";width:1px;height:50%;position:absolute;right:0;top:25%;background-color:#d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.keyboard-password li i{width:6px;height:6px;border-radius:50%;background-color:#000}.keyboard-error{padding:2px .8rem;color:red;overflow:hidden;height:.5rem;line-height:.5rem;font-size:.24rem}',""])},33:function(e,t,r){var n=r(14);"string"==typeof n&&(n=[[e.id,n,""]]);r(2)(n,{});n.locals&&(e.exports=n.locals)},66:function(e,t,r){var n,o;r(33),n=r(141);var i=r(89);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,e.exports=n},89:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mask-keyboard",on:{click:function(t){t.stopPropagation(),e.close(t)}}}),e._v(" "),r("div",{staticClass:"m-keyboard",class:e.show?"keyboard-active":""},[r("div",{staticClass:"keyboard-head"},[r("strong",{ref:"laoxu"},[e._v("输入数字密码")])]),e._v(" "),r("div",{staticClass:"keyboard-error"},[e._v(e._s(e.error))]),e._v(" "),r("ul",{staticClass:"keyboard-password"},e._l(6,function(t){return r("li",[r("i",{directives:[{name:"show",rawName:"v-show",value:e.nums.length>=t,expression:"nums.length >= n"}]})])})),e._v(" "),r("div",{staticClass:"keyboard-content"},[r("div",{staticClass:"keyboard-title"},[e._v(e._s(e.title))]),e._v(" "),r("ul",{staticClass:"keyboard-numbers"},e._l(4,function(t){return r("li",[4==t?r("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.close(t)}}},[e._v("取消")]):e._e(),e._v(" "),e._l(e.numsArr.slice(3*(t-1),3*t),function(t){return r("a",{attrs:{href:"javascript:;"},on:{click:function(r){r.stopPropagation(),e.numclick(t)}}},[e._v(e._s(t))])}),e._v(" "),4==t?r("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.backspace(t)}}}):e._e()],2)}))])])])},staticRenderFns:[]}},141:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-keyboard",data:function(){return{nums:"",show:!1,error:"",numsArr:[1,2,3,4,5,6,7,8,9,0]}},props:{inputDone:{type:Function},disorder:{type:Boolean,default:!1},value:{type:Boolean,default:!1},title:{type:String,default:"YDUI安全键盘"}},watch:{value:function(e){this.nums="",this.error="",this.show=e,this.show&&this.disorder&&(this.numsArr=this.upsetOrder(this.numsArr))},nums:function(e){e.length>=6&&this.inputDone&&"function"==typeof this.inputDone&&this.inputDone(e)}},methods:{numclick:function(e){this.error="",this.nums.length>=6||(this.nums+=e)},backspace:function(){var e=this.nums;e&&(this.nums=e.substr(0,e.length-1))},upsetOrder:function(e){for(var t=Math.floor,r=Math.random,n=e.length,o=void 0,i=void 0,s=void 0,a=t(n/2)+1;a--;)o=t(r()*n),i=t(r()*n),o!==i&&(s=e[o],e[o]=e[i],e[i]=s);return e},close:function(){this.$emit("input",!1)},setError:function(e){this.error=e,this.nums=""}},mounted:function(){var e=this;this.$yduiBus.$on("keyboard.error",function(t){e.setError(t)}),this.$yduiBus.$on("keyboard.close",this.close)},destroyed:function(){this.close()}}}})});