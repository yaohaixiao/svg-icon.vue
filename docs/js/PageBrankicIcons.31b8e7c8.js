"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[211],{1944:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var o=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Brankic 1979")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Brankic 1979")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s(`${e.brankic1979Set.title} （${e.count}）`)+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:10}},e._l(e.symbols,(function(e,a){return t("icon-cell",{key:`cell-${a}`,attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Brankic1979")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"http://dribbble.com/shots/587469-Free-16px-Broccolidryiconsaniconsetitisfullof-icons"}},[e._v(" http://dribbble.com/shots/587469-Free-16px-Broccolidryiconsaniconsetitisfullof-icons ")])]),t("li",[e._v("License：Custom (free to use)")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/default"}},[e._v("Default 图标库")])],1),t("div",{staticClass:"util-align-right base-footer__navigation"},[e._v(" Next Page： "),t("router-link",{attrs:{to:"/icons/broccolidry"}},[e._v("Broccolidry 图标库")])],1)])],1)},n=[],r=a(90),s=a(2941),i=a(3839),c=a(6212),l=a(7886),u=a(7371),d=a(197),b=a(827),m=a(6093),f=a(8253),h=a(8249);const _=()=>a.e(638).then(a.bind(a,1909));var y={name:"PageBrankicIcons",componentName:"PageBrankicIcons",components:{BaseContainer:r.Z,BaseHeader:s.Z,BaseMain:i.Z,BaseBreadcrumb:c.Z,BaseBreadcrumbItem:l.Z,BaseFooter:u.Z,BaseInput:d.Z,BaseGrid:b.Z,BaseEmpty:m.Z,IconCell:_},data(){return{brankic1979Set:f.Z,keyword:"",symbols:[]}},computed:{count(){return this.symbols.length}},created(){this.update()},methods:{update(){this.symbols=this.brankic1979Set.symbols.filter((e=>{const t=this.getSymbolName(e).toLowerCase();return t.indexOf(this.keyword.toLowerCase())>-1}))},getSymbolName(e){const t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,h.Ds)((function(){this.update()}),300)}},g=y,p=a(1001),v=(0,p.Z)(g,o,n,!1,null,"88aee27a",null),k=v.exports},8249:function(e,t,a){a.d(t,{Ds:function(){return r},Xh:function(){return s},dX:function(){return n},vQ:function(){return o}});const o=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const a=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),a&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(a))},n=(e,t)=>{const a=new Blob([t]),o=document.createElement("a");o.download=e,o.href=URL.createObjectURL(a),o.click(),URL.revokeObjectURL(a)},r=(e,t=300)=>{let a;return function(...o){clearTimeout(a),a=setTimeout((()=>e.apply(this,o)),t)}},s=e=>{if(null===e)return null;let t=Object.assign({},e);return Object.keys(t).forEach((a=>t[a]="object"===typeof e[a]?s(e[a]):e[a])),Array.isArray(e)?(t.length=e.length,Array.from(t)):t}}}]);