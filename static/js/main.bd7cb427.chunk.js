(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),i=n(8),a=n.n(i),d=(n(13),n(7)),r=n(2),s=n(0);var u=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(r.a)(e,2),c=n[0],i=n[1],a=Object(o.useRef)(null);Object(o.useEffect)((function(){a.current.focus()}));var d=function(t){i(t.target.value)},u=function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),i("")};return Object(s.jsx)("form",{onSubmit:u,className:"todo-form",children:t.edit?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{placeholder:"Update your item",value:c,onChange:d,name:"text",ref:a,className:"todo-input edit"}),Object(s.jsx)("button",{onClick:u,className:"todo-button edit",children:"Update"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{placeholder:"Add a todo",value:c,onChange:d,name:"text",className:"todo-input",ref:a}),Object(s.jsx)("button",{onClick:u,className:"todo-button",children:"Add todo"})]})})},l=n(6),j=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,i=t.updateTodo,a=Object(o.useState)({id:null,value:""}),d=Object(r.a)(a,2),j=d[0],b=d[1];return j.id?Object(s.jsx)(u,{edit:j,onSubmit:function(t){i(j.id,t),b({id:null,value:""})}}):e.map((function(t,e){return Object(s.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(s.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(s.jsx)("div",{className:"icons",children:Object(s.jsx)(l.a,{onClick:function(){return c(t.id)},className:"delete-icon"})})]},e)}))};var b=function(){var t=Object(o.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Liste de choses \xe0 faire"}),Object(s.jsx)(u,{onSubmit:function(t){if(t.text&&!/^\*$/.test(t.text)){var e=[t].concat(Object(d.a)(n));c(e)}}}),Object(s.jsx)(j,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(d.a)(n).filter((function(e){return e.id!==t}));c(e)},updatedTodos:function(t,e){e.text&&!/^\*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var f=function(){return Object(s.jsx)("div",{className:"todo-app",children:Object(s.jsx)(b,{})})};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bd7cb427.chunk.js.map