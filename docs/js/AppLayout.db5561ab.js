"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[287],{3046:function(t,e,s){s.r(e),s.d(e,{default:function(){return te}});var a=function(){var t=this,e=t._self._c;return e("base-container",[t._m(0),e("base-main",{attrs:{"use-main-tag":"",flex:"",overflow:"hidden"}},[t._m(1),e("base-main",{attrs:{overflow:"hidden"}},[e("keep-alive",[e("router-view")],1)],1)],1),e("cart-bar",{attrs:{items:t.icons}}),e("cart-drawer",{attrs:{items:t.icons}})],1)},i=[function(){var t=this,e=t._self._c;return e("app-header")},function(){var t=this,e=t._self._c;return e("app-aside")}],o=(s(7658),s(90)),n=s(3839),r=function(){var t=this,e=t._self._c;return e("div",{class:["cart-bar",{"is-hidden":!t.isShow}],attrs:{id:"cart"},on:{click:t.onToggle}},[e("div",{staticClass:"cart-bar__icon"},[e("svg-icon",{attrs:{name:"put-on",size:30}})],1),e("sup",{staticClass:"cart-bar__count"},[t._v(t._s(t.count))])])},c=[],l=s(6105),d={name:"CartBar",componentName:"CartBar",components:{SvgIcon:l.Z},props:{items:{type:Array,default:()=>[]}},data(){return{isShow:!0,collections:[]}},computed:{count(){return this.collections.length}},watch:{items(){this.update()}},created(){this.update()},mounted(){const t=document.querySelector("#cart"),e=document.body;e.appendChild(t),this.$subscribe("show:cart",this.show)},beforeDestroy(){this.$unsubscribe("show:cart",this.show)},methods:{update(){this.collections=[...this.items]},toggle(){this.isShow=!this.isShow},show(){this.isShow=!0},hide(){this.isShow=!1},onToggle(){this.toggle(),this.isShow?setTimeout((()=>{this.$broadcast("hide:drawer")}),300):setTimeout((()=>{this.$broadcast("show:drawer")}),300)}}},h=d,u=s(1001),p=(0,u.Z)(h,r,c,!1,null,"14864ed6",null),m=p.exports;m.install=function(t){t.component(m.name,m)};var g=m,b=function(){var t=this,e=t._self._c;return e("base-drawer",{ref:"drawer",attrs:{title:t.title,"header-border":"","footer-border":"",size:"medium",padding:"none",buttons:t.buttons,"custom-class":"card-drawer"},on:{close:t.onClose},scopedSlots:t._u([{key:"tabs",fn:function(){return[e("base-tabs-nav",{staticClass:"cart-drawer__tabs",attrs:{stretch:"",tabs:t.tabs},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}})]},proxy:!0},t.isIconView?{key:"toolbar",fn:function(){return[e("cart-drawer-toolbar",{attrs:{"is-checked":t.checked,items:t.options,selected:t.selected},on:{check:t.onCheckAll,import:t.onImport}})]},proxy:!0}:null],null,!0)},[e("div",{class:["cart-drawer__main",{"is-auto":t.isIconView&&!t.disabled}]},[e(t.active,t._b({tag:"component",on:{update:t.onUpdate,delete:t.onDelete}},"component",t.attrs,!1))],1)])},v=[],_=s(5545),f=s(7642),w=function(){var t=this,e=t._self._c;return e("base-toolbar",{staticClass:"cart-drawer-toolbar",attrs:{role:"toolbar",flex:"",border:"",padding:"outer",height:"inner"},scopedSlots:t._u([{key:"left",fn:function(){return[e("base-checkbox",{staticClass:"cart-drawer-toolbar__checkbox",attrs:{indeterminate:t.isIndeterminate,disabled:t.disabled},on:{change:t.onCheck},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v(" 全选（"+t._s(t.count)+"） ")])]},proxy:!0},{key:"right",fn:function(){return[e("base-button",{attrs:{type:"text",icon:"import"},on:{click:t.onImport}},[t._v(" 导入 ")]),e("input",{ref:"file",staticClass:"cart-drawer-toolbar__import",attrs:{multiple:"",type:"file",accept:"image/svg+xml"},on:{change:t.onReadFiles}})]},proxy:!0}])})},y=[],k=s(8486),C=s(6674),$=s(954),x=s(2648);let I=0;var S={name:"CartDrawerToolbar",componentName:"CartDrawerToolbar",components:{BaseToolbar:k.Z,BaseCheckbox:C.Z,BaseButton:$.Z},props:{isChecked:{type:Boolean,default:!0},selected:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},data(){return{checked:!0,symbols:[]}},computed:{disabled(){return 0===this.items.length},count(){return this.selected.length},isIndeterminate(){const t=this.count;return t>0&&t<this.items.length}},watch:{isChecked(){this.update()}},created(){this.update()},methods:{update(){this.checked=this.isChecked},doImport(t,e){const s=/viewBox="(.*?)"/,a=/<title(([\s\S])*?)>(.*?)<\/title>/,i=/(<(path|polygon)(([\s\S])*?)\s?\/?>((.*?)<\/(path|polygon)>)?)/gi,o=e.match(a),n=o&&o[3]?o[3]:"",r=`icon-${n||t.replace(/\.svg$/,"")}`,c=e.match(s),l=c&&c[1]?c[1]:"",d=e.match(i),h=(0,x.x)(),u=h.find((t=>{const e=/id="(.*?)"/,s=t.match(e),a=s&&s[1]?s[1]:"";return a.toLowerCase()===r.toLowerCase()}));let p=`<symbol id="${r}" viewBox="${l}">\n${d.join("\n")}\n</symbol>`;u&&(I+=1,p=p.replace(r,`${r}-${I}`)),this.symbols.push(p)},readFiles(t){let e=0;t.forEach((s=>{const a=new FileReader;a.readAsText(new Blob([s]),"UTF-8"),a.addEventListener("load",(a=>{const i=a.target.result;e+=1,this.doImport(s.name,i),e===t.length&&(this.$refs.file.value="",this.$emit("import",this.symbols))}))}))},onCheck(){this.$emit("check",this.checked,this.isIndeterminate)},onImport(){this.$refs.file.click()},onReadFiles(t){this.readFiles([...t.target.files])}}},B=S,D=(0,u.Z)(B,w,y,!1,null,"ec695364",null),A=D.exports;A.install=function(t){t.component(A.name,A)};var Z=A,z=function(){var t=this,e=t._self._c;return e("ul",{class:["cart-drawer-list",{"is-empty":t.isEmpty}]},[t.items.length>0?t._l(t.items,(function(s,a){return e("cart-drawer-item",{key:`item-${a}`,attrs:{symbol:s.symbol,"is-checked":s.checked,"is-build-in":s.isBuildIn,index:a},on:{check:t.onCheck,delete:t.onDelete,dragstart:t.onDragStart,drop:t.onDragDrop,dragend:t.onDragEnd}})})):e("cart-drawer-item",{attrs:{"is-empty":""}},[e("base-empty")],1)],2)},N=[],L=s(4693),T=function(){var t=this,e=t._self._c;return e("li",{class:["cart-drawer-item",{"is-empty":t.isEmpty}],attrs:{"data-index":t.id},on:{dragenter:t.dragEnter,dragover:t.dragOver,dragleave:t.dragLeave,drop:t.dragDrop,dragend:t.dragEnd}},[t._t("default",(function(){return[e("div",{staticClass:"cart-drawer-item__inner",attrs:{draggable:"true"},on:{dragstart:t.dragStart,drag:t.drag}},[e("div",{staticClass:"cart-drawer-item__draggable"},[e("svg-icon",{attrs:{name:"drag",size:20}})],1),e("div",{staticClass:"cart-drawer-item__checkbox"},[e("base-checkbox",{on:{change:t.onCheck},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1),e("div",{staticClass:"cart-drawer-item__icon"},[e("svg-icon",{attrs:{name:t.name,size:32}})],1),e("div",{staticClass:"cart-drawer-item__meta"},[e("h3",{staticClass:"cart-drawer-item__title"},[t._v(" "+t._s(t.name)+" "),t.buildIn?t._e():e("base-tag",{attrs:{type:"success",size:"small"}},[t._v(" 导入 ")])],1),e("dl",{staticClass:"cart-drawer-item__dl"},[e("dt",{staticClass:"cart-drawer-item__dt"},[t._v("宽：")]),e("dd",{staticClass:"cart-drawer-item__dd"},[t._v(t._s(t.width))]),e("dt",{staticClass:"cart-drawer-item__dt"},[t._v("高：")]),e("dd",{staticClass:"cart-drawer-item__dd"},[t._v(t._s(t.height))]),e("dt",{staticClass:"cart-drawer-item__dt"},[t._v("viewBox：")]),e("dd",{staticClass:"cart-drawer-item__dd"},[t._v(" "+t._s(`0 0 ${t.size.width} ${t.size.height}`)+" ")])])]),e("div",{staticClass:"cart-drawer-item__delete",on:{click:t.onDelete}},[e("svg-icon",{attrs:{name:"trash",size:20}})],1)])]}))],2)},E=[],F=s(9147);const M=(t,e)=>{if(!e)return!1;if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(s){return!1}return!1},H=t=>t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode,V=(t,e,s,a)=>{if(t){s=s||document;do{if(null!=e&&(">"===e[0]?t.parentNode===s&&M(t,e):M(t,e))||a&&t===s)return t;if(t===s)break}while(t=H(t))}return null},q="cart-drawer-item",O=`${q}_over`,U=`${q}_dragging`;var J={name:"CartDrawerItem",componentName:"CartDrawerItem",components:{BaseCheckbox:C.Z,BaseTag:F.Z,SvgIcon:l.Z},props:{index:{type:Number,default:0},symbol:{type:String,default:""},isChecked:{type:Boolean,default:!1},isBuildIn:{type:Boolean,default:!0},isEmpty:{type:Boolean,default:!1}},data(){return{id:0,checked:!1,buildIn:!0,item:""}},computed:{name(){const t=this.item.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},size(){const t=this.item.match(/viewBox="0 0 (.*?)"/)[1].split(" ");let e=0,s=0;return t&&(e=t[0]?parseInt(t[0],10):0,s=t[1]?parseInt(t[1],10):0),{width:e,height:s}},width(){const{width:t}=this.size;return t>200?200:t},height(){const{height:t}=this.size;return t>200?200:t}},watch:{index(){this.update()},symbol(){this.update()},isChecked(){this.update()},isBuiltIn(){this.update()}},created(){this.update()},methods:{update(){this.id=this.index,this.item=this.symbol,this.checked=this.isChecked,this.buildIn=this.isBuildIn},dragStart(t){const e=t.target,s=V(e,`.${q}`,this.$el,!0),a=s.cloneNode(!0);s.classList.add(U),a.id="drag-drawer-item-ghost",a.classList.add("cart-drawer-item--ghost"),document.body.appendChild(a),t.dataTransfer.setDragImage(a,0,0),this.$emit("dragstart",s.getAttribute("data-index"))},drag(t){const e=document.querySelector("#drag-drawer-item-ghost");e.style.top=`${t.pageY}px`,e.style.left=`${t.pageX}px`,t.dataTransfer.dropEffect="move",t.dataTransfer.effectAllowed="move"},dragEnter(t){const e=V(t.target,`.${q}`,this.$el,!0);t.preventDefault(),e.classList.add(O)},dragOver(t){const e=V(t.target,`.${q}`,this.$el,!0);t.preventDefault(),e.classList.add(O)},dragLeave(t){const e=V(t.target,`.${q}`,this.$el,!0);e.classList.remove(O)},dragDrop(t){const e=V(t.target,`.${q}`,this.$el,!0);e.classList.remove(O),this.$emit("drop",e.getAttribute("data-index"))},dragEnd(t){const e=document.querySelector("#drag-drawer-item-ghost"),s=V(t.target,`.${q}`,this.$el,!0);s.classList.remove(U),e&&e.parentNode.removeChild(e),this.$emit("dragend")},onCheck(){this.$emit("check",{id:this.id,symbol:this.item,checked:this.checked,name:this.name})},onDelete(){this.$emit("delete",{id:this.id,symbol:this.item,name:this.name,isBuildIn:this.buildIn})}}},j=J,G=(0,u.Z)(j,T,E,!1,null,"1acf4648",null),R=G.exports;R.install=function(t){t.component(R.name,R)};var X=R,P={name:"CartDrawerList",componentName:"CartDrawerList",components:{BaseEmpty:L.Z,CartDrawerItem:X},props:{isEmpty:{type:Boolean,default:!1},options:{type:Array,default:()=>[]}},data(){return{start:0,last:0,items:[]}},created(){this.update()},watch:{options(){this.update()}},methods:{update(){this.items=[...this.options]},swap(t,e){const s=[...this.items];[s[t],s[e]]=[s[e],s[t]],this.items=s,this.$emit("update",s)},doCheck(t,e){const s=[...this.items];s[t].checked=e,this.items=s,this.$emit("update",s)},doDelete(t,e,s){let a;s?this.$broadcast("remove:icon",t):(a=document.querySelector(`#icon-${e}`),a&&a.parentNode.removeChild(a),this.$emit("delete",t)),this.$message.success({round:!0,message:`图标 ${e} 已移除购物车！`})},onCheck({id:t,checked:e}){this.doCheck(t,e)},onDelete({symbol:t,name:e,isBuildIn:s}){this.doDelete(t,e,s)},onDragStart(t){this.start=parseInt(t,10)},onDragDrop(t){this.last=parseInt(t,10)},onDragEnd(){this.swap(this.start,this.last)}}},Q=P,Y=(0,u.Z)(Q,z,N,!1,null,"566d2d71",null),K=Y.exports;K.install=function(t){t.component(K.name,K)};var W=K,tt=function(t,e){return t("textarea",{staticClass:"cart-drawer__code",attrs:{readonly:""},domProps:{value:e.props.code}})},et=[],st={name:"CartDrawerCode",componentName:"CartDrawerCode",props:{code:{type:String,default:""}}},at=st,it=(0,u.Z)(at,tt,et,!0,null,null,null),ot=it.exports;ot.install=function(t){t.component(ot.name,ot)};var nt=ot,rt=s(481),ct=s(8249),lt={name:"CartDrawer",componentName:"CartDrawer",components:{BaseDrawer:_.Z,BaseTabsNav:f.Z,CartDrawerToolbar:Z,CartDrawerList:W,CartDrawerCode:nt},props:{title:{type:String,default:"购物车"},items:{type:Array,default:()=>[]}},data(){return{start:0,last:0,active:"CartDrawerList",checked:!1,tabs:[{label:"SVG 图标集",value:"CartDrawerList"},{label:"JS 源代码",value:"CartDrawerCode"}],collections:[],imports:[],options:[],buttons:[]}},computed:{isIconView(){return"CartDrawerList"===this.active},isUnchecked(){return 0===this.count},attrs(){const t=this.options,e=this.disabled,s=this.code;return this.isIconView?{options:t,isEmpty:e}:{code:s}},disabled(){return 0===this.options.length},selected(){return this.options.filter((t=>t.checked))},symbols(){return this.selected.map((t=>t.symbol))},count(){return this.selected.length},code(){const t={title:"SvgIcon 图标集",code:"SvgIconSet",symbols:this.symbols},e=JSON.stringify(t,null,2);return`// Generated by svg-icon.vue\nconst SvgIconSet = ${e}\n\nexport default SvgIconSet\n`},svg(){return'\x3c!-- Generated by svg-icon.vue --\x3e\n<svg id="svg-icons" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden;">\n'+this.symbols.join("\n")+"\n</svg>"}},watch:{items(){this.update()},count(){this.updateButtons(),this.updateCheckAll()}},created(){this.update()},mounted(){this.$subscribe("show:drawer",this.show),this.$subscribe("hide:drawer",this.hide)},beforeDestroy(){this.$unsubscribe("show:drawer",this.show),this.$unsubscribe("hide:drawer",this.hide),this.$broadcast("show:cert")},methods:{update(){this.collections=this.items.map((t=>({checked:!0,isBuiltIn:!0,symbol:t}))),this.options=this.collections.concat(this.imports),this.updateCheckAll(),this.updateButtons()},updateCheckAll(){this.checked=this.count>0},updateButtons(){this.buttons=[{name:"cancel",text:"取消",size:"small"},{name:"clean",text:"清空",icon:"trash",disabled:this.disabled,action:()=>{this.clear()}},{name:"download",text:"下载",icon:"download",disabled:this.isUnchecked,action:()=>{this.download()}},{name:"confirm",text:"复制",icon:"copy",size:"small",type:"primary",disabled:this.isUnchecked,action:()=>{this.copy()}}]},uncheckAll(){const t=this.collections.concat(this.imports);this.options=t.map((t=>{const{isBuildIn:e,symbol:s}=t;return{checked:!1,isBuildIn:e,symbol:s}}))},checkAll(){const t=this.collections.concat(this.imports);this.options=t.map((t=>{const{isBuildIn:e,symbol:s}=t;return{checked:!0,isBuildIn:e,symbol:s}}))},doImport(t){(0,x.s)({symbols:t}),t.forEach((t=>{this.imports.push({checked:!0,isBuildIn:!1,symbol:t})})),this.update()},doDelete(t){const e=[...this.imports];this.imports=e.filter((e=>e.symbol!==t)),this.update()},clear(){const t=document.querySelector("#svg-icons"),e=[...this.imports];(0,rt.B$)("svg.icon.set"),e.forEach((e=>{const s=/id="(.*?)"/,a=e.symbol.match(s),i=a&&a[1]?a[1]:"",o=document.querySelector(`#${i}`);if(e.isBuildIn||!o)return!1;t.removeChild(o)})),this.imports=[],this.$message.success({round:!0,message:"购物车已清空！"}),this.$broadcast("clean:cart")},copy(){(0,ct.vQ)(this.isIconView?this.svg:this.code),this.$message.success({round:!0,message:"代码已复制！"})},download(){this.isIconView?(0,ct.dX)("svg-icon-set.svg",this.svg):(0,ct.dX)("svg-icon-set.js",this.code)},show(){this.$refs.drawer.open()},hide(){this.$refs.drawer.close()},close(){setTimeout((()=>{this.$broadcast("show:cart")}),300)},onCheckAll(t,e){e||t&&!e?this.checkAll():this.uncheckAll()},onImport(t){this.doImport(t)},onUpdate(t){this.options=[...t]},onDelete(t){this.doDelete(t)},onClose(){this.close()}}},dt=lt,ht=(0,u.Z)(dt,b,v,!1,null,"bfe5fa3c",null),ut=ht.exports;ut.install=function(t){t.component(ut.name,ut)};var pt=ut,mt=function(){var t=this,e=t._self._c;return e("base-header",{attrs:{flex:"",padding:"inner",height:"outer"}},[e("app-logo"),e("app-nav")],1)},gt=[],bt=s(2941),vt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-logo",on:{click:t.toHome}},[e("span",{staticClass:"app-logo__icon"},[e("svg-icon",{attrs:{name:"bold-deploy",size:22}})],1),t._m(0)])},_t=[function(){var t=this,e=t._self._c;return e("h1",{staticClass:"app-logo__title"},[e("em",{staticClass:"app-logo__key"},[t._v("svg-icon")]),t._v(" .vue ")])}],ft={name:"AppLogo",componentName:"AppLogo",components:{SvgIcon:l.Z},computed:{isHome(){return"PageDocumentation"===this.$route.name}},methods:{toHome(){if(this.isHome)return!1;this.$router.push({path:"/docs"})}}},wt=ft,yt=(0,u.Z)(wt,vt,_t,!1,null,null,null),kt=yt.exports,Ct=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"app-nav"},t._l(t.navs,(function(t,s){return e("li",{key:`nav-${s}`,staticClass:"app-nav__item"},[e("base-link",{staticClass:"app-nav__link",attrs:{route:t.route,role:t.role,href:t.href,icon:t.icon,"icon-size":t.iconSize,target:t.target,download:t.download}})],1)})),0)},$t=[],xt=s(8040),It={name:"AppNav",componentName:"AppNav",components:{BaseLink:xt.Z},data(){return{navs:[{route:!1,role:"link",href:"http://www.yaohaixiao.com/",icon:"bold-home",iconSize:18},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue",icon:"bold-branch",iconSize:16},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/archive/refs/heads/main.zip",icon:"bold-download",iconSize:20,download:"svg-icon.vue-main.zip",target:"_blank"},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/issues",icon:"bold-help",iconSize:20}]}}},St=It,Bt=(0,u.Z)(St,Ct,$t,!1,null,null,null),Dt=Bt.exports,At={name:"AppHeader",componentName:"AppHeader",components:{BaseHeader:bt.Z,AppLogo:kt,AppNav:Dt}},Zt=At,zt=(0,u.Z)(Zt,mt,gt,!1,null,null,null),Nt=zt.exports,Lt=function(){var t=this,e=t._self._c;return e("base-aside",{attrs:{background:"",flex:"",padding:"none",collapsed:t.collapsed}},[e("base-main",{staticClass:"aside-main"},[e("app-menu")],1),e("base-footer",{attrs:{border:"",aling:"right",height:"inner"}},[e("div",{staticClass:"aside-collapse",on:{click:t.onToggle}},[e("svg-icon",{attrs:{name:"aside-collapse",size:20}})],1)])],1)},Tt=[],Et=s(7371),Ft=s(4139),Mt=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"app-menu"},[e("ul",{staticClass:"app-menu__list"},t._l(t.routes,(function(s,a){return e("li",{key:`menu-${a}`,staticClass:"app-menu__item"},[e("div",{staticClass:"app-menu__title"},[e("router-link",{staticClass:"app-menu__link",attrs:{to:`/${s.path}`}},[e("svg-icon",{attrs:{name:s.icon,size:16}}),e("span",{staticClass:"app-menu__text"},[t._v(t._s(s.text))])],1),t.hasChildren(s)?e("span",{class:["app-menu__arrow",{"is-folded":t.folded}],on:{click:t.onFold}},[e("svg-icon",{attrs:{name:"arrow-down",size:16}})],1):t._e()],1),e("transition",{attrs:{name:"fold"}},[!s.children||s.meta.hide||t.folded?t._e():e("ul",{staticClass:"app-submenu__list",attrs:{id:`submenu-${a}`}},t._l(s.children,(function(s,a){return e("li",{key:`child-${a}`,staticClass:"app-submenu__item"},[e("router-link",{staticClass:"app-menu__link",attrs:{to:{name:s.name}}},[e("span",{staticClass:"app-submenu__text"},[t._v(t._s(s.text))])])],1)})),0)])],1)})),0)])},Ht=[],Vt=s(254),qt=s(7712),Ot=s(6366),Ut={name:"AppMenu",componentName:"AppMenu",components:{SvgIcon:l.Z},data(){return{routes:[Vt.Z,qt.Z,Ot.Z],folded:!1}},methods:{hasChildren(t){const e=t.children;return!t.meta.hide&&e&&e.length>0},onFold(){this.folded=!this.folded}}},Jt=Ut,jt=(0,u.Z)(Jt,Mt,Ht,!1,null,null,null),Gt=jt.exports,Rt={name:"AppAside",componentName:"AppAside",components:{BaseAside:Ft.Z,BaseMain:n.Z,BaseFooter:Et.Z,AppMenu:Gt,SvgIcon:l.Z},data(){return{collapsed:!1}},methods:{onToggle(){this.collapsed=!this.collapsed}}},Xt=Rt,Pt=(0,u.Z)(Xt,Lt,Tt,!1,null,null,null),Qt=Pt.exports,Yt={name:"AppLayout",componentName:"AppLayout",components:{BaseContainer:o.Z,BaseMain:n.Z,AppHeader:Nt,AppAside:Qt,CartBar:g,CartDrawer:pt},data(){return{icons:[]}},watch:{icons(){(0,rt.po)("svg.icon.set",JSON.stringify(this.icons)),this.$broadcast("update:icons")}},created(){this.update()},mounted(){this.$subscribe("add:icon",this.add),this.$subscribe("remove:icon",this.remove),this.$subscribe("clean:cart",this.clean)},beforeDestroy(){this.$unsubscribe("add:icon",this.add),this.$unsubscribe("remove:icon",this.remove),this.$unsubscribe("clean:cart",this.clean),(0,rt.B$)("svg.icon.set")},methods:{update(){const t=(0,rt.cF)("svg.icon.set");t&&(this.icons=JSON.parse(t))},add(t){const e=[...this.icons];e.push(t),this.icons=e},remove(t){const e=[...this.icons],s=e.indexOf(t);if(s<0)return!1;e.splice(s,1),this.icons=e},clean(){this.icons=[]}}},Kt=Yt,Wt=(0,u.Z)(Kt,a,i,!1,null,null,null),te=Wt.exports}}]);