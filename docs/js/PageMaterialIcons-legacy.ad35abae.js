"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[676],{0:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});a(2222);var s=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Material")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Material")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s("".concat(e.materialSet.title,"（").concat(e.count,"）"))+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:16}},e._l(e.symbols,(function(e,a){return t("icon-cell",{key:"cell-".concat(a),attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Google")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"https://material.io/resources/icons"}},[e._v(" https://material.io/resources/icons ")])]),t("li",[e._v("License：Apache License 2.0")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/linecons"}},[e._v("Linecons 图标库")])],1),t("div",{staticClass:"util-align-right base-footer__navigation"},[e._v(" Next Page： "),t("router-link",{attrs:{to:"/icons/meteocons"}},[e._v("Meteocons 图标库")])],1)])],1)},n=[],r=a(124),i=(a(561),a(7327),a(1539),a(4916),a(4723),a(90)),o=a(5280),c=a(3839),l=a(6212),u=a(3734),m=a(7371),f=a(4485),h=a(827),b=a(4693),_=a(2905),d=a(8249),v=a(830),p=30,y={name:"PageMaterialIcons",componentName:"PageMaterialIcons",components:{BaseContainer:i.Z,BaseHeader:o.Z,BaseMain:c.Z,BaseBreadcrumb:l.Z,BaseBreadcrumbItem:u.Z,BaseFooter:m.Z,BaseInput:f.Z,BaseGrid:h.Z,BaseEmpty:b["default"]},data:function(){return{materialSet:_.Z,keyword:"",symbols:[],count:0}},created:function(){var e=this.materialSet.symbols,t=(0,d.Xh)(e);this.count=e.length,this.symbols=t.splice(0,p)},mounted:function(){var e=this,t=(0,d.Xh)(this.materialSet.symbols),a=function(){e.symbols=e.symbols.concat(t.splice(0,p))};this.$nextTick((function(){setTimeout((function(){(0,v.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.length>0)){e.next=6;break}return a(),void(e.next=4);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))()}),150)}))},methods:{query:function(e){var t=this,a=this.materialSet.symbols.filter((function(a){var s=t.getSymbolName(a).toLowerCase();return s.indexOf(e.toLowerCase())>-1}));this.count=a.length,this.symbols=a},getSymbolName:function(e){var t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,d.Ds)((function(){this.query(this.keyword)}),300)}},g=y,k=a(1001),w=(0,k.Z)(g,s,n,!1,null,null,null),x=w.exports},830:function(e,t,a){var s=a(8673),n=function(e){return(0,s.mf)(e)&&(e=e()),!(!e||!(0,s.mf)(e.next))&&function t(){var a=performance.now(),n=null;do{n=e.next()}while(!n.done&&performance.now()-a<25);if(n.done)return!1;(0,s.mf)(requestIdleCallback)?requestIdleCallback(t):setTimeout(t,10)}};t["Z"]=n}}]);