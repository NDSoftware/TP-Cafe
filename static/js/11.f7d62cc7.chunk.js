/*! For license information please see 11.f7d62cc7.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[11],{364:function(e,t){!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,r),c.l=!0,c.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"deepObjectsMerge",(function(){return n})),r.d(t,"getColor",(function(){return a})),r.d(t,"getStyle",(function(){return i})),r.d(t,"hexToRgb",(function(){return l})),r.d(t,"hexToRgba",(function(){return u})),r.d(t,"makeUid",(function(){return d})),r.d(t,"omitByKeys",(function(){return f})),r.d(t,"pickByKeys",(function(){return b})),r.d(t,"rgbToHex",(function(){return h}));var n=function e(t,r){for(var n=0,c=Object.keys(r);n<c.length;n++){var o=c[n];r[o]instanceof Object&&Object.assign(r[o],e(t[o],r[o]))}return Object.assign(t||{},r),t},c=function(){for(var e={},t=document.styleSheets,r="",n=t.length-1;n>-1;n--){for(var c=t[n].cssRules,o=c.length-1;o>-1;o--)if(".ie-custom-properties"===c[o].selectorText){r=c[o].cssText;break}if(r)break}return(r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var r=t.split(": ")[0],n=t.split(": ")[1];r&&n&&(e["--".concat(r.trim())]=n.trim())}})),e},o=function(){return Boolean(document.documentMode)&&document.documentMode>=10},s=function(e){return e.match(/^--.*/i)},i=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(s(e)&&o()){var n=c();t=n[e]}else t=window.getComputedStyle(r,null).getPropertyValue(e).replace(/^\s/,"");return t},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r="--".concat(e),n=i(r,t);return n||e},l=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,r,n;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),n=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(r,", ").concat(n,")")},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var r,n,c,o=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!o)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),c=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),c=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(n,", ").concat(c,", ").concat(t/100,")")},d=function(){return"uid-"+Math.random().toString(36).substr(2)},f=function(e,t){for(var r={},n=Object.keys(e),c=0;c<n.length;c++)!t.includes(n[c])&&(r[n[c]]=e[n[c]]);return r},b=function(e,t){for(var r={},n=0;n<t.length;n++)r[t[n]]=e[t[n]];return r},h=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var r="0".concat(parseInt(t[1],10).toString(16)),n="0".concat(parseInt(t[2],10).toString(16)),c="0".concat(parseInt(t[3],10).toString(16));return"#".concat(r.slice(-2)).concat(n.slice(-2)).concat(c.slice(-2))},j={deepObjectsMerge:n,getColor:a,getStyle:i,hexToRgb:l,hexToRgba:u,makeUid:d,omitByKeys:f,pickByKeys:b,rgbToHex:h};t.default=j}]))},389:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var s=c.apply(null,n);s&&e.push(s)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},415:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(389),o=r.n(c),s=r(357),i=r(364),a=r(358),l=r(19);const u=()=>{const[e,t]=Object(n.useState)("rgb(255, 255, 255)"),r=Object(n.createRef)();return Object(n.useEffect)((()=>{const e=r.current.parentNode.firstChild,n=window.getComputedStyle(e).getPropertyValue("background-color");t(n)}),[r]),Object(l.jsx)("table",{className:"table w-100",ref:r,children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-medium-emphasis",children:"HEX:"}),Object(l.jsx)("td",{className:"font-weight-bold",children:Object(i.rgbToHex)(e)})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-medium-emphasis",children:"RGB:"}),Object(l.jsx)("td",{className:"font-weight-bold",children:e})]})]})})},d=({className:e,children:t})=>{const r=o()(e,"theme-color w-75 rounded mb-3");return Object(l.jsxs)(s.C,{xs:12,sm:6,md:4,xl:2,className:"mb-4",children:[Object(l.jsx)("div",{className:r,style:{paddingTop:"75%"}}),t,Object(l.jsx)(u,{})]})};t.default=()=>Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(s.p,{className:"mb-4",children:[Object(l.jsxs)(s.t,{children:["Theme colors",Object(l.jsx)(a.h,{href:"https://coreui.io/docs/utilities/colors/"})]}),Object(l.jsx)(s.q,{children:Object(l.jsxs)(s.tb,{children:[Object(l.jsx)(d,{className:"bg-primary",children:Object(l.jsx)("h6",{children:"Brand Primary Color"})}),Object(l.jsx)(d,{className:"bg-secondary",children:Object(l.jsx)("h6",{children:"Brand Secondary Color"})}),Object(l.jsx)(d,{className:"bg-success",children:Object(l.jsx)("h6",{children:"Brand Success Color"})}),Object(l.jsx)(d,{className:"bg-danger",children:Object(l.jsx)("h6",{children:"Brand Danger Color"})}),Object(l.jsx)(d,{className:"bg-warning",children:Object(l.jsx)("h6",{children:"Brand Warning Color"})}),Object(l.jsx)(d,{className:"bg-info",children:Object(l.jsx)("h6",{children:"Brand Info Color"})}),Object(l.jsx)(d,{className:"bg-light",children:Object(l.jsx)("h6",{children:"Brand Light Color"})}),Object(l.jsx)(d,{className:"bg-dark",children:Object(l.jsx)("h6",{children:"Brand Dark Color"})})]})})]})})}}]);
//# sourceMappingURL=11.f7d62cc7.chunk.js.map