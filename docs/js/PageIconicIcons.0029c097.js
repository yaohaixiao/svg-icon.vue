"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[880],{386:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var o=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Iconic")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Iconic")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s(`${e.iconicSet.title}（${e.count}）`)+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:10}},e._l(e.symbols,(function(e,n){return t("icon-cell",{key:`cell-${n}`,attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：P.J. Onori")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"https://github.com/somerandomdude/Iconic"}},[e._v(" https://github.com/somerandomdude/Iconic ")])]),t("li",[e._v("License：CC BY-SA 3.0")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/hawcons"}},[e._v("Hawcons 图标库")])],1),t("div",{staticClass:"util-align-right base-footer__navigation"},[e._v(" Next Page： "),t("router-link",{attrs:{to:"/icons/linecons"}},[e._v("Linecons 图标库")])],1)])],1)},a=[],s=n(90),r=n(2941),c=n(3839),i=n(6212),l=n(7886),u=n(7371),d=n(197),m=n(827),b=n(6093),h=n(7546),_=n(8249);const f=()=>n.e(638).then(n.bind(n,1909));var g={name:"PageIconicIcons",componentName:"PageIconicIcons",components:{BaseContainer:s.Z,BaseHeader:r.Z,BaseMain:c.Z,BaseBreadcrumb:i.Z,BaseBreadcrumbItem:l.Z,BaseFooter:u.Z,BaseInput:d.Z,BaseGrid:m.Z,BaseEmpty:b.Z,IconCell:f},data(){return{iconicSet:h.Z,keyword:"",symbols:[]}},computed:{count(){return this.symbols.length}},created(){this.update()},methods:{update(){this.symbols=this.iconicSet.symbols.filter((e=>{const t=this.getSymbolName(e).toLowerCase();return t.indexOf(this.keyword.toLowerCase())>-1}))},getSymbolName(e){const t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,_.Ds)((function(){this.update()}),300)}},y=g,p=n(1001),v=(0,p.Z)(y,o,a,!1,null,"2551e0f2",null),C=v.exports},8249:function(e,t,n){n.d(t,{Ds:function(){return s},Xh:function(){return r},dX:function(){return a},vQ:function(){return o}});const o=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))},a=(e,t)=>{const n=new Blob([t]),o=document.createElement("a");o.download=e,o.href=URL.createObjectURL(n),o.click(),URL.revokeObjectURL(n)},s=(e,t=300)=>{let n;return function(...o){clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}},r=e=>{if(null===e)return null;let t=Object.assign({},e);return Object.keys(t).forEach((n=>t[n]="object"===typeof e[n]?r(e[n]):e[n])),Array.isArray(e)?(t.length=e.length,Array.from(t)):t}}}]);