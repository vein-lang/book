(self.webpackChunkdocs_vein_lang=self.webpackChunkdocs_vein_lang||[]).push([[95],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5156:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],c={description:"Structure",sidebar_position:2},u=void 0,l={unversionedId:"runtime/api/ValueType",id:"runtime/api/ValueType",isDocsHomePage:!1,title:"ValueType",description:"Structure",source:"@site/docs/runtime/api/ValueType.md",sourceDirName:"runtime/api",slug:"/runtime/api/ValueType",permalink:"/docs/runtime/api/ValueType",editUrl:"https://github.com/0xF6/docs.vein-lang/edit/master/docs/runtime/api/ValueType.md",version:"current",sidebarPosition:2,frontMatter:{description:"Structure",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Object",permalink:"/docs/runtime/api/Object"},next:{title:"Array",permalink:"/docs/runtime/api/Array"}},p=[{value:"Declaration",id:"declaration",children:[]},{value:"Methods",id:"methods",children:[]}],s={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Stucture")),(0,a.kt)("p",null,"The root structure of most Vein structures hierarchies, from which substructures inherit a basic interface to the runtime system and the ability to behave as Vein objects."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[special, forwarded]\npublic class ValueType\n{\n    ...\n}\n")),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[virtual]\npublic toString(): String;\n")))}d.isMDXComponent=!0}}]);