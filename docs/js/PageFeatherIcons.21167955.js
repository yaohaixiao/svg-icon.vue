"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[988],{9220:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var o=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Feather")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Feather")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s(`${e.featherSet.title}（${e.count}）`)+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:10}},e._l(e.symbols,(function(e,a){return t("icon-cell",{key:`cell-${a}`,attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Cole Bemis")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"https://feathericons.com/"}},[e._v("https://feathericons.com/")])]),t("li",[e._v("License：MIT")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/entypo-plus"}},[e._v("Entypo+ 图标库")])],1),t("div",{staticClass:"util-align-right base-footer__navigation"},[e._v(" Next Page： "),t("router-link",{attrs:{to:"/icons/font-awesome"}},[e._v("Font Awesome 图标库")])],1)])],1)},n=[],r=a(90),s=a(9536),i=a(2935),c=a(6212),l=a(3734),u=a(7371),d=a(7156),m=a(5868),h=a(4693),b=a(9217),f=a(8249);const _=()=>a.e(909).then(a.bind(a,1909));var g={name:"PageFeatherIcons",componentName:"PageFeatherIcons",components:{BaseContainer:r.Z,BaseHeader:s.Z,BaseMain:i.Z,BaseBreadcrumb:c.Z,BaseBreadcrumbItem:l.Z,BaseFooter:u.Z,BaseInput:d.Z,BaseGrid:m.Z,BaseEmpty:h.Z,IconCell:_},data(){return{featherSet:b.Z,keyword:"",symbols:[]}},computed:{count(){return this.symbols.length}},created(){this.update()},methods:{update(){this.symbols=this.featherSet.symbols.filter((e=>{const t=this.getSymbolName(e).toLowerCase();return t.indexOf(this.keyword.toLowerCase())>-1}))},getSymbolName(e){const t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,f.Ds)((function(){this.update()}),300)}},y=g,p=a(1001),v=(0,p.Z)(y,o,n,!1,null,"0a334924",null),C=v.exports},8249:function(e,t,a){a.d(t,{Ds:function(){return r},Xh:function(){return s},dX:function(){return n},vQ:function(){return o}});const o=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const a=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),a&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(a))},n=(e,t)=>{const a=new Blob([t]),o=document.createElement("a");o.download=e,o.href=URL.createObjectURL(a),o.click(),URL.revokeObjectURL(a)},r=(e,t=300)=>{let a;return function(...o){clearTimeout(a),a=setTimeout((()=>e.apply(this,o)),t)}},s=e=>{if(null===e)return null;let t=Object.assign({},e);return Object.keys(t).forEach((a=>t[a]="object"===typeof e[a]?s(e[a]):e[a])),Array.isArray(e)?(t.length=e.length,Array.from(t)):t}}}]);