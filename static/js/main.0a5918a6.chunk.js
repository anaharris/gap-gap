(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{218:function(e,t,n){e.exports=n.p+"static/media/login-logo.a9784e18.png"},231:function(e,t,n){e.exports=n.p+"static/media/signup-logo.6977c84d.png"},232:function(e,t,n){e.exports=n.p+"static/media/welcome.7d9b1d66.gif"},253:function(e,t,n){e.exports=n(428)},258:function(e,t,n){},428:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(61),c=n.n(r),i=(n(258),n(15)),l=n(16),s=n(18),u=n(17),p=n(19),m=n(454),d=n(440),h=n(448),f=n(453),E=n(154),g=n.n(E),v=n(214),b=n(99),O=n.n(b);var C=function(e){return function(t){function n(e){var t;return Object(i.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={loading:!0},t}return Object(p.a)(n,t),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark(function e(){var t=this;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{setTimeout(function(){t.setState({loading:!1})},2e3)}catch(n){console.log(n),this.setState({loading:!1})}case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?o.a.createElement("div",{id:"loading-background"},o.a.createElement("img",{id:"loading-logo",src:O.a,alt:"GapGap logo"})):o.a.createElement(e,this.props)}}]),n}(a.Component)},y=n(438),j=n(452),S=n(429),k=n(441),w=n(451),_=n(446),N=n(445),D=n(20),A=n(216),T=n.n(A),B=n(46),I=n(243),M=n(151),R=n(64),L=Object(B.c)({messageInput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":return console.log("sent",t.messageInput),t.messageInput;default:return e}},userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGED_IN":return t.userData;case"LOGGED_OUT":return R.expire("token"),null;case"CHECKED_USER":return t.userData;case"NEW_CONVERSATION":console.log(t);var n=e.conversations.slice();return n.push(t.conversation),Object(M.a)({},e,{conversations:n});default:return e}},selectedConversation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHED_CONVERSATION":return t.selectedConversation;case"RECEIVE_MESSAGE":console.log("received",t.message);var n=e.messages.slice();return n.push(t.message),Object(M.a)({},e,{messages:n});case"ADDED_BOT_TO_CONVERSATION":var a=e.bots.slice();return a.push(t.bot),Object(M.a)({},e,{bots:a});case"HOMEPAGE":return null;default:return e}},allUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHED_ALL_USERS":return t.allUsers;default:return e}},allBots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHED_ALL_BOTS":return t.bots;case"CREATED_NEW_BOT":return[].concat(Object(I.a)(e),[t.bot]);default:return e}},conversationModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"OPEN_NEW_CONVERSATION":return!0;case"CLOSE_NEW_CONVERSATION":return!1;default:return e}},newBotModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"OPEN_NEW_BOT":return!0;case"CLOSE_NEW_BOT":return!1;default:return e}},profileModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"OPEN_PROFILE_MODAL":return!0;case"CLOSE_PROFILE_MODAL":return!1;default:return e}}}),P=n(217),U=Object(B.e)(L,Object(B.d)(Object(B.a)(P.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),F=n(64),z="https://gap-gap.herokuapp.com",x=function(){return function(e){var t=F.get("token"),n="ws:".concat(z,"/cable"),a={};a.cable=T.a.createConsumer("".concat(n,"?token=").concat(t));var o=a.cable.subscriptions.create({channel:"MessagesChannel",conversation_id:U.getState().selectedConversation},{connected:function(){console.log("connected to messages stream")},disconnected:function(){console.log("disconnected from messages stream")},received:function(t){e({type:"RECEIVE_MESSAGE",message:t})}});console.log("socket"),a.conversations=[o],window.App=a}},G=n(218),H=n.n(G),W=n(64),V=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.body.style.background="#F7C3B6"}},{key:"render",value:function(){var e=this;return W.get("token")&&this.props.currentUser?o.a.createElement(h.a,{to:"/conversations"}):o.a.createElement("div",{className:"padded-top-large"},o.a.createElement(j.a,{columns:4,centered:!0,style:{paddingTop:"5%"}},o.a.createElement(j.a.Row,{verticalAlign:"top"},o.a.createElement(j.a.Column,null,o.a.createElement(S.a,{size:"huge",floated:"right",src:H.a}))),o.a.createElement(j.a.Row,{verticalAlign:"bottom"},o.a.createElement(j.a.Column,null,o.a.createElement(k.a,{size:"big",onSubmit:function(t){e.props.onSubmit(t.target.username.value,t.target.password.value)}},o.a.createElement(w.a,{stacked:!0},o.a.createElement(k.a.Input,{name:"username",fluid:!0,icon:"user",iconPosition:"left",placeholder:"Username"}),o.a.createElement(k.a.Input,{name:"password",fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",style:{background:"#fcefec"}}),o.a.createElement(_.a,{style:{backgroundColor:"#37525F",color:"#CEDEDC"},fluid:!0,size:"large",type:"submit"},"Login"))),o.a.createElement(N.a,{style:{textAlign:"center"}},"New to us? ",o.a.createElement(y.a,{style:{color:"#37525F"},to:"/signup"},"Sign up"))))))}}]),t}(a.Component),J=Object(D.b)(function(e){return{currentUser:e.userData}},function(e){return{onSubmit:function(t,n){e(function(e,t){return function(n){var a="".concat(z,"/login"),o={user:{username:e,password:t}};fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(function(e){return e.json()}).then(function(e){e.error?alert(e.message):(F.set("token",e.jwt),n({type:"LOGGED_IN",userData:e.user}))})}}(t,n))}}})(V),K=n(231),X=n.n(K),Y=n(64),$=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.body.style.background="#37525F"}},{key:"render",value:function(){var e=this;return Y.get("token")&&this.props.currentUser?o.a.createElement(h.a,{to:"/conversations"}):o.a.createElement(j.a,{columns:4,centered:!0,style:{paddingTop:"5%"}},o.a.createElement(j.a.Row,{verticalAlign:"top"},o.a.createElement(j.a.Column,null,o.a.createElement(S.a,{size:"huge",floated:"right",src:X.a}))),o.a.createElement(j.a.Row,{verticalAlign:"bottom"},o.a.createElement(j.a.Column,null,o.a.createElement(k.a,{size:"large",onSubmit:function(t){e.props.onSubmit(t.target.username.value,t.target.password.value)}},o.a.createElement(w.a,{stacked:!0},o.a.createElement(k.a.Input,{name:"username",fluid:!0,icon:"user",iconPosition:"left",placeholder:"Username"}),o.a.createElement(k.a.Input,{name:"name",fluid:!0,icon:"user outline",iconPosition:"left",placeholder:"Display name"}),o.a.createElement(k.a.Input,{name:"avatar",fluid:!0,icon:"photo",iconPosition:"left",placeholder:"Avatar URL"}),o.a.createElement(k.a.Input,{name:"password",fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password"}),o.a.createElement(_.a,{style:{backgroundColor:"#F7C3B6",color:"#37525F"},fluid:!0,size:"large",type:"submit"},"Sign in"))),o.a.createElement(N.a,{style:{textAlign:"center"}},"Already a member? ",o.a.createElement(y.a,{style:{color:"#37525F"},to:"/login"},"Log in")))))}}]),t}(a.Component),q=n(443),Q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(q.a.Item,{style:{marginBottom:"2px"}},o.a.createElement(S.a,{avatar:!0,src:this.props.message.avatar}),o.a.createElement(q.a.Content,null,o.a.createElement(q.a.Header,null,this.props.message.user_name),o.a.createElement(q.a.Description,null,this.props.message.content)))}}]),t}(a.Component),Z=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={text:""},n.onChange=function(e){n.setState({text:e.target.value})},n.onSubmit=function(e){e.preventDefault()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(k.a,{onSubmit:this.onSubmit,style:{backgroundColor:"#f9dcd6"}},o.a.createElement(k.a.Input,{placeholder:"start typing...",style:{backgroundColor:"#fcefec"},onChange:this.onChange,onKeyDown:function(t){13===t.keyCode&&(e.props.onKeyDown(t.target.value),e.setState({text:""}))},value:this.state.text}))}}]),t}(a.Component),ee=Object(D.b)(null,function(e){return{onKeyDown:function(t){e(function(e){return function(t){window.App.conversations[0].send({content:e,conversation_id:U.getState().selectedConversation.id}),t(function(e){return{type:"SEND_MESSAGE",messageInput:e}}(e))}}(t))}}})(Z),te=n(232),ne=n.n(te),ae=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.selectedConversation?o.a.createElement(j.a.Column,{width:8},o.a.createElement(w.a,{style:{height:"140%",overflowY:"scroll"}},o.a.createElement(q.a,null,this.props.selectedConversation.messages.map(function(e){return o.a.createElement(Q,{key:e.id,message:e})}))),o.a.createElement(w.a,null,o.a.createElement(ee,null))):o.a.createElement(j.a.Column,{width:8},o.a.createElement(w.a,{style:{height:"120%"}},o.a.createElement(S.a,{src:ne.a,fluid:!0})))}}]),t}(a.Component),oe=Object(D.b)(function(e){return{selectedConversation:e.selectedConversation,currentUser:e.userData}})(ae),re=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(w.a,{onClick:function(){return e.props.onClick(e.props.conversation.id)}},this.props.conversation.topic)}}]),t}(a.Component),ce=Object(D.b)(null,function(e){return{onClick:function(t){e(function(e){return function(t){fetch("".concat(z,"/conversations/").concat(e)).then(function(e){return e.json()}).then(function(e){t({type:"FETCHED_CONVERSATION",selectedConversation:e})})}}(t))}}})(re),ie=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.createSocket()}},{key:"render",value:function(){return o.a.createElement(j.a.Column,{width:4},this.props.conversations?this.props.conversations.map(function(e){return o.a.createElement(ce,{key:e.id,conversation:e})}):null)}}]),t}(a.Component),le=Object(D.b)(function(e){return{conversations:e.userData.conversations}},function(e){return{createSocket:function(){e(x())}}})(ie),se=n(442),ue=n(444),pe=n(449),me=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={bot:n.props.bot,open:!1},n.onButtonClick=function(){var e={bot_id:n.state.bot.id,conversation_id:n.props.selectedConversation.id};n.props.addingBot(e),n.setState({open:!1})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(se.a,{size:"small",open:this.state.open,trigger:o.a.createElement(ue.a.Item,{onClick:function(){return e.setState({open:!0})}},this.props.bot.name)},o.a.createElement(se.a.Header,null,this.props.bot.name),o.a.createElement(se.a.Content,{image:!0},o.a.createElement(S.a,{wrapped:!0,size:"medium",src:this.props.bot.avatar}),o.a.createElement(se.a.Description,null,o.a.createElement(pe.a,null,"Trigger:"),o.a.createElement("p",null,"/",this.props.bot.trigger),o.a.createElement(pe.a,null,"Response:"),o.a.createElement("p",null,this.props.bot.response))),o.a.createElement(se.a.Actions,null,o.a.createElement(_.a,{style:{backgroundColor:"#37525F",color:"#CEDEDC"},onClick:function(){return e.setState({open:!1})},size:"small"}," Cancel "),o.a.createElement(_.a,{style:{backgroundColor:"#37525F",color:"#CEDEDC"},onClick:function(){return e.onButtonClick()},size:"small"}," Add ")))}}]),t}(a.Component),de=Object(D.b)(function(e){return{selectedConversation:e.selectedConversation}},function(e){return{addingBot:function(t){e(function(e){return function(t){var n=F.get("token");fetch("".concat(z,"/bot_conversations"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){fetch("".concat(z,"/bots/").concat(e.botConversation.bot_id),{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(n)}}).then(function(e){return e.json()}).then(function(e){t({type:"ADDED_BOT_TO_CONVERSATION",bot:e})})})}}(t))}}})(me),he=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"filterBots",value:function(){var e=this;return this.props.selectedConversation?this.props.allBots.filter(function(t){return!!e.props.selectedConversation.bots.includes(t)}):this.props.allBots}},{key:"render",value:function(){return this.props.selectedConversation?o.a.createElement(j.a.Column,{width:4},o.a.createElement(w.a,null,o.a.createElement(q.a,{size:"large",verticalAlign:"middle"},o.a.createElement(pe.a,{style:{color:"#37525F"}},this.props.selectedConversation.topic),o.a.createElement(pe.a,null,"Participants:"),this.props.selectedConversation.users.map(function(e){return o.a.createElement(q.a.Item,{key:e.id},o.a.createElement(S.a,{avatar:!0,src:e.avatar}),o.a.createElement(q.a.Content,null,o.a.createElement(q.a.Header,null,e.name)))}),o.a.createElement(pe.a,null,"Bots:"),this.props.selectedConversation.bots.map(function(e){return o.a.createElement(q.a.Item,{key:e.id},o.a.createElement(S.a,{avatar:!0,src:e.avatar}),o.a.createElement(q.a.Content,null,o.a.createElement(q.a.Header,null,e.name)))})),o.a.createElement(w.a,{inverted:!0,style:{backgroundColor:"#37525F"}},o.a.createElement(ue.a,{text:"Add Bot",className:"link item"},o.a.createElement(ue.a.Menu,null,this.props.allBots.map(function(e){return o.a.createElement(de,{key:e.id,bot:e})})))))):null}}]),t}(a.Component),fe=Object(D.b)(function(e){return{selectedConversation:e.selectedConversation,allBots:e.allBots}})(he),Ee=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchingAllBots()}},{key:"render",value:function(){return this.props.currentUser?o.a.createElement(j.a,{columns:2,padded:!0},o.a.createElement(j.a.Row,null,o.a.createElement(le,null),o.a.createElement(oe,null),o.a.createElement(fe,null))):o.a.createElement(h.a,{to:"/login"})}}]),t}(a.Component),ge=Object(D.b)(function(e){return{currentUser:e.userData}},function(e){return{fetchingAllBots:function(){e(function(e){var t=F.get("token");fetch("".concat(z,"/bots"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(function(e){return e.json()}).then(function(t){e({type:"FETCHED_ALL_BOTS",bots:t})})})}}})(Ee),ve=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null," Page not found! ")}}]),t}(a.Component),be=n(447),Oe=n(437),Ce=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={topic:"",userId:null},n.inputChange=function(e){n.setState({topic:e.target.value})},n.dropdownChange=function(e){n.setState({userId:e.target.id})},n.formSubmit=function(){var e={topic:n.state.topic,userId:n.state.userId};console.log(e),n.props.creatingNewConversation(e),n.props.closeNewConversationModal()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchingAllUsers()}},{key:"render",value:function(){var e=this,t=this.props.allUsers.filter(function(t){return t.id!==e.props.currentUser.id});console.log(t);var n=t.map(function(e){return{id:e.id,text:e.name,value:e.id,image:{avatar:!0,src:e.avatar}}});return o.a.createElement(se.a.Content,null,o.a.createElement(pe.a,null,"Topic:"),o.a.createElement(k.a,{id:"newConversationForm",onSubmit:this.formSubmit},o.a.createElement(k.a.Input,{onChange:this.inputChange,placeholder:"Topic"}),o.a.createElement(pe.a,null,"To:"),o.a.createElement(k.a.Input,{control:Oe.a,placeholder:"Select a person",fluid:!0,selection:!0,options:n,onChange:this.dropdownChange}),o.a.createElement(_.a,{fluid:!0,size:"small",content:"Create",style:{backgroundColor:"#37525F",color:"#CEDEDC"}})))}}]),t}(a.Component),ye=Object(D.b)(function(e){return{allUsers:e.allUsers,currentUser:e.userData}},function(e){return{fetchingAllUsers:function(){e(function(e){var t=F.get("token"),n="".concat(z,"/users");fetch(n,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(function(e){return e.json()}).then(function(t){console.log(t),e({type:"FETCHED_ALL_USERS",allUsers:t})})})},creatingNewConversation:function(t){var n;e((n=t,function(e){var t=F.get("token");fetch("".concat(z,"/conversations"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({topic:n.topic})}).then(function(e){return e.json()}).then(function(a){fetch("".concat(z,"/user_conversations"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({conversation_id:a.conversation.id,user_id:parseInt(n.userId)})}).then(function(e){return e.json()}).then(function(n){fetch("".concat(z,"/user_conversations"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({conversation_id:n.userConversation.conversation_id,user_id:U.getState().userData.id})}).then(function(e){return e.json()}).then(function(t){console.log(a),e({type:"NEW_CONVERSATION",conversation:a.conversation})})})})}))},closeNewConversationModal:function(){e({type:"CLOSE_NEW_CONVERSATION"})}}})(Ce),je=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",trigger:"",response:"",avatar:""},n.handleName=function(e){n.setState({name:e.target.value})},n.handleTrigger=function(e){n.setState({trigger:e.target.value})},n.handleResponse=function(e){n.setState({response:e.target.value})},n.handleAvatar=function(e){n.setState({avatar:e.target.value})},n.formSubmit=function(){var e=n.state;n.props.creatingNewBot(e),n.props.closeNewBotModal()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(se.a.Content,null,o.a.createElement(pe.a,null,"Bot name:"),o.a.createElement(k.a,{onSubmit:this.formSubmit},o.a.createElement(k.a.Input,{placeholder:"Bot name",onChange:this.handleName}),o.a.createElement(pe.a,null,"Trigger:"),o.a.createElement("p",null,"Trigger should be a single word."),o.a.createElement(k.a.Input,{placeholder:"Trigger",onChange:this.handleTrigger}),o.a.createElement(pe.a,null,"Response:"),o.a.createElement("p",null,"Response can be a word or a sentence."),o.a.createElement(k.a.Input,{placeholder:"Response",onChange:this.handleResponse}),o.a.createElement(pe.a,null,"Avatar:"),o.a.createElement(k.a.Input,{placeholder:"URL",onChange:this.handleAvatar}),o.a.createElement(_.a,{fluid:!0,size:"small",content:"Create",style:{backgroundColor:"#37525F",color:"#CEDEDC"}})))}}]),t}(a.Component),Se=Object(D.b)(null,function(e){return{closeNewBotModal:function(){e({type:"CLOSE_NEW_BOT"})},creatingNewBot:function(t){e(function(e){return function(t){var n=F.get("token");fetch("".concat(z,"/bots"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){return t({type:"CREATED_NEW_BOT",bot:e.bot})})}}(t))}}})(je),ke=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(se.a.Content,{image:!0},o.a.createElement(S.a,{wrapped:!0,size:"medium",src:this.props.userData.avatar}),o.a.createElement(se.a.Description,null,o.a.createElement(pe.a,null,"Display Name:"),o.a.createElement("p",null,this.props.userData.name),o.a.createElement(pe.a,null,"Username:"),o.a.createElement("p",null,this.props.userData.username)))}}]),t}(a.Component),we=Object(D.b)(function(e){return{userData:e.userData}},function(e){return{closeProfileModal:function(){e({type:"CLOSE_PROFILE_MODAL"})}}})(ke),_e=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(be.a,{style:{backgroundColor:"#37525F",color:"#CEDEDC"},inverted:!0},o.a.createElement(be.a.Item,{onClick:this.props.homepage},o.a.createElement("img",{src:O.a,alt:"logo"})),o.a.createElement(se.a,{size:"small",trigger:o.a.createElement(be.a.Item,{name:"Create conversation",onClick:this.props.openNewConversationModal}),open:this.props.conversationModal,onClose:this.props.closeNewConversationModal},o.a.createElement(se.a.Header,null," Create a New Conversation "),o.a.createElement(ye,null)),o.a.createElement(se.a,{size:"small",trigger:o.a.createElement(be.a.Item,{name:"create bot",onClick:this.props.openNewBotModal}),open:this.props.newBotModal,onClose:this.props.closeNewBotModal},o.a.createElement(se.a.Header,null," Create a New Bot "),o.a.createElement(Se,null)),o.a.createElement(be.a.Menu,{position:"right"},o.a.createElement(se.a,{size:"small",trigger:o.a.createElement(be.a.Item,{name:"profile",onClick:this.props.openProfileModal}),open:this.props.profileModal,onClose:this.props.closeProfileModal},o.a.createElement(se.a.Header,null," Profile "),o.a.createElement(we,null)),o.a.createElement(be.a.Item,{name:"logout",onClick:this.props.logout})))}}]),t}(a.Component),Ne=Object(D.b)(function(e){return{conversationModal:e.conversationModal,newBotModal:e.newBotModal,profileModal:e.profileModal,allBots:e.allBots,userData:e.userData}},function(e){return{logout:function(){e({type:"LOGGED_OUT"})},openNewConversationModal:function(){e({type:"OPEN_NEW_CONVERSATION"})},closeNewConversationModal:function(){e({type:"CLOSE_NEW_CONVERSATION"})},openNewBotModal:function(){e({type:"OPEN_NEW_BOT"})},closeNewBotModal:function(){e({type:"CLOSE_NEW_BOT"})},openProfileModal:function(){e({type:"OPEN_PROFILE_MODAL"})},closeProfileModal:function(){e({type:"CLOSE_PROFILE_MODAL"})},homepage:function(){e({type:"HOMEPAGE"})}}})(_e),De=n(439),Ae=(n(425),n(64)),Te=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){Ae.get("token")&&this.props.checkingUser()}},{key:"render",value:function(){return o.a.createElement(a.Fragment,null,this.props.currentUser?o.a.createElement(De.a,null,o.a.createElement(Ne,null)):null,o.a.createElement(m.a,null,o.a.createElement(d.a,{exact:!0,path:"/gap-gap/",render:function(){return o.a.createElement(h.a,{to:"/login"})}}),o.a.createElement(d.a,{exact:!0,path:"/gap-gap/login",render:function(){return o.a.createElement(J,null)}}),o.a.createElement(d.a,{exact:!0,path:"/gap-gap/signup",component:$}),o.a.createElement(d.a,{exact:!0,path:"/gap-gap/conversations",render:function(){return o.a.createElement(ge,null)}}),o.a.createElement(d.a,{component:ve})))}}]),t}(a.Component),Be=C(Object(f.a)(Object(D.b)(function(e){return{currentUser:e.userData}},function(e){return{createSocket:function(){e(x())},checkingUser:function(t){e(function(e){var t=F.get("token"),n="".concat(z,"/profile");fetch(n,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(function(e){return e.json()}).then(function(t){e({type:"CHECKED_USER",userData:t.user})})})}}})(Te)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=n(450);c.a.render(o.a.createElement(D.a,{store:U},o.a.createElement(Ie.a,null,o.a.createElement(Be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e,t,n){e.exports=n.p+"static/media/logo-pink.8a553ee2.png"}},[[253,2,1]]]);
//# sourceMappingURL=main.0a5918a6.chunk.js.map