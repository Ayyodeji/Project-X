/*! For license information please see main.48b15a81.chunk.js.LICENSE.txt */
(this.webpackJsonptfclassifier=this.webpackJsonptfclassifier||[]).push([[0],{198:function(e,t,n){e.exports=n(219)},203:function(e,t,n){},208:function(e,t){},209:function(e,t){},212:function(e,t){},213:function(e,t){},214:function(e,t){},215:function(e,t){},216:function(e,t){},217:function(e,t){},218:function(e,t,n){},219:function(e,t,n){"use strict";n.r(t);var r=n(16),o=n.n(r),a=n(44),i=n.n(a),s=(n(203),n(42)),c=n(5),u=n(7),l=n(8),f=n(18),d=n(17),h=n(46),p=n(45),v=n(22);n(218);function m(){m=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,n){return e[t]=n}}function u(e,t,n,o){var a=t&&t.prototype instanceof d?t:d,i=Object.create(a.prototype),s=new S(o||[]);return r(i,"_invoke",{value:k(e,n,s)}),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=u;var f={};function d(){}function h(){}function p(){}var v={};c(v,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(j([])));g&&g!==t&&n.call(g,a)&&(v=g);var w=p.prototype=d.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){var o;r(this,"_invoke",{value:function(r,a){function i(){return new t((function(o,i){!function r(o,a,i,s){var c=l(e[o],e,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}(r,a,o,i)}))}return o=o?o.then(i,i):i()}})}function k(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=L(i,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function L(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=l(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e||""===e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return h.prototype=p,r(w,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=c(p,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(x.prototype),c(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new x(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(w),c(w,s,"Generator"),c(w,a,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=j,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var y=o.a.lazy((function(){return n.e(3).then(n.bind(null,220))})),g=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).updateState=function(){var e=Object(c.a)(m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setState(Object(s.a)(Object(s.a)({},r.state),t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.loadingContainer=o.a.createRef(),r.results=o.a.createRef(),r.classifier=h.a(),r.loadingInterval=null,r.state={netModel:null,classes:["A","B","C","Reset"],classCount:0,modelLoading:"Loading ...",mediaControlReady:!1,showDetails:!1,videoSize:{width:"80%",height:"80%"},updateInstructionsState:function(){var e=Object(c.a)(m().mark((function e(){var t;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=getComputedStyle(document.querySelector(".instructions")).getPropertyValue("--showInstructions"),e.next=4,r.updateState({showDetails:"true"===t});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error caused at updateInstructionsState() : ".concat(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),updateVideoSize:function(){var e=Object(c.a)(m().mark((function e(){var t,n,o;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=getComputedStyle(document.querySelector(".videoContainer")),n=t.getPropertyValue("--videoWidth"),o=t.getPropertyValue("--videoHeight"),e.next=6,r.updateState({videoSize:{width:n,height:o}});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error caused at updateVideoSize() : ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(c.a)(m().mark((function e(){var t=this;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.addEventListener("resize",(function(){return t.screenResize()})),document.title="ML Classifier App",this.checkOnlineStatusAndLoadApp();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=this;this.classifier=null,this.loadingInterval=null,this.videoElement=null,window.removeEventListener("resize",(function(){return e.screenResize()}))}},{key:"checkOnlineStatusAndLoadApp",value:function(){var e=Object(c.a)(m().mark((function e(){var t,n,r=this;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=navigator.onLine,n=function(){var e=Object(c.a)(m().mark((function e(){var n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=navigator.onLine,console.log("navigator online state: ".concat(t)),e.next=4,r.updateState({modelLoading:"Loading ..."});case 4:(n=r.loadingContainer.current).innerHTML="",n.className="loadingContainer",t?r.loadApp():(n.className="loadingMessage",n.innerHTML="Online availability is required to load ML model initially from remote server for this app to function!!");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),window.addEventListener("online",n),e.next=5,n();case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"loadApp",value:function(){var e=Object(c.a)(m().mark((function e(){var t=this;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.loadMLModel();case 3:return e.next=5,this.updateState({modelLoading:""});case 5:setTimeout(Object(c.a)(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.screenResize();case 2:case"end":return e.stop()}}),e)}))),1e3),this.runClassifier(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.dir("error caused: ".concat(e.t0));case 12:return e.prev=12,console.log("model loading in app completed.."),e.finish(12);case 15:case"end":return e.stop()}}),e,this,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"loadMLModel",value:function(){var e=Object(c.a)(m().mark((function e(){var t=this;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(c.a)(m().mark((function e(n,r){var o;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading mobilenet.."),e.prev=1,e.next=4,p.a();case 4:return o=e.sent,e.next=7,t.updateState({netModel:o});case 7:return console.log("Sucessfully loaded model"),e.abrupt("return",n());case 11:return e.prev=11,e.t0=e.catch(1),console.log("model mobilenet could not be loaded.."),e.abrupt("return",r());case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runClassifier",value:function(){var e=Object(c.a)(m().mark((function e(){var t,n,r,o,a,i;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("classifier started..."),t=this.state.netModel;case 2:if(!(this.classifier.getNumClasses()>0)){e.next=14;break}return n=t.infer(this.videoElement.videoElement,"conv_preds"),e.next=7,this.classifier.predictClass(n);case 7:r=e.sent,o=this.state.classes,a={prediction:o[r.classIndex],probability:null!==r.confidences[r.classIndex]&&void 0!==r.confidences[r.classIndex]?100*r.confidences[r.classIndex]:0},i="",void 0!==a.prediction&&(i="<ul><li>Prediction&nbsp;&nbsp;: ".concat(a.prediction," </li><li>Probability&nbsp;: ").concat(a.probability+"%"," </li></ul>")),this.results.current.innerHTML=i,this.results.current.style.visibility=""!==i.trim()?"visible":"hidden";case 14:return e.next=16,v.nextFrame();case 16:e.next=2;break;case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addExample",value:function(){var e=Object(c.a)(m().mark((function e(t){var n,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(n=this.state.netModel)||!(this.classifier.getNumClasses()>0&&t>0||this.classifier.getNumClasses()>=0&&0===t)){e.next=5;break}return r=n.infer(this.videoElement.videoElement,"conv_preds"),e.next=5,this.classifier.addExample(r,t);case 5:this.updateState({classCount:t+1>this.state.classCount?t+1:this.state.classCount});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"screenResize",value:function(){var e=Object(c.a)(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("screenResize() called.."),e.next=3,this.state.updateVideoSize();case 3:return e.next=5,this.state.updateInstructionsState();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"headerComponent",value:function(){return o.a.createElement("h2",null,"Machine learning for video classification")}},{key:"videoComponent",value:function(){var e=this;return o.a.createElement(o.a.Suspense,{fallback:o.a.createElement("div",{className:"loadingContainer"},"Loading...")},o.a.createElement(y,{parentState:this.state,parentStateUpdate:function(){var t=Object(c.a)(m().mark((function t(n){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateState(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ref:function(t){return e.videoElement=t}}))}},{key:"buttonListComponent",value:function(){var e=this;return o.a.createElement("div",{className:"btnContainer"},this.state.classes.map((function(t,n){return o.a.createElement("button",{key:"btn".concat(t+n),ref:function(n){return e["btn".concat(t)]=n},onClick:function(r){"reset"!==t.toLowerCase()?e.addExample(n):(e.classifier.clearAllClasses(),e.updateState({classCount:0}),e.results.current.innerHTML="")},disabled:!("reset"===t.toLowerCase()&&e.state.classCount>0)&&(!(n<=e.state.classCount)||!e.state.mediaControlReady)},("reset"!==t.toLowerCase()?"Add ":"")+t)})))}},{key:"resultsComponent",value:function(){return o.a.createElement("div",{ref:this.results,className:"results"})}},{key:"instructionListComponent",value:function(){return o.a.createElement("div",{className:"instructions"},o.a.createElement("details",{open:this.state.showDetails},o.a.createElement("summary",null,"Instructions"),o.a.createElement("ul",null,["Snap multiple views using the available buttons(in presented order as A -> B -> C) to recognize and learn, for each button hit - it would start displaying prediction with probability subsequently","For instance, capture the tilting faces in directions for buttons as Add A(left), Add B(center) and Add C(right) mutiple times i.e. atleast 3 times each or more is recommended (prediction is certainly more accurate the more image snapshots are learned)","Try tilting faces from left to right freely to show expected predictions or refine it further by continuing with the respective buttons as desired","All of the data from camera stream is processed and recognized to learn locally and is not stored or accessed on any remote server"].map((function(e,t){return o.a.createElement("li",{key:t},e)})))))}},{key:"footerComponent",value:function(){return o.a.createElement("div",{className:"footer"},"Project available on github ",o.a.createElement("a",{href:"https://github.com/NileshSP/reactTfClassifier",target:"_blank",rel:"noopener noreferrer"},"@NileshSP/reactTfClassifier"))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"mainContainer"},""===this.state.modelLoading?o.a.createElement("div",{className:"workingContainer"},this.headerComponent(),this.videoComponent(),this.buttonListComponent(),this.resultsComponent(),this.instructionListComponent(),this.footerComponent()):o.a.createElement("div",{className:"loadingContainer",ref:this.loadingContainer})))}}]),n}(r.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Project-X",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Project-X","/").concat("offline.js");w?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(t,e)}))}}()}},[[198,1,2]]]);
//# sourceMappingURL=main.48b15a81.chunk.js.map