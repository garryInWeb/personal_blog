(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0e728a7c"],{"7a48":function(e,r,n){"use strict";n.r(r);var s=n("814b").a,t=n("2877"),a=Object(t.a)(s,function(){var r=this,e=r.$createElement,n=r._self._c||e;return n("d2-container",{attrs:{filename:r.filename,type:"card"}},[n("el-form",{ref:"sendForm",attrs:{model:r.sendForm,rules:r.rules,"label-position":"top"}},[n("el-form-item",{attrs:{label:"username 通过动态路由匹配发送",prop:"username"}},[n("el-input",{staticStyle:{width:"300px"},model:{value:r.sendForm.username,callback:function(e){r.$set(r.sendForm,"username",e)},expression:"sendForm.username"}})],1),n("el-form-item",{attrs:{label:"userid 通过参数发送",prop:"userid"}},[n("el-input",{staticStyle:{width:"300px"},model:{value:r.sendForm.userid,callback:function(e){r.$set(r.sendForm,"userid",e)},expression:"sendForm.userid"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return r.handleSubmit("sendForm")}}},[r._v("跳转到接收页面")])],1)],1)],1)},[],!1,null,null,null);r.default=a.exports},"814b":function(e,r,n){"use strict";(function(e){r.a={data:function(){return{filename:e,sendForm:{username:"FairyEver",userid:"001"},rules:{username:[{required:!0,message:"请输入要发送的用户名",trigger:"blur"}],userid:[{required:!0,message:"请输入要发送的用户ID",trigger:"blur"}]}}},methods:{handleSubmit:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;r.$router.push({name:"demo-playground-page-argu-get",params:{username:r.sendForm.username},query:{userid:r.sendForm.userid}})})}}}}).call(this,"src\\pages\\demo\\playground\\page-argu\\send.vue?vue&type=script&lang=js&")}}]);