(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-25676015","chunk-2d2109ac","chunk-2d22694a","chunk-2d0cc1ce","chunk-2d20958e","chunk-2d0b9bd4"],{1302:function(n,o,r){"use strict";(function(n){var e=r("33db"),t=r.n(e),a=r("4d19"),s=r("a955"),d=r("e8ef"),c=r("b932");o.a={components:{MyTag:c.default},data:function(){return{filename:n,doc:t.a,codeOverall:a.default,codePart:s.default,codeComponent:d.default,columns:[{title:"日期",key:"date",width:"180"},{title:"姓名",key:"name",width:"180"},{title:"地址",key:"address"},{title:"检查状态（点击可修改）",key:"check",component:{name:c.default,props:{myProps:"我是通过props传过来的数据！"}}}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",check:!0},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",check:!1},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",check:!0},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",check:!0}]}},methods:{handleDataChange:function(n){}}}}).call(this,"src\\pages\\demo\\d2-crud\\demo25\\index.vue?vue&type=script&lang=js&")},"33db":function(n,e){n.exports="向 `columns` 的 `component` 对象的 `name` 传入自定义组件来进行渲染，如果是[全局注册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)的自定义组件，只需传入组件名即可；如果是[局部注册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C)的组件，则需要传入`import` 的那个组件对象。自定义组件的写法需要符合[自定义组件使用v-model](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)的写法，可以在 `component` 中传入 `props` 字段，传入的字段可以在自定义组件中通过 `props` 接收，自定义组件还可以通过在 `props` 中定义 `scope` 字段来拿到当前行的所有数据，代码如下：\r\n"},"4d19":function(n,e,t){"use strict";t.r(e),e.default="<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      @d2-data-change=\"handleDataChange\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '姓名',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        },\n        {\n          title: '检查状态（点击可修改）',\n          key: 'check',\n          component: {\n            name: 'my-tag',\n            props: {\n              myProps: '我是通过props传过来的数据！'\n            }\n          }\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄',\n          check: true\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄',\n          check: false\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄',\n          check: true\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄',\n          check: true\n        }\n      ]\n    }\n  },\n  methods: {\n    handleDataChange (data) {\n      console.log(data)\n    }\n  }\n}\n<\/script>"},6649:function(n,e,t){"use strict";t.r(e);var a=t("1302").a,s=t("2877"),d=Object(s.a)(a,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("d2-container",{attrs:{filename:n.filename}},[t("template",{slot:"header"},[n._v("表格自定义组件")]),t("d2-crud",{ref:"d2Crud",attrs:{columns:n.columns,data:n.data},on:{"d2-data-change":n.handleDataChange}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:n.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("h4",[n._v("全局注册写法：")]),t("d2-highlight",{attrs:{code:n.codeOverall}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("h4",[n._v("局部注册写法：")]),t("d2-highlight",{attrs:{code:n.codePart}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("h4",[n._v("自定义组件 MyTag 代码：")]),t("d2-highlight",{attrs:{code:n.codeComponent}})],1),t("template",{slot:"footer"},[t("d2-link-btn",{attrs:{title:"文档",link:"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)},[],!1,null,null,null);e.default=d.exports},a955:function(n,e,t){"use strict";t.r(e),e.default="<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      @d2-data-change=\"handleDataChange\"/>\n  </div>\n</template>\n\n<script>\nimport MyTag from './MyTag'\n\nexport default {\n  components: {\n    MyTag\n  },\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '姓名',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        },\n        {\n          title: '检查状态（点击可修改）',\n          key: 'check',\n          component: {\n            name: MyTag,\n            props: {\n              myProps: '我是通过props传过来的数据！'\n            }\n          }\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄',\n          check: true\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄',\n          check: false\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄',\n          check: true\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄',\n          check: true\n        }\n      ]\n    }\n  },\n  methods: {\n    handleDataChange (data) {\n      console.log(data)\n    }\n  }\n}\n<\/script>"},b932:function(n,e,t){"use strict";t.r(e);var a={props:{value:{type:Boolean,require:!0},scope:{default:null},myProps:{default:null}},computed:{type:function(){return this.value?"success":"danger"},text:function(){return 1===this.scope.$index?this.myProps:3===this.scope.$index?"通过scope拿到了当前行日期："+this.scope.row.date:this.value?"是":"否"}},mounted:function(){},methods:{handleClick:function(){this.$emit("input",!this.value)}}},s=t("2877"),d=Object(s.a)(a,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{cursor:"pointer"}},[t("el-tag",{attrs:{type:e.type},nativeOn:{click:function(n){return e.handleClick(n)}}},[e._v(e._s(e.text))])],1)},[],!1,null,null,null);e.default=d.exports},e8ef:function(n,e,t){"use strict";t.r(e),e.default="<template>\n  <div style=\"cursor: pointer\">\n    <el-tag :type=\"type\" @click.native=\"handleClick\">{{ text }}</el-tag>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    value: {\n      type: Boolean,\n      require: true\n    },\n    // 本行的所有数据，此字段不需要额外配置\n    scope: {\n      default: null\n    },\n    // 通过 component 中 props 字段传过来的数据，此字段需要先在 component 中配置\n    myProps: {\n      default: null\n    }\n  },\n  computed: {\n    type () {\n      return this.value ? 'success' : 'danger'\n    },\n    text () {\n      if (this.scope.$index === 1) {\n        return this.myProps\n      } else if (this.scope.$index === 3) {\n        return '通过scope拿到了当前行日期：' + this.scope.row.date\n      }\n      return this.value ? '是' : '否'\n    }\n  },\n  mounted () {\n    console.log(this.scope)\n    console.log(this.myProps)\n  },\n  methods: {\n    handleClick () {\n      this.$emit('input', !this.value)\n    }\n  }\n}\n<\/script>"}}]);