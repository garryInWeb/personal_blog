(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0a3377"],{"00de":function(t,e,n){"use strict";n.r(e);var a={title:"单选",index:10,data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],currentRow:null}},methods:{setCurrent:function(t){this.$refs.singleTable.setCurrentRow(t)},handleCurrentChange:function(t){this.currentRow=t}}},r=n("2877"),l=Object(r.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":""},on:{"current-change":e.handleCurrentChange}},[n("el-table-column",{attrs:{type:"index",width:"50"}}),n("el-table-column",{attrs:{property:"date",label:"日期",width:"120"}}),n("el-table-column",{attrs:{property:"name",label:"姓名",width:"120"}}),n("el-table-column",{attrs:{property:"address",label:"地址"}})],1),n("div",{staticStyle:{"margin-top":"20px"}},[n("el-button",{on:{click:function(t){return e.setCurrent(e.tableData[1])}}},[e._v("选中第二行")]),n("el-button",{on:{click:function(t){return e.setCurrent()}}},[e._v("取消选择")])],1)],1)},[],!1,null,null,null);e.default=l.exports}}]);