"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[924],{2806:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});n(8309);var s=function(){var t=this,e=t._self._c;return e("base-drawer",{ref:"drawer",attrs:{title:t.title,"header-border":"","footer-border":"",size:"medium",padding:"none",buttons:t.buttons,"custom-class":"card-drawer"},on:{close:t.onClose},scopedSlots:t._u([{key:"tabs",fn:function(){return[e("base-tabs-nav",{staticClass:"cart-drawer__tabs",attrs:{stretch:"",tabs:t.tabs},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}})]},proxy:!0},t.isIconView?{key:"toolbar",fn:function(){return[e("cart-drawer-toolbar",{attrs:{"is-checked":t.checked,items:t.options,selected:t.selected},on:{check:t.onCheckAll,import:t.onImport}})]},proxy:!0}:null],null,!0)},[e("div",{class:["cart-drawer__main",{"is-auto":t.isIconView&&!t.disabled}]},[e(t.active,t._b({tag:"component",on:{update:t.onUpdate,delete:t.onDelete}},"component",t.attrs,!1))],1)])},i=[],o=n(5957),c=(n(1539),n(8783),n(3948),n(7327),n(1249),n(8862),n(9600),n(2222),n(4747),n(7658),n(4916),n(4723),n(5965)),r=n(7642),a=n(481),u=n(8249),l=n(2648),d=function(){return Promise.all([n.e(836),n.e(114),n.e(552)]).then(n.bind(n,3481))},h=function(){return Promise.all([n.e(836),n.e(289)]).then(n.bind(n,3337))},f=function(){return n.e(967).then(n.bind(n,2394))},m={name:"CartDrawer",componentName:"CartDrawer",components:{BaseDrawer:c.Z,BaseTabsNav:r.Z,CartDrawerToolbar:d,CartDrawerList:h,CartDrawerCode:f},props:{title:{type:String,default:"购物车"},items:{type:Array,default:function(){return[]}}},data:function(){return{start:0,last:0,active:"CartDrawerList",checked:!1,tabs:[{label:"SVG 图标集",value:"CartDrawerList"},{label:"JS 源代码",value:"CartDrawerCode"}],collections:[],imports:[],options:[],buttons:[]}},computed:{isIconView:function(){return"CartDrawerList"===this.active},isUnchecked:function(){return 0===this.count},attrs:function(){var t=this.options,e=this.disabled,n=this.code;return this.isIconView?{options:t,isEmpty:e}:{code:n}},disabled:function(){return 0===this.options.length},selected:function(){return this.options.filter((function(t){return t.checked}))},symbols:function(){return this.selected.map((function(t){return t.symbol}))},count:function(){return this.selected.length},code:function(){var t={title:"SvgIcon 图标集",code:"SvgIconSet",symbols:this.symbols},e=JSON.stringify(t,null,2);return"// Generated by svg-icon.vue\nconst SvgIconSet = ".concat(e,"\n\nexport default SvgIconSet\n")},svg:function(){return'\x3c!-- Generated by svg-icon.vue --\x3e\n<svg id="svg-icons" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden;">\n'+this.symbols.join("\n")+"\n</svg>"}},watch:{items:function(){this.update()},count:function(){this.updateButtons(),this.updateCheckAll()}},created:function(){this.update()},mounted:function(){this.$subscribe("show:drawer",this.show),this.$subscribe("hide:drawer",this.hide)},beforeDestroy:function(){this.$unsubscribe("show:drawer",this.show),this.$unsubscribe("hide:drawer",this.hide),this.$broadcast("show:cert")},methods:{update:function(){this.collections=this.items.map((function(t){return{checked:!0,isBuiltIn:!0,symbol:t}})),this.options=this.collections.concat(this.imports),this.updateCheckAll(),this.updateButtons()},updateCheckAll:function(){this.checked=this.count>0},updateButtons:function(){var t=this;this.buttons=[{name:"cancel",text:"取消",size:"small"},{name:"clean",text:"清空",icon:"trash",disabled:this.disabled,action:function(){t.clear()}},{name:"download",text:"下载",icon:"download",disabled:this.isUnchecked,action:function(){t.download()}},{name:"confirm",text:"复制",icon:"copy",size:"small",type:"primary",disabled:this.isUnchecked,action:function(){t.copy()}}]},uncheckAll:function(){var t=this.collections.concat(this.imports);this.options=t.map((function(t){var e=t.isBuildIn,n=t.symbol;return{checked:!1,isBuildIn:e,symbol:n}}))},checkAll:function(){var t=this.collections.concat(this.imports);this.options=t.map((function(t){var e=t.isBuildIn,n=t.symbol;return{checked:!0,isBuildIn:e,symbol:n}}))},doImport:function(t){var e=this;(0,l.s)({symbols:t}),t.forEach((function(t){e.imports.push({checked:!0,isBuildIn:!1,symbol:t})})),this.update()},doDelete:function(t){var e=(0,o.Z)(this.imports);this.imports=e.filter((function(e){return e.symbol!==t})),this.update()},clear:function(){var t=document.querySelector("#svg-icons"),e=(0,o.Z)(this.imports);(0,a.B$)("svg.icon.set"),e.forEach((function(e){var n=/id="(.*?)"/,s=e.symbol.match(n),i=s&&s[1]?s[1]:"",o=document.querySelector("#".concat(i));if(e.isBuildIn||!o)return!1;t.removeChild(o)})),this.imports=[],this.$message.success({round:!0,message:"购物车已清空！"}),this.$broadcast("clean:cart")},copy:function(){(0,u.vQ)(this.isIconView?this.svg:this.code),this.$message.success({round:!0,message:"代码已复制！"})},download:function(){this.isIconView?(0,u.dX)("svg-icon-set.svg",this.svg):(0,u.dX)("svg-icon-set.js",this.code)},show:function(){this.$refs.drawer.open()},hide:function(){this.$refs.drawer.close()},close:function(){var t=this;setTimeout((function(){t.$broadcast("show:cart")}),300)},onCheckAll:function(t,e){e||t&&!e?this.checkAll():this.uncheckAll()},onImport:function(t){this.doImport(t)},onUpdate:function(t){this.options=(0,o.Z)(t)},onDelete:function(t){console.log("onDelete",t),this.doDelete(t)},onClose:function(){this.close()}}},p=m,b=n(1001),v=(0,b.Z)(p,s,i,!1,null,"19348537",null),w=v.exports;w.install=function(t){t.component(w.name,w)};var y=w}}]);