"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[178],{9251:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});s(2222);var o=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Vicons")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Vicons")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s("".concat(e.viconsSet.title,"（").concat(e.count,"）"))+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:16}},e._l(e.symbols,(function(e,s){return t("icon-cell",{key:"cell-".concat(s),attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Victor Erixon")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"https://designmodo.com/linecons-free/"}},[e._v(" https://designmodo.com/linecons-free/ ")])]),t("li",[e._v("License：Custom (Free to use)")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/typicons"}},[e._v("Typicons 图标库")])],1),t("div",{staticClass:"util-align-center base-footer__navigation"}),t("div",{staticClass:"util-align-right base-footer__navigation"},[e._v(" Next Page： "),t("router-link",{attrs:{to:"/icons/wpzoom"}},[e._v("wpzoom 图标库")])],1)])],1)},i=[],a=s(90),n=s(3197),r=s(3839),c=s(6212),l=s(3734),u=s(7371),h=s(4485),m=s(827),b=s(4693),_=s(1406),f=s(8249),v=s(2471),d={name:"PageViconsIcons",componentName:"PageViconsIcons",components:{BaseContainer:a.Z,BaseHeader:n.Z,BaseMain:r.Z,BaseBreadcrumb:c.Z,BaseBreadcrumbItem:l.Z,BaseFooter:u.Z,BaseInput:h.Z,BaseGrid:m.Z,BaseEmpty:b.Z},mixins:[(0,v.Z)(_.Z)],data:function(){return{viconsSet:_.Z,keyword:"",symbols:[],count:0}},created:function(){var e=this.viconsSet.symbols,t=(0,f.Xh)(e);this.count=e.length,this.symbols=t}},y=d,g=s(1001),p=(0,g.Z)(y,o,i,!1,null,null,null),C=p.exports},2471:function(e,t,s){s.d(t,{Z:function(){return a}});s(7327),s(1539),s(561),s(4916),s(4723);var o=s(8249),i=s(8673);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{data:function(){return{iconSet:(0,o.Xh)(e),querySymbols:(0,o.Xh)(e.symbols||[])}},methods:{query:function(e){var t=this,s=this.size||60,a=this.iconSet.symbols.filter((function(s){var o=t.getSymbolName(s).toLowerCase();return o.indexOf(e.toLowerCase())>-1})),n=a.length;this.count=n,this.querySymbols=(0,o.Xh)(a),n>s&&!(0,i.o8)(this.page)?this.symbols=a.splice(0,s):this.symbols=a},getSymbolName:function(e){var t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,o.Ds)((function(){this.query(this.keyword)}),300),onPageChange:function(e){var t=this.size,s=(0,o.Xh)(this.querySymbols);this.page=e,this.symbols=s.splice((e-1)*t,t)}}}}}}]);