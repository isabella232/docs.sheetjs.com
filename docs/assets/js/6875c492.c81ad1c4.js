"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8610],{4118:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(3366),l=a(7294),n=a(6010),s=a(2899),i=a(9960),o=a(5999),m="sidebar_TMXw",c="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",g="sidebarItem_spIe",d="sidebarItemLink_eqrF",p="sidebarItemLinkActive_XZSJ";function h(e){var t=e.sidebar;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:g},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))})))))}var b=a(3102);function f(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function v(e){return l.createElement(b.Zo,{component:f,props:e})}var E=a(7524);function N(e){var t=e.sidebar,a=(0,E.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(v,{sidebar:t}):l.createElement(h,{sidebar:t}):null}var Z=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,i=e.children,o=(0,r.Z)(e,Z),m=t&&t.items.length>0;return l.createElement(s.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(N,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},6299:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),l=a(5999),n=a(1750);function s(e){var t=e.metadata,a=t.previousPage,s=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(n.Z,{permalink:a,title:r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&r.createElement(n.Z,{permalink:s,title:r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},6244:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(7294),l=a(6010),n=a(5999),s=a(9960),i=a(4996),o=a(8824),m=a(8780),c=a(685),u=a(6753),g="blogPostTitle_rzP5",d="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j",h=a(62);function b(e){return e.href?r.createElement(s.Z,e):r.createElement(r.Fragment,null,e.children)}function f(e){var t=e.author,a=t.name,l=t.title,n=t.url,s=t.imageURL,i=t.email,o=n||i&&"mailto:"+i||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(b,{href:o,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(b,{href:o,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var v="authorCol_FlmR",E="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?E:"row")},t.map((function(e,t){var s;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?N:v),key:t},r.createElement(f,{author:Object.assign({},e,{imageURL:null!=(s=a.authorsImageUrls[t])?s:e.imageURL})}))})))}function _(e){var t,a,b=(a=(0,o.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,i.C)().withBaseUrl,v=e.children,E=e.frontMatter,N=e.assets,_=e.metadata,P=e.truncated,k=e.isBlogPostPage,w=void 0!==k&&k,T=_.date,I=_.formattedDate,y=_.permalink,F=_.tags,L=_.readingTime,M=_.title,x=_.editUrl,A=_.authors,R=null!=(t=N.image)?t:E.image,C=!w&&P,U=F.length>0,O=w?"h1":"h2";return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(O,{className:g,itemProp:"headline"},w?M:r.createElement(s.Z,{itemProp:"url",to:y},M)),r.createElement("div",{className:(0,l.Z)(d,"margin-vert--md")},r.createElement("time",{dateTime:T,itemProp:"datePublished"},I),void 0!==L&&r.createElement(r.Fragment,null," \xb7 ",b(L))),r.createElement(Z,{authors:A,assets:N})),R&&r.createElement("meta",{itemProp:"image",content:f(R,{absolute:!0})}),r.createElement("div",{id:w?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,v)),(U||P)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",w&&p)},U&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":C})},r.createElement(h.Z,{tags:F})),w&&x&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:x})),C&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":U})},r.createElement(s.Z,{to:_.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:M})},r.createElement("b",null,r.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(7294),l=a(9960),n=a(4118),s=a(6244),i=a(5999),o=a(8824),m=a(1944),c=a(5281),u=a(6299),g=a(4739),d=a(6010);function p(e){var t,a=e.tag,p=e.items,h=e.sidebar,b=e.listMetadata,f=(t=(0,o.c)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),v=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(a.count),tagName:a.label});return r.createElement(m.FG,{className:(0,d.Z)(c.k.wrapper.blogPages,c.k.page.blogTagPostListPage)},r.createElement(m.d,{title:v}),r.createElement(g.Z,{tag:"blog_tags_posts"}),r.createElement(n.Z,{sidebar:h},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,v),r.createElement(l.Z,{href:a.allTagsPath},r.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),p.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})),r.createElement(u.Z,{metadata:b})))}},8824:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(7294),l=a(2263),n=["zero","one","two","few","many","other"];function s(e){return n.filter((function(t){return e.includes(t)}))}var i={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,l.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:s(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),i}var t,a}),[e])}function m(){var e=o();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}}}]);