(this.webpackJsonpchatting=this.webpackJsonpchatting||[]).push([[0],{19:function(e,t,a){e.exports=a(37)},24:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),o=a(16),l=a.n(o),r=(a(24),a(8)),i=a(9),c=a(12),m=a(11),u=(a(25),a(26),a(10)),d=a(17),h=a(18),g=a.n(h).a.initializeApp({apiKey:"AIzaSyCJZDLgFrz-QvEp4seljntGgUu525LHQaA",authDomain:"chatt-bc4e9.firebaseapp.com",databaseURL:"https://chatt-bc4e9.firebaseio.com",projectId:"chatt-bc4e9",storageBucket:"chatt-bc4e9.appspot.com",messagingSenderId:"847495222066",appId:"1:847495222066:web:297d007ba7e3ccb1793d2b"}),p=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).authListner=function(){g.auth().onAuthStateChanged((function(e){e?(console.log(e.email),n.setState({user:e})):n.setState({user:null})}))},n.componentDidMount=function(){n.authListner(),g.database().ref().child("messages").on("value",(function(e){if(console.log("msg snapshot loki vacham"),null!=e.val()){n.setState({chat:Object(d.a)({},e.val())}),console.log(n.state);var t=window.setInterval((function(){var e=document.getElementById("chatt");e.scrollTop=e.scrollHeight,window.clearInterval(t)}),1e3);n.forceUpdate()}}))},n.handleLogin=function(e){e.preventDefault(),""!=n.state.username&&""!=n.state.password&&g.auth().signInWithEmailAndPassword(n.state.username,n.state.password).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},n.addmsg=function(e){g.database().ref().child("messages").push(e,(function(e){e&&console.log(e)}))},n.handleKeyPress=function(e){if("Enter"===e.key){var t={username:n.state.user.email,message:n.state.message};n.addmsg(t),n.setState({message:""});var a=window.setInterval((function(){var e=document.getElementById("chatt");e.scrollTop=e.scrollHeight,window.clearInterval(a)}),1e3)}},n.sendmsg=function(e){var t={username:n.state.user.email,message:n.state.message};n.addmsg(t),n.setState({message:""});var a=window.setInterval((function(){var e=document.getElementById("chatt");e.scrollTop=e.scrollHeight,window.clearInterval(a)}),1e3)},n.handleChange=function(e){n.setState(Object(u.a)({},e.target.name,e.target.value)),console.log(n.state)},n.logout=function(){g.auth().signOut()},n.state={username:"",password:"",user:null,message:"",chat:[],scroll:"",loginpage:!0},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return null==this.state.user?s.a.createElement("div",null,s.a.createElement("form",{style:{width:"60%",marginLeft:"20%",marginTop:"2%"}},s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"email",style:{fontFamily:"Cursive"}},"Email address:"),s.a.createElement("input",{type:"email",name:"username",onChange:this.handleChange,class:"form-control",id:"email",required:!0})),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"pwd",style:{fontFamily:"Cursive"}},"Password:"),s.a.createElement("input",{type:"password",name:"password",onChange:this.handleChange,class:"form-control",id:"pwd",required:!0})),s.a.createElement("div",null,s.a.createElement("button",{style:{marginLeft:"10px"},type:"submit",class:"btn btn-primary",onClick:this.handleLogin},"Signup")))):s.a.createElement("div",{style:{width:"100%",height:"100vh",color:"black"}},s.a.createElement("div",null,s.a.createElement("header",{style:{color:"white",backgroundColor:"green",width:"100%",height:"60px",display:"flex"}},s.a.createElement("h1",null,"NITHIN CHAT"),s.a.createElement("button",{style:{marginLeft:"auto"},onClick:this.logout,class:"btn btn-danger"},"Logout"))),s.a.createElement("div",{id:"chatt",style:{marginLeft:"50px",height:"80%",overflow:"scroll",scrollBehavior:"smooth"}},Object.keys(this.state.chat).map((function(t){return e.state.chat[t].username==e.state.user.email?s.a.createElement("div",{key:t,style:{display:"block",marginLeft:"30%",position:"relative",float:"right",padding:"20px",marginBottom:"5px",backgroundColor:"blue",flexWrap:"wrap",width:"50%",borderRadius:"100px"}},s.a.createElement("small",{style:{color:"white"}},e.state.chat[t].username),s.a.createElement("h5",{style:{color:"white"}},e.state.chat[t].message)):s.a.createElement("div",{key:t,style:{display:"block",marginRight:"30%",position:"relative",float:"left",padding:"20px",marginBottom:"5px",backgroundColor:"black",flexWrap:"wrap",width:"50%",borderRadius:"100px"}},s.a.createElement("small",{style:{color:"white"}},e.state.chat[t].username),s.a.createElement("h5",{style:{color:"white"}},e.state.chat[t].message))}))),s.a.createElement("footer",{style:{marginLeft:"50px"}},s.a.createElement("input",{style:{width:"80%",float:"left"},value:this.state.message,onKeyPress:this.handleKeyPress,type:"text",name:"message",onChange:this.handleChange,class:"form-control",required:!0}),s.a.createElement("button",{class:"btn btn-primary",onClick:this.sendmsg},"Send")))}}]),a}(s.a.Component),f=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(p,null))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.5bd3f35d.chunk.js.map