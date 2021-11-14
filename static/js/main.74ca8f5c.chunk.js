(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={contactItem:"ContactListItem_contactItem__2tTbV",contactName:"ContactListItem_contactName__3lmif",deleteContactBtn:"ContactListItem_deleteContactBtn__1XzRE"}},17:function(t,e,n){t.exports={filterInputLabel:"Filter_filterInputLabel__2Kv_B",filterInput:"Filter_filterInput__1R4Gm"}},21:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__sKD3E"}},33:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),i=n(4),s=n(14),u=n(19),l=n(1),d=Object(l.d)({name:"contacts",initialState:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],reducers:{addContact:function(t,e){return[].concat(Object(s.a)(t),[e.payload])},deleteContact:function(t,e){return t.filter((function(t){return t.id!==e.payload}))}}}),m=d.actions,b=(m.addContact,m.deleteContact),j=d.reducer,f=Object(l.d)({name:"contacts",initialState:"",reducers:{filterContact:function(t,e){return e.payload}}}),p=f.actions.filterContact,O=f.reducer,h=n(20),x=n(5),C=Object(h.a)({reducerPath:"contactsApi",baseQuery:Object(x.d)({baseUrl:"https://618edec450e24d0017ce14ae.mockapi.io/api/v1/"}),tagTypes:["Contact"],endpoints:function(t){return{getAllContacts:t.query({query:function(){return"/contacts"},providesTags:["Contact"]}),deleteContact:t.mutation({query:function(t){return{url:"/contacts/".concat(t),method:"DELETE"}},invalidatesTags:["Contact"]}),createContact:t.mutation({query:function(t){return{url:"/contacts",method:"POST",body:{name:t.name,number:t.number}}},invalidatesTags:["Contact"]})}}}),v=C.useGetAllContactsQuery,_=C.useDeleteContactMutation,N=C.useCreateContactMutation,g=Object(l.a)({reducer:Object(u.a)({contacts:j,filter:O},C.reducerPath,C.reducer),middleware:function(t){return[].concat(Object(s.a)(t()),[C.middleware])},devTools:!0}),L=(n(33),n(8)),y=n(38),I=n(9),F=n.n(I),T=n(2);function S(){var t=N(),e=Object(L.a)(t,1)[0],n=v().data,c=Object(a.useState)(""),r=Object(L.a)(c,2),o=r[0],i=r[1],s=Object(a.useState)(""),u=Object(L.a)(s,2),l=u[0],d=u[1],m=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":i(a);break;case"number":d(a);break;default:return}},b=function(){i(""),d("")},j=Object(y.a)(),f=Object(y.a)();return Object(T.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={name:o,number:l};return n.map((function(t){return t.name})).includes(o.trim())?alert('"'.concat(o.trim(),'" is already in contacts')):n.map((function(t){return t.number})).includes(l.trim())?alert('phone number "'.concat(l.trim(),'" is already in contacts')):(e(a),void b())},children:[Object(T.jsx)("label",{htmlFor:j,className:F.a.formLabel,children:"Name"}),Object(T.jsx)("br",{}),Object(T.jsx)("input",{id:j,type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m,className:F.a.formInput}),Object(T.jsx)("br",{}),Object(T.jsx)("label",{htmlFor:f,className:F.a.formLabel,children:"Number"}),Object(T.jsx)("br",{}),Object(T.jsx)("input",{id:f,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m,className:F.a.formInput}),Object(T.jsx)("br",{}),Object(T.jsx)("button",{type:"submit",className:F.a.formBtn,children:"add"})]})}var w=n(11),A=n.n(w),B=function(t){var e=t.id,n=t.name,a=t.number,c=(t.onDelete,_()),r=Object(L.a)(c,1)[0];return Object(T.jsxs)("li",{className:A.a.contactItem,children:[Object(T.jsxs)("p",{className:A.a.contactName,children:[n,": ",Object(T.jsx)("span",{className:A.a.contactNumber,children:a})]}),Object(T.jsx)("button",{className:A.a.deleteContactBtn,type:"button",onClick:function(){return r(e)},children:"Delete"})]})},k=n(21),D=n.n(k),E=function(){var t=v(),e=t.data,n=t.isFetching,a=Object(i.e)((function(t){return t.filter})),c=Object(i.d)();return Object(T.jsxs)("ul",{className:D.a.contactsList,children:[n&&Object(T.jsx)("h4",{children:"Loading, please wait.."}),e&&function(t,e){var n=null===e||void 0===e?void 0:e.toLocaleLowerCase().trim();return null===t||void 0===t?void 0:t.filter((function(t){return null===t||void 0===t?void 0:t.name.toLocaleLowerCase().trim().includes(n)}))}(e,a).map((function(t){return Object(T.jsx)(B,{id:t.id,name:t.name,number:t.number,onDelete:function(){return c(b(t.id))}},t.id)}))]})},q=(n(35),n(17)),P=n.n(q),z=function(){var t=Object(i.d)(),e=Object(i.e)((function(t){return t.filter}));return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("label",{className:P.a.filterInputLabel,children:"Find contacts by name"}),Object(T.jsx)("br",{}),Object(T.jsx)("input",{className:P.a.filterInput,type:"text",name:"filter",value:e,onChange:function(e){return t(p(e.target.value))},placeholder:"Contact"})]})};function M(){return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsxs)("div",{className:"InputWrapper",children:[Object(T.jsx)("h1",{className:"inputTitle",children:"Phonebook"}),Object(T.jsx)(S,{}),Object(T.jsx)("br",{}),Object(T.jsx)(z,{})]}),Object(T.jsxs)("div",{className:"contactsSection",children:[Object(T.jsx)("h2",{className:"contactsSectionTitle",children:"Contacts"}),Object(T.jsx)(E,{})]})]})}var J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(i.a,{store:g,children:Object(T.jsx)(M,{})})}),document.getElementById("root")),J()},9:function(t,e,n){t.exports={formLabel:"Form_formLabel__3Sj3b",formInput:"Form_formInput__3c57Y",formBtn:"Form_formBtn__2lNew"}}},[[36,1,2]]]);
//# sourceMappingURL=main.74ca8f5c.chunk.js.map