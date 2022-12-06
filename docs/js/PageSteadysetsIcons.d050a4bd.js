"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[8334],{3910:function(e,t,s){s.r(t),s.d(t,{default:function(){return w}});var n=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Steadysets")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Steadysets")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s(`${e.steadysetsSet.title}（${e.count}）`)+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:16}},e._l(e.symbols,(function(e,s){return t("icon-cell",{key:`cell-${s}`,attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Tommy Sähl")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"http://dribbble.com/shots/929153-Steady-set-of-icons"}},[e._v(" http://dribbble.com/shots/929153-Steady-set-of-icons ")])]),t("li",[e._v("License：Custom (Free to use)")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/meteocons"}},[e._v("Meteocons 图标库")])],1),t("div",{staticClass:"util-align-right base-footer__navigation"},[e._v(" Next Page： "),t("router-link",{attrs:{to:"/icons/typicons"}},[e._v("Typicons 图标库")])],1)])],1)},o=[],a=s(1909),c=s(3356),i=s(8249),l=s(830);const r=()=>Promise.all([s.e(9992),s.e(7773)]).then(s.bind(s,90)),u=()=>Promise.all([s.e(8832),s.e(7620)]).then(s.bind(s,2941)),d=()=>Promise.all([s.e(213),s.e(6418)]).then(s.bind(s,3839)),h=()=>s.e(4529).then(s.bind(s,6212)),m=()=>Promise.all([s.e(3324),s.e(8207)]).then(s.bind(s,3734)),b=()=>Promise.all([s.e(3309),s.e(5819)]).then(s.bind(s,7371)),p=()=>s.e(1574).then(s.bind(s,7156)),y=()=>s.e(2496).then(s.bind(s,827)),g=()=>Promise.all([s.e(374),s.e(5825)]).then(s.bind(s,4693)),v=30;var f={name:"PageSteadysetsIcons",componentName:"PageSteadysetsIcons",components:{BaseContainer:r,BaseHeader:u,BaseMain:d,BaseBreadcrumb:h,BaseBreadcrumbItem:m,BaseFooter:b,BaseInput:p,BaseGrid:y,BaseEmpty:g,IconCell:a.Z},data(){return{steadysetsSet:c.Z,keyword:"",symbols:[],count:0}},created(){const e=this.steadysetsSet.symbols,t=(0,i.Xh)(e);this.count=e.length,this.symbols=t.splice(0,v)},mounted(){const e=(0,i.Xh)(this.steadysetsSet.symbols),t=()=>{this.symbols=this.symbols.concat(e.splice(0,v))};this.$nextTick((()=>{setTimeout((()=>{(0,l.Z)((function*(){while(e.length>0)t(),yield}))()}),150)}))},methods:{query(e){const t=this.steadysetsSet.symbols.filter((t=>{const s=this.getSymbolName(t).toLowerCase();return s.indexOf(e.toLowerCase())>-1}));this.count=t.length,this.symbols=t},getSymbolName(e){const t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,i.Ds)((function(){this.query(this.keyword)}),300)}},_=f,k=s(1001),C=(0,k.Z)(_,n,o,!1,null,null,null),w=C.exports},1909:function(e,t,s){s.d(t,{Z:function(){return m}});var n=function(){var e=this,t=e._self._c;return t("div",{class:["icon-cell",{"is-checked":e.checked}],on:{click:e.onCheck}},[t("span",{staticClass:"icon-cell__marked"},[t("svg-icon",{attrs:{name:"selected",size:24}})],1),t("div",{staticClass:"icon-cell__svg"},[t("svg-icon",{attrs:{name:e.name,size:32}})],1),t("p",{staticClass:"icon-cell__name"},[e._v(" "+e._s(e.name)+" ")]),t("div",{staticClass:"icon-cell__toolbar"},[t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onCopy.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"copy",size:14}}),e._v(" 复制 ")],1),t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onDownload.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"download",size:14}}),e._v(" 下载 ")],1)])])},o=[],a=s(6105),c=s(8249),i=s(481),l={name:"IconCell",componentName:"IconCell",components:{SvgIcon:a.Z},props:{symbol:{type:String,default:""}},data(){return{name:"",checked:!1}},watch:{symbol(){this.update()}},mounted(){this.update(),this.$subscribe("update:icons",this.updateChecked),this.$subscribe("clean:cart",this.updateChecked)},beforeDestroy(){this.$unsubscribe("update:icons",this.updateChecked),this.$unsubscribe("clean:cart",this.updateChecked)},methods:{update(){const e=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=e[1],this.updateChecked()},updateChecked(){const e=(0,i.cF)("svg.icon.set");this.checked=!!e&&JSON.parse(e).indexOf(this.symbol)>-1},add(e){this.$broadcast("add:icon",e)},remove(e){this.$broadcast("remove:icon",e)},check(e,t="加入"){this.$message.success({round:!0,message:`图标 ${e} 已${t}购物车！`})},copy(e){(0,c.vQ)(e),this.$message.success({round:!0,message:`图标名 ${e} 已复制到粘贴板！`})},download(){const e=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,t=this.symbol,s=t.match(e)[3],n=t.match(/viewBox="0 0 (.*?)"/)[1].split(" "),o=parseInt(n[0],10),a=parseInt(n[1],10),i=o>200?200:o,l=a>200?200:a,r='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+i+'" height="'+l+'" viewBox="0 0 '+o+" "+a+'">\n<title>'+this.name+"</title>\n"+s+"\n</svg>";(0,c.dX)(`${this.name}.svg`,r)},toggle(){this.checked=!this.checked},onCheck(){let e="";const t=this.symbol;this.toggle(),this.checked?(this.add(t),e="加入"):(e="移除",this.remove(t)),this.check(this.name,e)},onCopy(){this.copy(this.name)},onDownload(){this.download()}}},r=l,u=s(1001),d=(0,u.Z)(r,n,o,!1,null,null,null),h=d.exports;h.install=function(e){e.component(h.name,h)};var m=h},481:function(e,t,s){s.d(t,{B$:function(){return a},cF:function(){return o},po:function(){return n}});const n=(e,t)=>{localStorage.setItem(e,t)},o=e=>localStorage.getItem(e),a=e=>{localStorage.removeItem(e)}},830:function(e,t,s){var n=s(8673);const o=e=>((0,n.mf)(e)&&(e=e()),!(!e||!(0,n.mf)(e.next))&&function t(){const s=performance.now();let o=null;do{o=e.next()}while(!o.done&&performance.now()-s<25);if(o.done)return!1;(0,n.mf)(requestIdleCallback)?requestIdleCallback(t):setTimeout(t,10)});t["Z"]=o},8249:function(e,t,s){s.d(t,{Ds:function(){return a},Xh:function(){return c},dX:function(){return o},vQ:function(){return n}});const n=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const s=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),s&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(s))},o=(e,t)=>{const s=new Blob([t]),n=document.createElement("a");n.download=e,n.href=URL.createObjectURL(s),n.click(),URL.revokeObjectURL(s)},a=(e,t=300)=>{let s;return function(...n){clearTimeout(s),s=setTimeout((()=>e.apply(this,n)),t)}},c=e=>{if(null===e)return null;let t=Object.assign({},e);return Object.keys(t).forEach((s=>t[s]="object"===typeof e[s]?c(e[s]):e[s])),Array.isArray(e)?(t.length=e.length,Array.from(t)):t}}}]);