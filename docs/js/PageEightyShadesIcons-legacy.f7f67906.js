"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[517],{2725:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});a(2222);var s=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Eighty Shades")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Eighty Shades")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s("".concat(e.eightyShadesSet.title,"（").concat(e.count,"）"))+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:10}},e._l(e.symbols,(function(e,a){return t("icon-cell",{key:"cell-".concat(a),attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Victor Erixon")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"http://dribbble.com/shots/928458-80-Shades-of-White-Icons"}},[e._v(" http://dribbble.com/shots/928458-80-Shades-of-White-Icons ")])]),t("li",[e._v("License：Custom (free to use)")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/broccolidry"}},[e._v("Broccolidry 图标库")])],1),t("div",{staticClass:"util-align-right base-footer__navigation"},[e._v(" Next Page： "),t("router-link",{attrs:{to:"/icons/entypo-plus"}},[e._v("Entypo+ 图标库")])],1)])],1)},o=[],r=(a(1539),a(8783),a(3948),a(7327),a(4916),a(4723),a(90)),i=a(3197),n=a(3839),c=a(6212),l=a(7886),u=a(7371),h=a(7673),d=a(827),b=a(6093),_=a(4239),m=a(8249),f=function(){return a.e(638).then(a.bind(a,4341))},y={name:"PageEightyShadesIcons",componentName:"PageEightyShadesIcons",components:{BaseContainer:r.Z,BaseHeader:i.Z,BaseMain:n.Z,BaseBreadcrumb:c.Z,BaseBreadcrumbItem:l.Z,BaseFooter:u.Z,BaseInput:h.Z,BaseGrid:d.Z,BaseEmpty:b.Z,IconCell:f},data:function(){return{eightyShadesSet:_.Z,keyword:"",symbols:[]}},computed:{count:function(){return this.symbols.length}},created:function(){this.update()},methods:{update:function(){var e=this;this.symbols=this.eightyShadesSet.symbols.filter((function(t){var a=e.getSymbolName(t).toLowerCase();return a.indexOf(e.keyword.toLowerCase())>-1}))},getSymbolName:function(e){var t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,m.Ds)((function(){this.update()}),300)}},g=y,v=a(1001),p=(0,v.Z)(g,s,o,!1,null,"618ea39b",null),C=p.exports}}]);