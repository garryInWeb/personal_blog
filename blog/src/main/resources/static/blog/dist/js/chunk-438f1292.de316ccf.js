(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-438f1292"],{3207:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var a=n("9bd2");function l(){return Object(a.a)({url:"/demo/plugins/mock/ajax",method:"get"})}},"677c":function(t,e,n){"use strict";n.r(e);var a=n("b8fb").a,l=n("2877"),i=Object(l.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",{attrs:{filename:t.filename}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.ajax}},[n("d2-icon",{attrs:{name:"paper-plane"}}),t._v("\n      发送请求\n    ")],1)],1),n("el-table",t._b({staticStyle:{width:"100%"}},"el-table",t.table,!1),t._l(t.table.columns,function(t,e){return n("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label}})}),1)],1)},[],!1,null,null,null);e.default=i.exports},b8fb:function(t,l,i){"use strict";(function(t){var e=i("a4bb"),n=i.n(e),a=i("3207");l.a={name:"demo-plugins-mock-ajax",data:function(){return{filename:t,table:{columns:[],data:[],size:"mini",stripe:!0,border:!0}}},methods:{ajax:function(){var e=this;Object(a.a)().then(function(t){e.table.columns=n()(t.list[0]).map(function(t){return{label:t,prop:t}}),e.table.data=t.list}).catch(function(){})}}}}).call(this,"src\\pages\\demo\\plugins\\mock\\ajax.vue?vue&type=script&lang=js&")}}]);