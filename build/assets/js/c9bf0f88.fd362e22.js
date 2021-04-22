(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{133:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return l})),r.d(e,"metadata",(function(){return i})),r.d(e,"toc",(function(){return o})),r.d(e,"default",(function(){return u}));var a=r(3),n=r(7),c=(r(0),r(156)),l={title:"zts_route_info_t",custom_edit_url:null},i={unversionedId:"autogen/libzt/classes/structzts__route__info__t",id:"autogen/libzt/classes/structzts__route__info__t",isDocsHomePage:!1,title:"zts_route_info_t",description:"More...",source:"@site/docs/autogen/libzt/classes/structzts__route__info__t.md",sourceDirName:"autogen/libzt/classes",slug:"/autogen/libzt/classes/structzts__route__info__t",permalink:"/autogen/libzt/classes/structzts__route__info__t",editUrl:null,version:"current",frontMatter:{title:"zts_route_info_t",custom_edit_url:null}},o=[{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Detailed Description",id:"detailed-description",children:[]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable target",id:"variable-target",children:[]},{value:"variable via",id:"variable-via",children:[]},{value:"variable flags",id:"variable-flags",children:[]},{value:"variable metric",id:"variable-metric",children:[]}]}],b={toc:o};function u(t){var e=t.components,r=Object(n.a)(t,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,r,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"#detailed-description"},"More...")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"#include <ZeroTierSockets.h>")),Object(c.b)("h2",{id:"public-attributes"},"Public Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null}),Object(c.b)("th",{parentName:"tr",align:null},"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"struct ",Object(c.b)("a",{parentName:"td",href:"/autogen/libzt/classes/structzts__sockaddr__storage"},"zts_sockaddr_storage")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("strong",{parentName:"td"},Object(c.b)("a",{parentName:"strong",href:"/autogen/libzt/classes/structzts__route__info__t#variable-target"},"target")))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"struct ",Object(c.b)("a",{parentName:"td",href:"/autogen/libzt/classes/structzts__sockaddr__storage"},"zts_sockaddr_storage")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("strong",{parentName:"td"},Object(c.b)("a",{parentName:"strong",href:"/autogen/libzt/classes/structzts__route__info__t#variable-via"},"via")))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"uint16_t"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("strong",{parentName:"td"},Object(c.b)("a",{parentName:"strong",href:"/autogen/libzt/classes/structzts__route__info__t#variable-flags"},"flags")))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"uint16_t"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("strong",{parentName:"td"},Object(c.b)("a",{parentName:"strong",href:"/autogen/libzt/classes/structzts__route__info__t#variable-metric"},"metric")))))),Object(c.b)("h2",{id:"detailed-description"},"Detailed Description"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"struct zts_route_info_t;\n")),Object(c.b)("p",null,"A route to be pushed on a virtual network "),Object(c.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(c.b)("h3",{id:"variable-target"},"variable target"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"struct zts_sockaddr_storage target;\n")),Object(c.b)("p",null,"Target network / netmask bits (in port field) or NULL or 0.0.0.0/0 for default "),Object(c.b)("h3",{id:"variable-via"},"variable via"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"struct zts_sockaddr_storage via;\n")),Object(c.b)("p",null,"Gateway IP address (port ignored) or NULL (family == 0) for LAN-local (no gateway) "),Object(c.b)("h3",{id:"variable-flags"},"variable flags"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"uint16_t flags;\n")),Object(c.b)("p",null,"Route flags "),Object(c.b)("h3",{id:"variable-metric"},"variable metric"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"uint16_t metric;\n")),Object(c.b)("p",null,"Route metric (not currently used) "),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on 22 April 2021 at 15:16:44 PDT"))}u.isMDXComponent=!0},156:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return m}));var a=r(0),n=r.n(a);function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},c=Object.keys(t);for(a=0;a<c.length;a++)r=c[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)r=c[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var b=n.a.createContext({}),u=function(t){var e=n.a.useContext(b),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.a.createElement(b.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},d=n.a.forwardRef((function(t,e){var r=t.components,a=t.mdxType,c=t.originalType,l=t.parentName,b=o(t,["components","mdxType","originalType","parentName"]),s=u(r),d=a,m=s["".concat(l,".").concat(d)]||s[d]||p[d]||c;return r?n.a.createElement(m,i(i({ref:e},b),{},{components:r})):n.a.createElement(m,i({ref:e},b))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var c=r.length,l=new Array(c);l[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var b=2;b<c;b++)l[b]=r[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);