"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[988],{7463:function(e,t,s){s.r(t),s.d(t,{default:function(){return x}});var a=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Feather")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Feather")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s(`${e.featherSet.title}（${e.count}）`)+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:16}},e._l(e.symbols,(function(e,s){return t("icon-cell",{key:`cell-${s}`,attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Cole Bemis")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"https://feathericons.com/"}},[e._v("https://feathericons.com/")])]),t("li",[e._v("License：MIT")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/ever-icons"}},[e._v("Ever Icons 图标库")])],1),t("div",{staticClass:"util-align-center base-footer__navigation"},[t("base-pagination",{attrs:{page:e.page,"page-size":e.size,"total-count":e.count,layout:["prev","pager","next"],"prev-text":"","next-text":""},on:{"page-change":e.onPageChange}})],1),t("div",{staticClass:"util-align-right base-footer__navigation"},[e._v(" Next Page： "),t("router-link",{attrs:{to:"/icons/font-awesome"}},[e._v("Font Awesome 图标库")])],1)])],1)},i=[],o=s(90),r=s(2941),n=s(3839),c=s(6212),l=s(3734),u=s(7371),h=s(7156),m=s(827),b=s(4693),g=s(9624),_=s(9217),f=s(8249),y=s(2471),p={name:"PageFeatherIcons",componentName:"PageFeatherIcons",components:{BaseContainer:o.Z,BaseHeader:r.Z,BaseMain:n.Z,BaseBreadcrumb:c.Z,BaseBreadcrumbItem:l.Z,BaseFooter:u.Z,BaseInput:h.Z,BaseGrid:m.Z,BaseEmpty:b.Z,BasePagination:g.Z},mixins:[(0,y.Z)(_.Z)],data(){return{featherSet:_.Z,keyword:"",symbols:[],count:0,page:1,size:60}},created(){const e=this.featherSet.symbols,t=(0,f.Xh)(e);this.count=e.length,this.symbols=t.splice(0,this.size)}},d=p,v=s(1001),C=(0,v.Z)(d,a,i,!1,null,null,null),x=C.exports},2471:function(e,t,s){s.d(t,{Z:function(){return o}});var a=s(8249),i=s(8673);function o(e=[]){return{data(){return{iconSet:(0,a.Xh)(e),querySymbols:(0,a.Xh)(e.symbols||[])}},methods:{query(e){const t=this.size||60,s=this.iconSet.symbols.filter((t=>{const s=this.getSymbolName(t).toLowerCase();return s.indexOf(e.toLowerCase())>-1})),o=s.length;this.count=o,this.querySymbols=(0,a.Xh)(s),o>t&&!(0,i.o8)(this.page)?this.symbols=s.splice(0,t):this.symbols=s},getSymbolName(e){const t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,a.Ds)((function(){this.query(this.keyword)}),300),onPageChange(e){const t=this.size,s=(0,a.Xh)(this.querySymbols);this.page=e,this.symbols=s.splice((e-1)*t,t)}}}}}}]);