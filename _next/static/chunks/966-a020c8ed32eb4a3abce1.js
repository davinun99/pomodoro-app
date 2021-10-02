(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{861:function(e,s,t){"use strict";t.d(s,{FT:function(){return o}});var a=t(7294),r=t(5893);const n=["as","disabled"];function o({tagName:e,disabled:s,href:t,target:a,rel:r,onClick:n,tabIndex:o=0,type:l}){e||(e=null!=t||null!=a||null!=r?"a":"button");const i={tagName:e};if("button"===e)return[{type:l||"button",disabled:s},i];const c=a=>{(s||"a"===e&&function(e){return!e||"#"===e.trim()}(t))&&a.preventDefault(),s?a.stopPropagation():null==n||n(a)};return[{role:"button",disabled:void 0,tabIndex:s?void 0:o,href:"a"===e&&s?void 0:t,target:"a"===e?a:void 0,"aria-disabled":s||void 0,rel:"a"===e?r:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},i]}const l=a.forwardRef(((e,s)=>{let{as:t,disabled:a}=e,l=function(e,s){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],s.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);const[i,{tagName:c}]=o(Object.assign({tagName:t,disabled:a},l));return(0,r.jsx)(c,Object.assign({},l,i,{ref:s}))}));l.displayName="Button"},5005:function(e,s,t){"use strict";var a=t(4036),r=t.n(a),n=t(7294),o=t(861),l=t(600),i=t(5893);const c=n.forwardRef((({as:e,bsPrefix:s,variant:t,size:a,active:n,className:c,...d},f)=>{const u=(0,l.vE)(s,"btn"),[m,{tagName:p}]=(0,o.FT)({tagName:e,...d}),v=p;return(0,i.jsx)(v,{...d,...m,ref:f,className:r()(c,u,n&&"active",t&&`${u}-${t}`,a&&`${u}-${a}`,d.href&&d.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},s.Z=c},1555:function(e,s,t){"use strict";var a=t(4036),r=t.n(a),n=t(7294),o=t(600),l=t(5893);const i=["xxl","xl","lg","md","sm","xs"];const c=n.forwardRef(((e,s)=>{const[{className:t,...a},{as:n="div",bsPrefix:c,spans:d}]=function({as:e,bsPrefix:s,className:t,...a}){s=(0,o.vE)(s,"col");const n=[],l=[];return i.forEach((e=>{const t=a[e];let r,o,i;delete a[e],"object"===typeof t&&null!=t?({span:r=!0,offset:o,order:i}=t):r=t;const c="xs"!==e?`-${e}`:"";r&&n.push(!0===r?`${s}${c}`:`${s}${c}-${r}`),null!=i&&l.push(`order${c}-${i}`),null!=o&&l.push(`offset${c}-${o}`)})),[{...a,className:r()(t,...l,...n)},{as:e,bsPrefix:s,spans:n}]}(e);return(0,l.jsx)(n,{...a,ref:s,className:r()(t,!d.length&&c)})}));c.displayName="Col",s.Z=c},682:function(e,s,t){"use strict";var a=t(4036),r=t.n(a),n=t(7294),o=t(600),l=t(5893);const i=n.forwardRef((({bsPrefix:e,fluid:s,as:t="div",className:a,...n},i)=>{const c=(0,o.vE)(e,"container"),d="string"===typeof s?`-${s}`:"-fluid";return(0,l.jsx)(t,{ref:i,...n,className:r()(a,s?`${c}${d}`:c)})}));i.displayName="Container",i.defaultProps={fluid:!1},s.Z=i},4119:function(e,s,t){"use strict";var a=t(4036),r=t.n(a),n=t(7294),o=t(6986),l=t(600),i=t(5893);const c=n.forwardRef((({bsPrefix:e,className:s,children:t,controlId:a,label:n,...c},d)=>(e=(0,l.vE)(e,"form-floating"),(0,i.jsxs)(o.Z,{ref:d,className:r()(s,e),controlId:a,...c,children:[t,(0,i.jsx)("label",{htmlFor:a,children:n})]}))));c.displayName="FloatingLabel",s.Z=c},3330:function(e,s,t){"use strict";t.d(s,{Z:function(){return V}});var a=t(4036),r=t.n(a),n=t(5697),o=t.n(n),l=t(7294),i=t(5893);const c={type:o().string,tooltip:o().bool,as:o().elementType},d=l.forwardRef((({as:e="div",className:s,type:t="valid",tooltip:a=!1,...n},o)=>(0,i.jsx)(e,{...n,ref:o,className:r()(s,`${t}-${a?"tooltip":"feedback"}`)})));d.displayName="Feedback",d.propTypes=c;var f=d,u=t(1377),m=t(600);const p=l.forwardRef((({id:e,bsPrefix:s,className:t,type:a="checkbox",isValid:n=!1,isInvalid:o=!1,as:c="input",...d},f)=>{const{controlId:p}=(0,l.useContext)(u.Z);return s=(0,m.vE)(s,"form-check-input"),(0,i.jsx)(c,{...d,ref:f,type:a,id:e||p,className:r()(t,s,n&&"is-valid",o&&"is-invalid")})}));p.displayName="FormCheckInput";var v=p;const x=l.forwardRef((({bsPrefix:e,className:s,htmlFor:t,...a},n)=>{const{controlId:o}=(0,l.useContext)(u.Z);return e=(0,m.vE)(e,"form-check-label"),(0,i.jsx)("label",{...a,ref:n,htmlFor:t||o,className:r()(s,e)})}));x.displayName="FormCheckLabel";var b=x;const N=l.forwardRef((({id:e,bsPrefix:s,bsSwitchPrefix:t,inline:a=!1,disabled:n=!1,isValid:o=!1,isInvalid:c=!1,feedbackTooltip:d=!1,feedback:p,className:x,style:N,title:y="",type:h="checkbox",label:g,children:j,as:$="input",...w},P)=>{s=(0,m.vE)(s,"form-check"),t=(0,m.vE)(t,"form-switch");const{controlId:C}=(0,l.useContext)(u.Z),F=(0,l.useMemo)((()=>({controlId:e||C})),[C,e]),k=null!=g&&!1!==g&&!j,I=(0,i.jsx)(v,{...w,type:"switch"===h?"checkbox":h,ref:P,isValid:o,isInvalid:c,disabled:n,as:$});return(0,i.jsx)(u.Z.Provider,{value:F,children:(0,i.jsx)("div",{style:N,className:r()(x,g&&s,a&&`${s}-inline`,"switch"===h&&t),children:j||(0,i.jsxs)(i.Fragment,{children:[I,k&&(0,i.jsx)(b,{title:y,children:g}),(o||c)&&(0,i.jsx)(f,{type:o?"valid":"invalid",tooltip:d,children:p})]})})})}));N.displayName="FormCheck";var y=Object.assign(N,{Input:v,Label:b});t(2473);const h=l.forwardRef((({bsPrefix:e,type:s,size:t,htmlSize:a,id:n,className:o,isValid:c=!1,isInvalid:d=!1,plaintext:f,readOnly:p,as:v="input",...x},b)=>{const{controlId:N}=(0,l.useContext)(u.Z);let y;return e=(0,m.vE)(e,"form-control"),y=f?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${t}`]:t},(0,i.jsx)(v,{...x,type:s,size:a,ref:b,readOnly:p,id:n||N,className:r()(o,y,c&&"is-valid",d&&"is-invalid","color"===s&&`${e}-color`)})}));h.displayName="FormControl";var g=Object.assign(h,{Feedback:f}),j=(0,t(4680).Z)("form-floating"),$=t(6986),w=t(1555);const P=l.forwardRef((({as:e="label",bsPrefix:s,column:t,visuallyHidden:a,className:n,htmlFor:o,...c},d)=>{const{controlId:f}=(0,l.useContext)(u.Z);s=(0,m.vE)(s,"form-label");let p="col-form-label";"string"===typeof t&&(p=`${p} ${p}-${t}`);const v=r()(n,s,a&&"visually-hidden",t&&p);return o=o||f,t?(0,i.jsx)(w.Z,{ref:d,as:"label",className:v,htmlFor:o,...c}):(0,i.jsx)(e,{ref:d,className:v,htmlFor:o,...c})}));P.displayName="FormLabel",P.defaultProps={column:!1,visuallyHidden:!1};var C=P;const F=l.forwardRef((({bsPrefix:e,className:s,id:t,...a},n)=>{const{controlId:o}=(0,l.useContext)(u.Z);return e=(0,m.vE)(e,"form-range"),(0,i.jsx)("input",{...a,type:"range",ref:n,className:r()(s,e),id:t||o})}));F.displayName="FormRange";var k=F;const I=l.forwardRef((({bsPrefix:e,size:s,htmlSize:t,className:a,isValid:n=!1,isInvalid:o=!1,id:c,...d},f)=>{const{controlId:p}=(0,l.useContext)(u.Z);return e=(0,m.vE)(e,"form-select"),(0,i.jsx)("select",{...d,size:t,ref:f,className:r()(a,e,s&&`${e}-${s}`,n&&"is-valid",o&&"is-invalid"),id:c||p})}));I.displayName="FormSelect";var Z=I;const R=l.forwardRef((({bsPrefix:e,className:s,as:t="small",muted:a,...n},o)=>(e=(0,m.vE)(e,"form-text"),(0,i.jsx)(t,{...n,ref:o,className:r()(s,e,a&&"text-muted")}))));R.displayName="FormText";var E=R;const O=l.forwardRef(((e,s)=>(0,i.jsx)(y,{...e,ref:s,type:"switch"})));O.displayName="Switch";var S=Object.assign(O,{Input:y.Input,Label:y.Label}),T=t(4119);const L={_ref:o().any,validated:o().bool,as:o().elementType},z=l.forwardRef((({className:e,validated:s,as:t="form",...a},n)=>(0,i.jsx)(t,{...a,ref:n,className:r()(e,s&&"was-validated")})));z.displayName="Form",z.propTypes=L;var V=Object.assign(z,{Group:$.Z,Control:g,Floating:j,Check:y,Switch:S,Label:C,Text:E,Range:k,Select:Z,FloatingLabel:T.Z})},1377:function(e,s,t){"use strict";const a=t(7294).createContext({});s.Z=a},6986:function(e,s,t){"use strict";var a=t(7294),r=t(1377),n=t(5893);const o=a.forwardRef((({controlId:e,as:s="div",...t},o)=>{const l=(0,a.useMemo)((()=>({controlId:e})),[e]);return(0,n.jsx)(r.Z.Provider,{value:l,children:(0,n.jsx)(s,{...t,ref:o})})}));o.displayName="FormGroup",s.Z=o},4051:function(e,s,t){"use strict";var a=t(4036),r=t.n(a),n=t(7294),o=t(600),l=t(5893);const i=["xxl","xl","lg","md","sm","xs"],c=n.forwardRef((({bsPrefix:e,className:s,as:t="div",...a},n)=>{const c=(0,o.vE)(e,"row"),d=`${c}-cols`,f=[];return i.forEach((e=>{const s=a[e];let t;delete a[e],null!=s&&"object"===typeof s?({cols:t}=s):t=s;const r="xs"!==e?`-${e}`:"";null!=t&&f.push(`${d}${r}-${t}`)})),(0,l.jsx)(t,{ref:n,...a,className:r()(s,c,...f)})}));c.displayName="Row",s.Z=c},600:function(e,s,t){"use strict";t.d(s,{vE:function(){return l}});var a=t(7294);t(5893);const r=a.createContext({prefixes:{}}),{Consumer:n,Provider:o}=r;function l(e,s){const{prefixes:t}=(0,a.useContext)(r);return e||t[s]||s}},4680:function(e,s,t){"use strict";t.d(s,{Z:function(){return d}});var a=t(4036),r=t.n(a),n=/-(.)/g;var o=t(7294),l=t(600),i=t(5893);const c=e=>{return e[0].toUpperCase()+(s=e,s.replace(n,(function(e,s){return s.toUpperCase()}))).slice(1);var s};function d(e,{displayName:s=c(e),Component:t,defaultProps:a}={}){const n=o.forwardRef((({className:s,bsPrefix:a,as:n=t||"div",...o},c)=>{const d=(0,l.vE)(a,e);return(0,i.jsx)(n,{ref:c,className:r()(s,d),...o})}));return n.defaultProps=a,n.displayName=s,n}},4036:function(e,s){var t;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],s=0;s<arguments.length;s++){var t=arguments[s];if(t){var n=typeof t;if("string"===n||"number"===n)e.push(t);else if(Array.isArray(t)){if(t.length){var o=r.apply(null,t);o&&e.push(o)}}else if("object"===n)if(t.toString===Object.prototype.toString)for(var l in t)a.call(t,l)&&t[l]&&e.push(l);else e.push(t.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(s,[]))||(e.exports=t)}()},2473:function(e){"use strict";var s=function(){};e.exports=s}}]);