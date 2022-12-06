"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[9560],{528:function(e,t,o){o.r(t),o.d(t,{default:function(){return C}});var n=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("wpzoom")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("wpzoom")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s(`${e.wpzoomSet.title}（${e.count}）`)+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:16}},e._l(e.symbols,(function(e,o){return t("icon-cell",{key:`cell-${o}`,attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：David Ferreira")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"http://www.wpzoom.com/wpzoom/new-freebie-wpzoom-developer-icon-set-154-free-icons/"}},[e._v(" http://www.wpzoom.com/wpzoom/new-freebie-wpzoom-developer-icon-set-154-free-icons/ ")])]),t("li",[e._v("License：CC BY-SA 3.0")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/vicons"}},[e._v("Vicons 图标库")])],1),t("div",{staticClass:"util-align-right base-footer__navigation"},[e._v(" Next Page： "),t("router-link",{attrs:{to:"/icons/zondicons"}},[e._v("Zondicons 图标库")])],1)])],1)},s=[],i=o(1909),a=o(1587),c=o(8249),r=o(830);const l=()=>Promise.all([o.e(9992),o.e(7773)]).then(o.bind(o,90)),u=()=>Promise.all([o.e(8832),o.e(7620)]).then(o.bind(o,2941)),m=()=>Promise.all([o.e(213),o.e(6418)]).then(o.bind(o,3839)),d=()=>o.e(4529).then(o.bind(o,6212)),h=()=>Promise.all([o.e(3324),o.e(8207)]).then(o.bind(o,3734)),p=()=>Promise.all([o.e(3309),o.e(5819)]).then(o.bind(o,7371)),b=()=>o.e(1574).then(o.bind(o,7156)),v=()=>o.e(2496).then(o.bind(o,827)),g=()=>Promise.all([o.e(374),o.e(5825)]).then(o.bind(o,4693)),f=30;var y={name:"PageWpzoomIcons",componentName:"PageWpzoomIcons",components:{BaseContainer:l,BaseHeader:u,BaseMain:m,BaseBreadcrumb:d,BaseBreadcrumbItem:h,BaseFooter:p,BaseInput:b,BaseGrid:v,BaseEmpty:g,IconCell:i.Z},data(){return{wpzoomSet:a.Z,keyword:"",symbols:[],count:0}},created(){const e=this.wpzoomSet.symbols,t=(0,c.Xh)(this.wpzoomSet.symbols);this.count=e.length,this.symbols=t.splice(0,f)},mounted(){const e=(0,c.Xh)(this.wpzoomSet.symbols),t=()=>{this.symbols=this.symbols.concat(e.splice(0,f))};this.$nextTick((()=>{setTimeout((()=>{(0,r.Z)((function*(){while(e.length>0)t(),yield}))()}),150)}))},methods:{query(e){const t=this.wpzoomSet.symbols.filter((t=>{const o=this.getSymbolName(t).toLowerCase();return o.indexOf(e.toLowerCase())>-1}));this.count=t.length,this.symbols=t},getSymbolName(e){const t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,c.Ds)((function(){this.query(this.keyword)}),300)}},_=y,w=o(1001),k=(0,w.Z)(_,n,s,!1,null,null,null),C=k.exports},1909:function(e,t,o){o.d(t,{Z:function(){return h}});var n=function(){var e=this,t=e._self._c;return t("div",{class:["icon-cell",{"is-checked":e.checked}],on:{click:e.onCheck}},[t("span",{staticClass:"icon-cell__marked"},[t("svg-icon",{attrs:{name:"selected",size:24}})],1),t("div",{staticClass:"icon-cell__svg"},[t("svg-icon",{attrs:{name:e.name,size:32}})],1),t("p",{staticClass:"icon-cell__name"},[e._v(" "+e._s(e.name)+" ")]),t("div",{staticClass:"icon-cell__toolbar"},[t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onCopy.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"copy",size:14}}),e._v(" 复制 ")],1),t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onDownload.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"download",size:14}}),e._v(" 下载 ")],1)])])},s=[],i=o(6105),a=o(8249),c=o(481),r={name:"IconCell",componentName:"IconCell",components:{SvgIcon:i.Z},props:{symbol:{type:String,default:""}},data(){return{name:"",checked:!1}},watch:{symbol(){this.update()}},mounted(){this.update(),this.$subscribe("update:icons",this.updateChecked),this.$subscribe("clean:cart",this.updateChecked)},beforeDestroy(){this.$unsubscribe("update:icons",this.updateChecked),this.$unsubscribe("clean:cart",this.updateChecked)},methods:{update(){const e=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=e[1],this.updateChecked()},updateChecked(){const e=(0,c.cF)("svg.icon.set");this.checked=!!e&&JSON.parse(e).indexOf(this.symbol)>-1},add(e){this.$broadcast("add:icon",e)},remove(e){this.$broadcast("remove:icon",e)},check(e,t="加入"){this.$message.success({round:!0,message:`图标 ${e} 已${t}购物车！`})},copy(e){(0,a.vQ)(e),this.$message.success({round:!0,message:`图标名 ${e} 已复制到粘贴板！`})},download(){const e=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,t=this.symbol,o=t.match(e)[3],n=t.match(/viewBox="0 0 (.*?)"/)[1].split(" "),s=parseInt(n[0],10),i=parseInt(n[1],10),c=s>200?200:s,r=i>200?200:i,l='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+c+'" height="'+r+'" viewBox="0 0 '+s+" "+i+'">\n<title>'+this.name+"</title>\n"+o+"\n</svg>";(0,a.dX)(`${this.name}.svg`,l)},toggle(){this.checked=!this.checked},onCheck(){let e="";const t=this.symbol;this.toggle(),this.checked?(this.add(t),e="加入"):(e="移除",this.remove(t)),this.check(this.name,e)},onCopy(){this.copy(this.name)},onDownload(){this.download()}}},l=r,u=o(1001),m=(0,u.Z)(l,n,s,!1,null,null,null),d=m.exports;d.install=function(e){e.component(d.name,d)};var h=d},481:function(e,t,o){o.d(t,{B$:function(){return i},cF:function(){return s},po:function(){return n}});const n=(e,t)=>{localStorage.setItem(e,t)},s=e=>localStorage.getItem(e),i=e=>{localStorage.removeItem(e)}},830:function(e,t,o){var n=o(8673);const s=e=>((0,n.mf)(e)&&(e=e()),!(!e||!(0,n.mf)(e.next))&&function t(){const o=performance.now();let s=null;do{s=e.next()}while(!s.done&&performance.now()-o<25);if(s.done)return!1;(0,n.mf)(requestIdleCallback)?requestIdleCallback(t):setTimeout(t,10)});t["Z"]=s},8249:function(e,t,o){o.d(t,{Ds:function(){return i},Xh:function(){return a},dX:function(){return s},vQ:function(){return n}});const n=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const o=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),o&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(o))},s=(e,t)=>{const o=new Blob([t]),n=document.createElement("a");n.download=e,n.href=URL.createObjectURL(o),n.click(),URL.revokeObjectURL(o)},i=(e,t=300)=>{let o;return function(...n){clearTimeout(o),o=setTimeout((()=>e.apply(this,n)),t)}},a=e=>{if(null===e)return null;let t=Object.assign({},e);return Object.keys(t).forEach((o=>t[o]="object"===typeof e[o]?a(e[o]):e[o])),Array.isArray(e)?(t.length=e.length,Array.from(t)):t}}}]);