(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4a62a114","chunk-2d0d30e3"],{"443e":function(e,t,a){"use strict";a.r(t);var l=a("ee23").a,n=a("2877"),s=Object(n.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",{attrs:{filename:e.filename,type:"card"}},[a("template",{slot:"header"},[e._v("导出表格")]),a("div",{staticClass:"d2-mb"},[a("el-button",{attrs:{type:"primary"},on:{click:e.exportCsv}},[a("d2-icon",{attrs:{name:"download"}}),e._v("\n      导出 CSV\n    ")],1),a("el-button",{attrs:{type:"primary"},on:{click:e.exportExcel}},[a("d2-icon",{attrs:{name:"download"}}),e._v("\n      导出 Excel\n    ")],1)],1),a("el-table",e._b({staticStyle:{width:"100%"}},"el-table",e.table,!1),e._l(e.table.columns,function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.prop,label:e.label}})}),1)],2)},[],!1,null,null,null);t.default=s.exports},"5aab":function(e,t,a){"use strict";a.r(t);var l=a("96eb"),n=a.n(l).a.mock({"data|3-6":[{"id|+1":1,name:"@CNAME",creatDate:"@DATE",address:"@CITY",zip:"@ZIP"}]});t.default={data:n.data,columns:[{label:"ID",prop:"id"},{label:"名称",prop:"name"},{label:"创建日期",prop:"creatDate"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"}]}},ee23:function(e,a,l){"use strict";(function(e){var t=l("5aab");a.a={data:function(){return{filename:e,table:{columns:t.default.columns,data:t.default.data,size:"mini",stripe:!0,border:!0}}},methods:{exportCsv:function(){var e=this;0<arguments.length&&void 0!==arguments[0]&&arguments[0];this.$export.csv({columns:this.table.columns,data:this.table.data}).then(function(){e.$message("导出CSV成功")})},exportExcel:function(){var e=this;this.$export.excel({columns:this.table.columns,data:this.table.data,header:"导出 Excel",merges:["A1","E1"]}).then(function(){e.$message("导出表格成功")})}}}}).call(this,"src\\pages\\demo\\plugins\\export\\table.vue?vue&type=script&lang=js&")}}]);