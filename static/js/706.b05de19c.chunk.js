"use strict";(self.webpackChunkcampers_rental=self.webpackChunkcampers_rental||[]).push([[706],{5748:(n,e,t)=>{t.d(e,{e:()=>u});var i,r,o,a,s=t(7528),l=t(197);const c=l.Ay.ul(i||(i=(0,s.A)(["\n  max-width: 100%;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 8px;\n  column-gap: 8px;\n"]))),d=l.Ay.li(r||(r=(0,s.A)(["\n  display: flex;\n  align-items: center;\n  padding: 12px 18px;\n  border-radius: 100px;\n  background: #f7f7f7;\n  font-weight: 500;\n  line-height: 20px;\n"]))),p=l.Ay.svg(o||(o=(0,s.A)(["\n  width: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 8px;\n  fill: #101828;\n"]))),x=l.Ay.p(a||(a=(0,s.A)(["\n  font-weight: 500;\n  line-height: 20px;\n  text-transform: capitalize;\n"])));var h=t(7914),g=t(579);const m=n=>{let{svg:e,info:t}=n;return(0,g.jsxs)(d,{children:[(0,g.jsx)(p,{children:(0,g.jsx)("use",{xlinkHref:"".concat(h.A,"#icon-").concat(e)})}),(0,g.jsx)(x,{children:t})]})},u=n=>{let{attributes:e}=n;return(0,g.jsx)(c,{children:e.map(((n,e)=>!1!==n.condition&&(0,g.jsx)(m,{svg:n.svg,info:n.info},e)))})}},2488:(n,e,t)=>{t.d(e,{b:()=>w});var i,r,o=t(4244),a=t(5748),s=t(7343),l=t(3003),c=t(4975),d=t(7528),p=t(197);const x=p.Ay.svg(i||(i=(0,d.A)(["\n  width: 24px;\n  height: 24px;\n  fill: ",";\n  stroke: ",";\n  transition: transform 0.1s ease-in-out;\n  cursor: pointer;\n"])),(n=>n.isfavorite?"#E44848":"none"),(n=>n.isfavorite?"none":"#101828")),h=p.Ay.button(r||(r=(0,d.A)(["\n  position: absolute;\n  right: 0;\n  flex-shrink: 0;\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n\n  transition: transform 0.1s ease-in-out;\n\n  &:active {\n    transform: scale(0.9);\n  }\n"])));var g=t(7914),m=t(579);const u=n=>{let{camper:e}=n;const t=(0,l.d4)(c.D1),i=(0,l.wA)(),r=t.some((n=>n._id===e._id));return(0,m.jsx)(h,{onClick:()=>{i(r?(0,c.Fy)(e):(0,c.Gm)(e))},children:(0,m.jsx)(x,{isfavorite:r?"true":void 0,children:(0,m.jsx)("use",{xlinkHref:"".concat(g.A,"#icon-heart")})})})},f=n=>{let{camper:e}=n;const t=(0,s.$g)(e.price);return(0,m.jsxs)(o.Yk,{children:[(0,m.jsx)(o.Pz,{children:e.name}),(0,m.jsx)(o.$y,{children:t}),(0,m.jsx)(u,{camper:e})]})};var A=t(2497);const y=t.p+"static/media/van_rent.097482fba531dd019b9e.jpg";var v=t(3216),b=t(1903);const w=n=>{let{camper:e}=n;const t=(0,v.zy)(),i=(0,b.g)(e),r=t.pathname.includes("favorites")?"/favorites":"/catalog";return(0,m.jsxs)(o.wj,{children:[(0,m.jsx)(o.DO,{src:e.gallery[0],alt:"Camper image",onError:n=>{n.target.onerror=null,n.target.src=y}}),(0,m.jsxs)(o.xx,{children:[(0,m.jsx)(f,{camper:e}),(0,m.jsx)(A.M,{camper:e}),(0,m.jsx)(o.BV,{children:e.description}),(0,m.jsx)(a.e,{attributes:i}),(0,m.jsx)(o.xL,{to:"".concat(r,"/").concat(e._id),state:{from:t},children:"Show more"})]})]})}},4244:(n,e,t)=>{t.d(e,{$y:()=>v,BV:()=>f,DO:()=>m,Pz:()=>y,Yk:()=>A,wj:()=>g,xL:()=>b,xx:()=>u});var i,r,o,a,s,l,c,d,p=t(7528),x=t(197),h=t(5475);const g=x.Ay.li(i||(i=(0,p.A)(["\n  display: flex;\n  gap: 24px;\n  padding: 24px;\n  border-radius: 20px;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n  width: 100%;\n"]))),m=x.Ay.img(r||(r=(0,p.A)(["\n  width: 290px;\n  height: 310px;\n  flex-shrink: 0;\n  border-radius: 10px;\n  object-fit: cover;\n  background: lightgray center center no-repeat;\n"]))),u=x.Ay.div(o||(o=(0,p.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-width: 526px;\n"]))),f=x.Ay.p(a||(a=(0,p.A)(["\n  display: inline;\n  color: #475467;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 24px;\n  width: 100%;\n\n  &.modalDescription {\n    margin-top: 0;\n    white-space: break-spaces;\n    overflow: visible;\n  }\n"]))),A=x.Ay.div(s||(s=(0,p.A)(["\n  position: relative;\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 526px;\n  margin-bottom: 10px;\n"]))),y=x.Ay.h2(l||(l=(0,p.A)(["\n  font-weight: 600;\n  line-height: 30px;\n  font-size: 24px;\n\n  &.modalName {\n    margin-bottom: 10px;\n  }\n"]))),v=x.Ay.p(c||(c=(0,p.A)(["\n  font-weight: 600;\n  line-height: 30px;\n  font-size: 24px;\n  margin-right: 30px;\n\n  &.modalPrice {\n    margin-top: 16px;\n    margin-right: 0;\n  }\n"]))),b=(0,x.Ay)(h.N_)(d||(d=(0,p.A)(["\n  margin-top: 24px;\n  width: 166px;\n  height: 56px;\n  display: flex;\n  padding: 16px 40px;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 200px;\n  background: #e44848;\n  color: #fff;\n  font-weight: 500;\n  letter-spacing: -0.08px;\n  line-height: 24px;\n  transition: transform 0.1s ease-in-out;\n\n  &:hover {\n    background-color: #d84343;\n    cursor: pointer;\n  }\n\n  &:active {\n    transform: scale(0.9);\n  }\n"])))},2497:(n,e,t)=>{t.d(e,{M:()=>A});var i,r,o,a,s=t(7528),l=t(197);const c=l.Ay.div(i||(i=(0,s.A)(["\n  display: flex;\n  gap: 16px;\n"]))),d=l.Ay.span(r||(r=(0,s.A)(["\n  display: flex;\n  align-items: center;\n"]))),p=l.Ay.svg(o||(o=(0,s.A)(["\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n"]))),x=l.Ay.p(a||(a=(0,s.A)(["\n  font-weight: 400;\n  position: relative;\n\n  &.rating::after {\n    content: '';\n    position: absolute;\n    bottom: 0px;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background-color: #101828;\n  }\n"])));var h=t(7343),g=t(7914),m=t(579);const u=n=>{let{reviews:e}=n;const t=Array.isArray(e),i=t?(0,h.Kk)(e):0,r=t?e.length:0;return(0,m.jsxs)(d,{children:[(0,m.jsx)(p,{fill:"#ffc531",stroke:"#ffc531",children:(0,m.jsx)("use",{xlinkHref:"".concat(g.A,"#icon-star")})}),(0,m.jsx)(x,{className:"rating",children:i>=0?"".concat(i," (").concat(r," Reviews)"):"No reviews"})]})},f=n=>{let{location:e}=n;return(0,m.jsxs)(d,{children:[(0,m.jsx)(p,{children:(0,m.jsx)("use",{xlinkHref:"".concat(g.A,"#icon-location")})}),(0,m.jsx)(x,{children:"".concat(e)})]})},A=n=>{let{camper:e}=n;return(0,m.jsxs)(c,{children:[(0,m.jsx)(u,{reviews:e.reviews}),(0,m.jsx)(f,{location:e.location})]})}},5181:(n,e,t)=>{t.d(e,{_M:()=>d,sz:()=>p,tb:()=>c});var i,r,o,a=t(7528),s=t(197),l=t(2304);const c=s.Ay.div(i||(i=(0,a.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  align-items: center;\n"]))),d=s.Ay.ul(r||(r=(0,a.A)(["\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  width: 100%;\n\n  @media (min-width: 768px) {\n    max-width: 888px;\n  }\n"]))),p=(0,s.Ay)(l.$)(o||(o=(0,a.A)(["\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 16px 32px;\n  background-color: white;\n  color: var(--black-color);\n  border-radius: 200px;\n  border: 1px solid rgba(71, 84, 103, 0.2);\n  transition: border 0.1s ease-in-out, transform 0.1s ease-in-out;\n  width: 100%;\n\n  &:hover {\n    background-color: white;\n    border: 1px solid var(--Button, #e44848);\n  }\n\n  @media (min-width: 768px) {\n    width: auto;\n  }\n"])))},6765:(n,e,t)=>{t.r(e),t.d(e,{default:()=>tn});var i=t(2304),r=t(3003),o=t(528),a=t(5043),s=t(6020),l=t(2488),c=t(5181),d=t(3216),p=t(1227),x=t(579);const h=()=>{const n=(0,a.useRef)(1),e=(0,r.d4)(o.FO),t=(0,r.d4)(o.l1),i=(0,r.wA)();return(0,x.jsxs)(c.tb,{children:[e&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c._M,{children:e.map((n=>(0,x.jsx)(l.b,{camper:n},n._id)))}),t&&(0,x.jsx)(c.sz,{type:"button",onClick:()=>{n.current+=1,i((0,s.S)(n.current))},children:"Load more"})]}),(0,x.jsx)(a.Suspense,{fallback:(0,x.jsx)(p.Ay,{}),children:(0,x.jsx)(d.sv,{})})]})};var g,m,u,f,A,y,v,b,w,j,k,C,z,F,S=t(4858),_=t(7528),V=t(197);const E=V.Ay.form(g||(g=(0,_.A)(["\n  max-width: 360px;\n  display: flex;\n  flex-direction: column;\n  color: #101828;\n"]))),T=V.Ay.div(m||(m=(0,_.A)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: fit-content;\n"]))),$=V.Ay.p(u||(u=(0,_.A)(["\n  color: #475467;\n  font-weight: 500;\n  line-height: 24px;\n  margin-top: 32px;\n  margin-bottom: 14px;\n"]))),D=V.Ay.svg(f||(f=(0,_.A)(["\n  width: 18px;\n  height: 20px;\n  position: absolute;\n  left: 18px;\n  bottom: 18px;\n  stroke: rgba(16, 24, 40, 0.6);\n"]))),H=V.Ay.input(A||(A=(0,_.A)(["\n  color: inherit;\n  width: 360px;\n  height: 56px;\n  display: flex;\n  padding-left: 44px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  border: 'none';\n\n  border-radius: 10px;\n  background: #f7f7f7;\n  line-height: 20px;\n\n  &::placeholder {\n    color: rgba(16, 24, 40, 0.6);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]))),N=V.Ay.label(y||(y=(0,_.A)(["\n  font-weight: 500;\n  line-height: 24px;\n"]))),M=V.Ay.fieldset(v||(v=(0,_.A)(["\n  padding: 0;\n  border: none;\n  position: relative;\n  margin-bottom: 32px;\n\n  &:last-child {\n    margin-bottom: 64px;\n  }\n"]))),O=V.Ay.legend(b||(b=(0,_.A)(["\n  position: relative;\n  margin-bottom: 48px;\n\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 24px;\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: -24px;\n    width: 360px;\n    height: 1px;\n    background-color: rgba(16, 24, 40, 0.2);\n    z-index: 5;\n  }\n"]))),K=V.Ay.div(w||(w=(0,_.A)(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 10px;\n  column-gap: 10px;\n"]))),L=V.Ay.div(j||(j=(0,_.A)(["\n  width: 113px;\n  height: 95px;\n  border-radius: 10px;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n"]))),R=V.Ay.input(k||(k=(0,_.A)(["\n  display: none;\n\n  &[type='checkbox']:checked\n    + ",",\n    &[type='radio']:checked\n    + "," {\n    border-color: #e44848;\n  }\n\n  &[type='radio']:not(:checked) + "," {\n    border-color: rgba(16, 24, 40, 0.2);\n  }\n"])),L,L,L),B=V.Ay.label(C||(C=(0,_.A)(["\n  &:hover {\n    cursor: pointer;\n  }\n"]))),G=V.Ay.svg(z||(z=(0,_.A)(["\n  fill: #101828;\n  width: 32px;\n  height: 32px;\n"]))),I=V.Ay.p(F||(F=(0,_.A)(["\n  width: 95px;\n  text-align: center;\n  font-weight: 500;\n  line-height: 20px;\n"])));var P=t(7914);const U=n=>{let{legend:e,itemsArr:t,register:i,type:r,name:o=""}=n;return(0,x.jsxs)(M,{children:[(0,x.jsx)(O,{children:e}),(0,x.jsx)(K,{children:t.map(((n,e)=>(0,x.jsxs)(B,{htmlFor:n.name,children:[(0,x.jsx)(R,{...i(""===o?n.name:o),type:r,id:n.name,name:""===o?n.name:o,value:n.name}),(0,x.jsxs)(L,{children:[(0,x.jsx)(G,{children:(0,x.jsx)("use",{xlinkHref:"".concat(P.A,"#icon-").concat(n.svg)})}),(0,x.jsx)(I,{children:n.name})]})]},e)))})]})};var W=t(7343);const Y=n=>{let{register:e,setValue:t}=n;const[i,r]=(0,a.useState)(!0);return(0,x.jsxs)(T,{children:[(0,x.jsx)(N,{htmlFor:"location",children:"Location"}),(0,x.jsx)(H,{...e("location"),type:"text",id:"location",name:"location",placeholder:"City",pattern:"/^[A-Za-z,\\s]*$/",onChange:n=>{(0,W.TT)(n,t,r)},style:{border:!0===i?"none":"2px solid #E44848"}}),(0,x.jsx)(D,{children:(0,x.jsx)("use",{xlinkHref:"".concat(P.A,"#icon-location")})})]})},Z=[{name:"AC",svg:"airConditioner"},{name:"Automatic",svg:"transmission"},{name:"Kitchen",svg:"kitchen"},{name:"TV",svg:"tv"},{name:"Shower/WC",svg:"shower"}],q=[{name:"Van",svg:"van"},{name:"Fully Integrated",svg:"fullyIntegrated"},{name:"Alcove",svg:"alcove"}],J=()=>{const{register:n,handleSubmit:e,setValue:t}=(0,S.mN)();return(0,x.jsxs)(E,{id:"filterForm",onSubmit:e((n=>{Object.values(n).every((n=>!n))&&alert("Form is empty"),console.log(n)})),children:[(0,x.jsx)(Y,{register:n,setValue:t}),(0,x.jsx)($,{children:"Filters"}),(0,x.jsx)(U,{legend:"Vehicle Equipment",itemsArr:Z,register:n,type:"checkbox",name:""}),(0,x.jsx)(U,{legend:"Vehicle Type",itemsArr:q,register:n,type:"radio",name:"vehicleType"}),(0,x.jsx)(i.$,{type:"submit",children:"Search"})]})};var Q,X;const nn=V.Ay.div(Q||(Q=(0,_.A)(["\n  background-color: ",";\n  color: ",";\n"])),(n=>{let{theme:e}=n;return e.body}),(n=>{let{theme:e}=n;return e.text})),en=V.Ay.div(X||(X=(0,_.A)(["\n  padding-top: 100px;\n  padding-bottom: 100px;\n  display: flex;\n  gap: 64px;\n"]))),tn=()=>{const n=(0,r.d4)(o.FO),e=(0,r.wA)();return(0,a.useEffect)((()=>(n.length<=0&&e((0,s.S)(1)),()=>{})),[e,n.length]),(0,x.jsx)(nn,{children:(0,x.jsx)(i.m,{children:(0,x.jsxs)(en,{children:[(0,x.jsx)(J,{}),(0,x.jsx)(h,{})]})})})}},1903:(n,e,t)=>{t.d(e,{g:()=>s});const i=["adults","transmission","engine","kitchen","beds","airConditioner"],r=["airConditioner","cd","radio","hob","gas","tv","water","microvave","freezer","shower","toilet"],o={adults:n=>"".concat(n," adults"),transmission:n=>n,engine:n=>n,kitchen:n=>n>=1?"Kitchen":"",beds:n=>"".concat(n," beds"),airConditioner:n=>n>=1?"AC":""},a={airConditioner:n=>n>=1?"Air conditioner":"",cd:n=>n>=1?"CD":"",radio:n=>n>=1?"Radio":"",hob:n=>n>=1?"".concat(n," Hob"):"",gas:n=>n?"Gas":"",tv:n=>n>=1?"TV":"",water:n=>n?"Water":"",microwave:n=>n>=1?"Microwave":"",freezer:n=>n>=1?"Freezer":"",shower:n=>n>=1?"Shower":"",toilet:n=>n>=1?"Toilet":""},s=function(n){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const t=[];return((n,e)=>{i.forEach((t=>{n[t]&&e.push({svg:t,info:o[t](n[t]),condition:!1!==n[t]})}))})(n,t),((n,e)=>{i.forEach((t=>{n.details&&n.details[t]&&e.push({svg:t,info:o[t](n.details[t]),condition:!1!==n.details[t]})}))})(n,t),e&&n.details&&((n,e)=>{r.forEach((t=>{n.details&&n.details[t]&&e.push({svg:t,info:a[t](n.details[t]),condition:!(n.details[t]<=0)})}))})(n,t),t}},7343:(n,e,t)=>{function i(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!1}).format(n)}t.d(e,{$g:()=>i,Kk:()=>r,TT:()=>o});const r=n=>(n.reduce(((n,e)=>n+e.reviewer_rating),0)/n.length).toFixed(1),o=(n,e,t)=>{const i=/^[A-Za-z,\s]*$/.test(n.target.value);return e("location",n.target.value),t(i),i}}}]);
//# sourceMappingURL=706.b05de19c.chunk.js.map