(this["webpackJsonpclient-guest-book-daryna"]=this["webpackJsonpclient-guest-book-daryna"]||[]).push([[0],{101:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(9),r=n.n(a),i=n(23),o=(n(49),n(40)),s=n(14),u=n(58),b=n.n(u),l=n(11),j=n(17),d=n(33),m=n(59),f=n.n(m),O=n(43),g=n.n(O),h=n(60),p=n(41),x=n.n(p),v=Object(s.b)("contacts/fetchcontactsRequest"),y=Object(s.b)("contacts/fetchcontactsSuccess"),C=Object(s.b)("contacts/fetchContactsError"),k=Object(s.b)("contacts/addContactRequest"),w=Object(s.b)("contacts/addContactSuccess"),S=Object(s.b)("contacts/addContactError");x.a.defaults.baseURL="/contacts";var B,N,I=function(){return function(){var t=Object(h.a)(g.a.mark((function t(e){var n,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(1),e(v()),t.prev=2,t.next=5,x.a.get("/");case 5:n=t.sent,c=n.data,e(y(c)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),e(C(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},W=function(t,e){return function(n){console.log(2);var c={name:t,message:e};n(k),x.a.post("/",c).then((function(t){var e=t.data;return n(w(e))})).catch((function(t){return n(S(t))}))}},D=function(t){return t.contacts.items},F=n(19),A=Object(s.c)([],(B={},Object(F.a)(B,y,(function(t,e){return e.payload})),Object(F.a)(B,w,(function(t,e){return[e.payload].concat(Object(o.a)(t))})),B)),E=Object(s.c)(!1,(N={},Object(F.a)(N,k,(function(){return!0})),Object(F.a)(N,w,(function(){return!1})),Object(F.a)(N,S,(function(){return!1})),Object(F.a)(N,v,(function(){return!0})),Object(F.a)(N,y,(function(){return!1})),Object(F.a)(N,C,(function(){return!1})),N)),R=Object(s.c)(null,{}),T=Object(l.b)({items:A,loading:E,error:R}),L=Object(l.b)({contacts:T}),M={key:"root",storage:b.a},q=Object(j.g)(M,L),z=([].concat(Object(o.a)(Object(s.d)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),[f.a]),Object(s.a)({reducer:q,devTools:!1,middleware:[d.a]})),J=n(137),P=n(138),G=n(135),U=n(141),V=n(136),H=n(131),K=Object(H.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"}}})),Q=n(44),X=n(102),Y=n(139),Z=n(140),$=Object(H.a)((function(t){return{root:{"& .MuiTextField-root":{margin:t.spacing(1)}},paper:{padding:t.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},buttonSubmit:{marginBottom:10},input:{marginBottom:10},textArea:{marginBottom:10}}})),_=n(7);var tt=function(){var t=Object(i.b)(),e=Object(c.useState)(""),n=Object(Q.a)(e,2),a=n[0],r=n[1],o=Object(c.useState)(""),s=Object(Q.a)(o,2),u=s[0],b=s[1];Object(c.useEffect)((function(){t(I()),console.log(3)}));var l=$(),j=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"message":b(c);break;default:return}},d=function(){r(""),b("")};return Object(_.jsx)(X.a,{className:l.paper,children:Object(_.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(l.root," ").concat(l.form),id:"contact",onSubmit:function(e){e.preventDefault(),t(W(a,u)),d()},children:[Object(_.jsx)(G.a,{variant:"h6",children:"Add your message"}),Object(_.jsx)(Y.a,{type:"text",name:"name",value:a,onChange:j,label:"Name",variant:"outlined",fullWidth:!0}),Object(_.jsx)(Y.a,{type:"text",name:"message",value:u,onChange:j,label:"Message",variant:"outlined",multiline:!0,fullWidth:!0}),Object(_.jsx)(Z.a,{className:l.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"})]})})},et=Object(H.a)((function(t){return{mainContainer:{display:"flex",flexDirection:"column",alignItems:"center"},smMargin:{margin:t.spacing(1)},actionDiv:{textAlign:"center"}}}));var nt=function(){var t=Object(i.c)(D),e=et();return Object(_.jsx)(V.a,{className:e.container,container:!0,alignItems:"stretch",spacing:3,children:t.map((function(t){var e=t.id,n=t.name,c=t.message;return Object(_.jsx)(V.a,{item:!0,xs:12,sm:6,md:6,children:Object(_.jsxs)("p",{children:[Object(_.jsxs)("b",{children:[n," "]}),Object(_.jsx)("em",{children:c})]})},e)}))})};var ct=function(){var t=K();return Object(_.jsxs)(J.a,{maxWidth:"lg",children:[Object(_.jsx)(P.a,{className:t.appBar,position:"static",color:"inherit",children:Object(_.jsx)(G.a,{className:t.heading,variant:"h2",align:"center",children:"Welcome to our Guest Book"})}),Object(_.jsx)(U.a,{in:!0,children:Object(_.jsx)(J.a,{children:Object(_.jsxs)(V.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(_.jsx)(V.a,{item:!0,xs:12,sm:4,children:Object(_.jsx)(tt,{})}),Object(_.jsx)(V.a,{item:!0,xs:12,sm:7,children:Object(_.jsx)(nt,{})})]})})})]})},at=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,142)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};Object(j.h)(z);r.a.render(Object(_.jsx)(i.a,{store:z,children:Object(_.jsx)(ct,{})}),document.getElementById("root")),at()}},[[101,1,2]]]);
//# sourceMappingURL=main.39a45c07.chunk.js.map