(function(){var t={693:function(t,e,s){"use strict";s(6992),s(8674),s(9601),s(7727);var i=s(8935),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("keep-alive",[s("router-view",{attrs:{name:"Home"}})],1),s("router-view",{attrs:{name:"Help"}}),s("router-view",{attrs:{name:"Profile"}}),s("router-view",{attrs:{name:"JournalBuy"}})],1)},n=[],r={name:"App"},o=r,l=s(1001),c=(0,l.Z)(o,a,n,!1,null,null,null),u=c.exports,d=(s(8309),s(2809)),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("navbar"),s("search"),s("journal-wrap")],1)},h=[],w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("nav",{staticClass:"navbar navbar-default"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"navbar-header",attrs:{id:"navbar-header-space"}},[t._m(0),s("a",{staticClass:"navbar-brand",on:{click:t.backHome}},[s("span",{staticClass:"brand_front_part"},[t._v("小凯")]),t._v("杂志")])]),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[s("ul",{staticClass:"nav navbar-nav"},[s("li",{class:{active:"home"===t.$route.name}},[s("a",{on:{click:t.backHome}},[t._v("首页 "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])]),t._m(1),s("li",[s("a",{staticClass:"btn-help",attrs:{target:"_blank"},on:{click:t.goHelp}},[t._v(" 帮助 ")])])]),s("ul",{staticClass:"navbar-right",attrs:{id:"log"}},[s("li",[s("a",{attrs:{href:"#"},on:{click:function(e){t.isLogin=!0}}},[t._v("登录")])]),s("li",[s("a",{attrs:{href:"#"},on:{click:function(e){t.isSign=!0}}},[t._v("注册")])]),s("li",[s("a",{attrs:{href:"#"},on:{click:t.goProfile}},[t._v("个人中心")])])])])])]),t.isSign?s("sign",{on:{close:function(e){t.isSign=!1},toggleLogin:function(e){t.isSign=!1,t.isLogin=!0}}}):t._e(),t.isLogin?s("login",{on:{close:function(e){t.isLogin=!1},toggleRegister:function(e){t.isLogin=!1,t.isSign=!0}}}):t._e()],1)},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[s("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),s("span",{staticClass:"icon-bar"}),s("span",{staticClass:"icon-bar"}),s("span",{staticClass:"icon-bar"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"dropdown"},[s("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("杂志分类 "),s("span",{staticClass:"caret"})]),s("ul",{staticClass:"dropdown-menu"},[s("li",[s("a",{attrs:{href:"#"}},[t._v("财经")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("体育")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("时尚")])])])])}],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("svg",{staticStyle:{height:"0",width:"0",display:"none"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[s("symbol",{attrs:{id:"close",width:"22",height:"22",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),s("symbol",{attrs:{id:"envelope",width:"16",height:"16",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"}})]),s("symbol",{attrs:{id:"user",width:"16",height:"16",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"}})]),s("symbol",{attrs:{id:"key",width:"18",height:"18",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"}}),s("path",{attrs:{d:"M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}})]),s("symbol",{attrs:{id:"eye-slash-fill",width:"16",height:"16",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"}}),s("path",{attrs:{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"}})]),s("symbol",{attrs:{id:"eye-fill",width:"16",height:"16",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}}),s("path",{attrs:{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}})])]),s("div",{staticClass:"shade"}),s("div",{attrs:{id:"wrap_login"}},[t.isLogin?s("div",{key:"log",staticClass:"login-content"},[s("div",{staticClass:"login-close",on:{click:function(e){return t.$emit("close")}}},[s("svg",{staticClass:"svg_close"},[s("use",{attrs:{"xlink:href":"#close"}})])]),s("div",{staticClass:"login-body"},[t._m(0),s("div",{staticClass:"login-form-title"},[s("h3",[t._v("登录")]),s("span",[t._v(" 还没有账户? "),s("a",{attrs:{href:"#"},on:{click:function(e){return t.$emit("toggleRegister")}}},[t._v("立即注册")])])]),s("form",[s("ul",{staticClass:"form-ul"},[s("li",[s("i",{staticClass:"input-icon"},[s("svg",{staticClass:"svg_user"},[s("use",{attrs:{"xlink:href":"#user"}})])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userEmail,expression:"userEmail"}],staticClass:"form-input",attrs:{type:"text",id:"user_email",placeholder:"请输入用户名/电子邮箱"},domProps:{value:t.userEmail},on:{input:function(e){e.target.composing||(t.userEmail=e.target.value)}}})]),s("li",[s("i",{staticClass:"input-icon"},[s("svg",{staticClass:"svg_key"},[s("use",{attrs:{"xlink:href":"#key"}})])]),s("span",{staticClass:"wrap_login_showPaswd"},[t.isShow3?s("i",{staticClass:"showPaswd"},[s("svg",{staticClass:"svg_eye_slash_fill",on:{click:function(e){return t.showPwd(3)}}},[s("use",{attrs:{"xlink:href":"#eye-slash-fill"}})])]):s("i",{staticClass:"hidePaswd"},[s("svg",{staticClass:"svg_eye_fill",on:{click:function(e){return t.hidePwd(3)}}},[s("use",{attrs:{"xlink:href":"#eye-fill"}})])])]),"checkbox"===t.logPwd?s("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwd,expression:"userPwd"}],staticClass:"form-input",attrs:{placeholder:"请输入登录密码",autocomplete:"new-password",type:"checkbox"},domProps:{checked:Array.isArray(t.userPwd)?t._i(t.userPwd,null)>-1:t.userPwd},on:{change:function(e){var s=t.userPwd,i=e.target,a=!!i.checked;if(Array.isArray(s)){var n=null,r=t._i(s,n);i.checked?r<0&&(t.userPwd=s.concat([n])):r>-1&&(t.userPwd=s.slice(0,r).concat(s.slice(r+1)))}else t.userPwd=a}}}):"radio"===t.logPwd?s("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwd,expression:"userPwd"}],staticClass:"form-input",attrs:{placeholder:"请输入登录密码",autocomplete:"new-password",type:"radio"},domProps:{checked:t._q(t.userPwd,null)},on:{change:function(e){t.userPwd=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwd,expression:"userPwd"}],staticClass:"form-input",attrs:{placeholder:"请输入登录密码",autocomplete:"new-password",type:t.logPwd},domProps:{value:t.userPwd},on:{input:function(e){e.target.composing||(t.userPwd=e.target.value)}}})])]),s("button",{staticClass:"login-btn",attrs:{type:"button"},on:{click:t.login}},[t._v("登录")])]),s("p",{staticClass:"login-message"},[t._v(t._s(t.loginMessage))])])]):t._e()])])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-head"},[s("h2",[s("span",[t._v("小凯")]),t._v(" 杂志 ")])])}],g=s(7472),b=s.n(g),_={data:function(){return{isLogin:!0,isShow:!0,isShow2:!0,isShow3:!0,firstPwd:"password",confirmPwd:"password",logPwd:"password",userEmail:"",userPwd:"",loginMessage:""}},methods:{showPwd:function(t){1===t?(this.isShow=!1,this.firstPwd="text"):2===t?(this.isShow2=!1,this.confirmPwd="text"):3===t&&(this.isShow3=!1,this.logPwd="text")},hidePwd:function(t){1===t?(this.isShow=!0,this.firstPwd="password"):2===t?(this.isShow2=!0,this.confirmPwd="password"):3===t&&(this.isShow3=!0,this.logPwd="password")},login:function(){var t=this,e={url:"api/user/login",method:"post",data:{userAccount:this.userEmail,userPwd:this.userPwd}};b()(e).then((function(e){"LoginFail"===e.data?t.loginMessage="请输入正确的账号或密码":(document.cookie=e.data.token,console.log("token:"+document.cookie),t.loginMessage="登录成功")})).catch((function(t){console.log(t)}))}}},P=_,x=(0,l.Z)(P,v,f,!1,null,null,null),C=x.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("svg",{staticStyle:{height:"0",width:"0",display:"none"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[s("symbol",{attrs:{id:"close",width:"22",height:"22",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),s("symbol",{attrs:{id:"envelope",width:"16",height:"16",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"}})]),s("symbol",{attrs:{id:"user",width:"16",height:"16",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"}})]),s("symbol",{attrs:{id:"key",width:"18",height:"18",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"}}),s("path",{attrs:{d:"M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}})]),s("symbol",{attrs:{id:"eye-slash-fill",width:"16",height:"16",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"}}),s("path",{attrs:{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"}})]),s("symbol",{attrs:{id:"eye-fill",width:"16",height:"16",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}}),s("path",{attrs:{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}})])]),s("div",{staticClass:"shade"}),s("div",{attrs:{id:"wrap_sign"}},[t.sign?s("div",{staticClass:"sign-content"},[s("div",{staticClass:"sign-close",on:{click:function(e){return t.$emit("close")}}},[s("svg",{staticClass:"svg_close"},[s("use",{attrs:{"xlink:href":"#close"}})])]),s("div",{staticClass:"sign-body"},[t._m(0),s("div",{staticClass:"sign-form-title"},[s("h3",[t._v("注册")]),s("span",[t._v(" 已经有账户? "),s("a",{attrs:{href:"#"},on:{click:function(e){return t.$emit("toggleLogin")}}},[t._v("马上登录")])])]),s("form",[s("ul",{staticClass:"form-ul"},[s("li",[s("i",{staticClass:"input-icon"},[s("svg",{staticClass:"svg_envelope"},[s("use",{attrs:{"xlink:href":"#envelope"}})])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userEmail,expression:"userEmail"}],staticClass:"form-input",attrs:{type:"text",id:"user_email",placeholder:"请输入电子邮箱"},domProps:{value:t.userEmail},on:{input:function(e){e.target.composing||(t.userEmail=e.target.value)}}})]),s("li",[s("i",{staticClass:"input-icon"},[s("svg",{staticClass:"svg_key"},[s("use",{attrs:{"xlink:href":"#key"}})])]),s("span",{staticClass:"wrap_sign_showPaswd"},[t.isShow?s("i",{staticClass:"showPaswd"},[s("svg",{staticClass:"svg_eye_slash_fill",on:{click:function(e){return t.showPwd(1)}}},[s("use",{attrs:{"xlink:href":"#eye-slash-fill"}})])]):s("i",{staticClass:"hidePaswd"},[s("svg",{staticClass:"svg_eye_fill",on:{click:function(e){return t.hidePwd(1)}}},[s("use",{attrs:{"xlink:href":"#eye-fill"}})])])]),"checkbox"===t.firstPwd?s("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwd,expression:"userPwd"}],staticClass:"form-input",attrs:{placeholder:"请输入登录密码",autocomplete:"new-password",type:"checkbox"},domProps:{checked:Array.isArray(t.userPwd)?t._i(t.userPwd,null)>-1:t.userPwd},on:{change:function(e){var s=t.userPwd,i=e.target,a=!!i.checked;if(Array.isArray(s)){var n=null,r=t._i(s,n);i.checked?r<0&&(t.userPwd=s.concat([n])):r>-1&&(t.userPwd=s.slice(0,r).concat(s.slice(r+1)))}else t.userPwd=a}}}):"radio"===t.firstPwd?s("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwd,expression:"userPwd"}],staticClass:"form-input",attrs:{placeholder:"请输入登录密码",autocomplete:"new-password",type:"radio"},domProps:{checked:t._q(t.userPwd,null)},on:{change:function(e){t.userPwd=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwd,expression:"userPwd"}],staticClass:"form-input",attrs:{placeholder:"请输入登录密码",autocomplete:"new-password",type:t.firstPwd},domProps:{value:t.userPwd},on:{input:function(e){e.target.composing||(t.userPwd=e.target.value)}}})]),s("li",[s("i",{staticClass:"input-icon"},[s("svg",{staticClass:"svg_key"},[s("use",{attrs:{"xlink:href":"#key"}})])]),s("span",{staticClass:"wrap_sign_showPaswd"},[t.isShow2?s("i",{staticClass:"showPaswd"},[s("svg",{staticClass:"svg_eye_slash_fill",on:{click:function(e){return t.showPwd(2)}}},[s("use",{attrs:{"xlink:href":"#eye-slash-fill"}})])]):s("i",{staticClass:"hidePaswd"},[s("svg",{staticClass:"svg_eye_fill",on:{click:function(e){return t.hidePwd(2)}}},[s("use",{attrs:{"xlink:href":"#eye-fill"}})])])]),"checkbox"===t.confirmPwd?s("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwd2,expression:"userPwd2"}],staticClass:"form-input",attrs:{placeholder:"请确认登录密码",autocomplete:"new-password",type:"checkbox"},domProps:{checked:Array.isArray(t.userPwd2)?t._i(t.userPwd2,null)>-1:t.userPwd2},on:{change:function(e){var s=t.userPwd2,i=e.target,a=!!i.checked;if(Array.isArray(s)){var n=null,r=t._i(s,n);i.checked?r<0&&(t.userPwd2=s.concat([n])):r>-1&&(t.userPwd2=s.slice(0,r).concat(s.slice(r+1)))}else t.userPwd2=a}}}):"radio"===t.confirmPwd?s("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwd2,expression:"userPwd2"}],staticClass:"form-input",attrs:{placeholder:"请确认登录密码",autocomplete:"new-password",type:"radio"},domProps:{checked:t._q(t.userPwd2,null)},on:{change:function(e){t.userPwd2=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwd2,expression:"userPwd2"}],staticClass:"form-input",attrs:{placeholder:"请确认登录密码",autocomplete:"new-password",type:t.confirmPwd},domProps:{value:t.userPwd2},on:{input:function(e){e.target.composing||(t.userPwd2=e.target.value)}}})])]),s("button",{staticClass:"register-btn",attrs:{type:"button"},on:{click:t.register}},[t._v(" 提交注册 ")])]),s("p",{staticClass:"sign-message"},[t._v(t._s(t.signMessage))])])]):t._e()])])},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sign-head"},[s("h2",[s("span",[t._v("小凯")]),t._v(" 杂志 ")])])}],E=(s(4916),s(7601),s(7472)),S={data:function(){return{sign:!0,isShow:!0,isShow2:!0,isShow3:!0,firstPwd:"password",confirmPwd:"password",logPwd:"password",userEmail:"",userPwd:"",userPwd2:"",signMessage:""}},methods:{showPwd:function(t){1===t?(this.isShow=!1,this.firstPwd="text"):2===t?(this.isShow2=!1,this.confirmPwd="text"):3===t&&(this.isShow3=!1,this.logPwd="text")},hidePwd:function(t){1===t?(this.isShow=!0,this.firstPwd="password"):2===t?(this.isShow2=!0,this.confirmPwd="password"):3===t&&(this.isShow3=!0,this.logPwd="password")},register:function(){var t=this,e=/^\w+@\w+\.com|cn|net$/,s=/^\S{6,18}$/;if(e.test(this.userEmail))if(this.userPwd===this.userPwd2)if(s.test(this.userPwd)){var i={url:"api/user/sign",method:"post",data:{userEmail:this.userEmail,userPwd:this.userPwd}};E(i).then((function(e){console.log(e.data),t.signMessage=e.data})).catch((function(t){console.log(t)}))}else this.signMessage="密码长度必须在6~18位之间";else this.signMessage="两次输入的密码不相同";else this.signMessage="请输入正确的邮箱!"}}},A=S,$=(0,l.Z)(A,y,k,!1,null,null,null),z=$.exports,M={data:function(){return{isSign:!1,isLogin:!1}},components:{Login:C,Sign:z},methods:{goHelp:function(){window.open("/help")},backHome:function(){"/"!=this.$route.path&&this.$router.push("/")},goProfile:function(){window.open("/profile")}}},L=M,j=(0,l.Z)(L,w,m,!1,null,null,null),Z=j.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-wrap"},[s("h2",{staticClass:"search-head"},[t._v("小凯杂志")]),s("form",{staticClass:"search-form"},[s("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"请输入杂志关键词搜索..."}}),s("button",{staticClass:"search-btn",attrs:{type:"submit"}})])])}],N={},H=N,K=(0,l.Z)(H,B,O,!1,null,null,null),J=K.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("journal-nav",{on:{columnchange:function(e){t.columnKind=e}}}),s("journal-panel",{attrs:{"column-kind":t.columnKind}})],1)},I=[],T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"journal-nav"},[s("ul",{staticClass:"journal-nav-ul"},[s("li",[s("a",{class:{active:t.isActive[0]},on:{click:function(e){t.$emit("columnchange","recommand"),t.active(0)}}},[t._v(" 推荐 ")])]),s("div",{staticClass:"sep"},[t._v("/")]),s("li",[s("a",{class:{active:t.isActive[1]},on:{click:function(e){t.$emit("columnchange","latest"),t.active(1)}}},[t._v("最新 ")])]),s("div",{staticClass:"sep"},[t._v("/")]),s("li",[s("a",{class:{active:t.isActive[2]},on:{click:function(e){t.$emit("columnchange","eng"),t.active(2)}}},[t._v("英文 ")])]),s("div",{staticClass:"sep"},[t._v("/")]),s("li",[s("a",{class:{active:t.isActive[3]},on:{click:function(e){t.$emit("columnchange","gym"),t.active(3)}}},[t._v("健身 ")])]),s("div",{staticClass:"sep"},[t._v("/")]),s("li",[s("a",{class:{active:t.isActive[4]},on:{click:function(e){t.$emit("columnchange","it"),t.active(4)}}},[t._v("it")])]),s("div",{staticClass:"sep"},[t._v("/")]),s("li",[s("a",{class:{active:t.isActive[5]},on:{click:function(e){t.$emit("columnchange","game"),t.active(5)}}},[t._v("游戏")])])])])},V=[],F=(s(561),{data:function(){return{isActive:[!0,!1,!1,!1,!1,!1]}},methods:{active:function(t){for(var e in this.isActive)this.isActive.splice(e,1,!1);this.isActive.splice(t,1,!0)}}}),U=F,q=(0,l.Z)(U,T,V,!1,null,null,null),R=q.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"card-box"}},t._l(t.imageInfos,(function(t){return s("journal-card",{key:t.id,attrs:{"image-info":t}})})),1)},G=[],Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("svg",{staticStyle:{height:"0",width:"0",display:"none"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[i("symbol",{attrs:{id:"eye",width:"12",height:"12",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}}),i("path",{attrs:{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"}})])]),i("div",{staticClass:"card"},[i("a",{staticClass:"journal_img_a",on:{click:t.goJournalBuy}},[i("img",{attrs:{src:s(7173)("./"+t.imageInfo.url),alt:""}})]),i("h3",[i("a",{staticClass:"journal_title_a",on:{click:t.goJournalBuy}},[t._v("[中国版]Architectural Digest 安邸AD 2021年9月刊 素染追光")])]),i("div",{staticClass:"item-meta"},[t._m(0),i("div",{staticClass:"item-meta-right"},[i("span",[i("svg",{staticClass:"eye",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#eye"}})]),t._v(" 361 ")])])])])])},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"item-meta-left"},[s("span",[t._v("36 金币")])])}],Y={data:function(){return{}},props:{imageInfo:Object},methods:{goJournalBuy:function(){this.$router.push({path:"/journal/"+this.imageInfo.id+"/"+this.imageInfo.url})}}},tt=Y,et=(0,l.Z)(tt,Q,X,!1,null,null,null),st=et.exports,it={data:function(){return{}},props:{columnKind:String},methods:{},computed:{imageInfos:function(){return"recommand"===this.columnKind?[{url:"1.webp",id:"1"},{url:"2.webp",id:"2"},{url:"3.webp",id:"3"},{url:"4.webp",id:"4"},{url:"5.webp",id:"5"},{url:"6.webp",id:"6"},{url:"7.webp",id:"7"},{url:"8.webp",id:"8"}]:"latest"===this.columnKind?[{url:"9.webp",id:"9"},{url:"10.webp",id:"10"},{url:"11.webp",id:"11"},{url:"12.webp",id:"12"},{url:"13.webp",id:"13"},{url:"14.webp",id:"14"},{url:"15.webp",id:"15"},{url:"16.webp",id:"16"}]:"eng"===this.columnKind?[{url:"17.webp",id:"17"}]:"gym"===this.columnKind?[{url:"18.webp",id:"18"}]:"it"===this.columnKind?[{url:"19.webp",id:"19"}]:"game"===this.columnKind?[{url:"20.webp",id:"20"}]:void 0}},components:{JournalCard:st}},at=it,nt=(0,l.Z)(at,W,G,!1,null,null,null),rt=nt.exports,ot={data:function(){return{columnKind:"recommand"}},components:{JournalNav:R,JournalPanel:rt},methods:{}},lt=ot,ct=(0,l.Z)(lt,D,I,!1,null,null,null),ut=ct.exports,dt={components:{Navbar:Z,Search:J,JournalWrap:ut}},pt=dt,ht=(0,l.Z)(pt,p,h,!1,null,null,null),wt=ht.exports,mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("这是帮助界面")])},vt=[],ft={},gt=ft,bt=(0,l.Z)(gt,mt,vt,!1,null,null,null),_t=bt.exports,Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Profile")]),s("button",{on:{click:t.getBirth}},[t._v("得到生日")]),s("p",[t._v("你的生日是:"+t._s(t.birth))])])},xt=[],Ct={data:function(){return{birth:""}},methods:{getBirth:function(){var t=this,e={url:"api/profile",method:"get",headers:{authorization:"Bearer "+document.cookie}};console.log(e.headers.authorization),b()(e).then((function(e){console.log(e.data),t.birth=e.data.birth})).catch((function(t){console.log(t)}))}}},yt=Ct,kt=(0,l.Z)(yt,Pt,xt,!1,null,null,null),Et=kt.exports,St=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("navbar"),i("crumbs"),i("div",{staticClass:"wrap-journal-buy"},[i("div",{staticClass:"journal-buy-left"},[i("div",{staticClass:"journal-buy-image"},[i("img",{attrs:{src:s(7226)("./"+t.$route.params.id+".webp"),alt:""}})])]),i("h1",[t._v("xxxxxx")])])],1)},At=[],$t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"crumbs"},[s("ul",[s("li",[s("router-link",{attrs:{to:"/"}},[t._v("首页")]),s("span",[t._v(" > ")])],1),t._m(0)])])},zt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"#"}},[t._v("艺术")])])}],Mt={},Lt=Mt,jt=(0,l.Z)(Lt,$t,zt,!1,null,null,null),Zt=jt.exports,Bt={data:function(){return{}},components:{Navbar:Z,Crumbs:Zt},computed:{}},Ot=Bt,Nt=(0,l.Z)(Ot,St,At,!1,null,null,null),Ht=Nt.exports;i.Z.use(d.Z);var Kt=[{name:"home",path:"/",components:{Home:wt},meta:"小凯杂志官网, 致力精品杂志"},{path:"/help",components:{Help:_t},meta:"小凯杂志帮助:有问必答"},{path:"/profile",components:{Profile:Et},meta:"个人主页"},{path:"/journal/:id/:name",components:{Navbar:Z,Crumbs:Zt,JournalBuy:Ht},beforeEnter:function(t,e,s){document.title=t.params.name,s()}}],Jt=new d.Z({mode:"history",base:"/",routes:Kt});Jt.beforeEach((function(t,e,s){document.title=t.meta,s()}));var Dt=Jt,It=s(4665);i.Z.use(It.ZP);var Tt,Vt,Ft=new It.ZP.Store({state:{location:""}}),Ut=Ft,qt=Ut,Rt=(0,l.Z)(qt,Tt,Vt,!1,null,null,null),Wt=Rt.exports;s(4029),s(3432);i.Z.config.productionTip=!1,new i.Z({router:Dt,store:Wt,render:function(t){return t(u)}}).$mount("#app")},7472:function(t,e,s){var i=s(6166);t.exports=function(t){var e=i.create({timeout:5e3});return e(t)}},7173:function(t,e,s){var i={"./1.webp":1676,"./10.webp":860,"./11.webp":3191,"./12.webp":1905,"./13.webp":1180,"./14.webp":830,"./15.webp":3957,"./16.webp":9532,"./17.webp":3720,"./18.webp":8688,"./19.webp":3731,"./2.webp":3451,"./20.webp":8085,"./21.webp":1522,"./3.webp":4694,"./4.webp":4825,"./5.webp":5273,"./6.webp":3125,"./7.webp":8764,"./8.webp":8772,"./9.webp":1268,"./jojo.jpeg":7292,"./journal.jpeg":5720};function a(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id=7173},7226:function(t,e,s){var i={"./1.webp":1676,"./10.webp":860,"./11.webp":3191,"./12.webp":1905,"./13.webp":1180,"./14.webp":830,"./15.webp":3957,"./16.webp":9532,"./17.webp":3720,"./18.webp":8688,"./19.webp":3731,"./2.webp":3451,"./20.webp":8085,"./21.webp":1522,"./3.webp":4694,"./4.webp":4825,"./5.webp":5273,"./6.webp":3125,"./7.webp":8764,"./8.webp":8772,"./9.webp":1268};function a(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id=7226},1676:function(t,e,s){"use strict";t.exports=s.p+"img/1.6dc73405.webp"},860:function(t,e,s){"use strict";t.exports=s.p+"img/10.931819b3.webp"},3191:function(t,e,s){"use strict";t.exports=s.p+"img/11.f437cc4b.webp"},1905:function(t,e,s){"use strict";t.exports=s.p+"img/12.0ab27416.webp"},1180:function(t,e,s){"use strict";t.exports=s.p+"img/13.37a8cc78.webp"},830:function(t,e,s){"use strict";t.exports=s.p+"img/14.912ebbee.webp"},3957:function(t,e,s){"use strict";t.exports=s.p+"img/15.56b8aa41.webp"},9532:function(t,e,s){"use strict";t.exports=s.p+"img/16.d4d1f45f.webp"},3720:function(t,e,s){"use strict";t.exports=s.p+"img/17.73ad3ede.webp"},8688:function(t,e,s){"use strict";t.exports=s.p+"img/18.c4ced5bb.webp"},3731:function(t,e,s){"use strict";t.exports=s.p+"img/19.18ec21e5.webp"},3451:function(t,e,s){"use strict";t.exports=s.p+"img/2.ff28eac4.webp"},8085:function(t,e,s){"use strict";t.exports=s.p+"img/20.8d182b43.webp"},1522:function(t,e,s){"use strict";t.exports=s.p+"img/21.0058d3a6.webp"},4694:function(t,e,s){"use strict";t.exports=s.p+"img/3.41d057ec.webp"},4825:function(t,e,s){"use strict";t.exports=s.p+"img/4.db9e5c40.webp"},5273:function(t,e,s){"use strict";t.exports=s.p+"img/5.aa6fbc81.webp"},3125:function(t,e,s){"use strict";t.exports=s.p+"img/6.c678d3f8.webp"},8764:function(t,e,s){"use strict";t.exports=s.p+"img/7.41769784.webp"},8772:function(t,e,s){"use strict";t.exports=s.p+"img/8.5d1416f5.webp"},1268:function(t,e,s){"use strict";t.exports=s.p+"img/9.26f19579.webp"},7292:function(t,e,s){"use strict";t.exports=s.p+"img/jojo.5cb8ee35.jpeg"},5720:function(t,e,s){"use strict";t.exports=s.p+"img/journal.9047359d.jpeg"}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var n=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=t,function(){var t=[];s.O=function(e,i,a,n){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],n=t[u][2];for(var o=!0,l=0;l<i.length;l++)(!1&n||r>=n)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(o=!1,n<r&&(r=n));if(o){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,a,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,n,r=i[0],o=i[1],l=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(l)var u=l(s)}for(e&&e(i);c<r.length;c++)n=r[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},i=self["webpackChunkmyjournalcli3"]=self["webpackChunkmyjournalcli3"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(693)}));i=s.O(i)})();
//# sourceMappingURL=app-legacy.bbd1a62e.js.map