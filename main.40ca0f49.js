parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t=$(".installation__man"),n=$(".installation__pen"),o=$(".installation__ps"),a=$(".installation__slots"),c=$(".installation__figma"),s=$(".slider-item"),e=$(".prev-button"),i=$(".next-button"),l=$(".slider-dots-dot"),r=0;function h(t){t<0?t=s.length-1:t>=s.length&&(t=0),s.each(function(n,o){$(o).toggleClass("active",n===t)}),l.each(function(n,o){$(o).toggleClass("active",n===t)}),r=t}$(document).ready(function(){var t=$(".page"),n=localStorage.getItem("hash");n&&(window.location.hash=n,"#menu"===window.location.hash?(localStorage.setItem("hash",window.location.hash),t.css("overflow","hidden")):t.css("overflow","visible"))}),$(window).on("hashchange",function(){var t=$(".page");"#menu"===window.location.hash?(localStorage.setItem("hash",window.location.hash),t.css("overflow","hidden")):(localStorage.removeItem("hash"),t.css("overflow","visible"))}),$(document).on("mousemove",function(s){var e=s.clientX,i=s.clientY;n.css("transform","translate(-".concat(e/80,"px,-").concat(i/80,"px)")),t.css("transform","translate(-".concat(e/60,"px,-").concat(i/60,"px)")),c.css("transform","translate(-".concat(e/100,"px,-").concat(i/100,"px)")),a.css("transform","translate(-".concat(e/50,"px,-").concat(i/50,"px)")),o.css("transform","translate(-".concat(e/50,"px,-").concat(i/50,"px)"))}),e.on("click",function(){h(r-1)}),i.on("click",function(){h(r+1)}),l.on("click",function(){h($(this).index())}),h(r);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.40ca0f49.js.map