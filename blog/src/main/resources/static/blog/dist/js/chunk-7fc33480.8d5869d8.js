(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7fc33480"],{"218d":function(t,n,a){"use strict";a.r(n);var e=a("b1da").a,l=a("2877"),i=Object(l.a)(e,function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("d2-container",{attrs:{filename:t.filename}},[a("template",{slot:"header"},[a("el-alert",{attrs:{type:"success",closable:!1,title:"这个页面展示的是全部数据的存储结构，包括系统区域和存储区域，涵盖所有用户，也就是整个 D2Admin 的数据存储结构"}})],1),a("d2-highlight",{attrs:{code:t.dbData}}),a("template",{slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.load}},[t._v("\n      重新获取本地数据\n    ")])],1)],2)},[],!1,null,null,null);n.default=i.exports},a21f:function(t,n,a){var e=a("584a"),l=e.JSON||(e.JSON={stringify:JSON.stringify});t.exports=function(t){return l.stringify.apply(l,arguments)}},b1da:function(t,l,i){"use strict";(function(t){var n=i("f499"),a=i.n(n),e=i("c276");l.a={data:function(){return{filename:t,dbData:""}},mounted:function(){this.load()},methods:{load:function(){this.dbData=a()(e.a.db.value(),null,2)}}}}).call(this,"src\\pages\\demo\\playground\\db\\all\\index.vue?vue&type=script&lang=js&")},f499:function(t,n,a){t.exports=a("a21f")}}]);