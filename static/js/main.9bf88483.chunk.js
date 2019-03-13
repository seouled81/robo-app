(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(33)},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(17),c=n.n(a),i=n(7),s=n(11),l=n(19),u=n(20),h=n(2),d=n(3),f=n(5),p=n(4),b=n(6),m=function(e){var t=e.id,n=e.name,o=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=300x300"),alt:"robot img"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,o)))},g=function(e){var t=e.robots.map(function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email})});return r.a.createElement("div",null,t)},E=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robot",onChange:t}))},v=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",borderTop:"1px solid #333",height:"500px"}},e.children)},O=function(e){function t(){var e,n;Object(h.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops that is not good."):this.props.children}}]),t}(o.Component),w=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"f2"},"RoboFriends"))}}]),t}(o.Component),y=(n(30),function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.isPending,o=e.error,a=e.searchField,c=e.onSearchChange,i=t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return n?r.a.createElement("h1",null,"Loading"):o?r.a.createElement("h1",{style:{color:"white",fontFamily:"sans-serif",fontWeight:"300",fontSize:"4rem"}},"Ooops! Something went wrong. ".concat(o.message)):r.a.createElement("div",{className:"tc"},r.a.createElement(w,null),r.a.createElement(E,{searchChange:c}),r.a.createElement(v,null,r.a.createElement(O,null,r.a.createElement(g,{robots:i}))))}}]),t}(o.Component)),j=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(y),R=n(9),S={searchField:""},C={robots:[],isPending:!1,error:""},_=(n(31),n(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var N=Object(l.createLogger)(),T=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(R.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(R.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(R.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(R.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),F=Object(i.d)(T,Object(i.a)(u.a,N)),L=r.a.createElement(s.a,{store:F},r.a.createElement(j,null));c.a.render(L,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robo-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robo-app","/service-worker.js");_?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):k(e)})}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.9bf88483.chunk.js.map