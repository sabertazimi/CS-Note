(self.webpackChunkawesome_notes=self.webpackChunkawesome_notes||[]).push([[8401],{1898:(e,t,n)=>{"use strict";n.d(t,{A:()=>T});var s=n(8101),a=n(5105);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),i=n?.props.children;return{mdxAdmonitionTitle:i,rest:o.length>0?(0,a.jsx)(a.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var i=n(3526),c=n(7620),l=n(92);const r={admonition:"admonition_fLid",admonitionHeading:"admonitionHeading_yHXa",admonitionIcon:"admonitionIcon_qYLe",admonitionContent:"admonitionContent_iXM1"};function d(e){let{type:t,className:n,children:s}=e;return(0,a.jsx)("div",{className:(0,i.A)(l.G.common.admonition,l.G.common.admonitionType(t),r.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,a.jsxs)("div",{className:r.admonitionHeading,children:[(0,a.jsx)("span",{className:r.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,a.jsx)("div",{className:r.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:o,className:i}=e;return(0,a.jsxs)(d,{type:t,className:i,children:[s||n?(0,a.jsx)(u,{title:s,icon:n}):null,(0,a.jsx)(m,{children:o})]})}function p(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,a.jsx)(p,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,a.jsx)(h,{...f,...e,className:(0,i.A)("alert alert--secondary",e.className),children:e.children})}function b(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,a.jsx)(b,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(e){return(0,a.jsx)(h,{...g,...e,className:(0,i.A)("alert alert--success",e.className),children:e.children})}function v(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,a.jsx)(v,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function A(e){return(0,a.jsx)(h,{...N,...e,className:(0,i.A)("alert alert--info",e.className),children:e.children})}function C(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const y={icon:(0,a.jsx)(C,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function L(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const k={icon:(0,a.jsx)(L,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const B={icon:(0,a.jsx)(C,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const _={...{note:x,tip:j,info:A,warning:function(e){return(0,a.jsx)(h,{...y,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,a.jsx)(h,{...k,...e,className:(0,i.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,a.jsx)(x,{title:"secondary",...e}),important:e=>(0,a.jsx)(A,{title:"important",...e}),success:e=>(0,a.jsx)(j,{title:"success",...e}),caution:function(e){return(0,a.jsx)(h,{...B,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})}}};function T(e){const t=o(e),n=(s=t.type,_[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),_.info));var s;return(0,a.jsx)(n,{...t})}},2828:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(8101);var s=n(3526),a=n(5289),o=n(92),i=n(1898),c=n(5105);function l(e){let{className:t}=e;return(0,c.jsx)(i.A,{type:"caution",title:(0,c.jsx)(a.Rc,{}),className:(0,s.A)(t,o.G.common.unlistedBanner),children:(0,c.jsx)(a.Uh,{})})}function r(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.AE,{}),(0,c.jsx)(l,{...e})]})}},3123:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ct});var s=n(8101),a=n(5419),o=n(2225),i=n(5105);const c=s.createContext(null);function l(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(c.Provider,{value:a,children:t})}function r(){const e=(0,s.useContext)(c);if(null===e)throw new o.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=r();return(0,i.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(3526),m=n(4858),h=n(7620),p=n(2300);function f(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,i.jsxs)(p.A,{className:(0,u.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}function x(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(f,{...t,subLabel:(0,i.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(f,{...n,subLabel:(0,i.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function b(){const{metadata:e}=r();return(0,i.jsx)(x,{previous:e.previous,next:e.next})}var g=n(5220),j=n(384),v=n(92),N=n(2483),A=n(1526);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function y(e){const t=C[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(p.A,{to:n,onClick:s,children:(0,i.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,g.A)(),{pluginId:a}=(0,j.vT)({failfast:!0}),{savePreferredVersionName:o}=(0,N.g1)(a),{latestDocSuggestion:c,latestVersionSuggestion:l}=(0,j.HW)(a),r=c??(d=l).docs.find((e=>e.id===d.mainDocId));var d;return(0,i.jsxs)("div",{className:(0,u.A)(t,v.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(y,{siteTitle:s,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(L,{versionLabel:l.label,to:r.path,onClick:()=>o(l.name)})})]})}function B(e){let{className:t}=e;const n=(0,A.r)();return n.banner?(0,i.jsx)(k,{className:t,versionMetadata:n}):null}function _(e){let{className:t}=e;const n=(0,A.r)();return n.badge?(0,i.jsx)("span",{className:(0,u.A)(t,v.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var T=n(3801);const w={tags:"tags_TBJm",tag:"tag_USTg"};function E(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,u.A)(w.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:w.tag,children:(0,i.jsx)(T.A,{...e})},e.permalink)))})]})}const H={iconEdit:"iconEdit_sBYE"};function M(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(H.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function I(e){let{editUrl:t}=e;return(0,i.jsxs)(p.A,{to:t,className:v.G.common.editThisPage,children:[(0,i.jsx)(M,{}),(0,i.jsx)(h.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}function S(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,g.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,g.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function U(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=S({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,i.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function R(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function V(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,i.jsxs)("span",{className:v.G.common.lastUpdated,children:[(0,i.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,i.jsx)(U,{lastUpdatedAt:t}):"",byUser:n?(0,i.jsx)(R,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const z={lastUpdated:"lastUpdated_Jpru"};function D(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,i.jsxs)("div",{className:(0,u.A)("row",t),children:[(0,i.jsx)("div",{className:"col",children:n&&(0,i.jsx)(I,{editUrl:n})}),(0,i.jsx)("div",{className:(0,u.A)("col",z.lastUpdated),children:(s||a)&&(0,i.jsx)(V,{lastUpdatedAt:s,lastUpdatedBy:a})})]})}function O(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,o=a.length>0,c=!!(t||n||s);return o||c?(0,i.jsxs)("footer",{className:(0,u.A)(v.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,i.jsx)("div",{className:(0,u.A)("row margin-top--sm",v.G.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(E,{tags:a})})}),c&&(0,i.jsx)(D,{className:(0,u.A)("margin-top--sm",v.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var P=n(6639),G=n(2299);function W(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function $(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=$({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function F(e){const t=e.getBoundingClientRect();return t.top===t.bottom?F(e.parentNode):t}function q(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>F(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(F(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function Y(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,G.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function J(e){const t=(0,s.useRef)(void 0),n=Y();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),l=q(c,{anchorTopOffset:n.current}),r=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===r)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function X(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,i.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,i.jsxs)("li",{children:[(0,i.jsx)(p.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,i.jsx)(X,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const Z=s.memo(X);function Q(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:l,...r}=e;const d=(0,G.p)(),u=c??d.tableOfContents.minHeadingLevel,m=l??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>$({toc:W(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return J((0,s.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:m}}),[a,o,u,m])),(0,i.jsx)(Z,{toc:h,className:n,linkClassName:a,...r})}const K={tocCollapsibleButton:"tocCollapsibleButton_qcCY",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_vG76"};function ee(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",K.tocCollapsibleButton,!t&&K.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const te={tocCollapsible:"tocCollapsible_GT_b",tocCollapsibleContent:"tocCollapsibleContent_eLsI",tocCollapsibleExpanded:"tocCollapsibleExpanded_J4VB"};function ne(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:c}=(0,P.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.A)(te.tocCollapsible,!o&&te.tocCollapsibleExpanded,n),children:[(0,i.jsx)(ee,{collapsed:o,onClick:c}),(0,i.jsx)(P.N,{lazy:!0,className:te.tocCollapsibleContent,collapsed:o,children:(0,i.jsx)(Q,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const se={tocMobile:"tocMobile__a_l"};function ae(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(ne,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(v.G.docs.docTocMobile,se.tocMobile)})}const oe={tableOfContents:"tableOfContents_oQTr",docItemContainer:"docItemContainer_oU7y"},ie="table-of-contents__link toc-highlight",ce="table-of-contents__link--active";function le(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,u.A)(oe.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(Q,{...n,linkClassName:ie,linkActiveClassName:ce})})}function re(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(le,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.G.docs.docTocDesktop})}var de=n(5235),ue=n(842),me=n(9738),he=n(8317),pe=n(2084);function fe(){const{prism:e}=(0,G.p)(),{colorMode:t}=(0,pe.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var xe=n(4809),be=n.n(xe);const ge=/title=(?<quote>["'])(?<title>.*?)\1/,je=/\{(?<range>[\d,-]+)\}/,ve={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},Ne={...ve,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},Ae=Object.keys(ve);function Ce(e,t){const n=e.map((e=>{const{start:n,end:s}=Ne[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function ye(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&je.test(o)){const e=o.match(je).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=be()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return Ce(["js","jsBlock"],t);case"jsx":case"tsx":return Ce(["js","jsBlock","jsx"],t);case"html":return Ce(["js","jsBlock","html"],t);case"python":case"py":case"bash":return Ce(["bash"],t);case"markdown":case"md":return Ce(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return Ce(["tex"],t);case"lua":case"haskell":return Ce(["lua"],t);case"sql":return Ce(["lua","jsBlock"],t);case"wasm":return Ce(["wasm"],t);case"vb":case"vba":case"visual-basic":return Ce(["vb","rem"],t);case"vbnet":return Ce(["vbnet","rem"],t);case"batch":return Ce(["rem"],t);case"basic":return Ce(["rem","f90"],t);case"fsharp":return Ce(["js","ml"],t);case"ocaml":case"sml":return Ce(["ml"],t);case"fortran":return Ce(["f90"],t);case"cobol":return Ce(["cobol"],t);default:return Ce(Ae,t)}}(s,a),c=n.split("\n"),l=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),r=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<c.length;){const e=c[h].match(i);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));r[t]?l[r[t]].range+=`${h},`:d[t]?l[d[t]].start=h:u[t]&&(l[u[t]].range+=`${l[u[t]].start}-${h-1},`),c.splice(h,1)}n=c.join("\n");const m={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;be()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const Le={codeBlockContainer:"codeBlockContainer_E0Jp"};function ke(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(fe());return(0,i.jsx)(t,{...n,style:s,className:(0,u.A)(n.className,Le.codeBlockContainer,v.G.common.codeBlock)})}const Be={codeBlockContent:"codeBlockContent_nWqd",codeBlockTitle:"codeBlockTitle_oyYh",codeBlock:"codeBlock_MSAy",codeBlockStandalone:"codeBlockStandalone_H_Jf",codeBlockLines:"codeBlockLines_djir",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_Qx7X",buttonGroup:"buttonGroup_Ij1p"};function _e(e){let{children:t,className:n}=e;return(0,i.jsx)(ke,{as:"pre",tabIndex:0,className:(0,u.A)(Be.codeBlockStandalone,"thin-scrollbar",n),children:(0,i.jsx)("code",{className:Be.codeBlockLines,children:t})})}const Te={attributes:!0,characterData:!0,childList:!0,subtree:!0};function we(e,t){const[n,a]=(0,s.useState)(),i=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=Te);const a=(0,o._q)(t),i=(0,o.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,i),()=>t.disconnect()}),[e,a,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var Ee=n(6920);const He={codeLine:"codeLine_YDT7",codeLineNumber:"codeLineNumber_wPNI",codeLineContent:"codeLineContent_tBTp"};function Me(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=a({line:t,className:(0,u.A)(n,s&&He.codeLine)}),l=t.map(((e,t)=>(0,i.jsx)("span",{...o({token:e})},t)));return(0,i.jsxs)("span",{...c,children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:He.codeLineNumber}),(0,i.jsx)("span",{className:He.codeLineContent,children:l})]}):l,(0,i.jsx)("br",{})]})}function Ie(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function Se(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const Ue={copyButtonCopied:"copyButtonCopied_xHrU",copyButtonIcons:"copyButtonIcons_npNj",copyButtonIcon:"copyButtonIcon_YSoL",copyButtonSuccessIcon:"copyButtonSuccessIcon_mE3M"};function Re(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),c=(0,s.useRef)(void 0),l=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),i=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}s.remove(),i&&(o.removeAllRanges(),o.addRange(i)),a&&a.focus()}(t),o(!0),c.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,i.jsx)("button",{type:"button","aria-label":a?(0,h.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,h.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,h.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.A)("clean-btn",n,Ue.copyButton,a&&Ue.copyButtonCopied),onClick:l,children:(0,i.jsxs)("span",{className:Ue.copyButtonIcons,"aria-hidden":"true",children:[(0,i.jsx)(Ie,{className:Ue.copyButtonIcon}),(0,i.jsx)(Se,{className:Ue.copyButtonSuccessIcon})]})})}function Ve(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const ze={wordWrapButtonIcon:"wordWrapButtonIcon__siM",wordWrapButtonEnabled:"wordWrapButtonEnabled_SI9D"};function De(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,h.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,i.jsx)("button",{type:"button",onClick:n,className:(0,u.A)("clean-btn",t,s&&ze.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,i.jsx)(Ve,{className:ze.wordWrapButtonIcon,"aria-hidden":"true"})})}function Oe(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:c,language:l}=e;const{prism:{defaultLanguage:r,magicComments:d}}=(0,G.p)(),m=function(e){return e?.toLowerCase()}(l??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??r),h=fe(),p=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return we(o,c),(0,s.useEffect)((()=>{c()}),[e,c]),(0,s.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}(),f=function(e){return e?.match(ge)?.groups.title??""}(a)||o,{lineClassNames:x,code:b}=ye(t,{metastring:a,language:m,magicComments:d}),g=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,i.jsxs)(ke,{as:"div",className:(0,u.A)(n,m&&!n.includes(`language-${m}`)&&`language-${m}`),children:[f&&(0,i.jsx)("div",{className:Be.codeBlockTitle,children:f}),(0,i.jsxs)("div",{className:Be.codeBlockContent,children:[(0,i.jsx)(Ee.f4,{theme:h,code:b,language:m??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,i.jsx)("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,u.A)(t,Be.codeBlock,"thin-scrollbar"),style:n,children:(0,i.jsx)("code",{className:(0,u.A)(Be.codeBlockLines,g&&Be.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,i.jsx)(Me,{line:e,getLineProps:a,getTokenProps:o,classNames:x[t],showLineNumbers:g},t)))})})}}),(0,i.jsxs)("div",{className:Be.buttonGroup,children:[(p.isEnabled||p.isCodeScrollable)&&(0,i.jsx)(De,{className:Be.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),(0,i.jsx)(Re,{className:Be.codeButton,code:b})]})]})]})}function Pe(e){let{children:t,...n}=e;const a=(0,he.A)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof o?Oe:_e;return(0,i.jsx)(c,{...n,children:o},String(a))}function Ge(e){return(0,i.jsx)("code",{...e})}var We=n(8465);const $e={details:"details_lWng",isBrowser:"isBrowser_gm_y",collapsibleContent:"collapsibleContent_LHhO"};function Fe(e){return!!e&&("SUMMARY"===e.tagName||Fe(e.parentElement))}function qe(e,t){return!!e&&(e===t||qe(e.parentElement,t))}function Ye(e){let{summary:t,children:n,...a}=e;(0,We.A)().collectAnchor(a.id);const o=(0,he.A)(),c=(0,s.useRef)(null),{collapsed:l,setCollapsed:r}=(0,P.u)({initialState:!a.open}),[d,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,i.jsx)("summary",{children:t??"Details"});return(0,i.jsxs)("details",{...a,ref:c,open:d,"data-collapsed":l,className:(0,u.A)($e.details,o&&$e.isBrowser,a.className),onMouseDown:e=>{Fe(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Fe(t)&&qe(t,c.current)&&(e.preventDefault(),l?(r(!1),m(!0)):r(!0))},children:[h,(0,i.jsx)(P.N,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{r(e),m(!e)},children:(0,i.jsx)("div",{className:$e.collapsibleContent,children:n})})]})}const Je={details:"details_HI4E"},Xe="alert alert--info";function Ze(e){let{...t}=e;return(0,i.jsx)(Ye,{...t,className:(0,u.A)(Xe,Je.details,t.className)})}function Qe(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,i.jsx)(i.Fragment,{children:t.filter((e=>e!==n))});return(0,i.jsx)(Ze,{...e,summary:n,children:a})}function Ke(e){return(0,i.jsx)(de.A,{...e})}const et={containsTaskList:"containsTaskList_BYnl"};function tt(e){if(void 0!==e)return(0,u.A)(e,e?.includes("contains-task-list")&&et.containsTaskList)}const nt={img:"img_uuUz"};var st=n(1898);const at={Head:me.A,details:Qe,Details:Qe,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,i.jsx)(Ge,{...e}):(0,i.jsx)(Pe,{...e})},a:function(e){return(0,i.jsx)(p.A,{...e})},pre:function(e){return(0,i.jsx)(i.Fragment,{children:e.children})},ul:function(e){return(0,i.jsx)("ul",{...e,className:tt(e.className)})},li:function(e){return(0,We.A)().collectAnchor(e.id),(0,i.jsx)("li",{...e})},img:function(e){return(0,i.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.A)(t,nt.img))});var t},h1:e=>(0,i.jsx)(Ke,{as:"h1",...e}),h2:e=>(0,i.jsx)(Ke,{as:"h2",...e}),h3:e=>(0,i.jsx)(Ke,{as:"h3",...e}),h4:e=>(0,i.jsx)(Ke,{as:"h4",...e}),h5:e=>(0,i.jsx)(Ke,{as:"h5",...e}),h6:e=>(0,i.jsx)(Ke,{as:"h6",...e}),admonition:st.A,mermaid:()=>null};function ot(e){let{children:t}=e;return(0,i.jsx)(ue.x,{components:at,children:t})}function it(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=r();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.A)(v.G.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(de.A,{as:"h1",children:n})}),(0,i.jsx)(ot,{children:t})]})}var ct=n(9043),lt=n(9190),rt=n(887);function dt(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const ut={breadcrumbHomeIcon:"breadcrumbHomeIcon_lbxT"};function mt(){const e=(0,rt.Ay)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(p.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(dt,{className:ut.breadcrumbHomeIcon})})})}const ht={breadcrumbsContainer:"breadcrumbsContainer_y197"};function pt(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,i.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,i.jsx)(p.A,{className:a,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:a,children:t})}function ft(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function xt(){const e=(0,ct.OF)(),t=(0,lt.Dt)();return e?(0,i.jsx)("nav",{className:(0,u.A)(v.G.docs.docBreadcrumbs,ht.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(mt,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(ft,{active:s,index:n,addMicrodata:!!a,children:(0,i.jsx)(pt,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var bt=n(5289);function gt(e){let{className:t}=e;return(0,i.jsx)(st.A,{type:"caution",title:(0,i.jsx)(bt.Yh,{}),className:(0,u.A)(t,v.G.common.draftBanner),children:(0,i.jsx)(bt.TT,{})})}var jt=n(2828);function vt(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,i.jsxs)(i.Fragment,{children:[(n||s.unlisted)&&(0,i.jsx)(jt.A,{}),s.draft&&(0,i.jsx)(gt,{})]})}const Nt={docItemContainer:"docItemContainer_BJdx",docItemCol:"docItemCol_mwJx"};function At(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=r(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,i.jsx)(ae,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(re,{})}}(),{metadata:s}=r();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&Nt.docItemCol),children:[(0,i.jsx)(vt,{metadata:s}),(0,i.jsx)(B,{}),(0,i.jsxs)("div",{className:Nt.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(xt,{}),(0,i.jsx)(_,{}),n.mobile,(0,i.jsx)(it,{children:t}),(0,i.jsx)(O,{})]}),(0,i.jsx)(b,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function Ct(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(l,{content:e.content,children:(0,i.jsxs)(a.e3,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(At,{children:(0,i.jsx)(n,{})})]})})}},3801:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(8101);var s=n(3526),a=n(2300);const o={tag:"tag_P2MX",tagRegular:"tagRegular_DnEZ",tagWithCount:"tagWithCount_y1jD"};var i=n(5105);function c(e){let{permalink:t,label:n,count:c,description:l}=e;return(0,i.jsxs)(a.A,{href:t,title:l,className:(0,s.A)(o.tag,c?o.tagWithCount:o.tagRegular),children:[n,c&&(0,i.jsx)("span",{children:c})]})}},5289:(e,t,n)=>{"use strict";n.d(t,{AE:()=>l,Rc:()=>i,TT:()=>d,Uh:()=>c,Yh:()=>r});n(8101);var s=n(7620),a=n(9738),o=n(5105);function i(){return(0,o.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,o.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,o.jsx)(a.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function r(){return(0,o.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,o.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},4809:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},842:(e,t,n)=>{"use strict";n.d(t,{R:()=>i,x:()=>c});var s=n(8101);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);