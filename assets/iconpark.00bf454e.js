import{r as c,R as t}from"./antd.dd004b0d.js";var g=["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","className","spin"];function L(e,k){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);k&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,i)}return o}function d(e){for(var k=1;k<arguments.length;k++){var o=arguments[k]!=null?arguments[k]:{};k%2?L(Object(o),!0).forEach(function(i){w(e,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):L(Object(o)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i))})}return e}function w(e,k,o){return k in e?Object.defineProperty(e,k,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[k]=o,e}function H(e,k){if(e==null)return{};var o=z(e,k),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],!(k.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,i)||(o[i]=e[i]))}return o}function z(e,k){if(e==null)return{};var o={},i=Object.keys(e),r,s;for(s=0;s<i.length;s++)r=i[s],!(k.indexOf(r)>=0)&&(o[r]=e[r]);return o}var V={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function x(){return"icon-"+((1+Math.random())*4294967296|0).toString(16).substring(1)}function b(e,k,o){var i=typeof k.fill=="string"?[k.fill]:k.fill||[],r=[],s=k.theme||o.theme;switch(s){case"outline":r.push(typeof i[0]=="string"?i[0]:"currentColor"),r.push("none"),r.push(typeof i[0]=="string"?i[0]:"currentColor"),r.push("none");break;case"filled":r.push(typeof i[0]=="string"?i[0]:"currentColor"),r.push(typeof i[0]=="string"?i[0]:"currentColor"),r.push("#FFF"),r.push("#FFF");break;case"two-tone":r.push(typeof i[0]=="string"?i[0]:"currentColor"),r.push(typeof i[1]=="string"?i[1]:o.colors.twoTone.twoTone),r.push(typeof i[0]=="string"?i[0]:"currentColor"),r.push(typeof i[1]=="string"?i[1]:o.colors.twoTone.twoTone);break;case"multi-color":r.push(typeof i[0]=="string"?i[0]:"currentColor"),r.push(typeof i[1]=="string"?i[1]:o.colors.multiColor.outFillColor),r.push(typeof i[2]=="string"?i[2]:o.colors.multiColor.innerStrokeColor),r.push(typeof i[3]=="string"?i[3]:o.colors.multiColor.innerFillColor);break}return{size:k.size||o.size,strokeWidth:k.strokeWidth||o.strokeWidth,strokeLinecap:k.strokeLinecap||o.strokeLinecap,strokeLinejoin:k.strokeLinejoin||o.strokeLinejoin,colors:r,id:e}}var W=c.exports.createContext(V);W.Provider;function n(e,k,o){return function(i){var r=i.size,s=i.strokeWidth,j=i.strokeLinecap,u=i.strokeLinejoin,f=i.theme,m=i.fill,h=i.className,C=i.spin,E=H(i,g),l=c.exports.useContext(W),v=c.exports.useMemo(x,[]),M=b(v,{size:r,strokeWidth:s,strokeLinecap:j,strokeLinejoin:u,theme:f,fill:m},l),a=[l.prefix+"-icon"];return a.push(l.prefix+"-icon-"+e),k&&l.rtl&&a.push(l.prefix+"-icon-rtl"),C&&a.push(l.prefix+"-icon-spin"),h&&a.push(h),t.createElement("span",d(d({},E),{},{className:a.join(" ")}),o(M))}}var y=n("audit",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M7.99976 36L8.00437 28.0426C8.00527 27.4906 8.45289 27.0432 9.00495 27.0426C12.3389 27.0426 15.6729 27.0426 19.0069 27.0426C19.9284 27.0426 19.9235 26.2252 19.9235 24.2792C19.9235 22.3332 15.0219 20.6941 15.0219 13.8528C15.0219 7.01151 20.0997 5 24.3198 5C28.5399 5 33.1364 7.01151 33.1364 13.8528C33.1364 20.6941 28.2605 21.7818 28.2605 24.2792C28.2605 26.7765 28.2605 27.0426 29.0411 27.0426C32.3607 27.0426 35.6804 27.0426 39.0001 27.0426C39.5523 27.0426 40.0001 27.4904 40.0001 28.0426V36H7.99976Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M8 42H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),Z=n("book",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M8 40C8 36 8 10 8 10C8 6.68629 10.8654 4 14.4 4H40V36C40 36 19.9815 36 14.4 36C9.36225 36 8 36.6842 8 40Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 44H40V36H12C9.79086 36 8 37.7909 8 40C8 42.2091 9.79086 44 12 44Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),O=n("bookshelf",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M5 6H39C39 6 43 8 43 13C43 18 39 20 39 20H5C5 20 9 18 9 13C9 8 5 6 5 6Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M43 28H9C9 28 5 30 5 35C5 40 9 42 9 42H43C43 42 39 40 39 35C39 30 43 28 43 28Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),F=n("building-four",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 14L44 24V44H17L17 14Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M17 14L4 24L4 44H17",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M35 44V32L26 29L26 44",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M44 44H17",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),R=n("bus",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M6.01245 34.005V8.03619C6.01245 6.93162 6.90788 6.03619 8.01245 6.03619H40.0001C41.1046 6.03619 42.0001 6.93162 42.0001 8.03619V34.005C42.0001 35.6619 40.6569 37.005 39.0001 37.005H37.0049V38C37.0049 40.2091 35.2141 42 33.0049 42H33.0045C30.7954 42 29.0045 40.2091 29.0045 38V37.005H19.008V38.0016C19.008 40.2099 17.2178 42 15.0096 42C12.8014 42 11.0113 40.2099 11.0113 38.0016V37.005H9.01245C7.3556 37.005 6.01245 35.6619 6.01245 34.005Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M42 23H6",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M34 13H14V23H34V13Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M14 30H16",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M32 30H34",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),P=n("calendar",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M5 19H43V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V19Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M5 9C5 7.89543 5.89543 7 7 7H41C42.1046 7 43 7.89543 43 9V19H5V9Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M16 4V12",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M32 4V12",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M28 34H34",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M14 34H20",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M28 26H34",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M14 26H20",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),S=n("classroom",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("circle",{cx:"24",cy:"13",r:"9",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M5 44C5 35.5625 11.175 27.6875 16.4 26C16.4 26 21.15 31.0625 24 34.4375L31.6 26C35.875 26.5625 43 35.5625 43 44",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M2 44L46 44",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),D=n("compass-one",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M24 44C33.3888 44 41 36.3888 41 27C41 17.6112 33.3888 10 24 10C14.6112 10 7 17.6112 7 27C7 36.3888 14.6112 44 24 44Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth}),t.createElement("path",{d:"M19 4H29",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M20 27L24 20L28 27L24 34L20 27Z",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M7 27H11",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M37 27H41",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M24 10L24 14",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M24 40L24 44",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M17.5 42.7131C19.5024 43.5424 21.6978 44 24 44C26.3022 44 28.4976 43.5424 30.5 42.7131",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M8.28691 20.5C7.45764 22.5024 7 24.6978 7 27C7 29.3022 7.45764 31.4976 8.28691 33.5",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M39.7129 20.5C40.5422 22.5024 40.9998 24.6978 40.9998 27C40.9998 29.3022 40.5422 31.4976 39.7129 33.5",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M17.0078 11.5C19.1405 10.5364 21.5077 10 24.0001 10C26.4925 10 28.8597 10.5364 30.9924 11.5",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),I=n("document-folder",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M32 6H22V42H32V6Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M42 6H32V42H42V6Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M10 6L18 7L14.5 42L6 41L10 6Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M37 18V15",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M27 18V15",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),N=n("door-handle",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("rect",{x:"6",y:"4",width:"26",height:"40",rx:"2",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M14 34H24",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M42 20V14H23.0004C22.0882 12.7856 20.6358 12 19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22C20.6358 22 22.0882 21.2144 23.0004 20H42Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),T=n("double-down",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M36 12L24 24L12 12",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M36 24L24 36L12 24",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),_=n("double-up",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M12 24L24 12L36 24",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M12 36L24 24L36 36",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),U=n("earth",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M4 24H44",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 44C28.4183 44 32 35.0457 32 24C32 12.9543 28.4183 4 24 4C19.5817 4 16 12.9543 16 24C16 35.0457 19.5817 44 24 44Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M9.85791 10.1421C13.4772 13.7614 18.4772 16 24 16V16C29.5229 16 34.5229 13.7614 38.1422 10.1421",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M38.1422 37.8579C34.5229 34.2386 29.5229 32 24 32C18.4772 32 13.4772 34.2386 9.85791 37.8579",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),A=n("eyes",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 40.9999C33.9411 40.9999 42 32.6778 42 26.9999C42 21.3219 33.9411 12.9999 24 12.9999C14.0589 12.9999 6 21.3277 6 26.9999C6 32.6721 14.0589 40.9999 24 40.9999Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M24 32.9999C27.3137 32.9999 30 30.3136 30 26.9999C30 23.6862 27.3137 20.9999 24 20.9999C20.6863 20.9999 18 23.6862 18 26.9999C18 30.3136 20.6863 32.9999 24 32.9999Z",fill:e.colors[3],stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M13.2637 11.266L15.8582 14.8862",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap}),t.createElement("path",{d:"M35.625 11.7103L33.0304 15.3305",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap}),t.createElement("path",{d:"M24.0088 6.99988V12.9999",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap}))}),G=n("fire",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M24 44C32.2347 44 38.9998 37.4742 38.9998 29.0981C38.9998 27.0418 38.8953 24.8375 37.7555 21.4116C36.6157 17.9858 36.3861 17.5436 35.1809 15.4279C34.666 19.7454 31.911 21.5448 31.2111 22.0826C31.2111 21.5231 29.5445 15.3359 27.0176 11.6339C24.537 8 21.1634 5.61592 19.1853 4C19.1853 7.06977 18.3219 11.6339 17.0854 13.9594C15.8489 16.2849 15.6167 16.3696 14.0722 18.1002C12.5278 19.8308 11.8189 20.3653 10.5274 22.4651C9.23596 24.565 9 27.3618 9 29.4181C9 37.7942 15.7653 44 24 44Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}))}),q=n("hamburger-button",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M7.94977 11.9498H39.9498",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M7.94977 23.9498H39.9498",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M7.94977 35.9498H39.9498",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),K=n("home",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M9 18V42H39V18L24 6L9 18Z",fill:e.colors[1]}),t.createElement("path",{d:"M9 42V18L4 22L24 6L44 22L39 18V42H9Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M19 29V42H29V29H19Z",fill:e.colors[3],stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M9 42H39",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap}))}),J=n("hospital",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M33 5H5V43H33V5Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M33 21H43V43H33",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M13 21H25",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap}),t.createElement("path",{d:"M19 15V27",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap}))}),Q=n("id-card",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48"},t.createElement("g",{stroke:"none",strokeWidth:e.strokeWidth,fill:"none",fillRule:"evenodd",strokeLinejoin:e.strokeLinejoin},t.createElement("g",{transform:"translate(4.000000, 8.000000)",strokeWidth:e.strokeWidth},t.createElement("rect",{stroke:e.colors[0],fill:e.colors[1],fillRule:"nonzero",x:"0",y:"0",width:"40",height:"32",rx:"2"}),t.createElement("rect",{stroke:e.colors[2],fill:e.colors[3],fillRule:"nonzero",x:"24",y:"8",width:"8",height:"8"}),t.createElement("path",{d:"M8,24 L32,24",stroke:e.colors[2],strokeLinecap:e.strokeLinecap}),t.createElement("path",{d:"M8,8 L14,8",stroke:e.colors[2],strokeLinecap:e.strokeLinecap}),t.createElement("path",{d:"M8,16 L14,16",stroke:e.colors[2],strokeLinecap:e.strokeLinecap}))))}),X=n("landscape",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M14 28C17 28 26.5 29.5 26.5 33C26.5 36.5 21.394 35.7386 19 36C16.9274 36 12 36 12 39C12 43 32.5447 44 36.5 44",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M31 15C31 10.7333 26.7297 4 20.805 4C14.8804 4 10.333 12 8.54511 19.4667C6.7572 26.9333 7.01261 36 7.01261 36",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M26 24C26 21.5 27.4 17 32 17C36 17 38.2 21.0424 39 24.5C39.8 27.9576 40 33 40 33",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),Y=n("left",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M31 36L19 24L31 12",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),$=n("like",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),p=n("list-two",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M9 42C11.2091 42 13 40.2091 13 38C13 35.7909 11.2091 34 9 34C6.79086 34 5 35.7909 5 38C5 40.2091 6.79086 42 9 42Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M9 14C11.2091 14 13 12.2092 13 10C13 7.79086 11.2091 6 9 6C6.79086 6 5 7.79086 5 10C5 12.2092 6.79086 14 9 14Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M9 28C11.2091 28 13 26.2092 13 24C13 21.7908 11.2091 20 9 20C6.79086 20 5 21.7908 5 24C5 26.2092 6.79086 28 9 28Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M21 24H43",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M21 38H43",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M21 10H43",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),ee=n("pokeball-one",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("circle",{cx:"24",cy:"24",r:"6",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M30 24H44",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M4 24H18",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("circle",{cx:"24",cy:"24",r:"2",fill:e.colors[2]}))}),te=n("printer",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M37 32H11V44H37V32Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 20H44V38H37.0173V32H10.9805V38H4V20Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M38 4H10V20H38V4Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}))}),ie=n("return",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M12.9998 8L6 14L12.9998 21",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),ne=n("school",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M4 33C4 31.8954 4.89543 31 6 31H12V24L24 16L36 24V31H42C43.1046 31 44 31.8954 44 33V42C44 43.1046 43.1046 44 42 44H4V33Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M24 6V16",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap}),t.createElement("path",{d:"M36 12V6C36 6 34.5 9 30 6C25.5 3 24 6 24 6V12C24 12 25.5 9 30 12C34.5 15 36 12 36 12Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M28 44V31H20L20 44",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M18 44L30 44",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),oe=n("search",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M33.2218 33.2218L41.7071 41.7071",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),re=n("shopping-cart-one",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("circle",{cx:"20.5",cy:"41.5",r:"3.5",fill:e.colors[0]}),t.createElement("circle",{cx:"37.5",cy:"41.5",r:"3.5",fill:e.colors[0]}),t.createElement("path",{d:"M5 6L14 12L19 34H39L44 17H25",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M25 26L32.2727 26L41 26",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),ke=n("shopping-mall",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 44V6C8 5.44772 8.44772 5 9 5H29C29.5523 5 30 5.44772 30 6V44",fill:e.colors[1]}),t.createElement("path",{d:"M8 44V6C8 5.44772 8.44772 5 9 5H29C29.5523 5 30 5.44772 30 6V44",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M30 15L40 20.9993V44",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M4 44H44",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap}))}),se=n("single-bed",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M8 12C8 10.3431 9.34315 9 11 9H37C38.6569 9 40 10.3431 40 12V23H8V12Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M6 35V39",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M42 35V39",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M29 18H19C17.3431 18 16 19.3431 16 21V23H32V21C32 19.3431 30.6569 18 29 18Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M4 26C4 24.3431 5.34315 23 7 23H41C42.6569 23 44 24.3431 44 26V35H4V26Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),le=n("up",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M13 30L25 18L37 30",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),ae=n("update-rotation",!0,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M33.5424 27C32.2681 31.0571 28.4778 34 24.0002 34C19.5226 34 15.7323 31.0571 14.458 27V33",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M33.5424 15V21C32.2681 16.9429 28.4778 14 24.0002 14C19.5226 14 15.7323 16.9429 14.458 21",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),ce=n("wifi",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("path",{d:"M4.00001 18.9653C4.58881 18.4073 5.19523 17.8786 5.81741 17.3792C17.0371 8.37423 33.3821 8.90292 44 18.9653",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M38 25.799C30.268 18.067 17.732 18.067 10 25.799",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{d:"M32 32.3137C27.5817 27.8954 20.4183 27.8954 16 32.3137",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 40C25.3807 40 26.5 38.8807 26.5 37.5C26.5 36.1193 25.3807 35 24 35C22.6193 35 21.5 36.1193 21.5 37.5C21.5 38.8807 22.6193 40 24 40Z",fill:e.colors[0]}))}),he=n("word",!1,function(e){return t.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},t.createElement("rect",{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth}),t.createElement("path",{d:"M14 16L18 32L24 19L30 32L34 16",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))});export{y as A,R as B,S as C,T as D,U as E,G as F,J as H,Q as I,X as L,ee as P,ie as R,ne as S,ae as U,he as W,_ as a,se as b,re as c,ke as d,Z as e,I as f,O as g,F as h,D as i,ce as j,N as k,$ as l,te as m,A as n,K as o,P as p,Y as q,p as r,q as s,oe as t,le as u};
