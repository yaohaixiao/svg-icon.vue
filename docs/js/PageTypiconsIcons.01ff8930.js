"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[42],{2819:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var o=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Typicons")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Typicons")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s(`${e.typiconsSet.title}（${e.count}）`)+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:16}},e._l(e.symbols,(function(e,s){return t("icon-cell",{key:`cell-${s}`,attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Stephen Hutchings")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"http://typicons.com/"}},[e._v("http://typicons.com/")])]),t("li",[e._v("License：CC BY-SA 3.0")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/steadysets"}},[e._v("Steadysets 图标库")])],1),t("div",{staticClass:"util-align-right base-footer__navigation"},[e._v(" Next Page： "),t("router-link",{attrs:{to:"/icons/vicons"}},[e._v("Vicons 图标库")])],1)])],1)},a=[],n=s(90),i=s(2941),r=s(3839),c=s(6212),l=s(3734),u=s(7371),h=s(7156),m=s(827),y=s(4693),b=s(358),d=s(8249),_=s(830),f={name:"PageTypiconsIcons",componentName:"PageTypiconsIcons",components:{BaseContainer:n.Z,BaseHeader:i.Z,BaseMain:r.Z,BaseBreadcrumb:c.Z,BaseBreadcrumbItem:l.Z,BaseFooter:u.Z,BaseInput:h.Z,BaseGrid:m.Z,BaseEmpty:y["default"]},data(){return{typiconsSet:b.Z,keyword:"",symbols:[],count:0}},created(){const e=this.typiconsSet.symbols,t=(0,d.Xh)(e);this.count=e.length,this.symbols=t.splice(0,30)},mounted(){const e=(0,d.Xh)(this.typiconsSet.symbols),t=()=>{this.symbols=this.symbols.concat(e.splice(0,6))};this.$nextTick((()=>{setTimeout((()=>{(0,_.Z)((function*(){while(e.length>0)t(),yield}))()}),150)}))},methods:{query(e){const t=this.typiconsSet.symbols.filter((t=>{const s=this.getSymbolName(t).toLowerCase();return s.indexOf(e.toLowerCase())>-1}));this.count=t.length,this.symbols=t},getSymbolName(e){const t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,d.Ds)((function(){this.query(this.keyword)}),300)}},p=f,v=s(1001),g=(0,v.Z)(p,o,a,!1,null,null,null),C=g.exports},830:function(e,t,s){var o=s(8673);const a=e=>((0,o.mf)(e)&&(e=e()),!(!e||!(0,o.mf)(e.next))&&function t(){const s=performance.now();let a=null;do{a=e.next()}while(!a.done&&performance.now()-s<25);if(a.done)return!1;(0,o.mf)(requestIdleCallback)?requestIdleCallback(t):setTimeout(t,10)});t["Z"]=a}}]);