"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[8924],{8249:function(e,t,s){s.d(t,{Ds:function(){return i},Xh:function(){return c},dX:function(){return n},vQ:function(){return o}});const o=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const s=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),s&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(s))},n=(e,t)=>{const s=new Blob([t]),o=document.createElement("a");o.download=e,o.href=URL.createObjectURL(s),o.click(),URL.revokeObjectURL(s)},i=(e,t=300)=>{let s;return function(...o){clearTimeout(s),s=setTimeout((()=>e.apply(this,o)),t)}},c=e=>{if(null===e)return null;let t=Object.assign({},e);return Object.keys(t).forEach((s=>t[s]="object"===typeof e[s]?c(e[s]):e[s])),Array.isArray(e)?(t.length=e.length,Array.from(t)):t}},6978:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var o=function(){var e=this,t=e._self._c;return t("base-drawer",{ref:"drawer",attrs:{title:e.title,"header-border":"","footer-border":"",size:"medium",padding:"none",buttons:e.buttons,"custom-class":"card-drawer"},on:{close:e.onClose},scopedSlots:e._u([{key:"tabs",fn:function(){return[t("base-tab-nav",{staticClass:"cart-drawer__tabs",attrs:{stretch:"",tabs:e.tabs},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}})]},proxy:!0},e.isIconView?{key:"toolbar",fn:function(){return[t("cart-drawer-toolbar",{attrs:{"is-checked":e.checked,items:e.options,selected:e.selected},on:{check:e.onCheckAll,import:e.onImport}})]},proxy:!0}:null],null,!0)},[t("div",{class:["cart-drawer__main",{"is-auto":e.isIconView&&!e.disabled}]},[t(e.active,e._b({tag:"component",on:{update:e.onUpdate,delete:e.onDelete}},"component",e.attrs,!1))],1)])},n=[],i=(s(7658),s(481)),c=s(8249),r=s(2648);const a=()=>Promise.all([s.e(9831),s.e(8832),s.e(3309),s.e(213),s.e(9992),s.e(9403)]).then(s.bind(s,5545)),l=()=>s.e(2436).then(s.bind(s,1379)),d=()=>s.e(6552).then(s.bind(s,820)),h=()=>s.e(2289).then(s.bind(s,6506)),u=()=>s.e(2967).then(s.bind(s,2394));let m=0;var p={name:"CartDrawer",componentName:"CartDrawer",components:{BaseDrawer:a,BaseTabNav:l,CartDrawerToolbar:d,CartDrawerList:h,CartDrawerCode:u},props:{title:{type:String,default:"购物车"},items:{type:Array,default:()=>[]}},data(){return{start:0,last:0,active:"CartDrawerList",checked:!1,tabs:[{label:"SVG 图标集",value:"CartDrawerList"},{label:"JS 源代码",value:"CartDrawerCode"}],collections:[],imports:[],options:[],buttons:[]}},computed:{isIconView(){return"CartDrawerList"===this.active},isUnchecked(){return 0===this.count},attrs(){const e=this.options,t=this.disabled,s=this.code;return this.isIconView?{options:e,isEmpty:t}:{code:s}},disabled(){return 0===this.options.length},selected(){return this.options.filter((e=>e.checked))},symbols(){return this.selected.map((e=>e.symbol))},count(){return this.selected.length},code(){const e={title:"SvgIcon 图标集",code:"SvgIconSet",symbols:this.symbols},t=JSON.stringify(e,null,2);return`// Generated by svg-icon.vue\nconst SvgIconSet = ${t}\n\nexport default SvgIconSet\n`},svg(){return'\x3c!-- Generated by svg-icon.vue --\x3e\n<svg id="svg-icons" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden;">\n'+this.symbols.join("\n")+"\n</svg>"}},watch:{items(){this.update()},count(){this.updateButtons(),this.updateCheckAll()}},created(){this.update()},mounted(){this.$subscribe("show:drawer",this.show),this.$subscribe("hide:drawer",this.hide)},beforeDestroy(){this.$unsubscribe("show:drawer",this.show),this.$unsubscribe("hide:drawer",this.hide),this.$broadcast("show:cert")},methods:{update(){this.collections=this.items.map((e=>({checked:!0,isBuiltIn:!0,symbol:e}))),this.options=this.collections.concat(this.imports),this.updateCheckAll(),this.updateButtons()},updateCheckAll(){this.checked=this.count>0},updateButtons(){this.buttons=[{name:"cancel",text:"取消",size:"small"},{name:"clean",text:"清空",icon:"trash",disabled:this.disabled,action:()=>{(0,i.B$)("svg.icon.set"),this.imports=[],this.$message.success({round:!0,message:"购物车已清空！"}),this.$broadcast("clean:cart")}},{name:"download",text:"下载",icon:"download",disabled:this.isUnchecked,action:()=>{this.isIconView?(0,c.dX)("svg-icon-set.svg",this.svg):(0,c.dX)("svg-icon-set.js",this.code)}},{name:"confirm",text:"复制",icon:"copy",size:"small",type:"primary",disabled:this.isUnchecked,action:()=>{(0,c.vQ)(this.isIconView?this.svg:this.code),this.$message.success({round:!0,message:"代码已复制！"})}}]},uncheckAll(){const e=this.collections.concat(this.imports);this.options=e.map((e=>{const{isBuildIn:t,symbol:s}=e;return{checked:!1,isBuildIn:t,symbol:s}}))},checkAll(){const e=this.collections.concat(this.imports);this.options=e.map((e=>{const{isBuildIn:t,symbol:s}=e;return{checked:!0,isBuildIn:t,symbol:s}}))},doImport(e,t){const s=(0,r.x)(),o=s.find((e=>{const s=/id="(.*?)"/,o=e.match(s),n=o&&o[1]?o[1]:"";return n.toLowerCase()===t.toLowerCase()}));o&&(m+=1,e=e.replace(t,`${t}-${m}`),(0,r.s)({symbols:[e]})),this.imports.push({checked:!0,isBuildIn:!1,symbol:e}),this.update()},doDelete(e){const t=[...this.imports];this.imports=t.filter((t=>t.symbol!==e)),this.update()},show(){this.$refs.drawer.open()},hide(){this.$refs.drawer.close()},close(){setTimeout((()=>{this.$broadcast("show:cart")}),300)},onCheckAll(e,t){t||e&&!t?this.checkAll():this.uncheckAll()},onImport(e,t){this.doImport(e,t)},onUpdate(e){this.options=[...e]},onDelete(e){this.doDelete(e)},onClose(){this.close()}}},b=p,w=s(1001),v=(0,w.Z)(b,o,n,!1,null,"6891d0d0",null),y=v.exports;y.install=function(e){e.component(y.name,y)};var g=y}}]);