"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[42],{7040:function(t,e,s){s.r(e),s.d(e,{default:function(){return C}});var a=function(){var t=this,e=t._self._c;return e("base-container",[e("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:t._u([{key:"filter",fn:function(){return[e("div",{staticClass:"page__filter"},[e("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:t.onQuery},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)]},proxy:!0}])},[e("base-breadcrumb",[e("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[t._v(" Home ")]),e("base-breadcrumb-item",{attrs:{to:"/icons"}},[t._v("Icons")]),e("base-breadcrumb-item",{attrs:{current:""}},[t._v("Typicons")])],1)],1),e("base-main",{attrs:{padding:"outer"}},[e("article",{staticClass:"article"},[e("h1",{staticClass:"article__h1"},[t._v("Typicons")]),e("h2",{staticClass:"article__h2"},[t._v(" "+t._s(`${t.typiconsSet.title}（${t.count}）`)+" ")]),t.count>0?e("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:16}},t._l(t.symbols,(function(t,s){return e("icon-cell",{key:`cell-${s}`,attrs:{symbol:t}})})),1):e("base-empty"),e("h2",{staticClass:"article__h2"},[t._v("Copyright")]),e("ul",[e("li",[t._v("Designer：Stephen Hutchings")]),e("li",[t._v(" Homepage: "),e("a",{attrs:{href:"http://typicons.com/"}},[t._v("http://typicons.com/")])]),e("li",[t._v("License：CC BY-SA 3.0")])])],1)]),e("base-footer",{attrs:{flex:"",height:"inner"}},[e("div",{staticClass:"util-align-left base-footer__navigation"},[t._v(" Prev Page： "),e("router-link",{attrs:{to:"/icons/steadysets"}},[t._v("Steadysets 图标库")])],1),e("div",{staticClass:"util-align-right base-footer__navigation"},[t._v(" Next Page： "),e("router-link",{attrs:{to:"/icons/vicons"}},[t._v("Vicons 图标库")])],1)])],1)},i=[],n=s(90),o=s(2941),r=s(3839),c=s(6212),l=s(3734),u=s(7371),h=s(7156),m=s(827),b=s(4693),d=s(358),y=s(8249),_=s(274),p={name:"PageTypiconsIcons",componentName:"PageTypiconsIcons",components:{BaseContainer:n.Z,BaseHeader:o.Z,BaseMain:r.Z,BaseBreadcrumb:c.Z,BaseBreadcrumbItem:l.Z,BaseFooter:u.Z,BaseInput:h.Z,BaseGrid:m.Z,BaseEmpty:b["default"]},mixins:[(0,_.Z)(d.Z)],data(){return{typiconsSet:d.Z,keyword:"",symbols:[],count:0}},created(){const t=this.typiconsSet.symbols,e=(0,y.Xh)(t);this.count=t.length,this.symbols=e.splice(0,30)}},f=p,g=s(1001),v=(0,g.Z)(f,a,i,!1,null,null,null),C=v.exports},274:function(t,e,s){s.d(e,{Z:function(){return u}});var a=s(8249),i=(s(7658),s(8673));const n=[];let o;function r(t){while(t.timeRemaining()>0&&n.length){const t=n.shift();if(!(0,i.mf)(t))return!1;t()}o=n.length?requestIdleCallback(r):0}const c=t=>{n.push(t),o||requestIdleCallback(r)};var l=c;function u(t=[]){return{data(){return{iconSet:(0,a.Xh)(t)}},mounted(){const t=(0,a.Xh)(this.iconSet.symbols);t.splice(0,30),this.draw(t)},methods:{draw(t=[]){const e=t=>{this.symbols=this.symbols.concat(t)};this.$nextTick((()=>{setTimeout((()=>{while(t.length>0){const s=t.splice(0,30);l((()=>{e(s)}))}}),150)}))},query(t){const e=this.iconSet.symbols.filter((e=>{const s=this.getSymbolName(e).toLowerCase();return s.indexOf(t.toLowerCase())>-1})),s=e.length;this.count=s,s>30?(this.symbols=e.splice(0,30),this.draw(e)):this.symbols=e},getSymbolName(t){const e=t.match(/icon-(\w+(-\w+)*)+/);return e[1]||""},onQuery:(0,a.Ds)((function(){this.query(this.keyword)}),300)}}}}}]);