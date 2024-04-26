"use strict";(self.webpackChunkcampers_rental=self.webpackChunkcampers_rental||[]).push([[912],{4244:(n,e,t)=>{t.d(e,{$y:()=>j,BV:()=>f,DO:()=>h,Pz:()=>v,Yk:()=>y,wj:()=>g,xL:()=>w,xx:()=>u});var i,r,a,s,c,o,l,d,p=t(7528),x=t(197),m=t(5475);const g=x.Ay.li(i||(i=(0,p.A)(["\n  display: flex;\n  gap: 24px;\n  padding: 24px;\n  border-radius: 20px;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n  width: 100%;\n"]))),h=x.Ay.img(r||(r=(0,p.A)(["\n  width: 290px;\n  height: 310px;\n  flex-shrink: 0;\n  border-radius: 10px;\n  object-fit: cover;\n  background: lightgray center center no-repeat;\n"]))),u=x.Ay.div(a||(a=(0,p.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-width: 526px;\n"]))),f=x.Ay.p(s||(s=(0,p.A)(["\n  display: inline;\n  color: #475467;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 24px;\n  width: 100%;\n\n  &.modalDescription {\n    margin-top: 0;\n    white-space: break-spaces;\n    overflow: visible;\n  }\n"]))),y=x.Ay.div(c||(c=(0,p.A)(["\n  position: relative;\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 526px;\n  margin-bottom: 10px;\n"]))),v=x.Ay.h2(o||(o=(0,p.A)(["\n  font-weight: 600;\n  line-height: 30px;\n  font-size: 24px;\n\n  &.modalName {\n    margin-bottom: 10px;\n  }\n"]))),j=x.Ay.p(l||(l=(0,p.A)(["\n  font-weight: 600;\n  line-height: 30px;\n  font-size: 24px;\n  margin-right: 30px;\n\n  &.modalPrice {\n    margin-top: 16px;\n    margin-right: 0;\n  }\n"]))),w=(0,x.Ay)(m.N_)(d||(d=(0,p.A)(["\n  margin-top: 24px;\n  width: 166px;\n  height: 56px;\n  display: flex;\n  padding: 16px 40px;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 200px;\n  background: #e44848;\n  color: #fff;\n  font-weight: 500;\n  letter-spacing: -0.08px;\n  line-height: 24px;\n  transition: transform 0.1s ease-in-out;\n\n  &:hover {\n    background-color: #d84343;\n    cursor: pointer;\n  }\n\n  &:active {\n    transform: scale(0.9);\n  }\n"])))},8912:(n,e,t)=>{t.r(e),t.d(e,{default:()=>w});var i=t(3003),r=t(1547),a=t(5043),s=t(6020),c=t(3216),o=t(528);var l,d=t(7343),p=t(4244),x=t(2497),m=t(7528);const g=t(197).Ay.div(l||(l=(0,m.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n"])));var h=t(579);const u=n=>{let{camper:e}=n;const t=(0,d.$g)(e.price);return(0,h.jsxs)(g,{children:[(0,h.jsx)(p.Pz,{className:"modalName",children:e.name}),(0,h.jsx)(x.M,{camper:e}),(0,h.jsx)(p.$y,{className:"modalPrice",children:t})]})},f=n=>{let{images:e}=n;const t=Array.isArray(e)?e.length:0;return(0,h.jsx)(r.i_,{children:t>0?e.map(((n,e)=>(0,h.jsx)(p.DO,{src:n,alt:"camper"},e))):"No images available :("})},y=n=>{let{camper:e}=n;const t=(0,c.zy)(),i=t.pathname.includes("favorites")?"/favorites":"/catalog";return(0,h.jsxs)(r.sK,{children:[(0,h.jsx)(r.yE,{to:"".concat(i,"/").concat(e._id,"/features"),state:{from:t},activeclassname:"active",children:"Features"}),(0,h.jsx)(r.yE,{to:"".concat(i,"/").concat(e._id,"/reviews"),state:{from:t},activeclassname:"active",children:"Reviews"})]})};var v=t(1227),j=t(7914);const w=()=>{const{id:n}=(0,c.g)(),e=(0,c.Zp)(),t=(0,i.wA)(),l=(0,i.d4)(o.OZ),d=(0,c.zy)().pathname.includes("favorites")?"/favorites":"/catalog",x=(0,a.useCallback)((()=>{e("".concat(d))}),[e,d]),m=(n=>(0,a.useCallback)((e=>{"Escape"===e.key&&n()}),[n]))(x),g=(n=>(0,a.useCallback)((e=>{e.target===e.currentTarget&&n()}),[n]))(x);return(0,a.useEffect)((()=>((n=>{document.body.style.overflow="hidden",document.body.style.paddingRight="17px",document.addEventListener("keydown",n)})(m),t((0,s.xZ)(n)),()=>{(n=>{document.body.style.overflow="auto",document.body.style.paddingRight="0",document.removeEventListener("keydown",n)})(m)})),[t,m,n]),(0,h.jsx)(r.kd,{onClick:g,children:(0,h.jsxs)(r.jm,{children:[(0,h.jsx)(u,{camper:l}),(0,h.jsx)(f,{images:l.gallery}),(0,h.jsx)(p.BV,{className:"modalDescription",children:l.description}),(0,h.jsx)(y,{camper:l}),(0,h.jsx)(r.nj,{onClick:x,children:(0,h.jsx)(r.X6,{children:(0,h.jsx)("use",{xlinkHref:"".concat(j.A,"#icon-cross")})})}),(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(v.Ay,{}),children:(0,h.jsx)(c.sv,{})})]})})}},2497:(n,e,t)=>{t.d(e,{M:()=>y});var i,r,a,s,c=t(7528),o=t(197);const l=o.Ay.div(i||(i=(0,c.A)(["\n  display: flex;\n  gap: 16px;\n"]))),d=o.Ay.span(r||(r=(0,c.A)(["\n  display: flex;\n  align-items: center;\n"]))),p=o.Ay.svg(a||(a=(0,c.A)(["\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n"]))),x=o.Ay.p(s||(s=(0,c.A)(["\n  font-weight: 400;\n  position: relative;\n\n  &.rating::after {\n    content: '';\n    position: absolute;\n    bottom: 0px;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background-color: #101828;\n  }\n"])));var m=t(7343),g=t(7914),h=t(579);const u=n=>{let{reviews:e}=n;const t=Array.isArray(e),i=t?(0,m.Kk)(e):0,r=t?e.length:0;return(0,h.jsxs)(d,{children:[(0,h.jsx)(p,{fill:"#ffc531",stroke:"#ffc531",children:(0,h.jsx)("use",{xlinkHref:"".concat(g.A,"#icon-star")})}),(0,h.jsx)(x,{className:"rating",children:i>=0?"".concat(i," (").concat(r," Reviews)"):"No reviews"})]})},f=n=>{let{location:e}=n;return(0,h.jsxs)(d,{children:[(0,h.jsx)(p,{children:(0,h.jsx)("use",{xlinkHref:"".concat(g.A,"#icon-location")})}),(0,h.jsx)(x,{children:"".concat(e)})]})},y=n=>{let{camper:e}=n;return(0,h.jsxs)(l,{children:[(0,h.jsx)(u,{reviews:e.reviews}),(0,h.jsx)(f,{location:e.location})]})}},7343:(n,e,t)=>{function i(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!1}).format(n)}t.d(e,{$g:()=>i,Kk:()=>r,TT:()=>a});const r=n=>(n.reduce(((n,e)=>n+e.reviewer_rating),0)/n.length).toFixed(1),a=(n,e,t)=>{const i=/^[A-Za-z,\s]*$/.test(n.target.value);return e("location",n.target.value),t(i),i}}}]);
//# sourceMappingURL=912.8da6e21a.chunk.js.map