(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0e4af568","chunk-2d0c1021","chunk-2d2221c1"],{"43e1":function(n,t,a){"use strict";a.r(t),t.default="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :options=\"options\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: 'ID',\n          key: 'id'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '数值 1',\n          key: 'amount1'\n        },\n        {\n          title: '数值 2',\n          key: 'amount2'\n        },\n        {\n          title: '数值 3',\n          key: 'amount3'\n        }\n      ],\n      data: [\n        {\n          id: '12987122',\n          name: '王小虎',\n          amount1: '234',\n          amount2: '3.2',\n          amount3: 10\n        },\n        {\n          id: '12987123',\n          name: '王小虎',\n          amount1: '165',\n          amount2: '4.43',\n          amount3: 12\n        },\n        {\n          id: '12987124',\n          name: '王小虎',\n          amount1: '324',\n          amount2: '1.9',\n          amount3: 9\n        },\n        {\n          id: '12987125',\n          name: '王小虎',\n          amount1: '621',\n          amount2: '2.2',\n          amount3: 17\n        },\n        {\n          id: '12987126',\n          name: '王小虎',\n          amount1: '539',\n          amount2: '4.1',\n          amount3: 15\n        }\n      ],\n      options: {\n        border: true,\n        spanMethod ({ row, column, rowIndex, columnIndex }) {\n          if (columnIndex === 0) {\n            if (rowIndex % 2 === 0) {\n              return {\n                rowspan: 2,\n                colspan: 1\n              }\n            } else {\n              return {\n                rowspan: 0,\n                colspan: 0\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n<\/script>"},"785d":function(n,t,a){"use strict";a.r(t);var o=a("b980").a,e=a("2877"),u=Object(e.a)(o,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("d2-container",{attrs:{filename:n.filename}},[a("template",{slot:"header"},[n._v("合并列")]),a("d2-crud",{attrs:{columns:n.columns,data:n.data,options:n.options}}),a("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[a("d2-markdown",{attrs:{source:n.doc}})],1),a("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[a("d2-highlight",{attrs:{code:n.code}})],1),a("template",{slot:"footer"},[a("d2-link-btn",{attrs:{title:"文档",link:"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)},[],!1,null,null,null);t.default=u.exports},b980:function(n,e,u){"use strict";(function(n){var t=u("cce0"),a=u.n(t),o=u("43e1");e.a={data:function(){return{filename:n,doc:a.a,code:o.default,columns:[{title:"ID",key:"id"},{title:"姓名",key:"name"},{title:"数值 1",key:"amount1"},{title:"数值 2",key:"amount2"},{title:"数值 3",key:"amount3"}],data:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}],options:{border:!0,spanMethod:function(n){n.row,n.column;var t=n.rowIndex;if(0===n.columnIndex)return t%2==0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}}}}}}}).call(this,"src\\pages\\demo\\d2-crud\\demo15\\index.vue?vue&type=script&lang=js&")},cce0:function(n,t){n.exports="通过给 `options` 传入 `spanMethod` 方法可以实现合并行，方法的参数是一个对象，里面包含当前行 `row` 、当前列 `column` 、当前行号 `rowIndex` 、当前列号 `columnIndex` 四个属性。该函数可以返回一个键名为 `rowspan` 和 `colspan` 的对象。代码如下：\r\n"}}]);