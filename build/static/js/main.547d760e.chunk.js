(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{305:function(e,t,n){e.exports=n(570)},310:function(e,t,n){},311:function(e,t,n){},328:function(e,t,n){},541:function(e,t){},560:function(e,t){},562:function(e,t){},570:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),l=(n(310),n(311),n(81)),i=n(82),s=n(88),u=n(87),m=n(96),d=n.n(m),p=(n(121),n(328),n(573)),h=n(101),f=n(579),g=n(583),v=n(584),E=n(585),b=n(586),y=n(92),k=n(41),I=n(119),O=n(63),j=n(576);var w=function(e){return r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(I.a,{gutter:16},r.a.createElement(O.a,{span:12},r.a.createElement(j.a,{title:"Schedule",bordered:!0,style:{backgroundColor:e.c2}},"You have ",e.box1," lectures scheduled")),r.a.createElement(O.a,{span:12},r.a.createElement(j.a,{title:"Achievement",bordered:!0,style:{backgroundColor:e.c3}},"You have completed 0 Lectures"))))},C=n(302),S=n(578),x=n(298),T=n(580),N=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={tags:[],inputVisible:!1,inputValue:""},e.handleClose=function(t){var n=e.state.tags.filter((function(e){return e!==t}));console.log(n),e.setState({tags:n})},e.showInput=function(){e.setState({inputVisible:!0},(function(){return e.input.focus()}))},e.handleInputChange=function(t){e.setState({inputValue:t.target.value})},e.handleInputConfirm=function(){var t=e.state.inputValue,n=e.state.tags;t&&-1===n.indexOf(t)&&(n=[].concat(Object(y.a)(n),[t]),e.props.parentCallback(t)),console.log(n),e.setState({tags:n,inputVisible:!1,inputValue:""})},e.saveInputRef=function(t){e.input=t},e.forMap=function(t){var n=r.a.createElement(C.a,{closable:!0,onClose:function(n){n.preventDefault(),e.handleClose(t)}},t);return r.a.createElement("span",{key:t,style:{display:"inline-block"}},n)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.tags,n=e.inputVisible,a=e.inputValue,c=t.map(this.forMap);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginBottom:16}},n&&r.a.createElement(S.a,{ref:this.saveInputRef,type:"text",size:"small",style:{width:78},value:a,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!n&&r.a.createElement(C.a,{onClick:this.showInput,className:"site-tag-plus"},r.a.createElement(T.a,null)," Add frineds"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(x.a,{enter:{scale:.8,opacity:0,type:"from",duration:100,onComplete:function(e){e.target.style=""}},leave:{opacity:0,width:0,scale:0,duration:200},appear:!1},c)))}}]),n}(r.a.Component),D=d.a.create({baseURL:"https://backendteamlearning.herokuapp.com/"}),B=n(127),V=n(571),P=n(572),R=n(45),A=n(577),L=n(575),H=n(209),M=n(574),_=V.a.RangePicker;var z=function(e){var t=[{title:"Course Name",dataIndex:"courseName",key:"courseName",render:function(e){return r.a.createElement("p",null,e)}},{title:"Date",dataIndex:"date",key:"date"},{title:"Time",dataIndex:"time",key:"time",render:function(e){return r.a.createElement("p",null,"".concat(e[0],"-").concat(e[1]))}},{title:"Participants",key:"participants",dataIndex:"participants",render:function(e){return r.a.createElement(r.a.Fragment,null,e.map((function(e){return r.a.createElement(C.a,{color:"geekblue",key:e},e)})))}},{title:"Action",key:"action",dataIndex:"courseID",render:function(e){return r.a.createElement(P.a,{size:"middle"},r.a.createElement(B.b,{to:"/room/".concat(e)}," Enter Room"))}},{title:"Delete",key:"delete",dataIndex:"key",render:function(e){return r.a.createElement(P.a,{size:"middle"},r.a.createElement("button",{onClick:function(){return q(e)}}," Delete "))}}],n=Object(a.useState)([]),c=Object(k.a)(n,2),o=c[0],l=c[1],i=Object(a.useState)(!1),s=Object(k.a)(i,2),u=s[0],m=s[1],d=Object(a.useState)(!1),p=Object(k.a)(d,2),h=p[0],f=(p[1],Object(a.useState)("")),g=Object(k.a)(f,2),v=g[0],E=g[1],b=Object(a.useState)(""),I=Object(k.a)(b,2),O=I[0],j=I[1],x=Object(a.useState)([]),V=Object(k.a)(x,2),z=V[0],F=V[1],J=Object(a.useState)([]),U=Object(k.a)(J,2),Y=U[0],W=U[1];Object(a.useEffect)((function(){var e=sessionStorage.getItem("username"),t=sessionStorage.getItem("access_token");D.get("user/".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){console.log(e.data);var t=e.data.courses.map((function(e,t){return{key:t,courseName:e.courseName,date:e.date,time:e.time,participants:e.participants,courseID:e._id}}));l(t)}))}),[]);var q=function(e){var t=Object(y.a)(o),n=t[e].courseID,a=sessionStorage.getItem("username");console.log(t[e].courseID),l(t.filter((function(t){return t.key!==e}))),D.delete("course/".concat(a,"/").concat(n)).then((function(e){console.log(e.data)}))};return r.a.createElement("div",null,r.a.createElement(w,{box1:o.length,c2:e.c2,c3:e.c3}),r.a.createElement("br",null),r.a.createElement(R.a,{type:"dashed",onClick:function(){return m(!0)},style:{width:"60%"}},r.a.createElement(T.a,null)," Add Course"),r.a.createElement(A.a,{title:"Schedule new course",visible:u,onOk:function(){var e=sessionStorage.getItem("username"),t={courseName:v,date:O,time:z,participants:Y,host:e};console.log(t),D.post("course/add",t).then((function(e){200===e.status?function(){var e=sessionStorage.getItem("username"),t=sessionStorage.getItem("access_token");D.get("user/".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){console.log(e.data);var t=e.data.courses.map((function(e,t){return{key:t,courseName:e.courseName,date:e.date,time:e.time,participants:e.participants,courseID:e._id}}));l(t)}))}():alert("submit error")})),m(!1),j(""),F([]),W([]),E("")},confirmLoading:h,onCancel:function(){m(!1),j(""),F([]),W([]),E("")}},r.a.createElement(L.a,{labelCol:{span:6},wrapperCol:{span:14},layout:"horizontal"},r.a.createElement(L.a.Item,{label:"CourseName"},r.a.createElement(S.a,{onChange:function(e){E(e.currentTarget.value)},value:v})),r.a.createElement(L.a.Item,{label:"Select Date"},r.a.createElement(H.a,{onChange:function(e,t){j(t)}})),r.a.createElement(L.a.Item,{label:"Select Time"},r.a.createElement(_,{onChange:function(e,t){console.log(t[0]+"-"+t[1]),F(t)}})),r.a.createElement(L.a.Item,{label:"Invite Friends"},r.a.createElement(N,{parentCallback:function(e){W([].concat(Object(y.a)(Y),[e]))}})))),r.a.createElement("div",{style:{width:"80%",margin:"3rem auto"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null," Lecture Schedule")),r.a.createElement("br",null),r.a.createElement(M.a,{columns:t,dataSource:o})))},F=n(581),J=n(582),U=(j.a.Meta,function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={invitations:[]},e}return Object(i.a)(n,[{key:"componentWillMount",value:function(){var e=this,t=sessionStorage.getItem("username"),n=sessionStorage.getItem("access_token");D.get("user/".concat(t),{headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){console.log(t.data.mailBox);var n=t.data.mailBox.map((function(e,t){return{key:t,_id:e._id,courseName:e.courseName,date:e.date,time:e.time,participants:e.participants,sendById:e.sentByID,courseID:e.courseID}}));e.setState({invitations:n})}))}},{key:"HandleDelete",value:function(e,t){var n=this;D.delete("/mailBox/".concat(e)).then((function(e){var a=Object(y.a)(n.state.invitations);a.splice(t,1),n.setState({invitations:a}),n.props.history.push("/dashboard")})).catch((function(e){console.log(e)}))}},{key:"HandleSubmit",value:function(e,t){var n=this;D.get("/mailBox/accept/".concat(e)).then((function(e){var a=Object(y.a)(n.state.invitations);a.splice(t,1),n.setState({invitations:a}),n.props.history.push("/dashboard")})).catch((function(e){console.log(e)}))}},{key:"renderCards",value:function(e){var t=this;e.map((function(e,n){return r.a.createElement(O.a,{span:6},r.a.createElement(j.a,{title:"".concat(e.sendById," invitation"),style:{width:300},hoverable:!0,actions:[r.a.createElement(F.a,{onClick:t.HandleSubmit(e._id,e.key),key:"Join"}),r.a.createElement(J.a,{onClick:t.HandleDelete(e._id,e.key),key:"Decline"})]},r.a.createElement("p",null,"".concat(e.sendById," invites you to join the studying on course ").concat(e.courseName,"\n                  The meeting will start at ").concat(e.time[0],"-").concat(e.time[1]," on ").concat(e.date))))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{maxWidth:"700px",margin:"2rem auto"}},r.a.createElement("br",null),0===this.state.invitations.length?r.a.createElement("div",{style:{display:"flex",height:"300px",justifyContent:"center",alignItems:"center"}},r.a.createElement("h2",null,"No post yet...")):r.a.createElement("div",null,r.a.createElement(I.a,null,this.state.invitations.map((function(t,n){return r.a.createElement(O.a,{span:12},r.a.createElement(j.a,{title:"".concat(t.sendById," invitation"),style:{width:300},hoverable:!0,actions:[r.a.createElement(F.a,{onClick:function(){return e.HandleSubmit(t._id,t.key)},key:"Join"}),r.a.createElement(J.a,{onClick:function(){return e.HandleDelete(t._id,t.key)},key:"Decline"})]},r.a.createElement("p",null,"".concat(t.sendById," invites you to join the studying on course ").concat(t.courseName,"\n                          The meeting will start at ").concat(t.time[0],"-").concat(t.time[1]," on ").concat(t.date))))})))))}}]),n}(r.a.Component)),Y=[{title:"Course Name",dataIndex:"name",key:"name",render:function(e){return r.a.createElement("p",null,e)}},{videolink:"course video",dataIndex:"videos",key:"videos",render:function(e){return r.a.createElement("p",null,e)}},{title:"Participants",key:"participants",dataIndex:"participants",render:function(e){return r.a.createElement(r.a.Fragment,null,e.map((function(e){return r.a.createElement(C.a,{color:"geekblue",key:e},e)})))}}],W=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={history:[]},e}return Object(i.a)(n,[{key:"componentWillMount",value:function(){this.setState({})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M.a,{columns:Y,dataSource:this.state.history}))}}]),n}(r.a.Component),q=(p.a.Header,p.a.Sider),G=p.a.Content,K=h.a.SubMenu,$=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!1,content:"1",theme:"dark",color:"#003366",color1:"black",color2:"#188fffd0",color3:"#f1855ad0"},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e.switchToDashboard=function(){e.setState({content:"1"}),console.log(e.state.content)},e.switchToHistory=function(){e.setState({content:"2"})},e.switchToMessage=function(){e.setState({content:"3"})},e.changeTheme=function(){console.log("clocked");d.a.post("http://colormind.io/api/",{model:"default"}).then((function(t){console.log(t.data.result);var n=t.data.result;e.setState({theme:"light",color:"rgb(".concat(n[0][0],",").concat(n[0][1],",").concat(n[0][2],")"),color1:"rgb(".concat(n[1][0],",").concat(n[1][1],",").concat(n[1][2],")"),color2:"rgb(".concat(n[2][0],",").concat(n[2][1],",").concat(n[2][2],")"),color3:"rgb(".concat(n[3][0],",").concat(n[3][1],",").concat(n[3][2],")")})}),(function(e){console.log(e)}))},e.logout=function(){sessionStorage.removeItem("username"),sessionStorage.removeItem("access_token"),e.props.history.push("/")},e}return Object(i.a)(n,[{key:"renderSwitch",value:function(e,t,n,a){switch(e){case"1":return r.a.createElement(z,{c1:t,c2:n,c3:a});case"2":return r.a.createElement(W,{c1:t,c2:n,c3:a});case"3":return r.a.createElement(U,{c1:t,c2:n,c3:a})}}},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(q,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},r.a.createElement(h.a,{theme:this.state.theme,mode:"inline",defaultSelectedKeys:["1"],style:{height:"100%",borderRight:0}},r.a.createElement(h.a.Item,{key:"1",icon:r.a.createElement(g.a,null),onClick:this.switchToDashboard},"Course Dashboard"),r.a.createElement(h.a.Item,{key:"2",icon:r.a.createElement(v.a,null),onClick:this.switchToHistory},"History"),r.a.createElement(h.a.Item,{key:"3",icon:r.a.createElement(f.a,{count:1,dot:!0}," ",r.a.createElement(E.a,null)),onClick:this.switchToMessage},"Message"),r.a.createElement(h.a.Item,{key:"4",icon:r.a.createElement(g.a,null),onClick:this.changeTheme},"Change Theme"),r.a.createElement(K,{key:"sub1",icon:r.a.createElement(b.a,null),title:"User"},r.a.createElement(h.a.Item,{key:"1",onClick:this.logout},"Log out")))),r.a.createElement(p.a,{className:"site-layout"},r.a.createElement(G,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280,backgroundColor:this.state.color,color:this.state.color1}},this.renderSwitch(this.state.content,this.state.color1,this.state.color2,this.state.color3))))}}]),n}(r.a.Component),Q=n(39),X=n(135),Z=n(293),ee=n.n(Z),te=n(208),ne=n.n(te),ae=n(136);function re(){var e=Object(X.a)(["\n  height: 50%;\n  width: 100%;\n  border: 1px solid black;\n"]);return re=function(){return e},e}function ce(){var e=Object(X.a)(["\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ce=function(){return e},e}function oe(){var e=Object(X.a)(["\n  width: 40%;\n  height: 100%;\n"]);return oe=function(){return e},e}function le(){var e=Object(X.a)(["\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  flex-direction: row;\n"]);return le=function(){return e},e}var ie=ae.a.div(le()),se=ae.a.div(oe()),ue=ae.a.div(ce()),me=ae.a.video(re()),de=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)(),c=Object(a.useRef)(),o=Object(a.useRef)(),l=Object(a.useRef)(),i=Object(a.useState)(""),s=Object(k.a)(i,2),u=s[0],m=s[1],p=Object(a.useState)(""),h=Object(k.a)(p,2),f=h[0],g=h[1];function v(){var e=new window.EmbedApi("player",{width:"640",height:"390",serverName:"uncch.hosted.panopto.com",sessionId:u,videoParams:{interactivity:"none",showtitle:"false"},events:{onIframeReady:E,onReady:b,onStateChange:y}});l.current=e}function E(){l.current.loadVideo()}function b(){l.current.seekTo(100)}function y(e){l.current.setVolume(.3),l.current.setPlaybackRate(2)}function I(){var e=new window.YT.Player("player",{height:"390",width:"640",videoId:u});l.current=e}function O(){try{o.current.send(JSON.stringify({type:"pause"}))}catch(e){}l.current.pauseVideo()}function j(){try{o.current.send(JSON.stringify({type:"play"}))}catch(e){}l.current.playVideo()}function w(){document.getElementsByTagName("input")[0].remove(),document.getElementById("loadVideo").remove(),"y"==f?function(){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),window.onYouTubeIframeAPIReady=I}():function(){var e=document.getElementsByTagName("script")[0],t=document.createElement("script");t.src="https://developers.panopto.com/scripts/embedapi.min.js",e.parentNode.insertBefore(t,e),window.onPanoptoEmbedApiReady=v}();var e=document.createElement("button");e.innerHTML="Play Video",e.addEventListener("click",j);var t=document.createElement("button");t.innerHTML="Stop Video",t.addEventListener("click",O);var n=document.getElementById("controls");n.appendChild(e),n.appendChild(t),d.a.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=".concat(u,"&key=").concat("AIzaSyBN-gs2grz1q7pH3okpiGRUnFwn9LRMS34")).then((function(e){console.log(e.data);var t=e.data.items[0].snippet.title,n=e.data.items[0].snippet.description;document.getElementById("videoTitle").innerHTML=t,document.getElementById("videoDescription").innerHTML=n})).catch((function(e){return console.log(e)}))}function C(e){c.current.srcObject=e}function S(e){var t=JSON.parse(e);"newVideo"===t.type?(g(t.host),m(t.data)):"pause"===t.type?l.current.pauseVideo():l.current.playVideo()}return Object(a.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(a){n.current.srcObject=a,t.current=ee.a.connect("https://backendteamlearning.herokuapp.com/",{"sync disconnect on unload":!0}),t.current.emit("join room",e.match.params.roomID),t.current.on("other user",(function(e){e&&(o.current=function(e,n,a){var r=new ne.a({initiator:!0,trickle:!1,stream:a});return r.on("signal",(function(a){var r={partnerID:e,callerID:n,signal:a};t.current.emit("call partner",r)})),r.on("stream",C),r.on("data",S),r}(e,t.current.id,a))})),t.current.on("caller signal",(function(e){o.current=function(e,n,a){var r=new ne.a({initiator:!1,trickle:!1,stream:a});return r.on("signal",(function(e){var a={callerID:n,signal:e};t.current.emit("accept call",a)})),r.on("stream",C),r.on("data",S),r.signal(e),r}(e.signal,e.callerID,a)})),t.current.on("callee signal",(function(e){o.current.signal(e)})),t.current.on("room full",(function(){alert("room is full")}))}))}),[e.match.params.roomID]),Object(a.useEffect)((function(){"y"==f?(document.getElementById("YT").style.backgroundColor="#666666",document.getElementById("PT").style.backgroundColor="#668cff"):"n"==f&&(document.getElementById("YT").style.backgroundColor="#668cff",document.getElementById("PT").style.backgroundColor="#666666")}),[f]),r.a.createElement(ie,null,r.a.createElement(se,null,r.a.createElement(me,{muted:!0,autoPlay:!0,ref:n}),r.a.createElement(me,{muted:!0,autoPlay:!0,ref:c})),r.a.createElement(ue,null,r.a.createElement("div",{id:"host"},r.a.createElement("button",{id:"PT",backgroundColor:"#668cff",onClick:function(e){g("n")}},"Panopto"),r.a.createElement("button",{id:"YT",backgroundColor:"#668cff",onClick:function(e){g("y")}},"Youtube")),r.a.createElement("div",{id:"player"}),r.a.createElement("div",{id:"controls"},r.a.createElement("input",{type:"text",placeholder:"video link",value:u,onChange:function(e){return m(e.target.value)}}),r.a.createElement("button",{id:"loadVideo",onClick:function(){if(""!=f)if(""!=u){try{o.current.send(JSON.stringify({type:"newVideo",host:f,data:u}))}catch(e){}w()}else alert("please upload video id");else alert("please select video player first")}},"Load video")),r.a.createElement("div",null,r.a.createElement("h3",{id:"videoTitle"}),r.a.createElement("br",null),r.a.createElement("p",{id:"videoDescription"}))))};var pe=function(e){var t=Object(a.useState)(e),n=Object(k.a)(t,2),r=n[0],c=n[1];return{value:r,onChange:function(e){c(e.target.value)}}},he=function(e){var t=pe(""),n=pe(""),c=Object(a.useState)(null),o=Object(k.a)(c,2),l=o[0],i=o[1],s=Object(a.useState)(!1),u=Object(k.a)(s,2);return u[0],u[1],r.a.createElement("div",null,"Login",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,"Username",r.a.createElement("br",null),r.a.createElement("input",Object.assign({type:"text"},t,{autoComplete:"new-password"}))),r.a.createElement("div",{style:{marginTop:15}},"Password",r.a.createElement("br",null),r.a.createElement("input",Object.assign({type:"password"},n,{autoComplete:"new-password"}))),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("small",{style:{color:"red"}},l),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("input",{type:"button",value:"Login",onClick:function(){console.log(t.value),D.post("user/login",{userName:t.value,userPassword:n.value}).then((function(n){sessionStorage.setItem("username",t.value),sessionStorage.setItem("access_token",n.data.accessToken),e.history.push("/dashboard")})).catch((function(e){i("Login Failed")}))}}),r.a.createElement("br",null),r.a.createElement("a",{href:"/register"},"register now!"))};var fe=function(e){var t=Object(a.useState)(e),n=Object(k.a)(t,2),r=n[0],c=n[1];return{value:r,onChange:function(e){c(e.target.value)}}},ge=function(e){var t=fe(""),n=fe(""),c=fe(""),o=Object(a.useState)(null),l=Object(k.a)(o,2),i=l[0],s=l[1],u=Object(a.useState)(!1),m=Object(k.a)(u,2),d=m[0];return m[1],r.a.createElement("div",null,"Sign up",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,"Username",r.a.createElement("br",null),r.a.createElement("input",Object.assign({type:"text"},t,{autoComplete:"new-password"}))),r.a.createElement("div",{style:{marginTop:15}},"Email",r.a.createElement("br",null),r.a.createElement("input",Object.assign({type:"email"},c,{autoComplete:"new-email"}))),r.a.createElement("div",{style:{marginTop:15}},"Password",r.a.createElement("br",null),r.a.createElement("input",Object.assign({type:"password"},n,{autoComplete:"new-password"}))),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("small",{style:{color:"red"}},i),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("input",{type:"button",value:d?"Loading...":"Sign Up",onClick:function(){console.log(t.value),D.post("user/register",{userName:t.value,userEmail:c.value,userPassword:n.value}).then((function(t){e.history.push("/")})).catch((function(e){return s("Register Failed. Username or email already exist")}))},disabled:d}),r.a.createElement("br",null))};function ve(){return r.a.createElement("div",{className:"App"},r.a.createElement(B.a,null,r.a.createElement(Q.c,null,r.a.createElement(Q.a,{exact:!0,path:"/",component:he}),r.a.createElement(Q.a,{exact:!0,path:"/register",component:ge}),r.a.createElement(Q.a,{exact:!0,path:"/dashboard",component:$}),r.a.createElement(Q.a,{exact:!0,path:"/room/:roomID",component:de}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[305,1,2]]]);
//# sourceMappingURL=main.547d760e.chunk.js.map