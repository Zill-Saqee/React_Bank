(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/icon.12e3dac8.ico"},12:function(e,t,a){},17:function(e,t,a){e.exports=a(30)},22:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),r=a.n(c),o=(a(22),a(2)),s=a(3),i=a(5),u=a(4),m=a(6),d=a(33),h=a(34),p=a(32),E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement("p",null,"Bank"),l.a.createElement("ul",null,l.a.createElement("li",null," ",l.a.createElement(p.a,{to:"/"},"Dashboard")),l.a.createElement("li",null," ",l.a.createElement(p.a,{to:"/accounts"},"Accounts")),l.a.createElement("li",null," ",l.a.createElement(p.a,{to:"/transactions"},"Transactions"))))}}]),t}(n.Component),f=a(11),g=a.n(f),v=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=localStorage.getItem("accounts");if(null===e)this.setState({totalaccnts:0});else{var t=JSON.parse(e).length;this.setState({totalaccnts:t})}var a=localStorage.getItem("transactions");if(null===a)this.setState({ttransactions:0});else{var n=JSON.parse(a).length;this.setState({ttransactions:n})}}},{key:"render",value:function(){return l.a.createElement("div",{className:"dashboard"},l.a.createElement("div",{className:"dleft"},l.a.createElement("div",{className:"top"},l.a.createElement("img",{className:"dicon",src:g.a,alt:""}),l.a.createElement("span",null,"Accounts"),l.a.createElement("div",{className:"dlinks"},l.a.createElement(p.a,{to:"./accounts/create"},"+Add new account"),l.a.createElement(p.a,{to:"/accounts"},"View All"))),l.a.createElement("hr",null),l.a.createElement("div",{align:"center",className:"bottom"},l.a.createElement(p.a,{to:"./accounts"},this.state.totalaccnts),l.a.createElement("br",null),l.a.createElement(p.a,{to:"./accounts"},"accounts"))),l.a.createElement("div",{className:"dright"},l.a.createElement("div",{className:"top"},l.a.createElement("img",{className:"dicon",src:g.a,alt:""}),l.a.createElement("span",null,"Transactions"),l.a.createElement("div",{className:"dlinks"},l.a.createElement(p.a,{to:"./transactions"},"View All"))),l.a.createElement("hr",null),l.a.createElement("div",{align:"center",className:"bottom"},l.a.createElement(p.a,{to:"./transactions"},this.state.ttransactions),l.a.createElement("br",null),l.a.createElement(p.a,{to:"./transactions"},"transactions"))))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={accdetails:""},a.update=function(e){alert(e)},a.checkls=function(){var e,t=[];null==(e=localStorage.getItem("accounts"))?(a.setState({accdetails:""}),a.setState({table:!1})):(t=JSON.parse(e),a.setState({accdetails:t}),a.setState({table:!0}))},a.sendID=function(e,t){var a=e;localStorage.setItem("id",t);var n=localStorage.getItem("accounts"),l=JSON.parse(n).filter(function(e){return e.id===a}),c=JSON.stringify(l);localStorage.setItem("detail",c)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=localStorage.getItem("accounts"),t=JSON.parse(e);if(t===[]||null===t)this.setState({arrayofacnts:0}),this.setState({table:!1});else{var a=JSON.parse(e).length;this.setState({totalaccnts:a}),this.checkls()}}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"accounts"},l.a.createElement(p.a,{className:"goback",to:"/"},"Back to dashboard"),l.a.createElement(p.a,{className:"addnew",to:"/accounts/create"},"+Add new account"),l.a.createElement("div",{className:"innerdivA"},l.a.createElement("img",{src:g.a,height:"40%",alt:""}),l.a.createElement("span",null,"Accounts")),l.a.createElement("table",{className:"accTable",cellSpacing:"0px"},!1===this.state.table?l.a.createElement("h2",{style:{textAlign:"center",fontFamily:"sans-serif",color:"#ccc"}},"There are currently no accounts available"):l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Account #"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Registered"),l.a.createElement("th",null,"Account Type"),l.a.createElement("th",null,"Balance"))),l.a.createElement("tbody",null,0===this.state.arrayofacnts?"":this.state.accdetails.map(function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement(p.a,{to:"/accounts/detail",onClick:function(){return e.sendID(t.id,a)}},t.id)),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.time),l.a.createElement("td",null,t.type),l.a.createElement("td",null,t.amount))}))))}}]),t}(n.Component),S=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).sendID=function(e,t){var a=e;localStorage.setItem("id",t);var n=localStorage.getItem("transactions"),l=JSON.parse(n).filter(function(e){return Number(e.id)===Number(a)}),c=JSON.stringify(l);localStorage.setItem("detail",c)};var n=localStorage.getItem("transactions");if(null===JSON.parse(n))a.state={heading:!1};else{a.state={heading:!0};var l=localStorage.getItem("transactions"),c=JSON.parse(l);a.state={array:c}}return a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=l.a.createElement("h2",{style:{textAlign:"center",fontFamily:"sans-serif",color:"#ccc"}},"No transactions have been made yet");return l.a.createElement("div",{className:"transactions"},l.a.createElement(p.a,{className:"gobackfromt",to:"/"},"Back to dashboard"),l.a.createElement("div",{className:"innerdivT"},l.a.createElement("img",{src:g.a,height:"40%",alt:""}),l.a.createElement("span",null,"Transactions")),l.a.createElement("table",{className:"accTable",cellSpacing:"0px"},!1===this.state.heading?t:l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"TransactionId"),l.a.createElement("th",null,"Time"),l.a.createElement("th",null,"Account#"),l.a.createElement("th",null,"Account Type"),l.a.createElement("th",null,"Amount"))),l.a.createElement("tbody",null,!1===this.state.heading?"":this.state.array.map(function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement(p.a,{to:"/transactions/detail",onClick:function(){return e.sendID(t.id,a)}},t.id)),l.a.createElement("td",null,t.time),l.a.createElement("td",null,t.acc),l.a.createElement("td",null,t.type),l.a.createElement("td",null,t.amount))}))))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={acId:"",amount:""},a.handletransaction=function(e,t){var n=[],l=new a.Transaction(e,"credit",t),c=localStorage.getItem("transactions");if(null===JSON.parse(c)){n.push(l);var r=JSON.stringify(n);localStorage.setItem("transactions",r)}else{var o=localStorage.getItem("transactions"),s=JSON.parse(o);s.push(l);var i=JSON.stringify(s);localStorage.setItem("transactions",i)}},a.handleaccount=function(){var e=a.refs.name.value,t=a.refs.type.value,n=a.refs.amount.value,l=(new Date).toLocaleString(),c=1e10*Math.random(),r=Math.round(c);if(""===e||""===t||""===n)alert("No account created.");else{var o=new a.User(r,e,t,n,l);if(null===localStorage.getItem("accounts")){var s=[];s.push(o);var i=JSON.stringify(s);localStorage.setItem("accounts",i),a.handletransaction(r,n)}else{var u,m=[];u=localStorage.getItem("accounts"),(m=JSON.parse(u)).push(o);var d=JSON.stringify(m);localStorage.setItem("accounts",d),a.handletransaction(r,n)}}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"User",value:function(e,t,a,n,l){this.id=e,this.name=t,this.type=a,this.amount=n,this.time=l}},{key:"Transaction",value:function(e,t,a){var n=1e10*Math.random();this.id=Math.round(n);var l=(new Date).toLocaleString();this.time=l,this.acc=e,this.type=t,this.amount=a}},{key:"render",value:function(){return l.a.createElement("div",{className:"create"},l.a.createElement("h1",null,"Enter account details below"),l.a.createElement("form",null,l.a.createElement("span",null,"Full Name"),l.a.createElement("input",{type:"text",placeholder:"Enter full name here",ref:"name",required:!0}),l.a.createElement("hr",null),l.a.createElement("span",null,"Account Type"),l.a.createElement("select",{ref:"type"},l.a.createElement("option",{value:""},"Select Account Type"),l.a.createElement("option",{value:"current"},"Current"),l.a.createElement("option",{value:"saving"},"Saving")),l.a.createElement("hr",null),l.a.createElement("span",null,"Initial Deposit in Rs"),l.a.createElement("input",{type:"number",placeholder:"1000",ref:"amount",required:!0}),l.a.createElement("hr",null),l.a.createElement(p.a,{to:"/accounts",onClick:this.handleaccount},"CREATE ACCOUNT"),l.a.createElement(p.a,{to:"/accounts"},"VIEW ALL ACCOUNTS")))}}]),t}(n.Component),O=(a(12),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={data:"",route:"/accounts"},a.reqData=function(){var e=localStorage.getItem("detail"),t=JSON.parse(e);a.refs.a.innerHTML=t[0].id,a.refs.n.innerHTML=t[0].name,a.refs.r.innerHTML=t[0].time,a.refs.t.innerHTML=t[0].type,a.refs.b.innerHTML=t[0].amount},a.delete=function(){if(!0===window.confirm("Are you sure to delete your account?")){var e=JSON.parse(localStorage.getItem("id")),t=JSON.parse(localStorage.getItem("accounts"));if(t.splice(e,1),t.length>0){var n=JSON.stringify(t);localStorage.setItem("accounts",n)}else localStorage.removeItem("accounts"),localStorage.removeItem("detail"),localStorage.removeItem("id");a.setState({route:"/accounts"})}else a.setState({route:"/accounts/detail"})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.reqData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"detail"},l.a.createElement(p.a,{to:"/accounts",className:"back"},"Back to accounts"),l.a.createElement(p.a,{className:"delete",onClick:this.delete,to:this.state.route},"Delete Accounts"),l.a.createElement("p",null," Account Detail"),l.a.createElement("hr",null),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"htd"},"Account#"),l.a.createElement("td",{colSpan:"4",style:{textAlign:"left"},ref:"a",className:"dtd htd"})),l.a.createElement("hr",null),l.a.createElement("tr",null,l.a.createElement("td",{className:"htd"},"Full Name"),l.a.createElement("td",{colSpan:"4",style:{textAlign:"left"},ref:"n",className:"dtd htd"})),l.a.createElement("hr",null),l.a.createElement("tr",null,l.a.createElement("td",{className:"htd"},"Registered"),l.a.createElement("td",{colSpan:"4",style:{textAlign:"left"},ref:"r",className:"dtd htd"})),l.a.createElement("hr",null),l.a.createElement("tr",null,l.a.createElement("td",{className:"htd"},"Account Type"),l.a.createElement("td",{colSpan:"4",style:{textAlign:"left"},ref:"t",className:"dtd htd"})),l.a.createElement("hr",null),l.a.createElement("tr",null,l.a.createElement("td",{className:"htd"},"Current Balance"),l.a.createElement("td",{colSpan:"4",style:{textAlign:"left"},ref:"b",className:"dtd htd"})))),l.a.createElement("br",null),l.a.createElement(p.a,{to:"/accounts/withdraw",className:"withdraw"},"Withdraw"),l.a.createElement(p.a,{to:"/accounts/deposit",className:"deposit"},"Deposit"))}}]),t}(n.Component)),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={data:"",route:"/accounts"},a.reqData=function(){var e=localStorage.getItem("detail"),t=JSON.parse(e);a.refs.a.innerHTML=t[0].acc,a.refs.r.innerHTML=t[0].time,a.refs.t.innerHTML=t[0].type,a.refs.b.innerHTML=t[0].amount},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.reqData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"detail"},l.a.createElement(p.a,{to:"/transactions",className:"back"},"Back to transactions"),l.a.createElement("p",null," Transaction Detail"),l.a.createElement("hr",null),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"htd"},"Account#"),l.a.createElement("td",{colSpan:"4",style:{textAlign:"left"},ref:"a",className:"dtd htd"})),l.a.createElement("hr",null),l.a.createElement("tr",null,l.a.createElement("td",{className:"htd"},"Registered"),l.a.createElement("td",{colSpan:"4",style:{textAlign:"left"},ref:"r",className:"dtd htd"})),l.a.createElement("hr",null),l.a.createElement("tr",null,l.a.createElement("td",{className:"htd"},"Account Type"),l.a.createElement("td",{colSpan:"4",style:{textAlign:"left"},ref:"t",className:"dtd htd"})),l.a.createElement("hr",null),l.a.createElement("tr",null,l.a.createElement("td",{className:"htd"},"Amount"),l.a.createElement("td",{colSpan:"4",style:{textAlign:"left"},ref:"b",className:"dtd htd"})))),l.a.createElement("br",null))}}]),t}(n.Component),w=a(7),j=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handletransaction=function(e,t){var n=[],l=new a.Transaction(t,"debit",e),c=localStorage.getItem("transactions");if(null===JSON.parse(c)){n.push(l);var r=JSON.stringify(n);localStorage.setItem("transactions",r)}else{var o=localStorage.getItem("transactions"),s=JSON.parse(o);s.push(l);var i=JSON.stringify(s);localStorage.setItem("transactions",i)}},a.state={id:""},a.withdraw=a.withdraw.bind(Object(w.a)(Object(w.a)(a))),a.getdetail=a.getdetail.bind(Object(w.a)(Object(w.a)(a)));var n=localStorage.getItem("detail"),l=JSON.parse(n)[0].id;return a.state={id:l},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getdetail",value:function(){var e=localStorage.getItem("id");return JSON.parse(e)}},{key:"Transaction",value:function(e,t,a){var n=1e10*Math.random();this.id=Math.round(n);var l=(new Date).toLocaleString();this.time=l,this.acc=e,this.type=t,this.amount=a}},{key:"withdraw",value:function(){var e=this.getdetail(),t=this.refs.amount.value;if(0===Number(t)||t<0)alert("You have withdrawn no amount.");else{var a=localStorage.getItem("detail"),n=JSON.parse(a),l=n[0].amount;if(Number(l)<t)alert("You have insufficient balance to withdraw");else{var c=n[0].amount-t;if(c<100)alert("You can't proceed.You must have 100 Rs in account");else{n[0].amount=c,localStorage.setItem("detail",JSON.stringify(n));var r=localStorage.getItem("accounts"),o=JSON.parse(r),s=n[0];o.splice(e,1,s);var i=JSON.stringify(o);localStorage.setItem("accounts",i),this.handletransaction(t,this.state.id)}}}}},{key:"render",value:function(){return l.a.createElement("div",{className:"withdraw_c"},l.a.createElement("div",null,l.a.createElement("p",null,"Withdraw from account")),l.a.createElement("span",null,"Amount to Withdraw"),l.a.createElement("input",{type:"number",ref:"amount"}),l.a.createElement("br",null),l.a.createElement("span",null,"Description(",l.a.createElement("small",null,"optional"),")"),l.a.createElement("input",{type:"text",placeholder:"description of transaction"}),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement(p.a,{to:"/accounts/detail",className:"green",onClick:this.withdraw},"withdraw"),l.a.createElement(p.a,{to:"/accounts/detail",className:"red"},"cancel")))}}]),t}(n.Component),I=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={id:0},a.handletransaction=function(e,t){var n=[],l=new a.Transaction(t,"credit",e),c=localStorage.getItem("transactions");if(null===JSON.parse(c)){n.push(l);var r=JSON.stringify(n);localStorage.setItem("transactions",r)}else{var o=localStorage.getItem("transactions"),s=JSON.parse(o);s.push(l);var i=JSON.stringify(s);localStorage.setItem("transactions",i)}},a.getdetail=a.getdetail.bind(Object(w.a)(Object(w.a)(a)));var n=localStorage.getItem("detail"),l=JSON.parse(n)[0].id;return a.state={id:l},a.deposit=a.deposit.bind(Object(w.a)(Object(w.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"Transaction",value:function(e,t,a){var n=1e10*Math.random();this.id=Math.round(n);var l=(new Date).toLocaleString();this.time=l,this.acc=e,this.type=t,this.amount=a}},{key:"getdetail",value:function(){var e=localStorage.getItem("id");return JSON.parse(e)}},{key:"deposit",value:function(){var e=this.getdetail(),t=this.refs.deposit.value;if(t>0||0===t)if(this.refs.deposit.validity.rangeUnderflow)alert("Please enter a valid amount.");else{var a=localStorage.getItem("detail"),n=JSON.parse(a),l=n[0].amount,c=Number(l)+Number(t);n[0].amount=c,localStorage.setItem("detail",JSON.stringify(n));var r=localStorage.getItem("accounts"),o=JSON.parse(r),s=n[0];o.splice(e,1,s);var i=JSON.stringify(o);localStorage.setItem("accounts",i),this.handletransaction(Number(t),this.state.id)}else alert("You deposited no amount")}},{key:"render",value:function(){return l.a.createElement("div",{className:"withdraw_c"},l.a.createElement("div",null,l.a.createElement("p",null,"deposit into account")),l.a.createElement("span",null,"Amount to deposit"),l.a.createElement("input",{type:"number",min:"1",ref:"deposit"}),l.a.createElement("br",null),l.a.createElement("span",null,"Description(",l.a.createElement("small",null,"optional"),")"),l.a.createElement("input",{type:"text",placeholder:"description of transaction"}),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement(p.a,{to:"/accounts/detail",className:"green",onClick:this.deposit},"Deposit"),l.a.createElement(p.a,{to:"/accounts/detail",className:"red"},"cancel")))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"copyright \xa9 2018. All rights Reserved."))}}]),t}(n.Component),A=(a(27),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement(h.a,{exact:!0,path:"/",component:v}),l.a.createElement(h.a,{exact:!0,path:"/accounts",component:b}),l.a.createElement(h.a,{exact:!0,path:"/accounts/detail",component:O}),l.a.createElement(h.a,{exact:!0,path:"/transactions/detail",component:y}),l.a.createElement(h.a,{exact:!0,path:"/accounts/withdraw",component:j}),l.a.createElement(h.a,{exact:!0,path:"/accounts/deposit",component:I}),l.a.createElement(h.a,{exact:!0,path:"/accounts/create",component:N}),l.a.createElement(h.a,{exact:!0,path:"/transactions",component:S}),l.a.createElement(k,null)))}}]),t}(n.Component)),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(l.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");J?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):T(t,e)})}}()}},[[17,2,1]]]);
//# sourceMappingURL=main.670374c5.chunk.js.map