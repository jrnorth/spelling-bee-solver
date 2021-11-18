(this["webpackJsonpspelling-bee-solver"]=this["webpackJsonpspelling-bee-solver"]||[]).push([[0],{35:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n.n(s),a=n(8),o=n.n(a),r=(n(35),n(15)),l=n(13),c=n(14),u=n(12),h=n(22),d=n(21),j=(n(36),n(23)),b=n(28),p=n(30),v=n(29),g=n(27),f=n(25),O=n(26),m=n(16),x=n(1),C=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(l.a)(this,n),(s=e.call(this,t)).state={loading:!0,solving:!1,input:""},s.dictionary={},s.initialize=s.initialize.bind(Object(u.a)(s)),s.inputChanged=s.inputChanged.bind(Object(u.a)(s)),s.modalClosed=s.modalClosed.bind(Object(u.a)(s)),s.solve=s.solve.bind(Object(u.a)(s)),s}return Object(c.a)(n,[{key:"componentDidMount",value:function(){fetch("https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt").then((function(t){return t.text()})).then(this.initialize)}},{key:"initialize",value:function(t){this.dictionary=t.split("\r\n").reduce((function(t,e){var n=e.toLowerCase().split(""),s=new Set(n),i=Object(r.a)(s).sort().join("");return t[i]?t[i].push(e):t[i]=[e],t}),{}),this.setState({loading:!1})}},{key:"inputChanged",value:function(t){var e=t.currentTarget.value.split("").filter((function(t){return/^[A-Z]$/i.test(t)})).join("");this.setState({input:e})}},{key:"modalClosed",value:function(){this.setState({solution:void 0})}},{key:"solve",value:function(){var t=this;this.setState({solving:!0});var e=this.state.input.toLowerCase().charAt(0),n=new Set(this.state.input.toLowerCase().split("")),s=Object(r.a)(n).sort().reduce((function(t,e){return t.map((function(t){return[].concat(Object(r.a)(t),[e])})).forEach((function(e){return t.push(e)})),t.push([e]),t}),[]).filter((function(t){return t.length>3})).filter((function(t){return t.includes(e)})).reduce((function(e,n){var s=t.dictionary[n.join("")];return s&&s.forEach((function(t){return e.push(t)})),e}),[]).sort();this.setState({solution:s,solving:!1})}},{key:"solutionRows",value:function(){for(var t=[],e=0;e<this.state.solution.length;e+=4){for(var n=[],s=0;s<4&&e+s<this.state.solution.length;s++)n.push(Object(x.jsx)(f.a,{className:"col-sm-3",children:this.state.solution[e+s]},"r"+e+"c"+s));t.push(Object(x.jsx)(O.a,{children:n},"r"+e))}return t}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"jumbotron d-flex align-items-center min-vh-100",children:[Object(x.jsx)(g.a,{className:"text-center",children:Object(x.jsx)(O.a,{children:Object(x.jsxs)(f.a,{className:"col-sm-4 mx-auto",children:[this.state.loading&&Object(x.jsx)(v.a,{animation:"grow"}),!this.state.loading&&Object(x.jsxs)(b.a,{children:[Object(x.jsx)(p.a,{placeholder:"Spelling Bee letters",onChange:this.inputChanged,maxLength:7,className:"shadow-none",value:this.state.input,autoFocus:!0}),Object(x.jsx)(b.a.Text,{children:this.state.input?this.state.input.charAt(0).toUpperCase():"Required Letter"}),!this.state.solving&&Object(x.jsx)(j.a,{variant:"primary",id:"solve",disabled:7!==this.state.input.length,className:"shadow-none",onClick:this.solve,children:"Solve"}),this.state.solving&&Object(x.jsxs)(j.a,{variant:"primary",id:"solve",disabled:!0,className:"shadow-none",children:[Object(x.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"\xa0 Solving"]})]})]})})}),this.state.solution&&Object(x.jsxs)(m.a,{size:"lg",show:!0,onHide:this.modalClosed,scrollable:!0,children:[Object(x.jsx)(m.a.Header,{closeButton:!0,children:Object(x.jsxs)(m.a.Title,{children:["Solution (",this.state.solution.length," words)"]})}),Object(x.jsx)(m.a.Body,{children:Object(x.jsx)(g.a,{children:this.solutionRows()})}),Object(x.jsx)(m.a.Footer,{children:Object(x.jsx)(j.a,{variant:"secondary",onClick:this.modalClosed,children:"Close"})})]})]})}}]),n}(i.a.Component),w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),s(t),i(t),a(t),o(t)}))};o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),w()}},[[41,1,2]]]);
//# sourceMappingURL=main.112f99e1.chunk.js.map