(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5347729a","chunk-2d237cb7","chunk-2d0c82a1"],{"545a":function(t,n){t.exports="你可以点击每个演示卡片右上角的刷新按钮检查每次 `mock` 不同的结果\r\n\r\n官方演示页面 [http://mockjs.com/examples.html](http://mockjs.com/examples.html)\r\n\r\n官方 `Wiki` [https://github.com/nuysoft/Mock/wiki/Getting-Started](https://github.com/nuysoft/Mock/wiki/Getting-Started)"},a21f:function(t,n,e){var o=e("584a"),c=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return c.stringify.apply(c,arguments)}},c725:function(t,n,e){"use strict";e.r(n);var o=e("d60c").a,c=e("2877"),i=Object(c.a)(o,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("d2-container",{attrs:{filename:e.filename}},[o("template",{slot:"header"},[e._v("数据占位符")]),o("d2-markdown",{staticClass:"d2-mb",attrs:{source:e.doc}}),e._l(e.settingDPD,function(t,n){return o("d2-demo-mock-card",{key:n,staticStyle:{"margin-bottom":"0px !important"},attrs:{title:t.title,code:JSON.stringify(t.json,null,2),mock:e.mockResult[n]},on:{reload:function(t){return e.doMock(n)}}})})],2)},[],!1,null,null,null);n.default=i.exports},d60c:function(t,l,d){"use strict";(function(t){var n=d("f499"),e=d.n(n),o=(d("ac6a"),d("2b0e")),c=d("2ef0"),i=d("96eb"),s=d.n(i),a=d("fd47"),r=d("545a"),u=d.n(r);l.a={components:{"d2-demo-mock-card":function(){return d.e("chunk-d9dbdaa0").then(d.bind(null,"4923"))}},data:function(){return{filename:t,mockResult:[],settingDPD:a.default,settingDPDClone:Object(c.cloneDeep)(a.default),doc:u.a}},mounted:function(){var e=this;this.settingDPD.forEach(function(t,n){e.doMock(n)})},methods:{doMock:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;o.default.set(this.mockResult,t,e()(s.a.mock(this.settingDPDClone[t].json),null,2))}}}}).call(this,"src\\pages\\demo\\plugins\\mock\\dpd.vue?vue&type=script&lang=js&")},f499:function(t,n,e){t.exports=e("a21f")},fd47:function(t,n,e){"use strict";e.r(n),n.default=[{title:"占位符演示",json:{name:{first:"@FIRST",middle:"@FIRST",last:"@LAST",full:"@first @middle @last"}}}]}}]);