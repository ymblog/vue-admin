webpackJsonp([10],{Jogw:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},a,!1,function(e){n("Jogw")},null,null).exports,r=n("/ocq"),c=n("mtWM"),u=n.n(c),l=n("NYxO"),d={SET_DATA:function(e,t){e.data=t}},s=n("mvHQ"),m=n.n(s),f=n("Gu7T"),p=n.n(f),h=n("//Fk"),v=n.n(h),g={cookie:{dataName:"adminData",set:function(e,t){if(window.localStorage)localStorage.removeItem(e),localStorage.setItem(e,t);else{var n=new Date;n.setTime(n.getTime()+2592e3),document.cookie=e+"="+escape(t)+";expires="+n.toGMTString()}},delete:function(e){if(window.localStorage)localStorage.removeItem(e);else{var t=new Date;t.setTime(t.getTime()-1);var n=getCookie(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}},get:function(e){if(window.localStorage){var t=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return n=localStorage.getItem(e)}var n;t=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(n=document.cookie.match(t))?unescape(n[2]):null}}},w={login:function(e,t){var n=e.commit;return new v.a(function(e,a){var i={2:{title:"系统管理",icon:"el-icon-setting",index:"2"},"2-1":{title:"子账号管理",index:"2-1",name:"accountList"},3:{title:"布局",icon:"el-icon-menu",index:"3"},"3-1":{title:"表单",index:"3-1",name:"form"},"3-2":{title:"表格",index:"3-2",name:"table"},4:{title:"其他",icon:"el-icon-tickets",index:"4"},"4-1":{title:"插件",index:"4-1",name:"plugin"}};o.default.prototype.$ajax({url:"/login",method:"POST",data:{username:t.username,password:t.password}}).then(function(t){var o=t.data,a=[];o.navList.forEach(function(e){var t={};t=i[e.nav],e.children.length>0&&(t.children=[],e.children.forEach(function(e){t.children=[].concat(p()(t.children),[i[e]])})),a=[].concat(p()(a),[t])});var r={token:o.token,name:o.name,list:a};g.cookie.set(g.cookie.dataName,m()(r)),n("SET_DATA",r),e()}).catch(function(e){a(e)})})},logOut:function(e){var t=e.commit,n=e.state;return new v.a(function(e,a){o.default.prototype.$ajax({url:"/logout",method:"POST",data:{token:n.data.token}}).then(function(){t("SET_DATA",""),g.cookie.delete(g.cookie.dataName),e()}).catch(function(e){a(e)})})}},x=n("UjVw"),T=n.n(x);o.default.use(l.a);var b=new l.a.Store({state:{data:""},getters:T.a,actions:w,mutations:d}),k=n("zL8q"),S=n.n(k),y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"toast"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.isShowToast,expression:"isShowToast"}],staticClass:"lt-toast",attrs:{id:"toast-box"}},[t("p",[this._v(this._s(this.content))])])])},staticRenderFns:[]};var A=n("VU/8")(null,y,!1,function(e){n("UqVy")},"data-v-13d8c5c6",null).exports,E=u.a.create({baseURL:"http://rap2api.taobao.org/app/mock/116731/",timeout:5e3,headers:{"Content-type":"application/x-www-form-urlencoded"}});E.interceptors.request.use(function(e){return e.headers.token=b.state.data.token||g.cookie.get(g.cookie.dataName),e},function(e){Object(k.Message)({message:"登录已失效,请重新登录",type:"error",duration:2e3}),b.dispatch("logout").then(function(){location.reload()})}),E.interceptors.response.use(function(e){var t=e.data;if(1===t.code)return t;1002===t.code?k.MessageBox.confirm("你已被登出，可以取消继续留在该页面，或者重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){b.dispatch("logout").then(function(){location.reload()})}):Object(k.Message)({message:t.message,type:"error",duration:2e3})},function(e){Object(k.Message)({message:"系统繁忙,请重试",type:"error",duration:2e3})});var _={install:function(e){e.prototype.$ajax=E;var t="";e.prototype.$toast=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"系统繁忙,请重试",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;if(""==t){var a=e.extend(A);t=new a({data:{content:n,isShowToast:!0}}),document.body.appendChild(t.$mount().$el)}else t.isShowToast=!0,t.content=n;setTimeout(function(){t.isShowToast=!1},o)}}},N=function(e){return n.e(6).then(function(){return e(n("fYsj"))}.bind(null,n)).catch(n.oe)},O=function(e){return n.e(0).then(function(){return e(n("7xyD"))}.bind(null,n)).catch(n.oe)};o.default.use(_),o.default.use(r.a);var j=["/login","/error"],$=new r.a({routes:[{path:"/",component:N,redirect:"/index",children:[{path:"index",name:"index",component:function(e){return n.e(5).then(function(){return e(n("Qt9A"))}.bind(null,n)).catch(n.oe)},meta:{title:"首页",nav:"1"}}]},{path:"/error",name:"error",component:function(e){return n.e(8).then(function(){return e(n("kHdO"))}.bind(null,n)).catch(n.oe)}},{path:"/login",name:"login",component:function(e){return n.e(1).then(function(){return e(n("QlWu"))}.bind(null,n)).catch(n.oe)}},{path:"/setting",name:"setting",redirect:"/setting/account",component:N,meta:{title:"系统管理"},children:[{path:"account",name:"accountList",component:function(e){return n.e(3).then(function(){return e(n("K3aq"))}.bind(null,n)).catch(n.oe)},meta:{title:"子账号管理",nav:"2-1"},children:[{path:"add",name:"accountAdd",component:O,meta:{title:"新增子账号",nav:"2-1-1"}},{path:"edit/:id",name:"accountEdit",component:O,meta:{title:"编辑子账号",nav:"2-1-1"}}]}]},{path:"/layout",name:"layout",redirect:"/layout/form",component:N,meta:{title:"布局"},children:[{path:"form",name:"form",component:function(e){return n.e(7).then(function(){return e(n("TYXc"))}.bind(null,n)).catch(n.oe)},meta:{title:"表单",nav:"3-1"}},{path:"table",name:"table",component:function(e){return n.e(4).then(function(){return e(n("g6b9"))}.bind(null,n)).catch(n.oe)},meta:{title:"表格",nav:"3-2"}}]},{path:"/other",name:"other",redirect:"/other/plugin",component:N,meta:{title:"其他"},children:[{path:"plugin",name:"plugin",component:function(e){return n.e(2).then(function(){return e(n("ZABl"))}.bind(null,n)).catch(n.oe)},meta:{title:"插件",nav:"4-1"}}]},{path:"*",redirect:"/error",hidden:!0}]});$.beforeEach(function(e,t,n){-1==j.indexOf(e.path)?g.cookie.get(g.cookie.dataName)?b.state.data?n():(b.commit("SET_DATA",JSON.parse(g.cookie.get(g.cookie.dataName))),n()):n({path:"/login",query:{redirect:e.fullPath}}):n()});var D=$;n("tvR6"),o.default.filter("filter",function(e){}),o.default.directive("number",{bind:function(e){e.handler=function(){e.value=e.value.replace(/\D+/,"")},e.addEventListener("input",e.handler)},unbind:function(){el.removeEventListener("input",el.handler)}}),o.default.directive("focus",{inserted:function(e){e.focus()}});o.default.config.productionTip=!1,o.default.use(_),o.default.use(S.a),new o.default({el:"#app",store:b,router:D,components:{App:i},template:"<App/>"})},UjVw:function(e,t){},UqVy:function(e,t){},tvR6:function(e,t){}},["NHnr"]);