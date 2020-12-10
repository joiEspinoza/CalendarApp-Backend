(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{116:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),c=n(9),o=n.n(c),s=n(10),i=n(36),u=n(11),l=n(14),d=n.n(l),b=n(22),j=n(13),p=n.n(j),v="https://calendar-app-backend.herokuapp.com/api",m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r="".concat(v,"/").concat(e);return"GET"===n?fetch(r):fetch(r,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r="".concat(v,"/").concat(e),a=localStorage.getItem("token")||"";return"GET"===n?fetch(r,{method:n,headers:{"x-token":a}}):fetch(r,{method:n,headers:{"Content-type":"application/json","x-token":a},body:JSON.stringify(t)})},O=n(8),h=function(e){return{type:O.types.authLogin,payload:e}},g=function(){return{type:O.types.authCheckingFinish}},x=function(){return{type:O.types.authLogout}},y=n(16),k=n(26),N=n(5),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(y.a)(t,2),r=n[0],c=n[1],o=function(){return c(e)},s=function(e){var t=e.target;c(Object(N.a)(Object(N.a)({},r),{},Object(k.a)({},t.name,t.value)))};return[r,s,o]},E=(n(76),function(){var e=Object(s.b)(),t=w({correoIngreso:"king@gmail.com",passwordIngreso:"123456"}),n=Object(y.a)(t,2),a=n[0],c=n[1],o=a.correoIngreso,i=a.passwordIngreso,u=w({nombreRegistro:"",correoRegistro:"",passwordRegistro:"",passwordRegistro2:""}),l=Object(y.a)(u,2),j=l[0],v=l[1],f=j.nombreRegistro,O=j.correoRegistro,g=j.passwordRegistro,x=j.passwordRegistro2;return Object(r.jsx)("div",{className:"container login-container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(r.jsx)("h3",{children:"Ingreso"}),Object(r.jsxs)("form",{onSubmit:function(t){var n,r;t.preventDefault(),e((n=o,r=i,function(){var e=Object(b.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("auth",{email:n,password:r},"POST");case 3:return a=e.sent,e.next=6,a.json();case 6:if(!(c=e.sent).ok){e.next=13;break}localStorage.setItem("token",c.jsonWebToken),localStorage.setItem("creacionToken",(new Date).getTime()),t(h({uid:c.uid,name:c.name})),e.next=22;break;case 13:if(c.errors){e.next=15;break}return e.abrupt("return",p.a.fire("error",c.msg,"error"));case 15:if(!c.errors.password){e.next=18;break}return e.abrupt("return",p.a.fire("error",c.errors.password.msg,"error"));case 18:if(!c.errors.email){e.next=21;break}return e.abrupt("return",p.a.fire("error",c.errors.email.msg,"error"));case 21:case 22:e.next=29;break;case 25:return e.prev=25,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",p.a.fire("error",e.t0,"error"));case 29:case 30:case"end":return e.stop()}}),e,null,[[0,25]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"correoIngreso",value:o,onChange:c})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"passwordIngreso",value:i,onChange:c})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(r.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(r.jsx)("h3",{children:"Registro"}),Object(r.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),g!==x)return p.a.fire("error","las contrase\xf1as deben ser iguales","error");var n,r,a;e((n=f,r=O,a=g,function(){var e=Object(b.a)(d.a.mark((function e(t){var c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("auth/register",{name:n,email:r,password:a},"POST");case 3:return c=e.sent,e.next=6,c.json();case 6:if(!(o=e.sent).ok){e.next=14;break}localStorage.setItem("token",o.jsonWebToken),localStorage.setItem("creacionToken",(new Date).getTime()),t(h({uid:o.uid,name:o.name})),p.a.fire("Listo","Usuario creado exitosamente","success"),e.next=23;break;case 14:if(o.errors){e.next=16;break}return e.abrupt("return",p.a.fire("error",o.msg,"error"));case 16:if(!o.errors.name){e.next=19;break}return e.abrupt("return",p.a.fire("error",o.errors.name.msg,"error"));case 19:if(!o.errors.email){e.next=21;break}return e.abrupt("return",p.a.fire("error",o.errors.email.msg,"error"));case 21:if(!o.errors.password){e.next=23;break}return e.abrupt("return",p.a.fire("error",o.errors.password.msg,"error"));case 23:e.next=30;break;case 26:return e.prev=26,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",p.a.fire("error",e.t0,"error"));case 30:case 31:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"nombreRegistro",value:f,onChange:v})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"correoRegistro",value:O,onChange:v})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"passwordRegistro",value:g,onChange:v})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"passwordRegistro2",value:x,onChange:v})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})}),S=n(18),T=n.n(S),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{end:T()(e.end).toDate(),start:T()(e.start).toDate()})}))},I=function(e){return{type:O.types.eventAddNew,payload:e}},L=function(e){return{type:O.types.eventLoad,payload:e}},R=function(e){return{type:O.types.eventUpdate,payload:e}},D=function(){return{type:O.types.eventDelete}},A=function(){return{type:O.types.eventClearActive}},U=function(){var e=Object(s.c)((function(e){return e.auth})).name,t=Object(s.b)();return Object(r.jsxs)("div",{className:"navbar navbar-dark bg-dark mb4",children:[Object(r.jsxs)("span",{className:"navbar-brand",children:[" ",e," "]}),Object(r.jsxs)("button",{onClick:function(){t((function(e){localStorage.clear(),e(x())})),t({type:O.types.eventLogout})},className:"btn btn-outline-danger",children:[Object(r.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(r.jsx)("span",{children:" Salir "})]})]})},V=n(55),H=(n(78),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),M=(n(79),function(e){var t=e.event,n=t.title,a=t.user.name;return Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:n}),Object(r.jsxs)("span",{children:[" - ",a]})]})}),_=n(50),F=n.n(_),G=(n(87),n(51)),P=n.n(G),q=n(8).types,J=function(){return{type:q.uiOpenModal}},W={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};F.a.setAppElement("#root");var B=T()().minutes(0).seconds(0).add(1,"hours"),X=B.clone().add(1,"hours"),z={title:"",notes:"",start:B.toDate(),end:X.toDate()},K=function(){var e=Object(s.c)((function(e){return e.ui})).modalOpen,t=Object(s.c)((function(e){return e.calendar})).activeEvents,n=Object(s.b)(),c=Object(a.useState)(B.toDate()),o=Object(y.a)(c,2),i=o[0],u=o[1],l=Object(a.useState)(X.toDate()),j=Object(y.a)(l,2),v=j[0],m=j[1],O=Object(a.useState)(!0),h=Object(y.a)(O,2),g=h[0],x=h[1],w=Object(a.useState)(z),E=Object(y.a)(w,2),S=E[0],C=E[1],L=S.notes,D=S.title,U=S.start,V=S.end;Object(a.useEffect)((function(){C(t||z)}),[t]);var H=function(e){var t=e.target;C(Object(N.a)(Object(N.a)({},S),{},Object(k.a)({},t.name,t.value)))},M=function(e){n({type:q.uiCloseModal}),C(z),n(A())};return Object(r.jsxs)(F.a,{isOpen:e,onRequestClose:M,style:W,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(r.jsxs)("h1",{children:[" ",t?"Editar evento":"Nuevo evento"," "]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r,a,c=T()(U),o=T()(V);return c.isSameOrAfter(o)?p.a.fire("Error","Fecha fin debe der mayor a fecha inicio","error"):D.trim().length<2?x(!1):(n(t?(a=S,function(){var e=Object(b.a)(d.a.mark((function e(t,n){var r,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().calendar.activeEvents.id,e.prev=1,e.next=4,f("events/".concat(r),a,"PUT");case 4:return c=e.sent,e.next=7,c.json();case 7:(o=e.sent).ok?t(R(o.evento)):p.a.fire("error",o.msg,"error"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}()):(r=S,function(){var e=Object(b.a)(d.a.mark((function e(t,n){var a,c,o,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n().auth,c=a.uid,o=a.name,e.next=4,f("events",r,"POST");case 4:return s=e.sent,e.next=7,s.json();case 7:(i=e.sent).ok&&(r.id=i.evento.id,r.user={_id:c,name:o},console.log(r),t(I(r))),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}())),x(!0),void M())},className:"container",children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Fecha y hora inicio"}),Object(r.jsx)(P.a,{className:"form-control",onChange:function(e){u(e),C(Object(N.a)(Object(N.a)({},S),{},{start:e}))},value:i})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Fecha y hora Termino"}),Object(r.jsx)(P.a,{className:"form-control",onChange:function(e){m(e),C(Object(N.a)(Object(N.a)({},S),{},{end:e}))},value:v,minDate:i})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Titulo y notas"}),Object(r.jsx)("input",{type:"text",className:"form-control ".concat(!g&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:D,onChange:H,autoComplete:"off"}),Object(r.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:L,onChange:H}),Object(r.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(r.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(r.jsx)("i",{className:"far fa-save"}),Object(r.jsx)("span",{children:" Guardar"})]})]})]})},Q=function(){var e=Object(s.b)();return Object(r.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(J())},children:Object(r.jsx)("i",{className:"fas fa-plus"})})},Y=function(){var e=Object(s.b)();return Object(r.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(b.a)(d.a.mark((function e(t,n){var r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n().calendar.activeEvents.id,e.next=4,f("events/".concat(r),{},"DELETE");case 4:return a=e.sent,e.next=7,a.json();case 7:(c=e.sent).ok?t(D()):p.a.fire("error",c.msg,"error"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(r.jsx)("i",{className:"fas fa-trash"}),Object(r.jsx)("span",{children:" Borrar Evento"})]})};T.a.locale("es");var Z=Object(V.b)(T.a),$=function(){var e=Object(s.c)((function(e){return e.calendar})),t=e.events,n=e.activeEvents,c=Object(s.c)((function(e){return e.auth})).uid,o=Object(s.b)(),i=Object(a.useState)(localStorage.getItem("lastView")||"month"),u=Object(y.a)(i,2),l=u[0],j=u[1];Object(a.useEffect)((function(){o(function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("events");case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,a=C(r.eventos),t(L(a)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[o]);return Object(r.jsxs)("div",{className:"calendar-screen",children:[Object(r.jsx)(U,{}),Object(r.jsx)(V.a,{localizer:Z,events:t,messages:H,eventPropGetter:function(e,t,n,r){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#c62020",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},components:{event:M},onDoubleClickEvent:function(e){o(J())},onSelectEvent:function(e){var t;o((t=e,{type:O.types.eventSetActive,payload:t}))},onView:function(e){j(e),localStorage.setItem("lastView",e)},view:l,onSelectSlot:function(e){o(A())},selectable:!0,startAccessor:"start",endAccessor:"end"}),Object(r.jsx)(Q,{}),n&&Object(r.jsx)(Y,{}),Object(r.jsx)(K,{})]})},ee=n(39),te=n(1),ne=n.n(te),re=function(e){var t=e.isLoggedIn,n=e.component,a=Object(ee.a)(e,["isLoggedIn","component"]);return Object(r.jsx)(u.b,Object(N.a)(Object(N.a)({},a),{},{component:function(e){return t?Object(r.jsx)(n,Object(N.a)({},e)):Object(r.jsx)(u.a,{to:"/login"})}}))};re.protoType={isLoggedIn:ne.a.bool.isRequired,component:ne.a.func.isRequired};var ae=re,ce=function(e){var t=e.isLoggedIn,n=e.component,a=Object(ee.a)(e,["isLoggedIn","component"]);return Object(r.jsx)(u.b,Object(N.a)(Object(N.a)({},a),{},{component:function(e){return t?Object(r.jsx)(u.a,{to:"/"}):Object(r.jsx)(n,Object(N.a)({},e))}}))};ce.protoType={isLoggedIn:ne.a.bool.isRequired,component:ne.a.func.isRequired};var oe=ce,se=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=(t.checking,t.logged);return Object(a.useEffect)((function(){e(function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("auth/revalidtoken");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?(localStorage.setItem("token",r.jsonWebToken),localStorage.setItem("creacionToken",(new Date).getTime()),t(h({uid:r.uid,name:r.name}))):t(g()),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.jsx)(i.a,{children:Object(r.jsx)("div",{children:Object(r.jsxs)(u.d,{children:[Object(r.jsx)(oe,{isLoggedIn:n,component:E,exact:!0,path:"/login"}),Object(r.jsx)(ae,{isLoggedIn:n,component:$,exact:!0,path:"/"}),Object(r.jsx)(u.a,{to:"/"})]})})})},ie=n(23),ue={checking:!0,logged:!1},le=n(56),de={events:[],activeEvents:null},be={modalOpen:!1},je=Object(ie.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.types.uiOpenModal:return Object(N.a)(Object(N.a)({},e),{},{modalOpen:!0});case O.types.uiCloseModal:return Object(N.a)(Object(N.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.types.eventAddNew:return Object(N.a)(Object(N.a)({},e),{},{events:[].concat(Object(le.a)(e.events),[t.payload])});case O.types.eventSetActive:return Object(N.a)(Object(N.a)({},e),{},{activeEvents:t.payload});case O.types.eventClearActive:return Object(N.a)(Object(N.a)({},e),{},{activeEvents:null});case O.types.eventUpdate:return Object(N.a)(Object(N.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case O.types.eventDelete:return Object(N.a)(Object(N.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvents.id})),activeEvents:null});case O.types.eventLoad:return Object(N.a)(Object(N.a)({},e),{},{events:Object(le.a)(t.payload)});case O.types.eventLogout:return Object(N.a)(Object(N.a)({},e),{},{events:[],activeEvents:null});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.types.authLogin:return Object(N.a)(Object(N.a)({},e),{},{checking:!1,logged:!0},t.payload);case O.types.authCheckingFinish:return Object(N.a)(Object(N.a)({},e),{},{checking:!1});case O.types.authLogout:return{checking:!1,logged:!1};default:return e}}}),pe=n(66),ve="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,me=Object(ie.e)(je,ve(Object(ie.a)(pe.a))),fe=function(){return Object(r.jsx)(s.a,{store:me,children:Object(r.jsx)(se,{})})},Oe=(n(116),document.getElementById("root"));o.a.render(Object(r.jsx)(fe,{}),Oe)},76:function(e,t,n){},8:function(e,t,n){"use strict";n.r(t),n.d(t,"types",(function(){return r}));var r={uiOpenModal:"[UI] open modal",uiCloseModal:"[UI] close modal",eventSetActive:"[EVENT] set active",eventStartAddNew:"[EVENT] start add new",eventAddNew:"[EVENT] add new",eventClearActive:"[EVENT] clear active",eventUpdate:"[EVENT] update event",eventDelete:"[EVENT] delete event",eventLoad:"[EVENT] load event",eventLogout:"[EVENT] logout event",authCheckingFinish:"[AUTH] finish cheking login state",authStartLogin:"[AUTH] start login",authLogin:"[AUTH] login",authStartRegister:"[AUTH] start register",authStartTokenReNew:"[AUTH] start token renew",authLogout:"[AUTH] logout"}},87:function(e,t,n){}},[[118,1,2]]]);
//# sourceMappingURL=main.fb98098f.chunk.js.map