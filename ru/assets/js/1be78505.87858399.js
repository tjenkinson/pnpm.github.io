"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9514,3526],{6407:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ee});var n=a(9496),l=a(9613),r=a(5999),o=a(213),i=a(1626),c=a(1536),s=a(5048),d=a(7813);function m(e){return n.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var u=a(3729),p=a(7044),b=a(488),h=a(5426),f=a(1775);const v="menuHtmlItem_oe95";var E=a(7108),g=["item"],k=["item","onItemClick","activePath","level","index"],_=["item","onItemClick","activePath","level","index"];function C(e){var t=e.item,a=(0,p.Z)(e,g);switch(t.type){case"category":return n.createElement(S,(0,d.Z)({item:t},a));case"html":return n.createElement(N,(0,d.Z)({item:t},a));default:return n.createElement(I,(0,d.Z)({item:t},a))}}function S(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=e.level,o=e.index,s=(0,p.Z)(e,k),m=t.items,h=t.label,f=t.collapsible,v=t.className,g=t.href,_=function(e){var t=(0,E.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),C=(0,c._F)(t,l),S=(0,c.Mg)(g,l),N=(0,c.uR)({initialState:function(){return!!f&&(!C&&t.collapsed)}}),I=N.collapsed,Z=N.setCollapsed;!function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,r=(0,c.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:C,collapsed:I,setCollapsed:Z});var M=(0,c.fP)(),y=M.expandedItem,x=M.setExpandedItem;function L(e){void 0===e&&(e=!I),x(e?null:o),Z(e)}var A=(0,c.LU)().autoCollapseSidebarCategories;return(0,n.useEffect)((function(){f&&y&&y!==o&&A&&Z(!0)}),[f,y,o,Z,A]),n.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":I},v)},n.createElement("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":S})},n.createElement(b.Z,(0,d.Z)({className:(0,i.Z)("menu__link",{"menu__link--sublist":f&&!g,"menu__link--active":C}),onClick:f?function(e){null==a||a(t),g?L(!1):(e.preventDefault(),L())}:function(){null==a||a(t)},"aria-current":S?"page":void 0,href:f?null!=_?_:"#":_},s),h),g&&f&&n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:h}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),L()}})),n.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},n.createElement(T,{items:m,tabIndex:I?-1:0,onItemClick:a,activePath:l,level:r+1})))}function N(e){var t=e.item,a=e.level,l=e.index,r=t.value,o=t.defaultStyle,s=t.className;return n.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(a),o&&v+" menu__list-item",s),key:l,dangerouslySetInnerHTML:{__html:r}})}function I(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=e.level,o=(e.index,(0,p.Z)(e,_)),s=t.href,m=t.label,u=t.className,v=(0,c._F)(t,l);return n.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(r),"menu__list-item",u),key:m},n.createElement(b.Z,(0,d.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":v}),"aria-current":v?"page":void 0,to:s},(0,h.Z)(s)&&{onClick:a?function(){return a(t)}:void 0},o),(0,h.Z)(s)?m:n.createElement("span",null,m,n.createElement(f.Z,null))))}var Z=["items"];function M(e){var t=e.items,a=(0,p.Z)(e,Z);return n.createElement(c.D_,null,t.map((function(e,t){return n.createElement(C,(0,d.Z)({key:t,item:e,index:t},a))})))}const T=(0,n.memo)(M),y="sidebar_zMVm",x="sidebarWithHideableNavbar_aeEM",L="sidebarHidden_dXtW",A="sidebarLogo_g_li",w="menu_eN9n",F="menuWithAnnouncementBar_kcWY",P="collapseSidebarButton_aGOD",B="collapseSidebarButtonIcon_CMxL";function H(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",P),onClick:t},n.createElement(m,{className:B}))}function D(e){var t,a,l=e.path,r=e.sidebar,o=e.onCollapse,d=e.isHidden,m=function(){var e=(0,c.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,c.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}(),u=(0,c.LU)(),p=u.navbar.hideOnScroll,b=u.hideableSidebar;return n.createElement("div",{className:(0,i.Z)(y,(t={},t[x]=p,t[L]=d,t))},p&&n.createElement(s.Z,{tabIndex:-1,className:A}),n.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",w,(a={},a[F]=m,a))},n.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},n.createElement(T,{items:r,activePath:l,level:1}))),b&&n.createElement(H,{onClick:o}))}var R=function(e){var t=e.toggleSidebar,a=e.sidebar,l=e.path;return n.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},n.createElement(T,{items:a,activePath:l,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function W(e){return n.createElement(c.Cv,{component:R,props:e})}var q=n.memo(D),z=n.memo(W);function Y(e){var t=(0,c.iP)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(q,e),l&&n.createElement(z,e))}var U=a(8831),O=a(3526);const V="backToTopButton_A1qS",X="backToTopButtonShow_yFJf";function G(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function J(){var e,t=(0,n.useState)(!1),a=t[0],l=t[1],r=(0,n.useRef)(!1),o=G(),s=o.smoothScrollTop,d=o.cancelScrollToTop;return(0,c.RF)((function(e,t){var a=e.scrollY,n=null==t?void 0:t.scrollY;if(n)if(r.current)r.current=!1;else{var o=a<n;if(o||d(),a<300)l(!1);else if(o){var i=document.documentElement.scrollHeight;a+window.innerHeight<i&&l(!0)}else l(!1)}})),(0,c.SL)((function(e){e.location.hash&&(r.current=!0,l(!1))})),n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,V,(e={},e[X]=a,e)),type:"button",onClick:function(){return s()}})}var K=a(1226);const Q={docPage:"docPage_yMzH",docMainContainer:"docMainContainer_VI3q",docSidebarContainer:"docSidebarContainer_tpYF",docMainContainerEnhanced:"docMainContainerEnhanced_Upwp",docSidebarContainerHidden:"docSidebarContainerHidden_xcOm",collapsedDocSidebar:"collapsedDocSidebar_cSew",expandSidebarButtonIcon:"expandSidebarButtonIcon_hH5g",docItemWrapperEnhanced:"docItemWrapperEnhanced_AqQ_"};var j=a(382);function $(e){var t,a,r,s=e.currentDocRoute,d=e.versionMetadata,p=e.children,b=e.sidebarName,h=(0,c.Vq)(),f=d.pluginId,v=d.version,E=(0,n.useState)(!1),g=E[0],k=E[1],_=(0,n.useState)(!1),C=_[0],S=_[1],N=(0,n.useCallback)((function(){C&&S(!1),k((function(e){return!e}))}),[C]);return n.createElement(o.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadata:{version:v,tag:(0,c.os)(f,v)}},n.createElement("div",{className:Q.docPage},n.createElement(J,null),h&&n.createElement("aside",{className:(0,i.Z)(c.kM.docs.docSidebarContainer,Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&g&&S(!0)}},n.createElement(Y,{key:b,sidebar:h,path:s.path,onCollapse:N,isHidden:C}),C&&n.createElement("div",{className:Q.collapsedDocSidebar,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},n.createElement(m,{className:Q.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,i.Z)(Q.docMainContainer,(a={},a[Q.docMainContainerEnhanced]=g||!h,a))},n.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(r={},r[Q.docItemWrapperEnhanced]=g,r))},n.createElement(l.Zo,{components:U.Z},p)))))}function ee(e){var t=e.route.routes,a=e.versionMetadata,l=e.location,o=t.find((function(e){return(0,K.LX)(l.pathname,e)}));if(!o)return n.createElement(O.default,null);var i=o.sidebar,s=i?a.docsSidebars[i]:null;return n.createElement(n.Fragment,null,n.createElement(j.Z,null,n.createElement("html",{className:a.className})),n.createElement(c.qu,{version:a},n.createElement(c.bT,{sidebar:s},n.createElement($,{currentDocRoute:o,versionMetadata:a,sidebarName:i},(0,r.H)(t,{versionMetadata:a})))))}},3526:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(9496),l=a(213),r=a(3729);function o(){return n.createElement(l.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);