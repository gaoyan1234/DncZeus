(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1ca"],{"4b4f":function(e,t,s){"use strict";var n=s("cd05"),o=s.n(n);o.a},"6c04":function(e,t,s){"use strict";var n=s("ac31"),o=s.n(n);o.a},ac31:function(e,t,s){},cd05:function(e,t,s){},e49c:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"bg bg-blur"}),s("div",{staticClass:"content content-front"},[s("div",{staticClass:"login"},[s("div",{staticClass:"login-con"},[s("Card",{attrs:{icon:"log-in",title:"欢迎登录",bordered:!1}},[s("div",{staticClass:"form-con"},[s("login-form",{attrs:{processing:e.processing,loading:e.loading},on:{"on-success-valid":e.handleSubmit}})],1)])],1)])])])},o=[],r=s("c93e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Form",{ref:"loginForm",attrs:{model:e.form,rules:e.rules},nativeOn:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleSubmit(t):null}}},[s("FormItem",{attrs:{prop:"userName"}},[s("Input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[s("Icon",{attrs:{size:16,type:"ios-person"}})],1)])],1),s("FormItem",{attrs:{prop:"password"}},[s("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[s("Icon",{attrs:{size:14,type:"md-lock"}})],1)])],1),s("FormItem",{attrs:{label:"测试账户"}},[s("RadioGroup",{attrs:{type:"button"},on:{"on-change":e.handleUserTypeChange},model:{value:e.form.userType,callback:function(t){e.$set(e.form,"userType",t)},expression:"form.userType"}},[s("Radio",{attrs:{label:"超级管理员"}}),s("Radio",{attrs:{label:"普通用户"}})],1)],1),s("FormItem",[s("Button",{attrs:{disabled:e.processing,type:"primary",long:"",loading:e.loading},on:{click:e.handleSubmit}},[e._v(e._s(e.btnLoginText))])],1),s("p",{staticClass:"login-tip"},[e._v("欢迎使用DncZeus通用权限管理框架")])],1)},i=[],u={name:"LoginForm",props:{userNameRules:{type:Array,default:function(){return[{required:!0,message:"账号不能为空",trigger:"blur"}]}},passwordRules:{type:Array,default:function(){return[{required:!0,message:"密码不能为空",trigger:"blur"}]}},processing:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},data:function(){return{form:{userName:"",password:"",userType:1}}},computed:{btnLoginText:function(){return this.processing?"正在处理,请稍候...":"登录"},rules:function(){return{userName:this.userNameRules,password:this.passwordRules}}},methods:{handleSubmit:function(){var e=this;this.$refs.loginForm.validate(function(t){t&&e.$emit("on-success-valid",{userName:e.form.userName,password:e.form.password})})},handleUserTypeChange:function(e){switch(e){case"超级管理员":this.form.userName="administrator";break;case"普通用户":this.form.userName="admin";break}this.form.password="111111"}}},l=u,c=s("2877"),d=Object(c["a"])(l,a,i,!1,null,null,null);d.options.__file="login-form.vue";var p=d.exports,m=p,f=s("2f62"),g=(s("66df"),s("4360"),s("9658")),h={components:{LoginForm:m},data:function(){return{processing:!1,loading:!1}},methods:Object(r["a"])({},Object(f["b"])(["handleLogin","getUserInfo"]),{handleSubmit:function(e){var t=this,s=e.userName,n=e.password,o=this;this.loading=!0,this.handleLogin({userName:s,password:n}).then(function(e){200==e.data.code?(t.processing=!0,t.$Message.loading({duration:0,closable:!1,content:"用户信息验证成功,正在登录系统..."}),t.getUserInfo().then(function(e){setTimeout(function(){Object(g["b"])(o),t.$router.push({name:"home"}),setTimeout(function(){t.$Message.destroy()},1e3)},1500)})):(t.processing=!1,t.loading=!1,t.$Message.error(e.data.message))}).catch(function(e){o.loading=!1,e.status||t.$Message.error({content:"网络出错,请检查你的网络或者服务是否可用",duration:5})})}})},b=h,v=(s("4b4f"),s("6c04"),Object(c["a"])(b,n,o,!1,null,null,null));v.options.__file="login.vue";t["default"]=v.exports}}]);