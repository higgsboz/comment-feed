(this["webpackJsonpcomment-feed"]=this["webpackJsonpcomment-feed"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"firstName":"Brandon","lastName":"Minner","occupation":"Software Engineer","location":{"state":"Ohio","country":"USA"}}')},24:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(19),r=c.n(a),i=(c(24),c(3)),o=c(4),l=c(7),d=c(5),j=c(6),b=c(0),m=function(e,t){if("string"===typeof t){var c=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/.exec(t);if(c)return new Date(t);if(c=/^\/Date\((d|-|.*)\)[\/|\\]$/.exec(t)){var s=c[1].split(/[-+,.]/);return new Date(s[0]?+s[0]:0-+s[1])}}return t},u=Object(s.createContext)({});function O(e){var t=e.children,c=JSON.parse(localStorage.getItem("postData")||"[]",m),n=JSON.parse(localStorage.getItem("commentData")||"[]",m),a=Object(s.useState)(c),r=Object(o.a)(a,2),i=r[0],l=r[1],d=Object(s.useState)(n),j=Object(o.a)(d,2),O=j[0],x=j[1];return Object(b.jsx)(u.Provider,{value:{posts:i,setPosts:function(e){localStorage.setItem("postData",JSON.stringify(e)),l(e)},comments:O,setComments:function(e){localStorage.setItem("commentData",JSON.stringify(e)),x(e)}},children:t})}function x(){var e=Object(s.useContext)(u);if(void 0===e)throw new Error("useFeed must be used within a FeedProvider");return e}var f=c(12),h=c.n(f),p=36e5;function N(e){var t=h()(e),c=h()().diff(t),s=h()(c);return c<6e4?"Just now":c<p?"".concat(s.minute()," minutes ago"):c<864e5?"".concat(s.hour()," hours ago"):s.format("MM/DD/YYYY")}var v,y=c.p+"static/media/profile-pic.6fb0befb.png",g=c.p+"static/media/missing-avatar.c3f94521.png";!function(e){e[e.sm=40]="sm",e[e.lg=60]="lg"}(v||(v={}));var w=function(e){var t,c=e.className,s=e.size;return Object(b.jsx)("img",{src:y,className:null!==(t="rounded-circle "+c)&&void 0!==t?t:"",width:v[s],height:v[s],alt:"avatar",onError:function(e){e.target.onerror=null,e.target.src=g}})},k=function(e){var t=e.text,c=e.likes,n=e.createdDate,a=e.createdBy,r=x(),m=r.comments,u=r.setComments,O=Object(s.useState)(!1),f=Object(o.a)(O,2),h=f[0],p=f[1],v=Object(s.useState)(t),y=Object(o.a)(v,2),g=y[0],k=y[1],S=function(t){u([].concat(Object(l.a)(m.slice(0,e.id-1)),[Object(i.a)(Object(i.a)({},m[e.id-1]),t)],Object(l.a)(m.slice(e.id))))},D=function(t){"Enter"===t.key&&""!==t.target.value&&(S(Object(i.a)(Object(i.a)({},e),{},{text:t.target.value})),p(!1))};return Object(b.jsxs)("div",{className:"d-flex flex-row mt-3 mb-3 w-100",children:[Object(b.jsx)(w,{className:"me-2",size:"sm"}),Object(b.jsx)("div",{className:"card w-100",style:{backgroundColor:"#D9E1EB"},children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(b.jsx)("span",{className:"fw-bold",children:"".concat(a.firstName," ").concat(a.lastName)}),Object(b.jsx)("span",{className:"text-secondary",style:{fontSize:14},children:N(n)})]}),Object(b.jsx)("span",{className:"text-primary",style:{fontSize:14},children:a.occupation}),Object(b.jsx)("div",{style:{fontSize:14},children:h?Object(b.jsx)("textarea",{className:"form-control border-0 my-2",id:"commentEditTextarea",rows:2,value:g,placeholder:"Add a comment",style:{resize:"none"},autoFocus:!0,onBlur:function(){return p(!1)},onKeyPress:D,onChange:function(e){return k(e.target.value)}}):t}),Object(b.jsxs)("div",{className:"d-flex text-secondary",children:[Object(b.jsxs)("span",{className:"me-3",children:[c," Likes"]}),Object(b.jsx)("span",{className:"me-3",children:"|"}),Object(b.jsxs)("button",{className:"btn btn-link link-secondary me-3 p-0",onClick:function(){return S(Object(i.a)(Object(i.a)({},e),{},{likes:e.likes+1}))},children:[Object(b.jsx)(d.a,{className:"me-2",icon:j.d,style:{fontSize:14}}),"Like"]}),Object(b.jsx)("span",{className:"me-3",children:"|"}),Object(b.jsxs)("button",{className:"btn btn-link link-secondary me-3 p-0",onClick:function(){return p(!0)},children:[Object(b.jsx)(d.a,{className:"me-2",icon:j.f,style:{fontSize:14}}),"Edit"]}),Object(b.jsx)("span",{className:"me-3",children:"|"}),Object(b.jsxs)("button",{className:"btn btn-link link-secondary me-3 p-0",onClick:function(){return S(Object(i.a)(Object(i.a)({},e),{},{isDeleted:!0}))},children:[Object(b.jsx)(d.a,{className:"me-2",icon:j.h,style:{fontSize:14}}),"Delete"]})]})]})})]})},S=c(11),D=function(e){var t=e.id,c=e.text,n=e.likes,a=e.createdDate,r=e.createdBy,m=x(),u=m.posts,O=m.setPosts,f=m.comments,h=m.setComments,p=Object(s.useState)(!1),v=Object(o.a)(p,2),y=v[0],g=v[1],D=Object(s.useState)(!1),C=Object(o.a)(D,2),z=C[0],E=C[1],P=Object(s.useState)(c),B=Object(o.a)(P,2),I=B[0],J=B[1],T=Object(s.useMemo)((function(){return f.filter((function(e){return e.postId===t&&!e.isDeleted})).sort((function(e,t){return t.createdDate.getTime()-e.createdDate.getTime()}))}),[t,f]),M=function(t){O([].concat(Object(l.a)(u.slice(0,e.id-1)),[Object(i.a)(Object(i.a)({},u[e.id-1]),t)],Object(l.a)(u.slice(e.id))))},F=function(t){"Enter"!==t.key||/\s/.test(t.target.value)||(M(Object(i.a)(Object(i.a)({},e),{},{text:t.target.value})),E(!1))};return Object(b.jsxs)("div",{className:"card shadow-sm rounded-3 mt-3",children:[Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("div",{className:"d-flex flex-row mb-3",children:[Object(b.jsx)(w,{size:"lg"}),Object(b.jsxs)("div",{className:"d-flex flex-row w-100 justify-content-between",children:[Object(b.jsxs)("div",{className:"ms-3",children:[Object(b.jsx)("div",{className:"fw-bold",children:"".concat(r.firstName," ").concat(r.lastName)}),Object(b.jsxs)("div",{className:"text-primary fw-bold",style:{fontSize:12},children:[Object(b.jsx)(d.a,{className:"me-2",icon:j.e}),r.location.state,", ",r.location.country]}),Object(b.jsx)("div",{className:"text-secondary fw-bold",style:{fontSize:12},children:N(a)})]}),Object(b.jsxs)("div",{className:"dropdown dropstart my-auto",children:[Object(b.jsx)("button",{className:"btn btn-link link-secondary p-0",type:"button",id:"Post-".concat(t,"-dropdown-button"),"data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(b.jsx)(d.a,{icon:j.c})}),Object(b.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"Post-".concat(t,"-dropdown-button"),children:[Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:"btn btn-link dropdown-item",onClick:function(){return E(!0)},disabled:z,children:"Edit"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:"btn btn-link dropdown-item",onClick:function(){return M(Object(i.a)(Object(i.a)({},e),{},{isDeleted:!0}))},children:"Delete"})})]})]})]})]}),Object(b.jsx)("div",{children:z?Object(b.jsx)("textarea",{className:"form-control border-0 ms-2 me-3 ps-1",id:"postEditTextarea",rows:2,value:I,placeholder:"What is on your mind?",style:{resize:"none"},autoFocus:!0,onBlur:function(){return E(!1)},onKeyPress:F,onChange:function(e){return J(e.target.value)}}):c}),Object(b.jsxs)("div",{className:"d-flex text-secondary mt-2",children:[n," Likes",Object(b.jsx)(d.a,{className:"my-auto mx-1",icon:j.a,style:{fontSize:4}}),T.length," Comments"]})]}),Object(b.jsxs)("div",{className:"card-footer",children:[Object(b.jsx)("span",{children:Object(b.jsxs)("button",{className:"btn btn-link link-secondary p-0",onClick:function(){return M(Object(i.a)(Object(i.a)({},e),{},{likes:e.likes+1}))},children:[Object(b.jsx)(d.a,{className:"me-2 text-secondary",icon:j.d}),"Like"]})}),Object(b.jsx)("span",{className:"ms-3",children:Object(b.jsxs)("button",{className:"btn btn-link link-secondary p-0 ".concat(y||T.length>0?"fw-bold":null),onClick:function(){return g(!y)},style:{cursor:"pointer"},children:[Object(b.jsx)(d.a,{className:"me-2 text-secondary",icon:j.b}),"Comment"]})}),(y||T.length>0)&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"d-flex flex-row mt-3 mb-3 w-100",children:[Object(b.jsx)(w,{className:"me-2",size:"sm"}),Object(b.jsx)("input",{className:"px-3 w-100",placeholder:"Add a comment",onKeyPress:function(e){"Enter"===e.key&&""!==e.target.value&&(!function(e){var c,s=null!==(c=u.find((function(e){return e.id===t})))&&void 0!==c?c:null;if(s){var n={id:f.length+1,postId:s.id,text:e,likes:0,createdDate:new Date,createdBy:S,isDeleted:!1};h([].concat(Object(l.a)(f),[n]))}}(e.target.value),e.target.value="")},style:{borderRadius:"25px",borderStyle:"solid"}})]}),T.map((function(e){return Object(b.jsx)(k,Object(i.a)({},e),"Comment-".concat(e.id))}))]})]})]})},C=function(){var e=x(),t=e.posts,c=e.setPosts,n=Object(s.useState)(""),a=Object(o.a)(n,2),r=a[0],i=a[1];return Object(b.jsxs)("div",{className:"card shadow-sm rounded-3",children:[Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("div",{className:"mb-3 d-flex flex-row",children:[Object(b.jsx)(w,{size:"sm"}),Object(b.jsx)("textarea",{className:"form-control border-0 ms-2 ps-1",id:"postTextarea",rows:2,placeholder:"What is on your mind?",style:{resize:"none"},value:r,onChange:function(e){return i(e.target.value)}})]})}),Object(b.jsx)("div",{className:"card-footer bg-transparent",children:Object(b.jsxs)("div",{className:"d-flex flex-wrap justify-content-between",children:[Object(b.jsxs)("button",{type:"button",className:"btn btn-dark rounded-pill",children:[Object(b.jsx)(d.a,{className:"me-2",icon:j.g}),"Photo/Video"]}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){!function(e){var s={id:t.length+1,text:e,likes:0,createdDate:new Date,createdBy:S,isDeleted:!1};c([].concat(Object(l.a)(t),[s]))}(r),i("")},disabled:0===r.length,children:"Post It"})]})})]})},z=function(){var e=x().posts;return Object(b.jsx)("div",{className:"min-vh-100",style:{backgroundColor:"#D9E1EB"},children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"py-3",children:[Object(b.jsx)(C,{}),e.filter((function(e){return!e.isDeleted})).sort((function(e,t){return t.createdDate.getTime()-e.createdDate.getTime()})).map((function(e){return Object(b.jsx)(D,Object(i.a)({},e),"Post-".concat(e.id))}))]})})})};var E=function(){return Object(b.jsx)(O,{children:Object(b.jsx)(z,{})})};c(31),c(52);r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.11ba1c46.chunk.js.map