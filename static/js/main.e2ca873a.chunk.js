(this.webpackJsonpadkernel=this.webpackJsonpadkernel||[]).push([[0],{13:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),o=a(3),s=a(11),m={firstName:"",secondName:"",phone:"",gender:"",age:0},u={firstName:!1,secondName:!1,phone:!1,gender:!1,age:!1},i={firstName:!0,secondName:!0,phone:!0,gender:!0,age:!0},d={firstName:"First Name",secondName:"Second Name",phone:"+380",gender:"Gender",age:"Age"};function b(e){for(var t in m)if(!e.hasOwnProperty(t))return!1;return!0}function p(e){var t=e.match(/\d/g);return"".concat(t[0]+t[1]+" "+t[2]+t[3]+t[4]+" "+t[5]+t[6]+" "+t[7]+t[8])}var h=function(e,t){var a="";switch(e){case"firstName":case"secondName":return!(a=/[^A-Za-z\u0430-\u044f\u0410-\u042f\s.-]+/g).test(t);case"phone":a=/[^0-9\s-]+/g;var n=t.replace(/\D/g,"").length;return!a.test(t)&&9===n;case"age":return!(a=/[^0-9]+/g).test(t)&&+t<120&&+t>0;case"gender":return!!t;default:return!1}},E=function(e){var t=e.showModal,a=e.setShowModal,n=t?"custom-modal-active":"custom-modal-none";return l.a.createElement("div",{className:"modal ".concat(n)},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"Fill in all fields correctly"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:function(){return a(!1)}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",{className:"modal-text"},"This form is designed to add data to a table. To add a new field, must be correct fill in ALL fields. Namely:"),l.a.createElement("ul",null,l.a.createElement("li",null,"First Name: all alphabetic characters are allowed, space, period, dash.",l.a.createElement("br",null)),l.a.createElement("li",null,"Second Name: all alphabetic characters are allowed, space, period, dash.",l.a.createElement("br",null)),l.a.createElement("li",null,"Phone: numbers, spaces and dashes are allowed. The number of digits is 9.",l.a.createElement("br",null)),l.a.createElement("li",null,"Age: only numbers are allowed. The maximum age is 120.",l.a.createElement("br",null)),l.a.createElement("li",null,"Gender: You need to choose one of the proposed options.",l.a.createElement("br",null)))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return a(!1)}},"Clear")))))},f=a(2),N=a(1),g=a(8),v=a(9),y=a(12),w=a(10),O=l.a.memo((function(e){var t=e.name,a=e.handleInput,n=e.spanText,r=e.value,c=e.children,o=e.wasChanged,s=e.hasError,m="";return o&&!s?m="is-valid":o&&s&&(m="is-invalid"),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},n)),c?l.a.createElement("select",{className:"custom-select ".concat(m),name:t,onChange:a,value:r},c):l.a.createElement("input",{type:"text",className:"form-control ".concat(m),name:t,onChange:a,value:r||"",placeholder:"Enter value"}))})),j=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).handleInput=function(e){var t=e.target.name,a=e.target.value;n.setState((function(e){return{inputValue:Object(N.a)(Object(N.a)({},e.inputValue),{},Object(f.a)({},t,a)),wasChanged:Object(N.a)(Object(N.a)({},e.wasChanged),{},Object(f.a)({},t,!0)),hasError:Object(N.a)(Object(N.a)({},e.hasError),{},Object(f.a)({},t,!h(t,a)))}}))},n.handleSubmit=function(e){if(e.preventDefault(),Object.values(n.state.hasError).includes(!0))n.props.setShowModal(!0);else{var t=n.state.inputValue.firstName,a=n.state.inputValue.secondName,l=Object(N.a)(Object(N.a)({},n.state.inputValue),{},{phone:p(n.state.inputValue.phone),age:+n.state.inputValue.age});localStorage.setItem("".concat(t," ").concat(a),JSON.stringify(l)),n.props.updateData(!0),n.setState({inputValue:Object(N.a)({},m),wasChanged:Object(N.a)({},u),hasError:Object(N.a)({},i)})}},n.state={inputValue:Object(N.a)({},m),wasChanged:Object(N.a)({},u),hasError:Object(N.a)({},i),spanText:Object(N.a)({},d)},n}return Object(v.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("form",{onSubmit:this.handleSubmit,autoComplete:"off",className:"form"},Object.keys(this.state.inputValue).map((function(t){return l.a.createElement(O,{key:e.state.spanText[t],name:t,handleInput:e.handleInput,spanText:e.state.spanText[t],value:e.state.inputValue[t],wasChanged:e.state.wasChanged[t],hasError:e.state.hasError[t]},"gender"===t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("option",{value:""},"Select gender ..."),l.a.createElement("option",{value:"male"},"Male"),l.a.createElement("option",{value:"female"},"Female")))})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add"))}}]),a}(l.a.Component),S=l.a.memo((function(e){var t=e.people,a=e.setSortField,n=e.updateData,r=e.setShowDeleteModal;return t.length?l.a.createElement("div",null,l.a.createElement("table",{className:"table ",style:{textAlign:"center"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col",className:"field-name"},l.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return a("firstName")}},"First name")),l.a.createElement("th",{scope:"col",className:"field-name"},l.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return a("secondName")}},"Second name")),l.a.createElement("th",{scope:"col",className:"field-name"},l.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return a("phone")}},"Phone")),l.a.createElement("th",{scope:"col",className:"field-name"},l.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return a("gender")}},"Gender")),l.a.createElement("th",{scope:"col",className:"field-name"},l.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return a("age")}},"Age")),l.a.createElement("th",null,l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return r(!0)}},"Clean")))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:"".concat(e.phone," ").concat(e.firstName)},l.a.createElement("th",{scope:"row"},e.firstName),l.a.createElement("td",null,e.secondName),l.a.createElement("td",null,"+380 ",e.phone),l.a.createElement("td",null,e.gender),l.a.createElement("td",null,e.age),l.a.createElement("td",{className:"button-field"},l.a.createElement("button",{type:"button",className:"btn btn-light",onClick:function(){return t=e.firstName,a=e.secondName,localStorage.removeItem("".concat(t," ").concat(a)),void n(!0);var t,a}},"\xd7")))}))))):l.a.createElement("p",{className:"text-center font-weight-bold"},"To create a table, add at least one field.")})),C=(a(18),function(e){var t=e.showDeleteModal,a=e.setShowDeleteModal,n=e.updateData,r=t?"custom-modal-active":"custom-modal-none";return l.a.createElement("div",{className:"modal ".concat(r)},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"Dropping the entire table"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:function(){return a(!1)}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("h2",{className:"modal-text"},"Are you sure you want to delete the entire table?")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return a(!1)}},"Cancel"),l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return localStorage.clear(),n(!0),void a(!1)}},"Delete")))))});var k=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),m=Object(o.a)(c,2),u=m[0],i=m[1],d=Object(n.useState)(!1),p=Object(o.a)(d,2),h=p[0],f=p[1],N=Object(n.useState)("firstName"),g=Object(o.a)(N,2),v=g[0],y=g[1],w=Object(n.useState)(!0),O=Object(o.a)(w,2),k=O[0],D=O[1],x=function(e,t,a){if(!e.length)return[];var n=Object(s.a)(e),l=-1;switch(a&&(l=1),typeof n[0][t]){case"number":n.sort((function(e,a){return l*(e[t]-a[t])}));break;default:n.sort((function(e,a){return l*e[t].localeCompare(a[t])}))}return n}(function(){for(var e=[],t=0,a=Object.keys(localStorage);t<a.length;t++){var n=a[t],l=JSON.parse(localStorage.getItem(n));b(l)&&e.push(l)}return e}(),v,k);return Object(n.useEffect)((function(){f(!1)}),[h]),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"lead text-center"},"Created by -"," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/danylo-kanievskyi/",className:"badge badge-primary"},"Danylo Kanievskyi")),l.a.createElement(j,{setShowModal:r,updateData:f}),l.a.createElement(S,{people:x,setSortField:function(e){e!==v?y(e):D(!k)},updateData:f,setShowDeleteModal:i}),l.a.createElement(E,{showModal:a,setShowModal:r}),l.a.createElement(C,{showDeleteModal:u,setShowDeleteModal:i,updateData:f}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.e2ca873a.chunk.js.map