!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="/",e(e.s=2)}([function(t,r,e){t.exports=e(1)},function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(G){u=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,r,e){var n=s;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===s)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=l(t,r,e);if("normal"===u.type){if(n=e.done?y:h,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(G){return{type:"throw",arg:G}}}t.wrap=f;var s="suspendedStart",h="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(k([])));x&&x!==e&&n.call(x,i)&&(w=x);var L=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"===typeof s&&n.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return g.prototype=L.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,c,"Generator"),L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},function(t,r,e){"use strict";e.r(r);var n=e(0),o=e.n(n);function i(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(f){return void e(f)}c.done?r(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}[{'revision':'3695b2cec0bff86edde4e37be2669b22','url':'/index.html'},{'revision':null,'url':'/static/css/2.d1a61cb1.chunk.css'},{'revision':null,'url':'/static/css/main.6dea0f05.chunk.css'},{'revision':null,'url':'/static/js/2.584ed033.chunk.js'},{'revision':null,'url':'/static/js/main.d5b667d4.chunk.js'},{'revision':null,'url':'/static/js/runtime-main.a4d4f3f0.js'},{'revision':null,'url':'/static/media/rajdhani-latin-300.4b3ac93a.woff2'},{'revision':null,'url':'/static/media/rajdhani-latin-300.a9da2fff.woff'},{'revision':null,'url':'/static/media/rajdhani-latin-400.53edc397.woff2'},{'revision':null,'url':'/static/media/rajdhani-latin-400.70bfe08d.woff'},{'revision':null,'url':'/static/media/rajdhani-latin-500.3bc6f7ad.woff2'},{'revision':null,'url':'/static/media/rajdhani-latin-500.71d0d25e.woff'},{'revision':null,'url':'/static/media/rajdhani-latin-600.006bc9eb.woff'},{'revision':null,'url':'/static/media/rajdhani-latin-600.68a710a7.woff2'},{'revision':null,'url':'/static/media/rajdhani-latin-700.61027762.woff'},{'revision':null,'url':'/static/media/rajdhani-latin-700.7050c024.woff2'},{'revision':null,'url':'/static/media/roboto-all-400-normal.376ea5d9.woff'},{'revision':null,'url':'/static/media/roboto-cyrillic-400-normal.5e493812.woff2'},{'revision':null,'url':'/static/media/roboto-cyrillic-ext-400-normal.493afe7a.woff2'},{'revision':null,'url':'/static/media/roboto-greek-400-normal.1cbfc636.woff2'},{'revision':null,'url':'/static/media/roboto-greek-ext-400-normal.e769aa77.woff2'},{'revision':null,'url':'/static/media/roboto-latin-400-normal.4673b453.woff2'},{'revision':null,'url':'/static/media/roboto-latin-ext-400-normal.c3dcdbd5.woff2'},{'revision':null,'url':'/static/media/roboto-vietnamese-400-normal.c0bec65d.woff2'}];function c(t){var r=Date.now(),e=null;do{e=Date.now()}while(e-r<t)}function u(){return(u=a(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(;;)console.log("uhm"),c(1e3);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}self.addEventListener("install",(function(t){t.waitUntil(console.log("instlal I guess"))})),self.addEventListener("activate",(function(t){!function(){u.apply(this,arguments)}()}))}]);
//# sourceMappingURL=service-worker.js.map