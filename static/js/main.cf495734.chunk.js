(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports={form:"ContactForm_form__In2YY"}},20:function(e,t,n){e.exports={filter:"Filter_filter__2x7gB"}},26:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n.n(c),s=n(12),o=n.n(s),l=(n(26),n(21)),i=n(7),u=n(2),d=n(3),b=n(5),h=n(4),j=n(13),m=n.n(j),p=n(14),f=n.n(p),O=n(0),x=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(i.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number,r=e.props.cbAddNewContact,s={id:m()(),name:a,number:c};e.setState({name:"",number:""}),r(s)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(O.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Name"}),Object(O.jsx)("input",{className:"input",type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,placeholder:"Enter new contact name"})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Number"}),Object(O.jsx)("input",{className:"input",type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,placeholder:"Enter new contact number"})]}),Object(O.jsx)("button",{className:"button",type:"submit",children:"Add contact"})]})}}]),n}(c.Component),v=x,C=n(15),g=n(16).a.div(a||(a=Object(C.a)(["\n  .selector1 {\n    width: 95%;\n    border-collapse: collapse;\n    margin: 20px auto;    \n  }\n  .selector2 {\n    background-color: rgb(63, 207, 243);\n    text-transform: uppercase;\n    color: #fff;\n  }\n  .selector3 {\n    line-height: 2;\n   border: 1px solid burlywood;\n    text-align: center;\n  }\n"]))),N=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(t){e.props.cbRemoveContact(t.target.id)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.filteredContacts,t=this.handleClick;return Object(O.jsx)(g,{children:Object(O.jsxs)("table",{className:"selector1",children:[Object(O.jsx)("thead",{className:"selector2",children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"selector3",children:"Name"}),Object(O.jsx)("th",{className:"selector3",children:"Phone Number"}),Object(O.jsx)("th",{className:"selector3",children:"Etc."})]})}),Object(O.jsx)("tbody",{children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"selector3",style:{textTransform:"capitalize"},children:a}),Object(O.jsx)("td",{className:"selector3",children:c}),Object(O.jsx)("td",{className:"selector3",children:Object(O.jsx)("button",{className:"button",type:"button",onClick:t,id:n,children:"Delete contact"})})]},n)}))})]})})}}]),n}(c.Component),y=N,w=n(20),k=n.n(w);var S=function(e){var t=e.filteringName,n=e.cbInputChange;return Object(O.jsxs)("label",{className:k.a.filter,children:[Object(O.jsx)("p",{className:"label",children:"Find contacts by name"}),Object(O.jsx)("input",{className:"input",type:"text",name:"filter",value:t,onChange:n,placeholder:"Enter query name"})]})},A=(n(40),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],filter:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(i.a)({},a,c))},e.addNewContact=function(t){e.state.contacts.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[t])}}))},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.getFilteredContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.trim().toLowerCase())}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("allContacts"),t=JSON.parse(e);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("allContacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state.filter,t=this.getFilteredContacts();return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(v,{cbAddNewContact:this.addNewContact}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsxs)("div",{className:"Contacts",children:[Object(O.jsx)(S,{filteringName:e,cbInputChange:this.handleChange}),Object(O.jsx)(y,{filteredContacts:t,cbRemoveContact:this.removeContact})]})]})}}]),n}(c.Component)),I=A;o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.cf495734.chunk.js.map