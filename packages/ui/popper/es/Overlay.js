!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("react"));else if("function"==typeof define&&define.amd)define(["react"],e);else{var o="object"==typeof exports?e(require("react")):e(t.react);for(var n in o)("object"==typeof exports?exports:t)[n]=o[n]}}(window,(function(t){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=15)}([function(e,o){e.exports=t},function(t,e,o){t.exports=o(9)()},function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return r}));const n=window;class r{constructor(){this.getOuterSizes=t=>{let e=t.style.display,o=t.style.visibility;t.style.display="block",t.style.visibility="hidden";var r=n.getComputedStyle(t),i=parseFloat(r.marginTop)+parseFloat(r.marginBottom),a=parseFloat(r.marginLeft)+parseFloat(r.marginRight),s={width:t.offsetWidth+a,height:t.offsetHeight+i};return t.style.display=e,t.style.visibility=o,s},this.getOffsets=(t,e,o,n)=>{const{getOffsetRectRelativeToCustomParent:r,getOuterSizes:i,getOffsetParent:a}=this;n=n.split("-")[0];var s={};s.position=o;var c="fixed"===s.position,l=r(e,a(t),c),p=i(t);return-1!==["right","left"].indexOf(n)?(s.top=l.top+l.height/2-p.height/2,s.left="left"===n?l.left-p.width:l.right):(s.left=l.left+l.width/2-p.width/2,s.top="top"===n?l.top-p.height:l.bottom),s.width=p.width,s.height=p.height,{popper:s,reference:l}},this.setStyle=(t,e)=>{Object.keys(e).forEach((function(o){var n,r="";-1!==["width","height","top","right","bottom","left"].indexOf(o)&&(""!==(n=e[o])&&!isNaN(parseFloat(n))&&isFinite(n))&&(r="px"),t.style[o]=e[o]+r}))},this.setupEventListeners=(t,e)=>{this.scrollCallback=()=>{e(o)},n.addEventListener("resize",this.scrollCallback);var o=this.getScrollParent(t);o!==n.document.body&&o!==n.document.documentElement||(o=n),o.addEventListener("scroll",this.scrollCallback)},this.isBody=t=>{const{getNodeName:e}=this;return!t||["html","body","#document"].includes(e(t))},this.getScrollParent=t=>{const{getStyleComputedProperty:e,getScrollParent:o,getNodeName:r}=this;var i=t.parentNode;return["html","body","#document"].includes(r(t))?document.documentElement||document.body:i?i===n.document?n.document.body.scrollTop?n.document.body:n.document.documentElement:-1!==["scroll","auto"].indexOf(e(i,"overflow"))||-1!==["scroll","auto"].indexOf(e(i,"overflow-x"))||-1!==["scroll","auto"].indexOf(e(i,"overflow-y"))?i:o(t.parentNode):t},this.isFixed=t=>{const{getStyleComputedProperty:e,isFixed:o,getNodeName:n}=this;return!["html","body","#document"].includes(n(t))&&("fixed"===e(t,"position")||(t.parentNode?o(t.parentNode):t))},this.getStyleComputedProperty=(t,e)=>window.getComputedStyle(t,null)[e],this._getPosition=(t,e)=>{const{getOffsetParent:o,isFixed:n}=this;var r=o(e);return this._options.forceAbsolute?"absolute":n(e,r)?"fixed":"absolute"},this.getOffsetParent=t=>{var e=t.offsetParent;return e!==n.document.body&&e?e:n.document.documentElement},this.getOffsetRectRelativeToCustomParent=(t,e,o)=>{const{getScrollParent:n,getBoundingClientRect:r}=this;var i=r(t),a=r(e);if(o){var s=n(e);a.top+=s.scrollTop,a.bottom+=s.scrollTop,a.left+=s.scrollLeft,a.right+=s.scrollLeft}return{top:i.top-a.top,left:i.left-a.left,bottom:i.top-a.top+i.height,right:i.left-a.left+i.width,width:i.width,height:i.height}},this.getBoundingClientRect=t=>{var e=t.getBoundingClientRect(),o=-1!==navigator.userAgent.indexOf("MSIE")&&"HTML"===t.tagName?-t.scrollTop:e.top;return{left:e.left,top:o,right:e.right,bottom:e.bottom,width:e.right-e.left,height:e.bottom-o}},this.removeEventListeners=t=>{const{getScrollParent:e}=this;n.removeEventListener("resize",this.scrollCallback);var o=e(t);o!==n.document.body&&o!==n.document.documentElement||(o=n),o.removeEventListener("scroll",this.scrollCallback),this.scrollCallback=null}}getNodeName(t){return t?(t.nodeName||"").toLowerCase():null}}},function(t,e,o){"use strict";o.r(e),o.d(e,"getOffset",(function(){return l}));var n=o(2);const{isBody:r,isFixed:i,getOffsetRectRelativeToCustomParent:a}=new n.default,s=(t,e,o,n)=>{let{width:r,popperWidth:i,poperLeft:a,containerWidth:s,attachEleWidth:c}=n,l=e;if(void 0===i){i=o||{}||0}return(o||r)&&(r?i=r:o.clientWidth&&i!==o.clientWidth&&(i=o.clientWidth),a+=i-(c||0),a>=s&&(l=t)),l},c=(t,e,o,n,r)=>{let{popperHeight:i,height:a,poperTop:c,containerHeight:l}=n,p=t;void 0===i&&(i=0),(o||a)&&(a?i=a:o.clientHeight&&i!==o.clientHeight&&(i=o.clientHeight),c+=i,c>=l&&(p=e));return p=("top-start"===p?"top":"bottom")+"-"+s("end","start",o,r),p},l=(t,e,o)=>{let{attachEle:n,topGap:l,leftGap:p,width:u,container:f,preventOverflow:d}=t;if(!n)return;const{popperHeight:h,popperWidth:m}=e;let g=n.getBoundingClientRect();i(n)&&!r(f)&&(g=a(n,f,i(n)));let b=f.scrollTop,v=f.scrollLeft;r(f)&&(b=document.documentElement.scrollTop||document.body.scrollTop,v=document.documentElement.scrollLeft||document.body.scrollLeft);let y=g.top+b,O=g.left+v;const _=!1===u?"":void 0===u?g.width:u;u=!1===u?m:void 0===u?g.width:u;let w=((t,e,o,n,a)=>{const{popperHeight:l,popperRef:p,popperWidth:u}=n;let{attachEle:f,placement:d,height:h,width:m=0,leftGap:g=0}=o;if(!f)return;let b=document.documentElement.clientHeight||document.body.clientHeight,v=document.documentElement.clientWidth||document.body.clientWidth;i(f)&&(b=e.clientHeight,v=e.clientWidth),r(e)&&(b=document.documentElement.clientHeight||document.body.clientHeight,v=document.documentElement.clientWidth||document.body.clientWidth);const y=t.top+t.height,O={width:m,popperWidth:u,poperLeft:t.left+t.width,containerWidth:v,attachEleWidth:a,leftGap:g},_={popperHeight:l,height:h,poperTop:y,containerHeight:b,leftGap:g};return"top-bottom-start"===d?d=c("bottom-start","top-start",p,_,O):"top-bottom"===d?d=c("bottom","top",p,_,O):"left-right-start"===d?d=s("left-start","right-start",p,O):"left-right"===d?d=s("left","right",p,m):"auto"===d&&((t,e,o,n,r)=>{let i="bottom-start";void 0===e&&(e=0);const a=o?o.clientWidth:0;o||n?n&&(e=n):o&&o.clientHeight&&e!==o.clientHeight&&(e=o.clientHeight),(t.top+e+t.height>r||t.top<e)&&(t.right>a&&(i="right"),t.left>a&&(i="left")),t.top>e&&(i="top-start"),t.top+e+t.height<r&&(i="bottom-start")})(t,l,p,h,b),d||"bottom-start"})(g,f,t,e,g.width)||"bottom-start";const E=g.height;switch(w){case"bottom":y=y+l+E,O=O+p+g.width/2;break;case"bottom-start":y=y+l+E,O+=p;break;case"bottom-end":y=y+l+E,O=O+p-u+g.width;break;case"top":y-=l,O=O+p+g.width/2;break;case"top-start":y-=l,O+=p;break;case"top-end":y-=l,O=O+p-u+g.width;break;case"left":y+=g.height/2,O-=p;break;case"left-start":y+=l,O-=u;break;case"left-end":y=y+g.height-l-h,O-=u;break;case"right":y+=g.height/2,O=O+g.width+p;break;case"right-start":y+=l,O=O+g.width+p;break;case"right-end":y=y+g.height-l-h,O=O+u+p}return d?((t,e,o,n,r,i,a)=>{const{topGap:s,container:c}=a;let l=n;switch(t){case"bottom-start":l=o.top+o.height+s<=0?e+s:n;break;case"top-start":c.clientHeight+o.height-o.bottom<=0&&(l=n-(o.top-c.clientHeight))}return{top:l,width:i,left:r,placement:t}})(w="bottom-start",b,g,y,O,u,t):{width:_,top:y,left:O,placement:w}}},function(t,e,o){"use strict";o.r(e);var n=o(0);e.default=(t,e,o="click",r)=>{const i=Object(n.useRef)(""),a=Object(n.useCallback)(o=>{const n=("function"==typeof e?e():e)||i.current;n&&(r?!r.contains(o.target)&&!n.contains(o.target)&&t(o):!n.contains(o.target)&&t(o))},[t,e,i]);return Object(n.useEffect)(()=>(document.addEventListener(o,a,!0),()=>{document.removeEventListener(o,a,!0)}),[o,t,i]),i}},,,function(t,e,o){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)&&n.length){var a=r.apply(null,n);a&&t.push(a)}else if("object"===i)for(var s in n)o.call(n,s)&&n[s]&&t.push(s)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(t.exports=n)}()},function(t,e,o){"use strict";var n=o(13),r=o.n(n)()((function(t){return t[1]}));r.push([t.i,".hi-popper__container{position:absolute;outline:none}.hi-popper__container--hide{display:none !important}.hi-popper__container .hi-popper__content{position:absolute}.hi-popper__container .hi-popper__content--hide{visibility:hidden;opacity:0}.hi-popper__container .hi-popper__content--top{bottom:0;transform:translateX(-50%)}.hi-popper__container .hi-popper__content--top-start{bottom:0}.hi-popper__container .hi-popper__content--top-end{bottom:0}.hi-popper__container .hi-popper__content--right{transform:translateY(-50%)}.hi-popper__container .hi-popper__content--bottom{transform:translateX(-50%)}.hi-popper__container .hi-popper__content--left{right:0;transform:translateY(-50%)}.hi-popper_transition-enter{opacity:0;transform:scale(0.9)}.hi-popper_transition-enter-active{opacity:1;transform:translateX(0);transition:opacity 300ms, transform 300ms}.hi-popper_transition-exit{opacity:0;transform:translateX(100%);transition:opacity 300ms, transform 300ms}.hi-popper_transition-exit-done{opacity:0;transform:translateX(100%)}.hi-popper_transition-exit-active{opacity:0;transform:scale(0.9);transition:opacity 300ms, transform 300ms}\n",""]),e.a=r},function(t,e,o){"use strict";var n=o(10);function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function t(t,e,o,r,i,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var o={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return o.PropTypes=o,o}},function(t,e,o){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,function(t,e,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}(),a=[];function s(t){for(var e=-1,o=0;o<a.length;o++)if(a[o].identifier===t){e=o;break}return e}function c(t,e){for(var o={},n=[],r=0;r<t.length;r++){var i=t[r],c=e.base?i[0]+e.base:i[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var u=s(p),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:p,updater:g(f,e),references:1}),n.push(p)}return n}function l(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var p,u=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function f(t,e,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,o){var n=o.css,r=o.media,i=o.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h=null,m=0;function g(t,e){var o,n,r;if(e.singleton){var i=m++;o=h||(h=l(e)),n=f.bind(null,o,i,!1),r=f.bind(null,o,i,!0)}else o=l(e),n=d.bind(null,o,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var o=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<o.length;n++){var r=s(o[n]);a[r].references--}for(var i=c(t,e),l=0;l<o.length;l++){var p=s(o[l]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}o=i}}}},function(t,e,o){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=t(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o,n){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);n&&r[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),e.push(c))}},e}},function(t,e,o){"use strict";var n=o(12),r=o.n(n),i=o(8),a={insert:"head",singleton:!1};r()(i.a,a),i.a.locals},function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),i=o(1),a=o.n(i),s=o(7),c=o.n(s),l=o(2),p=o(3),u=o(4);o(14);const{isFixed:f,setupEventListeners:d,removeEventListeners:h,setStyle:m,getStyleComputedProperty:g,isBody:b}=new l.default,v=t=>{const{show:e,attachEle:o,children:i,className:a,height:s,zIndex:l,onMouseOver:v,onMouseOut:y,onMouseEnter:O,onMouseLeave:_,onClickOutside:w,overlayClassName:E,onKeyDown:x}=t,[j,C]=Object(n.useState)(!1),[S,T]=Object(n.useState)({offset:void 0,popperHeight:void 0,popperWidth:void 0,cacheContainerPosition:"static",popperRef:void 0});const P=Object(n.useRef)(),k=Object(n.useRef)();let R;w&&(R=Object(u.default)(t=>{w&&w(t)},void 0,"click",o));const L=Object(n.useCallback)(()=>{if(t.attachEle){const e=Object(p.getOffset)(t,S);k.current=e,P&&T(Object.assign({},S,{popperRef:P.current}))}},[t,S]);if(Object(n.useEffect)(()=>{const{attachEle:e,container:o,show:n}=t;if(e)return;const{cacheContainerPosition:r}=S,i=Object(p.getOffset)(t,S);k.current=i,P&&T(Object.assign({},S,{popperRef:P.current})),n||(e&&j&&h(e),setTimeout(()=>{0===o.querySelectorAll(".hi-popper__container").length&&o&&!b(o)&&j&&m(o,{position:r})},0),C(!1),T(Object.assign({},S,{offset:void 0})))},[e]),Object(n.useEffect)(()=>{const{attachEle:e,children:o,container:n,show:r}=t;if(!(e&&r&&o))return;const{cacheContainerPosition:i,popperRef:a}=S;r&&!j&&(!j&&d(e,L),C(!0)),f(e)&&!b(n)&&"static"===i&&m(n,{position:"relative"}),a||T(Object.assign({},S,{popperRef:P.current,popperHeight:P.current.clientHeight,popperWidth:P.current.clientWidth}))}),Object(n.useEffect)(()=>{const e=Object(p.getOffset)(t,S);k.current=e,S.popperRef&&T(Object.assign({},S,{offset:e}))},[S.popperRef]),Object(n.useEffect)(()=>{const{container:e}=t;T(Object.assign({},S,{cacheContainerPosition:e?g(e,"position"):"static"}))},[]),!e||!i)return null;let{width:N,left:H=0,top:M=0}=t,{offset:W}=S;o&&(W=S.offset||Object(p.getOffset)(t,S),N=W.width,H=W.left+"px",M=W.top+"px");const F=W?"hi-popper__content--"+W.placement:"";return r.a.createElement("div",{ref:R,className:c()(E,"hi-popper__container",{"hi-popper__container--hide":!e}),tabIndex:"-1",onKeyDown:t=>{e&&x&&x(t)},style:{left:H,top:M,zIndex:l}},r.a.createElement("div",{ref:t=>{P.current=t},className:c()(a,F,"hi-popper__content",{"hi-popper__content--hide":!1}),style:{width:N,height:s},onMouseOut:y,onMouseOver:v,onMouseLeave:_,onMouseEnter:O},i))};v.defaultProps={show:!1,topGap:0,leftGap:0,zIndex:1060,placement:"bottom-start"},v.propTypes={width:a.a.oneOfType([a.a.string,a.a.bool,a.a.number]),height:a.a.number,className:a.a.string,show:a.a.bool,topGap:a.a.number,leftGap:a.a.number,zIndex:a.a.number,placement:a.a.oneOf(["auto","bottom","bottom-start","bottom-end","top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","top-bottom-start","top-bottom","left-right","left-right-start"]),onMouseOver:a.a.func,onMouseOut:a.a.func,onMouseEnter:a.a.func,onMouseLeave:a.a.func,container:a.a.any,preventOverflow:a.a.bool},e.default=v}])}));