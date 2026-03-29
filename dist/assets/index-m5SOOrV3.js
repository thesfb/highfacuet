function sh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(r,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function ih(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wl={exports:{}},So={},Ll={exports:{}},E={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hr=Symbol.for("react.element"),ah=Symbol.for("react.portal"),lh=Symbol.for("react.fragment"),ch=Symbol.for("react.strict_mode"),uh=Symbol.for("react.profiler"),hh=Symbol.for("react.provider"),dh=Symbol.for("react.context"),ph=Symbol.for("react.forward_ref"),fh=Symbol.for("react.suspense"),mh=Symbol.for("react.memo"),gh=Symbol.for("react.lazy"),ga=Symbol.iterator;function yh(e){return e===null||typeof e!="object"?null:(e=ga&&e[ga]||e["@@iterator"],typeof e=="function"?e:null)}var Kl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ml=Object.assign,Ol={};function wn(e,t,n){this.props=e,this.context=t,this.refs=Ol,this.updater=n||Kl}wn.prototype.isReactComponent={};wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ql(){}Ql.prototype=wn.prototype;function yi(e,t,n){this.props=e,this.context=t,this.refs=Ol,this.updater=n||Kl}var vi=yi.prototype=new Ql;vi.constructor=yi;Ml(vi,wn.prototype);vi.isPureReactComponent=!0;var ya=Array.isArray,Bl=Object.prototype.hasOwnProperty,wi={current:null},Fl={key:!0,ref:!0,__self:!0,__source:!0};function ql(e,t,n){var r,o={},s=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)Bl.call(t,r)&&!Fl.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:hr,type:e,key:s,ref:i,props:o,_owner:wi.current}}function vh(e,t){return{$$typeof:hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ki(e){return typeof e=="object"&&e!==null&&e.$$typeof===hr}function wh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var va=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wh(""+e.key):t.toString(36)}function Qr(e,t,n,r,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case hr:case ah:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Ho(i,0):r,ya(o)?(n="",e!=null&&(n=e.replace(va,"$&/")+"/"),Qr(o,t,n,"",function(u){return u})):o!=null&&(ki(o)&&(o=vh(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(va,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",ya(e))for(var a=0;a<e.length;a++){s=e[a];var c=r+Ho(s,a);i+=Qr(s,t,n,c,o)}else if(c=yh(e),typeof c=="function")for(e=c.call(e),a=0;!(s=e.next()).done;)s=s.value,c=r+Ho(s,a++),i+=Qr(s,t,n,c,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function kr(e,t,n){if(e==null)return e;var r=[],o=0;return Qr(e,r,"","",function(s){return t.call(n,s,o++)}),r}function kh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Br={transition:null},bh={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Br,ReactCurrentOwner:wi};function Dl(){throw Error("act(...) is not supported in production builds of React.")}E.Children={map:kr,forEach:function(e,t,n){kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return kr(e,function(){t++}),t},toArray:function(e){return kr(e,function(t){return t})||[]},only:function(e){if(!ki(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};E.Component=wn;E.Fragment=lh;E.Profiler=uh;E.PureComponent=yi;E.StrictMode=ch;E.Suspense=fh;E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bh;E.act=Dl;E.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ml({},e.props),o=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=wi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Bl.call(t,c)&&!Fl.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:hr,type:e.type,key:o,ref:s,props:r,_owner:i}};E.createContext=function(e){return e={$$typeof:dh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hh,_context:e},e.Consumer=e};E.createElement=ql;E.createFactory=function(e){var t=ql.bind(null,e);return t.type=e,t};E.createRef=function(){return{current:null}};E.forwardRef=function(e){return{$$typeof:ph,render:e}};E.isValidElement=ki;E.lazy=function(e){return{$$typeof:gh,_payload:{_status:-1,_result:e},_init:kh}};E.memo=function(e,t){return{$$typeof:mh,type:e,compare:t===void 0?null:t}};E.startTransition=function(e){var t=Br.transition;Br.transition={};try{e()}finally{Br.transition=t}};E.unstable_act=Dl;E.useCallback=function(e,t){return pe.current.useCallback(e,t)};E.useContext=function(e){return pe.current.useContext(e)};E.useDebugValue=function(){};E.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};E.useEffect=function(e,t){return pe.current.useEffect(e,t)};E.useId=function(){return pe.current.useId()};E.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};E.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};E.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};E.useMemo=function(e,t){return pe.current.useMemo(e,t)};E.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};E.useRef=function(e){return pe.current.useRef(e)};E.useState=function(e){return pe.current.useState(e)};E.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};E.useTransition=function(){return pe.current.useTransition()};E.version="18.3.1";Ll.exports=E;var S=Ll.exports;const Vl=ih(S),xh=sh({__proto__:null,default:Vl},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th=S,Sh=Symbol.for("react.element"),Ih=Symbol.for("react.fragment"),Ch=Object.prototype.hasOwnProperty,zh=Th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jh={key:!0,ref:!0,__self:!0,__source:!0};function Hl(e,t,n){var r,o={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ch.call(t,r)&&!jh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Sh,type:e,key:s,ref:i,props:o,_owner:zh.current}}So.Fragment=Ih;So.jsx=Hl;So.jsxs=Hl;Wl.exports=So;var l=Wl.exports,bs={},Ul={exports:{}},Ie={},$l={exports:{}},Zl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,_){var P=N.length;N.push(_);e:for(;0<P;){var $=P-1>>>1,ee=N[$];if(0<o(ee,_))N[$]=_,N[P]=ee,P=$;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var _=N[0],P=N.pop();if(P!==_){N[0]=P;e:for(var $=0,ee=N.length,vr=ee>>>1;$<vr;){var zt=2*($+1)-1,Vo=N[zt],jt=zt+1,wr=N[jt];if(0>o(Vo,P))jt<ee&&0>o(wr,Vo)?(N[$]=wr,N[jt]=P,$=jt):(N[$]=Vo,N[zt]=P,$=zt);else if(jt<ee&&0>o(wr,P))N[$]=wr,N[jt]=P,$=jt;else break e}}return _}function o(N,_){var P=N.sortIndex-_.sortIndex;return P!==0?P:N.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var c=[],u=[],g=1,f=null,m=3,v=!1,k=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=N)r(u),_.sortIndex=_.expirationTime,t(c,_);else break;_=n(u)}}function b(N){if(w=!1,p(N),!k)if(n(c)!==null)k=!0,qo(I);else{var _=n(u);_!==null&&Do(b,_.startTime-N)}}function I(N,_){k=!1,w&&(w=!1,d(z),z=-1),v=!0;var P=m;try{for(p(_),f=n(c);f!==null&&(!(f.expirationTime>_)||N&&!Q());){var $=f.callback;if(typeof $=="function"){f.callback=null,m=f.priorityLevel;var ee=$(f.expirationTime<=_);_=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(c)&&r(c),p(_)}else r(c);f=n(c)}if(f!==null)var vr=!0;else{var zt=n(u);zt!==null&&Do(b,zt.startTime-_),vr=!1}return vr}finally{f=null,m=P,v=!1}}var A=!1,T=null,z=-1,W=5,R=-1;function Q(){return!(e.unstable_now()-R<W)}function me(){if(T!==null){var N=e.unstable_now();R=N;var _=!0;try{_=T(!0,N)}finally{_?Ve():(A=!1,T=null)}}else A=!1}var Ve;if(typeof h=="function")Ve=function(){h(me)};else if(typeof MessageChannel<"u"){var yr=new MessageChannel,Fo=yr.port2;yr.port1.onmessage=me,Ve=function(){Fo.postMessage(null)}}else Ve=function(){C(me,0)};function qo(N){T=N,A||(A=!0,Ve())}function Do(N,_){z=C(function(){N(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,qo(I))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var P=m;m=_;try{return N()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,_){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=m;m=N;try{return _()}finally{m=P}},e.unstable_scheduleCallback=function(N,_,P){var $=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?$+P:$):P=$,N){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=P+ee,N={id:g++,callback:_,priorityLevel:N,startTime:P,expirationTime:ee,sortIndex:-1},P>$?(N.sortIndex=P,t(u,N),n(c)===null&&N===n(u)&&(w?(d(z),z=-1):w=!0,Do(b,P-$))):(N.sortIndex=ee,t(c,N),k||v||(k=!0,qo(I))),N},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(N){var _=m;return function(){var P=m;m=_;try{return N.apply(this,arguments)}finally{m=P}}}})(Zl);$l.exports=Zl;var Nh=$l.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah=S,Se=Nh;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gl=new Set,Hn={};function qt(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(Hn[e]=t,e=0;e<t.length;e++)Gl.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xs=Object.prototype.hasOwnProperty,Rh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wa={},ka={};function _h(e){return xs.call(ka,e)?!0:xs.call(wa,e)?!1:Rh.test(e)?ka[e]=!0:(wa[e]=!0,!1)}function Ph(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Eh(e,t,n,r){if(t===null||typeof t>"u"||Ph(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,o,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var bi=/[\-:]([a-z])/g;function xi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bi,xi);ie[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bi,xi);ie[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bi,xi);ie[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ti(e,t,n,r){var o=ie.hasOwnProperty(t)?ie[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Eh(t,n,o,r)&&(n=null),r||o===null?_h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=Ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,br=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),$t=Symbol.for("react.fragment"),Si=Symbol.for("react.strict_mode"),Ts=Symbol.for("react.profiler"),Yl=Symbol.for("react.provider"),Xl=Symbol.for("react.context"),Ii=Symbol.for("react.forward_ref"),Ss=Symbol.for("react.suspense"),Is=Symbol.for("react.suspense_list"),Ci=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),Jl=Symbol.for("react.offscreen"),ba=Symbol.iterator;function In(e){return e===null||typeof e!="object"?null:(e=ba&&e[ba]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Uo;function Pn(e){if(Uo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Uo=t&&t[1]||""}return`
`+Uo+e}var $o=!1;function Zo(e,t){if(!e||$o)return"";$o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),s=r.stack.split(`
`),i=o.length-1,a=s.length-1;1<=i&&0<=a&&o[i]!==s[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==s[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==s[a]){var c=`
`+o[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=a);break}}}finally{$o=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function Wh(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=Zo(e.type,!1),e;case 11:return e=Zo(e.type.render,!1),e;case 1:return e=Zo(e.type,!0),e;default:return""}}function Cs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $t:return"Fragment";case Ut:return"Portal";case Ts:return"Profiler";case Si:return"StrictMode";case Ss:return"Suspense";case Is:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xl:return(e.displayName||"Context")+".Consumer";case Yl:return(e._context.displayName||"Context")+".Provider";case Ii:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ci:return t=e.displayName||null,t!==null?t:Cs(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return Cs(e(t))}catch{}}return null}function Lh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cs(t);case 8:return t===Si?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ec(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kh(e){var t=ec(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=Kh(e))}function tc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ec(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zs(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nc(e,t){t=t.checked,t!=null&&Ti(e,"checked",t,!1)}function js(e,t){nc(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ns(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ns(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ta(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ns(e,t,n){(t!=="number"||Xr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function As(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(En(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function rc(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ia(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function oc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?oc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,sc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mh=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){Mh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kn[t]=Kn[e]})});function ic(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+t).trim():t+"px"}function ac(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ic(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Oh=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _s(e,t){if(t){if(Oh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function Ps(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Es=null;function zi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,an=null,ln=null;function Ca(e){if(e=fr(e)){if(typeof Ws!="function")throw Error(x(280));var t=e.stateNode;t&&(t=No(t),Ws(e.stateNode,e.type,t))}}function lc(e){an?ln?ln.push(e):ln=[e]:an=e}function cc(){if(an){var e=an,t=ln;if(ln=an=null,Ca(e),t)for(e=0;e<t.length;e++)Ca(t[e])}}function uc(e,t){return e(t)}function hc(){}var Go=!1;function dc(e,t,n){if(Go)return e(t,n);Go=!0;try{return uc(e,t,n)}finally{Go=!1,(an!==null||ln!==null)&&(hc(),cc())}}function $n(e,t){var n=e.stateNode;if(n===null)return null;var r=No(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var Ls=!1;if(Ye)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Ls=!1}function Qh(e,t,n,r,o,s,i,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var Mn=!1,Jr=null,eo=!1,Ks=null,Bh={onError:function(e){Mn=!0,Jr=e}};function Fh(e,t,n,r,o,s,i,a,c){Mn=!1,Jr=null,Qh.apply(Bh,arguments)}function qh(e,t,n,r,o,s,i,a,c){if(Fh.apply(this,arguments),Mn){if(Mn){var u=Jr;Mn=!1,Jr=null}else throw Error(x(198));eo||(eo=!0,Ks=u)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function za(e){if(Dt(e)!==e)throw Error(x(188))}function Dh(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return za(o),e;if(s===r)return za(o),t;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=o,r=s;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=s;break}if(a===r){i=!0,r=o,n=s;break}a=a.sibling}if(!i){for(a=s.child;a;){if(a===n){i=!0,n=s,r=o;break}if(a===r){i=!0,r=s,n=o;break}a=a.sibling}if(!i)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function fc(e){return e=Dh(e),e!==null?mc(e):null}function mc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mc(e);if(t!==null)return t;e=e.sibling}return null}var gc=Se.unstable_scheduleCallback,ja=Se.unstable_cancelCallback,Vh=Se.unstable_shouldYield,Hh=Se.unstable_requestPaint,Z=Se.unstable_now,Uh=Se.unstable_getCurrentPriorityLevel,ji=Se.unstable_ImmediatePriority,yc=Se.unstable_UserBlockingPriority,to=Se.unstable_NormalPriority,$h=Se.unstable_LowPriority,vc=Se.unstable_IdlePriority,Io=null,qe=null;function Zh(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Io,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Xh,Gh=Math.log,Yh=Math.LN2;function Xh(e){return e>>>=0,e===0?32:31-(Gh(e)/Yh|0)|0}var Sr=64,Ir=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Wn(a):(s&=i,s!==0&&(r=Wn(s)))}else i=n&~o,i!==0?r=Wn(i):s!==0&&(r=Wn(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),o=1<<n,r|=e[n],t&=~o;return r}function Jh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-Ke(s),a=1<<i,c=o[i];c===-1?(!(a&n)||a&r)&&(o[i]=Jh(a,t)):c<=t&&(e.expiredLanes|=a),s&=~a}}function Ms(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wc(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function Yo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ke(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function Ni(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var M=0;function kc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bc,Ai,xc,Tc,Sc,Os=!1,Cr=[],dt=null,pt=null,ft=null,Zn=new Map,Gn=new Map,at=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Na(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function zn(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=fr(t),t!==null&&Ai(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function rd(e,t,n,r,o){switch(t){case"focusin":return dt=zn(dt,e,t,n,r,o),!0;case"dragenter":return pt=zn(pt,e,t,n,r,o),!0;case"mouseover":return ft=zn(ft,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return Zn.set(s,zn(Zn.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,Gn.set(s,zn(Gn.get(s)||null,e,t,n,r,o)),!0}return!1}function Ic(e){var t=_t(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=pc(n),t!==null){e.blockedOn=t,Sc(e.priority,function(){xc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Es=r,n.target.dispatchEvent(r),Es=null}else return t=fr(n),t!==null&&Ai(t),e.blockedOn=n,!1;t.shift()}return!0}function Aa(e,t,n){Fr(e)&&n.delete(t)}function od(){Os=!1,dt!==null&&Fr(dt)&&(dt=null),pt!==null&&Fr(pt)&&(pt=null),ft!==null&&Fr(ft)&&(ft=null),Zn.forEach(Aa),Gn.forEach(Aa)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Os||(Os=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,od)))}function Yn(e){function t(o){return jn(o,e)}if(0<Cr.length){jn(Cr[0],e);for(var n=1;n<Cr.length;n++){var r=Cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&jn(dt,e),pt!==null&&jn(pt,e),ft!==null&&jn(ft,e),Zn.forEach(t),Gn.forEach(t),n=0;n<at.length;n++)r=at[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<at.length&&(n=at[0],n.blockedOn===null);)Ic(n),n.blockedOn===null&&at.shift()}var cn=tt.ReactCurrentBatchConfig,ro=!0;function sd(e,t,n,r){var o=M,s=cn.transition;cn.transition=null;try{M=1,Ri(e,t,n,r)}finally{M=o,cn.transition=s}}function id(e,t,n,r){var o=M,s=cn.transition;cn.transition=null;try{M=4,Ri(e,t,n,r)}finally{M=o,cn.transition=s}}function Ri(e,t,n,r){if(ro){var o=Qs(e,t,n,r);if(o===null)as(e,t,r,oo,n),Na(e,r);else if(rd(o,e,t,n,r))r.stopPropagation();else if(Na(e,r),t&4&&-1<nd.indexOf(e)){for(;o!==null;){var s=fr(o);if(s!==null&&bc(s),s=Qs(e,t,n,r),s===null&&as(e,t,r,oo,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else as(e,t,r,null,n)}}var oo=null;function Qs(e,t,n,r){if(oo=null,e=zi(r),e=_t(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oo=e,null}function Cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uh()){case ji:return 1;case yc:return 4;case to:case $h:return 16;case vc:return 536870912;default:return 16}default:return 16}}var ct=null,_i=null,qr=null;function zc(){if(qr)return qr;var e,t=_i,n=t.length,r,o="value"in ct?ct.value:ct.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[s-r];r++);return qr=o.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function Ra(){return!1}function Ce(e){function t(n,r,o,s,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zr:Ra,this.isPropagationStopped=Ra,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pi=Ce(kn),pr=H({},kn,{view:0,detail:0}),ad=Ce(pr),Xo,Jo,Nn,Co=H({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ei,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Xo=e.screenX-Nn.screenX,Jo=e.screenY-Nn.screenY):Jo=Xo=0,Nn=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),_a=Ce(Co),ld=H({},Co,{dataTransfer:0}),cd=Ce(ld),ud=H({},pr,{relatedTarget:0}),es=Ce(ud),hd=H({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),dd=Ce(hd),pd=H({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fd=Ce(pd),md=H({},kn,{data:0}),Pa=Ce(md),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vd[e])?!!t[e]:!1}function Ei(){return wd}var kd=H({},pr,{key:function(e){if(e.key){var t=gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ei,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bd=Ce(kd),xd=H({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ea=Ce(xd),Td=H({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ei}),Sd=Ce(Td),Id=H({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cd=Ce(Id),zd=H({},Co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jd=Ce(zd),Nd=[9,13,27,32],Wi=Ye&&"CompositionEvent"in window,On=null;Ye&&"documentMode"in document&&(On=document.documentMode);var Ad=Ye&&"TextEvent"in window&&!On,jc=Ye&&(!Wi||On&&8<On&&11>=On),Wa=" ",La=!1;function Nc(e,t){switch(e){case"keyup":return Nd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function Rd(e,t){switch(e){case"compositionend":return Ac(t);case"keypress":return t.which!==32?null:(La=!0,Wa);case"textInput":return e=t.data,e===Wa&&La?null:e;default:return null}}function _d(e,t){if(Zt)return e==="compositionend"||!Wi&&Nc(e,t)?(e=zc(),qr=_i=ct=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jc&&t.locale!=="ko"?null:t.data;default:return null}}var Pd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pd[e.type]:t==="textarea"}function Rc(e,t,n,r){lc(r),t=so(t,"onChange"),0<t.length&&(n=new Pi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,Xn=null;function Ed(e){Fc(e,0)}function zo(e){var t=Xt(e);if(tc(t))return e}function Wd(e,t){if(e==="change")return t}var _c=!1;if(Ye){var ts;if(Ye){var ns="oninput"in document;if(!ns){var Ma=document.createElement("div");Ma.setAttribute("oninput","return;"),ns=typeof Ma.oninput=="function"}ts=ns}else ts=!1;_c=ts&&(!document.documentMode||9<document.documentMode)}function Oa(){Qn&&(Qn.detachEvent("onpropertychange",Pc),Xn=Qn=null)}function Pc(e){if(e.propertyName==="value"&&zo(Xn)){var t=[];Rc(t,Xn,e,zi(e)),dc(Ed,t)}}function Ld(e,t,n){e==="focusin"?(Oa(),Qn=t,Xn=n,Qn.attachEvent("onpropertychange",Pc)):e==="focusout"&&Oa()}function Kd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zo(Xn)}function Md(e,t){if(e==="click")return zo(t)}function Od(e,t){if(e==="input"||e==="change")return zo(t)}function Qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Qd;function Jn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!xs.call(t,o)||!Oe(e[o],t[o]))return!1}return!0}function Qa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ba(e,t){var n=Qa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qa(n)}}function Ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wc(){for(var e=window,t=Xr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xr(e.document)}return t}function Li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bd(e){var t=Wc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ec(n.ownerDocument.documentElement,n)){if(r!==null&&Li(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=Ba(n,s);var i=Ba(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fd=Ye&&"documentMode"in document&&11>=document.documentMode,Gt=null,Bs=null,Bn=null,Fs=!1;function Fa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fs||Gt==null||Gt!==Xr(r)||(r=Gt,"selectionStart"in r&&Li(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&Jn(Bn,r)||(Bn=r,r=so(Bs,"onSelect"),0<r.length&&(t=new Pi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yt={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},rs={},Lc={};Ye&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function jo(e){if(rs[e])return rs[e];if(!Yt[e])return e;var t=Yt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lc)return rs[e]=t[n];return e}var Kc=jo("animationend"),Mc=jo("animationiteration"),Oc=jo("animationstart"),Qc=jo("transitionend"),Bc=new Map,qa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){Bc.set(e,t),qt(t,[e])}for(var os=0;os<qa.length;os++){var ss=qa[os],qd=ss.toLowerCase(),Dd=ss[0].toUpperCase()+ss.slice(1);Tt(qd,"on"+Dd)}Tt(Kc,"onAnimationEnd");Tt(Mc,"onAnimationIteration");Tt(Oc,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(Qc,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function Da(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qh(r,t,void 0,e),e.currentTarget=null}function Fc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==s&&o.isPropagationStopped())break e;Da(o,a,u),s=c}else for(i=0;i<r.length;i++){if(a=r[i],c=a.instance,u=a.currentTarget,a=a.listener,c!==s&&o.isPropagationStopped())break e;Da(o,a,u),s=c}}}if(eo)throw e=Ks,eo=!1,Ks=null,e}function B(e,t){var n=t[Us];n===void 0&&(n=t[Us]=new Set);var r=e+"__bubble";n.has(r)||(qc(t,e,2,!1),n.add(r))}function is(e,t,n){var r=0;t&&(r|=4),qc(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Nr]){e[Nr]=!0,Gl.forEach(function(n){n!=="selectionchange"&&(Vd.has(n)||is(n,!1,e),is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,is("selectionchange",!1,t))}}function qc(e,t,n,r){switch(Cc(t)){case 1:var o=sd;break;case 4:o=id;break;default:o=Ri}n=o.bind(null,t,n,e),o=void 0,!Ls||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function as(e,t,n,r,o){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;i=i.return}for(;a!==null;){if(i=_t(a),i===null)return;if(c=i.tag,c===5||c===6){r=s=i;continue e}a=a.parentNode}}r=r.return}dc(function(){var u=s,g=zi(n),f=[];e:{var m=Bc.get(e);if(m!==void 0){var v=Pi,k=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":v=bd;break;case"focusin":k="focus",v=es;break;case"focusout":k="blur",v=es;break;case"beforeblur":case"afterblur":v=es;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=_a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Sd;break;case Kc:case Mc:case Oc:v=dd;break;case Qc:v=Cd;break;case"scroll":v=ad;break;case"wheel":v=jd;break;case"copy":case"cut":case"paste":v=fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ea}var w=(t&4)!==0,C=!w&&e==="scroll",d=w?m!==null?m+"Capture":null:m;w=[];for(var h=u,p;h!==null;){p=h;var b=p.stateNode;if(p.tag===5&&b!==null&&(p=b,d!==null&&(b=$n(h,d),b!=null&&w.push(tr(h,b,p)))),C)break;h=h.return}0<w.length&&(m=new v(m,k,null,n,g),f.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Es&&(k=n.relatedTarget||n.fromElement)&&(_t(k)||k[Xe]))break e;if((v||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=u,k=k?_t(k):null,k!==null&&(C=Dt(k),k!==C||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=u),v!==k)){if(w=_a,b="onMouseLeave",d="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ea,b="onPointerLeave",d="onPointerEnter",h="pointer"),C=v==null?m:Xt(v),p=k==null?m:Xt(k),m=new w(b,h+"leave",v,n,g),m.target=C,m.relatedTarget=p,b=null,_t(g)===u&&(w=new w(d,h+"enter",k,n,g),w.target=p,w.relatedTarget=C,b=w),C=b,v&&k)t:{for(w=v,d=k,h=0,p=w;p;p=Vt(p))h++;for(p=0,b=d;b;b=Vt(b))p++;for(;0<h-p;)w=Vt(w),h--;for(;0<p-h;)d=Vt(d),p--;for(;h--;){if(w===d||d!==null&&w===d.alternate)break t;w=Vt(w),d=Vt(d)}w=null}else w=null;v!==null&&Va(f,m,v,w,!1),k!==null&&C!==null&&Va(f,C,k,w,!0)}}e:{if(m=u?Xt(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var I=Wd;else if(Ka(m))if(_c)I=Od;else{I=Kd;var A=Ld}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(I=Md);if(I&&(I=I(e,u))){Rc(f,I,n,g);break e}A&&A(e,m,u),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&Ns(m,"number",m.value)}switch(A=u?Xt(u):window,e){case"focusin":(Ka(A)||A.contentEditable==="true")&&(Gt=A,Bs=u,Bn=null);break;case"focusout":Bn=Bs=Gt=null;break;case"mousedown":Fs=!0;break;case"contextmenu":case"mouseup":case"dragend":Fs=!1,Fa(f,n,g);break;case"selectionchange":if(Fd)break;case"keydown":case"keyup":Fa(f,n,g)}var T;if(Wi)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Zt?Nc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(jc&&n.locale!=="ko"&&(Zt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Zt&&(T=zc()):(ct=g,_i="value"in ct?ct.value:ct.textContent,Zt=!0)),A=so(u,z),0<A.length&&(z=new Pa(z,e,null,n,g),f.push({event:z,listeners:A}),T?z.data=T:(T=Ac(n),T!==null&&(z.data=T)))),(T=Ad?Rd(e,n):_d(e,n))&&(u=so(u,"onBeforeInput"),0<u.length&&(g=new Pa("onBeforeInput","beforeinput",null,n,g),f.push({event:g,listeners:u}),g.data=T))}Fc(f,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function so(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=$n(e,n),s!=null&&r.unshift(tr(e,s,o)),s=$n(e,t),s!=null&&r.push(tr(e,s,o))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Va(e,t,n,r,o){for(var s=t._reactName,i=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,o?(c=$n(n,s),c!=null&&i.unshift(tr(n,c,a))):o||(c=$n(n,s),c!=null&&i.push(tr(n,c,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Hd=/\r\n?/g,Ud=/\u0000|\uFFFD/g;function Ha(e){return(typeof e=="string"?e:""+e).replace(Hd,`
`).replace(Ud,"")}function Ar(e,t,n){if(t=Ha(t),Ha(e)!==t&&n)throw Error(x(425))}function io(){}var qs=null,Ds=null;function Vs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hs=typeof setTimeout=="function"?setTimeout:void 0,$d=typeof clearTimeout=="function"?clearTimeout:void 0,Ua=typeof Promise=="function"?Promise:void 0,Zd=typeof queueMicrotask=="function"?queueMicrotask:typeof Ua<"u"?function(e){return Ua.resolve(null).then(e).catch(Gd)}:Hs;function Gd(e){setTimeout(function(){throw e})}function ls(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yn(t)}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $a(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),Fe="__reactFiber$"+bn,nr="__reactProps$"+bn,Xe="__reactContainer$"+bn,Us="__reactEvents$"+bn,Yd="__reactListeners$"+bn,Xd="__reactHandles$"+bn;function _t(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$a(e);e!==null;){if(n=e[Fe])return n;e=$a(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[Fe]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function No(e){return e[nr]||null}var $s=[],Jt=-1;function St(e){return{current:e}}function F(e){0>Jt||(e.current=$s[Jt],$s[Jt]=null,Jt--)}function O(e,t){Jt++,$s[Jt]=e.current,e.current=t}var xt={},ue=St(xt),ve=St(!1),Mt=xt;function pn(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function we(e){return e=e.childContextTypes,e!=null}function ao(){F(ve),F(ue)}function Za(e,t,n){if(ue.current!==xt)throw Error(x(168));O(ue,t),O(ve,n)}function Dc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(x(108,Lh(e)||"Unknown",o));return H({},n,r)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,Mt=ue.current,O(ue,e),O(ve,ve.current),!0}function Ga(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=Dc(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,F(ve),F(ue),O(ue,e)):F(ve),O(ve,n)}var Ue=null,Ao=!1,cs=!1;function Vc(e){Ue===null?Ue=[e]:Ue.push(e)}function Jd(e){Ao=!0,Vc(e)}function It(){if(!cs&&Ue!==null){cs=!0;var e=0,t=M;try{var n=Ue;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ue=null,Ao=!1}catch(o){throw Ue!==null&&(Ue=Ue.slice(e+1)),gc(ji,It),o}finally{M=t,cs=!1}}return null}var en=[],tn=0,co=null,uo=0,ze=[],je=0,Ot=null,$e=1,Ze="";function Nt(e,t){en[tn++]=uo,en[tn++]=co,co=e,uo=t}function Hc(e,t,n){ze[je++]=$e,ze[je++]=Ze,ze[je++]=Ot,Ot=e;var r=$e;e=Ze;var o=32-Ke(r)-1;r&=~(1<<o),n+=1;var s=32-Ke(t)+o;if(30<s){var i=o-o%5;s=(r&(1<<i)-1).toString(32),r>>=i,o-=i,$e=1<<32-Ke(t)+o|n<<o|r,Ze=s+e}else $e=1<<s|n<<o|r,Ze=e}function Ki(e){e.return!==null&&(Nt(e,1),Hc(e,1,0))}function Mi(e){for(;e===co;)co=en[--tn],en[tn]=null,uo=en[--tn],en[tn]=null;for(;e===Ot;)Ot=ze[--je],ze[je]=null,Ze=ze[--je],ze[je]=null,$e=ze[--je],ze[je]=null}var Te=null,xe=null,q=!1,Le=null;function Uc(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ya(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,xe=mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:$e,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,xe=null,!0):!1;default:return!1}}function Zs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gs(e){if(q){var t=xe;if(t){var n=t;if(!Ya(e,t)){if(Zs(e))throw Error(x(418));t=mt(n.nextSibling);var r=Te;t&&Ya(e,t)?Uc(r,n):(e.flags=e.flags&-4097|2,q=!1,Te=e)}}else{if(Zs(e))throw Error(x(418));e.flags=e.flags&-4097|2,q=!1,Te=e}}}function Xa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Rr(e){if(e!==Te)return!1;if(!q)return Xa(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vs(e.type,e.memoizedProps)),t&&(t=xe)){if(Zs(e))throw $c(),Error(x(418));for(;t;)Uc(e,t),t=mt(t.nextSibling)}if(Xa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=Te?mt(e.stateNode.nextSibling):null;return!0}function $c(){for(var e=xe;e;)e=mt(e.nextSibling)}function fn(){xe=Te=null,q=!1}function Oi(e){Le===null?Le=[e]:Le.push(e)}var ep=tt.ReactCurrentBatchConfig;function An(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var a=o.refs;i===null?delete a[s]:a[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function _r(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ja(e){var t=e._init;return t(e._payload)}function Zc(e){function t(d,h){if(e){var p=d.deletions;p===null?(d.deletions=[h],d.flags|=16):p.push(h)}}function n(d,h){if(!e)return null;for(;h!==null;)t(d,h),h=h.sibling;return null}function r(d,h){for(d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function o(d,h){return d=wt(d,h),d.index=0,d.sibling=null,d}function s(d,h,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<h?(d.flags|=2,h):p):(d.flags|=2,h)):(d.flags|=1048576,h)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,h,p,b){return h===null||h.tag!==6?(h=gs(p,d.mode,b),h.return=d,h):(h=o(h,p),h.return=d,h)}function c(d,h,p,b){var I=p.type;return I===$t?g(d,h,p.props.children,b,p.key):h!==null&&(h.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===st&&Ja(I)===h.type)?(b=o(h,p.props),b.ref=An(d,h,p),b.return=d,b):(b=Yr(p.type,p.key,p.props,null,d.mode,b),b.ref=An(d,h,p),b.return=d,b)}function u(d,h,p,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=ys(p,d.mode,b),h.return=d,h):(h=o(h,p.children||[]),h.return=d,h)}function g(d,h,p,b,I){return h===null||h.tag!==7?(h=Kt(p,d.mode,b,I),h.return=d,h):(h=o(h,p),h.return=d,h)}function f(d,h,p){if(typeof h=="string"&&h!==""||typeof h=="number")return h=gs(""+h,d.mode,p),h.return=d,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case br:return p=Yr(h.type,h.key,h.props,null,d.mode,p),p.ref=An(d,null,h),p.return=d,p;case Ut:return h=ys(h,d.mode,p),h.return=d,h;case st:var b=h._init;return f(d,b(h._payload),p)}if(En(h)||In(h))return h=Kt(h,d.mode,p,null),h.return=d,h;_r(d,h)}return null}function m(d,h,p,b){var I=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return I!==null?null:a(d,h,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case br:return p.key===I?c(d,h,p,b):null;case Ut:return p.key===I?u(d,h,p,b):null;case st:return I=p._init,m(d,h,I(p._payload),b)}if(En(p)||In(p))return I!==null?null:g(d,h,p,b,null);_r(d,p)}return null}function v(d,h,p,b,I){if(typeof b=="string"&&b!==""||typeof b=="number")return d=d.get(p)||null,a(h,d,""+b,I);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case br:return d=d.get(b.key===null?p:b.key)||null,c(h,d,b,I);case Ut:return d=d.get(b.key===null?p:b.key)||null,u(h,d,b,I);case st:var A=b._init;return v(d,h,p,A(b._payload),I)}if(En(b)||In(b))return d=d.get(p)||null,g(h,d,b,I,null);_r(h,b)}return null}function k(d,h,p,b){for(var I=null,A=null,T=h,z=h=0,W=null;T!==null&&z<p.length;z++){T.index>z?(W=T,T=null):W=T.sibling;var R=m(d,T,p[z],b);if(R===null){T===null&&(T=W);break}e&&T&&R.alternate===null&&t(d,T),h=s(R,h,z),A===null?I=R:A.sibling=R,A=R,T=W}if(z===p.length)return n(d,T),q&&Nt(d,z),I;if(T===null){for(;z<p.length;z++)T=f(d,p[z],b),T!==null&&(h=s(T,h,z),A===null?I=T:A.sibling=T,A=T);return q&&Nt(d,z),I}for(T=r(d,T);z<p.length;z++)W=v(T,d,z,p[z],b),W!==null&&(e&&W.alternate!==null&&T.delete(W.key===null?z:W.key),h=s(W,h,z),A===null?I=W:A.sibling=W,A=W);return e&&T.forEach(function(Q){return t(d,Q)}),q&&Nt(d,z),I}function w(d,h,p,b){var I=In(p);if(typeof I!="function")throw Error(x(150));if(p=I.call(p),p==null)throw Error(x(151));for(var A=I=null,T=h,z=h=0,W=null,R=p.next();T!==null&&!R.done;z++,R=p.next()){T.index>z?(W=T,T=null):W=T.sibling;var Q=m(d,T,R.value,b);if(Q===null){T===null&&(T=W);break}e&&T&&Q.alternate===null&&t(d,T),h=s(Q,h,z),A===null?I=Q:A.sibling=Q,A=Q,T=W}if(R.done)return n(d,T),q&&Nt(d,z),I;if(T===null){for(;!R.done;z++,R=p.next())R=f(d,R.value,b),R!==null&&(h=s(R,h,z),A===null?I=R:A.sibling=R,A=R);return q&&Nt(d,z),I}for(T=r(d,T);!R.done;z++,R=p.next())R=v(T,d,z,R.value,b),R!==null&&(e&&R.alternate!==null&&T.delete(R.key===null?z:R.key),h=s(R,h,z),A===null?I=R:A.sibling=R,A=R);return e&&T.forEach(function(me){return t(d,me)}),q&&Nt(d,z),I}function C(d,h,p,b){if(typeof p=="object"&&p!==null&&p.type===$t&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case br:e:{for(var I=p.key,A=h;A!==null;){if(A.key===I){if(I=p.type,I===$t){if(A.tag===7){n(d,A.sibling),h=o(A,p.props.children),h.return=d,d=h;break e}}else if(A.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===st&&Ja(I)===A.type){n(d,A.sibling),h=o(A,p.props),h.ref=An(d,A,p),h.return=d,d=h;break e}n(d,A);break}else t(d,A);A=A.sibling}p.type===$t?(h=Kt(p.props.children,d.mode,b,p.key),h.return=d,d=h):(b=Yr(p.type,p.key,p.props,null,d.mode,b),b.ref=An(d,h,p),b.return=d,d=b)}return i(d);case Ut:e:{for(A=p.key;h!==null;){if(h.key===A)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){n(d,h.sibling),h=o(h,p.children||[]),h.return=d,d=h;break e}else{n(d,h);break}else t(d,h);h=h.sibling}h=ys(p,d.mode,b),h.return=d,d=h}return i(d);case st:return A=p._init,C(d,h,A(p._payload),b)}if(En(p))return k(d,h,p,b);if(In(p))return w(d,h,p,b);_r(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,h!==null&&h.tag===6?(n(d,h.sibling),h=o(h,p),h.return=d,d=h):(n(d,h),h=gs(p,d.mode,b),h.return=d,d=h),i(d)):n(d,h)}return C}var mn=Zc(!0),Gc=Zc(!1),ho=St(null),po=null,nn=null,Qi=null;function Bi(){Qi=nn=po=null}function Fi(e){var t=ho.current;F(ho),e._currentValue=t}function Ys(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function un(e,t){po=e,Qi=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(Qi!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(po===null)throw Error(x(308));nn=e,po.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var Pt=null;function qi(e){Pt===null?Pt=[e]:Pt.push(e)}function Yc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,qi(t)):(n.next=o.next,o.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function Di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Je(e,n)}return o=r.interleaved,o===null?(t.next=t,qi(r)):(t.next=o.next,o.next=t),r.interleaved=t,Je(e,n)}function Vr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ni(e,n)}}function el(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var o=e.updateQueue;it=!1;var s=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,u=c.next;c.next=null,i===null?s=u:i.next=u,i=c;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=u:a.next=u,g.lastBaseUpdate=c))}if(s!==null){var f=o.baseState;i=0,g=u=c=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,w=a;switch(m=t,v=n,w.tag){case 1:if(k=w.payload,typeof k=="function"){f=k.call(v,f,m);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,m=typeof k=="function"?k.call(v,f,m):k,m==null)break e;f=H({},f,m);break e;case 2:it=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(u=g=v,c=f):g=g.next=v,i|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(g===null&&(c=f),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);Bt|=i,e.lanes=i,e.memoizedState=f}}function tl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(x(191,o));o.call(r)}}}var mr={},De=St(mr),rr=St(mr),or=St(mr);function Et(e){if(e===mr)throw Error(x(174));return e}function Vi(e,t){switch(O(or,t),O(rr,e),O(De,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Rs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Rs(t,e)}F(De),O(De,t)}function gn(){F(De),F(rr),F(or)}function Jc(e){Et(or.current);var t=Et(De.current),n=Rs(t,e.type);t!==n&&(O(rr,e),O(De,n))}function Hi(e){rr.current===e&&(F(De),F(rr))}var D=St(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var us=[];function Ui(){for(var e=0;e<us.length;e++)us[e]._workInProgressVersionPrimary=null;us.length=0}var Hr=tt.ReactCurrentDispatcher,hs=tt.ReactCurrentBatchConfig,Qt=0,V=null,X=null,te=null,go=!1,Fn=!1,sr=0,tp=0;function ae(){throw Error(x(321))}function $i(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function Zi(e,t,n,r,o,s){if(Qt=s,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hr.current=e===null||e.memoizedState===null?sp:ip,e=n(r,o),Fn){s=0;do{if(Fn=!1,sr=0,25<=s)throw Error(x(301));s+=1,te=X=null,t.updateQueue=null,Hr.current=ap,e=n(r,o)}while(Fn)}if(Hr.current=yo,t=X!==null&&X.next!==null,Qt=0,te=X=V=null,go=!1,t)throw Error(x(300));return e}function Gi(){var e=sr!==0;return sr=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?V.memoizedState=te=e:te=te.next=e,te}function _e(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=te===null?V.memoizedState:te.next;if(t!==null)te=t,X=e;else{if(e===null)throw Error(x(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},te===null?V.memoizedState=te=e:te=te.next=e}return te}function ir(e,t){return typeof t=="function"?t(e):t}function ds(e){var t=_e(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=X,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var i=o.next;o.next=s.next,s.next=i}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var a=i=null,c=null,u=s;do{var g=u.lane;if((Qt&g)===g)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=f,i=r):c=c.next=f,V.lanes|=g,Bt|=g}u=u.next}while(u!==null&&u!==s);c===null?i=r:c.next=a,Oe(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,V.lanes|=s,Bt|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ps(e){var t=_e(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do s=e(s,i.action),i=i.next;while(i!==o);Oe(s,t.memoizedState)||(ye=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function eu(){}function tu(e,t){var n=V,r=_e(),o=t(),s=!Oe(r.memoizedState,o);if(s&&(r.memoizedState=o,ye=!0),r=r.queue,Yi(ou.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,ar(9,ru.bind(null,n,r,o,t),void 0,null),re===null)throw Error(x(349));Qt&30||nu(n,t,o)}return o}function nu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ru(e,t,n,r){t.value=n,t.getSnapshot=r,su(t)&&iu(e)}function ou(e,t,n){return n(function(){su(t)&&iu(e)})}function su(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function iu(e){var t=Je(e,1);t!==null&&Me(t,e,1,-1)}function nl(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=op.bind(null,V,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function au(){return _e().memoizedState}function Ur(e,t,n,r){var o=Be();V.flags|=e,o.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function Ro(e,t,n,r){var o=_e();r=r===void 0?null:r;var s=void 0;if(X!==null){var i=X.memoizedState;if(s=i.destroy,r!==null&&$i(r,i.deps)){o.memoizedState=ar(t,n,s,r);return}}V.flags|=e,o.memoizedState=ar(1|t,n,s,r)}function rl(e,t){return Ur(8390656,8,e,t)}function Yi(e,t){return Ro(2048,8,e,t)}function lu(e,t){return Ro(4,2,e,t)}function cu(e,t){return Ro(4,4,e,t)}function uu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hu(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4,4,uu.bind(null,t,e),n)}function Xi(){}function du(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$i(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pu(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$i(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fu(e,t,n){return Qt&21?(Oe(n,t)||(n=wc(),V.lanes|=n,Bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function np(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=hs.transition;hs.transition={};try{e(!1),t()}finally{M=n,hs.transition=r}}function mu(){return _e().memoizedState}function rp(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gu(e))yu(t,n);else if(n=Yc(e,t,n,r),n!==null){var o=de();Me(n,e,r,o),vu(n,t,r)}}function op(e,t,n){var r=vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gu(e))yu(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,a=s(i,n);if(o.hasEagerState=!0,o.eagerState=a,Oe(a,i)){var c=t.interleaved;c===null?(o.next=o,qi(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Yc(e,t,o,r),n!==null&&(o=de(),Me(n,e,r,o),vu(n,t,r))}}function gu(e){var t=e.alternate;return e===V||t!==null&&t===V}function yu(e,t){Fn=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ni(e,n)}}var yo={readContext:Re,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},sp={readContext:Re,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:rl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ur(4194308,4,uu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ur(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ur(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rp.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:nl,useDebugValue:Xi,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=nl(!1),t=e[0];return e=np.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,o=Be();if(q){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),re===null)throw Error(x(349));Qt&30||nu(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,rl(ou.bind(null,r,s,e),[e]),r.flags|=2048,ar(9,ru.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Be(),t=re.identifierPrefix;if(q){var n=Ze,r=$e;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ip={readContext:Re,useCallback:du,useContext:Re,useEffect:Yi,useImperativeHandle:hu,useInsertionEffect:lu,useLayoutEffect:cu,useMemo:pu,useReducer:ds,useRef:au,useState:function(){return ds(ir)},useDebugValue:Xi,useDeferredValue:function(e){var t=_e();return fu(t,X.memoizedState,e)},useTransition:function(){var e=ds(ir)[0],t=_e().memoizedState;return[e,t]},useMutableSource:eu,useSyncExternalStore:tu,useId:mu,unstable_isNewReconciler:!1},ap={readContext:Re,useCallback:du,useContext:Re,useEffect:Yi,useImperativeHandle:hu,useInsertionEffect:lu,useLayoutEffect:cu,useMemo:pu,useReducer:ps,useRef:au,useState:function(){return ps(ir)},useDebugValue:Xi,useDeferredValue:function(e){var t=_e();return X===null?t.memoizedState=e:fu(t,X.memoizedState,e)},useTransition:function(){var e=ps(ir)[0],t=_e().memoizedState;return[e,t]},useMutableSource:eu,useSyncExternalStore:tu,useId:mu,unstable_isNewReconciler:!1};function Ee(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _o={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),o=vt(e),s=Ge(r,o);s.payload=t,n!=null&&(s.callback=n),t=gt(e,s,o),t!==null&&(Me(t,e,o,r),Vr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),o=vt(e),s=Ge(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=gt(e,s,o),t!==null&&(Me(t,e,o,r),Vr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=vt(e),o=Ge(n,r);o.tag=2,t!=null&&(o.callback=t),t=gt(e,o,r),t!==null&&(Me(t,e,r,n),Vr(t,e,r))}};function ol(e,t,n,r,o,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(o,s):!0}function wu(e,t,n){var r=!1,o=xt,s=t.contextType;return typeof s=="object"&&s!==null?s=Re(s):(o=we(t)?Mt:ue.current,r=t.contextTypes,s=(r=r!=null)?pn(e,o):xt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function sl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function Js(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Di(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=Re(s):(s=we(t)?Mt:ue.current,o.context=pn(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Xs(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&_o.enqueueReplaceState(o,o.state,null),fo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function yn(e,t){try{var n="",r=t;do n+=Wh(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function fs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ei(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lp=typeof WeakMap=="function"?WeakMap:Map;function ku(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wo||(wo=!0,ui=r),ei(e,t)},n}function bu(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ei(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ei(e,t),typeof r!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function il(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=xp.bind(null,e,t,n),t.then(e,e))}function al(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ll(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var cp=tt.ReactCurrentOwner,ye=!1;function he(e,t,n,r){t.child=e===null?Gc(t,null,n,r):mn(t,e.child,n,r)}function cl(e,t,n,r,o){n=n.render;var s=t.ref;return un(t,o),r=Zi(e,t,n,r,s,o),n=Gi(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,et(e,t,o)):(q&&n&&Ki(t),t.flags|=1,he(e,t,r,o),t.child)}function ul(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!ia(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,xu(e,t,s,r,o)):(e=Yr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&o)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(i,r)&&e.ref===t.ref)return et(e,t,o)}return t.flags|=1,e=wt(s,r),e.ref=t.ref,e.return=t,t.child=e}function xu(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(Jn(s,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=s,(e.lanes&o)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,et(e,t,o)}return ti(e,t,n,r,o)}function Tu(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(on,be),be|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(on,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,O(on,be),be|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,O(on,be),be|=r;return he(e,t,o,n),t.child}function Su(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ti(e,t,n,r,o){var s=we(n)?Mt:ue.current;return s=pn(t,s),un(t,o),n=Zi(e,t,n,r,s,o),r=Gi(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,et(e,t,o)):(q&&r&&Ki(t),t.flags|=1,he(e,t,n,o),t.child)}function hl(e,t,n,r,o){if(we(n)){var s=!0;lo(t)}else s=!1;if(un(t,o),t.stateNode===null)$r(e,t),wu(t,n,r),Js(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var c=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Re(u):(u=we(n)?Mt:ue.current,u=pn(t,u));var g=n.getDerivedStateFromProps,f=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||c!==u)&&sl(t,i,r,u),it=!1;var m=t.memoizedState;i.state=m,fo(t,r,i,o),c=t.memoizedState,a!==r||m!==c||ve.current||it?(typeof g=="function"&&(Xs(t,n,g,r),c=t.memoizedState),(a=it||ol(t,n,a,r,m,c,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Xc(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ee(t.type,a),i.props=u,f=t.pendingProps,m=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=Re(c):(c=we(n)?Mt:ue.current,c=pn(t,c));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==f||m!==c)&&sl(t,i,r,c),it=!1,m=t.memoizedState,i.state=m,fo(t,r,i,o);var k=t.memoizedState;a!==f||m!==k||ve.current||it?(typeof v=="function"&&(Xs(t,n,v,r),k=t.memoizedState),(u=it||ol(t,n,u,r,m,k,c)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=c,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ni(e,t,n,r,s,o)}function ni(e,t,n,r,o,s){Su(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ga(t,n,!1),et(e,t,s);r=t.stateNode,cp.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=mn(t,e.child,null,s),t.child=mn(t,null,a,s)):he(e,t,a,s),t.memoizedState=r.state,o&&Ga(t,n,!0),t.child}function Iu(e){var t=e.stateNode;t.pendingContext?Za(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Za(e,t.context,!1),Vi(e,t.containerInfo)}function dl(e,t,n,r,o){return fn(),Oi(o),t.flags|=256,he(e,t,n,r),t.child}var ri={dehydrated:null,treeContext:null,retryLane:0};function oi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cu(e,t,n){var r=t.pendingProps,o=D.current,s=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),O(D,o&1),e===null)return Gs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,s?(r=t.mode,s=t.child,i={mode:"hidden",children:i},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Wo(i,r,0,null),e=Kt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=oi(n),t.memoizedState=ri,e):Ji(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return up(e,t,i,r,a,o,n);if(s){s=r.fallback,i=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=wt(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?s=wt(a,s):(s=Kt(s,i,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,i=e.child.memoizedState,i=i===null?oi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=ri,r}return s=e.child,e=s.sibling,r=wt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ji(e,t){return t=Wo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pr(e,t,n,r){return r!==null&&Oi(r),mn(t,e.child,null,n),e=Ji(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function up(e,t,n,r,o,s,i){if(n)return t.flags&256?(t.flags&=-257,r=fs(Error(x(422))),Pr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=Wo({mode:"visible",children:r.children},o,0,null),s=Kt(s,o,i,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&mn(t,e.child,null,i),t.child.memoizedState=oi(i),t.memoizedState=ri,s);if(!(t.mode&1))return Pr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=fs(s,r,void 0),Pr(e,t,i,r)}if(a=(i&e.childLanes)!==0,ye||a){if(r=re,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Je(e,o),Me(r,e,o,-1))}return sa(),r=fs(Error(x(421))),Pr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Tp.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,xe=mt(o.nextSibling),Te=t,q=!0,Le=null,e!==null&&(ze[je++]=$e,ze[je++]=Ze,ze[je++]=Ot,$e=e.id,Ze=e.overflow,Ot=t),t=Ji(t,r.children),t.flags|=4096,t)}function pl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ys(e.return,t,n)}function ms(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function zu(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(he(e,t,r.children,n),r=D.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pl(e,n,t);else if(e.tag===19)pl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(D,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ms(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&mo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ms(t,!0,n,null,s);break;case"together":ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hp(e,t,n){switch(t.tag){case 3:Iu(t),fn();break;case 5:Jc(t);break;case 1:we(t.type)&&lo(t);break;case 4:Vi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;O(ho,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(D,D.current&1),t.flags|=128,null):n&t.child.childLanes?Cu(e,t,n):(O(D,D.current&1),e=et(e,t,n),e!==null?e.sibling:null);O(D,D.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return zu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),O(D,D.current),r)break;return null;case 22:case 23:return t.lanes=0,Tu(e,t,n)}return et(e,t,n)}var ju,si,Nu,Au;ju=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};si=function(){};Nu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Et(De.current);var s=null;switch(n){case"input":o=zs(e,o),r=zs(e,r),s=[];break;case"select":o=H({},o,{value:void 0}),r=H({},r,{value:void 0}),s=[];break;case"textarea":o=As(e,o),r=As(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=io)}_s(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hn.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&a[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&B("scroll",e),s||a===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Au=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rn(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dp(e,t,n){var r=t.pendingProps;switch(Mi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return we(t.type)&&ao(),le(t),null;case 3:return r=t.stateNode,gn(),F(ve),F(ue),Ui(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(pi(Le),Le=null))),si(e,t),le(t),null;case 5:Hi(t);var o=Et(or.current);if(n=t.type,e!==null&&t.stateNode!=null)Nu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return le(t),null}if(e=Et(De.current),Rr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Fe]=t,r[nr]=s,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Ln.length;o++)B(Ln[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":xa(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":Sa(r,s),B("invalid",r)}_s(n,s),o=null;for(var i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ar(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ar(r.textContent,a,e),o=["children",""+a]):Hn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&B("scroll",r)}switch(n){case"input":xr(r),Ta(r,s,!0);break;case"textarea":xr(r),Ia(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=io)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=oc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Fe]=t,e[nr]=r,ju(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ps(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ln.length;o++)B(Ln[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":xa(e,r),o=zs(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=H({},r,{value:void 0}),B("invalid",e);break;case"textarea":Sa(e,r),o=As(e,r),B("invalid",e);break;default:o=r}_s(n,o),a=o;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?ac(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&sc(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Un(e,c):typeof c=="number"&&Un(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hn.hasOwnProperty(s)?c!=null&&s==="onScroll"&&B("scroll",e):c!=null&&Ti(e,s,c,i))}switch(n){case"input":xr(e),Ta(e,r,!1);break;case"textarea":xr(e),Ia(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?sn(e,!!r.multiple,s,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Au(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Et(or.current),Et(De.current),Rr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(s=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:Ar(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ar(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return le(t),null;case 13:if(F(D),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&xe!==null&&t.mode&1&&!(t.flags&128))$c(),fn(),t.flags|=98560,s=!1;else if(s=Rr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(x(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[Fe]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),s=!1}else Le!==null&&(pi(Le),Le=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||D.current&1?J===0&&(J=3):sa())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return gn(),si(e,t),e===null&&er(t.stateNode.containerInfo),le(t),null;case 10:return Fi(t.type._context),le(t),null;case 17:return we(t.type)&&ao(),le(t),null;case 19:if(F(D),s=t.memoizedState,s===null)return le(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)Rn(s,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=mo(e),i!==null){for(t.flags|=128,Rn(s,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(D,D.current&1|2),t.child}e=e.sibling}s.tail!==null&&Z()>vn&&(t.flags|=128,r=!0,Rn(s,!1),t.lanes=4194304)}else{if(!r)if(e=mo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!q)return le(t),null}else 2*Z()-s.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,Rn(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Z(),t.sibling=null,n=D.current,O(D,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return oa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function pp(e,t){switch(Mi(t),t.tag){case 1:return we(t.type)&&ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),F(ve),F(ue),Ui(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Hi(t),null;case 13:if(F(D),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(D),null;case 4:return gn(),null;case 10:return Fi(t.type._context),null;case 22:case 23:return oa(),null;case 24:return null;default:return null}}var Er=!1,ce=!1,fp=typeof WeakSet=="function"?WeakSet:Set,j=null;function rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){U(e,t,r)}else n.current=null}function ii(e,t,n){try{n()}catch(r){U(e,t,r)}}var fl=!1;function mp(e,t){if(qs=ro,e=Wc(),Li(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,a=-1,c=-1,u=0,g=0,f=e,m=null;t:for(;;){for(var v;f!==n||o!==0&&f.nodeType!==3||(a=i+o),f!==s||r!==0&&f.nodeType!==3||(c=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break t;if(m===n&&++u===o&&(a=i),m===s&&++g===r&&(c=i),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ds={focusedElem:e,selectionRange:n},ro=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,C=k.memoizedState,d=t.stateNode,h=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ee(t.type,w),C);d.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(b){U(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return k=fl,fl=!1,k}function qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&ii(t,n,s)}o=o.next}while(o!==r)}}function Po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ai(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ru(e){var t=e.alternate;t!==null&&(e.alternate=null,Ru(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[nr],delete t[Us],delete t[Yd],delete t[Xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _u(e){return e.tag===5||e.tag===3||e.tag===4}function ml(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=io));else if(r!==4&&(e=e.child,e!==null))for(li(e,t,n),e=e.sibling;e!==null;)li(e,t,n),e=e.sibling}function ci(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ci(e,t,n),e=e.sibling;e!==null;)ci(e,t,n),e=e.sibling}var oe=null,We=!1;function rt(e,t,n){for(n=n.child;n!==null;)Pu(e,t,n),n=n.sibling}function Pu(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Io,n)}catch{}switch(n.tag){case 5:ce||rn(n,t);case 6:var r=oe,o=We;oe=null,rt(e,t,n),oe=r,We=o,oe!==null&&(We?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(We?(e=oe,n=n.stateNode,e.nodeType===8?ls(e.parentNode,n):e.nodeType===1&&ls(e,n),Yn(e)):ls(oe,n.stateNode));break;case 4:r=oe,o=We,oe=n.stateNode.containerInfo,We=!0,rt(e,t,n),oe=r,We=o;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&ii(n,t,i),o=o.next}while(o!==r)}rt(e,t,n);break;case 1:if(!ce&&(rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){U(n,t,a)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,rt(e,t,n),ce=r):rt(e,t,n);break;default:rt(e,t,n)}}function gl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fp),t.forEach(function(r){var o=Sp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:oe=a.stateNode,We=!1;break e;case 3:oe=a.stateNode.containerInfo,We=!0;break e;case 4:oe=a.stateNode.containerInfo,We=!0;break e}a=a.return}if(oe===null)throw Error(x(160));Pu(s,i,o),oe=null,We=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){U(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Eu(t,e),t=t.sibling}function Eu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Qe(e),r&4){try{qn(3,e,e.return),Po(3,e)}catch(w){U(e,e.return,w)}try{qn(5,e,e.return)}catch(w){U(e,e.return,w)}}break;case 1:Pe(t,e),Qe(e),r&512&&n!==null&&rn(n,n.return);break;case 5:if(Pe(t,e),Qe(e),r&512&&n!==null&&rn(n,n.return),e.flags&32){var o=e.stateNode;try{Un(o,"")}catch(w){U(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&nc(o,s),Ps(a,i);var u=Ps(a,s);for(i=0;i<c.length;i+=2){var g=c[i],f=c[i+1];g==="style"?ac(o,f):g==="dangerouslySetInnerHTML"?sc(o,f):g==="children"?Un(o,f):Ti(o,g,f,u)}switch(a){case"input":js(o,s);break;case"textarea":rc(o,s);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?sn(o,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?sn(o,!!s.multiple,s.defaultValue,!0):sn(o,!!s.multiple,s.multiple?[]:"",!1))}o[nr]=s}catch(w){U(e,e.return,w)}}break;case 6:if(Pe(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(w){U(e,e.return,w)}}break;case 3:if(Pe(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(w){U(e,e.return,w)}break;case 4:Pe(t,e),Qe(e);break;case 13:Pe(t,e),Qe(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(na=Z())),r&4&&gl(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(u=ce)||g,Pe(t,e),ce=u):Pe(t,e),Qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(j=e,g=e.child;g!==null;){for(f=j=g;j!==null;){switch(m=j,v=m.child,m.tag){case 0:case 11:case 14:case 15:qn(4,m,m.return);break;case 1:rn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){U(r,n,w)}}break;case 5:rn(m,m.return);break;case 22:if(m.memoizedState!==null){vl(f);continue}}v!==null?(v.return=m,j=v):vl(f)}g=g.sibling}e:for(g=null,f=e;;){if(f.tag===5){if(g===null){g=f;try{o=f.stateNode,u?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,c=f.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=ic("display",i))}catch(w){U(e,e.return,w)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){U(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pe(t,e),Qe(e),r&4&&gl(e);break;case 21:break;default:Pe(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_u(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Un(o,""),r.flags&=-33);var s=ml(e);ci(e,s,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=ml(e);li(e,a,i);break;default:throw Error(x(161))}}catch(c){U(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gp(e,t,n){j=e,Wu(e)}function Wu(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,s=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Er;if(!i){var a=o.alternate,c=a!==null&&a.memoizedState!==null||ce;a=Er;var u=ce;if(Er=i,(ce=c)&&!u)for(j=o;j!==null;)i=j,c=i.child,i.tag===22&&i.memoizedState!==null?wl(o):c!==null?(c.return=i,j=c):wl(o);for(;s!==null;)j=s,Wu(s),s=s.sibling;j=o,Er=a,ce=u}yl(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,j=s):yl(e)}}function yl(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||Po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ee(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&tl(t,s,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tl(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&Yn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ce||t.flags&512&&ai(t)}catch(m){U(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function vl(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function wl(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Po(4,t)}catch(c){U(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){U(t,o,c)}}var s=t.return;try{ai(t)}catch(c){U(t,s,c)}break;case 5:var i=t.return;try{ai(t)}catch(c){U(t,i,c)}}}catch(c){U(t,t.return,c)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var yp=Math.ceil,vo=tt.ReactCurrentDispatcher,ea=tt.ReactCurrentOwner,Ae=tt.ReactCurrentBatchConfig,K=0,re=null,Y=null,se=0,be=0,on=St(0),J=0,lr=null,Bt=0,Eo=0,ta=0,Dn=null,ge=null,na=0,vn=1/0,He=null,wo=!1,ui=null,yt=null,Wr=!1,ut=null,ko=0,Vn=0,hi=null,Zr=-1,Gr=0;function de(){return K&6?Z():Zr!==-1?Zr:Zr=Z()}function vt(e){return e.mode&1?K&2&&se!==0?se&-se:ep.transition!==null?(Gr===0&&(Gr=wc()),Gr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Cc(e.type)),e):1}function Me(e,t,n,r){if(50<Vn)throw Vn=0,hi=null,Error(x(185));dr(e,n,r),(!(K&2)||e!==re)&&(e===re&&(!(K&2)&&(Eo|=n),J===4&&lt(e,se)),ke(e,r),n===1&&K===0&&!(t.mode&1)&&(vn=Z()+500,Ao&&It()))}function ke(e,t){var n=e.callbackNode;ed(e,t);var r=no(e,e===re?se:0);if(r===0)n!==null&&ja(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ja(n),t===1)e.tag===0?Jd(kl.bind(null,e)):Vc(kl.bind(null,e)),Zd(function(){!(K&6)&&It()}),n=null;else{switch(kc(r)){case 1:n=ji;break;case 4:n=yc;break;case 16:n=to;break;case 536870912:n=vc;break;default:n=to}n=qu(n,Lu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lu(e,t){if(Zr=-1,Gr=0,K&6)throw Error(x(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=no(e,e===re?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=bo(e,r);else{t=r;var o=K;K|=2;var s=Mu();(re!==e||se!==t)&&(He=null,vn=Z()+500,Lt(e,t));do try{kp();break}catch(a){Ku(e,a)}while(!0);Bi(),vo.current=s,K=o,Y!==null?t=0:(re=null,se=0,t=J)}if(t!==0){if(t===2&&(o=Ms(e),o!==0&&(r=o,t=di(e,o))),t===1)throw n=lr,Lt(e,0),lt(e,r),ke(e,Z()),n;if(t===6)lt(e,r);else{if(o=e.current.alternate,!(r&30)&&!vp(o)&&(t=bo(e,r),t===2&&(s=Ms(e),s!==0&&(r=s,t=di(e,s))),t===1))throw n=lr,Lt(e,0),lt(e,r),ke(e,Z()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:At(e,ge,He);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=na+500-Z(),10<t)){if(no(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Hs(At.bind(null,e,ge,He),t);break}At(e,ge,He);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ke(r);s=1<<i,i=t[i],i>o&&(o=i),r&=~s}if(r=o,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yp(r/1960))-r,10<r){e.timeoutHandle=Hs(At.bind(null,e,ge,He),r);break}At(e,ge,He);break;case 5:At(e,ge,He);break;default:throw Error(x(329))}}}return ke(e,Z()),e.callbackNode===n?Lu.bind(null,e):null}function di(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=bo(e,t),e!==2&&(t=ge,ge=n,t!==null&&pi(t)),e}function pi(e){ge===null?ge=e:ge.push.apply(ge,e)}function vp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!Oe(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~ta,t&=~Eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function kl(e){if(K&6)throw Error(x(327));hn();var t=no(e,0);if(!(t&1))return ke(e,Z()),null;var n=bo(e,t);if(e.tag!==0&&n===2){var r=Ms(e);r!==0&&(t=r,n=di(e,r))}if(n===1)throw n=lr,Lt(e,0),lt(e,t),ke(e,Z()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,At(e,ge,He),ke(e,Z()),null}function ra(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(vn=Z()+500,Ao&&It())}}function Ft(e){ut!==null&&ut.tag===0&&!(K&6)&&hn();var t=K;K|=1;var n=Ae.transition,r=M;try{if(Ae.transition=null,M=1,e)return e()}finally{M=r,Ae.transition=n,K=t,!(K&6)&&It()}}function oa(){be=on.current,F(on)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$d(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(Mi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:gn(),F(ve),F(ue),Ui();break;case 5:Hi(r);break;case 4:gn();break;case 13:F(D);break;case 19:F(D);break;case 10:Fi(r.type._context);break;case 22:case 23:oa()}n=n.return}if(re=e,Y=e=wt(e.current,null),se=be=t,J=0,lr=null,ta=Eo=Bt=0,ge=Dn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var i=s.next;s.next=o,r.next=i}n.pending=r}Pt=null}return e}function Ku(e,t){do{var n=Y;try{if(Bi(),Hr.current=yo,go){for(var r=V.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}go=!1}if(Qt=0,te=X=V=null,Fn=!1,sr=0,ea.current=null,n===null||n.return===null){J=1,lr=t,Y=null;break}e:{var s=e,i=n.return,a=n,c=t;if(t=se,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,g=a,f=g.tag;if(!(g.mode&1)&&(f===0||f===11||f===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=al(i);if(v!==null){v.flags&=-257,ll(v,i,a,s,t),v.mode&1&&il(s,u,t),t=v,c=u;var k=t.updateQueue;if(k===null){var w=new Set;w.add(c),t.updateQueue=w}else k.add(c);break e}else{if(!(t&1)){il(s,u,t),sa();break e}c=Error(x(426))}}else if(q&&a.mode&1){var C=al(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ll(C,i,a,s,t),Oi(yn(c,a));break e}}s=c=yn(c,a),J!==4&&(J=2),Dn===null?Dn=[s]:Dn.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var d=ku(s,c,t);el(s,d);break e;case 1:a=c;var h=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(yt===null||!yt.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var b=bu(s,a,t);el(s,b);break e}}s=s.return}while(s!==null)}Qu(n)}catch(I){t=I,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Mu(){var e=vo.current;return vo.current=yo,e===null?yo:e}function sa(){(J===0||J===3||J===2)&&(J=4),re===null||!(Bt&268435455)&&!(Eo&268435455)||lt(re,se)}function bo(e,t){var n=K;K|=2;var r=Mu();(re!==e||se!==t)&&(He=null,Lt(e,t));do try{wp();break}catch(o){Ku(e,o)}while(!0);if(Bi(),K=n,vo.current=r,Y!==null)throw Error(x(261));return re=null,se=0,J}function wp(){for(;Y!==null;)Ou(Y)}function kp(){for(;Y!==null&&!Vh();)Ou(Y)}function Ou(e){var t=Fu(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Qu(e):Y=t,ea.current=null}function Qu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pp(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Y=null;return}}else if(n=dp(n,t,be),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);J===0&&(J=5)}function At(e,t,n){var r=M,o=Ae.transition;try{Ae.transition=null,M=1,bp(e,t,n,r)}finally{Ae.transition=o,M=r}return null}function bp(e,t,n,r){do hn();while(ut!==null);if(K&6)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(td(e,s),e===re&&(Y=re=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wr||(Wr=!0,qu(to,function(){return hn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ae.transition,Ae.transition=null;var i=M;M=1;var a=K;K|=4,ea.current=null,mp(e,n),Eu(n,e),Bd(Ds),ro=!!qs,Ds=qs=null,e.current=n,gp(n),Hh(),K=a,M=i,Ae.transition=s}else e.current=n;if(Wr&&(Wr=!1,ut=e,ko=o),s=e.pendingLanes,s===0&&(yt=null),Zh(n.stateNode),ke(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(wo)throw wo=!1,e=ui,ui=null,e;return ko&1&&e.tag!==0&&hn(),s=e.pendingLanes,s&1?e===hi?Vn++:(Vn=0,hi=e):Vn=0,It(),null}function hn(){if(ut!==null){var e=kc(ko),t=Ae.transition,n=M;try{if(Ae.transition=null,M=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,ko=0,K&6)throw Error(x(331));var o=K;for(K|=4,j=e.current;j!==null;){var s=j,i=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(j=u;j!==null;){var g=j;switch(g.tag){case 0:case 11:case 15:qn(8,g,s)}var f=g.child;if(f!==null)f.return=g,j=f;else for(;j!==null;){g=j;var m=g.sibling,v=g.return;if(Ru(g),g===u){j=null;break}if(m!==null){m.return=v,j=m;break}j=v}}}var k=s.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}j=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,j=i;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qn(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,j=d;break e}j=s.return}}var h=e.current;for(j=h;j!==null;){i=j;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,j=p;else e:for(i=h;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Po(9,a)}}catch(I){U(a,a.return,I)}if(a===i){j=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,j=b;break e}j=a.return}}if(K=o,It(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Io,e)}catch{}r=!0}return r}finally{M=n,Ae.transition=t}}return!1}function bl(e,t,n){t=yn(n,t),t=ku(e,t,1),e=gt(e,t,1),t=de(),e!==null&&(dr(e,1,t),ke(e,t))}function U(e,t,n){if(e.tag===3)bl(e,e,n);else for(;t!==null;){if(t.tag===3){bl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yt===null||!yt.has(r))){e=yn(n,e),e=bu(t,e,1),t=gt(t,e,1),e=de(),t!==null&&(dr(t,1,e),ke(t,e));break}}t=t.return}}function xp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(se&n)===n&&(J===4||J===3&&(se&130023424)===se&&500>Z()-na?Lt(e,0):ta|=n),ke(e,t)}function Bu(e,t){t===0&&(e.mode&1?(t=Ir,Ir<<=1,!(Ir&130023424)&&(Ir=4194304)):t=1);var n=de();e=Je(e,t),e!==null&&(dr(e,t,n),ke(e,n))}function Tp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bu(e,n)}function Sp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Bu(e,n)}var Fu;Fu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,hp(e,t,n);ye=!!(e.flags&131072)}else ye=!1,q&&t.flags&1048576&&Hc(t,uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$r(e,t),e=t.pendingProps;var o=pn(t,ue.current);un(t,n),o=Zi(null,t,r,e,o,n);var s=Gi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(s=!0,lo(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Di(t),o.updater=_o,t.stateNode=o,o._reactInternals=t,Js(t,r,e,n),t=ni(null,t,r,!0,s,n)):(t.tag=0,q&&s&&Ki(t),he(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch($r(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Cp(r),e=Ee(r,e),o){case 0:t=ti(null,t,r,e,n);break e;case 1:t=hl(null,t,r,e,n);break e;case 11:t=cl(null,t,r,e,n);break e;case 14:t=ul(null,t,r,Ee(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ee(r,o),ti(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ee(r,o),hl(e,t,r,o,n);case 3:e:{if(Iu(t),e===null)throw Error(x(387));r=t.pendingProps,s=t.memoizedState,o=s.element,Xc(e,t),fo(t,r,null,n);var i=t.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=yn(Error(x(423)),t),t=dl(e,t,r,n,o);break e}else if(r!==o){o=yn(Error(x(424)),t),t=dl(e,t,r,n,o);break e}else for(xe=mt(t.stateNode.containerInfo.firstChild),Te=t,q=!0,Le=null,n=Gc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fn(),r===o){t=et(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return Jc(t),e===null&&Gs(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,i=o.children,Vs(r,o)?i=null:s!==null&&Vs(r,s)&&(t.flags|=32),Su(e,t),he(e,t,i,n),t.child;case 6:return e===null&&Gs(t),null;case 13:return Cu(e,t,n);case 4:return Vi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ee(r,o),cl(e,t,r,o,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,i=o.value,O(ho,r._currentValue),r._currentValue=i,s!==null)if(Oe(s.value,i)){if(s.children===o.children&&!ve.current){t=et(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){i=s.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Ge(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?c.next=c:(c.next=g.next,g.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ys(s.return,n,t),a.lanes|=n;break}c=c.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(x(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ys(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}he(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,un(t,n),o=Re(o),r=r(o),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,o=Ee(r,t.pendingProps),o=Ee(r.type,o),ul(e,t,r,o,n);case 15:return xu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ee(r,o),$r(e,t),t.tag=1,we(r)?(e=!0,lo(t)):e=!1,un(t,n),wu(t,r,o),Js(t,r,o,n),ni(null,t,r,!0,e,n);case 19:return zu(e,t,n);case 22:return Tu(e,t,n)}throw Error(x(156,t.tag))};function qu(e,t){return gc(e,t)}function Ip(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Ip(e,t,n,r)}function ia(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cp(e){if(typeof e=="function")return ia(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ii)return 11;if(e===Ci)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yr(e,t,n,r,o,s){var i=2;if(r=e,typeof e=="function")ia(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case $t:return Kt(n.children,o,s,t);case Si:i=8,o|=8;break;case Ts:return e=Ne(12,n,t,o|2),e.elementType=Ts,e.lanes=s,e;case Ss:return e=Ne(13,n,t,o),e.elementType=Ss,e.lanes=s,e;case Is:return e=Ne(19,n,t,o),e.elementType=Is,e.lanes=s,e;case Jl:return Wo(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yl:i=10;break e;case Xl:i=9;break e;case Ii:i=11;break e;case Ci:i=14;break e;case st:i=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ne(i,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function Kt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Wo(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=Jl,e.lanes=n,e.stateNode={isHidden:!1},e}function gs(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function ys(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yo(0),this.expirationTimes=Yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function aa(e,t,n,r,o,s,i,a,c){return e=new zp(e,t,n,a,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ne(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Di(s),e}function jp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Du(e){if(!e)return xt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(we(n))return Dc(e,n,t)}return t}function Vu(e,t,n,r,o,s,i,a,c){return e=aa(n,r,!0,e,o,s,i,a,c),e.context=Du(null),n=e.current,r=de(),o=vt(n),s=Ge(r,o),s.callback=t??null,gt(n,s,o),e.current.lanes=o,dr(e,o,r),ke(e,r),e}function Lo(e,t,n,r){var o=t.current,s=de(),i=vt(o);return n=Du(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(s,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(o,t,i),e!==null&&(Me(e,o,i,s),Vr(e,o,i)),i}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function la(e,t){xl(e,t),(e=e.alternate)&&xl(e,t)}function Np(){return null}var Hu=typeof reportError=="function"?reportError:function(e){console.error(e)};function ca(e){this._internalRoot=e}Ko.prototype.render=ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Lo(e,t,null,null)};Ko.prototype.unmount=ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){Lo(null,e,null,null)}),t[Xe]=null}};function Ko(e){this._internalRoot=e}Ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<at.length&&t!==0&&t<at[n].priority;n++);at.splice(n,0,e),n===0&&Ic(e)}};function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tl(){}function Ap(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var u=xo(i);s.call(u)}}var i=Vu(t,r,e,0,null,!1,!1,"",Tl);return e._reactRootContainer=i,e[Xe]=i.current,er(e.nodeType===8?e.parentNode:e),Ft(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=xo(c);a.call(u)}}var c=aa(e,0,!1,null,null,!1,!1,"",Tl);return e._reactRootContainer=c,e[Xe]=c.current,er(e.nodeType===8?e.parentNode:e),Ft(function(){Lo(t,c,n,r)}),c}function Oo(e,t,n,r,o){var s=n._reactRootContainer;if(s){var i=s;if(typeof o=="function"){var a=o;o=function(){var c=xo(i);a.call(c)}}Lo(t,i,e,o)}else i=Ap(n,t,e,o,r);return xo(i)}bc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(Ni(t,n|1),ke(t,Z()),!(K&6)&&(vn=Z()+500,It()))}break;case 13:Ft(function(){var r=Je(e,1);if(r!==null){var o=de();Me(r,e,1,o)}}),la(e,1)}};Ai=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=de();Me(t,e,134217728,n)}la(e,134217728)}};xc=function(e){if(e.tag===13){var t=vt(e),n=Je(e,t);if(n!==null){var r=de();Me(n,e,t,r)}la(e,t)}};Tc=function(){return M};Sc=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Ws=function(e,t,n){switch(t){case"input":if(js(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=No(r);if(!o)throw Error(x(90));tc(r),js(r,o)}}}break;case"textarea":rc(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}};uc=ra;hc=Ft;var Rp={usingClientEntryPoint:!1,Events:[fr,Xt,No,lc,cc,ra]},_n={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_p={bundleType:_n.bundleType,version:_n.version,rendererPackageName:_n.rendererPackageName,rendererConfig:_n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fc(e),e===null?null:e.stateNode},findFiberByHostInstance:_n.findFiberByHostInstance||Np,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{Io=Lr.inject(_p),qe=Lr}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rp;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(t))throw Error(x(200));return jp(e,t,null,n)};Ie.createRoot=function(e,t){if(!ua(e))throw Error(x(299));var n=!1,r="",o=Hu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=aa(e,1,!1,null,null,n,!1,r,o),e[Xe]=t.current,er(e.nodeType===8?e.parentNode:e),new ca(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=fc(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return Ft(e)};Ie.hydrate=function(e,t,n){if(!Mo(t))throw Error(x(200));return Oo(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!ua(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",i=Hu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Vu(t,null,e,1,n??null,o,!1,s,i),e[Xe]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ko(t)};Ie.render=function(e,t,n){if(!Mo(t))throw Error(x(200));return Oo(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(x(40));return e._reactRootContainer?(Ft(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};Ie.unstable_batchedUpdates=ra;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mo(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Oo(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function Uu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uu)}catch(e){console.error(e)}}Uu(),Ul.exports=Ie;var Pp=Ul.exports,Sl=Pp;bs.createRoot=Sl.createRoot,bs.hydrateRoot=Sl.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cr(){return cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cr.apply(this,arguments)}var ht;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ht||(ht={}));const Il="popstate";function Ep(e){e===void 0&&(e={});function t(r,o){let{pathname:s,search:i,hash:a}=r.location;return fi("",{pathname:s,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:To(o)}return Lp(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ha(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wp(){return Math.random().toString(36).substr(2,8)}function Cl(e,t){return{usr:e.state,key:e.key,idx:t}}function fi(e,t,n,r){return n===void 0&&(n=null),cr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xn(t):t,{state:n,key:t&&t.key||r||Wp()})}function To(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function xn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Lp(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:s=!1}=r,i=o.history,a=ht.Pop,c=null,u=g();u==null&&(u=0,i.replaceState(cr({},i.state,{idx:u}),""));function g(){return(i.state||{idx:null}).idx}function f(){a=ht.Pop;let C=g(),d=C==null?null:C-u;u=C,c&&c({action:a,location:w.location,delta:d})}function m(C,d){a=ht.Push;let h=fi(w.location,C,d);u=g()+1;let p=Cl(h,u),b=w.createHref(h);try{i.pushState(p,"",b)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;o.location.assign(b)}s&&c&&c({action:a,location:w.location,delta:1})}function v(C,d){a=ht.Replace;let h=fi(w.location,C,d);u=g();let p=Cl(h,u),b=w.createHref(h);i.replaceState(p,"",b),s&&c&&c({action:a,location:w.location,delta:0})}function k(C){let d=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof C=="string"?C:To(C);return h=h.replace(/ $/,"%20"),G(d,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,d)}let w={get action(){return a},get location(){return e(o,i)},listen(C){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Il,f),c=C,()=>{o.removeEventListener(Il,f),c=null}},createHref(C){return t(o,C)},createURL:k,encodeLocation(C){let d=k(C);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:v,go(C){return i.go(C)}};return w}var zl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zl||(zl={}));function Kp(e,t,n){return n===void 0&&(n="/"),Mp(e,t,n)}function Mp(e,t,n,r){let o=typeof t=="string"?xn(t):t,s=da(o.pathname||"/",n);if(s==null)return null;let i=$u(e);Op(i);let a=null;for(let c=0;a==null&&c<i.length;++c){let u=Yp(s);a=$p(i[c],u)}return a}function $u(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(s,i,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};c.relativePath.startsWith("/")&&(G(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=kt([r,c.relativePath]),g=n.concat(c);s.children&&s.children.length>0&&(G(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),$u(s.children,t,g,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Hp(u,s.index),routesMeta:g})};return e.forEach((s,i)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))o(s,i);else for(let c of Zu(s.path))o(s,i,c)}),t}function Zu(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return o?[s,""]:[s];let i=Zu(r.join("/")),a=[];return a.push(...i.map(c=>c===""?s:[s,c].join("/"))),o&&a.push(...i),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Op(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Up(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qp=/^:[\w-]+$/,Bp=3,Fp=2,qp=1,Dp=10,Vp=-2,jl=e=>e==="*";function Hp(e,t){let n=e.split("/"),r=n.length;return n.some(jl)&&(r+=Vp),t&&(r+=Fp),n.filter(o=>!jl(o)).reduce((o,s)=>o+(Qp.test(s)?Bp:s===""?qp:Dp),r)}function Up(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function $p(e,t,n){let{routesMeta:r}=e,o={},s="/",i=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,g=s==="/"?t:t.slice(s.length)||"/",f=Zp({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},g),m=c.route;if(!f)return null;Object.assign(o,f.params),i.push({params:o,pathname:kt([s,f.pathname]),pathnameBase:nf(kt([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=kt([s,f.pathnameBase]))}return i}function Zp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Gp(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let s=o[0],i=s.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,g,f)=>{let{paramName:m,isOptional:v}=g;if(m==="*"){let w=a[f]||"";i=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const k=a[f];return v&&!k?u[m]=void 0:u[m]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:i,pattern:e}}function Gp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ha(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Yp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ha(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function da(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Xp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jp=e=>Xp.test(e);function ef(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?xn(e):e,s;if(n)if(Jp(n))s=n;else{if(n.includes("//")){let i=n;n=n.replace(/\/\/+/g,"/"),ha(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+n))}n.startsWith("/")?s=Nl(n.substring(1),"/"):s=Nl(n,t)}else s=t;return{pathname:s,search:rf(r),hash:of(o)}}function Nl(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function vs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pa(e,t){let n=tf(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fa(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=xn(e):(o=cr({},e),G(!o.pathname||!o.pathname.includes("?"),vs("?","pathname","search",o)),G(!o.pathname||!o.pathname.includes("#"),vs("#","pathname","hash",o)),G(!o.search||!o.search.includes("#"),vs("#","search","hash",o)));let s=e===""||o.pathname==="",i=s?"/":o.pathname,a;if(i==null)a=n;else{let f=t.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),f-=1;o.pathname=m.join("/")}a=f>=0?t[f]:"/"}let c=ef(o,a),u=i&&i!=="/"&&i.endsWith("/"),g=(s||i===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||g)&&(c.pathname+="/"),c}const kt=e=>e.join("/").replace(/\/\/+/g,"/"),nf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),rf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,of=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function sf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gu=["post","put","patch","delete"];new Set(Gu);const af=["get",...Gu];new Set(af);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ur.apply(this,arguments)}const ma=S.createContext(null),lf=S.createContext(null),Ct=S.createContext(null),Qo=S.createContext(null),nt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Yu=S.createContext(null);function cf(e,t){let{relative:n}=t===void 0?{}:t;Tn()||G(!1);let{basename:r,navigator:o}=S.useContext(Ct),{hash:s,pathname:i,search:a}=eh(e,{relative:n}),c=i;return r!=="/"&&(c=i==="/"?r:kt([r,i])),o.createHref({pathname:c,search:a,hash:s})}function Tn(){return S.useContext(Qo)!=null}function Sn(){return Tn()||G(!1),S.useContext(Qo).location}function Xu(e){S.useContext(Ct).static||S.useLayoutEffect(e)}function Ju(){let{isDataRoute:e}=S.useContext(nt);return e?xf():uf()}function uf(){Tn()||G(!1);let e=S.useContext(ma),{basename:t,future:n,navigator:r}=S.useContext(Ct),{matches:o}=S.useContext(nt),{pathname:s}=Sn(),i=JSON.stringify(pa(o,n.v7_relativeSplatPath)),a=S.useRef(!1);return Xu(()=>{a.current=!0}),S.useCallback(function(u,g){if(g===void 0&&(g={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=fa(u,JSON.parse(i),s,g.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:kt([t,f.pathname])),(g.replace?r.replace:r.push)(f,g.state,g)},[t,r,i,s,e])}function Bo(){let{matches:e}=S.useContext(nt),t=e[e.length-1];return t?t.params:{}}function eh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Ct),{matches:o}=S.useContext(nt),{pathname:s}=Sn(),i=JSON.stringify(pa(o,r.v7_relativeSplatPath));return S.useMemo(()=>fa(e,JSON.parse(i),s,n==="path"),[e,i,s,n])}function hf(e,t){return df(e,t)}function df(e,t,n,r){Tn()||G(!1);let{navigator:o}=S.useContext(Ct),{matches:s}=S.useContext(nt),i=s[s.length-1],a=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let u=Sn(),g;if(t){var f;let C=typeof t=="string"?xn(t):t;c==="/"||(f=C.pathname)!=null&&f.startsWith(c)||G(!1),g=C}else g=u;let m=g.pathname||"/",v=m;if(c!=="/"){let C=c.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let k=Kp(e,{pathname:v}),w=yf(k&&k.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:kt([c,o.encodeLocation?o.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?c:kt([c,o.encodeLocation?o.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return t&&w?S.createElement(Qo.Provider,{value:{location:ur({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:ht.Pop}},w):w}function pf(){let e=bf(),t=sf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:o},n):null,null)}const ff=S.createElement(pf,null);class mf extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(nt.Provider,{value:this.props.routeContext},S.createElement(Yu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gf(e){let{routeContext:t,match:n,children:r}=e,o=S.useContext(ma);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(nt.Provider,{value:t},r)}function yf(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let g=i.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);g>=0||G(!1),i=i.slice(0,Math.min(i.length,g+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<i.length;g++){let f=i[g];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=g),f.route.id){let{loaderData:m,errors:v}=n,k=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||k){c=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((g,f,m)=>{let v,k=!1,w=null,C=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||ff,c&&(u<0&&m===0?(Tf("route-fallback"),k=!0,C=null):u===m&&(k=!0,C=f.route.hydrateFallbackElement||null)));let d=t.concat(i.slice(0,m+1)),h=()=>{let p;return v?p=w:k?p=C:f.route.Component?p=S.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=g,S.createElement(gf,{match:f,routeContext:{outlet:g,matches:d,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?S.createElement(mf,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:h(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):h()},null)}var th=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(th||{}),nh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(nh||{});function vf(e){let t=S.useContext(ma);return t||G(!1),t}function wf(e){let t=S.useContext(lf);return t||G(!1),t}function kf(e){let t=S.useContext(nt);return t||G(!1),t}function rh(e){let t=kf(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function bf(){var e;let t=S.useContext(Yu),n=wf(),r=rh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function xf(){let{router:e}=vf(th.UseNavigateStable),t=rh(nh.UseNavigateStable),n=S.useRef(!1);return Xu(()=>{n.current=!0}),S.useCallback(function(o,s){s===void 0&&(s={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ur({fromRouteId:t},s)))},[e,t])}const Al={};function Tf(e,t,n){Al[e]||(Al[e]=!0)}function Sf(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function gr(e){let{to:t,replace:n,state:r,relative:o}=e;Tn()||G(!1);let{future:s,static:i}=S.useContext(Ct),{matches:a}=S.useContext(nt),{pathname:c}=Sn(),u=Ju(),g=fa(t,pa(a,s.v7_relativeSplatPath),c,o==="path"),f=JSON.stringify(g);return S.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:o}),[u,f,o,n,r]),null}function Rt(e){G(!1)}function If(e){let{basename:t="/",children:n=null,location:r,navigationType:o=ht.Pop,navigator:s,static:i=!1,future:a}=e;Tn()&&G(!1);let c=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:c,navigator:s,static:i,future:ur({v7_relativeSplatPath:!1},a)}),[c,a,s,i]);typeof r=="string"&&(r=xn(r));let{pathname:g="/",search:f="",hash:m="",state:v=null,key:k="default"}=r,w=S.useMemo(()=>{let C=da(g,c);return C==null?null:{location:{pathname:C,search:f,hash:m,state:v,key:k},navigationType:o}},[c,g,f,m,v,k,o]);return w==null?null:S.createElement(Ct.Provider,{value:u},S.createElement(Qo.Provider,{children:n,value:w}))}function Cf(e){let{children:t,location:n}=e;return hf(mi(t),n)}new Promise(()=>{});function mi(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,o)=>{if(!S.isValidElement(r))return;let s=[...t,o];if(r.type===S.Fragment){n.push.apply(n,mi(r.props.children,s));return}r.type!==Rt&&G(!1),!r.props.index||!r.props.children||G(!1);let i={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=mi(r.props.children,s)),n.push(i)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gi.apply(this,arguments)}function zf(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function jf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Nf(e,t){return e.button===0&&(!t||t==="_self")&&!jf(e)}const Af=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Rf="6";try{window.__reactRouterVersion=Rf}catch{}const _f="startTransition",Rl=xh[_f];function Pf(e){let{basename:t,children:n,future:r,window:o}=e,s=S.useRef();s.current==null&&(s.current=Ep({window:o,v5Compat:!0}));let i=s.current,[a,c]=S.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},g=S.useCallback(f=>{u&&Rl?Rl(()=>c(f)):c(f)},[c,u]);return S.useLayoutEffect(()=>i.listen(g),[i,g]),S.useEffect(()=>Sf(r),[r]),S.createElement(If,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:r})}const Ef=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ne=S.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:s,replace:i,state:a,target:c,to:u,preventScrollReset:g,viewTransition:f}=t,m=zf(t,Af),{basename:v}=S.useContext(Ct),k,w=!1;if(typeof u=="string"&&Wf.test(u)&&(k=u,Ef))try{let p=new URL(window.location.href),b=u.startsWith("//")?new URL(p.protocol+u):new URL(u),I=da(b.pathname,v);b.origin===p.origin&&I!=null?u=I+b.search+b.hash:w=!0}catch{}let C=cf(u,{relative:o}),d=Lf(u,{replace:i,state:a,target:c,preventScrollReset:g,relative:o,viewTransition:f});function h(p){r&&r(p),p.defaultPrevented||d(p)}return S.createElement("a",gi({},m,{href:k||C,onClick:w||s?r:h,ref:n,target:c}))});var _l;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_l||(_l={}));var Pl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pl||(Pl={}));function Lf(e,t){let{target:n,replace:r,state:o,preventScrollReset:s,relative:i,viewTransition:a}=t===void 0?{}:t,c=Ju(),u=Sn(),g=eh(e,{relative:i});return S.useCallback(f=>{if(Nf(f,n)){f.preventDefault();let m=r!==void 0?r:To(u)===To(g);c(e,{replace:m,state:o,preventScrollReset:s,relative:i,viewTransition:a})}},[u,c,g,r,o,n,e,s,i,a])}const Kf=`---
track: zk-proofs
chapter: Foundations
chapter_number: 1
lesson_slug: what-is-a-proof
lesson_title: What is a proof?
lesson_number: 1
duration: 14 min
badge: Quiz
---

# Intro
Before we talk about zero-knowledge, we need to talk about ordinary proof. In cryptography, a proof is not "something that feels convincing." It is more like a rule-driven check. Think of it this way: if a cat sits next to the treat cupboard and looks extremely confident, that is not proof it knows the cupboard code. If the cat types the correct code and the cupboard opens, now we have something we can verify.

## Main Content
In everyday life, "proof" is fuzzy. A friend says, "Trust me." A teacher says, "Show your steps." A judge wants evidence. A mathematician wants a chain of exact reasoning. Cryptography cannot afford that fuzziness. A computer needs a very specific test that says "accept" or "reject."

## Proofs are about checkable evidence
The cleanest starting point is this:

definition
label: Definition — Statement and witness
A statement is the claim we want accepted. A witness is the hidden information that makes the claim true. A verifier is the efficient procedure that checks whether the witness really supports the statement.

Here is the important split:

- A statement is public: "I know a valid solution."
- A witness is private: the actual solution.
- The verifier checks whether the witness matches the statement.

If I say, "This Sudoku has a solution," the witness could be the filled grid. If I say, "This circuit has a satisfying assignment," the witness could be the assignment. If I say, "I know the secret key," the witness is the secret key.

code
label: NP-style picture
R(x, w) = 1  means "w is a valid witness for statement x"

L = { x | there exists w such that R(x, w) = 1 }

Verifier V:
  input: statement x, candidate witness w
  output: accept if R(x, w) = 1

This is the first big idea: in cryptography, a proof is meaningful only because there is an agreed check.

## A proof depends on the verifier
This sounds obvious, but it matters a lot. A proof is not some magical object floating in the air. It is proof **for a particular verifier**.

If the verifier changes, what counts as valid proof can change too.

That is why cryptography talks so much about algorithms. The verifier is not a vague person with "good judgment." It is a machine following exact instructions.

Imagine a cat trying to prove it owns the red collar:

- If the verifier only checks "Is there any collar nearby?" the cat can cheat.
- If the verifier checks "Does the collar fit this cat and match the registered tag?" then the proof standard is much stronger.

Same cat. Different verifier. Different meaning of proof.

## Why sending the witness is often a bad idea
At first, you might think the story is done:

1. The prover has the witness.
2. The prover sends the witness.
3. The verifier checks it.

That works in many formal settings. But in real systems, it is often terrible.

Why?

- The witness might be secret.
- The witness might be reusable.
- The witness might reveal much more than the verifier should learn.

If the cat's witness is "the exact hiding place of the emergency tuna stash," then sending the witness solves the proof problem and creates a new disaster.

note
This is where zero-knowledge enters the picture. We want to separate two things that people often confuse: proving that you know something, and revealing the thing itself.

## From object to protocol
Once we stop sending witnesses directly, proof becomes a protocol.

Instead of handing over the answer, the prover may:

- commit to something,
- answer a challenge,
- show consistency,
- and convince the verifier without exposing the whole witness.

So a proof is no longer always a static object. Sometimes it is an interaction.

That shift is the bridge into zero-knowledge. We still want the verifier to become convinced, but we want the witness to stay hidden.

## Proof, argument, and proof of knowledge
These terms are related, but they are not identical.

definition
label: Definition — Proof, argument, proof of knowledge
A proof has soundness even against an all-powerful cheating prover. An argument only needs to stop efficient cheating provers. A proof of knowledge says that a successful prover must in some meaningful sense possess a witness.

That last phrase, "possess a witness," is important. In modern zk systems, we often do not just want "the statement is true." We want "the prover actually knows the secret that makes it true."

## The right mental model
If you keep one idea from this lesson, keep this one:

A proof is a machine-checkable way to convince a verifier for the right reasons.

Not:

- a persuasive essay,
- a feeling,
- a reputation signal,
- or a dramatic cat stare.

It is a precise verification story.

Zero-knowledge does not replace that idea. It adds a harder requirement on top of it.

## Quiz

### Question 1
question: In cryptography, what makes something a proof rather than just a convincing story?
- A human finds it persuasive
- It passes a specific verification rule
- It uses advanced math notation
- It contains a secret witness
answer: 1
explanation: A cryptographic proof is defined by whether a verifier can check it according to a fixed rule.

### Question 2
question: What is a witness?
- The public statement being checked
- The verifier's randomness
- The hidden information that makes the statement true
- The final transcript produced by the protocol
answer: 2
explanation: The witness is the underlying secret or evidence that certifies the statement.

### Question 3
question: Why is sending the witness directly often unacceptable?
- Because witnesses are always too large to send
- Because verifiers are not allowed to read witnesses
- Because the witness may be secret and revealing it can destroy privacy
- Because only interactive systems can be sound
answer: 2
explanation: In many applications, the whole point is to prove knowledge without giving the sensitive information away.

### Question 4
question: What is the main idea behind a proof of knowledge?
- The verifier learns the witness directly
- A successful prover must genuinely encode or possess witness information
- The proof is always non-interactive
- The system has perfect completeness
answer: 1
explanation: A proof of knowledge aims to guarantee that success is tied to actual witness knowledge, not lucky cheating.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge — https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Shafi Goldwasser, Silvio Micali, Charles Rackoff, The Knowledge Complexity of Interactive Proof Systems — https://doi.org/10.1137/0218012
- MIT OpenCourseWare, Advanced Topics in Cryptography: Lecture Notes — https://ocw.mit.edu/courses/6-876j-advanced-topics-in-cryptography-spring-2003/pages/lecture-notes/
`,Mf=`---
track: zk-proofs
chapter: Foundations
chapter_number: 1
lesson_slug: interactive-vs-non-interactive-proofs
lesson_title: Interactive vs non-interactive proofs
lesson_number: 2
duration: 16 min
badge: Quiz
---

# Intro
Some proofs happen like a conversation. Others happen like handing someone a sealed packet they can open later. That is the difference between interactive and non-interactive proofs. The distinction matters because it changes who provides the unpredictability, how cheating is prevented, and what kinds of systems are easy to deploy.

## Main Content
An interactive proof has back-and-forth. The prover sends something, the verifier challenges it, and the prover responds. A non-interactive proof removes the conversation and replaces it with one proof object.

Here is the simplest picture:

- Interactive: "Ask me something, and I will answer."
- Non-interactive: "Here is the whole proof. Check it whenever you want."

## Why interaction helps
Interaction is useful because the verifier can ask an unpredictable question.

Think of a cat trying to prove it really knows which of three boxes has the fish toy hidden inside.

If the cat sees the question in advance, it can prepare a fake performance just for that box.
If the verifier points at a random box after the cat has already committed, cheating becomes much harder.

That is the core reason interaction helps soundness: the prover must react to fresh randomness it could not plan around perfectly.

definition
label: Definition — Interactive proof
An interactive proof is a protocol where the prover and verifier exchange messages, and the verifier's acceptance depends on the full exchange.

In many classic protocols, this looks like:

code
label: Three-move pattern
1. Prover sends a commitment
2. Verifier sends a random challenge
3. Prover sends a response
4. Verifier checks consistency

The key point is that the challenge is not decoration. It is what forces the prover to stay honest.

## Public-coin intuition
Many important protocols are public-coin. That means the verifier's challenge is random, but everyone gets to see it.

This is still useful. The power is not that the challenge stays hidden forever. The power is that it was not known when the prover committed to earlier messages.

It is like asking the cat to step onto one randomly chosen colored tile **after** it has already walked into the room. The cat cannot pre-edit reality once the tile is chosen.

## What non-interactive proofs change
Non-interactive proofs remove live back-and-forth entirely.

Instead of:

- prover sends,
- verifier challenges,
- prover replies,

we get:

- prover publishes one proof,
- verifier checks it later.

definition
label: Definition — Non-interactive proof
A non-interactive proof system gives the verifier a single proof object to check, without requiring live message exchange.

This is much easier to use in practice:

- blockchains want portable proofs,
- archived systems want proofs that can be checked later,
- many verifiers may want to inspect the same proof,
- the prover and verifier may never be online at the same time.

That makes non-interactivity extremely attractive in real systems.

## So where does the challenge go?
If the verifier is no longer sending a challenge live, something else must play that role.

This is where Fiat-Shamir enters.

Instead of waiting for a verifier to send randomness, the prover derives the challenge by hashing the statement and earlier transcript material.

code
label: Fiat-Shamir idea
interactive challenge:
  e <- random verifier challenge

non-interactive challenge:
  e := H(statement, prior_messages)

Now the proof can behave **as if** a verifier had asked a random question, even though no live verifier was there.

note
The proof did not stop depending on unpredictability. It just changed where that unpredictability comes from.

## Why this matters for zk systems
Most modern zk systems that people actually deploy are non-interactive. That is not because interaction is unimportant. It is because non-interactive artifacts are much easier to move around, post on-chain, and verify at scale.

But it helps to remember that many of these systems are built on ideas that were originally interactive.

When you see:

- a transcript hash,
- a challenge point,
- or a sequence of derived random coins,

you should think:

"What interactive role is this replacing?"

That question keeps the whole design from becoming mysterious.

## The practical tradeoff
Interactive proofs are often cleaner to reason about because the verifier's randomness is explicit.
Non-interactive proofs are better for deployment because they are portable.

So the tradeoff is not "old versus new."
It is more like:

- interactive proofs are easier to see as a dialogue,
- non-interactive proofs are easier to ship as a product.

If an interactive protocol is like a live oral exam, a non-interactive proof is like a certified exam packet you can submit and verify later.

Both can be rigorous. They just organize rigor differently.

## Quiz

### Question 1
question: What is the defining feature of an interactive proof?
- It always uses a trusted setup
- It involves message exchange between prover and verifier
- It reveals the witness directly
- It cannot use randomness
answer: 1
explanation: Interactive proofs are defined by the back-and-forth protocol between prover and verifier.

### Question 2
question: Why do verifier challenges help in interactive proofs?
- They make the proof shorter
- They give the prover extra witness information
- They force the prover to answer unpredictable checks
- They automatically make the system zero-knowledge
answer: 2
explanation: Random challenges make it harder for a cheating prover to prepare one fake answer that works everywhere.

### Question 3
question: What does a non-interactive proof replace the live verifier challenge with in Fiat-Shamir style systems?
- A public hash-derived challenge
- A second witness
- A longer verification key
- A deterministic proof with no randomness
answer: 0
explanation: Fiat-Shamir uses hashing of the statement and prior messages to derive the challenge.

### Question 4
question: Why are non-interactive proofs so useful in blockchain systems?
- Because they eliminate soundness assumptions
- Because they can be checked later from one portable proof object
- Because they always require no setup
- Because they reveal the witness only to miners
answer: 1
explanation: Portability is the big win. A single proof can be posted, stored, and checked later by many verifiers.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge — https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Amos Fiat and Adi Shamir, How to Prove Yourself: Practical Solutions to Identification and Signature Problems — https://doi.org/10.1007/3-540-47721-7_12
- MIT OpenCourseWare, Advanced Topics in Cryptography, Lecture 6 — https://ocw.mit.edu/courses/6-5630-advanced-topics-in-cryptography-fall-2023/pages/lecture-6-fiat-shamir-paradigm-and-zero-knowledge-proofs/
`,Of=`---
track: zk-proofs
chapter: Foundations
chapter_number: 1
lesson_slug: completeness-and-soundness
lesson_title: Completeness & Soundness
lesson_number: 3
duration: 16 min
badge: Quiz
---

# Intro
Completeness and soundness are the two rails a proof system must stay on. One rail protects honest provers. The other protects the verifier from lies. If either rail is missing, the whole train goes off the track.

## Main Content
These two properties sound abstract at first, but they are very practical.

- Completeness asks: "When the prover is honest and the statement is true, does the system work?"
- Soundness asks: "When the prover is cheating and the statement is false, does the system still resist?"

You need both.

Think of a cat flap with a smart collar reader:

- If your real cat stands at the flap with the right collar and the flap still refuses to open, that is a completeness problem.
- If a raccoon can walk up wearing a fake collar and get in, that is a soundness problem.

## Completeness: honest proofs should work
Completeness protects the honest case.

definition
label: Definition — Completeness
A proof system is complete if true statements, together with valid witnesses, cause the honest verifier to accept.

This seems almost too obvious to mention, but in real systems it matters a lot.

Why?

- circuits can be encoded incorrectly,
- constraints can be missing,
- randomness can be used badly,
- implementations can reject good proofs by mistake.

So completeness is really saying: "If the claim is right and the prover behaves correctly, the system should not fail for silly reasons."

## Soundness: false claims should fail
Soundness protects the dishonest case.

definition
label: Definition — Soundness
A proof system is sound if no cheating prover can make the verifier accept a false statement except with small probability.

This is the anti-forgery property.

If a proof system lacked soundness, then a prover could "prove" nonsense. At that point, the system is not doing cryptography. It is just handing out gold stars.

## The soundness error
In many proof systems, cheating is not impossible in an absolute sense. Instead, it is made overwhelmingly unlikely.

That cheating probability is called the soundness error.

code
label: Formal picture
Completeness:
  if x is true and w is a valid witness,
  the honest verifier accepts

Soundness:
  if x is false,
  any cheating prover succeeds with probability at most epsilon

If epsilon is tiny, the system is trustworthy.
If epsilon is large, the system is weak.

The idea is simple: the verifier does not need magical certainty. It needs cheating to be so unlikely that using the system is rational.

## Why the two properties are complementary
It is tempting to treat completeness and soundness like technical jargon you attach to a protocol checklist. But they are really asking opposite questions.

Completeness says:
"Do we accidentally reject good proofs?"

Soundness says:
"Do we accidentally accept bad ones?"

A system can fail either way:

- too strict and honest users suffer,
- too loose and attackers win.

The cat flap analogy helps here too:

- If the flap never opens, it is secure but useless.
- If it opens for every animal in the neighborhood, it is convenient but broken.

The right system does both jobs at once.

## Different strengths of soundness
Not all soundness guarantees are equally strong.

There are three useful levels:

- Perfect soundness: false statements never pass.
- Statistical soundness: false statements pass only with tiny probability, even against unbounded attackers.
- Computational soundness: false statements pass only with tiny probability against efficient attackers.

definition
label: Definition — Computational soundness
A proof system has computational soundness if efficient cheating provers still cannot convince the verifier of false statements, assuming the underlying hardness assumptions hold.

This distinction matters later:

- many pairing-based SNARKs are computationally sound,
- many STARK-style systems aim for stronger statistical guarantees in core parts of the protocol.

## Why this matters before zero-knowledge
People often rush to the privacy part of zero-knowledge because it sounds exciting. But privacy only matters after the proof system has something real to say.

A protocol that leaks nothing because it proves nothing is not impressive.

First we need:

- true statements can be proved,
- false statements cannot be faked.

Then we ask:

"Can this happen without revealing the witness?"

That order matters. Completeness and soundness give the proof system a backbone. Zero-knowledge adds privacy on top of that backbone.

## The durable takeaway
When you meet a new proof system, ask these questions in order:

1. What statement is being checked?
2. Why do honest provers succeed?
3. Why do cheating provers fail?
4. How small is the cheating probability?

If you cannot answer those, you do not really understand what the system proves.

## Quiz

### Question 1
question: What does completeness guarantee?
- Honest provers with true statements are accepted
- False statements are always rejected with probability 1
- The verifier learns nothing
- The proof is short
answer: 0
explanation: Completeness is about the honest case. True statements with valid witnesses should verify.

### Question 2
question: What does soundness protect against?
- Honest users being accepted too often
- Cheating provers convincing the verifier of false statements
- Proofs becoming too large
- Hash collisions in every system
answer: 1
explanation: Soundness is the anti-forgery guarantee.

### Question 3
question: What is the soundness error?
- The chance an honest prover forgets the witness
- The maximum probability that a cheating prover can make a false statement verify
- The verifier's runtime overhead
- The number of public inputs in the circuit
answer: 1
explanation: Soundness error is the protocol's quantitative cheating bound.

### Question 4
question: Why do completeness and soundness come before zero-knowledge?
- Because zero-knowledge automatically implies them
- Because privacy only matters once the system already proves something meaningful
- Because zero-knowledge is only for non-interactive protocols
- Because completeness is the same as privacy
answer: 1
explanation: A protocol that hides everything but proves nothing is not useful.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge — https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Shafi Goldwasser, Silvio Micali, Charles Rackoff, The Knowledge Complexity of Interactive Proof Systems — https://doi.org/10.1137/0218012
- MIT OpenCourseWare, Advanced Topics in Cryptography: Lecture Notes — https://ocw.mit.edu/courses/6-876j-advanced-topics-in-cryptography-spring-2003/pages/lecture-notes/
`,Qf=`---
track: zk-proofs
chapter: Foundations
chapter_number: 1
lesson_slug: the-zero-knowledge-property
lesson_title: The zero-knowledge property
lesson_number: 4
duration: 17 min
badge: Quiz
---

# Intro
Zero-knowledge is the magic-sounding part of zero-knowledge proofs, but the idea is more disciplined than magical. It does **not** mean the verifier sees nothing. It means the verifier should learn nothing beyond the fact that the statement is true.

## Main Content
That wording matters. The verifier is still allowed to learn one important thing:

"Yes, this statement is valid."

What zero-knowledge tries to prevent is everything extra beyond that.

## A simple analogy
Imagine a cat proving it knows which drawer contains the hidden tuna packet.

Bad version:
- the cat opens the drawer and shows the tuna.

Good zero-knowledge version:
- the cat somehow convinces you it can always go to the correct drawer,
- but never reveals which drawer it is.

That is the intuition:

- convince,
- without exposing the secret reason why the claim is true.

## What zero-knowledge is really claiming
The formal definition uses a simulator.

definition
label: Definition — Zero-knowledge intuition
A proof is zero-knowledge if the verifier's view can be generated without the witness, using only the public statement.

This is a very strong idea.

Why? Because if the verifier's transcript can be faked without the witness, then seeing the real transcript should not teach the verifier anything witness-specific.

The verifier still learns that the statement is valid. But it does not get the private evidence itself.

## Why the simulator matters
The simulator is the heart of the definition.

Instead of vaguely saying, "The transcript looks harmless," we say something more concrete:

"There exists an efficient algorithm that can generate a transcript that looks like the real one, even without knowing the secret."

That is much sharper than a hand-wavy privacy claim.

It is the difference between:

- "This cat seems discreet,"

and

- "I can generate an equally believable cat demonstration without ever knowing where the tuna is."

If the second statement is true, then the demonstration itself is not leaking the tuna location.

## Honest-verifier versus full zero-knowledge
There is an important distinction here.

Sometimes we only prove privacy against an honest verifier, meaning a verifier that follows the protocol exactly.
That is called honest-verifier zero-knowledge, or HVZK.

Other times we want privacy even if the verifier behaves strategically and tries to learn extra information.
That stronger target is full zero-knowledge.

definition
label: Definition — HVZK vs full ZK
HVZK protects against verifiers that follow the protocol honestly. Full zero-knowledge protects against any efficient verifier strategy, even a curious or malicious one.

HVZK is easier to prove. Full ZK is stronger and often harder.

## What zero-knowledge does not mean
It is useful to clear away a few myths.

Zero-knowledge does **not** mean:

- the verifier learns absolutely nothing,
- the protocol has no transcript,
- the witness does not exist,
- the protocol is automatically secure in every other sense.

The verifier still learns that the statement is true.
The system still needs completeness and soundness.
Privacy is an additional property, not a replacement for the rest of the proof system.

note
Zero-knowledge is about controlling what the verifier learns from the proof transcript. It is not a general promise that the entire application leaks nothing through every side channel or surrounding system.

## Why this matters in real applications
This is where zk stops sounding like theory and starts sounding useful.

You might want to prove:

- you know a valid signature,
- your balance satisfies a rule,
- your execution trace followed a program,
- your private data belongs to a set,

without revealing:

- the secret key,
- the balance breakdown,
- the full trace,
- or the exact private value.

That is the whole appeal. Zero-knowledge lets you separate truth from exposure.

## The durable mental model
Here is the version worth remembering:

Zero-knowledge means the verifier gets confidence, not access.

The verifier gets the right conclusion:
"The claim checks out."

But it should not get the hidden reason that made the claim check out.

If a proof gives the verifier both confidence **and** the witness, that may be a proof, but it is not zero-knowledge.

## Quiz

### Question 1
question: What is the verifier still allowed to learn in a zero-knowledge proof?
- The full witness
- Nothing at all
- That the statement is valid
- The prover's internal randomness
answer: 2
explanation: Zero-knowledge does not hide validity itself. It hides extra witness-specific information.

### Question 2
question: Why is the simulator central to the definition of zero-knowledge?
- It speeds up proof generation
- It shows the verifier's view can be generated without the witness
- It replaces the verifier during deployment
- It guarantees perfect soundness
answer: 1
explanation: If the verifier's transcript can be simulated without the witness, the real transcript is not teaching the verifier extra witness information.

### Question 3
question: What is the difference between HVZK and full zero-knowledge?
- HVZK is non-interactive and full ZK is interactive
- HVZK only protects against an honest verifier, while full ZK protects against arbitrary efficient verifier strategies
- HVZK has soundness and full ZK has completeness
- HVZK reveals public inputs and full ZK hides them
answer: 1
explanation: HVZK is the weaker privacy target because it assumes the verifier follows the protocol honestly.

### Question 4
question: Which statement best captures zero-knowledge?
- The verifier gets confidence without learning the secret witness
- The verifier learns nothing, including whether the statement is true
- The witness is deleted before proving starts
- The protocol does not need soundness anymore
answer: 0
explanation: Zero-knowledge keeps the correctness signal while hiding the private evidence behind it.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge — https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Shafi Goldwasser, Silvio Micali, Charles Rackoff, The Knowledge Complexity of Interactive Proof Systems — https://doi.org/10.1137/0218012
- MIT OpenCourseWare, Advanced Topics in Cryptography: Lecture Notes — https://ocw.mit.edu/courses/6-876j-advanced-topics-in-cryptography-spring-2003/pages/lecture-notes/
`,Bf=`---
track: zk-proofs
chapter: Foundations
chapter_number: 1
lesson_slug: the-simulator-argument
lesson_title: The simulator argument
lesson_number: 5
duration: 16 min
badge: Quiz
---

# Intro
The simulator argument is the engine inside the formal definition of zero-knowledge. It sounds intimidating, but the big idea is surprisingly intuitive: if we can fake what the verifier sees **without** the secret witness, then the real proof transcript is not leaking that witness.

## Main Content
The simulator is not the prover. It is not the verifier. It is a thought-experiment algorithm used in the security proof.

Its job is simple to say and hard to build:

"Produce something that looks like a real transcript, even though you do not know the secret."

If that can be done, then the transcript itself cannot be carrying much secret information.

## The movie set analogy
Imagine filming a cat talent show.

In the real version, the cat truly knows which cupboard contains the salmon treat.
In the simulated version, the director arranges props, camera angle, and timing so that the audience sees a performance that looks the same, even though the cat never knew the cupboard at all.

If the audience cannot tell the difference, then the performance itself is not giving away the secret cupboard.

That is the simulator argument in spirit.

## What the simulator is trying to match
The target is the verifier's view.

That can include:

- commitments,
- challenges,
- responses,
- randomness,
- and the final accept/reject behavior.

definition
label: Definition — Simulator
A simulator is an efficient algorithm that generates a transcript distributed like a real proof transcript using only the public statement, not the witness.

Notice what this definition does **not** say:

- it does not say the simulator proves the statement is true,
- it does not say the simulator finds the witness,
- it does not say the simulator replaces the real prover in deployment.

It is only there to support the privacy proof.

## Why this proves privacy
Suppose the verifier's view in a real execution and the simulator's output are indistinguishable.

Then from the verifier's perspective:

- seeing the real transcript
- and seeing the simulated transcript

amount to basically the same information.

But the simulated transcript was created without the witness.
So the real transcript cannot be teaching the verifier witness-specific secrets.

That is the logical punchline.

## How simulators often work
In many sigma-style protocols, the simulator works backwards.

Instead of:

1. commit,
2. receive challenge,
3. answer,

the simulator may:

1. guess or choose the challenge,
2. choose a response that will fit,
3. manufacture a first message consistent with both.

If the protocol model allows rewinding, the simulator can retry until the transcript lines up correctly.

code
label: Simulator intuition
simulator:
  choose challenge e
  choose response z
  construct commitment a so that (a, e, z) verifies

goal:
  make (a, e, z) look like a real transcript

This is the weird but beautiful part of zero-knowledge proofs: the security proof often runs the protocol in reverse.

note
The simulator does not need the witness because it is not trying to act like a real prover internally. It is only trying to reproduce what the verifier sees externally.

## What the simulator does not prove
This is where people sometimes get confused.

The simulator argument does **not** prove:

- that the statement is true,
- that the prover is honest,
- or that the witness can be recovered from the transcript.

Those are different questions.

The simulator only addresses privacy.

Completeness and soundness are still doing their own jobs:

- completeness says honest proofs succeed,
- soundness says false claims fail,
- simulation says the transcript leaks no extra secret.

Together, those three ideas are what make zero-knowledge protocols compelling.

## The cat version
Suppose a cat claims it knows which hallway tile hides the laser pointer battery.

If the cat can put on a show that convinces you, and if a simulator can generate an equally convincing fake show without ever knowing the tile, then the show itself is not leaking the tile location.

You still may believe:
"Yes, this cat knows what it is doing."

But you do not learn the private detail directly from the performance.

That is the point.

## Durable takeaway
When people say "the protocol is zero-knowledge because there exists a simulator," the idea is:

"Whatever the verifier sees could have been produced without the witness, so the verifier is not learning the witness from what it sees."

That is the real heart of the concept.

## Quiz

### Question 1
question: What is the simulator mainly trying to reproduce?
- The prover's private witness
- The verifier's view of the protocol
- The full source code of the proof system
- The trusted setup ceremony
answer: 1
explanation: The simulator's target is the verifier's view, meaning the transcript and related observable information.

### Question 2
question: Why does a successful simulator support a zero-knowledge claim?
- Because it proves the witness is public
- Because it shows the transcript can be generated without the witness
- Because it removes the need for completeness
- Because it makes every protocol non-interactive
answer: 1
explanation: If the transcript can be simulated without the witness, the real transcript cannot be leaking witness-specific information.

### Question 3
question: What does the simulator argument *not* prove by itself?
- That the transcript is part of the verifier's view
- That the protocol leaks no extra witness information
- That false statements cannot be proven
- That a simulated transcript should resemble a real one
answer: 2
explanation: Preventing false statements from verifying is the job of soundness, not the simulator argument.

### Question 4
question: In many sigma-style protocols, how does a simulator often think?
- It first extracts the witness and then runs the prover honestly
- It works backwards by choosing later transcript pieces and making earlier ones fit
- It removes the verifier's challenge from the protocol
- It turns the protocol into a trusted setup
answer: 1
explanation: Many simulator constructions are easiest to understand as building a valid-looking transcript from the back forward.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge — https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Shafi Goldwasser, Silvio Micali, Charles Rackoff, The Knowledge Complexity of Interactive Proof Systems — https://doi.org/10.1137/0218012
- MIT OpenCourseWare, Advanced Topics in Cryptography: Lecture Notes — https://ocw.mit.edu/courses/6-876j-advanced-topics-in-cryptography-spring-2003/pages/lecture-notes/
`,Ff=`---
track: zk-proofs
chapter: Arithmetic Circuits
chapter_number: 2
lesson_slug: r1cs-constraints
lesson_title: R1CS constraints
lesson_number: 1
duration: 22 min
badge: Quiz
---

# Intro
R1CS is the first place where many learners feel zk systems become "too mathematical." The trick is to stop thinking of it as scary notation and start thinking of it as a very strict checklist. If a computation is a recipe, then R1CS is the version where every tiny step is written in a standard form so a proof system can inspect it. In this lesson, we will turn that abstract idea into something you can actually picture, including a few cat-powered examples.

## Main Content
## The big idea
Suppose you tell me, "I know the secret numbers that make this program run correctly." A proof system cannot work with vague claims like that. It needs the computation rewritten as a collection of small local rules.

R1CS stands for Rank-1 Constraint System. That name sounds formal, but the practical idea is simple:

- put all the useful values of the computation into one long list
- write a lot of tiny equations about that list
- accept only if every equation is true

Think of a cat cafe that tracks snack orders. The manager does not verify the entire day in one giant step. Instead, they check small relations:

- did table 3 order 2 tuna rolls and 1 milk bowl?
- is the total for that table equal to the listed subtotal?
- do all subtotals add up to the daily total?

Each tiny check is local. If all local checks pass, the global story probably makes sense. R1CS does the same thing for computation.

definition
label: Definition - R1CS constraint
An R1CS constraint says that one linear combination of variables, multiplied by another linear combination of variables, must equal a third linear combination of variables.

That sounds dense, so let us unpack it slowly.

## One long list of values
Before writing constraints, we gather the important values into one vector, often called \`z\`. This list usually includes:

- a leading constant \`1\`
- public inputs
- private inputs
- intermediate values produced along the way

Why intermediate values? Because the proof system does not just care about the final answer. It wants evidence that the computation was done step by step correctly.

Imagine a cat climbing tower competition. If someone claims, "Miso reached the top in 4 jumps," we do not only care about the final platform. We also care about the intermediate ledges. Did Miso actually go from ledge 1 to ledge 2 to ledge 3 to ledge 4? R1CS keeps track of those hidden in-between values.

code
label: Assignment vector
z = (1, public_inputs, private_inputs, intermediate_values)

The leading \`1\` may look strange at first. It is there so constants can be handled cleanly inside equations. It is basically a built-in "constant slot."

## The standard shape
Every constraint in R1CS has the same shape:

code
label: Standard R1CS shape
<A_i, z> * <B_i, z> = <C_i, z>

Here is the human version of that sentence:

- pick some values from the big list and add them up with coefficients
- do that again for a second expression
- multiply those two expressions
- require the result to match a third expression

The proof system likes this shape because it is regular. It does not want a thousand different equation styles. It wants one template repeated many times.

This is like a school worksheet where every line has the same pattern:

left box * middle box = right box

Different numbers go in, but the structure stays fixed.

## Why addition still fits
At first glance, R1CS looks like it only understands multiplication, because every constraint has a product in it. But addition still fits very naturally.

Suppose we want to say:

code
label: Addition relation
d = a + b

R1CS rewrites that as:

code
label: Addition in R1CS
(a + b) * 1 = d

That is why the constant \`1\` in the vector is so helpful. It lets us say, "this side is really just an addition, but we are writing it in the standard multiplication-shaped template."

Now imagine a cat treat rule:

"Treats after lunch = fish treats + chicken treats"

R1CS does not mind that this is addition. It just writes:

"(fish treats + chicken treats) times 1 = total treats"

Same fact, standard format.

## A worked example
Let us encode a tiny computation:

code
label: Tiny computation
u = x * y
v = u + 3
out = v * z_in

We can place the values into a vector like this:

code
label: Example vector
z = (1, x, y, z_in, u, v, out)

Now we write one constraint per step.

First:

code
label: Constraint 1
x * y = u

Second:

code
label: Constraint 2
(u + 3) * 1 = v

Third:

code
label: Constraint 3
v * z_in = out

That is the whole spirit of R1CS. A larger program just creates a much larger list and many more local equations.

## What the witness really is
In zk systems, learners often hear "the witness is the secret input." That is only partly true.

In an R1CS view, the witness usually includes every private value needed to make the system satisfy all constraints. That means:

- secret inputs
- intermediate values
- helper values introduced during compilation

If our cat cafe app privately computes a discount code, the witness may include not just the secret coupon but also the hidden subtotal and discount amount that make the equations balance.

definition
label: Definition - Witness in R1CS
The witness is the collection of nonpublic values that, together with the public inputs, make every constraint in the system hold.

This matters because the verifier checks existence of a full satisfying assignment, not just a single secret number.

## Why R1CS became so popular
R1CS became a standard format because it is a sweet spot:

- expressive enough to encode lots of computations
- structured enough for algebraic proof systems
- regular enough for compilers

It is not the only way to describe computation, and newer systems often use different formats. But historically, R1CS was one of the cleanest bridges from "program logic" to "algebra a SNARK can prove."

Think of it as converting messy handwritten notes into a spreadsheet. The spreadsheet may feel less natural to a human, but it is much easier for automated tools to process.

note
R1CS is not the proof itself. It is the cleaned-up algebraic description of the computation that later proof systems will operate on.

## The mental model to keep
If the notation starts to feel heavy, come back to this picture:

- the computation becomes a giant table of values
- each row of that table must obey a local rule
- a proof later shows that all rows obey all rules without revealing hidden values

Or, in cat terms:

- list every snack, jump, and score for Captain Whiskers
- check each step with a tiny equation
- prove the full performance was valid without exposing the private strategy notes

That is R1CS.

## Quiz

### Question 1
question: What is the main purpose of R1CS?
- To encrypt the witness
- To rewrite computation into many small algebraic checks
- To remove all intermediate values from a program
- To make every proof interactive
answer: 1
explanation: R1CS turns computation into a structured list of local constraints that a proof system can reason about.

### Question 2
question: Why is there usually a leading \`1\` in the assignment vector?
- To mark the end of the witness
- To make constant terms easy to include in linear expressions
- To reveal the secret input to the verifier
- To count the number of constraints
answer: 1
explanation: The constant slot lets equations include fixed numbers cleanly, such as \`+ 3\`.

### Question 3
question: How can an addition like \`d = a + b\` fit into R1CS?
- It cannot; R1CS only handles multiplication
- By rewriting it as \`(a + b) * 1 = d\`
- By hashing \`a\` and \`b\`
- By turning \`d\` into a verifier challenge
answer: 1
explanation: R1CS uses the constant \`1\` to express addition inside its standard multiplicative form.

### Question 4
question: Which values usually belong to the witness?
- Only the final output
- Only public inputs
- Secret and intermediate values needed to satisfy the constraints
- Only the coefficient vectors
answer: 2
explanation: The witness is the full nonpublic assignment that makes the constraint system hold.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Bryan Parno et al., Pinocchio: Nearly Practical Verifiable Computation - https://eprint.iacr.org/2013/279.pdf
- Rosario Gennaro et al., Quadratic Span Programs and Succinct NIZKs without PCPs - https://eprint.iacr.org/2012/215.pdf
`,qf=`---
track: zk-proofs
chapter: Arithmetic Circuits
chapter_number: 2
lesson_slug: witness-generation
lesson_title: Witness generation
lesson_number: 2
duration: 18 min
badge: Quiz
---

# Intro
Once a computation has been turned into constraints, the prover still needs actual values that satisfy them. That collection of values is called the witness. In theory, that sounds straightforward. In practice, witness generation is where a circuit becomes real work: the system must fill in every hidden detail, not just the final answer. This lesson explains witness generation in plain language and shows why it matters so much in real zk systems.

## Main Content
## The witness is the filled-in answer sheet
Imagine a teacher hands out a math worksheet where every line has to be correct:

- line 1 depends on line 2
- line 2 depends on line 3
- the final grade depends on all of them

The constraint system is the blank worksheet. The witness is the fully filled-in sheet.

That means witness generation is the process of computing all the values needed to satisfy the constraints.

If the statement is:

"I know a secret input that makes this computation output 42,"

then the witness is not just the secret input. It is usually:

- the secret input
- every intermediate value the circuit needs
- helper values introduced during compilation

If Professor Paws claims his cat-door algorithm only opens for the right whisker pattern, the witness is not merely the hidden whisker scan. It may also include intermediate comparisons, flags, and arithmetic checks that prove the system evaluated correctly.

definition
label: Definition - Witness generation
Witness generation is the process of computing all private and intermediate values needed to produce a satisfying assignment for the circuit or constraint system.

## Why the final output is not enough
Many beginners think, "If I know the input and the output, why do I need anything else?" Because proof systems care about the path, not just the destination.

Suppose a cat treats app says:

- input: 5 fish treats and 2 chicken treats
- output: 17 happiness points

That output alone does not prove the app followed the intended formula. Maybe it used the right rule. Maybe it cheated and hardcoded \`17\`.

Witness generation forces the prover to show all the hidden arithmetic that connects input to output. The verifier does not learn those private values directly, but the proof system still relies on them internally.

## A tiny example
Take this computation:

code
label: Example program
u = x * y
v = u + 7
out = v * 2

If \`x = 3\` and \`y = 4\`, then witness generation computes:

code
label: Witness values
u = 12
v = 19
out = 38

A prover might start with the secret input values, but that is not enough. To satisfy the full constraint system, it also needs \`u\` and \`v\`. Those intermediate values are part of the witness.

This is like showing your work in school. A final answer can be lucky. A full chain of correct intermediate steps is much more convincing.

## Where witness generation happens
In most zk systems, witness generation happens before proof generation. The usual flow looks like this:

code
label: High-level flow
1. Take the program and the inputs
2. Compute all intermediate values
3. Assemble the full witness
4. Use that witness to build the proof

So witness generation is not the proof itself, but it is a critical step that feeds the prover.

If the witness is wrong, incomplete, or inconsistent, the prover cannot create a valid proof. In that sense, witness generation is where correctness gets grounded in actual data.

## Public inputs versus private witness
A clean way to think about it is:

- public inputs belong to the statement
- witness values are the hidden ingredients that make the statement true

For example, the public statement might be:

"This cat shelter budget balances to 1000 coins."

The witness might include:

- private donation amounts
- hidden discount calculations
- internal category subtotals

The verifier only needs the public claim. The prover needs the whole hidden bookkeeping sheet.

## Why witness generation can be expensive
In toy examples, witness generation feels easy. In real systems, it can be one of the most expensive parts of the pipeline.

Why?

- large circuits have many intermediate values
- bit decompositions create lots of helper variables
- range checks and lookup logic add extra hidden structure
- complex applications may need to compute hashes, signature checks, or virtual machine steps

If a proof represents thousands or millions of tiny operations, witness generation has to fill in the entire hidden trace of that computation.

Think of grooming a very fluffy cat before a photoshoot. The photo is the final proof. But before that, someone has to do all the brushing, detangling, and cleanup. Most of the work happened before the public-facing result.

note
In real zk engineering, witness generation often dominates runtime and memory. A proof system can look elegant on paper while still being hard to use in practice because witness construction is heavy.

## Witness bugs are logic bugs
One useful engineering mindset is this: witness generation is not bookkeeping around the circuit. It is part of the logic of the system.

If the witness generator:

- computes an intermediate value incorrectly
- skips a consistency rule
- encodes data in the wrong order
- mishandles corner cases

then the whole proving pipeline becomes unreliable.

This is why good zk tooling treats witness generation with the same seriousness as the circuit itself. The circuit says what must be true. The witness generator actually produces the values that claim it is true.

## The prover is not guessing
It can be tempting to imagine the prover "searching" for a witness. In some theoretical settings, witness finding is indeed the abstract challenge. But in most engineering settings, the prover already has the private input and simply computes the witness by running a deterministic procedure.

For example:

- a wallet knows the private transaction data
- a rollup prover knows the full execution trace
- a credential prover knows the hidden attributes

The real job is to transform that knowledge into the exact algebraic form expected by the circuit.

In cat terms: if Luna knows where she buried the toy mouse, she is not solving a mystery. She is just not telling you directly. Witness generation is the process of translating her private knowledge into a form the proof system can use.

## The mental model to keep
If constraint generation writes the exam, witness generation fills in the answers.

If R1CS is a spreadsheet template, witness generation fills every cell.

If the circuit is a cat obstacle course blueprint, witness generation records exactly which paw landed on which platform at each step.

That is why witness generation matters: without it, a proof system has structure but no concrete hidden assignment to prove about.

## Quiz

### Question 1
question: What is witness generation?
- The process of sending the proof to the verifier
- The process of computing all hidden values needed to satisfy the circuit
- The process of choosing cryptographic assumptions
- The process of removing intermediate values from computation
answer: 1
explanation: Witness generation computes the private and intermediate values that make the constraint system hold.

### Question 2
question: Why is the final output alone usually not enough?
- Because the verifier always wants to see the secret input
- Because the proof system needs the intermediate values that justify the computation
- Because outputs cannot be public
- Because proofs only work on addition
answer: 1
explanation: The system must show that each internal step could satisfy the constraints, not just that the last value looks plausible.

### Question 3
question: Which statement best describes the relationship between public inputs and the witness?
- They are always the same thing
- Public inputs are hidden and the witness is public
- Public inputs define the statement, while the witness contains hidden values that make it true
- The witness only contains verifier randomness
answer: 2
explanation: The statement is public, but the satisfying hidden assignment is the witness.

### Question 4
question: Why can witness generation be expensive in practice?
- Because it requires infinite precision arithmetic
- Because circuits may create many intermediate and helper values
- Because witnesses are always larger than proofs by a constant factor of exactly two
- Because the verifier computes the witness during checking
answer: 1
explanation: Real circuits often need many hidden variables for hashes, range checks, decompositions, and other internal logic.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Ariel Gabizon, Zachary J. Williamson, Oana Ciobotaru, PLONK - https://eprint.iacr.org/2019/953.pdf
- Vitalik Buterin, Quadratic Arithmetic Programs: from Zero to Hero - https://vitalik.eth.limo/general/2016/12/10/qap.html
`,Df=`---
track: zk-proofs
chapter: Arithmetic Circuits
chapter_number: 2
lesson_slug: qap-construction
lesson_title: QAP construction
lesson_number: 3
duration: 24 min
badge: Quiz
---

# Intro
QAP construction is where many classic SNARK explanations suddenly jump from "lists of constraints" into "polynomials everywhere." That jump can feel brutal if nobody explains why it happens. This lesson focuses on intuition first. A QAP is basically a way of compressing many separate R1CS checks into one algebraic object, so the proof system can reason about the whole computation more elegantly.

## Main Content
## Why move from constraints to polynomials
R1CS gives us lots of local checks. That is already useful. But a SNARK wants a more algebra-friendly way to talk about all those checks at once.

This is where QAP, or Quadratic Arithmetic Program, enters the story.

Instead of saying:

- constraint 1 is satisfied
- constraint 2 is satisfied
- constraint 3 is satisfied
- and so on

we build polynomials whose behavior at chosen points captures those constraints. Then one divisibility condition can express "all constraints are satisfied."

That is the magic move.

Think of a cat show scorecard. Instead of carrying around 200 separate judge slips, imagine turning all the results into one carefully structured report. If that report has the right form, it proves all 200 small checks lined up correctly.

definition
label: Definition - QAP
A Quadratic Arithmetic Program is a polynomial encoding of an R1CS instance in which constraint satisfaction is turned into a polynomial identity or divisibility condition.

## The key trick: encode rows as points
Suppose the R1CS system has many constraints, one per row. A QAP chooses a distinct field point for each row. Then it builds polynomials that "remember" the coefficients attached to each variable at each row.

Very loosely:

- one family of polynomials represents the left linear forms
- one family represents the right linear forms
- one family represents the output linear forms

At each special row point, the polynomial values reproduce the original R1CS coefficients for that row.

This is like assigning every checkpoint in a cat agility contest a number line position:

- jump station at point 1
- tunnel station at point 2
- bell-touch station at point 3

Then you build smooth curves that pass through the score values required at those stations.

## From coefficient tables to polynomials
In R1CS, every variable has coefficients in many constraints. You can think of that as a table:

- variable 1 has coefficient here, here, and here
- variable 2 has coefficient there, there, and there

QAP turns each column of that table into a polynomial by interpolation.

If you have seen graphing before, interpolation is just the process of finding a polynomial that matches chosen values at chosen points.

So rather than storing a messy table of coefficients, we build polynomials \`A_j(X)\`, \`B_j(X)\`, and \`C_j(X)\` for each variable \`j\`.

Then, once a witness gives values \`z_j\`, we combine them:

code
label: Combined polynomials
A(X) = sum_j z_j * A_j(X)
B(X) = sum_j z_j * B_j(X)
C(X) = sum_j z_j * C_j(X)

These new polynomials encode what the left, right, and output sides of each constraint look like across all rows.

## What satisfaction means in QAP form
For the witness to satisfy every R1CS constraint, we want:

code
label: Constraint satisfaction idea
A(r_i) * B(r_i) = C(r_i)

for every constraint point \`r_i\`.

That means the polynomial:

code
label: Difference polynomial
P(X) = A(X) * B(X) - C(X)

must vanish at every row point.

And when a polynomial vanishes at a set of chosen points, that means it is divisible by the polynomial whose roots are exactly those points.

That root polynomial is often called the target polynomial:

code
label: Target polynomial
T(X) = product_i (X - r_i)

So the big condition becomes:

code
label: QAP divisibility condition
P(X) = H(X) * T(X)

for some polynomial \`H(X)\`.

This single statement replaces a long list of row-by-row constraint checks.

## Why divisibility captures "all rows pass"
This is the heart of QAP intuition.

If a polynomial equals zero at every constraint point, then all local checks hold. Divisibility by \`T(X)\` is just the clean algebraic way to say that.

A friendly analogy:

Imagine every failed checkpoint in a cat obstacle course would leave a scratch mark on the floor at that station. If, after the full run, there are no scratch marks at any checkpoint, then the performance passed every local test. In QAP language, "no scratch marks at any checkpoint" becomes "the difference polynomial vanishes at all selected points."

## What the quotient polynomial does
The polynomial \`H(X)\` is the quotient when dividing \`P(X)\` by \`T(X)\`.

You do not need to think of it as mystical. It is just evidence that \`P(X)\` truly contains \`T(X)\` as a factor.

If \`P(X)\` is not divisible by \`T(X)\`, then some constraint point failed. If it is divisible, then the witness aligns with every encoded constraint point.

In simpler words:

- \`T(X)\` defines where the rules live
- \`P(X)\` measures whether the witness breaks any rules
- \`H(X)\` exists cleanly only when the full set of rules is satisfied

## Why this helps SNARKs
SNARKs love QAPs because polynomial relationships can be checked compactly using cryptographic commitments and pairing-based machinery.

Instead of verifying a long list of circuit equations directly, the verifier can check a much smaller set of algebraic relations involving committed polynomial evaluations.

That does not remove the prover's work. The prover still has to build the witness and construct the relevant objects. But it gives the proof system a much cleaner interface.

Think of it like compressing a thick folder of paperwork into a stamped certificate that says, "all required rows were checked and balanced." The certificate is short because the heavy lifting happened earlier.

note
QAPs are historically central to pairing-based SNARKs such as Groth16. Many modern systems use different arithmetizations, but QAP remains one of the clearest bridges from R1CS to succinct proofs.

## The mental model to keep
Do not memorize QAP as a wall of symbols. Keep this picture instead:

- R1CS gives you many rows of local checks
- QAP assigns each row to a field point
- interpolation turns row tables into polynomials
- one divisibility statement says all rows passed together

Or, in cat language:

- each checkpoint in the course has a rule
- each rule gets pinned to a location
- a single smooth report captures all checkpoints
- if the report has the right factor, the whole run was valid

That is the real point of QAP construction.

## Quiz

### Question 1
question: Why do classic SNARK constructions move from R1CS to QAP?
- To remove the need for witnesses
- To express many local constraint checks using polynomial relations
- To make proofs interactive again
- To replace arithmetic with hashing only
answer: 1
explanation: QAP encodes many row-by-row checks into polynomial identities that SNARK machinery can handle efficiently.

### Question 2
question: What does the target polynomial \`T(X)\` represent?
- The verifier's public key
- The final proof size
- The polynomial whose roots are the chosen constraint points
- The witness itself
answer: 2
explanation: \`T(X)\` vanishes exactly at the points that correspond to the original constraints.

### Question 3
question: What does it mean if \`P(X) = A(X) * B(X) - C(X)\` is divisible by \`T(X)\`?
- The witness satisfies all encoded constraints
- The proof is zero-knowledge
- The verifier learns the secret input
- The circuit has no multiplication gates
answer: 0
explanation: Divisibility means the difference polynomial vanishes at every constraint point, so every encoded check passes.

### Question 4
question: What role does interpolation play in QAP construction?
- It hides the witness from the prover
- It turns coefficient tables across constraint rows into polynomials
- It removes the need for field arithmetic
- It turns every proof into a STARK
answer: 1
explanation: Interpolation is how row-based coefficient data becomes the polynomials used in the QAP.

## Sources
- Vitalik Buterin, Quadratic Arithmetic Programs: from Zero to Hero - https://vitalik.eth.limo/general/2016/12/10/qap.html
- Bryan Parno et al., Pinocchio: Nearly Practical Verifiable Computation - https://eprint.iacr.org/2013/279.pdf
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
`,Vf=`---
track: zk-proofs
chapter: Arithmetic Circuits
chapter_number: 2
lesson_slug: polynomial-commitments
lesson_title: Polynomial commitments
lesson_number: 4
duration: 21 min
badge: Quiz
---

# Intro
Polynomial commitments sound abstract, but the basic goal is very human: commit to a mathematical object now, reveal only tiny pieces of it later, and still let others trust you are being consistent. They are one of the core tools behind modern zk systems. This lesson explains them in a friendly way, with enough rigor to keep the ideas honest.

## Main Content
## What problem are polynomial commitments solving?
Suppose I have a polynomial, maybe a very important one, and I want to convince you of facts about it later.

For example, I may want to say:

- "Here is my polynomial, but I will not show you the whole thing yet."
- "At point \`x = 7\`, it evaluates to \`13\`."
- "Trust that I am talking about the same polynomial every time."

That is exactly the role of a polynomial commitment.

definition
label: Definition - Polynomial commitment
A polynomial commitment scheme lets a prover commit to a polynomial and later open or prove claims about its evaluations, while binding the prover to that same polynomial.

The keyword here is binding. Once committed, the prover should not be able to switch to a different polynomial when convenient.

## A simple analogy
Imagine you write a long answer key for a cat trivia tournament and seal it in a lockbox. Later, a judge asks:

"What is the answer to question 17?"

You open just enough evidence to show the answer for question 17 is "tabby" without letting the judge read the entire answer key. More importantly, you should not be able to give one answer to judge A and a different answer to judge B while pretending both came from the same sealed box.

That is the intuition:

- commit now
- answer spot checks later
- stay tied to one original object

The real cryptographic object is a polynomial, not a trivia sheet, but the workflow is similar.

## Why zk systems need this
Many proof systems reduce correctness to polynomial identities. Once you have polynomials representing witness information, constraints, or execution traces, you need a way to:

- bind the prover to those polynomials
- query specific evaluations
- prove consistency efficiently

Without a commitment scheme, the prover could adapt answers on the fly. That would ruin soundness.

So polynomial commitments are one of the pieces that let a verifier ask compact algebraic questions instead of reading the whole polynomial description.

## Commitment, opening, verification
A polynomial commitment scheme usually has three core actions:

code
label: High-level workflow
1. Commit to polynomial f(X)
2. Open a claim like f(a) = b
3. Verify that the opening matches the commitment

Some schemes also support batch openings, where many points or many polynomials are checked together.

The big win is that the verifier does not need to receive the whole polynomial explicitly. It gets a small commitment and a short proof of evaluation.

## What "opening at a point" means
If the prover claims:

code
label: Evaluation claim
f(a) = b

then the verifier wants evidence that this is true for the committed polynomial, not just for some new polynomial invented after the fact.

Mathematically, the claim means \`(X - a)\` divides \`f(X) - b\`. Many commitment schemes exploit this fact.

That is a neat algebraic trick:

- if \`f(a) = b\`, then plugging in \`a\` makes \`f(X) - b\` vanish
- vanishing at \`a\` means \`(X - a)\` is a factor

So evaluation proofs often reduce to showing that factor relation in a committed way.

## KZG versus other styles
You do not need to master every commitment scheme yet, but it helps to know that different systems make different tradeoffs.

KZG commitments:

- very short proofs
- efficient verification
- often rely on pairings
- typically need trusted setup

FRI-based or Merkle-based approaches:

- usually larger proofs
- rely more on hashing than pairings
- often transparent, meaning no trusted setup

So when people compare SNARKs and STARKs, a lot of the difference is really about the underlying commitment and proof machinery.

note
Polynomial commitments are a tool, not a whole proof system. A SNARK or STARK uses them as one component inside a larger design.

## Why consistency matters
Suppose a prover committed to one polynomial for a cat-feeding schedule:

- breakfast score
- lunch score
- dinner score

If the prover could later answer breakfast queries using one schedule and dinner queries using another, the verifier would be fooled by inconsistent local answers.

Polynomial commitments prevent that kind of shape-shifting. They force all later openings to refer back to one committed object.

This is the same reason we care about commitment schemes in general. They create a stable target for later verification.

## The mental model to keep
If QAP or PLONK creates algebraic objects that represent the computation, polynomial commitments are how the system "pins those objects down" so the verifier can inspect them in small ways.

Think of them as a cryptographic bookmark system for a hidden math document.

You do not hand over the whole book. Instead:

- you register one specific book
- later you prove what appears on page 42
- the verifier trusts page 42 really came from that same book

Or, in cat terms:

- you commit to the official nap schedule for Sir Whiskerton
- later you prove that at 3 pm the schedule says "window sill"
- you cannot suddenly swap in a different schedule just because the verifier asked an awkward question

That is why polynomial commitments matter.

## Quiz

### Question 1
question: What does a polynomial commitment scheme let a prover do?
- Hide the existence of the polynomial forever
- Commit to a polynomial and later prove claims about its evaluations
- Replace all field arithmetic with Boolean logic
- Remove the need for soundness
answer: 1
explanation: The point is to bind the prover to one polynomial and later support verifiable evaluation claims.

### Question 2
question: Why are polynomial commitments useful in zk systems?
- They let the verifier ignore the computation entirely
- They help bind the prover to algebraic objects while allowing compact checks
- They are only used to compress images
- They turn every proof into an interactive protocol
answer: 1
explanation: Zk systems often need to query committed polynomials without revealing or sending them in full.

### Question 3
question: What does it mean to open a commitment at a point \`a\`?
- To reveal the verifier secret key
- To prove the committed polynomial evaluates to a claimed value at \`a\`
- To re-run the full computation
- To interpolate a new polynomial after commitment
answer: 1
explanation: An opening shows that the committed polynomial has the claimed value at a specific point.

### Question 4
question: Which statement is generally true?
- KZG-style commitments often offer short proofs but may rely on trusted setup
- Polynomial commitments make commitments unnecessary
- Transparent schemes always have the smallest proofs
- Polynomial commitments are only used in STARKs and never in SNARKs
answer: 0
explanation: KZG is known for short proofs and strong efficiency, but it usually depends on setup assumptions.

## Sources
- Aniket Kate, Gregory M. Zaverucha, Ian Goldberg, Constant-Size Commitments to Polynomials and Their Applications - https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf
- Ariel Gabizon, Zachary J. Williamson, Oana Ciobotaru, PLONK - https://eprint.iacr.org/2019/953.pdf
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
`,Hf=`---
track: zk-proofs
chapter: SNARKs
chapter_number: 3
lesson_slug: what-is-a-snark
lesson_title: What is a SNARK?
lesson_number: 1
duration: 19 min
badge: Quiz
---

# Intro
SNARK is one of those words people say as if it explains everything by itself. It does not. A SNARK is not one magic protocol and it is not just "a tiny proof." Each letter in the word carries meaning, and if you understand those letters, the whole landscape gets much less intimidating. This lesson breaks the acronym down into something a serious beginner can actually hold onto.

## Main Content
## Start with the job a SNARK is trying to do
Suppose a prover wants to say:

"I know secret data that makes this complicated computation come out correctly."

The verifier would like to check that claim without:

- re-running the whole computation
- learning the secret data
- going back and forth through a long interactive conversation

A SNARK is one family of tools for doing that.

definition
label: Definition - SNARK
A SNARK is a succinct non-interactive argument of knowledge: a proof system with short proofs, cheap verification, no back-and-forth interaction at verification time, computational soundness, and a guarantee that successful proving reflects actual witness knowledge.

That sentence is dense, so let us unpack it one word at a time.

## S is for succinct
Succinct means the proof is small and verification is much cheaper than redoing the original computation.

This is the superpower that made SNARKs famous.

If a computation takes a million steps, the verifier does not want to repeat all million steps. A succinct proof acts like a compact certificate.

Think of a cat bakery that spends all morning proving it followed every recipe exactly. The customer at the counter does not want to audit the whole kitchen. They want a short trusted certificate that says:

"Yes, the tuna tart was baked according to the rules."

The bakery may still do lots of work in the back room. Succinctness is about the customer experience:

- short thing to check
- fast thing to check

It does not mean proving itself is cheap.

## N is for non-interactive
Non-interactive means the prover can create one proof object and hand it over. The verifier does not need to send fresh random challenges in a live conversation.

That matters a lot in real systems:

- blockchains want portable proofs
- asynchronous systems want one-shot verification
- many verifiers may want to check the same proof later

In older interactive protocols, prover and verifier may exchange several messages. In a SNARK, that conversation has been collapsed into a single package.

This is like submitting one sealed cat-show portfolio instead of attending a live oral exam with the judges.

## A is for argument
This is the letter people skip, but it matters.

An argument is like a proof, except its soundness depends on computational limits. In plain language: a sufficiently powerful real-world attacker is assumed to be unable to cheat, but an all-powerful being is not ruled out in the same way.

definition
label: Definition - Argument
An argument system has soundness against efficient cheating provers, rather than against unlimited ones.

So when we call something a SNARK, we are not usually claiming information-theoretic impossibility of cheating. We are claiming cheating should be infeasible under the chosen cryptographic assumptions.

That means assumptions matter:

- which curve is used
- which hardness assumption is used
- whether a trusted setup exists
- whether the random oracle model is involved

## K is for knowledge
The final letter says something stronger than "the statement is true." It says that a prover who consistently creates valid proofs must, in a formal extractor sense, know a witness.

That sounds abstract, but the intuition is grounded.

Suppose someone claims:

"I can prove I own the secret key for this wallet."

You do not want them to succeed by accident or by clever formatting. You want success to reflect actual possession of the hidden secret.

definition
label: Definition - Knowledge soundness
Knowledge soundness means that from any prover that can make the verifier accept, an extractor can recover a valid witness.

So the proof is not only about bare acceptance. It is about acceptance that comes from real underlying knowledge.

## What a SNARK is not
A SNARK is not automatically zero-knowledge. Many deployed systems are zk-SNARKs, meaning they add privacy too, but the base acronym itself is about succinctness, non-interactivity, argument soundness, and knowledge.

A SNARK is also not one specific construction. Groth16 is a SNARK. PLONK-style systems are SNARKs. Other systems may also fit the category if they satisfy the core properties.

It helps to think of SNARK as a category label, not a brand name for one exact machine.

## Why people care so much about SNARKs
SNARKs became important because they let us separate heavy work from cheap checking.

That is useful when:

- a blockchain wants to verify off-chain computation
- a user wants privacy about inputs
- many people want to verify the same result
- the original computation is too large to replay each time

In essence, SNARKs turn "trust me, I computed it correctly" into "here is a short cryptographic certificate that checking is much easier than recomputing."

If you like metaphors, think of a SNARK as a tamper-resistant boarding pass for a huge computation. The plane still needed a full airport behind the scenes, but the gate agent only checks a compact ticket.

## The tradeoffs
SNARKs are powerful, but not free.

Depending on the system, you may have to deal with:

- expensive proving
- trusted setup
- delicate implementation details
- algebraic assumptions

That is why the SNARK ecosystem keeps evolving. Different constructions make different compromises on proof size, prover time, verifier time, setup requirements, and cryptographic assumptions.

note
When someone says "this uses SNARKs," a good follow-up question is: which SNARK, under what assumptions, and with what setup model?

## The mental model to keep
If the acronym still feels like too much, compress it to this:

A SNARK is a compact certificate that says,

"I know the hidden data that makes this computation correct, and you can check my claim much faster than redoing the whole computation."

Or, in cat terms:

"I really do know which hidden sequence of paw taps opened the smart feeder, and here is a tiny proof you can check without watching the entire training session."

That is the core idea.

## Quiz

### Question 1
question: What does the \`S\` in SNARK mean?
- Secure
- Succinct
- Simulated
- Structured
answer: 1
explanation: Succinct means the proof and verification are small relative to the underlying computation.

### Question 2
question: What does non-interactive mean in this context?
- The prover and verifier never use randomness
- The verifier must recompute the full statement
- The proof can be sent as one object without a live back-and-forth protocol
- The witness becomes public
answer: 2
explanation: Non-interactive means the prover can produce a single proof artifact for later verification.

### Question 3
question: Why is a SNARK called an argument rather than a proof?
- Because it only works for addition
- Because its soundness is usually computational rather than information-theoretic
- Because it never uses witnesses
- Because it always requires a simulator
answer: 1
explanation: Arguments protect against efficient cheaters, not necessarily against all-powerful ones.

### Question 4
question: What does the \`K\` in SNARK add?
- It means the proof is post-quantum
- It gives a knowledge guarantee tied to witness extraction
- It means the verifier learns the witness
- It means the proof is interactive
answer: 1
explanation: Knowledge soundness says successful proving reflects actual witness knowledge.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Jens Groth, On the Size of Pairing-based Non-interactive Arguments - https://eprint.iacr.org/2016/260
- Ariel Gabizon, Zachary J. Williamson, Oana Ciobotaru, PLONK - https://eprint.iacr.org/2019/953.pdf
`,Uf=`---
track: zk-proofs
chapter: SNARKs
chapter_number: 3
lesson_slug: groth16-walkthrough
lesson_title: Groth16 walkthrough
lesson_number: 2
duration: 25 min
badge: Quiz
---

# Intro
Groth16 is one of the most famous zk-SNARK constructions because it offers extremely small proofs and fast verification. It is also one of the easiest systems to misunderstand, because most explanations jump straight into pairings and symbols. This lesson keeps the details grounded. We will not prove the scheme from scratch, but we will build a strong conceptual map of what Groth16 is doing and why it became so influential.

## Main Content
## Why Groth16 matters
Groth16 is a pairing-based zk-SNARK with very small proofs and efficient verification. For many years, it became the default mental picture people had when they heard "zk-SNARK."

Its appeal is simple:

- proofs are tiny
- verification is fast
- it supports expressive circuits

The price is also important:

- it needs a trusted setup
- proving still takes real work
- the internals rely on pairing-friendly elliptic curves and careful algebra

So Groth16 is powerful, but not free.

## Start from the relation
Like many SNARKs, Groth16 begins with a relation:

code
label: Relation view
R(x, w) = 1

Here:

- \`x\` is the public input
- \`w\` is the private witness

The prover wants to convince the verifier that there exists a witness \`w\` making the relation true, without revealing \`w\`.

Usually that relation has already been compiled into R1CS and then into a QAP. So by the time Groth16 gets involved, the computation has been turned into a clean polynomial problem.

## What Groth16 is really checking
At a high level, Groth16 checks that the witness makes the encoded polynomial relations hold.

Very loosely, the system wants to ensure:

- the witness was plugged into the right algebraic structure
- the resulting QAP relation is satisfied
- the prover did not cheat by mixing inconsistent values
- the witness remains hidden

The prover packages that story into a short proof, often described as three group elements.

That is one reason the proof size is so famous: it stays extremely small compared with the size of the original computation.

## The role of the trusted setup
Before any proofs are made, Groth16 needs a setup phase. This generates structured reference data tied to the circuit being proved.

Why does that matter? Because the verifier and prover need specially prepared encoded values that let them perform compact algebraic checks later.

You can think of setup as manufacturing a custom lock-and-key system for one family of statements.

If a cat academy wants to certify only one specific obstacle course, it may build special measuring gates for that course alone. Those gates make later checking fast, but they had to be created carefully in advance.

That is roughly how circuit-specific setup feels in Groth16.

note
Groth16 setup is circuit-specific in the classic model. If the circuit changes, a new setup is usually needed.

## The proving idea
The prover begins with:

- the public input
- the witness
- the setup data

It then constructs encoded algebraic combinations representing the witness and the QAP satisfaction condition. Randomness is added so the proof is zero-knowledge, meaning the proof should not reveal the witness itself.

The conceptual proving story is:

code
label: Prover story
1. Start with circuit relation encoded as QAP
2. Plug in witness values
3. Build witness-dependent polynomials
4. Blind them for zero-knowledge
5. Output a short proof

The real equations are more detailed, but this map is enough to keep your footing.

## The verifier's job
The verifier checks the proof using public input and setup material. It does not reconstruct the whole computation. Instead, it checks a small number of pairing-based equations that guarantee the prover's encoded objects line up correctly.

This is the key asymmetry:

- proving is heavy
- verification is light

Imagine a cat bakery again:

- the kitchen spends hours preparing a complex layered fish pie
- the inspector later checks a short sealed certification tag

The tag is tiny because the heavy work already happened inside the preparation process.

## Why pairings show up
Pairings are special algebraic maps on elliptic curve groups. Groth16 uses them because they allow the verifier to check multiplicative relationships between hidden encoded values without seeing those values directly.

You do not need the full pairing theory here. What matters is the role they play:

- they let the verifier test consistency compactly
- they support the algebraic checks needed by the QAP encoding
- they are central to Groth16's tiny proof size

So if QAP gives the right polynomial language, pairings give the verifier a compact way to enforce that language.

## Why Groth16 stayed popular
Groth16 stayed popular because proof size and verifier cost are excellent. In blockchain settings, that is a huge advantage. Small proofs are cheaper to store, transmit, and verify.

That is why Groth16 became widely deployed even though its setup model is awkward. For many teams, the efficiency tradeoff was worth it.

## The main limitations
Groth16's biggest limitation is trusted setup. If the secret trapdoor values from setup are mishandled, security can fail badly. It is also less flexible than later systems that support universal setup.

Another limitation is ergonomics. Implementing a secure Groth16 pipeline correctly requires care:

- circuit compilation
- witness generation
- setup management
- curve and pairing implementation
- proof serialization and verification

So while the proof object is elegant, the surrounding system can be operationally demanding.

## The mental model to keep
If Groth16 feels like a blur of cryptographic machinery, remember this:

- the computation is compiled into algebra
- setup prepares special checking material for that circuit
- the prover encodes a witness that satisfies the algebra
- the verifier checks a few powerful equations
- the result is a tiny proof of a big claim

Or, in cat form:

- design a cat maze
- build custom sensors for that maze
- let the cat run it privately
- verify from a tiny sensor report that the run followed the rules

That is the spirit of Groth16.

## Quiz

### Question 1
question: Why is Groth16 famous?
- It is fully transparent and post-quantum
- It offers very small proofs and fast verification
- It avoids algebraic encodings entirely
- It only works for Boolean circuits with no arithmetic
answer: 1
explanation: Groth16 became famous largely because its proof size and verification cost are extremely efficient.

### Question 2
question: What form is the computation usually in before Groth16 proves it?
- Direct JavaScript source code only
- A polynomially encoded relation such as a QAP derived from constraints
- A plain English sentence
- A Merkle tree with no arithmetic content
answer: 1
explanation: Groth16 typically works after the computation has been compiled into constraints and then polynomial form.

### Question 3
question: Why does Groth16 need a trusted setup?
- To generate structured reference data used in compact proving and verification
- To make the verifier interactive
- To avoid witnesses entirely
- To remove zero-knowledge randomness
answer: 0
explanation: Groth16 relies on setup-generated structured material tied to the circuit.

### Question 4
question: What is the verifier mainly checking in Groth16?
- The entire computation step by step
- A small number of pairing-based consistency equations
- The witness in plaintext
- The prover's source code comments
answer: 1
explanation: Groth16 verification uses compact pairing equations rather than replaying the whole computation.

## Sources
- Jens Groth, On the Size of Pairing-based Non-interactive Arguments - https://eprint.iacr.org/2016/260
- Bryan Parno et al., Pinocchio: Nearly Practical Verifiable Computation - https://eprint.iacr.org/2013/279.pdf
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
`,$f=`---
track: zk-proofs
chapter: SNARKs
chapter_number: 3
lesson_slug: trusted-setup-and-toxic-waste
lesson_title: Trusted setup & toxic waste
lesson_number: 3
duration: 20 min
badge: Quiz
---

# Intro
Trusted setup is one of the most emotionally charged topics in zk. People hear the phrase and immediately think "that sounds dangerous," and they are not wrong to be cautious. But trusted setup is not mysterious if you understand what it is trying to achieve and why "toxic waste" is such a dramatic phrase. This lesson explains both in plain language.

## Main Content
## Why a setup exists at all
Some SNARK systems need special public parameters before anyone can create or verify proofs. These parameters are generated in a setup phase.

Why not skip that phase? Because certain proof systems, especially classic pairing-based ones, rely on carefully prepared algebraic material that makes later proving and verification efficient.

So setup is not random ceremony for its own sake. It is part of the cryptographic design.

Think of building a cat agility arena with custom measuring sensors. If the sensors are prepared correctly, checking a cat's run later becomes fast and reliable. But if someone secretly keeps a master override for those sensors, the whole competition can be rigged.

That is the setup problem in spirit.

definition
label: Definition - Trusted setup
A trusted setup is a parameter-generation phase that creates public proving and verification material, often using secret randomness that must later be destroyed.

## What toxic waste means
The dangerous secret randomness used during setup is often called toxic waste.

Why such a dramatic name? Because if it survives in the wrong hands, it may let an attacker forge proofs or otherwise break the intended security guarantees.

definition
label: Definition - Toxic waste
Toxic waste is the secret trapdoor information generated during setup that must remain unknown and be destroyed after parameter generation.

So the worry is not that the public parameters are bad. The worry is that someone might secretly keep the private ingredients used to create them.

## Why this feels uncomfortable
Trusted setup introduces a social layer into cryptography. Instead of only trusting mathematics and software, users may also need to trust that:

- the ceremony was run honestly
- participants behaved correctly
- the secret randomness was destroyed

That extra trust requirement is what makes many people uneasy.

If a cat championship says, "Do not worry, we totally destroyed the secret judging override key," you might reasonably ask for more than a pinky promise.

That is why setup ceremonies often try to reduce trust rather than asking for blind faith.

## Multi-party ceremonies
One common solution is a multi-party setup ceremony.

The basic idea:

- several independent participants contribute randomness
- as long as at least one participant behaves honestly and destroys their secret part, the final toxic waste is effectively unknown

This is much better than trusting one single operator.

code
label: Ceremony intuition
1. Participant A adds secret randomness
2. Participant B adds more randomness
3. Participant C adds more randomness
4. Public parameters are published
5. Each participant destroys their secret contribution

If even one honest participant destroys their secret, the full trapdoor should remain unavailable.

That is why ceremonies are often public, documented, and designed to invite broad participation.

## Circuit-specific versus universal setup
Not all trusted setups are equally painful.

Some systems, such as classic Groth16 deployments, often use circuit-specific setup. That means if you change the circuit, you need a new ceremony.

Other systems aim for universal setup. In those, one setup can support many circuits up to some size bound.

This is a big usability improvement. It is like building one cat gym that can host many different training routines, instead of rebuilding the gym every time you introduce a new hoop.

## The real risk
The scary scenario is usually this:

- setup trapdoor remains known
- attacker uses it to create fake proofs
- fake proofs still verify normally

That means verifiers could accept false statements without noticing.

Exactly how this risk appears depends on the scheme, but the broad lesson is the same: if trapdoor material survives, soundness may be at risk.

This is why "toxic waste" is not just colorful language. It signals "this secret must not remain available."

note
Trusted setup is not always a dealbreaker. In some applications, the efficiency benefits are worth it. The important thing is to understand the trust assumption rather than pretending it is not there.

## Why some systems avoid trusted setup
Transparent systems, especially many STARK designs, avoid trusted setup entirely. They trade some efficiency for a cleaner trust story.

This is one reason people compare systems using questions like:

- do we want the smallest proof?
- do we want no setup ceremony?
- do we care most about verifier speed, prover cost, or trust minimization?

There is no one perfect answer. Different applications choose different points in the tradeoff space.

## The mental model to keep
Trusted setup is like forging a special stamp that later certifies proofs quickly.

If the mold used to make that stamp is destroyed, the system is fine.

If someone secretly keeps the mold, they may be able to mint fake certificates.

Or, in cat terms:

- the cat academy creates a master mold for official winner ribbons
- the public ribbons are fine
- but if someone hides the mold under a cushion, they can print fake champion ribbons forever

That hidden mold is toxic waste.

## Quiz

### Question 1
question: What is a trusted setup?
- A phase that creates public parameters, often using secret randomness that must later be destroyed
- A special proof that requires no public inputs
- A way to remove cryptographic assumptions
- A guarantee that the verifier learns the witness
answer: 0
explanation: Trusted setup generates structured parameters, and its secret randomness must not remain available afterward.

### Question 2
question: Why is the secret randomness called toxic waste?
- Because it makes proofs larger
- Because it is mathematically undefined
- Because keeping it can endanger security, such as by enabling forged proofs
- Because it only works on toxic data
answer: 2
explanation: If the trapdoor survives, an attacker may be able to cheat while still passing verification.

### Question 3
question: Why are multi-party ceremonies useful?
- They remove all algebra from the system
- They reduce trust because one honest participant can be enough to protect the setup
- They make proofs interactive
- They guarantee post-quantum security
answer: 1
explanation: Multi-party ceremonies spread trust so that security can survive even if some participants are dishonest.

### Question 4
question: What is a universal setup trying to improve?
- It avoids witnesses entirely
- It supports many circuits with one setup instead of requiring a new ceremony each time
- It turns SNARKs into STARKs
- It reveals all intermediate values
answer: 1
explanation: Universal setups are more reusable and operationally convenient than circuit-specific ones.

## Sources
- Jens Groth, On the Size of Pairing-based Non-interactive Arguments - https://eprint.iacr.org/2016/260
- Ariel Gabizon, Zachary J. Williamson, Oana Ciobotaru, PLONK - https://eprint.iacr.org/2019/953.pdf
- Zcash Powers of Tau documentation - https://z.cash/technology/powers-of-tau/
`,Zf=`---
track: zk-proofs
chapter: SNARKs
chapter_number: 3
lesson_slug: plonk-and-universal-setups
lesson_title: PlonK & universal setups
lesson_number: 4
duration: 24 min
badge: Quiz
---

# Intro
PLONK matters because it changed the conversation from "Which exact circuit needs a ceremony?" to "Can one setup support many circuits?" That shift made zk systems much easier to work with in practice. This lesson explains PLONK at the level of ideas: what problem it solved, how it thinks about constraints, and why universal setup was such a big deal.

## Main Content
## Why PLONK felt new
Earlier SNARK systems, especially Groth16-style ones, often required circuit-specific setup. That made deployments awkward because even small circuit changes could force a new ceremony.

PLONK helped push the ecosystem toward a more flexible model. Its big appeal was:

- one universal setup can support many circuits up to a size limit
- the proving system is highly structured and programmable
- it works nicely with polynomial commitment machinery

This made PLONK and PLONK-like systems attractive for real applications where circuits evolve over time.

## The big conceptual shift
PLONK still lives in the world of algebra, polynomials, and witnesses, but the style is different from the old R1CS-to-QAP story.

Instead of treating the system mainly as one big collection of R1CS rows, PLONK organizes computation around tables, gates, wiring constraints, and polynomial identities over an evaluation domain.

That may sound abstract, but the intuition is friendly:

- lay out the computation in a structured table
- describe what each row is allowed to do
- describe how values are connected across rows
- prove the table follows all the rules

Imagine a cat training academy spreadsheet:

- each row is one training moment
- columns store the values you care about
- gate rules say what each row is allowed to compute
- copy rules say when two entries are supposed to be the same cat, same treat count, or same sensor value

That is much closer to the PLONK feeling.

## Universal setup
The phrase "universal setup" means the setup is not tied to one exact circuit. Instead, one ceremony can support many circuits, usually up to some maximum size.

definition
label: Definition - Universal setup
A universal setup produces public parameters that can be reused across many circuits or programs, rather than only one fixed circuit.

This is operationally huge.

It means teams can:

- update circuits more easily
- reuse infrastructure
- avoid repeating large ceremonies for every design change

It does not remove trust assumptions entirely, but it makes those assumptions much easier to manage.

## Custom gates and flexibility
One reason PLONK-like systems became popular is flexibility. They can often express richer constraints more naturally than a plain "one multiplication-shaped equation per row" mindset.

Custom gates let a row enforce more specialized relationships. That can make circuits smaller and more efficient.

Think of it like upgrading from a school worksheet with only one problem template to a modern form builder where some rows can be:

- multiplication checks
- range checks
- logic checks
- lookup-style checks

You still need disciplined structure, but the language becomes more expressive.

## Wiring and permutation arguments
One subtle but important part of PLONK is wiring: proving that values that should be equal across the table really are equal.

Instead of manually encoding every copy relation in a clunky way, PLONK uses a permutation-style argument to enforce that the wiring of values is correct.

At a high level, this helps the system prove:

- these cells are supposed to refer to the same value
- the table respects that consistency

If a cat tracking spreadsheet says that the pawprint ID in row 2 must match the feeding ID in row 11, the system needs a principled way to enforce that connection. PLONK's wiring machinery does that at scale.

## Why polynomial commitments still matter
PLONK relies heavily on polynomial commitments. The prover commits to witness polynomials and selector polynomials, and the verifier checks carefully chosen evaluation identities.

So although the surface language is different from QAP, the deeper rhythm remains familiar:

- encode computation algebraically
- commit to the relevant polynomials
- verify small consistency checks

PLONK is not abandoning the polynomial world. It is reorganizing it in a more flexible way.

note
When people say "PLONKish," they often mean a family of systems inspired by PLONK's table-based, gate-based, and permutation-based design style rather than the original paper alone.

## Why PLONK was important for builders
From a builder's perspective, PLONK mattered because it improved workflow.

Instead of telling teams:

"Every time your circuit changes, go do another careful ceremony,"

the universal setup idea says:

"Use one reusable setup and keep iterating."

That is the kind of practical shift that changes adoption.

In cat terms, it is the difference between constructing a brand-new custom climbing tower every time you add one bell, versus having one robust arena that supports many training patterns.

## The mental model to keep
PLONK is best understood as a more flexible SNARK design language built around:

- structured tables
- reusable setup
- richer gate systems
- wiring constraints
- polynomial commitment checks

If Groth16 feels like a custom-tailored formal suit, PLONK feels more like a well-designed modular wardrobe. It may not always win every metric in every context, but it is much easier to reuse and adapt.

## Quiz

### Question 1
question: Why was PLONK a big step forward for zk systems?
- It was the first proof system ever invented
- It removed all algebraic assumptions
- It helped popularize reusable universal setup and a more flexible proving structure
- It only worked for tiny circuits
answer: 2
explanation: PLONK became influential because of its reusable setup model and flexible design language.

### Question 2
question: What does universal setup mean?
- The verifier never needs public inputs
- One setup can support many circuits, usually up to some size bound
- The proof system is automatically post-quantum
- There is no setup at all
answer: 1
explanation: Universal setup means the same parameters can be reused for many circuits instead of only one fixed circuit.

### Question 3
question: What problem do PLONK wiring or permutation arguments help solve?
- They generate random witnesses
- They enforce that values that should match across the table really do match
- They remove the need for commitments
- They make the verifier learn the witness
answer: 1
explanation: The permutation machinery helps enforce equality and copy constraints across different cells.

### Question 4
question: Which description best fits PLONK?
- A flexible table-and-polynomial based SNARK approach with reusable setup
- A hash-only transparent proof system with no commitments
- A system that avoids witnesses
- A protocol that proves only sorting algorithms
answer: 0
explanation: PLONK is a SNARK design style built around structured tables, gates, wiring, and reusable setup.

## Sources
- Ariel Gabizon, Zachary J. Williamson, Oana Ciobotaru, PLONK - https://eprint.iacr.org/2019/953.pdf
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Zcash Halo 2 documentation - https://zcash.github.io/halo2/
`,Gf=`---
track: zk-proofs
chapter: STARKs
chapter_number: 4
lesson_slug: why-starks
lesson_title: Why STARKs?
lesson_number: 1
duration: 19 min
badge: Quiz
---

# Intro
By the time people reach STARKs, they usually already know why SNARKs are impressive. The real question becomes: if SNARKs are already so good, why invent STARKs at all? The answer is about trust assumptions, scalability, and different design choices. STARKs are not "better in every way." They are a different point in the proof-system tradeoff space.

## Main Content
## Start with the pain points
Classic SNARKs, especially pairing-based ones, achieved excellent succinctness, but they also came with concerns:

- trusted setup
- delicate algebraic assumptions
- dependence on pairing-friendly curves
- post-quantum worries

STARKs emerged partly as a response to those concerns.

The rough promise of STARKs is:

- transparent setup, meaning no trusted ceremony
- security based mainly on hashing and low-degree testing ideas
- strong scalability for large computations

The tradeoff is that proofs are usually larger than tiny pairing-based SNARK proofs.

## What the word STARK means
STARK stands for Scalable Transparent Argument of Knowledge.

Just like with SNARK, every letter matters.

- scalable: designed to handle large computations well
- transparent: no trusted setup
- argument: computational soundness
- knowledge: witness-based guarantee in the formal sense

definition
label: Definition - STARK
A STARK is a scalable transparent argument of knowledge, typically built from hash-based commitments, low-degree testing, and algebraic execution traces.

The standout word here is transparent.

## Why transparency matters
Transparent means there is no special ceremony where toxic waste must be generated and destroyed.

That is a big social and operational win. You do not need to trust a setup process. You do not need to wonder whether somebody kept a hidden trapdoor.

If SNARK trusted setup feels like asking a cat to promise it definitely did not hide the master key under the sofa, STARK transparency means there was never a hidden master key in the first place.

This cleaner trust story is one of the main reasons people like STARKs.

## Why scalability matters
STARKs are especially strong when the computation is very large. They often work with execution traces: long structured records of a computation's steps.

That makes them a natural fit for things like:

- virtual machine execution
- rollups
- long arithmetic computations
- trace-heavy systems

Rather than compressing the computation only through circuit constraints, STARKs often embrace the idea of a long table of steps and prove that this table obeys transition rules.

## The price: proof size
Transparency and scalability are great, but STARKs usually pay for them with larger proof sizes than the smallest pairing-based SNARKs.

That does not make them worse. It just means the tradeoff changes.

Some systems care most about:

- tiny verification artifacts
- minimal on-chain data

Others care more about:

- no trusted setup
- hash-based assumptions
- better scalability for huge traces

Choosing between SNARKs and STARKs is often about which costs you are more willing to pay.

## The technical flavor is different
Even before you learn the details, STARKs feel different from Groth16-style systems.

Their language leans more on:

- traces
- low-degree extensions
- Reed-Solomon style ideas
- FRI
- Merkle commitments

That means the math "texture" is different. Instead of tiny pairing-based proof objects built from strong setup assumptions, STARKs use a more transparent stack built from polynomial proximity testing and hashing.

note
Transparent does not mean assumption-free. STARKs still rely on cryptographic assumptions, but the trust story is different from trusted-setup SNARKs.

## A practical intuition
Imagine you want to prove a cat robot followed 500,000 steps of a maze-cleaning program correctly.

A STARK-style mindset says:

- write down the long execution trace
- encode transition rules between rows
- prove the trace has the right algebraic structure
- use transparent commitment and testing machinery to check it efficiently

This is one reason STARKs feel natural for VM-style proving systems. They are comfortable reasoning about long, regular computations.

## The mental model to keep
Why STARKs?

Because people wanted proof systems that:

- avoid trusted setup
- scale gracefully to huge computations
- rely on a different family of assumptions

If SNARKs are like ultra-compact premium shipping boxes, STARKs are like larger but tamper-resistant transparent crates. They may take more room, but many teams like what they reveal about trust and scalability.

## Quiz

### Question 1
question: What does the \`T\` in STARK emphasize?
- Trusted setup
- Transparency, meaning no trusted setup ceremony
- Time-locked verification
- Turing completeness
answer: 1
explanation: The transparent setup model is one of the defining features of STARKs.

### Question 2
question: Why were STARKs developed in part as an alternative to classic SNARK systems?
- To avoid all field arithmetic
- To address concerns like trusted setup and different security assumptions
- To make proofs always smaller than SNARK proofs
- To reveal the witness during verification
answer: 1
explanation: STARKs offer a different trust and assumption profile, especially by avoiding trusted setup.

### Question 3
question: What kind of computations are STARKs often well suited for?
- Very large trace-based computations
- Only one-step Boolean formulas
- Only interactive protocols
- Only computations with no private data
answer: 0
explanation: STARKs are especially natural for long structured execution traces and large computations.

### Question 4
question: What is a common tradeoff of STARKs compared with tiny pairing-based SNARKs?
- They usually have larger proofs
- They cannot prove computation
- They always require a ceremony
- They do not use polynomials
answer: 0
explanation: STARKs often trade larger proof sizes for transparency and other benefits.

## Sources
- Eli Ben-Sasson et al., Scalable, transparent, and post-quantum secure computational integrity - https://eprint.iacr.org/2018/046
- StarkWare STARK explainer - https://starkware.co/stark/
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
`,Yf=`---
track: zk-proofs
chapter: STARKs
chapter_number: 4
lesson_slug: fri-protocol
lesson_title: FRI protocol
lesson_number: 2
duration: 24 min
badge: Quiz
---

# Intro
FRI is one of the core ingredients that makes STARKs work, and it has a reputation for being intimidating. Under the hood, though, the intuition is not impossible. FRI is basically a way to test whether something behaves like a low-degree polynomial without reading the whole thing. In this lesson, we will keep the language simple and focus on the big picture first.

## Main Content
## What problem FRI is solving
In STARK-like systems, the prover often claims that a large table of values comes from a low-degree polynomial or is close to one. The verifier cannot afford to inspect everything directly.

So the verifier needs a smart shortcut:

- check only a small amount of data
- still get confidence that the full object has the right low-degree structure

FRI is one of the protocols that makes that possible.

definition
label: Definition - FRI
FRI is an interactive-or-derived non-interactive protocol for testing whether a function over a domain is close to a low-degree polynomial.

The key phrase is "close to low-degree." FRI is a low-degree testing tool.

## Why low degree matters
In these proof systems, "being low degree" is not a random aesthetic preference. Low-degree structure is what makes algebraic checking manageable.

If the prover's committed values come from the wrong kind of function, many of the later proof guarantees fall apart. So the verifier needs confidence that the claimed object is not just arbitrary noise.

Think of it like judging a cat's path through a maze. If the rules say the cat must follow a smooth sequence of allowed moves, the verifier wants to know the path was genuinely generated by those rules, not scribbled in afterward.

## The folding idea
One intuitive way to think about FRI is repeated compression.

The protocol takes a large evaluation table and gradually folds it into smaller tables while preserving information about whether it came from a low-degree polynomial.

At each round:

- the domain gets smaller
- the data gets compressed
- the low-degree claim is reduced to a smaller version of itself

Eventually the object becomes small enough that checking is easy.

This is like taking a giant cat blanket and folding it over and over. If the blanket had a regular woven pattern to begin with, that structure survives in a predictable way. If it was random scraps stitched together, the folding process exposes inconsistencies.

## Why random checks help
FRI does not inspect everything. It uses randomness to sample positions and check consistency across folding rounds.

The security intuition is:

- if the object is far from low degree, inconsistencies are spread widely enough that random checks are likely to catch them
- if the object really is close to low degree, the checks pass with high probability

This is a familiar proof-system pattern. We do not get certainty by reading the whole object. We get strong statistical confidence from carefully chosen spot checks.

## Merkle commitments and query paths
In practice, STARK-style systems often commit to evaluation tables using Merkle trees. Then when the verifier asks about a sampled position, the prover opens:

- the requested value
- sibling values needed for consistency checks
- Merkle authentication paths

This keeps the proof compact enough to be practical while still binding the prover to the committed data.

So FRI is not living alone. It works together with commitment infrastructure that makes spot checks trustworthy.

## What "close" really means
It is worth pausing on one word: close.

FRI is often described as a proximity test. That means it tests whether the function is close to some low-degree polynomial, not necessarily identical to one in the most naive sense.

Why is that the right notion? Because in coding-theoretic settings, the evaluation table is viewed as a codeword or near-codeword, and the protocol is designed to distinguish structured data from badly corrupted data.

You do not need all the coding theory yet. Just remember:

- exact equality is too narrow a lens
- proximity to the right structured family is the meaningful property

## Why FRI matters for STARKs
FRI is one of the reasons STARKs can stay transparent. Instead of relying on pairing-based algebra and trusted setup, they lean on low-degree testing plus hash-based commitment mechanisms.

That means FRI is not just a side detail. It is part of the engine room.

If STARKs are a large transparent machine, FRI is one of the main gears that checks whether the machine's algebraic story holds together.

note
You do not need to master every fold equation on the first pass. The most important first understanding is that FRI gives an efficient way to test low-degree structure through recursive folding and random queries.

## The mental model to keep
Here is the simple version:

- the prover says, "this huge table behaves like a low-degree polynomial"
- the verifier cannot read it all
- FRI repeatedly folds the table into smaller ones
- random spot checks catch cheating with high probability

Or, in cat language:

- the prover claims this giant record of pawprints came from one clean training pattern
- FRI keeps folding and checking the pawprint sheet
- if the pattern is fake, the random checks are likely to catch the mismatch

That is the heart of FRI.

## Quiz

### Question 1
question: What is FRI mainly used for?
- Encrypting the witness
- Testing whether a function is close to a low-degree polynomial
- Generating trusted setup parameters
- Replacing Merkle trees with pairings
answer: 1
explanation: FRI is a low-degree proximity testing protocol.

### Question 2
question: Why is low-degree structure important in STARK systems?
- Because it is a way to encode and verify algebraic consistency efficiently
- Because low-degree polynomials reveal the witness directly
- Because only degree-1 polynomials are secure
- Because it eliminates the need for commitments
answer: 0
explanation: Low-degree structure is the algebraic form that later checks rely on.

### Question 3
question: What is the basic intuition behind FRI folding?
- Turn a large structured claim into smaller related claims through repeated compression
- Convert every proof into a circuit-specific setup
- Replace randomness with determinism
- Reveal every row of the execution trace
answer: 0
explanation: Folding shrinks the problem while preserving the core low-degree property being tested.

### Question 4
question: How do random queries help FRI?
- They let the verifier inspect a small amount of data while still catching many inconsistent fake claims
- They always reveal the whole polynomial
- They remove the need for hashing
- They guarantee zero-knowledge by themselves
answer: 0
explanation: Random spot checks provide strong confidence without reading the full committed object.

## Sources
- Eli Ben-Sasson et al., Fast Reed-Solomon Interactive Oracle Proofs of Proximity - https://eccc.weizmann.ac.il/report/2017/134/
- Eli Ben-Sasson et al., Scalable, transparent, and post-quantum secure computational integrity - https://eprint.iacr.org/2018/046
- StarkWare STARK explainer - https://starkware.co/stark/
`,Xf=`---
track: zk-proofs
chapter: STARKs
chapter_number: 4
lesson_slug: air-and-execution-traces
lesson_title: AIR & execution traces
lesson_number: 3
duration: 23 min
badge: Quiz
---

# Intro
AIR and execution traces are central to how many STARK systems describe computation. If R1CS feels like a pile of local equations, AIR feels more like a rulebook for a long table of steps. This lesson explains that table-based viewpoint in a way that is easier to picture, especially if circuit language has started to feel cramped.

## Main Content
## Start with the trace
An execution trace is a record of a computation over time. Each row usually represents one step, and each column represents some piece of state.

For example, in a simple machine, columns might store:

- current register values
- memory pointers
- flags
- outputs

If you stack all steps together, you get a big table.

That table is the execution trace.

Think of a cat robot walking across a room. A trace might record, at each step:

- left paw position
- right paw position
- tail sensor state
- current target tile

One row is not enough. The whole run matters.

definition
label: Definition - Execution trace
An execution trace is a tabular record of the states of a computation across many steps.

## What AIR does
AIR stands for Algebraic Intermediate Representation. It is the rule system that tells us whether an execution trace is valid.

Instead of describing the computation as isolated gates, AIR describes relationships that should hold:

- within each row
- between neighboring rows
- at the beginning of the trace
- at the end of the trace

definition
label: Definition - AIR
AIR is an algebraic framework for specifying which execution traces are valid by expressing local transition and boundary constraints over trace columns.

This is why AIR feels very natural for machines, state transitions, and long-running processes.

## Boundary constraints and transition constraints
Two categories matter a lot.

Boundary constraints say what must hold at specific places, usually the start or end.

Examples:

- the first row starts with the public input
- the last row contains the claimed output

Transition constraints say how one row is allowed to evolve into the next.

Examples:

- next register equals current register plus one
- next flag equals current flag xor some bit
- next state must match the machine rule

If the trace is a cat obstacle log, boundary constraints are things like:

- the cat starts at the floor
- the cat ends on the top platform

Transition constraints are things like:

- from each row to the next, the cat can only move one platform up, not teleport through the ceiling

## Why this is powerful
AIR is powerful because many computations naturally unfold as time-based state transitions. Instead of flattening everything into generic gates, AIR lets us describe the process in a way that matches how the computation actually behaves.

This is especially helpful for virtual machines and long traces, where the "next state from current state" mindset is very natural.

If you have ever kept a ledger, a lab notebook, or a play-by-play sports log, you already understand the emotional shape of a trace. AIR is the algebraic version of saying:

"Every row must follow sensibly from the previous row."

## From trace table to algebra
STARK systems do not prove a raw spreadsheet directly. They turn trace columns into algebraic objects, often by extending them into polynomials over a domain. Then they check that the trace obeys the AIR constraints in polynomial form.

So AIR is the specification layer:

- what the valid trace should look like
- what transition rules must hold
- what boundary values are fixed

Later STARK machinery proves those conditions efficiently.

## Why traces can be huge
A trace may have an enormous number of rows. That is okay. STARKs were built with that scale in mind.

In fact, large traces are where the AIR view shines. If a computation has millions of steps, it is often more natural to represent it as:

- one big table of evolving state
- one compact family of local rules

rather than as a giant disconnected pile of gate constraints.

Imagine recording every move made by a mischievous cat in a museum overnight. The log might be huge. But the rules are local and simple:

- the cat can only move to adjacent areas
- alarms update according to sensor rules
- snack count changes only when a snack is taken

AIR is great at that style of specification.

note
AIR is not "less mathematical" than R1CS. It is just a different way of organizing the mathematics around state evolution instead of gate-by-gate arithmetic circuits.

## The mental model to keep
Here is the picture to remember:

- the trace is the story of the computation over time
- AIR is the rulebook for what makes that story valid
- boundary constraints pin down the start and end
- transition constraints govern row-to-row movement

Or, in cat language:

- the trace is the frame-by-frame security camera log of Muffin's midnight mission
- AIR is the rulebook that says each frame must logically follow from the last one

That is why AIR and execution traces matter so much in STARK systems.

## Quiz

### Question 1
question: What is an execution trace?
- A proof object with no internal structure
- A table recording the state of a computation across many steps
- A list of verifier challenges only
- A setup ceremony transcript
answer: 1
explanation: An execution trace is the step-by-step table of computational state.

### Question 2
question: What does AIR specify?
- Which traces are valid by giving algebraic boundary and transition rules
- Only how to generate trusted setup
- Only the final proof size
- How to remove all intermediate computation
answer: 0
explanation: AIR defines the algebraic rules that a valid execution trace must satisfy.

### Question 3
question: What is a transition constraint?
- A rule about how one row of the trace relates to the next
- A rule that hides the public input
- A rule for commitment hashing only
- A rule that replaces the witness
answer: 0
explanation: Transition constraints capture allowed state evolution from one step to the next.

### Question 4
question: Why is AIR a natural fit for VM-style computations?
- Because those computations often have long step-by-step state evolution
- Because AIR avoids all polynomials
- Because it only works for tiny examples
- Because it makes proofs interactive
answer: 0
explanation: AIR matches the natural row-by-row evolution of machine execution.

## Sources
- Eli Ben-Sasson et al., Scalable, transparent, and post-quantum secure computational integrity - https://eprint.iacr.org/2018/046
- StarkWare STARK explainer - https://starkware.co/stark/
- Cairo whitepaper - https://eprint.iacr.org/2021/1063.pdf
`,Jf=`---
track: zk-proofs
chapter: STARKs
chapter_number: 4
lesson_slug: real-world-stark-systems
lesson_title: Real-world STARK systems
lesson_number: 4
duration: 22 min
badge: Quiz
---

# Intro
After learning the theory, it helps to ask a practical question: where do STARK ideas show up in actual systems? This lesson closes the chapter by connecting the concepts to real-world proving stacks and products. The goal is not to memorize brand names, but to understand what it means to deploy STARK-style proving in practice.

## Main Content
## From paper ideas to real systems
A real-world STARK system is not just "a proof protocol." It is usually an ecosystem containing:

- a way to describe computation
- a prover implementation
- a verifier
- commitment and query machinery
- developer tools
- application-specific integration

So when people talk about STARK systems in practice, they often mean full proving platforms, not just one theorem in a paper.

## Common use cases
Real-world STARK systems often appear in settings like:

- blockchain scaling
- rollups
- verifiable virtual machines
- proving execution of programs
- privacy-preserving applications built on trace-heavy computation

This is where the STARK style shines. Long computations that would be expensive to replay can be turned into traces and proved succinctly enough for practical verification.

## Cairo and STARK-friendly programming
One important practical development was the rise of programming models designed for STARK-friendly proving, such as Cairo.

Why does that matter? Because real adoption depends on more than cryptography. Builders need a way to describe programs that can be compiled into traces and AIR-like constraints without doing everything by hand.

This is the difference between:

- reading a physics paper about cat motion
- actually building a cat robot kit that people can use

Theory matters, but developer experience determines whether a system can spread.

## StarkEx, StarkNet, and the ecosystem view
Some of the most visible STARK deployments came from systems such as StarkEx and StarkNet, which brought STARK-style proving into scaling and execution environments.

You do not need every product detail here. What matters is the pattern:

- off-chain or large computation happens
- a prover creates evidence of correctness
- on-chain or external verification checks that evidence far more cheaply than redoing all work

This is the same high-level promise we saw earlier, now turned into infrastructure.

## What changes in real deployments
In production, the big questions are not only cryptographic elegance. Teams also care about:

- prover speed
- memory usage
- verifier cost
- developer tooling
- circuit or trace ergonomics
- recursion support
- maintenance and upgrades

A beautiful proof system on paper may still be painful in production if the tooling is rough or proving cost is too high.

That is why real-world systems are engineering stacks, not just math objects.

## Why transparency is attractive in deployment
In deployed systems, transparency has real operational value. Avoiding trusted setup means:

- less ceremony management
- less governance overhead
- fewer concerns about trapdoor handling

For large ecosystems, this can be a major win.

If a city is installing smart cat feeders on every block, it is easier to adopt a design that never required a secret master mold ceremony in the first place.

That is not the only metric, but it matters.

## Real-world tradeoffs do not disappear
Even in production, STARK systems still trade off against alternatives.

Teams may ask:

- are proof sizes too large for our target chain?
- is proving cost acceptable?
- do we need maximum verifier efficiency?
- do we prefer transparent assumptions?

There is no universal winner. "Best" depends on what the system is optimizing for.

That is why real-world proof infrastructure is diverse. Some teams choose Groth16. Some choose PLONKish systems. Some choose STARKs. Some mix approaches.

note
When evaluating real-world proving systems, always look beyond the headline proof type. The practical experience depends on tooling, execution model, performance, and operational assumptions.

## The mental model to keep
Real-world STARK systems are where the abstract pieces come together:

- traces
- AIR-style rules
- polynomial structure
- FRI
- transparent commitments
- developer-facing proving infrastructure

Or, in cat language:

- the theory tells you how a champion cat obstacle recorder could work
- the real-world system is the full arena, sensors, training software, judges, and replay desk that actually run the event every day

That is what makes a STARK system real.

## Quiz

### Question 1
question: What usually makes a real-world STARK system more than just a protocol paper?
- It includes tooling, prover infrastructure, verification flow, and application integration
- It removes all tradeoffs
- It avoids developer experience concerns
- It only exists as a theorem
answer: 0
explanation: Production STARK systems are full stacks, not just abstract cryptographic ideas.

### Question 2
question: Why are STARKs often attractive for blockchain scaling and VM proving?
- Because they only work for tiny examples
- Because they handle long structured computations and offer transparent setup
- Because they do not use algebra
- Because they always have the smallest possible proof size
answer: 1
explanation: STARKs are a natural fit for large execution traces and avoid trusted setup ceremonies.

### Question 3
question: Why does a language like Cairo matter?
- It gives developers a way to write programs that can be compiled into STARK-friendly proving structures
- It removes the need for verifiers
- It makes every proof interactive
- It replaces AIR entirely
answer: 0
explanation: Developer-facing languages and tooling are essential for turning proof theory into usable systems.

### Question 4
question: What is a good way to evaluate a real-world STARK system?
- Look only at the acronym
- Ignore prover performance and tooling
- Consider assumptions, proof size, prover cost, verifier cost, and developer workflow together
- Focus only on whether cats are mentioned in the docs
answer: 2
explanation: Real systems must be judged across both cryptographic and engineering dimensions.

## Sources
- Eli Ben-Sasson et al., Scalable, transparent, and post-quantum secure computational integrity - https://eprint.iacr.org/2018/046
- StarkWare STARK explainer - https://starkware.co/stark/
- Cairo whitepaper - https://eprint.iacr.org/2021/1063.pdf
`,em=`---
track: zk-proofs
chapter: Protocols & Building Blocks
chapter_number: 5
lesson_slug: sigma-protocols
lesson_title: Sigma protocols
lesson_number: 1
duration: 20 min
badge: Quiz
---

# Intro
Sigma protocols are one of the cleanest places to see zero-knowledge "in motion." They are simple three-message protocols, but they already contain the big ideas that later show up in SNARKs and STARKs: commitment, challenge, response, soundness through unpredictability, and privacy through simulation. If later proof systems feel like giant machines, sigma protocols are the small transparent gearbox inside them.

## Main Content
## The shape is simple
A sigma protocol has three moves:

code
label: The three-message pattern
1. Prover sends a first message
2. Verifier sends a random challenge
3. Prover sends a final response

That is it. This is why people often describe sigma protocols as commit-challenge-response systems.

The prover says, "I am ready." The verifier says, "Fine, answer this random check." The prover answers in a way that should only be possible if it really knows the witness.

If you want a cat version, imagine a suspicious verifier asking whether Professor Whiskers really knows the route through a maze. The cat first walks to the maze entrance and signals readiness. Then the verifier picks a random checkpoint. The cat has to continue in a way that only a cat that really knows the route can manage.

## Why the challenge matters
The random challenge is the heart of the protocol. If the prover could predict it in advance, it could often prepare fake-looking answers.

That is why sigma protocols are public-coin protocols: the verifier's challenge is openly random, not a hidden mysterious step. Security comes from the prover having to answer *after* that challenge is chosen.

The right intuition is not "the verifier asks something complicated." It is "the verifier asks something unpredictable."

## The three core properties
Sigma protocols usually come with three important properties.

definition
label: Definition - Completeness
If the prover really knows the witness and follows the protocol honestly, the verifier accepts.

definition
label: Definition - Special soundness
If someone can produce two accepting transcripts with the same first message but two different challenges, then a witness can be extracted from those transcripts.

definition
label: Definition - Honest-verifier zero-knowledge
There is an efficient simulator that can generate transcripts distributed like real ones, as long as the verifier follows the honest challenge rule.

Those three ideas matter a lot.

Completeness means honest provers are fine.

Special soundness means the prover cannot keep bluffing forever. If it could answer multiple different challenges for the same opening move, that usually reveals the hidden witness.

Honest-verifier zero-knowledge means the transcript does not expose the secret in a damaging way when the verifier behaves as specified.

## Why "special soundness" is such a powerful idea
Special soundness is one of the reasons sigma protocols are so elegant. Instead of trying to reason about all cheating behavior directly, we prove a sharper statement:

"If I ever see two accepting transcripts with the same start but different challenges, I can algebraically recover the secret."

That turns cheating into something structurally impossible, or at least very unlikely, because a cheating prover normally only gets one challenge in a real run.

In cat terms, imagine a cat claims to know the secret tunnel from the kitchen to the roof. If, from the same starting position, the cat can instantly answer two different random route challenges, then we can reverse-engineer the tunnel map from those two answers. The cat is no longer bluffing by vibes. It is trapped by consistency.

## Why simulation gives privacy
The zero-knowledge side works almost backwards. Instead of asking, "Does the transcript look convincing?" we ask:

"Could a simulator have produced something that looks the same without the witness?"

If yes, then the transcript did not really teach the verifier the secret.

That is a powerful shift. It says privacy is not about the transcript being confusing. It is about the transcript being reproducible without access to the witness.

note
Sigma protocols are usually honest-verifier zero-knowledge first. Turning them into stronger non-interactive systems often needs additional machinery, such as Fiat-Shamir or other compilers.

## Why sigma protocols keep reappearing
Sigma protocols are not just a historical curiosity. They keep showing up because they are modular.

They are used for:

- proofs of knowledge of discrete logs
- identification schemes
- credential systems
- building blocks inside larger zero-knowledge constructions
- intuition for Fiat-Shamir signatures and NIZKs

They are small enough to understand directly and rich enough to matter in modern systems.

## The mental model to keep
If later ZK systems feel too abstract, come back to sigma protocols. They show the core rhythm clearly:

- the prover commits to a path
- the verifier throws a random spotlight on part of that path
- the prover answers
- the transcript should convince without spilling the secret

Or, with cats:

- the cat crouches at the maze entrance
- the verifier points to a random checkpoint
- the cat responds correctly
- seeing the answer should convince you the cat knows the maze, not hand you the maze blueprint

That is the sigma protocol mindset.

## Quiz

### Question 1
question: What is the basic message pattern of a sigma protocol?
- Witness, transcript, verifier output
- Commitment, challenge, response
- Setup, proving key, verifying key
- Hash, Merkle root, proof
answer: 1
explanation: Sigma protocols are the classic three-move commit-challenge-response pattern.

### Question 2
question: Why is the verifier's random challenge important?
- It makes the proof longer
- It prevents the prover from safely preparing answers to every check in advance
- It reveals the witness bit by bit
- It removes the need for soundness
answer: 1
explanation: The challenge is what forces the prover to respond to an unpredictable check rather than a scripted one.

### Question 3
question: What does special soundness say, roughly?
- Every transcript is zero-knowledge
- The verifier always accepts
- Two accepting transcripts with the same first message and different challenges let you extract a witness
- The protocol works without randomness
answer: 2
explanation: Special soundness is the extraction property that gives sigma protocols much of their strength.

### Question 4
question: What does honest-verifier zero-knowledge mean?
- The verifier is dishonest but harmless
- A simulator can reproduce transcripts that look real when the verifier follows the protocol honestly
- The witness is published after verification
- The protocol must be non-interactive
answer: 1
explanation: HVZK says the verifier's view can be simulated without the witness, assuming the verifier uses honest random challenges.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- David Mandell Freeman, Schnorr Identification and Signatures - https://web.stanford.edu/class/cs259c/lectures/schnorr.pdf
- Ronald Cramer, Ivan Damgard, Berry Schoenmakers, Proofs of Partial Knowledge and Simplified Design of Witness Hiding Protocols - https://ir.cwi.nl/pub/5182
`,tm=`---
track: zk-proofs
chapter: Protocols & Building Blocks
chapter_number: 5
lesson_slug: schnorr-proofs
lesson_title: Schnorr proofs of knowledge
lesson_number: 2
duration: 24 min
badge: Quiz
---

# Intro
Schnorr proofs are the "hello world" of serious zero-knowledge. They are simple enough to fit in your head, but strong enough to show what a proof of knowledge actually looks like. If sigma protocols are the template, Schnorr is the classic concrete example. Once you really understand this lesson, later systems stop feeling like magic and start feeling like scaled-up versions of the same idea.

## Main Content
## The statement being proved
The Schnorr protocol proves knowledge of a discrete logarithm.

In plain language, the public sees a generator \`P\` and a public key \`Q = [a]P\`. The prover wants to convince the verifier that it knows the secret scalar \`a\` without revealing it.

definition
label: Definition - Schnorr proof of knowledge
A Schnorr proof is a sigma protocol in which the prover demonstrates knowledge of a secret exponent or scalar whose public image is already known.

This is a proof of *knowledge*, not just a proof that some public relation happens to be true.

## The protocol flow
The prover starts by choosing fresh randomness. This matters a lot. Reusing the same randomness would be disastrous.

The three moves look like this:

code
label: Schnorr protocol
Public: generator P, public key Q = [a]P
Secret: a

1. Prover samples random k and sends R = [k]P
2. Verifier samples random challenge e and sends e
3. Prover sends s = k + a * e

Verifier accepts if:
[s]P = R + [e]Q

This may look mysterious at first, but the algebra is gentle.

If the prover is honest, then:

\`[s]P = [k + ae]P = [k]P + [ae]P = R + [e]Q\`

So the check works.

## Why this does not reveal the secret
The secret \`a\` is hidden inside \`s = k + ae\`. Because \`k\` is fresh random blinding, the response does not expose \`a\` directly.

This is the same basic idea as covering a real object with a fresh sheet before showing its outline. The verifier sees enough structure to check consistency, but not the secret itself.

If you want a cat analogy, imagine the secret \`a\` is the number of hidden paw taps that opens an automatic feeder. The prover does not reveal the tap count directly. Instead, it mixes it with a fresh random tap pattern and only reveals a response that will check out if, and only if, the secret tap count was real.

## Why the prover cannot fake it easily
Suppose a cheater tries to bluff. It sends the first message \`R\` before seeing the challenge \`e\`. That means it does not know which exact consistency test it will face.

If it somehow manages to answer two different challenges for the same \`R\`, then we can extract the secret:

code
label: Extracting the witness
s1 = k + a * e1
s2 = k + a * e2

Subtract:
s1 - s2 = a * (e1 - e2)

So:
a = (s1 - s2) / (e1 - e2)

That is the classic special soundness story. Two accepting transcripts with the same opening move are enough to recover the witness.

This is why Schnorr is such a beautiful teaching protocol. The extractor is not a mystical black box. You can see it with algebra.

## Why the transcript can be simulated
The privacy story is also elegant.

Instead of generating the transcript in the normal order, a simulator can choose the challenge \`e\` and response \`s\` first, then solve for \`R\`:

code
label: Simulator strategy
Choose random e and s
Set R = [s]P - [e]Q
Output transcript (R, e, s)

That transcript has the same distribution as a real one for an honest verifier.

This is the intuition behind honest-verifier zero-knowledge in Schnorr: a verifier who only sees the final transcript learns nothing it could not already have generated itself.

## Why Schnorr connects to signatures
Schnorr proofs also lead directly to Schnorr signatures through Fiat-Shamir.

Instead of the verifier sending a fresh random challenge, a hash function derives the challenge from the public transcript and the message:

code
label: Fiat-Shamir version
e = H(message, R)
s = k + a * e

Now the transcript becomes a signature-like object.

This is one of the most important bridges in modern cryptography: interactive proofs of knowledge can become non-interactive artifacts when the challenge is replaced carefully.

## The practical caution
Schnorr is simple, but implementations still have sharp edges.

The big ones are:

- bad randomness for \`k\`
- reusing the nonce \`k\`
- weak domain separation in the challenge hash
- mixing transcript contexts incorrectly

If a cat uses the same "secret random paw wiggle" every time it proves access to the feeder, eventually the game is over. Fresh randomness is not decoration. It is security.

note
Schnorr is a model lesson because the same protocol teaches completeness, special soundness, simulation, Fiat-Shamir, and the importance of fresh randomness all at once.

## The mental model to keep
Schnorr is best understood as a consistency trap.

The prover sends a blinded commitment.
The verifier sends a random challenge.
The prover answers in a way that only a witness-holder can make consistent.

Or in cat terms:

- the cat hides the true paw-tap code behind a fresh random flourish
- the verifier picks a random check
- the cat's answer only works if it really knows the feeder code

That is Schnorr.

## Quiz

### Question 1
question: What does the Schnorr protocol prove?
- That a hash function is collision resistant
- That the prover knows a secret discrete logarithm or scalar behind a public key
- That the verifier knows the witness
- That the statement is false
answer: 1
explanation: Schnorr is a proof of knowledge for a hidden scalar whose public image is known.

### Question 2
question: Why is the random value \`k\` important?
- It slows down the verifier
- It blinds the secret so the response does not reveal it directly
- It replaces the witness entirely
- It removes the need for challenges
answer: 1
explanation: The fresh random nonce is what hides the secret inside the final response.

### Question 3
question: What is the verifier's acceptance check in Schnorr trying to confirm?
- That the prover used the same hash as last time
- That the response is algebraically consistent with both the commitment and the public key
- That the witness was published
- That the protocol is transparent
answer: 1
explanation: The verifier checks an algebraic identity tying together the commitment, challenge, response, and public key.

### Question 4
question: Why is Schnorr closely connected to signatures?
- Because the Fiat-Shamir transform can replace the verifier's challenge with a hash-derived one
- Because signatures never need randomness
- Because Schnorr only works on blockchains
- Because the verifier stores the witness after the protocol
answer: 0
explanation: Fiat-Shamir turns the interactive challenge into a non-interactive, hash-based transcript.

## Sources
- David Mandell Freeman, Schnorr Identification and Signatures - https://web.stanford.edu/class/cs259c/lectures/schnorr.pdf
- Claus-Peter Schnorr, Efficient Identification and Signatures for Smart Cards - https://iacr.org/cryptodb/data/paper.php?pubkey=1727
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
`,nm=`---
track: zk-proofs
chapter: Protocols & Building Blocks
chapter_number: 5
lesson_slug: commitments-in-zk
lesson_title: Commitments in ZK
lesson_number: 3
duration: 18 min
badge: Quiz
---

# Intro
Commitments show up everywhere in zero-knowledge because they solve a very basic human problem: how do you fix a value now, keep it hidden for the moment, and reveal or reason about it later without being allowed to change it? In other words, how do you say "I have already chosen my answer" without showing the answer yet? That little move turns out to be one of the most useful moves in modern cryptography.

## Main Content
## The sealed-envelope idea
The classic analogy for a commitment is a sealed envelope.

You write a value on paper, seal it, and hand the envelope over. Later you open it.

Before opening:

- the receiver should not learn the value

After opening:

- you should not be able to pretend the value was something else

That is the whole point of a commitment scheme.

definition
label: Definition - Commitment scheme
A commitment scheme lets a sender commit to a value in a way that hides the value at first, but later binds the sender to that same value when it is opened.

The two key words are:

- hiding
- binding

## Hiding and binding
Hiding means the commitment does not reveal the underlying message.

Binding means the sender cannot later open the same commitment to two different messages.

Different schemes achieve these properties in different ways and with different strengths. Some are perfectly hiding and only computationally binding. Others make the opposite tradeoff.

This tradeoff matters because zero-knowledge systems often use commitments as temporary locked containers for witness-related values.

If the container leaks, privacy suffers.
If the container is easy to reopen dishonestly, soundness suffers.

## Why zero-knowledge systems love commitments
Commitments are useful in ZK because they let the prover place values "on the table" without revealing them yet.

That helps in many situations:

- the prover commits before seeing a challenge
- the verifier later checks consistency
- the protocol reasons about hidden values without exposing them directly

This is especially natural in sigma-style protocols. The prover often needs to commit first and only later answer a random challenge.

The commitment says: "I already chose something real. I am not inventing it after your question."

If a cat says it already picked which hidden cup contains the tuna treat, a commitment is the equivalent of locking that choice in a tamper-proof treat jar before the verifier asks any follow-up questions.

## Pedersen commitments
One especially important example is the Pedersen commitment.

At a high level, it commits to a value \`m\` using fresh randomness \`r\`.

code
label: Pedersen form
C = g^m * h^r

The important thing is not memorizing the exact group notation. The important thing is understanding the properties:

- the random \`r\` hides \`m\`
- the group structure gives useful algebra
- commitments can be added and manipulated in ways that support later proofs

Pedersen commitments are especially loved because they are homomorphic. Roughly speaking, commitments to values can be combined into commitments to sums.

That is extremely useful in proof systems that need to reason about arithmetic relations while keeping underlying values hidden.

## Why homomorphism matters
Suppose you want to prove that one hidden number plus another hidden number equals a third hidden number.

If your commitments support the right algebraic structure, you can often prove this relation without opening the numbers themselves.

This is one of the reasons commitments are not just sealed boxes. They are *structured* sealed boxes.

That makes them more like labeled containers in a laboratory than random locked safes. You can still perform carefully designed checks about what is inside.

In cat terms, you may have three opaque food bowls. You cannot see the exact fish-count in each bowl, but the bowls are marked in a way that still lets you prove the first two together contain the same total fish as the third.

## Commitments versus encryption
It is easy to confuse commitments with encryption, but they solve different problems.

Encryption is mainly about confidentiality from unauthorized readers.

Commitments are about hiding now and fixing the value for later opening or proof.

A commitment usually is not meant to be "decrypted." It is meant to be opened by revealing the original value and randomness, or used inside later proofs.

## Why commitments matter beyond toy protocols
Commitments appear in:

- sigma protocols
- range proofs
- polynomial commitment systems
- anonymous credentials
- confidential transactions
- many SNARK and STARK subroutines

That is why it is worth getting the intuition right early. Commitments are not side characters. They are one of the standard locking mechanisms of the whole ZK world.

note
When you see a prover commit before a challenge, read it as a fairness device. It prevents the prover from changing the story after learning what it will be asked.

## The mental model to keep
A commitment is a cryptographic "I picked already."

It says:

"I am not showing you the value yet, but I am also not allowed to change it later."

Or, in cat form:

"I have already chosen which sock contains the catnip mouse. You do not get to look yet, but I do not get to swap the sock after your question."

That simple locked-choice idea is why commitments are all over zero-knowledge.

## Quiz

### Question 1
question: What are the two main security properties of a commitment scheme?
- Speed and compression
- Hiding and binding
- Interactivity and recursion
- Randomness and transparency
answer: 1
explanation: Commitments should hide the message at first and bind the sender to it later.

### Question 2
question: Why are commitments useful in zero-knowledge protocols?
- They let the prover lock in values before later checks without revealing them immediately
- They eliminate the need for witnesses
- They are the same thing as encryption
- They make all proofs non-interactive
answer: 0
explanation: Commitments are often used so the prover must choose values before seeing the verifier's challenge.

### Question 3
question: What is a key advantage of Pedersen commitments?
- They never use randomness
- They are naturally homomorphic, which helps prove arithmetic relations on hidden values
- They reveal the committed value to the verifier
- They only work in trusted-setup systems
answer: 1
explanation: Pedersen commitments support useful algebraic operations while keeping values hidden.

### Question 4
question: How is a commitment different from encryption?
- Encryption is mainly for later decryption, while commitments are mainly for hidden-yet-fixed values
- There is no difference
- Commitments always reveal more than encryption
- Encryption cannot use randomness
answer: 0
explanation: A commitment is about hiding now while binding for later, not primarily about recoverable confidentiality.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Torben P. Pedersen, Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing - https://iacr.org/cryptodb/data/paper.php?pubkey=1671
- Ivan Damgard, Commitment Schemes and Zero-Knowledge Protocols - https://www.sciweavers.org/publications/commitment-schemes-and-zero-knowledge-protocols
`,rm=`---
track: zk-proofs
chapter: Protocols & Building Blocks
chapter_number: 5
lesson_slug: fiat-shamir-in-practice
lesson_title: Fiat-Shamir in practice
lesson_number: 4
duration: 22 min
badge: Quiz
---

# Intro
Fiat-Shamir is one of the most important tricks in applied cryptography. It takes a protocol that normally needs a live verifier challenge and turns it into a portable transcript that can be checked later by anyone. That sounds almost too convenient, so this lesson focuses on two things at once: why the idea is powerful and why you should never treat it casually.

## Main Content
## The problem it solves
Interactive proofs are elegant, but they are operationally annoying.

They require:

- a live verifier
- fresh randomness from that verifier
- message timing and coordination

That is awkward for signatures, blockchains, asynchronous systems, and proofs that need to be posted, cached, or verified by many parties later.

Fiat-Shamir addresses exactly that pain.

definition
label: Definition - Fiat-Shamir heuristic
The Fiat-Shamir transformation replaces the verifier's random challenge in a public-coin interactive protocol with a hash-derived challenge computed from the statement and prior transcript.

In plain language: instead of waiting for the verifier to send a random challenge, the prover hashes the current transcript and treats that hash output as the challenge.

## The intuitive picture
Suppose the prover would normally send a first message \`a\`, then wait for a random challenge \`e\`, then reply with \`z\`.

Fiat-Shamir says:

code
label: Fiat-Shamir pattern
e = H(statement, a, context)

Now the prover can compute \`e\` by itself and produce the whole transcript at once.

That means the proof becomes a portable object rather than a live conversation.

It is like replacing a live cat judge with a public challenge machine. The cat walks up, puts down its first move, and the machine deterministically computes the challenge from what is already on the table. Later everyone can recompute that same challenge and verify the cat did not cheat.

## Why this is so useful
This transformation is what makes many real systems practical.

It enables:

- non-interactive proofs
- signature schemes from identification protocols
- one-shot proofs for blockchains
- cached and asynchronously verifiable proof objects

Without something like Fiat-Shamir, a lot of modern ZK tooling would be much harder to deploy.

## But the security story changes
This is the crucial warning.

When a live verifier chooses a fresh random challenge, soundness comes from actual external unpredictability.

When the prover computes the challenge from a hash, soundness is no longer argued in exactly the same way. Instead, we rely on models such as the random oracle model, where the hash function is treated as if it were an ideal random function.

That does not automatically make Fiat-Shamir bad. It just means the proof of security has changed shape.

You should read "Fiat-Shamir works" as:

"Fiat-Shamir works under specific modeling assumptions and transcript rules."

Not:

"Any time I replace randomness with hashing, I get security for free."

## Why transcript binding matters
The challenge hash must bind to the right context.

That usually includes:

- the statement being proved
- the prover's first messages
- protocol parameters
- sometimes domain separators, labels, public keys, or application-specific metadata

Why? Because otherwise a proof that was valid in one context may be replayed, repurposed, or ambiguously interpreted in another.

This is not just theory. Many practical cryptographic bugs come from hashing the wrong transcript, omitting domain separation, or forgetting that the proof object may live in multiple environments.

In cat language: if the challenge machine only looks at the cat's first paw wiggle and not which contest or which feeder or which room the proof belongs to, the same wiggle may accidentally work in the wrong place.

## Fiat-Shamir and signatures
The classic example is Schnorr signatures.

The interactive identification protocol becomes a signature when the challenge is derived as:

code
label: Fiat-Shamir for signatures
e = H(message, public_key, commitment)

The result is a non-interactive object that anyone can verify later.

This is one of the deepest recurring patterns in applied cryptography: interaction becomes a transcript, and a transcript becomes a verifiable artifact.

## Why "in practice" matters
In practice, Fiat-Shamir is not just a theorem name. It is an engineering surface.

Designers have to think about:

- exactly what is hashed
- exactly how values are serialized
- whether domains are separated
- whether challenges can be replayed across protocols
- what security model the argument relies on

A proof system that is beautiful on paper can still be fragile if its transcript design is sloppy.

note
Fiat-Shamir is best understood as a compiler from interaction to portability, but like any compiler, the details of the translation matter.

## The mental model to keep
Fiat-Shamir says:

"Instead of asking a live verifier for randomness, derive the challenge from everything that should already be fixed."

That makes proofs portable.
It also means the transcript must be designed with extreme care.

Or, in cat terms:

- the cat no longer waits for a human judge to shout a random challenge
- instead, the challenge comes from a tamper-resistant machine that hashes the contest context and the cat's first move
- the machine only helps if it is reading the full right context

That is Fiat-Shamir in practice.

## Quiz

### Question 1
question: What does Fiat-Shamir replace?
- The witness with a public key
- The verifier's random challenge with a hash-derived one
- The proof with an encryption scheme
- The statement with a commitment
answer: 1
explanation: Fiat-Shamir replaces live verifier randomness with a challenge computed from the transcript and instance.

### Question 2
question: Why is Fiat-Shamir so useful?
- It turns interactive proof flows into portable non-interactive proof objects
- It removes the need for soundness
- It guarantees post-quantum security
- It makes witnesses public
answer: 0
explanation: The main practical benefit is portability and asynchronous verification.

### Question 3
question: Why must the challenge hash include the right context?
- To make the proof longer
- To avoid ambiguous reuse, replay, or cross-protocol confusion
- To reveal more of the witness
- To eliminate all cryptographic assumptions
answer: 1
explanation: Missing context in the transcript hash can create subtle but serious security failures.

### Question 4
question: What is the right mindset about Fiat-Shamir security?
- Any hash-based challenge is automatically secure
- It works only in interactive protocols
- Its security depends on the model, transcript design, and careful binding of all relevant data
- It is just a performance optimization
answer: 2
explanation: Fiat-Shamir is powerful, but its guarantees depend on how the transformation is applied and analyzed.

## Sources
- Amos Fiat and Adi Shamir, How to Prove Yourself: Practical Solutions to Identification and Signature Problems - https://www.cerias.purdue.edu/apps/reports_and_papers/view/995
- David Mandell Freeman, Schnorr Identification and Signatures - https://web.stanford.edu/class/cs259c/lectures/schnorr.pdf
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
`,om=`---
track: zk-proofs
chapter: Recursion & Composition
chapter_number: 6
lesson_slug: recursive-proofs
lesson_title: Recursive proofs
lesson_number: 1
duration: 26 min
badge: Quiz
---

# Intro
Recursive proofs are one of the biggest conceptual jumps in modern ZK, but the core idea is surprisingly clean: a proof can verify another proof. Once that is possible, long chains of work can be compressed into one final object. This lesson focuses on the intuition first, because once the "proof of a proof" idea clicks, a lot of the modern recursion literature becomes much easier to read.

## Main Content
## The basic idea
Normally, a proof certifies some computation or statement.

A recursive proof adds one more layer:

"I am proving not only that this statement is true, but also that an earlier proof was valid."

definition
label: Definition - Recursive proof
A recursive proof system is one in which the statement being proved can include verification of another proof produced by the same or a compatible proof system.

That sounds self-referential, but it is extremely useful.

## Why anyone wants this
Suppose you have a very long computation broken into many stages.

Without recursion, you might produce one proof per stage, and the verifier would still have to process many proofs.

With recursion, you can do something like this:

code
label: Recursive compression pattern
Proof 1 proves step 1
Proof 2 proves step 2 and verifies Proof 1
Proof 3 proves step 3 and verifies Proof 2
...
Final proof proves the whole chain

The verifier checks the final proof and inherits trust in all the earlier ones.

That is why recursion feels like compression with memory.

## The key engineering trick
To verify a proof inside another proof, the proof system needs a circuit or constraint system that can express the verifier logic of the inner proof.

That is the hard part conceptually:

- the verifier becomes part of the statement
- verification itself becomes another computation to prove

Once you see that, recursion stops feeling mystical. It is just one computation checking another.

If a cat academy gives every obstacle run a signed certificate, recursion is like having today's certificate say:

"Run 57 was valid, and by the way, I also checked yesterday's certificate for run 56."

Keep doing that and one final certificate can summarize a long training history.

## Why recursion helps blockchains and rollups
Recursive proofs matter a lot in practice because they reduce repeated verification burden.

In rollups, for example:

- many blocks may each have their own validity proof
- recursively combining them can reduce on-chain verification work
- one final proof can finalize many batches at once

That is why recursion is not just a pretty theorem. It changes system architecture.

It shifts the question from:

"Can we prove each step?"

to:

"Can we keep compressing the proof history as the system keeps running?"

## Recursion is not the same as aggregation
People often blur recursion and aggregation, but they are not identical.

Aggregation usually means combining many proofs into one final proof object.

Recursion means a proof actually verifies one or more other proofs as part of its statement.

Many systems use both ideas together, but it helps to keep the distinction clear:

- aggregation is about combining
- recursion is about proof-verifying-proof structure

## Why trusted setup used to be a headache here
Historically, recursive proof composition was especially awkward because many systems needed:

- trusted setup
- carefully matched curve cycles
- expensive verifier logic

Later work such as Halo showed ways to do recursive composition without a trusted setup, which was a major step forward.

So when you hear that recursion is "important," part of that importance is that it took years to make it practical enough to deploy.

note
Recursive proofs are not magic size reducers that come for free. They introduce circuit costs, implementation complexity, and design constraints. Their value comes from the tradeoff, not from costlessness.

## The mental model to keep
Recursive proofs are like nesting receipts.

One receipt does not just say, "today's purchase was valid."
It also says, "I checked the previous receipt, and it was valid too."

Keep doing that, and one final receipt can stand for a whole chain of prior activity.

Or, in cat terms:

- each day, the cat academy issues a ribbon saying that day's trial passed
- the next day's ribbon also validates the previous ribbon
- eventually one ribbon summarizes a long streak of valid cat trials

That is recursion.

## Quiz

### Question 1
question: What is a recursive proof, at a high level?
- A proof that hides all public inputs
- A proof whose statement can include verification of another proof
- A proof that never uses arithmetic
- A proof that must be interactive
answer: 1
explanation: Recursion means proof verification itself becomes part of a new proof statement.

### Question 2
question: Why are recursive proofs useful?
- They let long chains of work be compressed into smaller final verification effort
- They eliminate prover cost
- They make all systems transparent
- They replace witnesses
answer: 0
explanation: The main value is compressing many stages of verified work into a final proof that is cheaper to check.

### Question 3
question: What is the key technical requirement behind recursion?
- The proof system must be able to express verification of earlier proofs inside a circuit or constraint system
- The verifier must reveal its randomness
- The proof must be longer than the computation
- The witness must be public
answer: 0
explanation: Recursion works because verifying one proof is itself encoded as another computation.

### Question 4
question: Which statement is most accurate?
- Recursion and aggregation are identical
- Recursion always removes every engineering tradeoff
- Recursion is about proof-verifying-proof structure, while aggregation is about combining many proofs
- Recursive proofs only matter for toy examples
answer: 2
explanation: The two ideas often work together, but they are not the same thing.

## Sources
- Sean Bowe, Jack Grigg, Daira Hopwood, Recursive Proof Composition without a Trusted Setup - https://eprint.iacr.org/2019/1021
- Ethereum.org, Zero-knowledge rollups - https://ethereum.org/developers/docs/scaling/zk-rollups/
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
`,sm=`---
track: zk-proofs
chapter: Recursion & Composition
chapter_number: 6
lesson_slug: proof-aggregation
lesson_title: Proof aggregation
lesson_number: 2
duration: 20 min
badge: Quiz
---

# Intro
Proof aggregation is about one thing: many proofs are nice, but one proof is nicer. When a system produces huge numbers of valid proofs, the next challenge is not only correctness. It is packaging. Aggregation asks whether multiple proof objects can be compressed into one smaller verification target. This matters a lot in blockchains, batch systems, and any place where verification cost repeats over and over.

## Main Content
## The core question
Suppose you have 1,000 valid proofs.

Without aggregation, a verifier may need to check each one separately.

Aggregation asks:

"Can we combine these into one proof object that is still trustworthy?"

definition
label: Definition - Proof aggregation
Proof aggregation is the process of combining multiple proofs or proof statements into a smaller proof object whose verification certifies all of them together.

The exact meaning depends on the proof family, but the big goal stays the same: reduce total verification burden.

## Why this matters in real systems
If a system verifies one proof once, the savings from aggregation may be small.

If a system verifies thousands or millions of proofs repeatedly, aggregation can be the difference between:

- practical infrastructure
- unusable bottlenecks

This is why aggregation matters in:

- rollups
- blockchain bridges
- batch settlement systems
- storage proof systems
- recursive proof pipelines

Think of a school with 5,000 cat exam certificates. If the dean must inspect each certificate separately every morning, that does not scale well. A single authenticated master summary is often much more practical.

## Aggregation is not just batching
People sometimes use "batching" and "aggregation" interchangeably, but they are not identical.

Batch verification usually means verifying many proofs together more efficiently, while still conceptually handling many proof objects.

Aggregation usually means producing a new, smaller proof object that stands in for the originals.

Both aim to lower cost, but aggregation is usually the stronger compression move.

## The tradeoff
Aggregation shifts work around.

Usually:

- the prover or aggregator does more work
- the verifier does less work

That is often exactly what systems want. Verification may happen on-chain or on constrained devices, while aggregation can happen off-chain where more resources are available.

So aggregation is not "free efficiency." It is an efficiency trade:

"Make proof production or combination harder so final verification becomes cheaper."

## Recursive aggregation
One powerful way to aggregate proofs is through recursion.

For example:

- take a set of block proofs
- prove that each one verifies correctly
- fold them into one final recursive proof

This is common in rollup discussions because it lets many blocks be finalized through a single final validity proof.

But aggregation does not always require full recursion in the most general sense. Some systems use dedicated aggregation arguments tuned to specific proof families.

## A concrete example: SnarkPack
SnarkPack is a well-known example of practical SNARK aggregation for Groth16 proofs.

Its importance is not that everyone must memorize its internals. Its importance is that it shows aggregation can be a serious deployment tool, not only a theoretical curiosity.

The broad lesson is:

- aggregation can be layered on top of existing proof systems
- it can dramatically reduce verifier effort
- it becomes attractive exactly when proof counts get large

## What aggregation does not solve
Aggregation does not magically fix every cost.

It does not:

- make proving free
- remove soundness assumptions
- eliminate data availability issues
- erase the cost of generating the original proofs

It mostly changes the shape of the verification surface.

In cat terms, combining 1,000 cat certificates into one master certificate does not remove the need for the original cat exams. It only changes how the dean checks the final record.

note
When someone claims an aggregation breakthrough, ask which metric improved: proof size, verifier time, number of pairings, on-chain cost, or total end-to-end proving work. "Aggregation" alone is not a complete performance story.

## The mental model to keep
Proof aggregation is best thought of as proof packaging.

You start with many valid pieces of evidence and end with one compressed evidence object that says:

"All of these checked out."

Or, in cat terms:

- 500 cats each passed a jumping test
- instead of carrying 500 ribbons, the academy issues one sealed ledger page certifying the whole batch

That is aggregation.

## Quiz

### Question 1
question: What is proof aggregation trying to do?
- Replace witnesses with public keys
- Combine multiple proofs into a smaller verification target
- Make proofs interactive again
- Eliminate the need for soundness
answer: 1
explanation: Aggregation is about compressing many proof objects or statements into a smaller one that is cheaper to verify.

### Question 2
question: Why is aggregation especially useful in systems like rollups?
- Because they often generate many proofs and want to reduce repeated verification cost
- Because rollups never use recursion
- Because aggregation makes calldata unnecessary
- Because it removes the need for public inputs
answer: 0
explanation: Aggregation matters most when many proofs would otherwise create a verification bottleneck.

### Question 3
question: What is a good distinction between batching and aggregation?
- They are always the same
- Batching can mean verifying many proofs together, while aggregation usually means producing a new combined proof object
- Aggregation never helps verification
- Batching requires trusted setup and aggregation does not
answer: 1
explanation: Aggregation is usually the stronger "compress into one object" move.

### Question 4
question: What does aggregation usually trade?
- More prover or combiner work for less verifier work
- More verifier work for less prover work
- Zero-knowledge for completeness
- Interactivity for soundness
answer: 0
explanation: Aggregation typically shifts effort toward the producer side so the final checker has less to do.

## Sources
- Nicolas Gailly, Mary Maller, Anca Nitulescu, SnarkPack: Practical SNARK Aggregation - https://eprint.iacr.org/2021/529
- Sean Bowe, Jack Grigg, Daira Hopwood, Recursive Proof Composition without a Trusted Setup - https://eprint.iacr.org/2019/1021
- Ethereum.org, Zero-knowledge rollups - https://ethereum.org/developers/docs/scaling/zk-rollups/
`,im=`---
track: zk-proofs
chapter: Recursion & Composition
chapter_number: 6
lesson_slug: folding-schemes
lesson_title: Folding schemes
lesson_number: 3
duration: 28 min
badge: Quiz
---

# Intro
Folding schemes are one of the big modern ideas in recursive proving. The name can sound abstract, but the intuition is friendly: instead of proving many instances separately, we repeatedly combine them into one smaller algebraic object that preserves what still needs to be checked. Folding is less about "making things disappear" and more about carrying many obligations inside one compressed state.

## Main Content
## Why people got excited about folding
Older recursive proof constructions were powerful, but often heavy. They could require expensive verifier circuits, careful curve choices, or recursion overhead that made engineering harder.

Folding schemes changed the conversation by offering a simpler path for incrementally verifiable computation and recursion.

The high-level idea is:

- start with two instances that need to be checked
- combine them into one related instance
- preserve correctness in a way that lets the process repeat

definition
label: Definition - Folding scheme
A folding scheme is a method that reduces checking multiple instances of a relation to checking a single combined instance, while preserving the information needed for later verification.

That is why the word "folding" fits. You are not throwing information away. You are compressing it into a smaller carried form.

## The easiest intuition
Imagine two homework sheets that each contain unresolved obligations. Instead of carrying both around forever, you fold them into one new sheet that summarizes what still needs to be justified. If the folded sheet is valid, it stands in for both earlier sheets.

In cat terms, imagine two separate cat obstacle reports. A folding step creates one summary report that still captures whether both earlier runs were valid. Later you can fold that summary together with another report again.

This repeated compression is what makes folding so useful for long-running computations.

## Why "relaxed" instances often appear
Many folding-based systems do not fold ordinary constraint instances directly in the most naive way. Instead, they use a relaxed relation.

Why? Because when you combine two instances algebraically, the result often needs a little extra flexibility so that the folded object still lands inside a meaningful relation.

You do not need all the formulas here. The conceptual point is:

- the folded object may not look exactly like a plain original instance
- so the protocol defines a slightly broader kind of instance that is still checkable

This is common in Nova-style work. The relaxation is not a hack. It is what makes repeated folding possible.

## Folding versus proving
It helps to separate two roles:

- folding reduces many obligations to one
- a proof system later certifies the validity of the folded state

That means folding is not automatically the entire proof system. It is a core primitive used inside larger recursive constructions.

This is why the Nova paper describes folding as a weaker and simpler primitive that can be used to realize IVC.

## Why folding is so attractive for IVC
Incrementally verifiable computation wants a prover to keep extending a long computation one step at a time while maintaining a compact proof state.

Folding is perfect for that because each new step can be merged into the carried state rather than forcing the prover to start over.

The intuition is almost like financial bookkeeping:

- old obligations are not re-checked from scratch every time
- they are rolled forward into a fresh summary that still remains accountable

That is why folding feels more "streaming-friendly" than many older recursive approaches.

## Nova and HyperNova
Nova made folding schemes famous in the modern recursion discussion by showing an efficient path to recursive arguments and IVC without relying on SNARKs in the old style.

Later systems such as HyperNova generalized the picture further, handling more customizable constraint systems and improving flexibility for things like machine execution traces.

The important conceptual lesson is not to memorize every protocol name. It is to notice the shift:

- recursion is no longer only "proof verifies proof"
- it can also be organized around repeatedly folding algebraic state

note
When people say folding is "simpler" than earlier recursive approaches, they usually mean the primitive itself is cleaner and often cheaper to realize, not that the full engineering stack becomes trivial.

## The mental model to keep
Folding is like compressing a pile of unfinished receipts into one running tab that still honestly represents everything owed.

Or, in cat form:

- two cat training logs become one folded training log
- that folded log can later absorb another one
- eventually one compact object stands in for a long history of runs

That is the core beauty of folding schemes: repeated compression without losing accountability.

## Quiz

### Question 1
question: What is the main idea behind a folding scheme?
- Reveal the witness in smaller pieces
- Reduce multiple instances of a relation to one combined instance
- Replace algebra with hashing entirely
- Make proofs interactive again
answer: 1
explanation: Folding compresses several obligations into one carried algebraic state.

### Question 2
question: Why do folding-based systems often use relaxed instances?
- Because the verifier is lazy
- Because the combined folded object often needs a slightly broader relation to remain meaningful and checkable
- Because relaxed instances reveal more data
- Because they remove the need for soundness
answer: 1
explanation: Relaxation is what allows repeated algebraic combination without breaking the relation structure.

### Question 3
question: Why is folding especially useful for incrementally verifiable computation?
- It lets the system keep rolling forward proof state instead of starting from scratch each step
- It removes all prover work
- It guarantees constant proof size in every possible system
- It works only for trusted-setup SNARKs
answer: 0
explanation: Folding is attractive because it naturally supports step-by-step carried verification state.

### Question 4
question: Which statement is most accurate?
- Folding is always the full proof system by itself
- Folding is a useful primitive inside larger recursive and IVC constructions
- Folding means the verifier learns all intermediate states
- Folding and commitment schemes are the same thing
answer: 1
explanation: Folding is a powerful building block, but usually part of a larger proving design.

## Sources
- Abhiram Kothapalli, Srinath Setty, Ioanna Tzialla, Nova: Recursive Zero-Knowledge Arguments from Folding Schemes - https://eprint.iacr.org/2021/370
- Abhiram Kothapalli, Srinath Setty, HyperNova: Recursive Arguments for Customizable Constraint Systems - https://eprint.iacr.org/2023/573
- Microsoft Nova repository README - https://github.com/microsoft/Nova
`,am=`---
track: zk-proofs
chapter: Recursion & Composition
chapter_number: 6
lesson_slug: incrementally-verifiable-computation
lesson_title: Incrementally verifiable computation
lesson_number: 4
duration: 24 min
badge: Quiz
---

# Intro
Incrementally verifiable computation, or IVC, sounds like a big research term, but the basic idea is practical and beautiful: instead of proving a whole long computation in one giant shot, prove it as it unfolds, while keeping a compact proof state the whole time. If recursive proofs are about proof chains, IVC is about proof chains that grow with the computation itself.

## Main Content
## The motivating problem
Suppose a computation has many steps:

- a long machine execution
- repeated state updates
- a sequential process that may keep running

If you wait until the very end and then prove everything from scratch, proving can become heavy and inflexible.

IVC asks a better question:

"Can we maintain a proof that covers the first \`i\` steps, then cheaply update it to cover the first \`i+1\` steps?"

definition
label: Definition - Incrementally verifiable computation
Incrementally verifiable computation is a framework in which a prover maintains a compact proof state that can be updated as a sequential computation advances, so that the final proof certifies the whole execution.

This makes IVC feel like a running ledger rather than a last-minute audit.

## The update pattern
The conceptual pattern looks like this:

code
label: IVC flow
pi_0 proves the initial state
pi_1 proves step 1 and links to pi_0
pi_2 proves step 2 and links to pi_1
...
pi_t proves the first t steps

The crucial idea is that each update should be much cheaper than rebuilding the entire proof history.

In cat terms, imagine a cat walking across 10,000 stepping stones. IVC is like updating one running certificate after each jump instead of reconstructing the whole jump history from scratch every time a new step happens.

## Why this matters
IVC is useful when computation is:

- long
- sequential
- naturally stateful
- easier to verify incrementally than all at once

That is why IVC is such a natural fit for recursive proving research, zkVMs, and systems that want continuously compressible computation.

## IVC versus ordinary recursion
Ordinary recursive proofs can already give you proof-of-proof composition. IVC goes one step further in viewpoint.

It emphasizes:

- the computation is unfolding over time
- the proof is carried forward at each step
- the final proof is the latest version of an evolving certified history

So recursion is often part of IVC, but IVC is the workflow idea: keep the proof alive as the computation grows.

## Why Nova made IVC feel practical
Nova is important because it framed IVC around folding schemes and achieved very low recursion overhead compared with prior approaches.

That does not mean IVC suddenly became trivial. It means the cost profile became much more compelling:

- small per-step overhead
- cleaner recursive structure
- no trusted setup in the core construction

This is why modern discussions of IVC often immediately lead into Nova, SuperNova, HyperNova, and related systems.

## What the verifier gets
At the end, the verifier usually does not read the whole history. It checks the final carried proof and the claimed output.

That final proof says, in effect:

"I certify that the system started in the right place and every incremental step followed the rules until this final result."

This is what makes IVC appealing for proving long-running programs or repeated state transitions.

## Why this changes system design
If you know a system can maintain verifiability incrementally, you may design it differently from the start.

Instead of thinking:

"How do I prove this giant finished artifact?"

you start thinking:

"How do I make each state transition easy to fold into the running proof state?"

That is a very different design mindset, and it is one reason zkVM and recursion research feel so tied together.

note
IVC is not only about smaller proofs. It is about a different temporal structure for proving. The proof lives alongside the computation instead of appearing only at the end.

## The mental model to keep
IVC is like a train ticket that gets officially stamped at every station.

You do not throw away the ticket and reissue a whole new travel history every time the train moves. You carry one certified record forward.

Or, in cat language:

- a cat crosses one rooftop at a time
- after each leap, the referee updates one running badge of valid movement
- the final badge stands for the whole rooftop journey

That is incrementally verifiable computation.

## Quiz

### Question 1
question: What is the main goal of incrementally verifiable computation?
- To prove only the final output with no relation to intermediate steps
- To maintain a proof state that can be updated as a sequential computation advances
- To remove the need for recursion
- To reveal the witness in stages
answer: 1
explanation: IVC keeps a running proof that grows with the computation instead of restarting from scratch.

### Question 2
question: Why is IVC attractive for long computations?
- Because the prover can update a compact proof over time rather than rebuilding the whole history every step
- Because it makes the witness public
- Because it only works for tiny circuits
- Because it avoids all algebraic commitments
answer: 0
explanation: IVC is valuable when proof state can evolve along with the computation.

### Question 3
question: How is IVC related to recursion?
- It usually uses recursive ideas, but emphasizes carrying proof state forward as the computation unfolds
- It is the opposite of recursion
- It proves that recursion is impossible
- It never involves proof verification
answer: 0
explanation: IVC is a recursive-style proving workflow focused on sequential updates.

### Question 4
question: What does the final IVC proof usually represent?
- Only the last step
- A certification that the computation started correctly and each incremental step followed the rules
- A public copy of the full trace
- A hash of the proving key
answer: 1
explanation: The final proof stands for the whole carried history, not just the last transition in isolation.

## Sources
- Abhiram Kothapalli, Srinath Setty, Ioanna Tzialla, Nova: Recursive Zero-Knowledge Arguments from Folding Schemes - https://eprint.iacr.org/2021/370
- Sean Bowe, Jack Grigg, Daira Hopwood, Recursive Proof Composition without a Trusted Setup - https://eprint.iacr.org/2019/1021
- Abhiram Kothapalli, Srinath Setty, HyperNova: Recursive Arguments for Customizable Constraint Systems - https://eprint.iacr.org/2023/573
`,lm=`---
track: zk-proofs
chapter: Recursion & Composition
chapter_number: 6
lesson_slug: zk-proving-vms
lesson_title: ZK proving VMs
lesson_number: 5
duration: 23 min
badge: Quiz
---

# Intro
Hand-written circuits are powerful, but they are also narrow and labor-intensive. ZK proving VMs try to change the developer experience by giving us something closer to a real machine model: write a program for a virtual machine, execute it, and produce a proof that the execution was correct. This lesson explains why that feels so different from classic circuit thinking.

## Main Content
## From circuits to machines
Traditional ZK workflows often start by compiling a specific computation into a circuit or constraint system.

That is fine for fixed relations, but it can become painful when you want general-purpose computation.

A zkVM changes the framing:

- define a virtual machine with an instruction set
- run a program on that machine
- prove the execution was faithful

definition
label: Definition - zkVM
A zero-knowledge virtual machine is a proving system that generates proofs of correct execution for programs expressed against a virtual machine model or instruction set.

The shift is subtle but huge. Instead of proving one custom hand-built circuit, you prove that a machine executed code correctly.

## Why this is attractive
zkVMs appeal to builders because they feel more like normal software engineering.

You often get:

- a familiar execution model
- a reusable proving backend
- less need to design every application as a bespoke circuit

That does not make them automatically cheaper. Often they are not. But they can be much more ergonomic.

It is like the difference between building a custom cat obstacle course for every single training routine and building one cat gym with a general set of rules that can host many different routines.

## What gets proved
At the deepest level, a zkVM still proves an execution trace.

The system must show things like:

- the program started from the claimed code image
- instructions executed according to the VM rules
- state transitions were correct
- the public output was the genuine result

So a zkVM is not escaping algebra. It is packaging algebra around a machine abstraction.

## A concrete example: RISC Zero
RISC Zero describes its system as a zero-knowledge verifiable general computing platform based on zk-STARKs and the RISC-V microarchitecture.

Its README gives a nice practical mental model:

- code is compiled into a method
- the guest executes inside the zkVM
- the guest writes public output to a journal
- a receipt is produced
- the verifier checks that receipt

The lovely part of that design is that the receipt becomes the proof-carrying object, while the journal becomes the official public output.

That is a very usable story for developers.

## Guest, host, journal, receipt
These terms are worth understanding because they make the zkVM workflow concrete.

In the RISC Zero model:

- the guest is the code running inside the virtual machine
- the host runs the proving process outside
- the journal is the append-only public output log
- the receipt is the proof object

This is much easier to picture than a giant unnamed witness vector.

If a cat computation is running inside a machine, the journal is the official note that says, "the answer is 7 tuna tokens," and the receipt is the cryptographic certificate that this note really came from correct execution.

## Why zkVMs still have tradeoffs
zkVMs are not free generality.

They often trade:

- more overhead than highly optimized custom circuits
- more generality and easier programmability
- different proving-time and memory behavior

They also need a strong execution model and proving stack under the hood, often involving traces, recursion, and serious low-level engineering.

So the right attitude is not "zkVMs replace everything." It is "zkVMs are a different design point."

## Cairo and other proving-machine approaches
Cairo is another important example of the proving-machine mindset. Instead of only thinking in terms of circuits, it gives developers a language and execution model built with STARK-friendly proving in mind.

This matters because broad adoption depends on programmability. A proof system with no developer path is like a brilliant cat feeder with no food slot.

The underlying cryptography matters, but so does the interface through which humans actually build.

note
When evaluating a zkVM, ask two separate questions: how nice is the programming model, and how expensive is the proving model? Those are related, but they are not the same metric.

## The mental model to keep
A zkVM is a machine-shaped proof interface.

You do not hand-assemble one proof relation for every task. You target a proving machine, run code inside it, and obtain a verifiable execution artifact.

Or, in cat terms:

- instead of building one special tunnel for one special cat trick
- you build a general cat simulator with rules, logs, and receipts
- then many different tricks can be proved on top of that machine

That is the promise of zk proving VMs.

## Quiz

### Question 1
question: What is a zkVM trying to provide?
- A machine model whose executions can be proved correct
- A proof system that never uses traces
- A replacement for public inputs
- A way to avoid cryptography entirely
answer: 0
explanation: A zkVM offers a general machine-like abstraction for proving execution.

### Question 2
question: Why do many builders find zkVMs attractive?
- They often feel closer to normal software development than writing bespoke circuits for every application
- They make proving free
- They eliminate all trusted assumptions
- They do not need witnesses
answer: 0
explanation: The appeal is largely about programmability and reusability.

### Question 3
question: In the RISC Zero model, what is the journal?
- The secret witness store
- The official public output log of the guest execution
- The proving key
- The trusted setup transcript
answer: 1
explanation: The journal is the public output committed by the proven execution.

### Question 4
question: What is a fair tradeoff statement about zkVMs?
- They automatically dominate custom circuits on every metric
- They trade some efficiency for more generality and developer ergonomics
- They avoid all algebra under the hood
- They only work for toy programs
answer: 1
explanation: zkVMs are a different design point, not a universal free lunch.

## Sources
- RISC Zero README - https://github.com/risc0/risc0
- RISC Zero zkVM crate documentation - https://docs.rs/risc0-zkvm/latest/risc0_zkvm/
- Eli Ben-Sasson et al., Cairo - a Turing-complete STARK-friendly CPU architecture for verifiable computation - https://eprint.iacr.org/2021/1063.pdf
`,cm=`---
track: zk-proofs
chapter: Applications & Security
chapter_number: 7
lesson_slug: zk-identity-and-credentials
lesson_title: ZK identity & credentials
lesson_number: 1
duration: 18 min
badge: Quiz
---

# Intro
Identity is one of the most natural applications of zero-knowledge because real-world identity is full of over-sharing. To prove you are old enough, a member, licensed, or authorized, you often have to reveal much more than the verifier actually needs. Zero-knowledge credentials try to fix that. They let people prove *just enough* and nothing more.

## Main Content
## The over-sharing problem
Traditional credentials are blunt instruments.

If you show an ID card to prove you are over 18, you may also reveal:

- your full name
- your exact birth date
- your address
- your license number

That is far more information than the verifier needed.

Zero-knowledge identity systems try to narrow the disclosure to the actual question being asked.

Instead of:

"Here is my whole card."

the prover can say:

"I can prove I satisfy the rule."

## Selective disclosure
Selective disclosure is the first key idea.

definition
label: Definition - Selective disclosure
Selective disclosure is the ability to reveal only a chosen subset of credential information while keeping the rest hidden.

This matters because most verification tasks are small.

A website may need:

- proof that you are in a region
- proof that you are over a threshold age
- proof that you belong to an organization

It usually does not need your entire personal record.

If a cat club only wants to know whether Baron Paws is a paid member, it should not have to see Baron Paws's full nap history, snack budget, and emergency feather-toy contacts.

## Anonymous credentials
The stronger version of this idea is anonymous credentials.

Here the goal is not only selective disclosure, but also unlinkability and privacy across uses.

The verifier should ideally learn:

- the credential is valid
- the revealed attributes are true

but not:

- a persistent identifier
- the full hidden credential contents
- an easy way to link multiple presentations together

This is why the anonymous credential literature mattered so much long before modern blockchains made ZK trendy.

## Why randomization matters
If every proof presentation looked identical, verifiers could track users even when they disclosed almost nothing.

That is why randomizable and unlinkable proof systems matter. A holder should often be able to generate a fresh proof presentation each time.

That way, proving the same fact twice does not automatically create a stable tracking handle.

This is an underrated part of privacy. Sometimes the issue is not what you reveal in one proof. It is whether many proofs can be stitched together into a profile.

## BBS and modern selective disclosure
The W3C BBS cryptosuite is a useful modern example because it explicitly targets selective disclosure for verifiable credentials.

The specification describes BBS signatures as supporting zero-knowledge proof disclosures and selective disclosure of subsets of information from an original information set.

That makes the high-level workflow very natural:

- an issuer signs a full credential
- a holder later derives a proof revealing only chosen statements
- a verifier checks the derived proof

This is a strong modern expression of the old anonymous-credentials dream.

## Why this is not only about identity cards
Credential thinking applies far beyond government IDs.

It can be used for:

- university status
- access permissions
- membership proofs
- compliance statements
- professional certifications
- sybil resistance systems

The common pattern is the same: prove an attribute or relation without spilling the whole record.

## The tradeoffs
ZK credentials are powerful, but real systems still have to choose:

- which attributes are signed
- how revocation works
- how holders derive proofs
- how verifiers phrase requests
- what metadata might still leak outside the proof

So the right mental model is not "zero-knowledge solves identity." It is "zero-knowledge gives us much better primitives for privacy-preserving identity."

note
A credential system can use zero-knowledge proofs and still leak through metadata, timing, reuse patterns, or badly designed application flows. Proof privacy is necessary, not automatically sufficient.

## The mental model to keep
ZK identity is about proving properties instead of surrendering records.

Instead of handing over the whole certificate, the holder proves the exact fact the verifier asked for.

Or, in cat form:

- the cat club asks whether Lady Muffin is a member in good standing
- Lady Muffin proves membership
- the club does not get her full veterinary file, scratch statistics, or preferred tuna brand

That is why zero-knowledge belongs in credential systems.

## Quiz

### Question 1
question: What problem does selective disclosure try to solve?
- Proofs that are too short
- The habit of revealing more credential data than a verifier actually needs
- The absence of witnesses
- The need for trusted setup in every system
answer: 1
explanation: Selective disclosure is about reducing over-sharing by revealing only the needed subset of information.

### Question 2
question: What is an anonymous credential system trying to protect beyond correctness?
- Compression only
- Linkability and unnecessary identity exposure
- Proof size only
- The verifier's bandwidth
answer: 1
explanation: Anonymous credentials aim to keep credential use private and hard to correlate across presentations.

### Question 3
question: Why does randomization matter in credential proofs?
- It can help prevent multiple uses of the same credential from being trivially linked together
- It makes the credential public
- It removes the need for issuers
- It ensures the verifier learns the full record
answer: 0
explanation: Freshly randomized presentations make repeated use harder to track.

### Question 4
question: What is a good high-level description of BBS-style selective disclosure?
- The issuer signs a full credential, and the holder can later derive proofs revealing only chosen statements
- The verifier edits the credential before checking it
- The system only works for one attribute at a time and can never hide the rest
- The holder must reveal the original signature every time
answer: 0
explanation: That issuer-holder-verifier flow is the core selective-disclosure picture.

## Sources
- Jan Camenisch, Thomas Gross, Efficient Attributes for Anonymous Credentials - https://research.ibm.com/publications/efficient-attributes-for-anonymous-credentials
- Mira Belenkiy et al., Randomizable Proofs and Delegatable Anonymous Credentials - https://www.microsoft.com/en-us/research/publication/randomizable-proofs-and-delegatable-anonymous-credentials/
- W3C, BBS Cryptosuite v2023 - https://www.w3.org/TR/vc-di-bbs/
`,um=`---
track: zk-proofs
chapter: Applications & Security
chapter_number: 7
lesson_slug: zk-rollups-and-validity
lesson_title: ZK rollups & validity proofs
lesson_number: 2
duration: 21 min
badge: Quiz
---

# Intro
ZK rollups are one of the most visible real-world uses of proof systems because they turn a deep cryptographic idea into a concrete scaling strategy. Instead of having Ethereum re-execute everything directly, the rollup does work off-chain and posts a proof that the work was done correctly. This lesson explains the architecture in practical terms.

## Main Content
## The high-level picture
A ZK rollup moves transaction execution off-chain and keeps cryptographic accountability on-chain.

The rollup operator or prover:

- executes many transactions off-chain
- updates the rollup state
- posts compressed data and a validity proof to L1

The L1 contract accepts the new state only if the proof verifies.

definition
label: Definition - Validity proof
A validity proof is a cryptographic proof that a proposed state transition was produced by correct execution of the rollup's rules.

That is why ZK rollups are often described as "prove correctness instead of replaying computation."

## State roots and state commitments
Rollup state is usually summarized by a state root, often backed by a Merkle tree or similar commitment structure.

After a batch of transactions:

- balances change
- nonces change
- maybe contract storage changes
- a new state root is produced

The proof's job is not merely to say, "trust me, the new root is fine."
It must show that the new root really followed from valid state updates.

## Why Ethereum still matters
Ethereum is not only a place to post proofs. It acts as:

- the settlement layer
- the place that stores key public data
- the layer that enforces proof verification

The Ethereum docs make this point clearly: the rollup may execute off-chain, but finality depends on the L1 contract accepting the validity proof.

This means the rollup inherits important security properties from Ethereum instead of inventing them from scratch.

## Data availability
One subtle but crucial part of rollup design is data availability.

Even if the proof certifies the state transition, users still need enough published data to reconstruct or continue the rollup state independently.

That is why rollup discussions are never only about proofs. They are also about what transaction or state data gets posted, compressed, or otherwise made available.

If a cat accountant posts a perfectly valid final snack total but never reveals enough records for anyone else to reconstruct the snack ledger, something is still wrong.

## Why validity proofs are powerful
The main win is that Ethereum does not need to re-execute every off-chain step. It only verifies the succinct proof.

That changes the scaling profile:

- heavy execution can happen elsewhere
- final verification on L1 stays much cheaper
- many transactions can be certified as one batch

This is why ZK rollups are often described as hybrid systems. They move work off-chain, but they do not move trust entirely off-chain.

## Recursive proofs in rollups
Recursive proofs become especially useful here.

The Ethereum documentation points out that single-block proofs limit throughput. If each batch finalizes independently, there is still repeated verification overhead.

Recursive aggregation can help by combining many batch proofs into one final proof. That lets one on-chain verification stand for several rollup blocks.

This is one reason recursion matters so much in real deployments. It is not just elegant theory. It directly affects throughput and cost.

## Why operators still matter
Many rollups still use a centralized or semi-centralized operator or sequencer for efficiency. That introduces practical issues:

- censorship risk
- operator liveness concerns
- submission delays

The proof system protects correctness, but system design still has to address who gets to order transactions and how users escape if the operator misbehaves.

So a validity proof is powerful, but it does not by itself solve every governance or liveness question.

note
The strongest beginner mistake here is to think "the proof solves the whole rollup." It solves correctness of state transitions. Other system properties still need separate design.

## The mental model to keep
A ZK rollup is like a busy cat market where all trading happens in a side room, but every so often the market manager posts:

- the new official inventory summary
- a compact proof that the summary came from valid trades

The main square does not replay every trade. It checks the proof and updates the official record.

That is the ZK rollup model.

## Quiz

### Question 1
question: What does a validity proof do in a ZK rollup?
- It proves the proposed new state came from valid execution of the rollup rules
- It reveals every private input in the batch
- It replaces the rollup state root
- It removes the need for Ethereum
answer: 0
explanation: The validity proof certifies correctness of the off-chain state transition.

### Question 2
question: Why are ZK rollups attractive for scaling?
- They let L1 verify a succinct proof instead of replaying all off-chain computation
- They eliminate all on-chain costs
- They never need public data
- They avoid state commitments
answer: 0
explanation: The main efficiency gain comes from cheap verification of a compact proof.

### Question 3
question: Why is data availability still important in rollups?
- Because correctness alone is not enough if users cannot reconstruct or continue the state independently
- Because proofs do not exist
- Because calldata is encrypted
- Because validity proofs automatically publish the whole state
answer: 0
explanation: Users still need enough data to verify and interact with the rollup system.

### Question 4
question: How do recursive proofs help rollups?
- They make witnesses public
- They let multiple block proofs be combined so one final proof can finalize more work at once
- They eliminate operators
- They turn every rollup into a sidechain
answer: 1
explanation: Recursive aggregation can reduce repeated on-chain verification work.

## Sources
- Ethereum.org, Zero-knowledge rollups - https://ethereum.org/developers/docs/scaling/zk-rollups/
- Sean Bowe, Jack Grigg, Daira Hopwood, Recursive Proof Composition without a Trusted Setup - https://eprint.iacr.org/2019/1021
- Nicolas Gailly, Mary Maller, Anca Nitulescu, SnarkPack: Practical SNARK Aggregation - https://eprint.iacr.org/2021/529
`,hm=`---
track: zk-proofs
chapter: Applications & Security
chapter_number: 7
lesson_slug: zk-failure-modes
lesson_title: ZK failure modes
lesson_number: 3
duration: 19 min
badge: Quiz
---

# Intro
Zero-knowledge systems are impressive, but they are not magical shields against bad engineering. A proof system can be mathematically elegant and still fail in deployment through setup mistakes, implementation bugs, bad circuit logic, missing domain separation, or unsafe application design. This lesson is about building the right caution. Serious learners need not just the power story of ZK, but the failure story too.

## Main Content
## Failure mode 1: the statement itself is wrong
The first and most important failure mode is embarrassingly basic:

the proof can be valid, but the thing being proved is not the thing you meant.

If the circuit, AIR, VM semantics, or statement encoding is flawed, then the proof only certifies the flawed relation.

This is one of the deepest lessons in applied cryptography. Proofs are mercilessly literal.

If you accidentally encode:

"the cat either paid for the tuna or the fee field is nonzero"

instead of:

"the cat paid for the tuna and the fee was valid"

the proof system will happily certify the wrong business rule.

## Failure mode 2: witness-generation bugs
Even if the relation is correct, the witness generator can still go wrong.

Common risks include:

- misordered inputs
- incorrect intermediate values
- broken boundary handling
- mismatched serialization

This matters because witness generation is where the intended computation becomes actual hidden data for the prover.

If that layer is wrong, the whole system can become unreliable even if the proof backend is flawless.

## Failure mode 3: setup assumptions and toxic waste
Trusted setup systems carry obvious risk.

If toxic waste survives, false proofs may become possible. This is not a cosmetic concern. It is a direct soundness concern in systems that rely on setup secrecy.

That is why ceremony design, multi-party contribution, and parameter handling matter so much for systems like Groth16-style deployments.

## Failure mode 4: transcript and Fiat-Shamir mistakes
Non-interactive systems often depend critically on hashing the right transcript with the right context.

If domain separation is weak or important fields are omitted, you can get:

- replay issues
- cross-protocol confusion
- ambiguous proof reuse
- security arguments that no longer match the implementation

This is the kind of bug that looks tiny in code review and huge after deployment.

## Failure mode 5: metadata leakage
A proof can be zero-knowledge and still leak through surrounding metadata.

Examples:

- the same identifier reused across sessions
- timing correlations
- unique application context
- deterministic proof presentation patterns

This matters a lot in identity and credential systems. Proof privacy is not only about the algebraic transcript. It is also about how the system is used.

If Baron Whiskers proves membership at the cat club every day at exactly 8:03 from the same kiosk using the same auxiliary identifier, the proof may be privacy-preserving on paper but trackable in practice.

## Failure mode 6: performance assumptions that do not survive production
Some systems fail not by being forgeable, but by being too expensive or fragile to operate safely.

That can look like:

- prover memory blowups
- unusable proving latency
- high on-chain verification costs
- hardware assumptions that collapse under load

These are still real failure modes. A proof system that cannot be operated reliably at target scale may push teams into unsafe shortcuts.

## Failure mode 7: implementation bugs in the stack around the proof
Real deployments involve:

- serialization
- key handling
- proof verification APIs
- state management
- application logic

The proof is only one layer in a larger software system.

Official zkVM documentation, rollup docs, and credential specs all quietly teach the same lesson: the surrounding system design matters as much as the core proof primitive.

note
A ZK system should be reviewed as a whole pipeline: statement design, witness generation, transcript construction, proving, verification, metadata handling, and application integration.

## The mental model to keep
The proof system is not the whole castle. It is one very strong wall.

If the wall is attached to the wrong blueprint, if the gate is left open, or if the guards misread the pass, the castle can still fail.

Or, in cat terms:

- the cat vault door may be mathematically perfect
- but if the food ledger is wrong, the paw scanner is miswired, or the side window is open, tuna still disappears

That is the right mindset for ZK failure modes.

## Quiz

### Question 1
question: What is the most important first failure mode to watch for in ZK systems?
- The proof is too short
- The statement or relation being proved is not actually the intended one
- The verifier is too friendly
- The witness is hidden
answer: 1
explanation: A proof only certifies the exact statement you encoded, not the statement you meant in your head.

### Question 2
question: Why are witness-generation bugs dangerous?
- Because they sit on the path between intended logic and the actual hidden assignment used for proving
- Because witness generation is irrelevant
- Because they only affect UI rendering
- Because they automatically break zero-knowledge but never soundness
answer: 0
explanation: Witness generation is part of the trusted logic of the system, not mere bookkeeping.

### Question 3
question: What is a realistic privacy failure even if the proof transcript is zero-knowledge?
- Metadata and reuse patterns can still make users linkable
- The verifier always learns the witness
- The system becomes interactive
- The public input disappears
answer: 0
explanation: Timing, identifiers, and surrounding protocol behavior can leak even if the core proof is fine.

### Question 4
question: What is a good security mindset for reviewing ZK systems?
- Review only the core proof primitive
- Assume the math automatically secures the application
- Review the whole pipeline from statement design to application integration
- Ignore performance and operations
answer: 2
explanation: Real failure modes live across the full stack, not only in the proof theorem.

## Sources
- Jens Groth, On the Size of Pairing-based Non-interactive Arguments - https://eprint.iacr.org/2016/260
- Ethereum.org, Zero-knowledge rollups - https://ethereum.org/developers/docs/scaling/zk-rollups/
- RISC Zero README - https://github.com/risc0/risc0
- W3C, BBS Cryptosuite v2023 - https://www.w3.org/TR/vc-di-bbs/
`,dm=`---
track: zk-proofs
chapter: Applications & Security
chapter_number: 7
lesson_slug: choosing-a-proof-system
lesson_title: Choosing a proof system
lesson_number: 4
duration: 17 min
badge: Quiz
---

# Intro
By the end of a ZK track, the right question is not "Which proof system is best?" It is "Best for what?" Groth16, PLONKish systems, STARKs, folding-based systems, and zkVMs all live at different points in the tradeoff space. This lesson is about learning how to choose with clear eyes instead of chasing whichever acronym currently sounds most impressive.

## Main Content
## Start with the wrong question
The wrong question is:

"Which proof system wins?"

That question hides the real design variables.

The right question is:

"Which proof system is a good fit for my constraints, trust assumptions, workload, and developer model?"

Once you ask that, the comparison becomes much more useful.

## Dimension 1: setup assumptions
Some systems need trusted setup. Some offer universal setup. Some are transparent.

This matters because setup affects:

- operational complexity
- governance burden
- trust assumptions
- upgrade flexibility

If your team is uncomfortable with ceremonies, that pushes you away from some designs and toward others.

## Dimension 2: proof size and verifier cost
Some systems produce extremely small proofs and cheap verification. Others produce larger proofs but offer different benefits.

This matters especially when:

- verification happens on-chain
- bandwidth is expensive
- many verifiers check the same object

If your verifier lives inside an expensive smart contract, proof size and verifier cost may dominate your decision.

## Dimension 3: prover cost
A system can look beautiful from the verifier side and still be painful for the prover.

Ask:

- how much memory is needed?
- how long does proving take?
- what hardware assumptions are realistic?
- does the workload look circuit-heavy or trace-heavy?

This often matters more than beginners expect.

## Dimension 4: computation model
Different systems are friendlier to different descriptions of computation.

Some are a better fit for:

- custom circuits
- Plonkish gate systems
- AIR and traces
- zkVM execution models
- recursive carried state

This is one reason the "best proof system" question fails. A hand-tuned arithmetic circuit and a general-purpose zkVM are solving related but not identical product problems.

## Dimension 5: recursion and composition needs
If your application needs:

- recursive proofs
- aggregation
- long-running verifiable computation
- zkVM composition

then some systems become much more attractive than others.

This is where modern folding-based designs, Halo-style recursion, and zkVM-friendly proving systems become especially relevant.

## Dimension 6: ecosystem and tooling
Never ignore tooling.

A proof system with elegant papers but weak tooling may be less useful in practice than a slightly less ideal design with:

- compilers
- dev tooling
- debugging support
- production libraries
- active maintenance

The gap between research beauty and production usability is real.

If you want a cat analogy, the "best" cat gym is not the one with the most advanced physics paper. It is the one your cats can actually use safely every day.

## A simple decision mindset
Here is a better way to think:

code
label: Practical decision questions
1. What trust model am I willing to accept?
2. Where is verification happening?
3. What proving cost can I afford?
4. What kind of computation am I proving?
5. Do I need recursion or aggregation?
6. How mature must the tooling be?

Those questions are much more useful than acronym worship.

## A rough intuition map
Very roughly:

- Groth16 is strong when tiny proofs and cheap verification matter a lot
- PLONKish systems are attractive when reusable setup and flexible circuit design matter
- STARKs are attractive when transparency and trace-heavy scalability matter
- folding-based recursive systems are attractive when carried recursive computation matters
- zkVM approaches are attractive when programmability and general execution models matter

This is a simplification, not a law. But it is a useful first map.

note
Choosing a proof system is an engineering decision under constraints, not a purity contest. The right answer may be boring, mixed, or application-specific.

## The mental model to keep
Do not ask which proof system is the coolest cat.

Ask which cat is best for this job:

- small apartment cat
- warehouse mouser
- therapy cat
- chaos goblin with a tie

Proof systems are like that. They have personalities, costs, strengths, and awkward habits. Your job is to match the system to the workload honestly.

## Quiz

### Question 1
question: What is the best first principle for choosing a proof system?
- Pick the newest acronym
- Pick the one with the smallest proof size no matter what
- Match the system to the application's trust model, cost constraints, and computation style
- Always pick transparent systems
answer: 2
explanation: There is no universally best proof system. The right choice depends on the application's actual constraints.

### Question 2
question: Why can setup assumptions be a decisive factor?
- Because setup affects trust, governance, and upgrade complexity
- Because setup only changes UI colors
- Because transparent systems always have the smallest proofs
- Because trusted setup removes all prover cost
answer: 0
explanation: Setup assumptions directly shape operational and trust decisions.

### Question 3
question: Why is tooling important when choosing a proof system?
- Because papers are enough on their own
- Because production success depends on compilers, libraries, debugging, and maintenance as well as cryptographic elegance
- Because tooling replaces cryptography
- Because tooling makes every proof smaller
answer: 1
explanation: In real systems, ecosystem maturity often matters as much as theoretical quality.

### Question 4
question: Which statement is most accurate?
- One proof system dominates all others in every application
- The right choice may differ depending on verifier cost, prover cost, trust model, recursion needs, and programmability
- zkVMs always beat circuits
- STARKs always beat SNARKs
answer: 1
explanation: Proof-system choice is multidimensional and application-specific.

## Sources
- Jens Groth, On the Size of Pairing-based Non-interactive Arguments - https://eprint.iacr.org/2016/260
- Ariel Gabizon, Zachary J. Williamson, Oana Ciobotaru, PLONK - https://eprint.iacr.org/2019/953.pdf
- Eli Ben-Sasson et al., Scalable, transparent, and post-quantum secure computational integrity - https://eprint.iacr.org/2018/046
- Abhiram Kothapalli, Srinath Setty, Ioanna Tzialla, Nova: Recursive Zero-Knowledge Arguments from Folding Schemes - https://eprint.iacr.org/2021/370
`;function y(e,t,n,r,o={}){return{slug:e,title:t,description:n,duration:r,badge:o.badge??null,details:o.details??null,aliases:o.aliases??[]}}function L(e,t){return{title:e,lessons:t}}const pm=Object.assign({"../../content/zk-proofs/01-01-what-is-a-proof.md":Kf,"../../content/zk-proofs/01-02-interactive-vs-non-interactive-proofs.md":Mf,"../../content/zk-proofs/01-03-completeness-and-soundness.md":Of,"../../content/zk-proofs/01-04-the-zero-knowledge-property.md":Qf,"../../content/zk-proofs/01-05-the-simulator-argument.md":Bf,"../../content/zk-proofs/02-01-r1cs-constraints.md":Ff,"../../content/zk-proofs/02-02-witness-generation.md":qf,"../../content/zk-proofs/02-03-qap-construction.md":Df,"../../content/zk-proofs/02-04-polynomial-commitments.md":Vf,"../../content/zk-proofs/03-01-what-is-a-snark.md":Hf,"../../content/zk-proofs/03-02-groth16-walkthrough.md":Uf,"../../content/zk-proofs/03-03-trusted-setup-and-toxic-waste.md":$f,"../../content/zk-proofs/03-04-plonk-and-universal-setups.md":Zf,"../../content/zk-proofs/04-01-why-starks.md":Gf,"../../content/zk-proofs/04-02-fri-protocol.md":Yf,"../../content/zk-proofs/04-03-air-and-execution-traces.md":Xf,"../../content/zk-proofs/04-04-real-world-stark-systems.md":Jf,"../../content/zk-proofs/05-01-sigma-protocols.md":em,"../../content/zk-proofs/05-02-schnorr-proofs.md":tm,"../../content/zk-proofs/05-03-commitments-in-zk.md":nm,"../../content/zk-proofs/05-04-fiat-shamir-in-practice.md":rm,"../../content/zk-proofs/06-01-recursive-proofs.md":om,"../../content/zk-proofs/06-02-proof-aggregation.md":sm,"../../content/zk-proofs/06-03-folding-schemes.md":im,"../../content/zk-proofs/06-04-incrementally-verifiable-computation.md":am,"../../content/zk-proofs/06-05-zk-proving-vms.md":lm,"../../content/zk-proofs/07-01-zk-identity-and-credentials.md":cm,"../../content/zk-proofs/07-02-zk-rollups-and-validity.md":um,"../../content/zk-proofs/07-03-zk-failure-modes.md":hm,"../../content/zk-proofs/07-04-choosing-a-proof-system.md":dm}),ot=new Map(Object.entries(pm).map(([e,t])=>fm(e,t)).filter(Boolean).map(e=>[`${e.track}/${e.lesson_slug}`,e]));function fm(e,t){const n=t.trim(),r=n.match(/^---\n([\s\S]*?)\n---\n?/);if(!r)return null;const o=Object.fromEntries(r[1].split(`
`).map(w=>w.trim()).filter(Boolean).map(w=>{const[C,...d]=w.split(":");return[C.trim(),d.join(":").trim()]})),i=n.slice(r[0].length).split(`
`),a=i.findIndex(w=>w.trim()==="# Intro"),c=i.findIndex(w=>w.trim()==="## Main Content"),u=i.findIndex(w=>w.trim()==="## Quiz"),g=i.findIndex(w=>w.trim()==="## Sources"),f=mm(i.slice(a+1,c>-1?c:u>-1?u:i.length)),m=i.slice(c+1,u>-1?u:i.length),v=u>-1?i.slice(u+1,g>-1?g:i.length):[],k=g>-1?i.slice(g+1):[];return{...o,path:e,intro:f,blocks:gm(m),quiz:ym(v),sources:vm(k)}}function mm(e){return e.map(t=>t.trim()).filter(Boolean).join(" ").trim()}function gm(e){var r;const t=[];let n=0;for(;n<e.length;){const s=e[n].trim();if(!s){n+=1;continue}if(s.startsWith("## ")){t.push({type:"heading",text:s.slice(3).trim()}),n+=1;continue}if(s==="definition"||s==="note"||s==="code"){const a=s;n+=1;let c="";a!=="note"&&((r=e[n])!=null&&r.trim().startsWith("label:"))&&(c=e[n].trim().slice(6).trim(),n+=1);const u=[];for(;n<e.length&&e[n].trim()!=="";)u.push(e[n]),n+=1;a==="definition"?t.push({type:a,label:c,text:u.join(" ").trim()}):a==="note"?t.push({type:a,text:u.join(" ").trim()}):t.push({type:a,label:c,code:u.join(`
`).trim()});continue}const i=[];for(;n<e.length;){const a=e[n].trim();if(!a||a.startsWith("## ")||a==="definition"||a==="note"||a==="code")break;i.push(a),n+=1}if(i.length>0){t.push({type:"paragraph",text:i.join(" ").trim()});continue}n+=1}return t}function ym(e){const t=[];let n=0;for(;n<e.length;){const r=e[n].trim();if(!r){n+=1;continue}if(r.startsWith("### ")){const o={question:"",options:[],answer:0,explanation:""};for(n+=1;n<e.length;){const s=e[n].trim();if(!s){n+=1;continue}if(s.startsWith("### "))break;s.startsWith("question:")?o.question=s.slice(9).trim():s.startsWith("- ")?o.options.push({label:String.fromCharCode(65+o.options.length),text:s.slice(2).trim(),correct:!1}):s.startsWith("answer:")?o.answer=Number.parseInt(s.slice(7).trim(),10):s.startsWith("explanation:")&&(o.explanation=s.slice(12).trim()),n+=1}o.options=o.options.map((s,i)=>({...s,correct:i===o.answer})),t.push(o);continue}n+=1}return t}function vm(e){return e.map(t=>t.trim()).filter(t=>t.startsWith("- ")).map(t=>t.slice(2).trim()).map(t=>{const n=t.match(/^(.*?)(?:\s[—-]\s)(https?:\/\/\S+)$/);return n?{title:n[1].trim(),url:n[2].trim()}:{title:t,url:""}})}function wm(e,t,n){return{intro:`${n.title} is one of the core moves inside ${e.title}. This lesson makes the idea precise, shows where it fits, and gives you a clean mental model to carry forward.`,blocks:[{type:"heading",text:"Why this matters"},{type:"paragraph",text:`${n.description} In practice, this concept becomes important whenever you need to reason clearly instead of relying on surface intuition.`},{type:"definition",label:`Definition — ${n.title}`,text:`${n.title} is a core part of ${t.title.toLowerCase()} in ${e.title}. The goal is not just to memorize the label, but to understand what role it plays inside the whole system.`},{type:"heading",text:"Mental model"},{type:"paragraph",text:`Treat ${n.title.toLowerCase()} as a lens for reading the rest of the track. Once this is clear, later lessons stop feeling disconnected and start looking like variations on the same structure.`},{type:"note",text:"A good sign you understand this lesson: you can explain it in plain language, then restate it more formally without changing the idea."}],quiz:[{question:`What is the main goal of ${n.title.toLowerCase()} in ${e.title}?`,options:[{label:"A",text:"To decorate the theory with extra terminology",correct:!1},{label:"B",text:"To clarify one of the core ideas the rest of the track depends on",correct:!0},{label:"C",text:"To replace the need for examples or exercises",correct:!1},{label:"D",text:"To avoid making tradeoffs explicit",correct:!1}],explanation:`Correct. The point of this lesson is to make a central idea in ${e.title} clear enough that later material has a solid foundation.`}]}}const km={intro:"Every cryptographic proof system rests on two properties. Understanding them precisely, not just vaguely, is the foundation everything else is built on.",blocks:[{type:"heading",text:"The two pillars"},{type:"paragraph",text:"A proof system involves two parties: a prover who wants to convince someone of a statement, and a verifier who decides whether to believe them. For this to be meaningful, the system must satisfy two guarantees simultaneously."},{type:"paragraph",text:"Without both properties holding, the proof system breaks down. Either honest provers get rejected for no reason, or dishonest provers can fabricate acceptance. Neither is acceptable."},{type:"definition",label:"Definition — Completeness",text:"If a statement is true and the prover is honest, then an honest verifier will always accept the proof. A complete system never rejects a valid proof."},{type:"definition",label:"Definition — Soundness",text:"If a statement is false, then no prover, even a computationally unbounded cheater, can convince an honest verifier to accept it, except with negligible probability epsilon."},{type:"heading",text:"Formalising it"},{type:"paragraph",text:"Let L be a language, the set of all true statements. A prover P supplies a witness w alongside the statement x. The verifier V runs a verification algorithm and outputs accept or reject."},{type:"code",label:"Formal definitions",code:`// Completeness — honest prover always accepted
forall x in L, forall valid witness w:
  Pr[ V(x, P(x, w)) = accept ] = 1

// Soundness — no cheating prover can fake it
forall x not in L, forall adversarial P*:
  Pr[ V(x, P*(x)) = accept ] <= epsilon (negligible)`},{type:"paragraph",text:"The soundness error epsilon is the maximum probability a cheating prover can fool the verifier. In practice, we want this to be cryptographically negligible, something like 2^-128."},{type:"heading",text:"Statistical vs computational soundness"},{type:"paragraph",text:"Statistical soundness holds even against a prover with unlimited computation. Computational soundness only holds against adversaries bounded by polynomial time."},{type:"note",text:"STARKs aim for statistical soundness and post-quantum security by avoiding elliptic curve pairings. SNARKs like Groth16 achieve computational soundness by relying on hardness assumptions."},{type:"heading",text:"Why this matters for zero-knowledge"},{type:"paragraph",text:"In zero-knowledge proofs, we add a third property on top of completeness and soundness: that the proof reveals nothing beyond the truth of the statement. But before you can reason about what a proof leaks, you need to be crystal clear about what it proves."}],quiz:[{question:"Which property guarantees that a cheating prover cannot convince the verifier of a false statement?",options:[{label:"A",text:"Completeness, because it ensures all valid proofs are accepted",correct:!1},{label:"B",text:"Soundness, because it bounds the probability of accepting a false proof",correct:!0},{label:"C",text:"Zero-knowledge, because it ensures the verifier learns nothing",correct:!1},{label:"D",text:"The witness, because it is the secret the prover holds",correct:!1}],explanation:"Correct. Soundness prevents forgery. Completeness is the mirror property that ensures honest provers are not wrongly rejected."},{question:"A proof system has computational soundness. What does this mean?",options:[{label:"A",text:"The prover needs a powerful computer to generate proofs",correct:!1},{label:"B",text:"The verifier runs in constant time regardless of proof size",correct:!1},{label:"C",text:"Soundness only holds against polynomial-time adversaries, not unbounded ones",correct:!0},{label:"D",text:"The proof is compressed to a constant number of bytes",correct:!1}],explanation:"Correct. Computational soundness is conditional. It relies on hardness assumptions rather than holding against unlimited adversaries."}]},bm={intro:"Before zero-knowledge makes sense, we need a clear idea of what a proof is. In complexity theory, a proof is not just a persuasive argument. It is evidence that a verifier can check according to a fixed rule.",blocks:[{type:"heading",text:"From witness to verification"},{type:"paragraph",text:"A useful starting point is the pair statement and witness. The statement is the claim you want accepted. The witness is the hidden evidence that makes the claim true. A verifier is an efficient algorithm that checks whether the witness really supports the statement."},{type:"definition",label:"Definition — Relation and language",text:"A relation R(x, w) says when a witness w is valid for a statement x. The associated language L is the set of statements x for which some witness exists."},{type:"paragraph",text:"This is the usual NP viewpoint. A traditional proof for x is simply a witness w that makes R(x, w) hold. The verifier checks the pair and accepts or rejects."},{type:"heading",text:"Why interaction appears"},{type:"paragraph",text:"Sending the witness directly is often a bad fit. The witness may be secret, large, or reusable in ways that create risk. Interactive proofs change the model: instead of handing over the witness, a prover and verifier exchange messages, and the verifier decides based on the transcript."},{type:"note",text:"The key shift is that a proof becomes a protocol. Correctness is no longer just about a static string. It is about whether an honest prover can convince the verifier, and whether a dishonest prover can fake that success."},{type:"heading",text:"Where zero-knowledge starts"},{type:"paragraph",text:"Once proofs become protocols, we can ask a stronger question: can the prover convince the verifier without handing over the witness itself? That is the opening move behind zero-knowledge."}],quiz:[{question:"In the usual NP-style framing, what is a witness?",options:[{label:"A",text:"The public statement that both parties already know",correct:!1},{label:"B",text:"The hidden evidence that makes the statement valid under the verifier's check",correct:!0},{label:"C",text:"A random challenge chosen by the verifier",correct:!1},{label:"D",text:"The final proof transcript seen by the verifier",correct:!1}],explanation:"Correct. The witness is the secret or hidden evidence that certifies the statement under a relation R(x, w)."},{question:"Why is 'just send the witness' often not enough for modern proof systems?",options:[{label:"A",text:"Because verifiers are not allowed to read messages longer than one bit",correct:!1},{label:"B",text:"Because the witness may be secret, reusable, or otherwise unsafe to reveal directly",correct:!0},{label:"C",text:"Because all useful proofs must be non-interactive",correct:!1},{label:"D",text:"Because soundness only applies after a witness is encrypted",correct:!1}],explanation:"Correct. Interactive and zero-knowledge systems exist because direct witness disclosure is often too revealing or too risky."}]},xm={intro:"Interactive proofs let a verifier challenge a prover in real time. Non-interactive proofs remove that back-and-forth and replace it with a single proof object that anyone can verify later.",blocks:[{type:"heading",text:"Interactive proofs"},{type:"paragraph",text:"In a public-coin interactive proof, the verifier sends random challenges and the prover replies. The full transcript records commitments, challenges, and responses. Completeness and soundness are defined over that exchange."},{type:"definition",label:"Definition — Interactive proof",text:"An interactive proof is a protocol between prover and verifier in which the verifier's acceptance depends on a sequence of messages, not just a single submitted witness."},{type:"paragraph",text:"Interaction is useful because the verifier can force the prover to answer unpredictable challenges. That unpredictability is often what drives soundness."},{type:"heading",text:"Why non-interactive proofs matter"},{type:"paragraph",text:"Non-interactive proofs are easier to broadcast, post on-chain, cache, and verify asynchronously. That makes them much more practical in blockchains and distributed systems, where the verifier may not be online at the same time as the prover."},{type:"note",text:"The Fiat-Shamir transformation is the standard bridge here: in a public-coin protocol, replace the verifier's random challenge with a challenge derived by hashing the statement and previous prover messages."},{type:"heading",text:"What changes after Fiat-Shamir"},{type:"paragraph",text:"The protocol becomes non-interactive, but the security story changes too. Instead of relying on fresh verifier randomness directly, soundness and zero-knowledge are argued relative to properties of the hash-based transcript construction."}],quiz:[{question:"What does the Fiat-Shamir transformation replace in a public-coin interactive proof?",options:[{label:"A",text:"The witness, with a public commitment",correct:!1},{label:"B",text:"The verifier's random challenge, with a challenge derived from hashing the transcript and statement",correct:!0},{label:"C",text:"The verifier, with a trusted setup ceremony",correct:!1},{label:"D",text:"The soundness definition, with completeness",correct:!1}],explanation:"Correct. Fiat-Shamir removes live interaction by deriving the challenge from the prior transcript and instance using a hash-based construction."},{question:"Why are non-interactive proofs especially attractive in blockchain settings?",options:[{label:"A",text:"Because they guarantee statistical soundness for every protocol",correct:!1},{label:"B",text:"Because they can be generated without a statement",correct:!1},{label:"C",text:"Because a verifier can check a single proof object later, without participating in a live challenge-response exchange",correct:!0},{label:"D",text:"Because they eliminate the need for verifiers entirely",correct:!1}],explanation:"Correct. Non-interactive proofs are operationally convenient because they turn a live protocol into a portable artifact."}]},Tm={intro:"Completeness and soundness say that a proof system works. Zero-knowledge says it works without leaking more than it should.",blocks:[{type:"heading",text:"What zero-knowledge really claims"},{type:"paragraph",text:"Zero-knowledge does not mean that the verifier sees nothing. The verifier still sees a transcript and still learns that the statement is valid. The real claim is subtler: the transcript should not teach the verifier anything beyond that validity claim."},{type:"definition",label:"Definition — Simulator view",text:"A proof is zero-knowledge if there exists an efficient simulator that can generate a transcript indistinguishable from a real one using only the statement, without access to the witness."},{type:"paragraph",text:"That definition is powerful because it compares the real transcript to something generated without the secret. If the two views match, the witness itself is not doing informational work from the verifier's perspective."},{type:"heading",text:"Honest-verifier vs malicious-verifier"},{type:"paragraph",text:"Some protocols are first proven honest-verifier zero-knowledge, meaning the simulator only has to match the view of a verifier that follows the protocol exactly. Full zero-knowledge is stronger: it must handle any efficient verifier strategy, even a verifier that deviates in order to learn more."},{type:"note",text:"This is why simulation is central. It is not enough to say 'the messages look random'. You need a procedure that reproduces what the verifier sees without using the witness."},{type:"heading",text:"Why this matters in practice"},{type:"paragraph",text:"In deployed systems, the zero-knowledge property is what lets you prove balance constraints, membership claims, or correct computation while still protecting the private data that made the statement true."}],quiz:[{question:"What is the strongest intuition behind the simulator-based definition of zero-knowledge?",options:[{label:"A",text:"The verifier sees no transcript at all",correct:!1},{label:"B",text:"The verifier learns at most what could already be generated from the statement alone",correct:!0},{label:"C",text:"The prover never uses randomness",correct:!1},{label:"D",text:"The witness becomes a public input after verification",correct:!1}],explanation:"Correct. Simulation says the verifier's view can be generated without the witness, so the transcript does not reveal extra efficiently extractable knowledge."},{question:"What is the difference between honest-verifier zero-knowledge and full zero-knowledge?",options:[{label:"A",text:"HVZK assumes the verifier follows the protocol, while full ZK must handle arbitrary efficient verifier behavior",correct:!0},{label:"B",text:"HVZK is non-interactive and full ZK is interactive",correct:!1},{label:"C",text:"HVZK has completeness, full ZK has soundness",correct:!1},{label:"D",text:"HVZK reveals the witness but full ZK hides it",correct:!1}],explanation:"Correct. HVZK is a weaker target because the simulator only needs to match an honest verifier's view."}]},Sm={intro:"A simulator is the engine inside the definition of zero-knowledge. It is not the prover. It is a security-proof object that shows the verifier's transcript could have been generated without secret knowledge.",blocks:[{type:"heading",text:"What the simulator is trying to reproduce"},{type:"paragraph",text:"The target is the verifier's view: commitments, challenges, responses, and any verifier-side randomness that would appear in a real execution. If the simulator can reproduce that view efficiently, then the transcript itself is not carrying extra knowledge about the witness."},{type:"definition",label:"Definition — Simulator",text:"A simulator is an efficient algorithm that, given only the public statement, produces a transcript distributed like a real interaction between prover and verifier."},{type:"heading",text:"How simulators often work"},{type:"paragraph",text:"In many sigma-style protocols, the simulator chooses the challenge and response first, then engineers an accepting first message that makes the transcript consistent. If the verifier's actual challenge does not match, the simulator may rewind and try again."},{type:"note",text:"This is the conceptual punchline: the simulator does not need the witness to create a believable verifier view. That is exactly why the protocol deserves to be called zero-knowledge."},{type:"heading",text:"What the simulator does not show"},{type:"paragraph",text:"The simulator is not extracting a witness, and it is not proving the statement true by itself. It is only showing that the verifier's transcript can be explained without reference to the witness."}],quiz:[{question:"Why is a simulator central to the definition of zero-knowledge?",options:[{label:"A",text:"Because it recovers the witness from the transcript",correct:!1},{label:"B",text:"Because it shows the verifier's view can be generated without the witness",correct:!0},{label:"C",text:"Because it replaces the verifier during proof generation",correct:!1},{label:"D",text:"Because it guarantees a proof is post-quantum secure",correct:!1}],explanation:"Correct. Simulation is the formal way to argue that the transcript does not leak witness-dependent information."},{question:"In many sigma-style arguments, why might a simulator use rewinding?",options:[{label:"A",text:"To delete verifier randomness from the transcript",correct:!1},{label:"B",text:"To retry until it can align its fabricated transcript with the verifier's challenge",correct:!0},{label:"C",text:"To compress the proof into a constant number of group elements",correct:!1},{label:"D",text:"To make completeness hold for false statements",correct:!1}],explanation:"Correct. Rewinding is a proof technique that lets the simulator retry until it produces a challenge-response pair with the right distribution."}]};function Im(e){const t=e.chapters.flatMap(r=>r.lessons.map(o=>({chapter:r,lesson:o}))),n=Math.max(0,t.findIndex(({lesson:r})=>r.slug===e.currentLessonSlug));return{...e,totalLessons:t.length,chapters:e.chapters.map(r=>({...r,lessons:r.lessons.map(o=>{var s,i,a;return{...o,title:((s=ot.get(`${e.slug}/${o.slug}`))==null?void 0:s.lesson_title)??o.title,duration:((i=ot.get(`${e.slug}/${o.slug}`))==null?void 0:i.duration)??o.duration,badge:((a=ot.get(`${e.slug}/${o.slug}`))==null?void 0:a.badge)??o.badge,details:ot.get(`${e.slug}/${o.slug}`)?{intro:ot.get(`${e.slug}/${o.slug}`).intro,blocks:ot.get(`${e.slug}/${o.slug}`).blocks,quiz:ot.get(`${e.slug}/${o.slug}`).quiz,sources:ot.get(`${e.slug}/${o.slug}`).sources}:o.details??wm(e,r,o)}})})),progress:{currentIndex:n,completedLessons:n,remainingLessons:Math.max(t.length-n-1,0),percent:Math.round((n+1)/t.length*100)}}}const Cm=[{slug:"zk-proofs",title:"Zero-Knowledge Proofs",shortTitle:"ZK Proofs",category:"Cryptography",label:"Emerging",theme:"purple",homeClass:"tc-zk",summary:"SNARKs, STARKs, circuits and proof systems from the math up.",description:"Understand how it is possible to prove you know something without revealing what you know. Start from first principles, then move through circuits, SNARKs, STARKs, recursion, and real-world applications.",estimatedTime:"~10h",level:"Advanced",tags:["Cryptography","SNARKs","STARKs","Circuits","Recursion","Blockchain","Math","Privacy"],outcomes:["Explain completeness, soundness, and zero-knowledge without hand-waving.","Read SNARK and STARK papers with much stronger intuition.","Evaluate trusted setups, proof sizes, and verifier tradeoffs clearly.","Understand arithmetic circuits, witnesses, and polynomial encodings.","Reason about recursive proofs, aggregation, and proving virtual machines.","Reason about when ZK is useful in real systems and when it is not.","Navigate production ZK systems with sharper technical judgment."],currentLessonSlug:"completeness-and-soundness",chapters:[L("Foundations",[y("what-is-a-proof","What is a proof?","Mathematical vs computational proofs. Why we need them in cryptography.","12 min",{badge:"Quiz",details:bm}),y("interactive-vs-non-interactive-proofs","Interactive vs non-interactive proofs","The difference between Arthur-Merlin protocols and NIZK systems.","18 min",{badge:"Quiz",details:xm,aliases:["interactive-vs-non-interactive"]}),y("completeness-and-soundness","Completeness & Soundness","The two fundamental properties every proof system must satisfy.","15 min",{badge:"Quiz",details:km,aliases:["completeness-soundness"]}),y("the-zero-knowledge-property","The zero-knowledge property","What it means to reveal nothing. Simulators and indistinguishability.","20 min",{badge:"Quiz",details:Tm,aliases:["zero-knowledge-property"]}),y("the-simulator-argument","The simulator argument","Proving zero-knowledge rigorously via the simulation paradigm.","22 min",{badge:"Quiz",details:Sm,aliases:["simulator-argument"]})]),L("Arithmetic Circuits",[y("r1cs-constraints","R1CS constraints","Rank-1 Constraint Systems and equation-based computation.","25 min",{badge:"Quiz"}),y("witness-generation","Witness generation","What a witness is and how it satisfies a constraint system.","18 min"),y("qap-construction","QAP construction","Converting R1CS into a Quadratic Arithmetic Program.","30 min",{badge:"Quiz"}),y("polynomial-commitments","Polynomial commitments","KZG, FRI, and committing to polynomials without revealing them.","28 min",{badge:"Quiz"})]),L("SNARKs",[y("what-is-a-snark","What is a SNARK?","The properties that make succinct arguments useful.","16 min",{badge:"Quiz"}),y("groth16-walkthrough","Groth16 walkthrough","A guided read through the most deployed SNARK.","35 min",{badge:"Quiz"}),y("trusted-setup-and-toxic-waste","Trusted setup & toxic waste","Why ceremonies matter and what goes wrong if they fail.","20 min",{aliases:["trusted-setup"]}),y("plonk-and-universal-setups","PlonK & universal setups","How universal setups change the design space.","32 min",{badge:"Quiz",aliases:["plonk-universal-setups"]})]),L("STARKs",[y("why-starks","Why STARKs?","No trusted setup, post-quantum security, and the tradeoffs involved.","18 min",{badge:"Quiz"}),y("fri-protocol","FRI protocol","The engine behind most modern STARK systems.","40 min",{badge:"Quiz"}),y("air-and-execution-traces","AIR & execution traces","How computations become algebraic traces.","28 min",{aliases:["air-execution-traces"]}),y("real-world-stark-systems","Real-world STARK systems","How StarkWare, Miden, and RISC Zero apply the theory.","22 min",{badge:"Quiz",aliases:["real-world-starks"]})]),L("Protocols & Building Blocks",[y("sigma-protocols","Sigma protocols","Three-move proof systems and the intuition behind commit-challenge-response.","20 min",{badge:"Quiz"}),y("schnorr-proofs","Schnorr proofs of knowledge","A concrete proof-of-knowledge protocol that makes abstract ideas feel real.","24 min",{badge:"Quiz"}),y("commitments-in-zk","Commitments in ZK","Why binding and hiding commitments show up all over zero-knowledge design.","18 min"),y("fiat-shamir-in-practice","Fiat-Shamir in practice","How interactive proofs become portable transcripts, and where the caveats live.","22 min",{badge:"Quiz"})]),L("Recursion & Composition",[y("recursive-proofs","Recursive proofs","What it means for one proof to verify another and why that matters.","26 min",{badge:"Quiz"}),y("proof-aggregation","Proof aggregation","Combining many proof statements into smaller verification work.","20 min"),y("folding-schemes","Folding schemes","The core idea behind modern recursive proving systems like Nova-style designs.","28 min",{badge:"Quiz"}),y("incrementally-verifiable-computation","Incrementally verifiable computation","How long computations can stay continuously checkable as they evolve.","24 min"),y("zk-proving-vms","ZK proving VMs","Why general-purpose proving machines feel different from hand-written circuits.","23 min",{badge:"Quiz"})]),L("Applications & Security",[y("zk-identity-and-credentials","ZK identity & credentials","Selective disclosure, membership proofs, and privacy-preserving identity systems.","18 min",{badge:"Quiz"}),y("zk-rollups-and-validity","ZK rollups & validity proofs","How rollups use proofs to separate heavy execution from cheap verification.","21 min"),y("zk-failure-modes","ZK failure modes","What breaks when assumptions, implementations, or ceremonies go wrong.","19 min",{badge:"Quiz"}),y("choosing-a-proof-system","Choosing a proof system","How to think about setup, proof size, proving cost, verifier cost, and trust tradeoffs.","17 min",{badge:"Quiz"})])]},{slug:"cryptography",title:"Cryptography",shortTitle:"Cryptography",category:"Security",label:"Core",theme:"green",homeClass:"tc-crypto",summary:"Symmetric, asymmetric, hashes, curves, and protocol design.",description:"Move through the primitives that power modern secure systems, from block ciphers and signatures to commitments, key exchange, and protocol reasoning.",estimatedTime:"~7h",level:"Intermediate",tags:["Hashing","Signatures","Elliptic Curves","Protocols","Security"],outcomes:["Choose cryptographic primitives from threat models instead of habit.","Understand signatures, commitments, and key exchange at a systems level.","Read protocol diagrams with stronger security intuition."],currentLessonSlug:"hash-functions",chapters:[L("Foundations",[y("hash-functions","Hash functions","Collision resistance, preimages, and what hashes actually guarantee.","14 min",{badge:"Quiz"}),y("message-authentication","Message authentication","MACs and integrity under adversarial conditions.","16 min"),y("digital-signatures","Digital signatures","Authentication, non-repudiation, and signature workflows.","18 min",{badge:"Quiz"}),y("key-exchange","Key exchange","How two parties establish secrets on an open network.","20 min")]),L("Commitment & Secrecy",[y("commitment-schemes","Commitment schemes","Binding and hiding in practical protocols.","15 min",{badge:"Quiz"}),y("secret-sharing","Secret sharing","Split trust without losing recoverability.","17 min"),y("randomness","Randomness & entropy","Why secure randomness is harder than it looks.","13 min"),y("protocol-failures","Protocol failure modes","What breaks when assumptions are loose.","19 min",{badge:"Quiz"})]),L("Elliptic Curves",[y("curve-intuition","Curve intuition","Why elliptic curves are useful in cryptography.","21 min"),y("discrete-log","Discrete log hardness","The assumption behind many deployed systems.","16 min"),y("ecdsa","ECDSA in practice","Where the signature scheme shines and where it bites.","24 min"),y("ed25519","Ed25519","A cleaner signature system and its practical benefits.","18 min")]),L("Protocol Design",[y("threat-models","Threat models","Security begins with naming the adversary.","12 min"),y("replay-resistance","Replay resistance","Freshness, nonces, and signed request design.","15 min"),y("forward-secrecy","Forward secrecy","Containing the blast radius of key compromise.","19 min"),y("auditability","Auditability","Designing systems that can be checked after the fact.","14 min",{badge:"Quiz"})])]},{slug:"operating-systems",title:"Operating Systems",shortTitle:"Operating Systems",category:"Systems",label:"Classic",theme:"orange",homeClass:"tc-os",summary:"Processes, memory, file systems, and scheduling from the metal up.",description:"Study how operating systems manage process isolation, memory, persistence, and hardware boundaries under real constraints.",estimatedTime:"~8h",level:"Intermediate",tags:["Processes","Memory","Scheduling","Filesystems","Concurrency"],outcomes:["Explain how processes, threads, and memory isolation really work.","Understand scheduler tradeoffs and kernel boundary design.","Read systems papers and architecture diagrams with more confidence."],currentLessonSlug:"process-model",chapters:[L("Core Model",[y("process-model","The process model","What the OS abstracts and what it does not.","16 min",{badge:"Quiz"}),y("threads","Threads and concurrency","Shared memory, race conditions, and scheduling pressure.","20 min"),y("syscalls","System calls","Where user space stops and the kernel begins.","15 min"),y("context-switches","Context switches","The hidden cost of switching work.","17 min")]),L("Memory",[y("virtual-memory","Virtual memory","Address spaces, mapping, and process isolation.","22 min",{badge:"Quiz"}),y("paging","Paging","How memory is sliced, mapped, and reclaimed.","19 min"),y("caches","Caches and locality","Why memory performance is about structure, not just size.","18 min"),y("allocators","Allocators","How memory gets carved up under pressure.","16 min")]),L("Storage",[y("filesystems","File systems","Persistence, abstraction, and consistency models.","20 min"),y("journaling","Journaling","What happens when the machine crashes halfway through.","15 min"),y("io-stacks","I/O stacks","Reading and writing through the kernel path.","18 min"),y("buffer-cache","Buffer cache","When the OS decides to trust memory over disk.","14 min")]),L("Scheduling",[y("scheduler-goals","Scheduler goals","Fairness, throughput, latency, and tradeoffs.","17 min",{badge:"Quiz"}),y("priority-inversion","Priority inversion","When scheduling logic backfires.","13 min"),y("realtime","Real-time constraints","What changes when deadlines matter.","16 min"),y("kernel-observability","Kernel observability","Understanding systems through traces and counters.","14 min")])]},{slug:"ai-internals",title:"AI Internals",shortTitle:"AI Internals",category:"Machine Learning",label:"Emerging",theme:"blue",homeClass:"tc-ai",summary:"Transformers, attention, training dynamics, and model behavior.",description:"Go beyond API usage and study how transformer systems are built, trained, and reasoned about in practice.",estimatedTime:"~7h",level:"Intermediate",tags:["Transformers","Attention","Training","Embeddings","Inference"],outcomes:["Explain transformers in terms of representations and operations, not buzzwords.","Understand the shape of model training and inference tradeoffs.","Read model architecture discussions with stronger technical clarity."],currentLessonSlug:"attention-intuition",chapters:[L("Representations",[y("attention-intuition","Attention intuition","Why attention became the center of modern models.","15 min",{badge:"Quiz"}),y("embeddings","Embeddings","How tokens become vectors with structure.","16 min"),y("positional-information","Positional information","What models need to know about order.","13 min"),y("residual-stream","The residual stream","Why information moves the way it does inside a transformer.","17 min")]),L("Transformer Blocks",[y("self-attention","Self-attention","Queries, keys, values, and pattern routing.","21 min",{badge:"Quiz"}),y("mlps","MLP layers","Where feature transformations get sharper.","15 min"),y("normalization","Normalization","Stability, gradients, and training hygiene.","14 min"),y("multi-heads","Multi-head behavior","Why one head is not enough.","17 min")]),L("Training",[y("gradient-descent","Gradient descent at scale","Optimization under huge parameter counts.","18 min"),y("pretraining","Pretraining objectives","Why next-token prediction gets you so far.","16 min"),y("finetuning","Fine-tuning","How models get specialized without full retraining.","15 min"),y("rlhf","Post-training alignment","What changes after the base model is learned.","19 min")]),L("Inference",[y("sampling","Sampling and decoding","Temperature, top-k, and generation control.","14 min"),y("latency","Latency and serving","What makes deployed inference fast or slow.","12 min"),y("context-windows","Context windows","How memory limits shape behavior.","15 min"),y("evaluation","Evaluation","Measuring capability without fooling yourself.","18 min",{badge:"Quiz"})])]},{slug:"networking",title:"Networking",shortTitle:"Networking",category:"Distributed Systems",label:"Classic",theme:"yellow",homeClass:"tc-net",summary:"TCP/IP, DNS, HTTP, TLS, and the internet from the wire up.",description:"Understand the layered protocols that move data across the network, and the tradeoffs that appear once systems meet latency and failure.",estimatedTime:"~6h",level:"Intermediate",tags:["TCP/IP","DNS","TLS","HTTP","Latency"],outcomes:["Trace how requests move from name resolution to encrypted transport.","Reason about latency, retries, and failure boundaries.","Read distributed system diagrams with stronger network intuition."],currentLessonSlug:"packet-model",chapters:[L("Network Foundations",[y("packet-model","The packet model","What the network promises and what it drops on the floor.","13 min",{badge:"Quiz"}),y("ip-routing","IP and routing","How packets choose a path through the network.","17 min"),y("nat-firewalls","NAT and firewalls","How middleboxes change the idealized model.","14 min"),y("mtu","MTU and fragmentation","Why packet sizing matters more than it first appears.","12 min")]),L("Transport",[y("tcp-basics","TCP basics","Reliability, ordering, and flow control.","20 min",{badge:"Quiz"}),y("udp","UDP and datagrams","What you gain and lose without transport guarantees.","14 min"),y("congestion-control","Congestion control","Why the network punishes greed.","18 min"),y("latency-budget","Latency budgeting","How milliseconds disappear in real systems.","12 min")]),L("Application Layer",[y("dns","DNS","Resolution, caching, and where names become addresses.","16 min"),y("http","HTTP semantics","Methods, headers, idempotence, and proxies.","17 min"),y("tls","TLS handshake","Trust, certificates, and encrypted transport.","19 min",{badge:"Quiz"}),y("websocket-streams","Sockets and streams","Long-lived connections in practice.","14 min")]),L("Reliability",[y("timeouts","Timeouts","Why every networked system needs a clock.","11 min"),y("retries","Retries and backoff","Resilience without self-inflicted denial of service.","14 min"),y("load-balancing","Load balancing","How systems spread traffic and failure.","16 min"),y("observability","Network observability","Debugging with logs, traces, and packet captures.","15 min",{badge:"Quiz"})])]},{slug:"quantum-computing",title:"Quantum Computing",shortTitle:"Quantum Computing",category:"Computation",label:"Niche",theme:"pink",homeClass:"tc-qc",summary:"Qubits, gates, entanglement, and quantum algorithms from scratch.",description:"Build a clear picture of quantum computation without collapsing into mysticism: state vectors, gates, measurement, and algorithmic consequences.",estimatedTime:"~5h",level:"Advanced",tags:["Qubits","Entanglement","Measurement","Algorithms"],outcomes:["Explain qubits and entanglement with mathematical clarity.","Understand what quantum speedups depend on and what they do not.","Separate genuine quantum ideas from popular overstatement."],currentLessonSlug:"qubit-intuition",chapters:[L("States",[y("qubit-intuition","Qubit intuition","What changes when information is a state vector.","16 min",{badge:"Quiz"}),y("superposition","Superposition","What it means and what it does not mean.","14 min"),y("measurement","Measurement","How observation changes the system.","15 min"),y("bloch-sphere","The Bloch sphere","A geometric view of single-qubit states.","12 min")]),L("Operations",[y("quantum-gates","Quantum gates","Unitary updates as computation.","17 min"),y("entanglement","Entanglement","Correlation beyond classical factorization.","18 min",{badge:"Quiz"}),y("circuit-model","Circuit model","How quantum programs are composed.","15 min"),y("noise","Noise and decoherence","Why physical systems fight ideal computation.","13 min")]),L("Algorithms",[y("deutsch-jozsa","Deutsch-Jozsa","A first taste of quantum advantage.","16 min"),y("grover","Grover's algorithm","What quadratic speedup actually buys you.","20 min",{badge:"Quiz"}),y("shor","Shor's algorithm","Factorization and why cryptographers care.","24 min"),y("bqp","Complexity classes","What BQP says about computational power.","14 min")]),L("Reality Check",[y("hardware-models","Hardware models","Superconducting, trapped-ion, and beyond.","14 min"),y("error-correction","Error correction","Why scale is mostly an error problem.","18 min"),y("post-quantum","Post-quantum implications","What quantum changes for modern cryptography.","15 min"),y("quantum-skepticism","What quantum does not do","Keeping claims grounded and useful.","12 min")])]},{slug:"formal-verification",title:"Formal Verification",shortTitle:"Formal Verification",category:"Formal Methods",label:"Niche",theme:"green",homeClass:"tc-fv",summary:"Coq, Lean, TLA+, and proving systems correct mathematically.",description:"Move from vague correctness claims to specifications, invariants, proof obligations, and machine-checked confidence.",estimatedTime:"~6h",level:"Advanced",tags:["Specs","Invariants","Lean","TLA+","Proofs"],outcomes:["Write clearer specifications and invariants for non-trivial systems.","Understand what proof assistants and model checkers are actually buying you.","Use counterexamples to improve system design instead of guessing."],currentLessonSlug:"specification-thinking",chapters:[L("Specifications",[y("specification-thinking","Specification thinking","Turning vague requirements into precise claims.","15 min",{badge:"Quiz"}),y("state-machines","State machines","Modeling behavior through states and transitions.","16 min"),y("invariants","Invariants","Naming what must always remain true.","18 min",{badge:"Quiz"}),y("counterexamples","Counterexamples","Learning from failures in the model.","14 min")]),L("Verification Tools",[y("model-checking","Model checking","Exhausting small state spaces with discipline.","16 min"),y("proof-assistants","Proof assistants","Interactive proving as engineering work.","19 min"),y("tla-plus","TLA+ workflows","Specs that match distributed reasoning.","17 min"),y("lean-coq","Lean and Coq","How theorem proving feels in practice.","18 min")]),L("System Guarantees",[y("safety-liveness","Safety vs liveness","Two distinct promises you should never blur.","14 min"),y("refinement","Refinement","Relating abstract specs to concrete systems.","17 min",{badge:"Quiz"}),y("concurrency-proof","Concurrency reasoning","Shared state without wishful thinking.","19 min"),y("protocol-verification","Protocol verification","When distributed assumptions meet proof obligations.","20 min")]),L("Practice",[y("bug-taxonomy","Bugs worth verifying","Where formal methods pay for themselves.","13 min"),y("verification-cost","Verification cost","How to choose the right depth of rigor.","12 min"),y("human-factors","Human factors","Writing proofs teams can maintain.","11 min"),y("review-workflow","Review workflow","Turning proofs into engineering confidence.","14 min")])]},{slug:"category-theory",title:"Category Theory",shortTitle:"Category Theory",category:"Mathematics",label:"Niche",theme:"orange",homeClass:"tc-cat",summary:"Objects, morphisms, functors, monads, and abstraction with teeth.",description:"Study the abstractions that sit under functional programming, algebraic structure, and compositional reasoning without dissolving into empty symbolism.",estimatedTime:"~5h",level:"Advanced",tags:["Objects","Morphisms","Functors","Monads","Composition"],outcomes:["Understand category theory as structured composition, not decorative abstraction.","Read functional programming ideas with better mathematical footing.","See how universal properties simplify design and reasoning."],currentLessonSlug:"objects-morphisms",chapters:[L("Foundations",[y("objects-morphisms","Objects and morphisms","The basic language of compositional structure.","15 min",{badge:"Quiz"}),y("composition","Composition","How arrows combine and why associativity matters.","14 min"),y("identity","Identity arrows","The neutral element that keeps structure coherent.","12 min"),y("examples","Concrete examples","Sets, functions, and typed programs as categories.","16 min")]),L("Structure",[y("functors","Functors","Structure-preserving maps between categories.","17 min",{badge:"Quiz"}),y("natural-transformations","Natural transformations","How functors relate at a deeper level.","19 min"),y("products-coproducts","Products and coproducts","Universal views of pairing and choice.","18 min"),y("limits","Limits","Capturing structure through universal properties.","16 min")]),L("Programming Links",[y("monoids-vs-categories","Monoids and categories","Why composition keeps reappearing.","13 min"),y("monads","Monads","A disciplined abstraction for sequencing context.","21 min",{badge:"Quiz"}),y("applicatives","Applicatives","When structure is enough without full sequencing.","15 min"),y("composition-in-code","Composition in code","Seeing categorical ideas inside real APIs.","14 min")]),L("Abstraction",[y("universal-properties","Universal properties","Why definitions by behavior are so powerful.","18 min"),y("adjunctions","Adjunctions","A deeper pattern that shows up everywhere.","20 min"),y("initial-terminal","Initial and terminal objects","The edges of a category tell you a lot.","12 min"),y("why-this-matters","Why this matters","Keeping the abstraction anchored in useful thinking.","11 min")])]}],Wt=Cm.map(Im);function oh(e){return Wt.find(t=>t.slug===e)}function Ht(e){return e.chapters.flatMap((t,n)=>t.lessons.map((r,o)=>({chapter:t,chapterIndex:n,lesson:r,lessonIndex:o})))}function zm(e,t){const n=oh(e);if(!n)return null;const r=Ht(n),o=r.find(i=>i.lesson.slug===t||i.lesson.aliases.includes(t));if(!o)return null;const s=r.findIndex(i=>i.lesson.slug===t||i.lesson.aliases.includes(t));return{track:n,chapter:o.chapter,chapterIndex:o.chapterIndex,lesson:o.lesson,lessonIndex:o.lessonIndex,flatIndex:s,totalLessons:r.length,previous:s>0?r[s-1]:null,next:s<r.length-1?r[s+1]:null,lessons:r}}function jm(){const e=Sn();return S.useEffect(()=>{const t=document.getElementById("cursor"),n=window.matchMedia("(pointer: fine)").matches&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!t||!n){document.body.classList.remove("has-custom-cursor");return}document.body.classList.add("has-custom-cursor");const r=i=>{t.style.left=`${i.clientX}px`,t.style.top=`${i.clientY}px`},o=i=>{i.target.closest("a, button, .interactive")&&t.classList.add("cursor-active")},s=i=>{i.target.closest("a, button, .interactive")&&t.classList.remove("cursor-active")};return document.addEventListener("mousemove",r),document.addEventListener("mouseover",o),document.addEventListener("mouseout",s),()=>{document.body.classList.remove("has-custom-cursor"),document.removeEventListener("mousemove",r),document.removeEventListener("mouseover",o),document.removeEventListener("mouseout",s)}},[]),S.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&(r.target.classList.add("visible"),t.unobserve(r.target))})},{threshold:.15,rootMargin:"0px 0px -8% 0px"});return document.querySelectorAll(".fade-up").forEach(n=>{n.classList.remove("visible"),t.observe(n)}),()=>t.disconnect()},[e.pathname]),S.useEffect(()=>{if(e.hash){const t=e.hash.slice(1);window.setTimeout(()=>{const n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},0);return}window.scrollTo(0,0)},[e.pathname,e.hash]),l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"cursor",id:"cursor","aria-hidden":"true"}),l.jsxs(Cf,{children:[l.jsx(Rt,{path:"/",element:l.jsx(Nm,{})}),l.jsx(Rt,{path:"/tracks/:trackSlug",element:l.jsx(Am,{})}),l.jsx(Rt,{path:"/tracks/:trackSlug/lessons/:lessonSlug",element:l.jsx(Rm,{})}),l.jsx(Rt,{path:"/modules/:trackSlug",element:l.jsx(Lm,{})}),l.jsx(Rt,{path:"/modules/:trackSlug/lessons/:lessonSlug",element:l.jsx(Km,{})}),l.jsx(Rt,{path:"*",element:l.jsx(gr,{to:"/",replace:!0})})]})]})}function Nm(){const e=Wt[0],t=e.chapters[0].lessons[2];return l.jsxs("div",{className:"home-page",children:[l.jsx(Pm,{}),l.jsxs("section",{className:"hero",children:[l.jsx("div",{className:"hero-bg"}),l.jsx("div",{className:"hero-tag",children:"Deep learning for serious minds"}),l.jsxs("h1",{className:"hero-title",children:["Learn",l.jsx("br",{}),l.jsx("span",{className:"outline",children:"everything"}),l.jsx("br",{}),l.jsx("span",{className:"accent",children:"deeply."})]}),l.jsx("p",{className:"hero-sub",children:"Structured, bite-sized lessons on the topics no one else covers well. From ZK proofs to category theory, go further than surface level."}),l.jsxs("div",{className:"hero-actions",children:[l.jsx("a",{href:"#topics",className:"btn-primary interactive",children:"Explore Tracks"}),l.jsx("a",{href:"#preview",className:"btn-ghost interactive",children:"See a lesson →"})]}),l.jsxs("div",{className:"hero-stats",children:[l.jsx(ks,{number:"40+",label:"Topics"}),l.jsx(ks,{number:"500+",label:"Lessons"}),l.jsx(ks,{number:"Free",label:"Always"})]})]}),l.jsx("div",{className:"marquee-section",children:l.jsx("div",{className:"marquee-track",children:[...Wt,...Wt].map((n,r)=>l.jsxs("div",{className:"marquee-item",children:[l.jsx("span",{className:"marquee-dot",children:"◆"}),n.title]},`${n.slug}-${r}`))})}),l.jsxs("section",{className:"why-section fade-up",children:[l.jsx("div",{className:"section-tag",children:"Why HighFaucet"}),l.jsxs("div",{className:"why-header",children:[l.jsx("h2",{className:"why-title",children:"Built for people who actually want to know."}),l.jsx("p",{className:"why-body",children:"Most learning platforms stop at the surface. HighFaucet is built for the ones who want to understand how things actually work, from first principles, with no hand-waving."})]}),l.jsxs("div",{className:"why-cards",children:[l.jsx(ws,{number:"01",icon:"🔭",title:"Depth first",text:"Every track is built to go deep. We do not stop at definitions. We go until you can derive it yourself."}),l.jsx(ws,{number:"02",icon:"🗂",title:"Structured paths",text:"Each topic is laid out as a progression of chapters, lessons, and quizzes. You always know where you are.",accent:!0}),l.jsx(ws,{number:"03",icon:"🌐",title:"No account needed",text:"Progress can be lightweight and direct. Open the platform and start learning immediately."})]})]}),l.jsxs("section",{className:"topics-section",id:"topics",children:[l.jsxs("div",{className:"topics-header",children:[l.jsxs("div",{children:[l.jsx("div",{className:"section-tag",children:"Tracks"}),l.jsxs("h2",{className:"topics-title",children:["Pick a",l.jsx("br",{}),l.jsx("span",{className:"outline",children:"rabbit hole."})]})]}),l.jsx("a",{href:"#footer",className:"btn-ghost interactive",style:{color:"var(--white-dim)"},children:"View all tracks →"})]}),l.jsx("div",{className:"topics-grid",children:Wt.map((n,r)=>l.jsxs(ne,{className:`topic-card ${n.homeClass} fade-up interactive ${Mm(r)}`,to:`/tracks/${n.slug}`,children:[l.jsx("div",{className:"topic-card-bg"}),l.jsxs("div",{className:"topic-lessons",children:[n.totalLessons," lessons"]}),l.jsx("div",{className:"topic-pill",children:n.label}),l.jsx("h3",{children:n.title}),l.jsx("p",{children:n.summary})]},n.slug))})]}),l.jsxs("section",{className:"how-section",id:"how",children:[l.jsx("div",{className:"section-tag section-tag-dark",children:"How it works"}),l.jsx("h2",{className:"how-title",children:"Learning that does not waste your time."}),l.jsxs("div",{className:"how-steps",children:[l.jsx(Kr,{number:"01",title:"Pick a track",text:"Choose any topic from the library. Each one is self-contained with a clear start-to-finish path."}),l.jsx(Kr,{number:"02",title:"Work through lessons",text:"Short, focused lessons with no fluff. Read, absorb, think. Each one builds on the last."}),l.jsx(Kr,{number:"03",title:"Take the quiz",text:"Each chapter ends with a comprehension check that pushes on real understanding."}),l.jsx(Kr,{number:"04",title:"Track progress",text:"Move through the material in a structured way with clear progress and no distractions."})]})]}),l.jsxs("section",{className:"preview-section",id:"preview",children:[l.jsx("div",{className:"preview-header",children:l.jsxs("div",{children:[l.jsx("div",{className:"section-tag",children:"Lesson Preview"}),l.jsxs("h2",{className:"preview-title",children:["This is what",l.jsx("br",{}),"deep looks like."]})]})}),l.jsxs("div",{className:"lesson-mockup",children:[l.jsxs("div",{className:"lesson-sidebar",children:[l.jsx("div",{className:"lesson-topic-name",children:e.title}),e.chapters.slice(0,2).map(n=>l.jsxs("div",{children:[l.jsxs("div",{className:"lesson-chapter",children:["Chapter — ",n.title]}),n.lessons.slice(0,n.title==="Foundations"?5:3).map(r=>l.jsx("div",{className:`lesson-item ${r.slug===t.slug?"active":r.title==="What is a proof?"||r.title==="Interactive vs non-interactive proofs"?"done":""}`,children:r.title},r.slug))]},n.title))]}),l.jsxs("div",{className:"lesson-content",children:[l.jsxs("div",{className:"lesson-breadcrumb",children:[e.shortTitle," → Chapter 1 → Lesson 3"]}),l.jsx("h2",{children:t.title}),l.jsxs("p",{children:["A proof system is defined by two fundamental properties.",l.jsx("strong",{children:" Completeness "}),"guarantees that an honest prover can always convince an honest verifier of a true statement.",l.jsx("strong",{children:" Soundness "}),"guarantees that no cheating prover can convince the verifier of a false statement except with negligible probability."]}),l.jsx("p",{children:"Together, these properties form the backbone of any cryptographic proof system. Without completeness, proofs would fail for legitimate statements. Without soundness, an adversary could fabricate proofs for lies."}),l.jsx("div",{className:"lesson-code",children:`// Completeness: if x is true, honest proofs pass
// Soundness: if x is false, cheating fails except negligibly`}),l.jsxs("div",{className:"lesson-quiz-teaser",children:[l.jsxs("div",{children:[l.jsx("div",{className:"quiz-label",children:"Quick check"}),l.jsx("div",{className:"quiz-q",children:"Which property prevents a cheating prover from proving false statements?"})]}),l.jsx(ne,{className:"quiz-btn interactive",to:`/tracks/${e.slug}/lessons/${t.slug}`,children:"Answer →"})]})]})]})]}),l.jsxs("section",{className:"free-section fade-up",children:[l.jsxs("h2",{className:"free-title",children:[l.jsx("span",{className:"outline",children:"Completely"}),l.jsx("br",{}),l.jsx("span",{className:"yellow",children:"free."}),l.jsx("br",{}),l.jsx("span",{className:"outline",children:"Forever."})]}),l.jsx("p",{className:"free-sub",children:"No subscriptions, no paywalls, no accounts. HighFaucet is the kind of learning platform that stays open."}),l.jsx(ne,{className:"btn-primary interactive",to:`/tracks/${e.slug}`,children:"Start Learning Now"})]}),l.jsx(Wm,{})]})}function Am(){var g,f,m;const{trackSlug:e}=Bo(),t=oh(e),[n,r]=S.useState(()=>new Set([0]));if(S.useEffect(()=>{if(!t)return;const v=Ht(t).findIndex(w=>w.lesson.slug===t.currentLessonSlug),k=Ht(t).slice(0,Math.max(v,0)+1).reduce((w,C)=>C.chapterIndex,0);r(new Set([k]))},[t]),!t)return l.jsx(gr,{to:"/",replace:!0});const o=Ht(t),s=o.findIndex(v=>v.lesson.slug===t.currentLessonSlug);((g=o[s])==null?void 0:g.chapter)??t.chapters[0];const i=((f=o[s])==null?void 0:f.lesson)??t.chapters[0].lessons[0],a=((m=o[s])==null?void 0:m.chapterIndex)??0,c=188-188*t.progress.percent/100,u=v=>{r(k=>{const w=new Set(k);return w.has(v)?w.delete(v):w.add(v),w})};return l.jsxs("div",{className:`track-page theme-${t.theme}`,children:[l.jsx(Em,{track:t}),l.jsxs("div",{className:"hero track-hero",children:[l.jsx("div",{className:"hero-glow"}),l.jsxs("div",{className:"hero-inner",children:[l.jsxs("div",{className:"hero-left fade-up",children:[l.jsxs("div",{className:"topic-pill track-topic-pill",children:[l.jsx("div",{className:"topic-pill-dot"}),t.label," · ",t.category]}),l.jsx("h1",{className:"hero-title",children:El(t.title).map((v,k)=>l.jsxs("span",{children:[k===1?l.jsx("span",{className:"outline",children:v}):v,k<El(t.title).length-1?l.jsx("br",{}):null]},v))}),l.jsx("p",{className:"hero-desc",children:t.description}),l.jsxs("div",{className:"hero-meta-row",children:[l.jsx(Mr,{value:String(t.chapters.length),label:"Chapters"}),l.jsx("div",{className:"hero-meta-sep"}),l.jsx(Mr,{value:String(t.totalLessons),label:"Lessons"}),l.jsx("div",{className:"hero-meta-sep"}),l.jsx(Mr,{value:t.estimatedTime,label:"Est. time"}),l.jsx("div",{className:"hero-meta-sep"}),l.jsx(Mr,{value:t.level,label:"Level",accent:!0})]}),l.jsx("div",{className:"hero-tags",children:t.tags.map(v=>l.jsx("span",{className:"tag",children:v},v))})]}),l.jsxs("div",{className:"progress-card fade-up fade-up-delay-1",children:[l.jsx("div",{className:"pc-label",children:"Your progress"}),l.jsxs("div",{className:"pc-ring-wrap",children:[l.jsxs("div",{className:"pc-ring",children:[l.jsxs("svg",{viewBox:"0 0 72 72",children:[l.jsx("circle",{className:"pc-ring-bg",cx:"36",cy:"36",r:"30"}),l.jsx("circle",{className:"pc-ring-fill",cx:"36",cy:"36",r:"30",style:{strokeDashoffset:c}})]}),l.jsxs("div",{className:"pc-ring-text",children:[t.progress.percent,"%"]})]}),l.jsxs("div",{className:"pc-ring-info",children:[l.jsx("h4",{children:"In progress"}),l.jsxs("p",{children:["Chapter ",a+1," of ",t.chapters.length,l.jsx("br",{}),i.title]})]})]}),l.jsxs("div",{className:"pc-stats",children:[l.jsx(Or,{value:String(t.progress.completedLessons),label:"Done"}),l.jsx(Or,{value:String(t.progress.remainingLessons),label:"Remaining"}),l.jsx(Or,{value:"100%",label:"Quiz score"}),l.jsx(Or,{value:t.estimatedTime,label:"Total"})]}),l.jsx(ne,{className:"pc-continue-btn interactive",to:`/tracks/${t.slug}/lessons/${t.currentLessonSlug}`,children:"Continue lesson →"}),l.jsx("a",{className:"pc-restart interactive",href:"#curriculum",children:"Browse curriculum"})]})]})]}),l.jsx("div",{className:"section-divider"}),l.jsxs("div",{className:"curriculum",id:"curriculum",children:[l.jsxs("div",{className:"curriculum-header",children:[l.jsx("h2",{className:"curriculum-title",children:"Curriculum"}),l.jsxs("div",{className:"curriculum-summary",children:[t.chapters.length," chapters · ",t.totalLessons," lessons"]})]}),t.chapters.map((v,k)=>{const w=n.has(k),d=Ht(t).filter(p=>p.chapterIndex===k).filter(p=>Ht(t).findIndex(b=>b.lesson.slug===p.lesson.slug)<s).length,h=Math.round(d/v.lessons.length*100);return l.jsxs("div",{className:"chapter-block",children:[l.jsxs("button",{className:`chapter-head interactive ${w?"open":""}`,onClick:()=>u(k),type:"button",children:[l.jsxs("div",{className:"chapter-head-left",children:[l.jsx("span",{className:"ch-num",children:String(k+1).padStart(2,"0")}),l.jsx("span",{className:"ch-title",children:v.title})]}),l.jsxs("div",{className:"chapter-head-right",children:[l.jsxs("div",{className:"ch-progress-wrap",children:[l.jsx("div",{className:"ch-progress-track",children:l.jsx("div",{className:"ch-progress-fill",style:{width:`${h}%`}})}),l.jsxs("span",{className:"ch-progress-label",children:[d," / ",v.lessons.length]})]}),l.jsx("div",{className:"ch-chevron",children:"▼"})]})]}),l.jsx("div",{className:`lessons-list ${w?"open":""}`,children:v.lessons.map(p=>{const b=o.findIndex(A=>A.lesson.slug===p.slug),I=b<s?"done":b===s?"active":"pending";return l.jsxs(ne,{className:`lesson-row ${I}`,to:`/tracks/${t.slug}/lessons/${p.slug}`,children:[l.jsx("div",{className:`lr-status ${I==="done"?"done":I==="active"?"active":""}`,children:I==="done"?"✓":I==="active"?"▶":"○"}),l.jsxs("div",{className:"lr-info",children:[l.jsx("div",{className:"lr-title",children:p.title}),l.jsx("div",{className:"lr-desc",children:p.description})]}),l.jsxs("div",{className:"lr-right",children:[l.jsx("span",{className:"lr-duration",children:p.duration}),p.badge?l.jsx("span",{className:"lr-badge quiz",children:p.badge}):null,l.jsx("span",{className:"lr-arrow",children:"→"})]})]},p.slug)})})]},v.title)})]}),l.jsxs("div",{className:"outcomes-section",children:[l.jsx("div",{className:"section-label",children:"What you'll be able to do"}),l.jsx("div",{className:"outcomes-grid",children:t.outcomes.map((v,k)=>l.jsxs("div",{className:"outcome-card",children:[l.jsx("div",{className:"outcome-icon",children:["🔐","⚙️","🔭","🧮","📐","✦"][k%6]}),l.jsx("h4",{children:v.split(".")[0]}),l.jsx("p",{children:v})]},v))})]})]})}function Rm(){var A;const{trackSlug:e,lessonSlug:t}=Bo(),n=S.useMemo(()=>zm(e,t),[e,t]),[r,o]=S.useState(!0),[s,i]=S.useState(()=>new Set([0])),[a,c]=S.useState({}),[u,g]=S.useState(0);if(S.useEffect(()=>{n&&(c({}),i(new Set([n.chapterIndex])),o(!0))},[e,t,n]),S.useEffect(()=>{const T=()=>{const z=document.documentElement,W=z.scrollHeight-z.clientHeight,R=W>0?z.scrollTop/W*100:0;g(R)};return window.addEventListener("scroll",T),T(),()=>window.removeEventListener("scroll",T)},[]),!n)return l.jsx(gr,{to:"/",replace:!0});const{track:f,lesson:m,chapter:v,chapterIndex:k,flatIndex:w,totalLessons:C,previous:d,next:h}=n,p=Math.round((w+1)/C*100),b=m.details.quiz.filter((T,z)=>{const W=a[z];return W!==void 0&&T.options[W].correct}).length,I=m.details.quiz.length>0&&b===m.details.quiz.length;return l.jsxs("div",{className:`lesson-page theme-${f.theme}`,children:[l.jsx("div",{className:"scroll-progress",children:l.jsx("div",{className:"scroll-progress-fill",style:{width:`${u}%`}})}),l.jsxs("div",{className:"topbar",children:[l.jsxs("div",{className:"topbar-left",children:[l.jsxs(ne,{to:"/",className:"logo",children:["high",l.jsx("span",{children:"faucet"})]}),l.jsx("div",{className:"topbar-sep"}),l.jsx("div",{className:"topbar-track",children:f.title})]}),l.jsxs("div",{className:"topbar-right",children:[l.jsxs("div",{className:"progress-bar-wrap",children:[l.jsx("span",{className:"progress-label",children:"Progress"}),l.jsx("div",{className:"progress-track",children:l.jsx("div",{className:"progress-fill",style:{width:`${p}%`}})}),l.jsxs("span",{className:"progress-pct",children:[p,"%"]})]}),l.jsxs("button",{className:"toggle-sidebar-btn interactive",id:"sidebarToggle",onClick:()=>o(T=>!T),type:"button",children:["☰ ",l.jsx("span",{children:r?"Hide":"Show"})]})]})]}),l.jsxs("div",{className:"layout",style:{"--sidebar-offset":r?"var(--sidebar-w)":"0px","--sidebar-shift":r?"0px":"calc(-1 * var(--sidebar-w))"},children:[l.jsxs("aside",{className:`sidebar ${r?"":"collapsed"}`,children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsx("div",{className:"sidebar-topic-pill",children:f.label}),l.jsx("div",{className:"sidebar-topic-name",children:f.title})]}),l.jsx("div",{className:"sidebar-body",children:f.chapters.map((T,z)=>{const W=s.has(z);return l.jsxs("div",{className:"chapter-group",children:[l.jsxs("button",{className:`chapter-label interactive ${W?"open":""}`,onClick:()=>i(R=>{const Q=new Set(R);return Q.has(z)?Q.delete(z):Q.add(z),Q}),type:"button",children:[l.jsx("span",{children:T.title}),l.jsx("span",{className:"chapter-toggle",children:"▶"})]}),l.jsx("div",{className:`chapter-lessons ${W?"open":""}`,children:T.lessons.map(R=>{const Q=n.lessons.findIndex(Ve=>Ve.lesson.slug===R.slug),me=Q<w?"done":Q===w?"active":"";return l.jsxs(ne,{className:`lesson-nav-item ${me}`,to:`/tracks/${f.slug}/lessons/${R.slug}`,children:[l.jsx("span",{className:`nav-status ${me==="done"?"done-icon":me==="active"?"active-icon":""}`,children:me==="done"?"✓":me==="active"?"◆":"○"}),l.jsx("span",{className:"nav-lesson-name",children:R.title})]},R.slug)})})]},T.title)})})]}),l.jsx("main",{className:`main ${r?"":"expanded"}`,id:"main",children:l.jsxs("article",{className:"lesson-area",children:[l.jsxs("div",{className:"lesson-meta",children:[l.jsxs("span",{className:"lesson-chapter-badge",children:["Chapter ",k+1," — ",v.title]}),l.jsx("span",{className:"lesson-meta-sep",children:"·"}),l.jsxs("span",{className:"lesson-num",children:["Lesson ",m.lessonNumber??w+1," of ",C]})]}),l.jsx("h1",{className:"lesson-title",children:m.title.split(" & ").map((T,z,W)=>l.jsxs("span",{children:[T,z<W.length-1?l.jsx("br",{}):null]},T))}),l.jsx("p",{className:"lesson-intro",children:m.details.intro}),l.jsx("div",{className:"lesson-body",children:m.details.blocks.map((T,z)=>l.jsx(_m,{block:T},`${T.type}-${z}`))}),l.jsxs("div",{className:"quiz-section",id:"quizSection",children:[l.jsxs("div",{className:"quiz-header",children:[l.jsx("div",{className:"quiz-icon",children:"⚡"}),l.jsxs("div",{children:[l.jsx("div",{className:"quiz-title",children:"Check your understanding"}),l.jsxs("div",{className:"quiz-subtitle",children:[m.details.quiz.length," question",m.details.quiz.length>1?"s":""," · answers explained"]})]})]}),m.details.quiz.map((T,z)=>{const W=a[z],R=W!==void 0;return l.jsxs("div",{className:"quiz-card",children:[l.jsxs("div",{className:"quiz-q-num",children:["Question ",String(z+1).padStart(2,"0")," /"," ",String(m.details.quiz.length).padStart(2,"0")]}),l.jsx("div",{className:"quiz-question",children:T.question}),l.jsx("div",{className:"quiz-options",children:T.options.map((Q,me)=>{const Ve=W===me,yr=R?Q.correct?"quiz-option correct":Ve?"quiz-option incorrect":"quiz-option dimmed":"quiz-option";return l.jsxs("button",{className:yr,onClick:()=>c(Fo=>({...Fo,[z]:me})),type:"button",children:[l.jsx("span",{className:"opt-letter",children:Q.label}),l.jsx("span",{className:"opt-text",children:Q.text}),l.jsx("span",{className:"quiz-result-icon",children:Q.correct?"✓":"✗"})]},Q.label)})}),l.jsxs("div",{className:`quiz-explanation ${R?"visible":""}`,children:[l.jsx("strong",{children:"Correct."})," ",T.explanation]})]},T.question)}),l.jsxs("div",{className:`complete-banner ${I?"show":""}`,children:[l.jsx("div",{className:"complete-banner-icon",children:"✦"}),l.jsxs("div",{className:"complete-banner-text",children:[l.jsx("h3",{children:"Lesson complete"}),l.jsx("p",{children:"You answered every question correctly. Move on to the next lesson when you are ready."})]})]})]}),(A=m.details.sources)!=null&&A.length?l.jsxs("div",{className:"lesson-sources",children:[l.jsx("div",{className:"section-label",children:"Sources"}),l.jsx("div",{className:"sources-list",children:m.details.sources.map(T=>l.jsxs("a",{className:"source-item interactive",href:T.url,target:"_blank",rel:"noreferrer",children:[l.jsx("span",{className:"source-title",children:T.title}),l.jsx("span",{className:"source-url",children:"Open ↗"})]},`${T.title}-${T.url}`))})]}):null,l.jsxs("div",{className:"lesson-nav-footer",children:[d?l.jsxs(ne,{to:`/tracks/${f.slug}/lessons/${d.lesson.slug}`,className:"nav-footer-btn",children:[l.jsx("span",{className:"nfb-label",children:"← Previous"}),l.jsx("span",{className:"nfb-title",children:d.lesson.title})]}):l.jsxs(ne,{to:`/tracks/${f.slug}`,className:"nav-footer-btn",children:[l.jsx("span",{className:"nfb-label",children:"← Track"}),l.jsx("span",{className:"nfb-title",children:f.title})]}),h?l.jsxs(ne,{to:`/tracks/${f.slug}/lessons/${h.lesson.slug}`,className:"nav-footer-btn primary",children:[l.jsx("span",{className:"nfb-label",children:"Next →"}),l.jsx("span",{className:"nfb-title",children:h.lesson.title})]}):l.jsxs(ne,{to:`/tracks/${f.slug}`,className:"nav-footer-btn primary",children:[l.jsx("span",{className:"nfb-label",children:"Track →"}),l.jsx("span",{className:"nfb-title",children:"Back to curriculum"})]})]})]})})]})]})}function _m({block:e}){return e.type==="heading"?l.jsx("h2",{children:e.text}):e.type==="paragraph"?l.jsx("p",{children:e.text}):e.type==="definition"?l.jsxs("div",{className:"def-box",children:[l.jsx("div",{className:"def-box-label",children:e.label}),l.jsx("p",{children:e.text})]}):e.type==="note"?l.jsxs("div",{className:"note-box",children:[l.jsx("div",{className:"note-icon",children:"→"}),l.jsx("p",{children:e.text})]}):e.type==="code"?l.jsxs("div",{className:"code-block",children:[l.jsx("div",{className:"code-block-label",children:e.label}),l.jsx("pre",{children:e.code})]}):null}function Pm(){return l.jsxs("nav",{children:[l.jsxs(ne,{className:"nav-logo",to:"/",children:["high",l.jsx("span",{children:"faucet"})]}),l.jsxs("ul",{className:"nav-links",children:[l.jsx("li",{children:l.jsx("a",{href:"#topics",className:"interactive",children:"Tracks"})}),l.jsx("li",{children:l.jsx("a",{href:"#how",className:"interactive",children:"How"})}),l.jsx("li",{children:l.jsx("a",{href:"#preview",className:"interactive",children:"Preview"})}),l.jsx("li",{children:l.jsx("a",{href:"#footer",className:"interactive",children:"About"})})]}),l.jsx(ne,{className:"nav-cta interactive",to:"/tracks/zk-proofs",children:"Start Learning"})]})}function Em({track:e}){return l.jsxs("nav",{className:"track-nav",children:[l.jsxs(ne,{className:"nav-logo",to:"/",children:["high",l.jsx("span",{children:"faucet"})]}),l.jsxs("div",{className:"nav-center",children:[l.jsx("span",{children:"Tracks"}),l.jsx("span",{className:"sep",children:"/"}),l.jsx("span",{className:"crumb-active",children:e.title})]}),l.jsxs("div",{className:"nav-right",children:[l.jsx(ne,{className:"nav-pill interactive",to:"/",children:"Home"}),l.jsx(ne,{className:"nav-start-btn interactive",to:`/tracks/${e.slug}/lessons/${e.currentLessonSlug}`,children:"Start Track"})]})]})}function Wm(){return l.jsxs("footer",{id:"footer",children:[l.jsxs("div",{className:"footer-top",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"footer-logo",children:["high",l.jsx("span",{children:"faucet"})]}),l.jsx("div",{className:"footer-tagline",children:"Deep learning for serious minds."})]}),l.jsxs("div",{className:"footer-links",children:[l.jsxs("div",{className:"footer-col",children:[l.jsx("h4",{children:"Tracks"}),l.jsx("ul",{children:Wt.slice(0,5).map(e=>l.jsx("li",{children:l.jsx(ne,{to:`/tracks/${e.slug}`,children:e.shortTitle})},e.slug))})]}),l.jsxs("div",{className:"footer-col",children:[l.jsx("h4",{children:"More"}),l.jsx("ul",{children:Wt.slice(5).map(e=>l.jsx("li",{children:l.jsx(ne,{to:`/tracks/${e.slug}`,children:e.shortTitle})},e.slug))})]}),l.jsxs("div",{className:"footer-col",children:[l.jsx("h4",{children:"Project"}),l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("a",{href:"#how",children:"How it works"})}),l.jsx("li",{children:l.jsx("a",{href:"https://github.com/",target:"_blank",rel:"noreferrer",children:"GitHub"})}),l.jsx("li",{children:l.jsx("a",{href:"#preview",children:"Preview"})}),l.jsx("li",{children:l.jsx("a",{href:"#topics",children:"Suggest a topic"})})]})]})]})]}),l.jsxs("div",{className:"footer-bottom",children:[l.jsx("div",{className:"footer-copy",children:"© 2026 HighFaucet. Open source. No rights reserved."}),l.jsxs("div",{className:"footer-badge",children:[l.jsx("div",{className:"badge-dot"}),"All systems operational"]})]})]})}function ws({number:e,icon:t,title:n,text:r,accent:o=!1}){return l.jsxs("div",{className:`why-card fade-up ${o?"accent-yellow":""}`,children:[l.jsx("div",{className:"why-card-num",children:e}),l.jsx("div",{className:"why-card-icon",children:t}),l.jsx("h3",{children:n}),l.jsx("p",{children:r})]})}function ks({number:e,label:t}){return l.jsxs("div",{children:[l.jsx("div",{className:"hero-stat-num",children:e}),l.jsx("div",{className:"hero-stat-label",children:t})]})}function Kr({number:e,title:t,text:n}){return l.jsxs("div",{className:"how-step fade-up",children:[l.jsx("div",{className:"how-step-num",children:e}),l.jsx("h3",{children:t}),l.jsx("p",{children:n})]})}function Mr({value:e,label:t,accent:n=!1}){return l.jsxs("div",{className:"hero-meta-item",children:[l.jsx("span",{className:"meta-val",style:n?{color:"var(--accent-color)"}:void 0,children:e}),l.jsx("span",{className:"meta-label",children:t})]})}function Or({value:e,label:t}){return l.jsxs("div",{className:"pc-stat",children:[l.jsx("div",{className:"pc-stat-val",children:e}),l.jsx("div",{className:"pc-stat-label",children:t})]})}function Lm(){const{trackSlug:e}=Bo();return l.jsx(gr,{to:`/tracks/${e}`,replace:!0})}function Km(){const{trackSlug:e,lessonSlug:t}=Bo();return l.jsx(gr,{to:`/tracks/${e}/lessons/${t}`,replace:!0})}function Mm(e){return["","fade-up-delay-1","fade-up-delay-2","fade-up-delay-3"][e%4]}function El(e){if(e==="Zero-Knowledge Proofs")return["Zero-","Knowledge","Proofs"];const t=e.split(" ");return t.length<=2?t:[t.slice(0,t.length-1).join(" "),t[t.length-1]]}bs.createRoot(document.getElementById("root")).render(l.jsx(Vl.StrictMode,{children:l.jsx(Pf,{children:l.jsx(jm,{})})}));
