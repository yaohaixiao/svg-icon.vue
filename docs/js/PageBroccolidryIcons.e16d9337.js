"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[6322],{7987:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var o=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Broccolidry")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Broccolidry")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s(`${e.broccolidrySet.title}（${e.count}）`)+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:16}},e._l(e.symbols,(function(e,n){return t("icon-cell",{key:`cell-${n}`,attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Visual Idiot")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"http://brankic1979.com/icons/"}},[e._v(" http://brankic1979.com/icons/ ")])]),t("li",[e._v("License：Custom (Free to use)")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/brankic-1979"}},[e._v("Brankic 1979 图标库")])],1),t("div",{staticClass:"util-align-right base-footer__navigation"},[e._v(" Next Page： "),t("router-link",{attrs:{to:"/icons/eighty-shades"}},[e._v(" Eighty Shades 图标库 ")])],1)])],1)},r=[],s=n(9138),i=n(8249),a=n(830);const c=()=>Promise.all([n.e(9992),n.e(7773)]).then(n.bind(n,90)),l=()=>Promise.all([n.e(8832),n.e(7620)]).then(n.bind(n,2941)),u=()=>Promise.all([n.e(213),n.e(6418)]).then(n.bind(n,3839)),d=()=>n.e(4529).then(n.bind(n,6212)),m=()=>Promise.all([n.e(3324),n.e(8207)]).then(n.bind(n,3734)),b=()=>Promise.all([n.e(3309),n.e(5819)]).then(n.bind(n,7371)),h=()=>n.e(1574).then(n.bind(n,7156)),y=()=>n.e(2496).then(n.bind(n,827)),f=()=>n.e(5825).then(n.bind(n,4693)),g=()=>n.e(8638).then(n.bind(n,1909)),_=30;var v={name:"PageBroccolidryIcons",componentName:"PageBroccolidryIcons",components:{BaseContainer:c,BaseHeader:l,BaseMain:u,BaseBreadcrumb:d,BaseBreadcrumbItem:m,BaseFooter:b,BaseInput:h,BaseGrid:y,BaseEmpty:f,IconCell:g},data(){return{broccolidrySet:s.Z,keyword:"",symbols:[],count:0}},created(){const e=this.broccolidrySet.symbols,t=(0,i.Xh)(e);this.count=e.length,this.symbols=t.splice(0,_)},mounted(){const e=(0,i.Xh)(this.broccolidrySet.symbols),t=()=>{this.symbols=this.symbols.concat(e.splice(0,_))};this.$nextTick((()=>{setTimeout((()=>{(0,a.Z)((function*(){while(e.length>0)t(),yield}))()}),150)}))},methods:{query(e){const t=this.broccolidrySet.symbols.filter((t=>{const n=this.getSymbolName(t).toLowerCase();return n.indexOf(e.toLowerCase())>-1}));this.count=t.length,this.symbols=t},getSymbolName(e){const t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,i.Ds)((function(){this.query(this.keyword)}),300)}},p=v,k=n(1001),C=(0,k.Z)(p,o,r,!1,null,null,null),w=C.exports},830:function(e,t,n){var o=n(8673);const r=e=>((0,o.mf)(e)&&(e=e()),!(!e||!(0,o.mf)(e.next))&&function t(){const n=performance.now();let r=null;do{r=e.next()}while(!r.done&&performance.now()-n<25);if(r.done)return!1;(0,o.mf)(requestIdleCallback)?requestIdleCallback(t):setTimeout(t,10)});t["Z"]=r},8249:function(e,t,n){n.d(t,{Ds:function(){return s},Xh:function(){return i},dX:function(){return r},vQ:function(){return o}});const o=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))},r=(e,t)=>{const n=new Blob([t]),o=document.createElement("a");o.download=e,o.href=URL.createObjectURL(n),o.click(),URL.revokeObjectURL(n)},s=(e,t=300)=>{let n;return function(...o){clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}},i=e=>{if(null===e)return null;let t=Object.assign({},e);return Object.keys(t).forEach((n=>t[n]="object"===typeof e[n]?i(e[n]):e[n])),Array.isArray(e)?(t.length=e.length,Array.from(t)):t}}}]);