(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{2167:function(e,t,r){"use strict";var s=r(3038);t.default=void 0;var a,n=(a=r(7294))&&a.__esModule?a:{default:a},o=r(1063),l=r(4651),i=r(7426);var c={};function f(e,t,r,s){if(e&&o.isLocalURL(t)){e.prefetch(t,r,s).catch((function(e){0}));var a=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;c[t+"%"+r+(a?"%"+a:"")]=!0}}var u=function(e){var t,r=!1!==e.prefetch,a=l.useRouter(),u=n.default.useMemo((function(){var t=o.resolveHref(a,e.href,!0),r=s(t,2),n=r[0],l=r[1];return{href:n,as:e.as?o.resolveHref(a,e.as):l||n}}),[a,e.href,e.as]),d=u.href,p=u.as,v=e.children,m=e.replace,x=e.shallow,h=e.scroll,b=e.locale;"string"===typeof v&&(v=n.default.createElement("a",null,v));var y=(t=n.default.Children.only(v))&&"object"===typeof t&&t.ref,N=i.useIntersection({rootMargin:"200px"}),g=s(N,2),j=g[0],w=g[1],C=n.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);n.default.useEffect((function(){var e=w&&r&&o.isLocalURL(d),t="undefined"!==typeof b?b:a&&a.locale,s=c[d+"%"+p+(t?"%"+t:"")];e&&!s&&f(a,d,p,{locale:t})}),[p,d,w,b,r,a]);var $={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,s,a,n,l,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==l&&s.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](r,s,{shallow:n,locale:i,scroll:l}))}(e,a,d,p,m,x,h,b)},onMouseEnter:function(e){o.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),f(a,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:a&&a.locale,I=a&&a.isLocaleDomain&&o.getDomainLocale(p,E,a&&a.locales,a&&a.domainLocales);$.href=I||o.addBasePath(o.addLocale(p,E,a&&a.defaultLocale))}return n.default.cloneElement(t,$)};t.default=u},7426:function(e,t,r){"use strict";var s=r(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,i=a.useRef(),c=a.useState(!1),f=s(c,2),u=f[0],d=f[1],p=a.useCallback((function(e){i.current&&(i.current(),i.current=void 0),r||u||e&&e.tagName&&(i.current=function(e,t,r){var s=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var s=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=s.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:a,elements:s}),r}(r),a=s.id,n=s.observer,o=s.elements;return o.set(e,t),n.observe(e),function(){o.delete(e),n.unobserve(e),0===o.size&&(n.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,u]);return a.useEffect((function(){if(!o&&!u){var e=n.requestIdleCallback((function(){return d(!0)}));return function(){return n.cancelIdleCallback(e)}}}),[u]),[p,u]};var a=r(7294),n=r(3447),o="undefined"!==typeof IntersectionObserver;var l=new Map},1664:function(e,t,r){e.exports=r(2167)},1555:function(e,t,r){"use strict";var s=r(4036),a=r.n(s),n=r(7294),o=r(600),l=r(5893);const i=["xxl","xl","lg","md","sm","xs"];const c=n.forwardRef(((e,t)=>{const[{className:r,...s},{as:n="div",bsPrefix:c,spans:f}]=function({as:e,bsPrefix:t,className:r,...s}){t=(0,o.vE)(t,"col");const n=[],l=[];return i.forEach((e=>{const r=s[e];let a,o,i;delete s[e],"object"===typeof r&&null!=r?({span:a=!0,offset:o,order:i}=r):a=r;const c="xs"!==e?`-${e}`:"";a&&n.push(!0===a?`${t}${c}`:`${t}${c}-${a}`),null!=i&&l.push(`order${c}-${i}`),null!=o&&l.push(`offset${c}-${o}`)})),[{...s,className:a()(r,...l,...n)},{as:e,bsPrefix:t,spans:n}]}(e);return(0,l.jsx)(n,{...s,ref:t,className:a()(r,!f.length&&c)})}));c.displayName="Col",t.Z=c},682:function(e,t,r){"use strict";var s=r(4036),a=r.n(s),n=r(7294),o=r(600),l=r(5893);const i=n.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:s,...n},i)=>{const c=(0,o.vE)(e,"container"),f="string"===typeof t?`-${t}`:"-fluid";return(0,l.jsx)(r,{ref:i,...n,className:a()(s,t?`${c}${f}`:c)})}));i.displayName="Container",i.defaultProps={fluid:!1},t.Z=i},4119:function(e,t,r){"use strict";var s=r(4036),a=r.n(s),n=r(7294),o=r(6986),l=r(600),i=r(5893);const c=n.forwardRef((({bsPrefix:e,className:t,children:r,controlId:s,label:n,...c},f)=>(e=(0,l.vE)(e,"form-floating"),(0,i.jsxs)(o.Z,{ref:f,className:a()(t,e),controlId:s,...c,children:[r,(0,i.jsx)("label",{htmlFor:s,children:n})]}))));c.displayName="FloatingLabel",t.Z=c},3330:function(e,t,r){"use strict";r.d(t,{Z:function(){return T}});var s=r(4036),a=r.n(s),n=r(5697),o=r.n(n),l=r(7294),i=r(5893);const c={type:o().string,tooltip:o().bool,as:o().elementType},f=l.forwardRef((({as:e="div",className:t,type:r="valid",tooltip:s=!1,...n},o)=>(0,i.jsx)(e,{...n,ref:o,className:a()(t,`${r}-${s?"tooltip":"feedback"}`)})));f.displayName="Feedback",f.propTypes=c;var u=f,d=r(1377),p=r(600);const v=l.forwardRef((({id:e,bsPrefix:t,className:r,type:s="checkbox",isValid:n=!1,isInvalid:o=!1,as:c="input",...f},u)=>{const{controlId:v}=(0,l.useContext)(d.Z);return t=(0,p.vE)(t,"form-check-input"),(0,i.jsx)(c,{...f,ref:u,type:s,id:e||v,className:a()(r,t,n&&"is-valid",o&&"is-invalid")})}));v.displayName="FormCheckInput";var m=v;const x=l.forwardRef((({bsPrefix:e,className:t,htmlFor:r,...s},n)=>{const{controlId:o}=(0,l.useContext)(d.Z);return e=(0,p.vE)(e,"form-check-label"),(0,i.jsx)("label",{...s,ref:n,htmlFor:r||o,className:a()(t,e)})}));x.displayName="FormCheckLabel";var h=x;const b=l.forwardRef((({id:e,bsPrefix:t,bsSwitchPrefix:r,inline:s=!1,disabled:n=!1,isValid:o=!1,isInvalid:c=!1,feedbackTooltip:f=!1,feedback:v,className:x,style:b,title:y="",type:N="checkbox",label:g,children:j,as:w="input",...C},$)=>{t=(0,p.vE)(t,"form-check"),r=(0,p.vE)(r,"form-switch");const{controlId:E}=(0,l.useContext)(d.Z),I=(0,l.useMemo)((()=>({controlId:e||E})),[E,e]),P=null!=g&&!1!==g&&!j,R=(0,i.jsx)(m,{...C,type:"switch"===N?"checkbox":N,ref:$,isValid:o,isInvalid:c,disabled:n,as:w});return(0,i.jsx)(d.Z.Provider,{value:I,children:(0,i.jsx)("div",{style:b,className:a()(x,g&&t,s&&`${t}-inline`,"switch"===N&&r),children:j||(0,i.jsxs)(i.Fragment,{children:[R,P&&(0,i.jsx)(h,{title:y,children:g}),(o||c)&&(0,i.jsx)(u,{type:o?"valid":"invalid",tooltip:f,children:v})]})})})}));b.displayName="FormCheck";var y=Object.assign(b,{Input:m,Label:h});r(2473);const N=l.forwardRef((({bsPrefix:e,type:t,size:r,htmlSize:s,id:n,className:o,isValid:c=!1,isInvalid:f=!1,plaintext:u,readOnly:v,as:m="input",...x},h)=>{const{controlId:b}=(0,l.useContext)(d.Z);let y;return e=(0,p.vE)(e,"form-control"),y=u?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${r}`]:r},(0,i.jsx)(m,{...x,type:t,size:s,ref:h,readOnly:v,id:n||b,className:a()(o,y,c&&"is-valid",f&&"is-invalid","color"===t&&`${e}-color`)})}));N.displayName="FormControl";var g=Object.assign(N,{Feedback:u}),j=(0,r(4680).Z)("form-floating"),w=r(6986),C=r(1555);const $=l.forwardRef((({as:e="label",bsPrefix:t,column:r,visuallyHidden:s,className:n,htmlFor:o,...c},f)=>{const{controlId:u}=(0,l.useContext)(d.Z);t=(0,p.vE)(t,"form-label");let v="col-form-label";"string"===typeof r&&(v=`${v} ${v}-${r}`);const m=a()(n,t,s&&"visually-hidden",r&&v);return o=o||u,r?(0,i.jsx)(C.Z,{ref:f,as:"label",className:m,htmlFor:o,...c}):(0,i.jsx)(e,{ref:f,className:m,htmlFor:o,...c})}));$.displayName="FormLabel",$.defaultProps={column:!1,visuallyHidden:!1};var E=$;const I=l.forwardRef((({bsPrefix:e,className:t,id:r,...s},n)=>{const{controlId:o}=(0,l.useContext)(d.Z);return e=(0,p.vE)(e,"form-range"),(0,i.jsx)("input",{...s,type:"range",ref:n,className:a()(t,e),id:r||o})}));I.displayName="FormRange";var P=I;const R=l.forwardRef((({bsPrefix:e,size:t,htmlSize:r,className:s,isValid:n=!1,isInvalid:o=!1,id:c,...f},u)=>{const{controlId:v}=(0,l.useContext)(d.Z);return e=(0,p.vE)(e,"form-select"),(0,i.jsx)("select",{...f,size:r,ref:u,className:a()(s,e,t&&`${e}-${t}`,n&&"is-valid",o&&"is-invalid"),id:c||v})}));R.displayName="FormSelect";var k=R;const F=l.forwardRef((({bsPrefix:e,className:t,as:r="small",muted:s,...n},o)=>(e=(0,p.vE)(e,"form-text"),(0,i.jsx)(r,{...n,ref:o,className:a()(t,e,s&&"text-muted")}))));F.displayName="FormText";var Z=F;const L=l.forwardRef(((e,t)=>(0,i.jsx)(y,{...e,ref:t,type:"switch"})));L.displayName="Switch";var M=Object.assign(L,{Input:y.Input,Label:y.Label}),O=r(4119);const S={_ref:o().any,validated:o().bool,as:o().elementType},_=l.forwardRef((({className:e,validated:t,as:r="form",...s},n)=>(0,i.jsx)(r,{...s,ref:n,className:a()(e,t&&"was-validated")})));_.displayName="Form",_.propTypes=S;var T=Object.assign(_,{Group:w.Z,Control:g,Floating:j,Check:y,Switch:M,Label:E,Text:Z,Range:P,Select:k,FloatingLabel:O.Z})},1377:function(e,t,r){"use strict";const s=r(7294).createContext({});t.Z=s},6986:function(e,t,r){"use strict";var s=r(7294),a=r(1377),n=r(5893);const o=s.forwardRef((({controlId:e,as:t="div",...r},o)=>{const l=(0,s.useMemo)((()=>({controlId:e})),[e]);return(0,n.jsx)(a.Z.Provider,{value:l,children:(0,n.jsx)(t,{...r,ref:o})})}));o.displayName="FormGroup",t.Z=o},4051:function(e,t,r){"use strict";var s=r(4036),a=r.n(s),n=r(7294),o=r(600),l=r(5893);const i=["xxl","xl","lg","md","sm","xs"],c=n.forwardRef((({bsPrefix:e,className:t,as:r="div",...s},n)=>{const c=(0,o.vE)(e,"row"),f=`${c}-cols`,u=[];return i.forEach((e=>{const t=s[e];let r;delete s[e],null!=t&&"object"===typeof t?({cols:r}=t):r=t;const a="xs"!==e?`-${e}`:"";null!=r&&u.push(`${f}${a}-${r}`)})),(0,l.jsx)(r,{ref:n,...s,className:a()(t,c,...u)})}));c.displayName="Row",t.Z=c},600:function(e,t,r){"use strict";r.d(t,{vE:function(){return l}});var s=r(7294);r(5893);const a=s.createContext({prefixes:{}}),{Consumer:n,Provider:o}=a;function l(e,t){const{prefixes:r}=(0,s.useContext)(a);return e||r[t]||t}},4680:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var s=r(4036),a=r.n(s),n=/-(.)/g;var o=r(7294),l=r(600),i=r(5893);const c=e=>{return e[0].toUpperCase()+(t=e,t.replace(n,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e,{displayName:t=c(e),Component:r,defaultProps:s}={}){const n=o.forwardRef((({className:t,bsPrefix:s,as:n=r||"div",...o},c)=>{const f=(0,l.vE)(s,e);return(0,i.jsx)(n,{ref:c,className:a()(t,f),...o})}));return n.defaultProps=s,n.displayName=t,n}},4036:function(e,t){var r;!function(){"use strict";var s={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===n)if(r.toString===Object.prototype.toString)for(var l in r)s.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},2473:function(e){"use strict";var t=function(){};e.exports=t}}]);