"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[211],{6621:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var n=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Brankic 1979")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Brankic 1979")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s(`${e.brankic1979Set.title} （${e.count}）`)+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:10}},e._l(e.symbols,(function(e,s){return t("icon-cell",{key:`cell-${s}`,attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Brankic1979")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"http://dribbble.com/shots/587469-Free-16px-Broccolidryiconsaniconsetitisfullof-icons"}},[e._v(" http://dribbble.com/shots/587469-Free-16px-Broccolidryiconsaniconsetitisfullof-icons ")])]),t("li",[e._v("License：Custom (free to use)")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/default"}},[e._v("Default 图标库")])],1),t("div",{staticClass:"util-align-right base-footer__navigation"},[e._v(" Next Page： "),t("router-link",{attrs:{to:"/icons/broccolidry"}},[e._v("Broccolidry 图标库")])],1)])],1)},o=[],a=s(90),c=s(2623),i=s(2935),r=s(6212),l=s(3734),u=s(7371),d=s(7156),h=s(5868),m=s(4693),b=s(1909),p=s(8253),g=s(8249),v={name:"PageBrankicIcons",componentName:"PageBrankicIcons",components:{BaseContainer:a.Z,BaseHeader:c.Z,BaseMain:i.Z,BaseBreadcrumb:r.Z,BaseBreadcrumbItem:l.Z,BaseFooter:u.Z,BaseInput:d.Z,BaseGrid:h.Z,BaseEmpty:m.Z,IconCell:b.Z},data(){return{brankic1979Set:p.Z,keyword:"",symbols:[]}},computed:{count(){return this.symbols.length}},created(){this.update()},methods:{update(){this.symbols=this.brankic1979Set.symbols.filter((e=>{const t=this.getSymbolName(e).toLowerCase();return t.indexOf(this.keyword.toLowerCase())>-1}))},getSymbolName(e){const t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,g.Ds)((function(){this.update()}),300)}},f=v,_=s(1001),y=(0,_.Z)(f,n,o,!1,null,"4861e45e",null),k=y.exports},1909:function(e,t,s){s.d(t,{Z:function(){return m}});var n=function(){var e=this,t=e._self._c;return t("div",{class:["icon-cell",{"is-checked":e.checked}],on:{click:e.onCheck}},[t("span",{staticClass:"icon-cell__marked"},[t("svg-icon",{attrs:{name:"selected",size:24}})],1),t("div",{staticClass:"icon-cell__svg"},[t("svg-icon",{attrs:{name:e.name,size:32}})],1),t("p",{staticClass:"icon-cell__name"},[e._v(" "+e._s(e.name)+" ")]),t("div",{staticClass:"icon-cell__toolbar"},[t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onCopy.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"copy",size:14}}),e._v(" 复制 ")],1),t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onDownload.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"download",size:14}}),e._v(" 下载 ")],1)])])},o=[],a=s(6105),c=s(8249),i=s(481),r={name:"IconCell",componentName:"IconCell",components:{SvgIcon:a.Z},props:{symbol:{type:String,default:""}},data(){return{name:"",checked:!1}},watch:{symbol(){this.update()}},mounted(){this.update(),this.$subscribe("update:icons",this.updateChecked),this.$subscribe("clean:cart",this.updateChecked)},beforeDestroy(){this.$unsubscribe("update:icons",this.updateChecked),this.$unsubscribe("clean:cart",this.updateChecked)},methods:{update(){const e=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=e[1],this.updateChecked()},updateChecked(){const e=(0,i.cF)("svg.icon.set");this.checked=!!e&&JSON.parse(e).indexOf(this.symbol)>-1},add(e){this.$broadcast("add:icon",e)},remove(e){this.$broadcast("remove:icon",e)},check(e,t="加入"){this.$message.success({round:!0,message:`图标 ${e} 已${t}购物车！`})},copy(e){(0,c.vQ)(e),this.$message.success({round:!0,message:`图标名 ${e} 已复制到粘贴板！`})},download(){const e=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,t=this.symbol,s=t.match(e)[3],n=t.match(/viewBox="0 0 (.*?)"/)[1].split(" "),o=parseInt(n[0],10),a=parseInt(n[1],10),i=o>200?200:o,r=a>200?200:a,l='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+i+'" height="'+r+'" viewBox="0 0 '+o+" "+a+'">\n<title>'+this.name+"</title>\n"+s+"\n</svg>";(0,c.dX)(`${this.name}.svg`,l)},toggle(){this.checked=!this.checked},onCheck(){let e="";const t=this.symbol;this.toggle(),this.checked?(this.add(t),e="加入"):(e="移除",this.remove(t)),this.check(this.name,e)},onCopy(){this.copy(this.name)},onDownload(){this.download()}}},l=r,u=s(1001),d=(0,u.Z)(l,n,o,!1,null,null,null),h=d.exports;h.install=function(e){e.component(h.name,h)};var m=h},481:function(e,t,s){s.d(t,{B$:function(){return a},cF:function(){return o},po:function(){return n}});const n=(e,t)=>{localStorage.setItem(e,t)},o=e=>localStorage.getItem(e),a=e=>{localStorage.removeItem(e)}},8249:function(e,t,s){s.d(t,{Ds:function(){return a},Xh:function(){return c},dX:function(){return o},vQ:function(){return n}});const n=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const s=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),s&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(s))},o=(e,t)=>{const s=new Blob([t]),n=document.createElement("a");n.download=e,n.href=URL.createObjectURL(s),n.click(),URL.revokeObjectURL(s)},a=(e,t=300)=>{let s;return function(...n){clearTimeout(s),s=setTimeout((()=>e.apply(this,n)),t)}},c=e=>{if(null===e)return null;let t=Object.assign({},e);return Object.keys(t).forEach((s=>t[s]="object"===typeof e[s]?c(e[s]):e[s])),Array.isArray(e)?(t.length=e.length,Array.from(t)):t}}}]);