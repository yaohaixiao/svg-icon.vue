"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[9014],{5404:function(e,t,s){s.r(t),s.d(t,{default:function(){return Z}});var a=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Default")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Default 图标库")]),e._l(e.defaultSets,(function(s,a){return[e.defer(a+1)?[t("h2",{key:`title-${a}`,staticClass:"article__h2"},[e._v(" "+e._s(`${s.title}（${s.symbols.length}）`)+" ")]),s.symbols.length>0?t("base-grid",{key:`grid-${a}`,staticClass:"article__grid",attrs:{columns:6,gap:16}},e._l(s.symbols,(function(e,s){return t("icon-cell",{key:`generic-${s}`,attrs:{symbol:e}})})),1):t("base-empty",{key:`empty-${a}`})]:e._e()]}))],2)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/usage"}},[e._v("Usage")])],1),t("div",{staticClass:"util-align-right base-footer__navigation"},[e._v(" Next Page： "),t("router-link",{attrs:{to:"/icons/brankic-1979"}},[e._v("Brankic 1979 图标库")])],1)])],1)},n=[];function i(e=10){return{data(){return{displayPriority:0}},mounted(){this.runDisplayPriority()},methods:{runDisplayPriority(){const t=()=>{requestAnimationFrame((()=>{this.displayPriority+=1,this.displayPriority<e&&t()}))};t()},defer(e){return this.displayPriority>=e}}}}var o=s(1909),r=s(8236),c=s(8820),l=s(1505),u=s(5681),d=s(8868),h=s(1471),m=s(329),b=s(2919),p=s(8249);const g=()=>Promise.all([s.e(9992),s.e(7773)]).then(s.bind(s,90)),y=()=>Promise.all([s.e(8832),s.e(7620)]).then(s.bind(s,2941)),v=()=>Promise.all([s.e(213),s.e(6418)]).then(s.bind(s,3839)),_=()=>s.e(4529).then(s.bind(s,6212)),f=()=>Promise.all([s.e(3324),s.e(8207)]).then(s.bind(s,3734)),k=()=>Promise.all([s.e(3309),s.e(5819)]).then(s.bind(s,7371)),C=()=>s.e(1574).then(s.bind(s,7156)),w=()=>s.e(2496).then(s.bind(s,827)),P=()=>Promise.all([s.e(374),s.e(5825)]).then(s.bind(s,4693)),$=[r.Z,c.Z,l.Z,u.Z,d.Z,h.Z,m.Z,b.Z];var x={name:"PageDefaultIcons",componentName:"PageDefaultIcons",components:{BaseContainer:g,BaseHeader:y,BaseMain:v,BaseBreadcrumb:_,BaseBreadcrumbItem:f,BaseFooter:k,BaseInput:C,BaseGrid:w,BaseEmpty:P,IconCell:o.Z},mixins:[i()],data(){return{defaultSets:[],keyword:""}},created(){this.update()},methods:{update(){const e=(0,p.Xh)($);e.forEach((e=>{e.symbols=e.symbols.filter((e=>{const t=this.getSymbolName(e).toLowerCase();return t.indexOf(this.keyword.toLowerCase())>-1}))})),this.defaultSets=e},getSymbolName(e){const t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,p.Ds)((function(){this.update()}),300)}},B=x,I=s(1001),S=(0,I.Z)(B,a,n,!1,null,null,null),Z=S.exports},1909:function(e,t,s){s.d(t,{Z:function(){return m}});var a=function(){var e=this,t=e._self._c;return t("div",{class:["icon-cell",{"is-checked":e.checked}],on:{click:e.onCheck}},[t("span",{staticClass:"icon-cell__marked"},[t("svg-icon",{attrs:{name:"selected",size:24}})],1),t("div",{staticClass:"icon-cell__svg"},[t("svg-icon",{attrs:{name:e.name,size:32}})],1),t("p",{staticClass:"icon-cell__name"},[e._v(" "+e._s(e.name)+" ")]),t("div",{staticClass:"icon-cell__toolbar"},[t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onCopy.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"copy",size:14}}),e._v(" 复制 ")],1),t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onDownload.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"download",size:14}}),e._v(" 下载 ")],1)])])},n=[],i=s(6105),o=s(8249),r=s(481),c={name:"IconCell",componentName:"IconCell",components:{SvgIcon:i.Z},props:{symbol:{type:String,default:""}},data(){return{name:"",checked:!1}},watch:{symbol(){this.update()}},mounted(){this.update(),this.$subscribe("update:icons",this.updateChecked),this.$subscribe("clean:cart",this.updateChecked)},beforeDestroy(){this.$unsubscribe("update:icons",this.updateChecked),this.$unsubscribe("clean:cart",this.updateChecked)},methods:{update(){const e=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=e[1],this.updateChecked()},updateChecked(){const e=(0,r.cF)("svg.icon.set");this.checked=!!e&&JSON.parse(e).indexOf(this.symbol)>-1},add(e){this.$broadcast("add:icon",e)},remove(e){this.$broadcast("remove:icon",e)},check(e,t="加入"){this.$message.success({round:!0,message:`图标 ${e} 已${t}购物车！`})},copy(e){(0,o.vQ)(e),this.$message.success({round:!0,message:`图标名 ${e} 已复制到粘贴板！`})},download(){const e=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,t=this.symbol,s=t.match(e)[3],a=t.match(/viewBox="0 0 (.*?)"/)[1].split(" "),n=parseInt(a[0],10),i=parseInt(a[1],10),r=n>200?200:n,c=i>200?200:i,l='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+r+'" height="'+c+'" viewBox="0 0 '+n+" "+i+'">\n<title>'+this.name+"</title>\n"+s+"\n</svg>";(0,o.dX)(`${this.name}.svg`,l)},toggle(){this.checked=!this.checked},onCheck(){let e="";const t=this.symbol;this.toggle(),this.checked?(this.add(t),e="加入"):(e="移除",this.remove(t)),this.check(this.name,e)},onCopy(){this.copy(this.name)},onDownload(){this.download()}}},l=c,u=s(1001),d=(0,u.Z)(l,a,n,!1,null,null,null),h=d.exports;h.install=function(e){e.component(h.name,h)};var m=h},481:function(e,t,s){s.d(t,{B$:function(){return i},cF:function(){return n},po:function(){return a}});const a=(e,t)=>{localStorage.setItem(e,t)},n=e=>localStorage.getItem(e),i=e=>{localStorage.removeItem(e)}}}]);