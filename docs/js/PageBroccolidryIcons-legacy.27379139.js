"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[6322],{7089:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});n(2222);var o=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Broccolidry")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Broccolidry")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s("".concat(e.broccolidrySet.title,"（").concat(e.count,"）"))+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:16}},e._l(e.symbols,(function(e,n){return t("icon-cell",{key:"cell-".concat(n),attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Visual Idiot")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"http://brankic1979.com/icons/"}},[e._v(" http://brankic1979.com/icons/ ")])]),t("li",[e._v("License：Custom (Free to use)")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/brankic-1979"}},[e._v("Brankic 1979 图标库")])],1),t("div",{staticClass:"util-align-right base-footer__navigation"},[e._v(" Next Page： "),t("router-link",{attrs:{to:"/icons/eighty-shades"}},[e._v(" Eighty Shades 图标库 ")])],1)])],1)},c=[],i=n(124),s=(n(1539),n(8783),n(3948),n(561),n(7327),n(4916),n(4723),n(4341)),a=n(9138),r=n(8249),l=n(830),u=function(){return Promise.all([n.e(9992),n.e(7773)]).then(n.bind(n,90))},d=function(){return Promise.all([n.e(8832),n.e(7620)]).then(n.bind(n,3197))},h=function(){return Promise.all([n.e(213),n.e(6418)]).then(n.bind(n,3839))},m=function(){return n.e(4529).then(n.bind(n,6212))},f=function(){return Promise.all([n.e(3324),n.e(8207)]).then(n.bind(n,3734))},b=function(){return Promise.all([n.e(3309),n.e(5819)]).then(n.bind(n,7371))},v=function(){return n.e(1574).then(n.bind(n,4485))},p=function(){return n.e(2496).then(n.bind(n,827))},g=function(){return Promise.all([n.e(374),n.e(5825)]).then(n.bind(n,4693))},y=30,_={name:"PageBroccolidryIcons",componentName:"PageBroccolidryIcons",components:{BaseContainer:u,BaseHeader:d,BaseMain:h,BaseBreadcrumb:m,BaseBreadcrumbItem:f,BaseFooter:b,BaseInput:v,BaseGrid:p,BaseEmpty:g,IconCell:s.Z},data:function(){return{broccolidrySet:a.Z,keyword:"",symbols:[],count:0}},created:function(){var e=this.broccolidrySet.symbols,t=(0,r.Xh)(e);this.count=e.length,this.symbols=t.splice(0,y)},mounted:function(){var e=this,t=(0,r.Xh)(this.broccolidrySet.symbols),n=function(){e.symbols=e.symbols.concat(t.splice(0,y))};this.$nextTick((function(){setTimeout((function(){(0,l.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.length>0)){e.next=6;break}return n(),void(e.next=4);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))()}),150)}))},methods:{query:function(e){var t=this,n=this.broccolidrySet.symbols.filter((function(n){var o=t.getSymbolName(n).toLowerCase();return o.indexOf(e.toLowerCase())>-1}));this.count=n.length,this.symbols=n},getSymbolName:function(e){var t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,r.Ds)((function(){this.query(this.keyword)}),300)}},k=_,C=n(1001),w=(0,C.Z)(k,o,c,!1,null,null,null),x=w.exports},4341:function(e,t,n){n.d(t,{Z:function(){return m}});n(8309);var o=function(){var e=this,t=e._self._c;return t("div",{class:["icon-cell",{"is-checked":e.checked}],on:{click:e.onCheck}},[t("span",{staticClass:"icon-cell__marked"},[t("svg-icon",{attrs:{name:"selected",size:24}})],1),t("div",{staticClass:"icon-cell__svg"},[t("svg-icon",{attrs:{name:e.name,size:32}})],1),t("p",{staticClass:"icon-cell__name"},[e._v(" "+e._s(e.name)+" ")]),t("div",{staticClass:"icon-cell__toolbar"},[t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onCopy.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"copy",size:14}}),e._v(" 复制 ")],1),t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onDownload.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"download",size:14}}),e._v(" 下载 ")],1)])])},c=[],i=(n(4916),n(4723),n(2222),n(9126)),s=n(8249),a=n(481),r={name:"IconCell",componentName:"IconCell",components:{SvgIcon:i.Z},props:{symbol:{type:String,default:""}},data:function(){return{name:"",checked:!1}},watch:{symbol:function(){this.update()}},mounted:function(){this.update(),this.$subscribe("update:icons",this.updateChecked),this.$subscribe("clean:cart",this.updateChecked)},beforeDestroy:function(){this.$unsubscribe("update:icons",this.updateChecked),this.$unsubscribe("clean:cart",this.updateChecked)},methods:{update:function(){var e=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=e[1],this.updateChecked()},updateChecked:function(){var e=(0,a.cF)("svg.icon.set");this.checked=!!e&&JSON.parse(e).indexOf(this.symbol)>-1},add:function(e){this.$broadcast("add:icon",e)},remove:function(e){this.$broadcast("remove:icon",e)},check:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"加入";this.$message.success({round:!0,message:"图标 ".concat(e," 已").concat(t,"购物车！")})},copy:function(e){(0,s.vQ)(e),this.$message.success({round:!0,message:"图标名 ".concat(e," 已复制到粘贴板！")})},download:function(){var e=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,t=this.symbol,n=t.match(e)[3],o=t.match(/viewBox="0 0 (.*?)"/)[1].split(" "),c=parseInt(o[0],10),i=parseInt(o[1],10),a=c>200?200:c,r=i>200?200:i,l='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+a+'" height="'+r+'" viewBox="0 0 '+c+" "+i+'">\n<title>'+this.name+"</title>\n"+n+"\n</svg>";(0,s.dX)("".concat(this.name,".svg"),l)},toggle:function(){this.checked=!this.checked},onCheck:function(){var e="",t=this.symbol;this.toggle(),this.checked?(this.add(t),e="加入"):(e="移除",this.remove(t)),this.check(this.name,e)},onCopy:function(){this.copy(this.name)},onDownload:function(){this.download()}}},l=r,u=n(1001),d=(0,u.Z)(l,o,c,!1,null,null,null),h=d.exports;h.install=function(e){e.component(h.name,h)};var m=h},481:function(e,t,n){n.d(t,{B$:function(){return i},cF:function(){return c},po:function(){return o}});var o=function(e,t){localStorage.setItem(e,t)},c=function(e){return localStorage.getItem(e)},i=function(e){localStorage.removeItem(e)}},830:function(e,t,n){var o=n(8673),c=function(e){return(0,o.mf)(e)&&(e=e()),!(!e||!(0,o.mf)(e.next))&&function t(){var n=performance.now(),c=null;do{c=e.next()}while(!c.done&&performance.now()-n<25);if(c.done)return!1;(0,o.mf)(requestIdleCallback)?requestIdleCallback(t):setTimeout(t,10)}};t["Z"]=c},8249:function(e,t,n){n.d(t,{Ds:function(){return s},Xh:function(){return a},dX:function(){return i},vQ:function(){return c}});var o=n(3336),c=(n(1539),n(8783),n(3948),n(285),n(1637),n(4747),n(7941),n(1038),function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))}),i=function(e,t){var n=new Blob([t]),o=document.createElement("a");o.download=e,o.href=URL.createObjectURL(n),o.click(),URL.revokeObjectURL(n)},s=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var o=this,c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];clearTimeout(t),t=setTimeout((function(){return e.apply(o,i)}),n)}},a=function e(t){if(null===t)return null;var n=Object.assign({},t);return Object.keys(n).forEach((function(c){return n[c]="object"===(0,o.Z)(t[c])?e(t[c]):t[c]})),Array.isArray(t)?(n.length=t.length,Array.from(n)):n}}}]);