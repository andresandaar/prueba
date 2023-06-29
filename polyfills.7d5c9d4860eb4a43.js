"use strict";(self.webpackChunkclient_mqtt=self.webpackChunkclient_mqtt||[]).push([[429],{8583:()=>{!function(e){const r=e.performance;function i(H){r&&r.mark&&r.mark(H)}function o(H,b){r&&r.measure&&r.measure(H,b)}i("Zone");const a=e.__Zone_symbol_prefix||"__zone_symbol__";function h(H){return a+H}const g=!0===e[h("forceDuplicateZoneCheck")];if(e.Zone){if(g||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let p=(()=>{class H{constructor(t,c){this._parent=t,this._name=c?c.name||"unnamed":"<root>",this._properties=c&&c.properties||{},this._zoneDelegate=new m(this,this._parent&&this._parent._zoneDelegate,c)}static assertZonePatched(){if(e.Promise!==Te.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=H.current;for(;t.parent;)t=t.parent;return t}static get current(){return Y.zone}static get currentTask(){return de}static __load_patch(t,c,C=!1){if(Te.hasOwnProperty(t)){if(!C&&g)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const M="Zone:"+t;i(M),Te[t]=c(e,H,ee),o(M,M)}}get parent(){return this._parent}get name(){return this._name}get(t){const c=this.getZoneWith(t);if(c)return c._properties[t]}getZoneWith(t){let c=this;for(;c;){if(c._properties.hasOwnProperty(t))return c;c=c._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,c){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const C=this._zoneDelegate.intercept(this,t,c),M=this;return function(){return M.runGuarded(C,this,arguments,c)}}run(t,c,C,M){Y={parent:Y,zone:this};try{return this._zoneDelegate.invoke(this,t,c,C,M)}finally{Y=Y.parent}}runGuarded(t,c=null,C,M){Y={parent:Y,zone:this};try{try{return this._zoneDelegate.invoke(this,t,c,C,M)}catch(te){if(this._zoneDelegate.handleError(this,te))throw te}}finally{Y=Y.parent}}runTask(t,c,C){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||ne).name+"; Execution: "+this.name+")");if(t.state===G&&(t.type===oe||t.type===I))return;const M=t.state!=w;M&&t._transitionTo(w,V),t.runCount++;const te=de;de=t,Y={parent:Y,zone:this};try{t.type==I&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,c,C)}catch(d){if(this._zoneDelegate.handleError(this,d))throw d}}finally{t.state!==G&&t.state!==y&&(t.type==oe||t.data&&t.data.isPeriodic?M&&t._transitionTo(V,w):(t.runCount=0,this._updateTaskCount(t,-1),M&&t._transitionTo(G,w,G))),Y=Y.parent,de=te}}scheduleTask(t){if(t.zone&&t.zone!==this){let C=this;for(;C;){if(C===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);C=C.parent}}t._transitionTo(Q,G);const c=[];t._zoneDelegates=c,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(C){throw t._transitionTo(y,Q,G),this._zoneDelegate.handleError(this,C),C}return t._zoneDelegates===c&&this._updateTaskCount(t,1),t.state==Q&&t._transitionTo(V,Q),t}scheduleMicroTask(t,c,C,M){return this.scheduleTask(new k($,t,c,C,M,void 0))}scheduleMacroTask(t,c,C,M,te){return this.scheduleTask(new k(I,t,c,C,M,te))}scheduleEventTask(t,c,C,M,te){return this.scheduleTask(new k(oe,t,c,C,M,te))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||ne).name+"; Execution: "+this.name+")");if(t.state===V||t.state===w){t._transitionTo(F,V,w);try{this._zoneDelegate.cancelTask(this,t)}catch(c){throw t._transitionTo(y,F),this._zoneDelegate.handleError(this,c),c}return this._updateTaskCount(t,-1),t._transitionTo(G,F),t.runCount=0,t}}_updateTaskCount(t,c){const C=t._zoneDelegates;-1==c&&(t._zoneDelegates=null);for(let M=0;M<C.length;M++)C[M]._updateTaskCount(t.type,c)}}return H.__symbol__=h,H})();const R={name:"",onHasTask:(H,b,t,c)=>H.hasTask(t,c),onScheduleTask:(H,b,t,c)=>H.scheduleTask(t,c),onInvokeTask:(H,b,t,c,C,M)=>H.invokeTask(t,c,C,M),onCancelTask:(H,b,t,c)=>H.cancelTask(t,c)};class m{constructor(b,t,c){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=b,this._parentDelegate=t,this._forkZS=c&&(c&&c.onFork?c:t._forkZS),this._forkDlgt=c&&(c.onFork?t:t._forkDlgt),this._forkCurrZone=c&&(c.onFork?this.zone:t._forkCurrZone),this._interceptZS=c&&(c.onIntercept?c:t._interceptZS),this._interceptDlgt=c&&(c.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=c&&(c.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=c&&(c.onInvoke?c:t._invokeZS),this._invokeDlgt=c&&(c.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=c&&(c.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=c&&(c.onHandleError?c:t._handleErrorZS),this._handleErrorDlgt=c&&(c.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=c&&(c.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=c&&(c.onScheduleTask?c:t._scheduleTaskZS),this._scheduleTaskDlgt=c&&(c.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=c&&(c.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=c&&(c.onInvokeTask?c:t._invokeTaskZS),this._invokeTaskDlgt=c&&(c.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=c&&(c.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=c&&(c.onCancelTask?c:t._cancelTaskZS),this._cancelTaskDlgt=c&&(c.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=c&&(c.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const C=c&&c.onHasTask;(C||t&&t._hasTaskZS)&&(this._hasTaskZS=C?c:R,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=b,c.onScheduleTask||(this._scheduleTaskZS=R,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),c.onInvokeTask||(this._invokeTaskZS=R,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),c.onCancelTask||(this._cancelTaskZS=R,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(b,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,b,t):new p(b,t)}intercept(b,t,c){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,b,t,c):t}invoke(b,t,c,C,M){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,b,t,c,C,M):t.apply(c,C)}handleError(b,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,b,t)}scheduleTask(b,t){let c=t;if(this._scheduleTaskZS)this._hasTaskZS&&c._zoneDelegates.push(this._hasTaskDlgtOwner),c=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,b,t),c||(c=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=$)throw new Error("Task is missing scheduleFn.");Z(t)}return c}invokeTask(b,t,c,C){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,b,t,c,C):t.callback.apply(c,C)}cancelTask(b,t){let c;if(this._cancelTaskZS)c=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,b,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");c=t.cancelFn(t)}return c}hasTask(b,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,b,t)}catch(c){this.handleError(b,c)}}_updateTaskCount(b,t){const c=this._taskCounts,C=c[b],M=c[b]=C+t;if(M<0)throw new Error("More tasks executed then were scheduled.");0!=C&&0!=M||this.hasTask(this.zone,{microTask:c.microTask>0,macroTask:c.macroTask>0,eventTask:c.eventTask>0,change:b})}}class k{constructor(b,t,c,C,M,te){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=b,this.source=t,this.data=C,this.scheduleFn=M,this.cancelFn=te,!c)throw new Error("callback is not defined");this.callback=c;const d=this;this.invoke=b===oe&&C&&C.useG?k.invokeTask:function(){return k.invokeTask.call(e,d,this,arguments)}}static invokeTask(b,t,c){b||(b=this),ie++;try{return b.runCount++,b.zone.runTask(b,t,c)}finally{1==ie&&v(),ie--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(G,Q)}_transitionTo(b,t,c){if(this._state!==t&&this._state!==c)throw new Error(`${this.type} '${this.source}': can not transition to '${b}', expecting state '${t}'${c?" or '"+c+"'":""}, was '${this._state}'.`);this._state=b,b==G&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const O=h("setTimeout"),D=h("Promise"),j=h("then");let re,z=[],U=!1;function J(H){if(re||e[D]&&(re=e[D].resolve(0)),re){let b=re[j];b||(b=re.then),b.call(re,H)}else e[O](H,0)}function Z(H){0===ie&&0===z.length&&J(v),H&&z.push(H)}function v(){if(!U){for(U=!0;z.length;){const H=z;z=[];for(let b=0;b<H.length;b++){const t=H[b];try{t.zone.runTask(t,null,null)}catch(c){ee.onUnhandledError(c)}}}ee.microtaskDrainDone(),U=!1}}const ne={name:"NO ZONE"},G="notScheduled",Q="scheduling",V="scheduled",w="running",F="canceling",y="unknown",$="microTask",I="macroTask",oe="eventTask",Te={},ee={symbol:h,currentZoneFrame:()=>Y,onUnhandledError:K,microtaskDrainDone:K,scheduleMicroTask:Z,showUncaughtError:()=>!p[h("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:K,patchMethod:()=>K,bindArguments:()=>[],patchThen:()=>K,patchMacroTask:()=>K,patchEventPrototype:()=>K,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>K,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>K,wrapWithCurrentZone:()=>K,filterProperties:()=>[],attachOriginToPatched:()=>K,_redefineProperty:()=>K,patchCallbacks:()=>K,nativeScheduleMicroTask:J};let Y={parent:null,zone:new p(null,null)},de=null,ie=0;function K(){}o("Zone","Zone"),e.Zone=p}(typeof window<"u"&&window||typeof self<"u"&&self||global);const ae=Object.getOwnPropertyDescriptor,pe=Object.defineProperty,be=Object.getPrototypeOf,Le=Object.create,ye=Array.prototype.slice,Ce="addEventListener",xe="removeEventListener",me=Zone.__symbol__(Ce),We=Zone.__symbol__(xe),fe="true",_e="false",Pe=Zone.__symbol__("");function je(e,r){return Zone.current.wrap(e,r)}function $e(e,r,i,o,a){return Zone.current.scheduleMacroTask(e,r,i,o,a)}const B=Zone.__symbol__,Ne=typeof window<"u",ke=Ne?window:void 0,X=Ne&&ke||"object"==typeof self&&self||global,st="removeAttribute";function Ie(e,r){for(let i=e.length-1;i>=0;i--)"function"==typeof e[i]&&(e[i]=je(e[i],r+"_"+i));return e}function He(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Be=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Se=!("nw"in X)&&typeof X.process<"u"&&"[object process]"==={}.toString.call(X.process),le=!Se&&!Be&&!(!Ne||!ke.HTMLElement),Ue=typeof X.process<"u"&&"[object process]"==={}.toString.call(X.process)&&!Be&&!(!Ne||!ke.HTMLElement),De={},Ze=function(e){if(!(e=e||X.event))return;let r=De[e.type];r||(r=De[e.type]=B("ON_PROPERTY"+e.type));const i=this||e.target||X,o=i[r];let a;return le&&i===ke&&"error"===e.type?(a=o&&o.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===a&&e.preventDefault()):(a=o&&o.apply(this,arguments),null!=a&&!a&&e.preventDefault()),a};function Xe(e,r,i){let o=ae(e,r);if(!o&&i&&ae(i,r)&&(o={enumerable:!0,configurable:!0}),!o||!o.configurable)return;const a=B("on"+r+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete o.writable,delete o.value;const h=o.get,g=o.set,p=r.slice(2);let R=De[p];R||(R=De[p]=B("ON_PROPERTY"+p)),o.set=function(m){let k=this;!k&&e===X&&(k=X),k&&("function"==typeof k[R]&&k.removeEventListener(p,Ze),g&&g.call(k,null),k[R]=m,"function"==typeof m&&k.addEventListener(p,Ze,!1))},o.get=function(){let m=this;if(!m&&e===X&&(m=X),!m)return null;const k=m[R];if(k)return k;if(h){let O=h.call(this);if(O)return o.set.call(this,O),"function"==typeof m[st]&&m.removeAttribute(r),O}return null},pe(e,r,o),e[a]=!0}function Ye(e,r,i){if(r)for(let o=0;o<r.length;o++)Xe(e,"on"+r[o],i);else{const o=[];for(const a in e)"on"==a.slice(0,2)&&o.push(a);for(let a=0;a<o.length;a++)Xe(e,o[a],i)}}const se=B("originalInstance");function Oe(e){const r=X[e];if(!r)return;X[B(e)]=r,X[e]=function(){const a=Ie(arguments,e);switch(a.length){case 0:this[se]=new r;break;case 1:this[se]=new r(a[0]);break;case 2:this[se]=new r(a[0],a[1]);break;case 3:this[se]=new r(a[0],a[1],a[2]);break;case 4:this[se]=new r(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},he(X[e],r);const i=new r(function(){});let o;for(o in i)"XMLHttpRequest"===e&&"responseBlob"===o||function(a){"function"==typeof i[a]?X[e].prototype[a]=function(){return this[se][a].apply(this[se],arguments)}:pe(X[e].prototype,a,{set:function(h){"function"==typeof h?(this[se][a]=je(h,e+"."+a),he(this[se][a],h)):this[se][a]=h},get:function(){return this[se][a]}})}(o);for(o in r)"prototype"!==o&&r.hasOwnProperty(o)&&(X[e][o]=r[o])}function ue(e,r,i){let o=e;for(;o&&!o.hasOwnProperty(r);)o=be(o);!o&&e[r]&&(o=e);const a=B(r);let h=null;if(o&&(!(h=o[a])||!o.hasOwnProperty(a))&&(h=o[a]=o[r],He(o&&ae(o,r)))){const p=i(h,a,r);o[r]=function(){return p(this,arguments)},he(o[r],h)}return h}function it(e,r,i){let o=null;function a(h){const g=h.data;return g.args[g.cbIdx]=function(){h.invoke.apply(this,arguments)},o.apply(g.target,g.args),h}o=ue(e,r,h=>function(g,p){const R=i(g,p);return R.cbIdx>=0&&"function"==typeof p[R.cbIdx]?$e(R.name,p[R.cbIdx],R,a):h.apply(g,p)})}function he(e,r){e[B("OriginalDelegate")]=r}let Ke=!1,Ve=!1;function ct(){if(Ke)return Ve;Ke=!0;try{const e=ke.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Ve=!0)}catch{}return Ve}Zone.__load_patch("ZoneAwarePromise",(e,r,i)=>{const o=Object.getOwnPropertyDescriptor,a=Object.defineProperty,g=i.symbol,p=[],R=!0===e[g("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],m=g("Promise"),k=g("then"),O="__creationTrace__";i.onUnhandledError=d=>{if(i.showUncaughtError()){const _=d&&d.rejection;_?console.error("Unhandled Promise rejection:",_ instanceof Error?_.message:_,"; Zone:",d.zone.name,"; Task:",d.task&&d.task.source,"; Value:",_,_ instanceof Error?_.stack:void 0):console.error(d)}},i.microtaskDrainDone=()=>{for(;p.length;){const d=p.shift();try{d.zone.runGuarded(()=>{throw d.throwOriginal?d.rejection:d})}catch(_){j(_)}}};const D=g("unhandledPromiseRejectionHandler");function j(d){i.onUnhandledError(d);try{const _=r[D];"function"==typeof _&&_.call(this,d)}catch{}}function z(d){return d&&d.then}function U(d){return d}function re(d){return t.reject(d)}const J=g("state"),Z=g("value"),v=g("finally"),ne=g("parentPromiseValue"),G=g("parentPromiseState"),Q="Promise.then",V=null,w=!0,F=!1,y=0;function $(d,_){return u=>{try{ee(d,_,u)}catch(T){ee(d,!1,T)}}}const I=function(){let d=!1;return function(u){return function(){d||(d=!0,u.apply(null,arguments))}}},oe="Promise resolved with itself",Te=g("currentTaskTrace");function ee(d,_,u){const T=I();if(d===u)throw new TypeError(oe);if(d[J]===V){let S=null;try{("object"==typeof u||"function"==typeof u)&&(S=u&&u.then)}catch(N){return T(()=>{ee(d,!1,N)})(),d}if(_!==F&&u instanceof t&&u.hasOwnProperty(J)&&u.hasOwnProperty(Z)&&u[J]!==V)de(u),ee(d,u[J],u[Z]);else if(_!==F&&"function"==typeof S)try{S.call(u,T($(d,_)),T($(d,!1)))}catch(N){T(()=>{ee(d,!1,N)})()}else{d[J]=_;const N=d[Z];if(d[Z]=u,d[v]===v&&_===w&&(d[J]=d[G],d[Z]=d[ne]),_===F&&u instanceof Error){const P=r.currentTask&&r.currentTask.data&&r.currentTask.data[O];P&&a(u,Te,{configurable:!0,enumerable:!1,writable:!0,value:P})}for(let P=0;P<N.length;)ie(d,N[P++],N[P++],N[P++],N[P++]);if(0==N.length&&_==F){d[J]=y;let P=u;try{throw new Error("Uncaught (in promise): "+function h(d){return d&&d.toString===Object.prototype.toString?(d.constructor&&d.constructor.name||"")+": "+JSON.stringify(d):d?d.toString():Object.prototype.toString.call(d)}(u)+(u&&u.stack?"\n"+u.stack:""))}catch(A){P=A}R&&(P.throwOriginal=!0),P.rejection=u,P.promise=d,P.zone=r.current,P.task=r.currentTask,p.push(P),i.scheduleMicroTask()}}}return d}const Y=g("rejectionHandledHandler");function de(d){if(d[J]===y){try{const _=r[Y];_&&"function"==typeof _&&_.call(this,{rejection:d[Z],promise:d})}catch{}d[J]=F;for(let _=0;_<p.length;_++)d===p[_].promise&&p.splice(_,1)}}function ie(d,_,u,T,S){de(d);const N=d[J],P=N?"function"==typeof T?T:U:"function"==typeof S?S:re;_.scheduleMicroTask(Q,()=>{try{const A=d[Z],L=!!u&&v===u[v];L&&(u[ne]=A,u[G]=N);const x=_.run(P,void 0,L&&P!==re&&P!==U?[]:[A]);ee(u,!0,x)}catch(A){ee(u,!1,A)}},u)}const H=function(){},b=e.AggregateError;class t{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(_){return ee(new this(null),w,_)}static reject(_){return ee(new this(null),F,_)}static any(_){if(!_||"function"!=typeof _[Symbol.iterator])return Promise.reject(new b([],"All promises were rejected"));const u=[];let T=0;try{for(let P of _)T++,u.push(t.resolve(P))}catch{return Promise.reject(new b([],"All promises were rejected"))}if(0===T)return Promise.reject(new b([],"All promises were rejected"));let S=!1;const N=[];return new t((P,A)=>{for(let L=0;L<u.length;L++)u[L].then(x=>{S||(S=!0,P(x))},x=>{N.push(x),T--,0===T&&(S=!0,A(new b(N,"All promises were rejected")))})})}static race(_){let u,T,S=new this((A,L)=>{u=A,T=L});function N(A){u(A)}function P(A){T(A)}for(let A of _)z(A)||(A=this.resolve(A)),A.then(N,P);return S}static all(_){return t.allWithCallback(_)}static allSettled(_){return(this&&this.prototype instanceof t?this:t).allWithCallback(_,{thenCallback:T=>({status:"fulfilled",value:T}),errorCallback:T=>({status:"rejected",reason:T})})}static allWithCallback(_,u){let T,S,N=new this((x,W)=>{T=x,S=W}),P=2,A=0;const L=[];for(let x of _){z(x)||(x=this.resolve(x));const W=A;try{x.then(q=>{L[W]=u?u.thenCallback(q):q,P--,0===P&&T(L)},q=>{u?(L[W]=u.errorCallback(q),P--,0===P&&T(L)):S(q)})}catch(q){S(q)}P++,A++}return P-=2,0===P&&T(L),N}constructor(_){const u=this;if(!(u instanceof t))throw new Error("Must be an instanceof Promise.");u[J]=V,u[Z]=[];try{const T=I();_&&_(T($(u,w)),T($(u,F)))}catch(T){ee(u,!1,T)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return t}then(_,u){var T;let S=null===(T=this.constructor)||void 0===T?void 0:T[Symbol.species];(!S||"function"!=typeof S)&&(S=this.constructor||t);const N=new S(H),P=r.current;return this[J]==V?this[Z].push(P,N,_,u):ie(this,P,N,_,u),N}catch(_){return this.then(null,_)}finally(_){var u;let T=null===(u=this.constructor)||void 0===u?void 0:u[Symbol.species];(!T||"function"!=typeof T)&&(T=t);const S=new T(H);S[v]=v;const N=r.current;return this[J]==V?this[Z].push(N,S,_,_):ie(this,N,S,_,_),S}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;const c=e[m]=e.Promise;e.Promise=t;const C=g("thenPatched");function M(d){const _=d.prototype,u=o(_,"then");if(u&&(!1===u.writable||!u.configurable))return;const T=_.then;_[k]=T,d.prototype.then=function(S,N){return new t((A,L)=>{T.call(this,A,L)}).then(S,N)},d[C]=!0}return i.patchThen=M,c&&(M(c),ue(e,"fetch",d=>function te(d){return function(_,u){let T=d.apply(_,u);if(T instanceof t)return T;let S=T.constructor;return S[C]||M(S),T}}(d))),Promise[r.__symbol__("uncaughtPromiseErrors")]=p,t}),Zone.__load_patch("toString",e=>{const r=Function.prototype.toString,i=B("OriginalDelegate"),o=B("Promise"),a=B("Error"),h=function(){if("function"==typeof this){const m=this[i];if(m)return"function"==typeof m?r.call(m):Object.prototype.toString.call(m);if(this===Promise){const k=e[o];if(k)return r.call(k)}if(this===Error){const k=e[a];if(k)return r.call(k)}}return r.call(this)};h[i]=r,Function.prototype.toString=h;const g=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":g.call(this)}});let ge=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){ge=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{ge=!1}const at={useG:!0},ce={},Qe={},et=new RegExp("^"+Pe+"(\\w+)(true|false)$"),lt=B("propagationStopped");function Ge(e,r){const i=(r?r(e):e)+_e,o=(r?r(e):e)+fe,a=Pe+i,h=Pe+o;ce[e]={},ce[e][_e]=a,ce[e][fe]=h}function tt(e,r,i,o){const a=o&&o.add||Ce,h=o&&o.rm||xe,g=o&&o.listeners||"eventListeners",p=o&&o.rmAll||"removeAllListeners",R=B(a),m="."+a+":",k="prependListener",O="."+k+":",D=function(Z,v,ne){if(Z.isRemoved)return;const G=Z.callback;let Q;"object"==typeof G&&G.handleEvent&&(Z.callback=w=>G.handleEvent(w),Z.originalDelegate=G);try{Z.invoke(Z,v,[ne])}catch(w){Q=w}const V=Z.options;return V&&"object"==typeof V&&V.once&&v[h].call(v,ne.type,Z.originalDelegate?Z.originalDelegate:Z.callback,V),Q};function j(Z,v,ne){if(!(v=v||e.event))return;const G=Z||v.target||e,Q=G[ce[v.type][ne?fe:_e]];if(Q){const V=[];if(1===Q.length){const w=D(Q[0],G,v);w&&V.push(w)}else{const w=Q.slice();for(let F=0;F<w.length&&(!v||!0!==v[lt]);F++){const y=D(w[F],G,v);y&&V.push(y)}}if(1===V.length)throw V[0];for(let w=0;w<V.length;w++){const F=V[w];r.nativeScheduleMicroTask(()=>{throw F})}}}const z=function(Z){return j(this,Z,!1)},U=function(Z){return j(this,Z,!0)};function re(Z,v){if(!Z)return!1;let ne=!0;v&&void 0!==v.useG&&(ne=v.useG);const G=v&&v.vh;let Q=!0;v&&void 0!==v.chkDup&&(Q=v.chkDup);let V=!1;v&&void 0!==v.rt&&(V=v.rt);let w=Z;for(;w&&!w.hasOwnProperty(a);)w=be(w);if(!w&&Z[a]&&(w=Z),!w||w[R])return!1;const F=v&&v.eventNameToString,y={},$=w[R]=w[a],I=w[B(h)]=w[h],oe=w[B(g)]=w[g],Te=w[B(p)]=w[p];let ee;v&&v.prepend&&(ee=w[B(v.prepend)]=w[v.prepend]);const t=ne?function(u){if(!y.isExisting)return $.call(y.target,y.eventName,y.capture?U:z,y.options)}:function(u){return $.call(y.target,y.eventName,u.invoke,y.options)},c=ne?function(u){if(!u.isRemoved){const T=ce[u.eventName];let S;T&&(S=T[u.capture?fe:_e]);const N=S&&u.target[S];if(N)for(let P=0;P<N.length;P++)if(N[P]===u){N.splice(P,1),u.isRemoved=!0,0===N.length&&(u.allRemoved=!0,u.target[S]=null);break}}if(u.allRemoved)return I.call(u.target,u.eventName,u.capture?U:z,u.options)}:function(u){return I.call(u.target,u.eventName,u.invoke,u.options)},M=v&&v.diff?v.diff:function(u,T){const S=typeof T;return"function"===S&&u.callback===T||"object"===S&&u.originalDelegate===T},te=Zone[B("UNPATCHED_EVENTS")],d=e[B("PASSIVE_EVENTS")],_=function(u,T,S,N,P=!1,A=!1){return function(){const L=this||e;let x=arguments[0];v&&v.transferEventName&&(x=v.transferEventName(x));let W=arguments[1];if(!W)return u.apply(this,arguments);if(Se&&"uncaughtException"===x)return u.apply(this,arguments);let q=!1;if("function"!=typeof W){if(!W.handleEvent)return u.apply(this,arguments);q=!0}if(G&&!G(u,W,L,arguments))return;const ve=ge&&!!d&&-1!==d.indexOf(x),Ee=function Y(u,T){return!ge&&"object"==typeof u&&u?!!u.capture:ge&&T?"boolean"==typeof u?{capture:u,passive:!0}:u?"object"==typeof u&&!1!==u.passive?Object.assign(Object.assign({},u),{passive:!0}):u:{passive:!0}:u}(arguments[2],ve);if(te)for(let Re=0;Re<te.length;Re++)if(x===te[Re])return ve?u.call(L,x,W,Ee):u.apply(this,arguments);const ht=!!Ee&&("boolean"==typeof Ee||Ee.capture),Tt=!(!Ee||"object"!=typeof Ee)&&Ee.once,mt=Zone.current;let dt=ce[x];dt||(Ge(x,F),dt=ce[x]);const Et=dt[ht?fe:_e];let ot,Ae=L[Et],gt=!1;if(Ae){if(gt=!0,Q)for(let Re=0;Re<Ae.length;Re++)if(M(Ae[Re],W))return}else Ae=L[Et]=[];const pt=L.constructor.name,yt=Qe[pt];yt&&(ot=yt[x]),ot||(ot=pt+T+(F?F(x):x)),y.options=Ee,Tt&&(y.options.once=!1),y.target=L,y.capture=ht,y.eventName=x,y.isExisting=gt;const Fe=ne?at:void 0;Fe&&(Fe.taskData=y);const we=mt.scheduleEventTask(ot,W,Fe,S,N);return y.target=null,Fe&&(Fe.taskData=null),Tt&&(Ee.once=!0),!ge&&"boolean"==typeof we.options||(we.options=Ee),we.target=L,we.capture=ht,we.eventName=x,q&&(we.originalDelegate=W),A?Ae.unshift(we):Ae.push(we),P?L:void 0}};return w[a]=_($,m,t,c,V),ee&&(w[k]=_(ee,O,function(u){return ee.call(y.target,y.eventName,u.invoke,y.options)},c,V,!0)),w[h]=function(){const u=this||e;let T=arguments[0];v&&v.transferEventName&&(T=v.transferEventName(T));const S=arguments[2],N=!!S&&("boolean"==typeof S||S.capture),P=arguments[1];if(!P)return I.apply(this,arguments);if(G&&!G(I,P,u,arguments))return;const A=ce[T];let L;A&&(L=A[N?fe:_e]);const x=L&&u[L];if(x)for(let W=0;W<x.length;W++){const q=x[W];if(M(q,P))return x.splice(W,1),q.isRemoved=!0,0===x.length&&(q.allRemoved=!0,u[L]=null,"string"==typeof T)&&(u[Pe+"ON_PROPERTY"+T]=null),q.zone.cancelTask(q),V?u:void 0}return I.apply(this,arguments)},w[g]=function(){const u=this||e;let T=arguments[0];v&&v.transferEventName&&(T=v.transferEventName(T));const S=[],N=ut(u,F?F(T):T);for(let P=0;P<N.length;P++){const A=N[P];S.push(A.originalDelegate?A.originalDelegate:A.callback)}return S},w[p]=function(){const u=this||e;let T=arguments[0];if(T){v&&v.transferEventName&&(T=v.transferEventName(T));const S=ce[T];if(S){const A=u[S[_e]],L=u[S[fe]];if(A){const x=A.slice();for(let W=0;W<x.length;W++){const q=x[W];this[h].call(this,T,q.originalDelegate?q.originalDelegate:q.callback,q.options)}}if(L){const x=L.slice();for(let W=0;W<x.length;W++){const q=x[W];this[h].call(this,T,q.originalDelegate?q.originalDelegate:q.callback,q.options)}}}}else{const S=Object.keys(u);for(let N=0;N<S.length;N++){const A=et.exec(S[N]);let L=A&&A[1];L&&"removeListener"!==L&&this[p].call(this,L)}this[p].call(this,"removeListener")}if(V)return this},he(w[a],$),he(w[h],I),Te&&he(w[p],Te),oe&&he(w[g],oe),!0}let J=[];for(let Z=0;Z<i.length;Z++)J[Z]=re(i[Z],o);return J}function ut(e,r){if(!r){const h=[];for(let g in e){const p=et.exec(g);let R=p&&p[1];if(R&&(!r||R===r)){const m=e[g];if(m)for(let k=0;k<m.length;k++)h.push(m[k])}}return h}let i=ce[r];i||(Ge(r),i=ce[r]);const o=e[i[_e]],a=e[i[fe]];return o?a?o.concat(a):o.slice():a?a.slice():[]}function _t(e,r){const i=e.Event;i&&i.prototype&&r.patchMethod(i.prototype,"stopImmediatePropagation",o=>function(a,h){a[lt]=!0,o&&o.apply(a,h)})}function ft(e,r,i,o,a){const h=Zone.__symbol__(o);if(r[h])return;const g=r[h]=r[o];r[o]=function(p,R,m){return R&&R.prototype&&a.forEach(function(k){const O=`${i}.${o}::`+k,D=R.prototype;try{if(D.hasOwnProperty(k)){const j=e.ObjectGetOwnPropertyDescriptor(D,k);j&&j.value?(j.value=e.wrapWithCurrentZone(j.value,O),e._redefineProperty(R.prototype,k,j)):D[k]&&(D[k]=e.wrapWithCurrentZone(D[k],O))}else D[k]&&(D[k]=e.wrapWithCurrentZone(D[k],O))}catch{}}),g.call(r,p,R,m)},e.attachOriginToPatched(r[o],g)}function nt(e,r,i){if(!i||0===i.length)return r;const o=i.filter(h=>h.target===e);if(!o||0===o.length)return r;const a=o[0].ignoreProperties;return r.filter(h=>-1===a.indexOf(h))}function Me(e,r,i,o){e&&Ye(e,nt(e,r,i),o)}function ze(e){return Object.getOwnPropertyNames(e).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}Zone.__load_patch("util",(e,r,i)=>{const o=ze(e);i.patchOnProperties=Ye,i.patchMethod=ue,i.bindArguments=Ie,i.patchMacroTask=it;const a=r.__symbol__("BLACK_LISTED_EVENTS"),h=r.__symbol__("UNPATCHED_EVENTS");e[h]&&(e[a]=e[h]),e[a]&&(r[a]=r[h]=e[a]),i.patchEventPrototype=_t,i.patchEventTarget=tt,i.isIEOrEdge=ct,i.ObjectDefineProperty=pe,i.ObjectGetOwnPropertyDescriptor=ae,i.ObjectCreate=Le,i.ArraySlice=ye,i.patchClass=Oe,i.wrapWithCurrentZone=je,i.filterProperties=nt,i.attachOriginToPatched=he,i._redefineProperty=Object.defineProperty,i.patchCallbacks=ft,i.getGlobalObjects=()=>({globalSources:Qe,zoneSymbolEventNames:ce,eventNames:o,isBrowser:le,isMix:Ue,isNode:Se,TRUE_STR:fe,FALSE_STR:_e,ZONE_SYMBOL_PREFIX:Pe,ADD_EVENT_LISTENER_STR:Ce,REMOVE_EVENT_LISTENER_STR:xe})});const s=B("zoneTask");function n(e,r,i,o){let a=null,h=null;i+=o;const g={};function p(m){const k=m.data;return k.args[0]=function(){return m.invoke.apply(this,arguments)},k.handleId=a.apply(e,k.args),m}function R(m){return h.call(e,m.data.handleId)}a=ue(e,r+=o,m=>function(k,O){if("function"==typeof O[0]){const D={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?O[1]||0:void 0,args:O},j=O[0];O[0]=function(){try{return j.apply(this,arguments)}finally{D.isPeriodic||("number"==typeof D.handleId?delete g[D.handleId]:D.handleId&&(D.handleId[s]=null))}};const z=$e(r,O[0],D,p,R);if(!z)return z;const U=z.data.handleId;return"number"==typeof U?g[U]=z:U&&(U[s]=z),U&&U.ref&&U.unref&&"function"==typeof U.ref&&"function"==typeof U.unref&&(z.ref=U.ref.bind(U),z.unref=U.unref.bind(U)),"number"==typeof U||U?U:z}return m.apply(e,O)}),h=ue(e,i,m=>function(k,O){const D=O[0];let j;"number"==typeof D?j=g[D]:(j=D&&D[s],j||(j=D)),j&&"string"==typeof j.type?"notScheduled"!==j.state&&(j.cancelFn&&j.data.isPeriodic||0===j.runCount)&&("number"==typeof D?delete g[D]:D&&(D[s]=null),j.zone.cancelTask(j)):m.apply(e,O)})}Zone.__load_patch("legacy",e=>{const r=e[Zone.__symbol__("legacyPatch")];r&&r()}),Zone.__load_patch("queueMicrotask",(e,r,i)=>{i.patchMethod(e,"queueMicrotask",o=>function(a,h){r.current.scheduleMicroTask("queueMicrotask",h[0])})}),Zone.__load_patch("timers",e=>{const r="set",i="clear";n(e,r,i,"Timeout"),n(e,r,i,"Interval"),n(e,r,i,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{n(e,"request","cancel","AnimationFrame"),n(e,"mozRequest","mozCancel","AnimationFrame"),n(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,r)=>{const i=["alert","prompt","confirm"];for(let o=0;o<i.length;o++)ue(e,i[o],(h,g,p)=>function(R,m){return r.current.run(h,e,m,p)})}),Zone.__load_patch("EventTarget",(e,r,i)=>{(function E(e,r){r.patchEventPrototype(e,r)})(e,i),function f(e,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:o,TRUE_STR:a,FALSE_STR:h,ZONE_SYMBOL_PREFIX:g}=r.getGlobalObjects();for(let R=0;R<i.length;R++){const m=i[R],D=g+(m+h),j=g+(m+a);o[m]={},o[m][h]=D,o[m][a]=j}const p=e.EventTarget;p&&p.prototype&&r.patchEventTarget(e,r,[p&&p.prototype])}(e,i);const o=e.XMLHttpRequestEventTarget;o&&o.prototype&&i.patchEventTarget(e,i,[o.prototype])}),Zone.__load_patch("MutationObserver",(e,r,i)=>{Oe("MutationObserver"),Oe("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,r,i)=>{Oe("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,r,i)=>{Oe("FileReader")}),Zone.__load_patch("on_property",(e,r,i)=>{!function rt(e,r){if(Se&&!Ue||Zone[e.symbol("patchEvents")])return;const i=r.__Zone_ignore_on_properties;let o=[];if(le){const a=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const h=function Je(){try{const e=ke.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:a,ignoreProperties:["error"]}]:[];Me(a,ze(a),i&&i.concat(h),be(a))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<o.length;a++){const h=r[o[a]];h&&h.prototype&&Me(h.prototype,ze(h.prototype),i)}}(i,e)}),Zone.__load_patch("customElements",(e,r,i)=>{!function l(e,r){const{isBrowser:i,isMix:o}=r.getGlobalObjects();(i||o)&&e.customElements&&"customElements"in e&&r.patchCallbacks(r,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,i)}),Zone.__load_patch("XHR",(e,r)=>{!function R(m){const k=m.XMLHttpRequest;if(!k)return;const O=k.prototype;let j=O[me],z=O[We];if(!j){const y=m.XMLHttpRequestEventTarget;if(y){const $=y.prototype;j=$[me],z=$[We]}}const U="readystatechange",re="scheduled";function J(y){const $=y.data,I=$.target;I[h]=!1,I[p]=!1;const oe=I[a];j||(j=I[me],z=I[We]),oe&&z.call(I,U,oe);const Te=I[a]=()=>{if(I.readyState===I.DONE)if(!$.aborted&&I[h]&&y.state===re){const Y=I[r.__symbol__("loadfalse")];if(0!==I.status&&Y&&Y.length>0){const de=y.invoke;y.invoke=function(){const ie=I[r.__symbol__("loadfalse")];for(let K=0;K<ie.length;K++)ie[K]===y&&ie.splice(K,1);!$.aborted&&y.state===re&&de.call(y)},Y.push(y)}else y.invoke()}else!$.aborted&&!1===I[h]&&(I[p]=!0)};return j.call(I,U,Te),I[i]||(I[i]=y),w.apply(I,$.args),I[h]=!0,y}function Z(){}function v(y){const $=y.data;return $.aborted=!0,F.apply($.target,$.args)}const ne=ue(O,"open",()=>function(y,$){return y[o]=0==$[2],y[g]=$[1],ne.apply(y,$)}),Q=B("fetchTaskAborting"),V=B("fetchTaskScheduling"),w=ue(O,"send",()=>function(y,$){if(!0===r.current[V]||y[o])return w.apply(y,$);{const I={target:y,url:y[g],isPeriodic:!1,args:$,aborted:!1},oe=$e("XMLHttpRequest.send",Z,I,J,v);y&&!0===y[p]&&!I.aborted&&oe.state===re&&oe.invoke()}}),F=ue(O,"abort",()=>function(y,$){const I=function D(y){return y[i]}(y);if(I&&"string"==typeof I.type){if(null==I.cancelFn||I.data&&I.data.aborted)return;I.zone.cancelTask(I)}else if(!0===r.current[Q])return F.apply(y,$)})}(e);const i=B("xhrTask"),o=B("xhrSync"),a=B("xhrListener"),h=B("xhrScheduled"),g=B("xhrURL"),p=B("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function qe(e,r){const i=e.constructor.name;for(let o=0;o<r.length;o++){const a=r[o],h=e[a];if(h){if(!He(ae(e,a)))continue;e[a]=(p=>{const R=function(){return p.apply(this,Ie(arguments,i+"."+a))};return he(R,p),R})(h)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,r)=>{function i(o){return function(a){ut(e,o).forEach(g=>{const p=e.PromiseRejectionEvent;if(p){const R=new p(o,{promise:a.promise,reason:a.rejection});g.invoke(R)}})}}e.PromiseRejectionEvent&&(r[B("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),r[B("rejectionHandledHandler")]=i("rejectionhandled"))})},3564:()=>{const ae=":";class at extends Error{constructor(n){super(`No translation found for ${tt(n)}.`),this.parsedMessage=n,this.type="MissingTranslationError"}}const Me=function(s,...n){if(Me.translate){const f=Me.translate(s,n);s=f[0],n=f[1]}let l=rt(s[0],s.raw[0]);for(let f=1;f<s.length;f++)l+=n[f-1]+rt(s[f],s.raw[f]);return l},ze=":";function rt(s,n){return n.charAt(0)===ze?s.substring(function ge(s,n){for(let l=1,f=1;l<s.length;l++,f++)if("\\"===n[f])f++;else if(s[l]===ae)return l;throw new Error(`Unterminated $localize metadata block in "${n}".`)}(s,n)+1):s}(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)().$localize=Me}},ae=>{var pe=Le=>ae(ae.s=Le);pe(8583),pe(3564)}]);