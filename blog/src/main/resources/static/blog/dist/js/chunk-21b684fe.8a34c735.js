(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-21b684fe"],{"0016":function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,n){"use strict";var r=this&&this.__awaiter||function(i,a,u,c){return new(u||(u=Promise))(function(t,e){function n(t){try{o(c.next(t))}catch(t){e(t)}}function r(t){try{o(c.throw(t))}catch(t){e(t)}}function o(e){e.done?t(e.value):new u(function(t){t(e.value)}).then(n,r)}o((c=c.apply(i,a||[])).next())})},o=this&&this.__generator||function(n,r){var o,i,a,t,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,i&&(a=2&e[0]?i.return:e[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,e[1])).done)return a;switch(i=0,a&&(e=[2&e[0],a.value]),e[0]){case 0:case 1:a=e;break;case 4:return u.label++,{value:e[1],done:!1};case 5:u.label++,i=e[1],e=[0];continue;case 7:e=u.ops.pop(),u.trys.pop();continue;default:if(!(a=0<(a=u.trys).length&&a[a.length-1])&&(6===e[0]||2===e[0])){u=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){u.label=e[1];break}if(6===e[0]&&u.label<a[1]){u.label=a[1],a=e;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(e);break}a[2]&&u.ops.pop(),u.trys.pop();continue}e=r.call(n,u)}catch(t){e=[6,t],i=0}finally{o=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);e.DT=i.DT;var a=function(t){},u=!0,c=function(){(console.warn||console.log).apply(console,arguments)}.bind("[clipboard-polyfill]"),s="text/plain";function l(t){a=t}function d(){u=!1,i.suppressDTWarnings()}function f(n){return r(this,void 0,void 0,function(){var e;return o(this,function(t){if(u&&!n.getData(s)&&c("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),_()){if(function(t){var e=t.getData(s);if(void 0!==e)return window.clipboardData.setData("Text",e);throw"No `text/plain` value was specified."}(n))return[2];throw"Copying failed, possibly because the user rejected it."}if(w(n))return a("regular execCopy worked"),[2];if(-1<navigator.userAgent.indexOf("Edge"))return a('UA "Edge" => assuming success'),[2];if(x(document.body,n))return a("copyUsingTempSelection worked"),[2];if(function(t){var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important"),e.textContent="temporary element",document.body.appendChild(e);var n=x(e,t);return document.body.removeChild(e),n}(n))return a("copyUsingTempElem worked"),[2];if(void 0!==(e=n.getData(s))&&function(t){a("copyTextUsingDOM");var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important");var n=e;e.attachShadow&&(a("Using shadow DOM."),n=e.attachShadow({mode:"open"}));var r=document.createElement("span");r.innerText=t,n.appendChild(r),document.body.appendChild(e),D(r);var o=document.execCommand("copy");return T(),document.body.removeChild(e),o}(e))return a("copyTextUsingDOM worked"),[2];throw"Copy command failed."})})}function p(e){return r(this,void 0,void 0,function(){return o(this,function(t){return navigator.clipboard&&navigator.clipboard.writeText?(a("Using `navigator.clipboard.writeText()`."),[2,navigator.clipboard.writeText(e)]):[2,f(C(e))]})})}function v(){return r(this,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:return e=C,[4,b()];case 1:return[2,e.apply(void 0,[t.sent()])]}})})}function b(){return r(this,void 0,void 0,function(){return o(this,function(t){if(navigator.clipboard&&navigator.clipboard.readText)return a("Using `navigator.clipboard.readText()`."),[2,navigator.clipboard.readText()];if(_())return a("Reading text using IE strategy."),[2,function(){return r(this,void 0,void 0,function(){var e;return o(this,function(t){if(""===(e=window.clipboardData.getData("Text")))throw"Empty clipboard or could not read plain text from clipboard";return[2,e]})})}()];throw"Read is not supported in your browser."})})}e.setDebugLog=l,e.suppressWarnings=d,e.write=f,e.writeText=p,e.read=v,e.readText=b;var h=!1;function y(){h||(u&&c('You are using the deprecated default object of `clipboard-polyfill`. Please switch to `import * as clipboard from "clipboard-polyfill"` and see https://github.com/lgarron/clipboard-polyfill/issues/101 for more info.'),h=!0)}var m=function(){function t(){}return t.setDebugLog=function(t){return y(),l(t)},t.suppressWarnings=function(){return y(),d()},t.write=function(e){return r(this,void 0,void 0,function(){return o(this,function(t){return y(),[2,f(e)]})})},t.writeText=function(e){return r(this,void 0,void 0,function(){return o(this,function(t){return y(),[2,p(e)]})})},t.read=function(){return r(this,void 0,void 0,function(){return o(this,function(t){return y(),[2,v()]})})},t.readText=function(){return r(this,void 0,void 0,function(){return o(this,function(t){return y(),[2,b()]})})},t.DT=i.DT,t}();e.default=m;var g=function(){this.success=!1};function w(t){var e=new g,n=function(n,t,r){a("listener called"),n.success=!0,t.forEach(function(t,e){r.clipboardData.setData(e,t),e===s&&r.clipboardData.getData(e)!=t&&(a("setting text/plain failed"),n.success=!1)}),r.preventDefault()}.bind(this,e,t);document.addEventListener("copy",n);try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return e.success}function x(t,e){D(t);var n=w(e);return T(),n}function D(t){var e=document.getSelection();if(e){var n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n)}}function T(){var t=document.getSelection();t&&t.removeAllRanges()}function C(t){var e=new i.DT;return e.setData(s,t),e}function _(){return"undefined"==typeof ClipboardEvent&&void 0!==window.clipboardData&&void 0!==window.clipboardData.setData}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=["text/plain","text/html"],o=function(){(console.warn||console.log).call(arguments)}.bind(console,"[clipboard-polyfill]"),i=!0;e.suppressDTWarnings=function(){i=!1};var a=function(){function t(){this.m={}}return t.prototype.setData=function(t,e){i&&-1===r.indexOf(t)&&o("Unknown data type: "+t,"Call clipboard.suppressWarnings() to suppress this warning."),this.m[t]=e},t.prototype.getData=function(t){return this.m[t]},t.prototype.forEach=function(t){for(var e in this.m)t(this.m[e],e)},t}();e.DT=a}])},"3dc9":function(t,e,n){"use strict";n.r(e);n("28a5");var r=n("0016"),o=n.n(r),i={props:{label:{default:""},value:{default:""}},computed:{labelList:function(){return this.label.split("|")}},methods:{handleClip:function(t){o.a.writeText(t),this.$notify({title:"成功",message:"".concat(t," 已经复制到剪贴板"),type:"success"})}}},a=(n("b500"),n("2877")),u=Object(a.a)(i,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"d2-mb-10"},[r("el-button-group",[r("el-button",{staticClass:"code-and-result--button",attrs:{size:"mini"}},[n._v("\n      原值\n    ")])],1),r("d2-icon",{staticClass:"code-and-result--icon",attrs:{name:"plus"}}),r("el-button-group",n._l(n.labelList,function(e,t){return r("el-button",{key:t,staticClass:"code-and-result--button",attrs:{size:"mini",type:"primary"},on:{click:function(t){return n.handleClip(e)}}},[n._v("\n      "+n._s(e)+"\n    ")])}),1),r("d2-icon",{staticClass:"code-and-result--icon",attrs:{name:"arrow-right"}}),r("span",{staticClass:"code-and-result--value"},[n._v(n._s(n.value))])],1)},[],!1,null,"2701ba9c",null);e.default=u.exports},"492f":function(t,e,n){},b500:function(t,e,n){"use strict";var r=n("492f");n.n(r).a}}]);