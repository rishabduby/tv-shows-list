(this["webpackJsonpavenger-api-integration"]=this["webpackJsonpavenger-api-integration"]||[]).push([[0],{57:function(e,t,n){},78:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(41),r=n.n(i),s=(n(57),n(42)),h=n(43),j=n(49),l=n(48),o=n(50),b=n(4),d=n(32),g=n.n(d),u=n(44),O=n(17),x=n(45),m=n.n(x),w=n(46),f=n.n(w),v=n(105),p=n(108),y=n(103),N=n(104),k=n(106),A=n(107),C=(n(78),n(3)),T=function(e){var t=Object(c.useState)([]),n=Object(O.a)(t,2),a=n[0],i=n[1],r=function(){var e=Object(u.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.tvmaze.com/search/shows?q=avengers").then((function(e){console.log(e.data),i(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){r(),document.title="Tv List || Avengers"}),[]);var s=function(e){var t=[];return e.map((function(e,n){t.push(Object(C.jsx)("div",{className:"labels",children:e}))})),t};return Object(C.jsx)("div",{children:Object(C.jsx)("div",{className:"container-fluid mt-2",children:Object(C.jsx)("div",{className:"row",children:Object(C.jsx)(N.a,{children:Object(C.jsxs)(v.a,{sx:{minWidth:650},size:"small","aria-label":"a dense table",children:[Object(C.jsx)(k.a,{children:Object(C.jsxs)(A.a,{children:[Object(C.jsx)(y.a,{children:Object(C.jsx)("b",{children:"Name"})}),Object(C.jsx)(y.a,{align:"right",children:Object(C.jsx)("b",{children:"Language"})}),Object(C.jsx)(y.a,{align:"right",children:Object(C.jsx)("b",{children:"Genres"})}),Object(C.jsx)(y.a,{align:"right",children:Object(C.jsx)("b",{children:"Runtime"})}),Object(C.jsx)(y.a,{align:"right",children:Object(C.jsx)("b",{children:"Premiered"})}),Object(C.jsx)(y.a,{align:"right",children:Object(C.jsx)("b",{children:"Rating"})}),Object(C.jsx)(y.a,{align:"right",children:Object(C.jsx)("b",{children:"Country name"})}),Object(C.jsx)(y.a,{align:"right",children:Object(C.jsx)("b",{children:"Thumbnail"})})]})}),Object(C.jsx)(p.a,{children:a.map((function(e){return Object(C.jsxs)(A.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(C.jsx)(y.a,{component:"th",scope:"row",children:Object(C.jsx)("a",{style:{display:"table-cell"},href:e.show.url,target:"_blank",children:e.show.name?e.show.name:"N/A"})}),Object(C.jsx)(y.a,{align:"right",children:e.show.language}),Object(C.jsx)(y.a,{align:"right",children:e.show.genres&&e.show.genres.length?s(e.show.genres):"N/A"}),Object(C.jsx)(y.a,{align:"right",children:e.show.runtime?e.show.runtime:"N/A"}),Object(C.jsx)(y.a,{align:"right",children:e.show.premiered?m()(e.show.premiered).format("DD/MMM/yyyy"):"N/A"}),Object(C.jsx)(y.a,{align:"right",children:e.show.rating.average?e.show.rating.average:"N/A"}),Object(C.jsx)(y.a,{align:"right",children:e.show&&e.show.network&&e.show.network.country.name?e.show.network.country.name:"N/A"}),Object(C.jsx)(y.a,{align:"right",children:e.show.image&&e.show.image.medium?Object(C.jsx)("img",{src:e.show.image.medium,alt:"",className:"imgThumbnail"}):"N/A"})]},e.name)}))})]})})})})})},F=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={sessionStart:!1},c}return Object(h.a)(n,[{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(b.c,{children:Object(C.jsx)(b.a,{path:"/tv-shows/avengers",element:Object(C.jsx)(T,{})})})})})}}]),n}(a.a.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(F,{})}),document.getElementById("root")),L()}},[[85,1,2]]]);
//# sourceMappingURL=main.0d2f7c4d.chunk.js.map