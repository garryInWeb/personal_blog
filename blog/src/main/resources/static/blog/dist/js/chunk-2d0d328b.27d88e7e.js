(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0d328b"],{"5c29":function(n,e,t){"use strict";t.r(e),e.default="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :rowHandle=\"rowHandle\"\n      @custom-emit-1=\"handleCustomEvent\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ],\n      rowHandle: {\n        custom: [\n          {\n            text: '自定义按钮',\n            type: 'warning',\n            size: 'small',\n            emit: 'custom-emit-1'\n          }\n        ]\n      }\n    }\n  },\n  methods: {\n    handleCustomEvent ({index, row}) {\n      console.log(index)\n      console.log(row)\n    }\n  }\n}\n<\/script>"}}]);