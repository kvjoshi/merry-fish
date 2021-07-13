(this["webpackJsonpmerry-fish"]=this["webpackJsonpmerry-fish"]||[]).push([[0],{158:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(36),s=c.n(r),i=(c(88),c(21)),o=c.n(i),l=c(29),j=c(7),d=c(164),u=c(162),b=c(163),O=c(160),p=c(22),h=(c(90),c(91),p.a.initializeApp({apiKey:"AIzaSyArmB9cenG9ulenkeu0-5_CMQ_j4bnBu-k",authDomain:"merry-fish.firebaseapp.com",databaseURL:"https://merry-fish-default-rtdb.firebaseio.com",projectId:"merry-fish",storageBucket:"merry-fish.appspot.com",messagingSenderId:"130127551916",appId:"1:130127551916:web:71f648b22dbcb223a1ee09",measurementId:"G-KMDJ04RMSB"})),m=h.auth(),x=c(3),f=a.a.createContext();function g(){return Object(n.useContext)(f)}function v(e){var t=e.children,c=Object(n.useState)(),a=Object(j.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(!0),o=Object(j.a)(i,2),l=o[0],d=o[1];Object(n.useEffect)((function(){return m.onAuthStateChanged((function(e){s(e),d(!1)}))}),[]);var u={currentUser:r,login:function(e,t){return m.signInWithEmailAndPassword(e,t)},signup:function(e,t){return m.createUserWithEmailAndPassword(e,t)},logout:function(){return m.signOut()},resetPassword:function(e){return m.sendPasswordResetEmail(e)},updateEmail:function(e){return r.updateEmail(e)},updatePassword:function(e){return r.updatePassword(e)}};return Object(x.jsx)(f.Provider,{value:u,children:!l&&t})}var w=c(18),y=c(19);function N(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),a=g().signup,r=Object(n.useState)(""),s=Object(j.a)(r,2),i=s[0],p=s[1],h=Object(n.useState)(!1),m=Object(j.a)(h,2),f=m[0],v=m[1],N=Object(w.g)();function C(){return(C=Object(l.a)(o.a.mark((function n(r){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t.current.value===c.current.value){n.next=3;break}return n.abrupt("return",p("Passwords do not match"));case 3:return n.prev=3,p(""),v(!0),n.next=8,a(e.current.value,t.current.value);case 8:N.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),p("Failed to create an account");case 14:v(!1);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)("div",{className:"row",children:Object(x.jsx)(d.a,{children:Object(x.jsxs)(d.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),i&&Object(x.jsx)(u.a,{variant:"danger",children:i}),Object(x.jsxs)(b.a,{onSubmit:function(e){return C.apply(this,arguments)},children:[Object(x.jsxs)(b.a.Group,{id:"email",children:[Object(x.jsx)(b.a.Label,{children:"Email"}),Object(x.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(x.jsxs)(b.a.Group,{id:"password",children:[Object(x.jsx)(b.a.Label,{children:"Password"}),Object(x.jsx)(b.a.Control,{type:"password",ref:t,required:!0})]}),Object(x.jsxs)(b.a.Group,{id:"password-confirm",children:[Object(x.jsx)(b.a.Label,{children:"Password Confirmation"}),Object(x.jsx)(b.a.Control,{type:"password",ref:c,required:!0})]}),Object(x.jsx)(O.a,{disabled:f,className:"w-100 mt-2",type:"submit",children:"Sign Up"})]})]})})}),Object(x.jsxs)("div",{className:"w-100 text-center mt-2 row",children:[Object(x.jsx)("span",{children:"Already have an account?"}),Object(x.jsx)(y.b,{to:"/login",children:"Log In"})]})]})})}var C=c(161);function P(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],r=g(),s=r.currentUser,i=r.logout,b=Object(w.g)();function p(){return(p=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(""),e.prev=1,e.next=4,i();case 4:b.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)("div",{className:"row",children:Object(x.jsx)(d.a,{children:Object(x.jsxs)(d.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),c&&Object(x.jsx)(u.a,{variant:"danger",children:c}),Object(x.jsx)("strong",{children:"Email:"})," ",s.email,Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:"UUID:"})," ",s.uid,Object(x.jsx)(y.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"}),Object(x.jsx)(y.b,{to:"/product",className:"btn btn-primary w-100 mt-3",children:"Insert Product"}),Object(x.jsx)(y.b,{to:"/place_order",className:"btn btn-primary w-100 mt-3",children:"Place Order"})]})})}),Object(x.jsx)("div",{className:"w-100 text-center mt-2",children:Object(x.jsx)(O.a,{variant:"link",onClick:function(){return p.apply(this,arguments)},children:"Log Out"})})]})})}function S(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=g().login,a=Object(n.useState)(""),r=Object(j.a)(a,2),s=r[0],i=r[1],p=Object(n.useState)(!1),h=Object(j.a)(p,2),m=h[0],f=h[1],v=Object(w.g)();function N(){return(N=Object(l.a)(o.a.mark((function n(a){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,i(""),f(!0),n.next=6,c(e.current.value,t.current.value);case 6:v.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),i("Failed to log in");case 12:f(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)("div",{className:"row",children:Object(x.jsx)(d.a,{children:Object(x.jsxs)(d.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(x.jsx)(u.a,{variant:"danger",children:s}),Object(x.jsxs)(b.a,{onSubmit:function(e){return N.apply(this,arguments)},children:[Object(x.jsxs)(b.a.Group,{id:"email",children:[Object(x.jsx)(b.a.Label,{children:"Email"}),Object(x.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(x.jsxs)(b.a.Group,{id:"password",children:[Object(x.jsx)(b.a.Label,{children:"Password"}),Object(x.jsx)(b.a.Control,{type:"password",ref:t,required:!0})]}),Object(x.jsx)(O.a,{disabled:m,className:"w-100 mt-3",type:"submit",children:"Log In"})]}),Object(x.jsx)("div",{className:"w-100 text-center mt-3",children:Object(x.jsx)(y.b,{to:"/forgot-password",children:"Forgot Password?"})})]})})}),Object(x.jsxs)("div",{className:"w-100 text-center mt-2 row",children:[Object(x.jsx)("span",{children:"Need an account?"}),Object(x.jsx)(y.b,{to:"/signup",children:"Sign Up"})]})]})})}var k=c(9),U=c(82);function D(e){var t=e.component,c=Object(U.a)(e,["component"]),n=g().currentUser;return Object(x.jsx)(w.b,Object(k.a)(Object(k.a)({},c),{},{render:function(e){return n?Object(x.jsx)(t,Object(k.a)({},e)):Object(x.jsx)(w.a,{to:"/login"})}}))}function L(){var e=Object(n.useRef)(),t=g().resetPassword,c=Object(n.useState)(""),a=Object(j.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(""),p=Object(j.a)(i,2),h=p[0],m=p[1],f=Object(n.useState)(!1),v=Object(j.a)(f,2),w=v[0],N=v[1];function C(){return(C=Object(l.a)(o.a.mark((function c(n){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,m(""),s(""),N(!0),c.next=7,t(e.current.value);case 7:m("Check your inbox for further instructions"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),s("Failed to reset password");case 13:N(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(d.a,{children:Object(x.jsxs)(d.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),r&&Object(x.jsx)(u.a,{variant:"danger",children:r}),h&&Object(x.jsx)(u.a,{variant:"success",children:h}),Object(x.jsxs)(b.a,{onSubmit:function(e){return C.apply(this,arguments)},children:[Object(x.jsxs)(b.a.Group,{id:"email",children:[Object(x.jsx)(b.a.Label,{children:"Email"}),Object(x.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(x.jsx)(O.a,{disabled:w,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(x.jsx)("div",{className:"w-100 text-center mt-3",children:Object(x.jsx)(y.b,{to:"/login",children:"Login"})})]})}),Object(x.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(x.jsx)(y.b,{to:"/signup",children:"Sign Up"})]})]})}function F(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),a=g(),r=a.currentUser,s=a.updatePassword,i=a.updateEmail,o=Object(n.useState)(""),l=Object(j.a)(o,2),p=l[0],h=l[1],m=Object(n.useState)(!1),f=Object(j.a)(m,2),v=f[0],N=f[1],C=Object(w.g)();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)("div",{className:"row",children:Object(x.jsx)(d.a,{children:Object(x.jsxs)(d.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),p&&Object(x.jsx)(u.a,{variant:"danger",children:p}),Object(x.jsxs)(b.a,{onSubmit:function(n){if(n.preventDefault(),t.current.value!==c.current.value)return h("Passwords do not match");var a=[];N(!0),h(""),e.current.value!==r.email&&a.push(i(e.current.value)),t.current.value&&a.push(s(t.current.value)),Promise.all(a).then((function(){C.push("/")})).catch((function(){h("Failed to update account")})).finally((function(){N(!1)}))},children:[Object(x.jsxs)(b.a.Group,{id:"email",children:[Object(x.jsx)(b.a.Label,{children:"Email"}),Object(x.jsx)(b.a.Control,{type:"email",ref:e,required:!0,defaultValue:r.email})]}),Object(x.jsxs)(b.a.Group,{id:"password",children:[Object(x.jsx)(b.a.Label,{children:"Password"}),Object(x.jsx)(b.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(x.jsxs)(b.a.Group,{id:"password-confirm",children:[Object(x.jsx)(b.a.Label,{children:"Password Confirmation"}),Object(x.jsx)(b.a.Control,{type:"password",ref:c,placeholder:"Leave blank to keep the same"})]}),Object(x.jsx)(O.a,{disabled:v,className:"w-100 mt-2",type:"submit",children:"Update"})]})]})})}),Object(x.jsx)("div",{className:"w-100 text-center mt-2",children:Object(x.jsx)(y.b,{to:"/",children:"Cancel"})})]})})}var R,E=c(63),I=function(e){var t=e.Product,c=Object(n.useState)(t.data().name),a=Object(j.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(t.data().price),o=Object(j.a)(i,2),l=o[0],d=o[1],u=Object(n.useState)(t.data().code),b=Object(j.a)(u,2),O=b[0],p=b[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"row p-2",children:[Object(x.jsx)("div",{className:"col-4 p-2",children:Object(x.jsx)("input",{className:"form-control",value:r,onChange:function(e){s(e.target.value)}})}),Object(x.jsx)("div",{className:"col-4 p-2",children:Object(x.jsx)("input",{className:"form-control",value:O,onChange:function(e){p(e.target.value)}})}),Object(x.jsx)("div",{className:"col-4 p-2",children:Object(x.jsx)("input",{className:"form-control",value:l,onChange:function(e){d(e.target.value)}})}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("button",{className:"btn btn-primary col-8 m-1",onClick:function(){var e=E.a.firestore(),c={name:r,code:O,price:l};e.collection("prod_list").doc(t.id).set(c)},children:"Update"}),Object(x.jsx)("button",{className:"btn btn-danger col-3  m-1",onClick:function(){E.a.firestore().collection("prod_list").doc(t.id).delete(),window.location.reload()},children:"Delete"})]})]})})},M=c(35),G=c(77),T=c(61),_=c(30),B=c(58).default.div(R||(R=Object(G.a)(["\n  padding: 1rem;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n\n      input {\n        font-size: 1rem;\n        padding: 0;\n        margin: 0;\n        border: 0;\n      }\n    }\n  }\n\n  .pagination {\n    padding: 0.5rem;\n  }\n"]))),A={Cell:function(e){var t=e.value,c=e.row.index,a=e.column.id,r=e.updateMyData,s=Object(n.useState)(t),i=Object(j.a)(s,2),o=i[0],l=i[1];return Object(n.useEffect)((function(){l(t)}),[t]),Object(x.jsx)("input",{value:o,onChange:function(e){l(e.target.value)},onBlur:function(){r(c,a,o)}})}};function q(e){var t=e.columns,c=e.data,n=e.updateMyData,a=e.skipPageReset,r=Object(T.useTable)({columns:t,data:c,defaultColumn:A,autoResetPage:!a,updateMyData:n},T.usePagination),s=r.getTableProps,i=r.getTableBodyProps,o=r.headerGroups,l=r.prepareRow,j=r.page,d=r.canPreviousPage,u=r.canNextPage,b=r.pageOptions,O=r.pageCount,p=r.gotoPage,h=r.nextPage,m=r.previousPage,f=r.setPageSize,g=r.state,v=g.pageIndex,w=g.pageSize;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("table",Object(k.a)(Object(k.a)({},s()),{},{children:[Object(x.jsx)("thead",{children:o.map((function(e){return Object(x.jsx)("tr",Object(k.a)(Object(k.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(x.jsx)("th",Object(k.a)(Object(k.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(x.jsx)("tbody",Object(k.a)(Object(k.a)({},i()),{},{children:j.map((function(e,t){return l(e),Object(x.jsx)("tr",Object(k.a)(Object(k.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(x.jsx)("td",Object(k.a)(Object(k.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(x.jsxs)("div",{className:"pagination",children:[Object(x.jsx)("button",{onClick:function(){return p(0)},disabled:!d,children:"<<"})," ",Object(x.jsx)("button",{onClick:function(){return m()},disabled:!d,children:"<"})," ",Object(x.jsx)("button",{onClick:function(){return h()},disabled:!u,children:">"})," ",Object(x.jsx)("button",{onClick:function(){return p(O-1)},disabled:!u,children:">>"})," ",Object(x.jsxs)("span",{children:["Page"," ",Object(x.jsxs)("strong",{children:[v+1," of ",b.length]})," "]}),Object(x.jsxs)("span",{children:["| Go to page:"," ",Object(x.jsx)("input",{type:"number",defaultValue:v+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;p(t)},style:{width:"100px"}})]})," ",Object(x.jsx)("select",{value:w,onChange:function(e){f(Number(e.target.value))},children:[10,20,30,40,50].map((function(e){return Object(x.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})]})}function V(e){var t=e.Product.docs.map((function(e){return Object(k.a)(Object(k.a)({},e.data()),{},{id:e.id})})),c=Object(n.useState)(t),a=Object(j.a)(c,2),r=a[0],s=a[1];console.log(r);var i=Object(n.useMemo)((function(){return[{Header:"Name",accessor:"name"},{Header:"Price",accessor:"price"},{Header:"Code",accessor:"code"}]}),[]),o=Object(n.useState)(r),l=Object(j.a)(o,1)[0],d=Object(n.useState)(!1),u=Object(j.a)(d,2),b=u[0],O=u[1];Object(n.useEffect)((function(){O(!1)}),[r]);return Object(x.jsxs)(B,{children:[Object(x.jsx)("button",{onClick:function(){return s(l)},children:"Reset Data"}),Object(x.jsx)(q,{columns:i,data:r,updateMyData:function(e,t,c){O(!0),s((function(n){return n.map((function(a,r){return r===e?Object(k.a)(Object(k.a)({},n[e]),{},Object(M.a)({},t,c)):a}))}))},skipPageReset:b})]})}var H=c(64),K=c(81),W=c.n(K),z=[{name:"Title",selector:"name",sortable:!0,editable:!0},{name:"Price",selector:"price",sortable:!0,editable:!0},{name:"Prod ID",selector:"code",sortable:!0}],J=function(e){var t=e.row,c=e.index,a=e.column,r=e.col,s=e.onChange,i=Object(n.useState)(t[a.selector]),o=Object(j.a)(i,2),l=o[0],d=o[1];return(null===a||void 0===a?void 0:a.editing)?Object(x.jsx)("input",{type:a.type||"text",name:a.selector,style:{width:"100%"},onChange:function(e){d(e.target.value),null===s||void 0===s||s(e)},value:l}):r.cell?r.cell(t,c,a):t[a.selector]};function Q(e){var t=e.Product.docs.map((function(e){return Object(k.a)(Object(k.a)({},e.data()),{},{id:e.id})}));console.log(t);var c=Object(n.useState)(t),a=Object(j.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(""),o=Object(j.a)(i,2),l=o[0],d=o[1],u=Object(n.useRef)({}).current,b=function(e){return e.id===l},O=function(e){var t=e.target.name,c=e.target.value;u=Object(k.a)(Object(k.a)({},u),{},Object(M.a)({},t,c))},p=function(){d("")},h=z.map((function(e){return e.editable?Object(k.a)(Object(k.a)({},e),{},{cell:function(t,c,n){var a=b(t);return Object(x.jsx)(J,{row:t,index:c,column:Object(k.a)(Object(k.a)({},n),{},{editing:a}),col:e,onChange:O})}}):e})),m=Object(n.useCallback)((function(){return[].concat(Object(H.a)(h),[{name:"Actions",allowOverflow:!0,minWidth:"200px",cell:function(e){return b(e)?Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{type:"button",onClick:function(){return function(e){var t=Object(k.a)(Object(k.a)({},e),u),c=Object(H.a)(r),n=c.findIndex((function(e){return l===e.id}));if(n>-1){var a=c[n];c.splice(n,1,Object(k.a)(Object(k.a)({},a),t)),d(""),s(c)}}(e)},style:{backgroundColor:"lightgreen"},children:"save"}),Object(x.jsx)("button",{type:"button",onClick:p,style:{backgroundColor:"orangered"},children:"cancel"})]}):Object(x.jsx)("button",{type:"button",onClick:function(){d(e.id)},style:{backgroundColor:"aliceblue"},children:"edit"})}}])}),[h]);return Object(x.jsx)(W.a,{title:"Movie List",columns:m(),data:r,defaultSortField:"title"})}c(102);var X=c(62),Y=(c(17),c(14));c(156);var Z=function(e){var t=e.Product.docs.map((function(e){return Object(k.a)(Object(k.a)({},e.data()),{},{id:e.id})}));console.log(t);var c={columns:[{key:"name",title:"Name",dataType:Y.DataType.String,style:{width:"30%"}},{key:"code",title:"Code",dataType:Y.DataType.String,style:{width:"30%"}},{key:"price",title:"Price",dataType:Y.DataType.String,style:{width:"10%"}}],format:function(e){var t=e.column,c=e.value;if(t.dataType===Y.DataType.Date)return c&&c.toLocaleDateString("en",{month:"2-digit",day:"2-digit",year:"numeric"})},data:t,editableCells:[{columnKey:"name",rowKeyValue:2}],editingMode:Y.EditingMode.Cell,rowKeyField:"id"},a=Object(n.useState)(c),r=Object(j.a)(a,2),s=r[0],i=r[1];return Object(x.jsx)(X.Table,Object(k.a)(Object(k.a)({},s),{},{dispatch:function(e){i((function(t){return Object(X.kaReducer)(t,e)}))}}))};function $(){var e=g(),t=e.currentUser,c=(e.logout,Object(n.useState)()),a=Object(j.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(),o=Object(j.a)(i,2),l=o[0],d=o[1],u=Object(n.useState)(),b=Object(j.a)(u,2),O=b[0],h=b[1],m=Object(_.a)(p.a.firestore().collection("prod_list"),{snapshotListenOptions:{includeMetadataChanges:!0}}),f=Object(j.a)(m,3),v=f[0];f[1],f[2];Object(n.useEffect)((function(){console.log("0")}),[v]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("p",{children:Object(x.jsxs)("strong",{children:["UUID: ",t.uid," "]})})}),Object(x.jsxs)("div",{className:"row p-5 mb-2",children:[Object(x.jsx)("input",{className:"form-control mt-2",value:O,onChange:function(e){return h(e.target.value)},placeholder:"New Product Code"}),Object(x.jsx)("input",{className:"form-control mt-2",value:r,onChange:function(e){return s(e.target.value)},placeholder:"New Product Name"}),Object(x.jsx)("input",{className:"form-control mt-2",value:l,onChange:function(e){return d(e.target.value)},placeholder:"New Product Price"}),Object(x.jsx)("button",{className:"btn btn-primary mt-2",onClick:function(){p.a.firestore().collection("prod_list").add({name:r,price:l,code:O})},children:"Create"})]}),Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("ul",{className:"w-100",children:v&&v.docs.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(I,{Product:e})},e.id)}))})}),Object(x.jsxs)("div",{className:"row p-2 col-12",children:[Object(x.jsx)("span",{children:"Ka-Table Working Array"}),v&&Object(x.jsx)(Z,{Product:v})]}),Object(x.jsxs)("div",{className:"row p-2 col-12",children:[Object(x.jsx)("span",{children:"react-table Working Array"}),v&&Object(x.jsx)(V,{Product:v})]}),Object(x.jsxs)("div",{className:"row p-2 col-12",children:[Object(x.jsx)("span",{children:"react-data-table Working Array"}),v&&Object(x.jsx)(Q,{Product:v})]})]})})}var ee=function(e){var t=g(),c=t.currentUser,a=(t.logout,c.uid,e.user_oid),r=Object(_.c)(p.a.firestore().doc("order/"+a),{snapshotListenOptions:{includeMetadataChanges:!0}}),s=Object(j.a)(r,3),i=s[0],o=s[1],l=s[2];return Object(n.useEffect)((function(){return console.log(i)}),[i]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("span",{children:i&&Object(x.jsxs)("span",{children:["Document: ",JSON.stringify(i)]})}),l&&Object(x.jsxs)("strong",{children:["Error: ",JSON.stringify(l)]}),o&&Object(x.jsx)("span",{children:"Document: Loading..."})]})})};var te=function(e){var t=g(),c=t.currentUser,a=(t.logout,c.uid),r=Object(n.useState)([]),s=Object(j.a)(r,2),i=(s[0],s[1],Object(_.b)(p.a.firestore().collection("users").where("UUID","==",a),{snapshotListenOptions:{includeMetadataChanges:!0}})),d=Object(j.a)(i,3),u=d[0],b=d[1],O=(d[2],Object(_.b)(p.a.firestore().collection("prod_list"),{snapshotListenOptions:{includeMetadataChanges:!0}})),h=Object(j.a)(O,3),m=h[0],f=(h[1],h[2],Object(n.useState)()),v=Object(j.a)(f,2),w=v[0],y=v[1],N=Object(n.useState)(),C=Object(j.a)(N,2),P=C[0],S=C[1],k=Object(n.useState)(),U=Object(j.a)(k,2),D=U[0],L=U[1],F=Object(n.useState)(),R=Object(j.a)(F,2),E=R[0],I=R[1],M=Object(n.useState)(),G=Object(j.a)(M,2),T=G[0],B=G[1];function A(){return q.apply(this,arguments)}function q(){return(q=Object(l.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log([P,D,a,T]),t=P*T,c=w.toString(),n=p.a.firestore().collection("order").doc(c),e.next=6,n.update({price:p.a.firestore.FieldValue.arrayUnion(P),code:p.a.firestore.FieldValue.arrayUnion(D),qty:p.a.firestore.FieldValue.arrayUnion(T),order_total:p.a.firestore.FieldValue.arrayUnion(t),name:p.a.firestore.FieldValue.arrayUnion(E)});case 6:e.sent;case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!1===b&&(y(u[0].current_order_id),console.log("haliu"),console.log(u),console.log(m))}),[m]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h5",{children:"Inside Cart Data:"}),w&&Object(x.jsx)(ee,{user_oid:w}),Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"Place Order"})}),Object(x.jsx)("div",{children:Object(x.jsx)("ul",{className:"w-100",children:m&&m.map((function(e){return Object(x.jsxs)("li",{className:"mt-2",children:[Object(x.jsxs)("span",{className:"col-4 p-2",children:["Code: ",e.code]}),Object(x.jsxs)("span",{className:"col-4 p-2",children:["Name: ",e.name]}),Object(x.jsxs)("span",{className:"col-4 p-2",children:["Price: ",e.price]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("input",{className:"col-8 mr-2",type:"number",onChange:function(t){B(t.target.value),L(e.code),S(e.price),I(e.name)}}),Object(x.jsx)("button",{className:"col-3 btn btn-primary",onClick:A,children:"Place Order"})]})]},e.code)}))})})]})})};var ce=function(){return Object(x.jsx)(C.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(x.jsx)(y.a,{children:Object(x.jsx)(v,{children:Object(x.jsxs)(w.d,{children:[Object(x.jsx)(D,{exact:!0,path:"/",component:P}),Object(x.jsx)(D,{path:"/update-profile",component:F}),Object(x.jsx)(D,{path:"/product",component:$}),Object(x.jsx)(D,{path:"/place_order",component:te}),Object(x.jsx)(w.b,{path:"/signup",component:N}),Object(x.jsx)(w.b,{path:"/login",component:S}),Object(x.jsx)(w.b,{path:"/forgot-password",component:L})]})})})})};c(157);s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(ce,{})}),document.getElementById("root"))},88:function(e,t,c){}},[[158,1,2]]]);
//# sourceMappingURL=main.b788aec1.chunk.js.map