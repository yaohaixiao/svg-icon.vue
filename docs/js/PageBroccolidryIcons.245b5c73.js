"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[322],{9567:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var o=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Broccolidry")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Broccolidry")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s(`${e.broccolidrySet.title}（${e.count}）`)+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:10}},e._l(e.symbols,(function(e,s){return t("icon-cell",{key:`cell-${s}`,attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Visual Idiot")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"http://brankic1979.com/icons/"}},[e._v(" http://brankic1979.com/icons/ ")])]),t("li",[e._v("License：Custom (Free to use)")])])],1)])],1)},n=[],c=s(90),a=s(1592),i=s(6635),r=s(6212),l=s(3734),u=s(7156),d=s(5868),m=s(4693),h=s(1909),p=s(9138),b=s(8249),g={name:"PageBroccolidryIcons",componentName:"PageBroccolidryIcons",components:{BaseContainer:c.Z,BaseHeader:a.Z,BaseMain:i.Z,BaseBreadcrumb:r.Z,BaseBreadcrumbItem:l.Z,BaseInput:u.Z,BaseGrid:d.Z,BaseEmpty:m.Z,IconCell:h.Z},data(){return{broccolidrySet:p.Z,keyword:"",symbols:[]}},computed:{count(){return this.symbols.length}},created(){this.update()},methods:{update(){this.symbols=this.broccolidrySet.symbols.filter((e=>{const t=this.getSymbolName(e).toLowerCase();return t.indexOf(this.keyword.toLowerCase())>-1}))},getSymbolName(e){const t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,b.Ds)((function(){this.update()}),300)}},y=g,v=s(1001),_=(0,v.Z)(y,o,n,!1,null,"4ef27447",null),f=_.exports},1909:function(e,t,s){s.d(t,{Z:function(){return h}});var o=function(){var e=this,t=e._self._c;return t("div",{class:["icon-cell",{"is-checked":e.checked}],on:{click:e.onCheck}},[t("span",{staticClass:"icon-cell__marked"},[t("svg-icon",{attrs:{name:"selected",size:24}})],1),t("div",{staticClass:"icon-cell__svg"},[t("svg-icon",{attrs:{name:e.name,size:32}})],1),t("p",{staticClass:"icon-cell__name"},[e._v(" "+e._s(e.name)+" ")]),t("div",{staticClass:"icon-cell__toolbar"},[t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onCopy.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"copy",size:14}}),e._v(" 复制 ")],1),t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onDownload.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"download",size:14}}),e._v(" 下载 ")],1)])])},n=[],c=s(6105),a=s(8249),i=s(481),r={name:"IconCell",componentName:"IconCell",components:{SvgIcon:c.Z},props:{symbol:{type:String,default:""}},data(){return{name:"",checked:!1}},watch:{symbol(){this.update()}},mounted(){this.update(),this.$subscribe("update:icons",this.updateChecked),this.$subscribe("clean:cart",this.updateChecked)},beforeDestroy(){this.$unsubscribe("update:icons",this.updateChecked),this.$unsubscribe("clean:cart",this.updateChecked)},methods:{update(){const e=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=e[1],this.updateChecked()},updateChecked(){const e=(0,i.cF)("svg.icon.set");this.checked=!!e&&JSON.parse(e).indexOf(this.symbol)>-1},add(e){this.$broadcast("add:icon",e)},remove(e){this.$broadcast("remove:icon",e)},check(e,t="加入"){this.$message.success({round:!0,message:`图标 ${e} 已${t}购物车！`})},copy(e){(0,a.vQ)(e),this.$message.success({round:!0,message:`图标名 ${e} 已复制到粘贴板！`})},download(){const e=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,t=this.symbol,s=t.match(e)[3],o=t.match(/viewBox="0 0 (.*?)"/)[1].split(" "),n=parseInt(o[0],10),c=parseInt(o[1],10),i=n>200?200:n,r=c>200?200:c,l='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+i+'" height="'+r+'" viewBox="0 0 '+n+" "+c+'">\n<title>'+this.name+"</title>\n"+s+"\n</svg>";(0,a.dX)(`${this.name}.svg`,l)},toggle(){this.checked=!this.checked},onCheck(){let e="";const t=this.symbol;this.toggle(),this.checked?(this.add(t),e="加入"):(e="移除",this.remove(t)),this.check(this.name,e)},onCopy(){this.copy(this.name)},onDownload(){this.download()}}},l=r,u=s(1001),d=(0,u.Z)(l,o,n,!1,null,null,null),m=d.exports;m.install=function(e){e.component(m.name,m)};var h=m},481:function(e,t,s){s.d(t,{B$:function(){return c},cF:function(){return n},po:function(){return o}});const o=(e,t)=>{localStorage.setItem(e,t)},n=e=>localStorage.getItem(e),c=e=>{localStorage.removeItem(e)}},8249:function(e,t,s){s.d(t,{Ds:function(){return a},Xh:function(){return i},dX:function(){return c},p1:function(){return n},vQ:function(){return o}});const o=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const s=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),s&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(s))},n=e=>{const t={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};return e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(e=>t[e]||e)).replace(/\{\s+\{/g,"{{")},c=(e,t)=>{const s=new Blob([t]),o=document.createElement("a");o.download=e,o.href=URL.createObjectURL(s),o.click(),URL.revokeObjectURL(s)},a=(e,t=300)=>{let s;return function(...o){clearTimeout(s),s=setTimeout((()=>e.apply(this,o)),t)}},i=e=>{if(null===e)return null;let t=Object.assign({},e);return Object.keys(t).forEach((s=>t[s]="object"===typeof e[s]?i(e[s]):e[s])),Array.isArray(e)?(t.length=e.length,Array.from(t)):t}}}]);