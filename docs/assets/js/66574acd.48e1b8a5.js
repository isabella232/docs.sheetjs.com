"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[628],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),l="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),l=n(2389),o=n(7392),s=n(7094),i=n(2466),u=n(6010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,l,d=e.lazy,m=e.block,f=e.defaultValue,v=e.values,b=e.groupId,h=e.className,x=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:x.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=x.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=x[0])?void 0:l.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),j=N.tabGroupChoices,T=N.setTabGroupChoices,Z=(0,r.useState)(y),w=Z[0],O=Z[1],E=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var C=j[b];null!=C&&C!==w&&g.some((function(e){return e.value===C}))&&O(C)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==w&&(S(t),O(a),null!=b&&T(b,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},h)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:I,onClick:I},l,{className:(0,u.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(x.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},x.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},9628:function(e,t){t.Z="0.18.7"},3339:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(9628),s=n(9877),i=n(2360),u=["components"],c={sidebar_position:4,sidebar_custom_props:{summary:"Server-side and other frameworks using NodeJS modules"}},p="NodeJS",d={unversionedId:"installation/nodejs",id:"installation/nodejs",title:"NodeJS",description:"Tarballs are available on .",source:"@site/docs/02-installation/04-nodejs.md",sourceDirName:"02-installation",slug:"/installation/nodejs",permalink:"/docs/installation/nodejs",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_custom_props:{summary:"Server-side and other frameworks using NodeJS modules"}},sidebar:"tutorialSidebar",previous:{title:"Deno",permalink:"/docs/installation/deno"},next:{title:"ExtendScript",permalink:"/docs/installation/extendscript"}},m={},f=[{value:"Installation",id:"installation",level:2},{value:"Vendoring",id:"vendoring",level:3},{value:"Usage",id:"usage",level:2}],v={toc:f};function b(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nodejs"},"NodeJS"),(0,l.kt)("p",null,"Tarballs are available on ",(0,l.kt)("a",{parentName:"p",href:"https://cdn.sheetjs.com"},"https://cdn.sheetjs.com"),"."),(0,l.kt)("div",null,"Each individual version can be referenced using a similar URL pattern.",(0,l.kt)("a",{href:"https://cdn.sheetjs.com/xlsx-"+o.Z+"/xlsx-"+o.Z+".tgz"},"https://cdn.sheetjs.com/xlsx-",o.Z,"/xlsx-",o.Z,".tgz")," is the URL for ",o.Z),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cdn.sheetjs.com/xlsx-latest/xlsx-latest.tgz"},"https://cdn.sheetjs.com/xlsx-latest/xlsx-latest.tgz")," is a link to the latest\nversion and will refresh on each release."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Tarballs can be directly installed using a package manager:"),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install --save https://cdn.sheetjs.com/xlsx-"+o.Z+"/xlsx-"+o.Z+".tgz"))),(0,l.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm install --save https://cdn.sheetjs.com/xlsx-"+o.Z+"/xlsx-"+o.Z+".tgz"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add --save https://cdn.sheetjs.com/xlsx-"+o.Z+"/xlsx-"+o.Z+".tgz")))),(0,l.kt)("h3",{id:"vendoring"},"Vendoring"),(0,l.kt)("p",null,'For general stability, "vendoring" modules is the recommended approach:'),(0,l.kt)("div",null,"1) Download the tarball (",(0,l.kt)("code",{parentName:"pre"},"xlsx-",o.Z,".tgz"),") for the desired version. The current version is available at ",(0,l.kt)("a",{href:"https://cdn.sheetjs.com/xlsx-"+o.Z+"/xlsx-"+o.Z+".tgz"},"https://cdn.sheetjs.com/xlsx-",o.Z,"/xlsx-",o.Z,".tgz")),(0,l.kt)("br",null),(0,l.kt)("p",null,"2) Create a ",(0,l.kt)("inlineCode",{parentName:"p"},"vendor")," subdirectory at the root of your project and move the\ntarball to that folder.  Add it to your project repository."),(0,l.kt)("p",null,"3) Install the tarball using a package manager:"),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install --save file:vendor/xlsx-"+o.Z+".tgz"))),(0,l.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm install --save file:vendor/xlsx-"+o.Z+".tgz"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add --save file:vendor/xlsx-0.18.7.tgz")))),(0,l.kt)("p",null,"The package will be installed and accessible as ",(0,l.kt)("inlineCode",{parentName:"p"},"xlsx"),"."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"By default, the module supports ",(0,l.kt)("inlineCode",{parentName:"p"},"require")," and it will automatically add support\nfor streams and filesystem access:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var XLSX = require("xlsx");\n')),(0,l.kt)("p",null,"The module also ships with ",(0,l.kt)("inlineCode",{parentName:"p"},"xlsx.mjs")," for use with ",(0,l.kt)("inlineCode",{parentName:"p"},"import"),".  The ",(0,l.kt)("inlineCode",{parentName:"p"},"mjs")," version\ndoes not automatically load native node modules, so they must be added manually:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import * as XLSX from 'xlsx/xlsx.mjs';\n\n/* load 'fs' for readFile and writeFile support */\nimport * as fs from 'fs';\nXLSX.set_fs(fs);\n\n/* load 'stream' for stream support */\nimport { Readable } from 'stream';\nXLSX.stream.set_readable(Readable);\n\n/* load the codepage support library for extended support with older formats  */\nimport * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';\nXLSX.set_cptable(cpexcel);\n")))}b.isMDXComponent=!0}}]);