"use strict";(self.webpackChunkcampers_rental=self.webpackChunkcampers_rental||[]).push([[29],{5748:(n,e,i)=>{i.d(e,{e:()=>m});var t,r,o,a,s=i(7528),c=i(197);const l=c.Ay.ul(t||(t=(0,s.A)(["\n  max-width: 100%;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 8px;\n  column-gap: 8px;\n"]))),d=c.Ay.li(r||(r=(0,s.A)(["\n  display: flex;\n  align-items: center;\n  padding: 12px 18px;\n  border-radius: 100px;\n  background: #f7f7f7;\n  font-weight: 500;\n  line-height: 20px;\n"]))),p=c.Ay.svg(o||(o=(0,s.A)(["\n  width: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 8px;\n  fill: #101828;\n"]))),x=c.Ay.p(a||(a=(0,s.A)(["\n  font-weight: 500;\n  line-height: 20px;\n  text-transform: capitalize;\n"])));var h=i(7914),g=i(579);const f=n=>{let{svg:e,info:i}=n;return(0,g.jsxs)(d,{children:[(0,g.jsx)(p,{children:(0,g.jsx)("use",{xlinkHref:"".concat(h.A,"#icon-").concat(e)})}),(0,g.jsx)(x,{children:i})]})},m=n=>{let{attributes:e}=n;return(0,g.jsx)(l,{children:e.map(((n,e)=>!1!==n.condition&&(0,g.jsx)(f,{svg:n.svg,info:n.info},e)))})}},2488:(n,e,i)=>{i.d(e,{b:()=>b});var t,r,o=i(4244),a=i(5748),s=i(7343),c=i(3003),l=i(4975),d=i(7528),p=i(197);const x=p.Ay.svg(t||(t=(0,d.A)(["\n  width: 24px;\n  height: 24px;\n  fill: ",";\n  stroke: ",";\n  transition: transform 0.1s ease-in-out;\n  cursor: pointer;\n"])),(n=>n.isfavorite?"#E44848":"none"),(n=>n.isfavorite?"none":"#101828")),h=p.Ay.button(r||(r=(0,d.A)(["\n  position: absolute;\n  right: 0;\n  flex-shrink: 0;\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n\n  transition: transform 0.1s ease-in-out;\n\n  &:active {\n    transform: scale(0.9);\n  }\n"])));var g=i(7914),f=i(579);const m=n=>{let{camper:e}=n;const i=(0,c.d4)(l.D1),t=(0,c.wA)(),r=i.some((n=>n._id===e._id));return(0,f.jsx)(h,{onClick:()=>{t(r?(0,l.Fy)(e):(0,l.Gm)(e))},children:(0,f.jsx)(x,{isfavorite:r?"true":void 0,children:(0,f.jsx)("use",{xlinkHref:"".concat(g.A,"#icon-heart")})})})},u=n=>{let{camper:e}=n;const i=(0,s.$g)(e.price);return(0,f.jsxs)(o.Yk,{children:[(0,f.jsx)(o.Pz,{children:e.name}),(0,f.jsx)(o.$y,{children:i}),(0,f.jsx)(m,{camper:e})]})};var v=i(2497);const w=i.p+"static/media/van_rent.097482fba531dd019b9e.jpg";var A=i(3216),y=i(1903);const b=n=>{let{camper:e}=n;const i=(0,A.zy)(),t=(0,y.g)(e),r=i.pathname.includes("favorites")?"/favorites":"/catalog";return(0,f.jsxs)(o.wj,{children:[(0,f.jsx)(o.DO,{src:e.gallery[0],alt:"Camper image",onError:n=>{n.target.onerror=null,n.target.src=w}}),(0,f.jsxs)(o.xx,{children:[(0,f.jsx)(u,{camper:e}),(0,f.jsx)(v.M,{camper:e}),(0,f.jsx)(o.BV,{children:e.description}),(0,f.jsx)(a.e,{attributes:t}),(0,f.jsx)(o.xL,{to:"".concat(r,"/").concat(e._id),state:{from:i},children:"Show more"})]})]})}},4244:(n,e,i)=>{i.d(e,{$y:()=>A,BV:()=>u,DO:()=>f,Pz:()=>w,Yk:()=>v,wj:()=>g,xL:()=>y,xx:()=>m});var t,r,o,a,s,c,l,d,p=i(7528),x=i(197),h=i(5475);const g=x.Ay.li(t||(t=(0,p.A)(["\n  display: flex;\n  gap: 24px;\n  padding: 24px;\n  border-radius: 20px;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n  width: 100%;\n"]))),f=x.Ay.img(r||(r=(0,p.A)(["\n  width: 290px;\n  height: 310px;\n  flex-shrink: 0;\n  border-radius: 10px;\n  object-fit: cover;\n  background: lightgray center center no-repeat;\n"]))),m=x.Ay.div(o||(o=(0,p.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-width: 526px;\n"]))),u=x.Ay.p(a||(a=(0,p.A)(["\n  display: inline;\n  color: #475467;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 24px;\n  width: 100%;\n\n  &.modalDescription {\n    margin-top: 0;\n    white-space: break-spaces;\n    overflow: visible;\n  }\n"]))),v=x.Ay.div(s||(s=(0,p.A)(["\n  position: relative;\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 526px;\n  margin-bottom: 10px;\n"]))),w=x.Ay.h2(c||(c=(0,p.A)(["\n  font-weight: 600;\n  line-height: 30px;\n  font-size: 24px;\n\n  &.modalName {\n    margin-bottom: 10px;\n  }\n"]))),A=x.Ay.p(l||(l=(0,p.A)(["\n  font-weight: 600;\n  line-height: 30px;\n  font-size: 24px;\n  margin-right: 30px;\n\n  &.modalPrice {\n    margin-top: 16px;\n    margin-right: 0;\n  }\n"]))),y=(0,x.Ay)(h.N_)(d||(d=(0,p.A)(["\n  margin-top: 24px;\n  width: 166px;\n  height: 56px;\n  display: flex;\n  padding: 16px 40px;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 200px;\n  background: #e44848;\n  color: #fff;\n  font-weight: 500;\n  letter-spacing: -0.08px;\n  line-height: 24px;\n  transition: transform 0.1s ease-in-out;\n\n  &:hover {\n    background-color: #d84343;\n    cursor: pointer;\n  }\n\n  &:active {\n    transform: scale(0.9);\n  }\n"])))},2497:(n,e,i)=>{i.d(e,{M:()=>v});var t,r,o,a,s=i(7528),c=i(197);const l=c.Ay.div(t||(t=(0,s.A)(["\n  display: flex;\n  gap: 16px;\n"]))),d=c.Ay.span(r||(r=(0,s.A)(["\n  display: flex;\n  align-items: center;\n"]))),p=c.Ay.svg(o||(o=(0,s.A)(["\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n"]))),x=c.Ay.p(a||(a=(0,s.A)(["\n  font-weight: 400;\n  position: relative;\n\n  &.rating::after {\n    content: '';\n    position: absolute;\n    bottom: 0px;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background-color: #101828;\n  }\n"])));var h=i(7343),g=i(7914),f=i(579);const m=n=>{let{reviews:e}=n;const i=Array.isArray(e),t=i?(0,h.Kk)(e):0,r=i?e.length:0;return(0,f.jsxs)(d,{children:[(0,f.jsx)(p,{fill:"#ffc531",stroke:"#ffc531",children:(0,f.jsx)("use",{xlinkHref:"".concat(g.A,"#icon-star")})}),(0,f.jsx)(x,{className:"rating",children:t>=0?"".concat(t," (").concat(r," Reviews)"):"No reviews"})]})},u=n=>{let{location:e}=n;return(0,f.jsxs)(d,{children:[(0,f.jsx)(p,{children:(0,f.jsx)("use",{xlinkHref:"".concat(g.A,"#icon-location")})}),(0,f.jsx)(x,{children:"".concat(e)})]})},v=n=>{let{camper:e}=n;return(0,f.jsxs)(l,{children:[(0,f.jsx)(m,{reviews:e.reviews}),(0,f.jsx)(u,{location:e.location})]})}},5181:(n,e,i)=>{i.d(e,{_M:()=>d,sz:()=>p,tb:()=>l});var t,r,o,a=i(7528),s=i(197),c=i(2304);const l=s.Ay.div(t||(t=(0,a.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  align-items: center;\n"]))),d=s.Ay.ul(r||(r=(0,a.A)(["\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  width: 100%;\n\n  @media (min-width: 768px) {\n    max-width: 888px;\n  }\n"]))),p=(0,s.Ay)(c.$)(o||(o=(0,a.A)(["\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 16px 32px;\n  background-color: white;\n  color: var(--black-color);\n  border-radius: 200px;\n  border: 1px solid rgba(71, 84, 103, 0.2);\n  transition: border 0.1s ease-in-out, transform 0.1s ease-in-out;\n  width: 100%;\n\n  &:hover {\n    background-color: white;\n    border: 1px solid var(--Button, #e44848);\n  }\n\n  @media (min-width: 768px) {\n    width: auto;\n  }\n"])))},7490:(n,e,i)=>{i.r(e),i.d(e,{default:()=>g});var t,r=i(2304),o=i(4975),a=i(5181),s=i(2488),c=i(3003),l=i(5043),d=i(3216),p=i(7528);const x=i(197).Ay.div(t||(t=(0,p.A)(["\n  margin-top: 44px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n"])));var h=i(579);const g=()=>{const n=(0,c.d4)(o.D1);return(0,h.jsx)(r.m,{children:(0,h.jsxs)(x,{children:[(0,h.jsx)("h2",{children:"Yor favorite campers"}),n.length<=0?(0,h.jsx)("h2",{children:"No campers added to favorites"}):(0,h.jsx)(a._M,{children:n.map((n=>(0,h.jsx)(s.b,{camper:n},n._id)))}),(0,h.jsx)(l.Suspense,{children:(0,h.jsx)(d.sv,{})})]})})}},1903:(n,e,i)=>{i.d(e,{g:()=>s});const t=["adults","transmission","engine","kitchen","beds","airConditioner"],r=["airConditioner","cd","radio","hob","gas","tv","water","microvave","freezer","shower","toilet"],o={adults:n=>"".concat(n," adults"),transmission:n=>n,engine:n=>n,kitchen:n=>n>=1?"Kitchen":"",beds:n=>"".concat(n," beds"),airConditioner:n=>n>=1?"AC":""},a={airConditioner:n=>n>=1?"Air conditioner":"",cd:n=>n>=1?"CD":"",radio:n=>n>=1?"Radio":"",hob:n=>n>=1?"".concat(n," Hob"):"",gas:n=>n?"Gas":"",tv:n=>n>=1?"TV":"",water:n=>n?"Water":"",microwave:n=>n>=1?"Microwave":"",freezer:n=>n>=1?"Freezer":"",shower:n=>n>=1?"Shower":"",toilet:n=>n>=1?"Toilet":""},s=function(n){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const i=[];return((n,e)=>{t.forEach((i=>{n[i]&&e.push({svg:i,info:o[i](n[i]),condition:!1!==n[i]})}))})(n,i),((n,e)=>{t.forEach((i=>{n.details&&n.details[i]&&e.push({svg:i,info:o[i](n.details[i]),condition:!1!==n.details[i]})}))})(n,i),e&&n.details&&((n,e)=>{r.forEach((i=>{n.details&&n.details[i]&&e.push({svg:i,info:a[i](n.details[i]),condition:!(n.details[i]<=0)})}))})(n,i),i}},7343:(n,e,i)=>{function t(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!1}).format(n)}i.d(e,{$g:()=>t,Kk:()=>r,TT:()=>o});const r=n=>(n.reduce(((n,e)=>n+e.reviewer_rating),0)/n.length).toFixed(1),o=(n,e,i)=>{const t=/^[A-Za-z,\s]*$/.test(n.target.value);return e("location",n.target.value),i(t),t}}}]);
//# sourceMappingURL=29.b9b60758.chunk.js.map