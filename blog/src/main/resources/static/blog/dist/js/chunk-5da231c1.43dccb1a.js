(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5da231c1","chunk-102834e1"],{"23a0":function(e,t,a){"use strict";var r=a("786a");a.n(r).a},"31db":function(e,a,r){"use strict";(function(e){var t=r("e7f0");a.a={mixins:[t.default],data:function(){return{filename:e}},beforeRouteEnter:function(e,t,a){var r=e.params.id;a(r?function(e){e.resetFormData(),e.getFormData(r)}:new Error("未指定ID"))},beforeRouteUpdate:function(e,t,a){var r=e.params.id;r?(this.resetFormData(),this.getFormData(r),a()):a(new Error("未指定ID"))}}}).call(this,"src\\pages\\demo\\business\\issues\\142\\edit.vue?vue&type=script&lang=js&")},"786a":function(e,t,a){},cfab:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return s});var r=a("9bd2");function n(){return Object(r.a)({url:"/demo/business/issues/142/fetch",method:"get"})}function s(e){return Object(r.a)({url:"/demo/business/issues/142/detail",method:"get",params:{id:e}})}},e20f:function(e,t,a){"use strict";a.r(t);var r=a("31db").a,n=(a("23a0"),a("2877")),s=Object(n.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("d2-container",{staticClass:"page",attrs:{filename:t.filename,type:"card"}},[a("el-form",{ref:"form",staticClass:"page--form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("修改")])],1)],1)],1)},[],!1,null,null,null);t.default=s.exports},e7f0:function(e,t,a){"use strict";a.r(t);a("7f7f");var r=a("795b"),s=a.n(r),i=(a("cadf"),a("551c"),a("f751"),a("097d"),a("cfab"));t.default={props:{id:{type:String,required:!0}},data:function(){return{form:{name:"",address:""}}},methods:{resetFormData:function(){this.form={name:"",address:""}},getFormData:function(e){var n=this;return new s.a(function(r,t){n.resetFormData(),Object(i.a)(e).then(function(e){var t=e.name,a=e.address;n.form={name:t,address:a},n.$message.success("getFormData"),r()}).catch(function(e){t(e)})})},handleSubmit:function(){this.$notify({title:"Submit",message:"提交了表单",type:"info"})}}}}}]);