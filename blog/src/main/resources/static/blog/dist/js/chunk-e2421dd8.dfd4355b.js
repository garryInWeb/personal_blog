(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e2421dd8"],{"050e":function(e,t,n){"use strict";n.r(t);var a=n("4d4d").a,i=n("2877"),o=Object(i.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",{attrs:{filename:e.filename}},[n("demo-page-header",{ref:"header",attrs:{slot:"header"},on:{submit:e.handleSubmit},slot:"header"}),n("demo-page-main",{attrs:{"table-data":e.table,loading:e.loading}}),n("demo-page-footer",{attrs:{slot:"footer",current:e.page.pageCurrent,size:e.page.pageSize,total:e.page.pageTotal},on:{change:e.handlePaginationChange},slot:"footer"})],1)},[],!1,null,null,null);t.default=o.exports},"4d4d":function(e,t,i){"use strict";(function(e){var n=i("cebc"),a=i("ef69");t.a={name:"demo-business-table-1",components:{DemoPageHeader:function(){return i.e("chunk-2d0a4418").then(i.bind(null,"0651"))},DemoPageMain:function(){return i.e("chunk-47e4ca20").then(i.bind(null,"6628"))},DemoPageFooter:function(){return i.e("chunk-2d2214a2").then(i.bind(null,"ca5c"))}},data:function(){return{filename:e,table:[],loading:!1,page:{pageCurrent:1,pageSize:10,pageTotal:0}}},methods:{handlePaginationChange:function(e){var t=this;this.$notify({title:"分页变化",message:"当前第".concat(e.current,"页 共").concat(e.total,"条 每页").concat(e.size,"条")}),this.page=e,this.$nextTick(function(){t.$refs.header.handleFormSubmit()})},handleSubmit:function(e){var t=this;this.loading=!0,this.$notify({title:"开始请求模拟表格数据"}),Object(a.a)(Object(n.a)({},e,this.page)).then(function(e){t.loading=!1,t.$notify({title:"模拟表格数据请求完毕"}),t.table=e.list,t.page.pageTotal=e.page.total}).catch(function(e){t.loading=!1,t.$notify({title:"模拟表格数据请求异常"})})}}}}).call(this,"src\\pages\\demo\\business\\table\\1\\index.vue?vue&type=script&lang=js&")},ef69:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("9bd2");function i(e){return Object(a.a)({url:"/demo/business/table/1/fetch",method:"get",params:e})}}}]);