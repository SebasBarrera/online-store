(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),r=c(16),a=c.n(r),o=(c(23),c(7)),i=c(2),j=function(){return Object(s.jsx)("div",{children:"About us"})},d={height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},l=function(){return Object(s.jsx)("footer",{className:"bg-primary",style:d,children:Object(s.jsx)("h3",{className:"my-auto text-light",children:"\xa9 Store 2021-1"})})},b=c(9),h=function(e){var t=Object(i.g)(),c=e.category;return Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"card",style:{cursor:"pointer"},onClick:function(){t.push("/category/".concat(c.id))},children:[Object(s.jsx)("img",{src:c.image,className:"card-img-top ",alt:"..."}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title",children:c.name}),Object(s.jsx)("p",{className:"card-text",children:c.description})]})]})})},u=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("".concat("https://passport-20211.herokuapp.com","/categories")).then((function(e){return e.json()})).then((function(e){console.log(e),r(e)}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{backgroundImage:"url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",backgroundSize:"cover",height:"100vh"}}),Object(s.jsx)("br",{}),Object(s.jsx)("h3",{className:"text-center",children:"Categories"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"container mb-5",children:Object(s.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:c.map((function(e){return Object(s.jsx)(h,{category:e},e.id)}))})})]})},x=function(){return Object(s.jsx)("nav",{className:"navbar navbar-dark bg-primary",children:Object(s.jsx)("div",{className:"container-fluid",children:Object(s.jsx)(o.b,{className:"navbar-brand mb-0 h1",to:"/",children:"Store"})})})},m=function(){var e=Object(i.h)(),t=Object(i.g)(),c=Object(n.useState)({}),r=Object(b.a)(c,2),a=r[0],o=r[1];Object(n.useEffect)((function(){fetch("".concat("https://passport-20211.herokuapp.com","/category/").concat(e.idCategory,"/product/").concat(e.idProduct)).then((function(e){return e.json()})).then((function(e){console.log(e),o(e)}))}),[e.idCategory,e.idProduct]);return Object(s.jsx)("div",{className:"container",style:{height:"90vh"},children:Object(s.jsxs)("div",{className:"row ",style:{height:"100%"},children:[Object(s.jsx)("div",{className:"col-6 d-flex align-items-center",children:Object(s.jsx)("img",{src:a.image,alt:"product",className:"img-thumbnail ",style:{height:"500px",width:"100%"}})}),Object(s.jsxs)("div",{className:"col-6 d-flex flex-column justify-content-center align-items-center",children:[Object(s.jsx)("h1",{children:a.name}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:a.description}),Object(s.jsx)("br",{}),Object(s.jsxs)("h2",{className:"d-flex align-self-end text-primary",children:["$",a.price]}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"d-flex align-self-end btn btn-outline-primary",onClick:function(){t.goBack()},children:"Return"})]})]})})},O=function(e){var t=Object(i.g)(),c=e.product,n=e.category;return Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"card",style:{cursor:"pointer"},onClick:function(){console.log(c.id),t.push("/category/".concat(n,"/product/").concat(c.id))},children:[Object(s.jsx)("img",{src:c.image,className:"card-img-top ",alt:"..."}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title",children:c.name}),Object(s.jsx)("p",{className:"card-text line-clamp",children:c.description})]})]})})},p={backgroundImage:"url(https://images.unsplash.com/photo-1473187983305-f615310e7daa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",backgroundSize:"cover",height:"100vh"},f=function(){var e=Object(i.h)(),t=Object(n.useState)([]),c=Object(b.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){fetch("".concat("https://passport-20211.herokuapp.com","/category/").concat(e.id)).then((function(e){return e.json()})).then((function(e){console.log(e),a(e)}))}),[e.id]),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:p}),Object(s.jsx)("div",{className:"container my-5",children:Object(s.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:r.map((function(t){return Object(s.jsx)(O,{product:t,category:e.id},t.id)}))})})]})};function g(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(x,{}),Object(s.jsx)("div",{children:Object(s.jsxs)(i.d,{children:[Object(s.jsx)(i.b,{exact:!0,path:"/",component:u}),Object(s.jsx)(i.b,{exact:!0,path:"/about-us",component:j}),Object(s.jsx)(i.b,{exact:!0,path:"/category/:id",component:f}),Object(s.jsx)(i.b,{exact:!0,path:"/category/:idCategory/product/:idProduct",component:m}),Object(s.jsx)(i.a,{to:"/"})]})}),Object(s.jsx)(l,{})]})}console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://passport-20211.herokuapp.com"}));var v=function(){return Object(s.jsx)(g,{})};a.a.render(Object(s.jsx)(v,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.9fc39cc5.chunk.js.map