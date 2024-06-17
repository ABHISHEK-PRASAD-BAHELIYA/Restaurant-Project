(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>p});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),c=t(417),s=t.n(c),d=new URL(t(613),t.b),l=i()(r()),m=s()(d);l.push([n.id,`/* General Styles */\nbody {\n    margin: 0;\n    font-family: 'Poppins', sans-serif;\n    color: #333;\n    background-color: #f9f9f9;\n}\n\n.container {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 0 1rem;\n}\n\n/* Header Styles */\nheader {\n    background-color: #333;\n    color: #fff;\n    padding: 0.7rem 0;\n}\n\nheader .container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader .logo {\n    font-size: 1.8rem;\n    font-weight: 600;\n}\n\nheader nav ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n}\n\nheader nav ul li {\n    margin-left: 1.5rem;\n}\n\nheader nav ul li a {\n    color: #fff;\n    text-decoration: none;\n    font-weight: 400;\n    transition: color 0.3s;\n}\n\nheader nav ul li a:hover {\n    color: #ff6347;\n}\n\n/* Hero Section Styles */\n#hero {\n    background-image: url(${m});\n    background-size: cover;\n    background-position: center;\n    color: #fff;\n    text-align: center;\n    padding: 16rem 2rem;\n    position: relative;\n    z-index: 1;\n}\n\n#hero::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: -1;\n}\n\n#hero h2 {\n    font-family: 'Playfair Display', serif;\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n    animation: fadeInDown 1s ease-in-out;\n}\n\n#hero p {\n    font-size: 1.5rem;\n    margin-bottom: 2rem;\n    animation: fadeInUp 1s ease-in-out;\n}\n\n#hero .btn {\n    background-color: #ff6347;\n    color: #fff;\n    padding: 0.75rem 2rem;\n    text-decoration: none;\n    border-radius: 0.5rem;\n    font-weight: 600;\n    transition: background-color 0.3s;\n    animation: fadeInUp 1.5s ease-in-out;\n}\n\n#hero .btn:hover {\n    background-color: #e5533d;\n}\n\n@keyframes fadeInDown {\n    from {\n        opacity: 0;\n        transform: translateY(-20px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes fadeInUp {\n    from {\n        opacity: 0;\n        transform: translateY(20px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n/* Menu Section Styles */\n#menu {\n    background-color: #fff;\n    padding: 3rem 1rem;\n}\n\n#menu h2 {\n    text-align: center;\n    margin-bottom: 3rem;\n    font-size: 2.5rem;\n    position: relative;\n}\n\n#menu h2::after {\n    content: '';\n    position: absolute;\n    width: 60px;\n    height: 3px;\n    background-color: #ff6347;\n    bottom: -10px;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.menu-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 2rem;\n}\n\n.menu-item {\n    background-color: #f9f9f9;\n    border-radius: 0.5rem;\n    overflow: hidden;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    transition: transform 0.3s, box-shadow 0.3s;\n}\n\n.menu-item img {\n    width: 100%;\n    height: auto;\n}\n\n.menu-item:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.menu-content {\n    padding: 1.5rem;\n    text-align: center;\n}\n\n.menu-content h3 {\n    margin: 0;\n    font-size: 1.5rem;\n    font-weight: 600;\n}\n\n.menu-content p {\n    margin: 0.5rem 0;\n    font-size: 1rem;\n    color: #666;\n}\n\n.menu-content span {\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #ff6347;\n}\n\n/* About Section Styles */\n#about {\n    background-color: #f4f4f4;\n    padding: 3rem 1rem;\n    text-align: center;\n}\n\n#about h2 {\n    font-size: 2.5rem;\n    margin-bottom: 1.5rem;\n}\n\n#about p {\n    font-size: 1.2rem;\n    max-width: 800px;\n    margin: 0 auto;\n    color: #666;\n}\n\n/* Footer Styles */\nfooter {\n    background-color: #333;\n    color: #fff;\n    text-align: center;\n    padding: 1rem 0;\n}\n\nfooter .social-icons {\n    margin-bottom: 1rem;\n}\n\nfooter .social-icons a {\n    color: #fff;\n    margin: 0 0.5rem;\n    text-decoration: none;\n    font-size: 1.2rem;\n    transition: color 0.3s;\n}\n\nfooter .social-icons a:hover {\n    color: #ff6347;\n}\n\nfooter p {\n    margin: 0;\n    font-size: 1rem;\n}\n\n/* Responsive Styles */\n@media (max-width: 768px) {\n    header .container {\n        flex-direction: column;\n        text-align: center;\n    }\n\n    header nav ul {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    header nav ul li {\n        margin-left: 0;\n        margin-top: 0.5rem;\n    }\n\n    #hero h2 {\n        font-size: 2.5rem;\n    }\n\n    #hero p {\n        font-size: 1.25rem;\n    }\n\n    .menu-grid {\n        grid-template-columns: 1fr;\n    }\n\n    .menu-content h3 {\n        font-size: 1.25rem;\n    }\n\n    .menu-content p {\n        font-size: 0.9rem;\n    }\n\n    .menu-content span {\n        font-size: 1rem;\n    }\n\n    #about h2 {\n        font-size: 2rem;\n    }\n\n    #about p {\n        font-size: 1rem;\n    }\n}\n\n@media (max-width: 480px) {\n    #hero h2 {\n        font-size: 2rem;\n    }\n\n    #hero p {\n        font-size: 1rem;\n    }\n\n    .menu-content h3 {\n        font-size: 1.15rem;\n    }\n\n    .menu-content p {\n        font-size: 0.85rem;\n    }\n\n    .menu-content span {\n        font-size: 0.9rem;\n    }\n\n    #about h2 {\n        font-size: 1.75rem;\n    }\n\n    #about p {\n        font-size: 0.9rem;\n    }\n}`,""]);const p=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,m="".concat(d," ").concat(l);a[d]=l+1;var p=t(m),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=r(u,o);o.byIndex=c,e.splice(c,0,{identifier:m,updater:f,references:1})}i.push(m)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},613:(n,e,t)=>{n.exports=t.p+"8c9404ca8b61728e351a.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),i=t.n(a),c=t(659),s=t.n(c),d=t(56),l=t.n(d),m=t(540),p=t.n(m),u=t(113),f=t.n(u),h=t(208),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals,(()=>{const n=document.body,e=document.createElement("header"),t=document.createElement("div");t.className="container";const o=document.createElement("h1");o.className="logo",o.textContent="Savory Bliss";const r=document.createElement("nav"),a=document.createElement("ul");["Home","Menu","About","Contact"].forEach((n=>{const e=document.createElement("li"),t=document.createElement("a");t.href=`#${n.toLowerCase()}`,t.textContent=n,e.appendChild(t),a.appendChild(e)})),r.appendChild(a),t.appendChild(o),t.appendChild(r),e.appendChild(t),n.appendChild(e)})(),(()=>{const n=document.body,e=document.createElement("section");e.id="hero";const t=document.createElement("div");t.className="container";const o=document.createElement("h2");o.textContent="Welcome to Savory Bliss";const r=document.createElement("p");r.textContent="Experience the finest culinary delights and impeccable service.";const a=document.createElement("a");a.href="#menu",a.className="btn",a.textContent="View Menu",t.appendChild(o),t.appendChild(r),t.appendChild(a),e.appendChild(t),n.appendChild(e)})(),(()=>{const n=document.body,e=document.createElement("section");e.id="menu";const t=document.createElement("div");t.className="container";const o=document.createElement("h2");o.textContent="Our Menu";const r=document.createElement("div");r.className="menu-grid",[{name:" French toast",description:"French toast is a dish of sliced bread soaked in beaten eggs and often milk or cream.",price:"$10.99",img:"./assets/item1.jpeg"},{name:"Borosil Oval Baking",description:"The ovul baking dish perfect for baked dishes, lasagnas, raviolis, au gratins.",price:"$12.99",img:"./assets/item2.jpeg"},{name:"Breakfast Salad",description:"Healthy and tasty salads which are perfect for breakfast.",price:"$12.99",img:"./assets/item3.jpeg"},{name:"Pizza",description:"classic pizza with fresh tomatoes, mozzarella and tomato, and basil.",price:"$12.99",img:"./assets/item4.jpeg"},{name:"Pizza",description:"classic pizza with fresh tomatoes, mozzarella and tomato, and basil.",price:"$25.99",img:"./assets/hero-image.jpeg"},{name:"Pizza",description:"classic pizza with fresh tomatoes, mozzarella and tomato, and basil.",price:"$99.99",img:"./assets/table.jpeg"}].forEach((n=>{const e=document.createElement("div");e.className="menu-item";const t=document.createElement("img");t.src=n.img,t.alt=n.name;const o=document.createElement("div");o.className="menu-content";const a=document.createElement("h3");a.textContent=n.name;const i=document.createElement("p");i.textContent=n.description;const c=document.createElement("span");c.textContent=n.price,o.appendChild(a),o.appendChild(i),o.appendChild(c),e.appendChild(t),e.appendChild(o),r.appendChild(e)})),t.appendChild(o),t.appendChild(r),e.appendChild(t),n.appendChild(e)})(),(()=>{const n=document.body,e=document.createElement("section");e.id="about";const t=document.createElement("div");t.className="container";const o=document.createElement("h2");o.textContent="About Us";const r=document.createElement("p");r.textContent="Our restaurant offers a unique dining experience with a focus on high-quality ingredients and exceptional service. Join us for an unforgettable meal in a beautiful setting.",t.appendChild(o),t.appendChild(r),e.appendChild(t),n.appendChild(e)})(),(()=>{const n=document.body,e=document.createElement("footer"),t=document.createElement("div");t.className="container";const o=document.createElement("div");o.className="social-icons",["facebook-f","twitter","instagram","tripadvisor"].forEach((n=>{const e=document.createElement("a");e.href="#";const t=document.createElement("i");t.className=`fab fa-${n}`,e.appendChild(t),o.appendChild(e)}));const r=document.createElement("p");r.innerHTML="&copy; 2024 Savory Bliss. All Rights Reserved.",t.appendChild(o),t.appendChild(r),e.appendChild(t),n.appendChild(e)})()})();