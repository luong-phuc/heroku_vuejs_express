webpackJsonp([1],{G4dk:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),r=(a("K3J8"),a("M4fF"),a("qb6w"),{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Menu")]),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav"},[a("router-link",{staticClass:"nav-item nav-link active",attrs:{to:"/"}},[e._v("Home")]),e._v(" "),a("router-link",{staticClass:"nav-item nav-link active",attrs:{to:"/user"}},[e._v("User List")]),e._v(" "),a("router-link",{staticClass:"nav-item nav-link active",attrs:{to:"/new-user"}},[e._v("New User")]),e._v(" "),a("router-link",{staticClass:"nav-item nav-link active",attrs:{to:"/about"}},[e._v("About")])],1)]),e._v(" "),a("form",{staticClass:"form-inline my-2 my-lg-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.s,expression:"s"}],staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search","aria-label":"Search"},domProps:{value:e.s},on:{input:function(t){t.target.composing||(e.s=t.target.value)}}}),e._v(" "),a("button",{staticClass:"btn btn-secondary my-2 my-sm-0",on:{click:function(t){return e.search()}}},[e._v("Search")])])]),e._v(" "),a("main",{staticClass:"container-fluid pt-2",attrs:{role:"main"}},[a("div",{staticClass:"swatch-light"},[a("router-view")],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}]});var n=a("VU/8")({name:"App",data:function(){return{s:""}},methods:{search:function(){this.$router.push({name:"UserList",query:{s:this.s}})}}},r,!1,function(e){a("mXva")},null,null).exports,i=a("/ocq"),l={name:"BreadCrumb",props:{title:[String,Array]},computed:{isArray:function(){return _.isArray(this.title)}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{attrs:{"aria-label":"breadcrumb"}},[e.isArray?a("ol",{staticClass:"breadcrumb"},e._l(e.title,function(t){return a("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[e._v(e._s(t))])}),0):a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v(e._s(e.title))])])])},staticRenderFns:[]},u=a("VU/8")(l,o,!1,null,null,null).exports,c={name:"HelloWorld",data:function(){return{title:"Home",message:"Hello Vue!",answer:"waiting input......",message_2:"Bạn đã mở trang này vào "+(new Date).toLocaleString(),seen:(new Date).getTime()%2,groceryList:[{id:1,text:"Cà pháo"},{id:2,text:"Mắm tôm"},{id:3,text:"Miễn ăn được là được"}]}},methods:{reverseMessage:function(){this.message=this.message.split(" ").reverse().join(" "),this.seen=(new Date).getTime()%2},getAnswer:function(){this.answer="thinking...."}},computed:{now:function(){return Date.now()}},watch:{message:function(e,t){this.answer="Waiting for you to stop typing...",this.debouncedGetAnswer()}},components:{BreadCrumb:u},created:function(){this.debouncedGetAnswer=_.debounce(this.getAnswer,500)}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("bread-crumb",{attrs:{title:e.title}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),a("p",[e._v(e._s(e.answer))]),e._v(" "),a("button",{on:{click:e.reverseMessage}},[e._v("Reverse Message")]),e._v(" "),a("p",[e._v(e._s(e.message))]),e._v(" "),a("p",{attrs:{title:e.message_2}},[e._v("\n    Rê chuột lên đây một vài giây để xem thuộc tính `title` được bind! "+e._s(e.now)+"\n  ")]),e._v(" "),e.seen?a("p",[e._v("Thoắt ẩn thoắt hiện")]):e._e(),e._v(" "),a("ol",e._l(e.groceryList,function(t){return a("li",{key:t.id},[e._v(e._s(t.text))])}),0)],1)},staticRenderFns:[]};var v=a("VU/8")(c,m,!1,function(e){a("Y6jI")},"data-v-4b78fc48",null).exports,d={name:"About",data:function(){return{title:["About"],msg:"About"}},computed:{},components:{BreadCrumb:u}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"about"},[t("bread-crumb",{attrs:{title:this.title}})],1)},staticRenderFns:[]};var f=a("VU/8")(d,p,!1,function(e){a("jv0l")},"data-v-3733aff1",null).exports,h=a("Zrlr"),b=a.n(h),g=function e(t){if(b()(this,e),t){var a=this;["id","fullName","email","password"].forEach(function(e){a[e]=t[e]||null})}},w=a("wxAW"),C=a.n(w),y=function(){function e(){b()(this,e)}return C()(e,null,[{key:"users",value:function(){var e=[];return e.push(new g({id:"001",fullName:"Luong Phuc",email:"luong.phuc@mulodo.com",password:null})),e.push(new g({id:"004",fullName:"Luong Phuc",password:null})),e.push(new g({id:"002",fullName:"Luong Vinh",email:"luong.vinh@mulodo.com",password:null})),e.push(new g({id:"003",fullName:"Luong Minh"})),e}},{key:"getUserList",value:function(e){var t=this.users();return e?_.filter(t,{fullName:e}):t}},{key:"getUserById",value:function(e){var t=this.users();return e?_.find(t,function(t){return t.id==e}):new g}},{key:"createUser",value:function(e){console.log(new g(e)),console.log("Create success.")}},{key:"updateUser",value:function(e){console.log(new g(e)),e.id||console.log("Can't update user : "+e),console.log("Update success.")}}]),e}(),N={name:"NewUser",data:function(){return{title:["Users","Create"],user:new g}},methods:{createUser:function(){y.createUser(this.user)}},computed:{},watch:{},created:function(){},components:{BreadCrumb:u}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"new-user"},[a("bread-crumb",{attrs:{title:e.title}}),e._v(" "),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputFullName"}},[e._v("Full Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.fullName,expression:"user.fullName"}],staticClass:"form-control",attrs:{type:"text",id:"inputFullName","aria-describedby":"fullNameHelp",placeholder:"Enter full name",name:"fullName"},domProps:{value:e.user.fullName},on:{input:function(t){t.target.composing||e.$set(e.user,"fullName",t.target.value)}}}),e._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"fullNameHelp"}},[e._v("Please input your full name")])]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputEmail"}},[e._v("Email address")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail","aria-describedby":"emailHelp",placeholder:"Enter email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("We'll never share your email with anyone else.")])]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputPassword"}},[e._v("Password")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.createUser}},[e._v("Submit")])]),e._v(" "),a("pre",[e._v("    "),a("span",[e._v(" Your information : ")]),e._v("\n    "),a("span",[e._v(" full name : "+e._s(e.user.fullName)+" ")]),e._v("\n    "),a("span",[e._v(" email : "+e._s(e.user.email)+" ")]),e._v("\n    "),a("span",[e._v(" password : ********* ")]),e._v("\n  ")])],1)},staticRenderFns:[]};var U=a("VU/8")(N,x,!1,function(e){a("G4dk")},"data-v-14a02013",null).exports,k={name:"EditUser",data:function(){return{title:["Users","Edit"],user:y.getUserById(this.$route.params.id)}},methods:{editUser:function(){y.updateUser(this.user)}},computed:{},watch:{},created:function(){},components:{BreadCrumb:u}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit-user"},[a("bread-crumb",{attrs:{title:e.title}}),e._v(" "),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputFullName"}},[e._v("Full Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.fullName,expression:"user.fullName"}],staticClass:"form-control",attrs:{type:"text",id:"inputFullName","aria-describedby":"fullNameHelp",placeholder:"Enter full name",name:"fullName"},domProps:{value:e.user.fullName},on:{input:function(t){t.target.composing||e.$set(e.user,"fullName",t.target.value)}}}),e._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"fullNameHelp"}},[e._v("Please input your full name")])]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputEmail"}},[e._v("Email address")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail","aria-describedby":"emailHelp",placeholder:"Enter email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("We'll never share your email with anyone else.")])]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputPassword"}},[e._v("Password")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.editUser}},[e._v("Submit")])]),e._v(" "),a("pre",[e._v("    "),a("span",[e._v(" Your information : ")]),e._v("\n    "),a("span",[e._v(" id : "+e._s(e.user.id)+" ")]),e._v("\n    "),a("span",[e._v(" full name : "+e._s(e.user.fullName)+" ")]),e._v("\n    "),a("span",[e._v(" email : "+e._s(e.user.email)+" ")]),e._v("\n    "),a("span",[e._v(" password : ********* ")]),e._v("\n  ")])],1)},staticRenderFns:[]};var P=a("VU/8")(k,E,!1,function(e){a("bSkT")},"data-v-a8141994",null).exports,A={name:"UserList",data:function(){return{title:["Users"]}},computed:{users:function(){var e=this.$route.query.s;return y.getUserList(e)}},components:{BreadCrumb:u}},$={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-list"},[a("bread-crumb",{attrs:{title:e.title}}),e._v(" "),a("table",{staticClass:"table"},[e._m(0),e._v(" "),a("tbody",e._l(e.users,function(t){return a("tr",[a("th",{attrs:{scope:"row"}},[e._v(e._s(t.id))]),e._v(" "),a("td",[e._v(e._s(t.fullName))]),e._v(" "),a("td",[e._v(e._s(t.email||"N/a"))]),e._v(" "),a("td",[a("router-link",{staticClass:"nav-item nav-link active",attrs:{to:{name:"EditUser",params:{id:t.id}}}},[e._v("Edit")])],1)])}),0)])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",{attrs:{scope:"col"}},[this._v("#")]),this._v(" "),t("th",{attrs:{scope:"col"}},[this._v("Full Name")]),this._v(" "),t("th",{attrs:{scope:"col"}},[this._v("Email")]),this._v(" "),t("th",{attrs:{scope:"col"}},[this._v("Handle")])])])}]};var H=a("VU/8")(A,$,!1,function(e){a("iM9t")},"data-v-19a60958",null).exports;s.a.use(i.a);var F=new i.a({routes:[{path:"/",name:"HelloWorld",component:v},{path:"/about",name:"About",component:f},{path:"/user",name:"UserList",component:H},{path:"/new-user",name:"NewUser",component:U},{path:"/user/:id",name:"EditUser",component:P}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:F,components:{App:n},template:"<App/>"})},Y6jI:function(e,t){},bSkT:function(e,t){},iM9t:function(e,t){},jv0l:function(e,t){},mXva:function(e,t){},qb6w:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.bf5ea3b19f1cb3f9b0e4.js.map