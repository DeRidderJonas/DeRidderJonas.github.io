(function(e){function t(t){for(var a,i,s=t[0],l=t[1],c=t[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0a89061a"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,r[1](c)}n[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("64a9")},1375:function(e,t,r){"use strict";r("2013")},"18af":function(e,t,r){"use strict";r("cff8")},2013:function(e,t,r){},4805:function(e,t,r){"use strict";r("897e")},"4dcb":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header",{staticStyle:{"margin-bottom":"50px"}}),r("ul",{staticClass:"projectsList"},e._l(e.projects,(function(e){return r("li",{key:e.project.name,staticClass:"projectLi",class:{thick:e.wide}},[e.wide?r("WideProject",{staticClass:"wide-project",staticStyle:{width:"80vw"},attrs:{Project:e.project}}):r("SmallProject",{attrs:{Project:e.project}})],1)})),0)],1)},o=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",[e._v("Jonas De Ridder")]),r("h3",[e._v("Game Developer "),r("span",{staticClass:"studyInfo"},[e._v("@Digital Arts And Entertainment Howest (2019-Present)")])]),r("h3",[e._v("Software and System Engineer "),r("span",{staticClass:"studyInfo"},[e._v("@Howest (2016-Present)")])]),r("div",{staticClass:"profile-info"},[r("p",{staticClass:"location"},[e._v("@Belgium")]),r("ul",{staticClass:"links"},[r("li",[r("a",{attrs:{href:"https://www.linkedin.com/in/jonasderidder64/",target:"_blank"}},[r("img",{staticStyle:{height:"25px",width:"auto"},attrs:{src:"assets/img/LI-In-Bug.png",alt:"LinkedIn"}})])]),r("li",[r("a",{attrs:{href:"https://github.com/DeRidderJonas",target:"_blank"}},[r("img",{staticStyle:{height:"25px",width:"auto"},attrs:{src:"assets/img/github.png",alt:"Github"}})])]),r("li",[r("a",{attrs:{href:"mailto:jonasderidder64@gmail.com"}},[r("img",{staticStyle:{height:"25px",width:"auto"},attrs:{src:"assets/img/mail.png",alt:"Mail to"}})])])])])])}],l=(r("18af"),r("2877")),c={},u=Object(l["a"])(c,i,s,!1,null,"a3e5b656",null),p=u.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"full-project",staticStyle:{height:"430px"}},[e.Project.groupProject?r("img",{staticClass:"GPSig",attrs:{src:"assets/img/GroupProjectSignature.png",alt:"Group Project"}}):e._e(),r("div",{staticClass:"actual-project"},[r("h2",[e._v(e._s(e.Project.name))]),r("div",{staticClass:"info"},[r("img",{staticClass:"projectImg",attrs:{src:"assets/img/"+e.Project.img}}),r("div",{staticClass:"info-text"},[r("p",{domProps:{innerHTML:e._s(e.Project.info)}}),r("a",{attrs:{href:e.Project.link,target:"_blank"}},[e._v(e._s(e.Project.linkText))])])])])])},m=[],d={props:{Project:Object}},h=d,g=(r("7431"),Object(l["a"])(h,f,m,!1,null,null,null)),b=g.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"small-project full-project actual-project"},[r("h2",[e._v(e._s(e.Project.name))]),r("div",{staticClass:"info"},[e.Project.imgAlt?r("div",{domProps:{innerHTML:e._s(e.Project.imgAlt)}}):r("img",{staticClass:"projectImg",attrs:{src:"assets/img/"+e.Project.img}}),r("div",{staticClass:"info-text info-text-small"},[r("p",{domProps:{innerHTML:e._s(e.Project.info)}}),r("a",{attrs:{href:e.Project.link,target:"_blank"}},[e._v(e._s(e.Project.linkText))])])])])},_=[],j={components:{},props:{Project:Object}},k=j,w=(r("1375"),Object(l["a"])(k,v,_,!1,null,"c7ac03b0",null)),y=w.exports,P={components:{Header:p,WideProject:b,SmallProject:y},data:function(){return{projects:[{project:{name:"WhatToDoWithYou (GAME)",img:"whattodowithyou.jpg",link:"https://yoranfory.itch.io/whattodowithyou",linkText:"Link to itch.io",info:"In this group project, I was resposible for player movement, game mechanics, camera movement, technical aspects of animation, hazards, UI and player feedback<br/><br/>The project was made in 12 weeks in a group consisting of 2 programmers and 3 artists. <br/><br/>Made in Unreal 4.26.",groupProject:!0},wide:!0},{project:{name:"Super Paper Mario (GAME)",imgAlt:'<iframe title="vimeo-player" src="https://player.vimeo.com/video/434715976?h=033444bd85" width="450" height="320" frameborder="0" allowfullscreen></iframe>',link:"https://www.digitalartsandentertainment.be/article/437/Programming+2%3A+2020+post+mortem",linkText:"Link to featured project on DAE website",info:"This game was made for a module called: Programming 2. <br/><br/>In it, I remade a part of Super Paper Mario. <br/><br/>Made in C++ and SDL2."}},{project:{name:"Portal 2 Turret (ASSET)",img:"PortalTurret.png",link:"https://skfb.ly/o6wOr",linkText:"Link to sketchfab",info:"This 3D model was made for a module called: 3D 4 Games. <br/><br/>Made in 3Ds Max and Substance Painter."}},{project:{name:"Science Center (LEVEL)",imgAlt:'<iframe width="450" height="320" src="https://www.youtube.com/embed/cF5uhhTUBRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',link:"https://youtu.be/9KOyP-OqGcs",linkText:"Link to level walktrough",info:"This level was made for a module called: Environments. <br/><br/>Made in Unreal Engine 4.26."}},{project:{name:"City Scene - Bangkok (LEVEL)",imgAlt:'<div class="sketchfab-embed-wrapper"> <iframe title="De Ridder Jonas - City Scene Bangkok" width="450" height="280" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/db0ff4153f074c9396edf2c5b434e1b9/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/de-ridder-jonas-city-scene-bangkok-db0ff4153f074c9396edf2c5b434e1b9?utm_medium=embed&utm_campaign=share-popup&utm_content=db0ff4153f074c9396edf2c5b434e1b9" target="_blank" style="font-weight: bold; color: #1CAAD9;"> De Ridder Jonas - City Scene Bangkok </a> by <a href="https://sketchfab.com/JonasDeRidder?utm_medium=embed&utm_campaign=share-popup&utm_content=db0ff4153f074c9396edf2c5b434e1b9" target="_blank" style="font-weight: bold; color: #1CAAD9;"> JonasDeRidder </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=db0ff4153f074c9396edf2c5b434e1b9" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',link:"https://skfb.ly/6SZA7",linkText:"Link to sketchfab",info:"This city scene was made for a module called: 3D 1. <br/><br/>Made in 3Ds Max."}},{project:{name:"HLPR (WEB)",img:"HLPR.png",link:"https://www.nextapps.be/en/portfolio/hlpr-2/",linkText:"Link to company website",info:"Worked on this project during internship at NextApss. <br/><br/>Made in Vue.js"}},{project:{name:"Kurieus CMS (WEB)",img:"Kurieus.png",link:"https://play.google.com/store/apps/details?id=be.nextapps.kurieus&hl=en_US&gl=US",linkText:"Link to App download",info:"Worked on CMS for this app during internship at NextApps <br/><br/>Made in Vue.js"}}]}}},x=P,C=(r("034f"),Object(l["a"])(x,n,o,!1,null,null,null)),S=C.exports,E=r("8c4f"),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},A=[],L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},M=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),e._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],O={name:"HelloWorld",props:{msg:String}},D=O,I=(r("4805"),Object(l["a"])(D,L,M,!1,null,"b9167eee",null)),H=I.exports,W={name:"home",components:{HelloWorld:H}},$=W,G=Object(l["a"])($,T,A,!1,null,null,null),R=G.exports;a["a"].use(E["a"]);var B=new E["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),J=r("2f62");a["a"].use(J["a"]);var U=new J["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:B,store:U,render:function(e){return e(S)}}).$mount("#app")},"64a9":function(e,t,r){},7431:function(e,t,r){"use strict";r("4dcb")},"897e":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},cff8:function(e,t,r){}});
//# sourceMappingURL=app.781f3d9c.js.map