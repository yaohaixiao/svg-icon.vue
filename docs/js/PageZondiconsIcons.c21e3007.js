"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[6442],{9373:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var s=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Zondicons")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Zondicons")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s(`${e.zondiconsSet.title}（${e.count}）`)+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:16}},e._l(e.symbols,(function(e,n){return t("icon-cell",{key:`cell-${n}`,attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Steve Schoger")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"http://www.zondicons.com/"}},[e._v("http://www.zondicons.com/")])]),t("li",[e._v("License：CC BY 4.0")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/wpzoom"}},[e._v("wpzoom 图标库")])],1)])],1)},o=[],c=n(1909),i=n(4182),a=n(8249),l=n(830);const r=()=>Promise.all([n.e(9992),n.e(7773)]).then(n.bind(n,90)),u=()=>Promise.all([n.e(8832),n.e(7620)]).then(n.bind(n,2941)),d=()=>Promise.all([n.e(213),n.e(6418)]).then(n.bind(n,3839)),h=()=>n.e(4529).then(n.bind(n,6212)),m=()=>Promise.all([n.e(3324),n.e(8207)]).then(n.bind(n,3734)),b=()=>Promise.all([n.e(3309),n.e(5819)]).then(n.bind(n,7371)),p=()=>n.e(1574).then(n.bind(n,7156)),g=()=>n.e(2496).then(n.bind(n,827)),v=()=>Promise.all([n.e(374),n.e(5825)]).then(n.bind(n,4693)),f=30;var y={name:"PageZondiconsIcons",componentName:"PageZondiconsIcons",components:{BaseContainer:r,BaseHeader:u,BaseMain:d,BaseBreadcrumb:h,BaseBreadcrumbItem:m,BaseFooter:b,BaseInput:p,BaseGrid:g,BaseEmpty:v,IconCell:c.Z},data(){return{zondiconsSet:i.Z,keyword:"",symbols:[],count:0}},created(){const e=this.zondiconsSet.symbols,t=(0,a.Xh)(this.zondiconsSet.symbols);this.count=e.length,this.symbols=t.splice(0,f)},mounted(){const e=(0,a.Xh)(this.zondiconsSet.symbols),t=()=>{this.symbols=this.symbols.concat(e.splice(0,f))};this.$nextTick((()=>{setTimeout((()=>{(0,l.Z)((function*(){while(e.length>0)t(),yield}))()}),150)}))},methods:{query(e){const t=this.zondiconsSet.symbols.filter((t=>{const n=this.getSymbolName(t).toLowerCase();return n.indexOf(e.toLowerCase())>-1}));this.count=t.length,this.symbols=t},getSymbolName(e){const t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,a.Ds)((function(){this.query(this.keyword)}),300)}},_=y,w=n(1001),k=(0,w.Z)(_,s,o,!1,null,null,null),C=k.exports},1909:function(e,t,n){n.d(t,{Z:function(){return m}});var s=function(){var e=this,t=e._self._c;return t("div",{class:["icon-cell",{"is-checked":e.checked}],on:{click:e.onCheck}},[t("span",{staticClass:"icon-cell__marked"},[t("svg-icon",{attrs:{name:"selected",size:24}})],1),t("div",{staticClass:"icon-cell__svg"},[t("svg-icon",{attrs:{name:e.name,size:32}})],1),t("p",{staticClass:"icon-cell__name"},[e._v(" "+e._s(e.name)+" ")]),t("div",{staticClass:"icon-cell__toolbar"},[t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onCopy.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"copy",size:14}}),e._v(" 复制 ")],1),t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onDownload.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"download",size:14}}),e._v(" 下载 ")],1)])])},o=[],c=n(6105),i=n(8249),a=n(481),l={name:"IconCell",componentName:"IconCell",components:{SvgIcon:c.Z},props:{symbol:{type:String,default:""}},data(){return{name:"",checked:!1}},watch:{symbol(){this.update()}},mounted(){this.update(),this.$subscribe("update:icons",this.updateChecked),this.$subscribe("clean:cart",this.updateChecked)},beforeDestroy(){this.$unsubscribe("update:icons",this.updateChecked),this.$unsubscribe("clean:cart",this.updateChecked)},methods:{update(){const e=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=e[1],this.updateChecked()},updateChecked(){const e=(0,a.cF)("svg.icon.set");this.checked=!!e&&JSON.parse(e).indexOf(this.symbol)>-1},add(e){this.$broadcast("add:icon",e)},remove(e){this.$broadcast("remove:icon",e)},check(e,t="加入"){this.$message.success({round:!0,message:`图标 ${e} 已${t}购物车！`})},copy(e){(0,i.vQ)(e),this.$message.success({round:!0,message:`图标名 ${e} 已复制到粘贴板！`})},download(){const e=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,t=this.symbol,n=t.match(e)[3],s=t.match(/viewBox="0 0 (.*?)"/)[1].split(" "),o=parseInt(s[0],10),c=parseInt(s[1],10),a=o>200?200:o,l=c>200?200:c,r='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+a+'" height="'+l+'" viewBox="0 0 '+o+" "+c+'">\n<title>'+this.name+"</title>\n"+n+"\n</svg>";(0,i.dX)(`${this.name}.svg`,r)},toggle(){this.checked=!this.checked},onCheck(){let e="";const t=this.symbol;this.toggle(),this.checked?(this.add(t),e="加入"):(e="移除",this.remove(t)),this.check(this.name,e)},onCopy(){this.copy(this.name)},onDownload(){this.download()}}},r=l,u=n(1001),d=(0,u.Z)(r,s,o,!1,null,null,null),h=d.exports;h.install=function(e){e.component(h.name,h)};var m=h},481:function(e,t,n){n.d(t,{B$:function(){return c},cF:function(){return o},po:function(){return s}});const s=(e,t)=>{localStorage.setItem(e,t)},o=e=>localStorage.getItem(e),c=e=>{localStorage.removeItem(e)}},830:function(e,t,n){var s=n(8673);const o=e=>((0,s.mf)(e)&&(e=e()),!(!e||!(0,s.mf)(e.next))&&function t(){const n=performance.now();let o=null;do{o=e.next()}while(!o.done&&performance.now()-n<25);if(o.done)return!1;(0,s.mf)(requestIdleCallback)?requestIdleCallback(t):setTimeout(t,10)});t["Z"]=o},8249:function(e,t,n){n.d(t,{Ds:function(){return c},Xh:function(){return i},dX:function(){return o},vQ:function(){return s}});const s=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))},o=(e,t)=>{const n=new Blob([t]),s=document.createElement("a");s.download=e,s.href=URL.createObjectURL(n),s.click(),URL.revokeObjectURL(n)},c=(e,t=300)=>{let n;return function(...s){clearTimeout(n),n=setTimeout((()=>e.apply(this,s)),t)}},i=e=>{if(null===e)return null;let t=Object.assign({},e);return Object.keys(t).forEach((n=>t[n]="object"===typeof e[n]?i(e[n]):e[n])),Array.isArray(e)?(t.length=e.length,Array.from(t)):t}}}]);