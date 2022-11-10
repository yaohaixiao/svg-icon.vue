(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[287],{5246:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return ke}});var i=function(){var t=this,e=t._self._c;return e("base-container",[e("app-header"),e("base-main",{attrs:{"use-main-tag":"",flex:"",overflow:"hidden"}},[e("app-aside"),e("base-main",{attrs:{overflow:"hidden"}},[e("router-view")],1)],1),e("the-cart",{attrs:{items:t.icons}}),e("cart-drawer",{attrs:{items:t.icons}})],1)},s=[],a=n(5957),o=(n(8862),n(7658),n(561),n(90)),r=n(6635),c=function(){var t=this,e=t._self._c;return e("base-header",{attrs:{flex:"",padding:"inner",height:"outer"}},[e("app-logo"),e("app-nav")],1)},l=[],u=n(6225),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-logo",on:{click:t.toHome}},[e("span",{staticClass:"app-logo__icon"},[e("svg-icon",{attrs:{name:"card-deploy",size:22}})],1),t._m(0)])},h=[function(){var t=this,e=t._self._c;return e("h1",{staticClass:"app-logo__title"},[e("em",{staticClass:"app-logo__key"},[t._v("svg-icon")]),t._v(" .vue ")])}],f=(n(8309),n(9126)),p={name:"AppLogo",componentName:"AppLogo",components:{SvgIcon:f.Z},computed:{isHome:function(){return"PageDocumentation"===this.$route.name}},methods:{toHome:function(){if(this.isHome)return!1;this.$router.push({path:"/docs"})}}},m=p,b=n(1001),v=(0,b.Z)(m,d,h,!1,null,"4c447a04",null),g=v.exports,_=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"app-nav"},t._l(t.navs,(function(t,n){return e("li",{key:"nav-".concat(n),staticClass:"app-nav__item"},[e("base-link",{staticClass:"app-nav__link",attrs:{route:t.route,role:t.role,href:t.href,icon:t.icon,"icon-size":t.iconSize,target:t.target,download:t.download}})],1)})),0)},y=[],w=n(1294),x={name:"AppNav",componentName:"AppNav",components:{BaseLink:w.Z},data:function(){return{navs:[{route:!1,role:"link",href:"http://www.yaohaixiao.com/",icon:"card-home",iconSize:18},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue",icon:"card-branch",iconSize:16},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/archive/refs/heads/main.zip",icon:"card-download",iconSize:20,download:"svg-icon.vue-main.zip",target:"_blank"},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/issues",icon:"card-help",iconSize:20}]}}},S=x,C=(0,b.Z)(S,_,y,!1,null,"20ba2446",null),B=C.exports,k={name:"AppHeader",componentName:"AppHeader",components:{BaseHeader:u.Z,AppLogo:g,AppNav:B}},N=k,$=(0,b.Z)(N,c,l,!1,null,"3130f84b",null),Z=$.exports,A=function(){var t=this,e=t._self._c;return e("base-aside",{attrs:{background:"",flex:"",padding:"none",collapsed:t.collapsed}},[e("base-main",{staticClass:"aside-main"},[e("app-menu")],1),e("base-footer",{attrs:{border:"",aling:"right",height:"inner"}},[e("div",{staticClass:"aside-collapse",on:{click:t.onToggle}},[e("svg-icon",{attrs:{name:"aside-collapse",size:20}})],1)])],1)},I=[],T=function(){var t=this,e=t._self._c;return e("footer",{class:t.className},[t._t("default")],2)},z=[],L={name:"BaseFooter",componentName:"BaseFooter",props:{flex:{type:Boolean,default:!1},border:{type:Boolean,default:!0},padding:{type:String,default:"outer"},height:{type:String,default:"auto"},align:{type:String,default:"left"}},computed:{className:function(){var t=this.align,e=this.flex,n=this.height,i=this.padding,s=this.border;return["base-footer",{"base-footer--flex":e,"util-border-top":s},"util-height-".concat(n),"util-padding-".concat(i),"util-align-".concat(t)]}}},D=L,O=(0,b.Z)(D,T,z,!1,null,null,null),W=O.exports;W.install=function(t){t.component(W.name,W)};var P=W,j=function(){var t=this,e=t._self._c;return e("aside",{class:t.className},[t._t("default")],2)},E=[],R={name:"BaseAside",componentName:"BaseAside",props:{width:{type:String,default:"regular"},padding:{type:String,default:"inner"},border:{type:String,default:"right"},flex:{type:Boolean,default:!1},background:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!1}},computed:{className:function(){return["base-aside","base-aside_".concat(this.width),"util-border-".concat(this.border),"util-padding-".concat(this.padding),{"base-aside--flex":this.flex,"base-aside--background":this.background,"base-aside--collapsed":this.collapsed}]}}},M=R,F=(0,b.Z)(M,j,E,!1,null,null,null),H=F.exports;H.install=function(t){t.component(H.name,H)};var V=H,X=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"app-menu"},[e("ul",{staticClass:"app-menu__list"},t._l(t.routes,(function(n,i){return e("li",{key:"menu-".concat(i),staticClass:"app-menu__item"},[e("div",{staticClass:"app-menu__title"},[e("router-link",{staticClass:"app-menu__link",attrs:{to:"/".concat(n.path)}},[e("svg-icon",{attrs:{name:n.icon,size:16}}),e("span",{staticClass:"app-menu__text"},[t._v(t._s(n.text))])],1),t.hasChildren(n)?e("span",{class:["app-menu__arrow",{"is-folded":t.folded}],on:{click:t.onFold}},[e("svg-icon",{attrs:{name:"arrow-down",size:16}})],1):t._e()],1),n.children&&!n.meta.hide?e("ul",{class:["app-submenu__list",{"is-folded":t.folded}],attrs:{id:"submenu-".concat(i)}},t._l(n.children,(function(n,i){return e("li",{key:"child-".concat(i),staticClass:"app-submenu__item"},[e("router-link",{staticClass:"app-menu__link",attrs:{to:{name:n.name}}},[e("span",{staticClass:"app-submenu__text"},[t._v(t._s(n.text))])])],1)})),0):t._e()])})),0)])},G=[],q=n(254),J=n(7712),Q=n(6366),U={name:"AppMenu",componentName:"AppMenu",components:{SvgIcon:f.Z},data:function(){return{routes:[q.Z,J.Z,Q.Z],folded:!1}},methods:{hasChildren:function(t){var e=t.children;return!t.meta.hide&&e&&e.length>0},onFold:function(){this.folded=!this.folded}}},K=U,Y=(0,b.Z)(K,X,G,!1,null,"036fd20f",null),tt=Y.exports,et={name:"AppAside",componentName:"AppAside",components:{BaseAside:V,BaseMain:r.Z,BaseFooter:P,AppMenu:tt,SvgIcon:f.Z},data:function(){return{collapsed:!1}},methods:{onToggle:function(){this.collapsed=!this.collapsed}}},nt=et,it=(0,b.Z)(nt,A,I,!1,null,"2258cf46",null),st=it.exports,at=function(){var t=this,e=t._self._c;return e("div",{class:["the-cart",{"is-hidden":!t.isShow}],attrs:{id:"cart"},on:{click:t.onToggle}},[e("div",{staticClass:"the-cart__icon"},[e("svg-icon",{attrs:{name:"put-on",size:30}})],1),e("sup",{staticClass:"the-cart__count"},[t._v(t._s(t.count))])])},ot=[],rt={name:"TheCart",componentName:"TheCart",components:{SvgIcon:f.Z},props:{items:{type:Array,default:function(){return[]}}},data:function(){return{isShow:!0,collections:[]}},computed:{count:function(){return this.collections.length}},watch:{items:function(){this.update()}},created:function(){this.update()},mounted:function(){var t=document.querySelector("#cart"),e=document.body;e.appendChild(t),this.$subscribe("show:cart",this.show)},beforeDestroy:function(){this.$unsubscribe("show:cart",this.show)},methods:{update:function(){this.collections=(0,a.Z)(this.items)},toggle:function(){this.isShow=!this.isShow},show:function(){this.isShow=!0},hide:function(){this.isShow=!1},onToggle:function(){var t=this;this.toggle(),this.isShow?setTimeout((function(){t.$broadcast("hide:drawer")}),300):setTimeout((function(){t.$broadcast("show:drawer")}),300)}}},ct=rt,lt=(0,b.Z)(ct,at,ot,!1,null,"a42b2f54",null),ut=lt.exports;ut.install=function(t){t.component(ut.name,ut)};var dt=ut,ht=function(){var t=this,e=t._self._c;return e("base-drawer",{ref:"drawer",attrs:{title:t.title,"header-border":"",size:"medium",buttons:t.buttons,"custom-class":"card-drawer"},on:{close:t.onClose},scopedSlots:t._u([{key:"tabs",fn:function(){return[e("base-tab-nav",{staticClass:"cart-drawer__tabs",attrs:{stretch:"",tabs:t.tabs},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}})]},proxy:!0}])},[e("div",{staticClass:"cart-drawer__main"},["icon"===t.active?e("ul",{staticClass:"cart-drawer__list"},[t.items.length>0?t._l(t.items,(function(n,i){return e("cart-drawer-item",{key:"item-".concat(i),attrs:{symbol:n,index:i},on:{delete:t.onDelete}})})):e("cart-drawer-item",{attrs:{"is-empty":""}},[e("base-empty")],1)],2):e("textarea",{staticClass:"cart-drawer__code",attrs:{readonly:""},domProps:{value:t.code}})])])},ft=[],pt=(n(9600),function(){var t=this,e=t._self._c;return e("div",{class:["base-drawer",{"base-drawer_opened":t.visible}],style:t.cssRules},[e("base-container",{class:t.className},[t.showClose?e("div",{staticClass:"base-drawer__close",on:{click:t.onClose}},[e("svg-icon",{attrs:{name:"close",size:20}})],1):t._e(),t._t("header",(function(){return[t.title?e("base-header",{attrs:{flex:"","text-align":"left",height:"outer",padding:"inner",border:t.headerBorder}},[e("h2",{staticClass:"base-drawer__title"},[t._v(" "+t._s(t.title)+" "),t.$scopedSlots.icon?e("span",{staticClass:"base-drawer__icon"},[t._t("icon")],2):t._e()]),t._t("tabs"),e("div",{staticClass:"base-drawer__help"},[t._t("help")],2)],2):t._e()]})),e("base-main",{class:{"base-drawer__main":!t.title&&t.buttons.length<1},attrs:{padding:"inner"}},[t._t("default")],2),t._t("footer",(function(){return[t.buttons.length>0?e("base-footer",{attrs:{align:t.align,padding:"inner",border:t.footerBorder}},t._l(t.buttons,(function(n){return e("base-button",{key:"button-".concat(n.name),attrs:{size:"regular",icon:n.icon,type:n.type,disabled:n.disabled||t.locked,loading:t.locked&&n.name===t.action},on:{click:function(e){return t.onTrigger(n)}}},[t._v(" "+t._s(n.text)+" ")])})),1):t._e()]}))],2),e("div",{staticClass:"base-drawer__overlay",on:{click:t.onOverlayClick}})],1)}),mt=[],bt=(n(2222),n(7042),function(){var t=this,e=t._self._c;return e("button",{class:t.className,attrs:{type:t.nativeType,autofocus:t.autofocus,disabled:t.isDisabled},on:{click:t.onClick}},[t.icon||t.loading?e("svg-icon",{class:["base-button__icon",{loading:t.loading}],attrs:{name:t.loading?"is-loading":t.icon,size:"mini"===t.size?12:t.iconSize}}):t._e(),t.$slots.default?e("span",{staticClass:"base-button__inner"},[t._t("default")],2):[!t.circle&&t.loading&&t.loadingText?e("span",{staticClass:"base-button__inner"},[t._v(" "+t._s(t.loadingText)+" ")]):t._e()]],2)}),vt=[],gt=(n(9653),{name:"BaseButton",componentName:"BaseButton",components:{SvgIcon:f.Z},props:{type:{type:String,default:"default"},plain:{type:Boolean,default:!1},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},size:{type:String,default:"regular"},icon:{type:String,default:""},iconSize:{type:Number,default:16},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingText:{type:String,default:"加载中..."},autofocus:{type:Boolean,default:!1},nativeType:{type:String,default:"button"}},inject:{form:{default:""},formItem:{default:""}},computed:{isDisabled:function(){var t=this.formItem;return t&&t.isDisabled||this.disabled||this.loading},className:function(){var t=this.type,e=this.plain,n=this.round,i=this.circle,s=this.size,a=this.isDisabled;return["base-button","base-button_".concat(t),"text"!==t?"base-button_".concat(s):"",{"base-button_round":n,"base-button_circle":i,"base-button_plain":e,"is-disabled":a}]}},methods:{onClick:function(){this.$emit("click")}}}),_t=gt,yt=(0,b.Z)(_t,bt,vt,!1,null,null,null),wt=yt.exports;wt.install=function(t){t.component(wt.name,wt)};var xt=wt,St=n(9324),Ct=n(8673),Bt={name:"DevDrawer",componentName:"DevDrawer",components:{BaseContainer:o.Z,BaseHeader:u.Z,BaseFooter:P,BaseMain:r.Z,BaseButton:xt,SvgIcon:f.Z},props:{appendToBody:{type:Boolean,default:!0},beforeClose:{type:Function,default:null},title:{type:String,default:"标题"},direction:{type:String,default:"rtl",validator:function(t){return-1!==["ltr","rtl","ttb","btt"].indexOf(t)}},size:{type:String,default:"regular"},padding:{type:String,default:"inner"},headerBorder:{type:Boolean,default:!1},footerBorder:{type:Boolean,default:!1},shorter:{type:Boolean,default:!1},customClass:{type:String,default:""},buttons:{type:Array,default:function(){return[]}},overlayClosable:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0}},data:function(){return{zIndex:3,timer:null,action:"",visible:!1,opening:!1,closed:!0,closing:!1,locked:!1,$content:null}},computed:{align:function(){var t=this.direction;switch(t){case"rtl":case"ltr":return"right";case"ttb":case"btt":return"center";default:return"left"}},className:function(){var t=this.size,e=this.direction,n=this.shorter,i=this.closed,s=this.customClass,a=this.visible;return["base-drawer__modal","base-drawer_".concat(t),"base-drawer_".concat(e),{"base-drawer_shorter":n},"".concat(s),{"base-drawer_closed":i},{"base-drawer_opened":a}]},cssRules:function(){var t=null;return this.appendToBody&&this.visible&&(t={zIndex:this.zIndex}),t}},watch:{visible:function(){this.visible?this.zIndex=St.Z.nextZIndex():St.Z.prevZIndex()}},mounted:function(){this.appendToBody&&document.body.appendChild(this.$el),this.$content=this.getContent()},destroyed:function(){var t=this.$el;this.timer&&(clearTimeout(this.timer),this.timer=null),this.appendToBody&&t&&t.parentNode&&t.parentNode.removeChild(t)},methods:{getContent:function(){return this.$slots.default[0]},lock:function(){this.locked=!0,this.$emit("lock")},unlock:function(){this.locked=!1,this.$emit("unlock")},open:function(){var t=this,e=this.$content,n=e.componentInstance,i=n&&n.onOpen;if(this.closing)return!1;this.visible=!0,this.closed=!1,this.opening=!0,i&&(0,Ct.mf)(i)&&i(),this.$emit("open"),this.timer=setTimeout((function(){t.$emit("opened"),t.opening=!1}),400)},close:function(){var t=this,e=this.$content,n=e.componentInstance,i=n&&n.onClose;i&&(0,Ct.mf)(i)&&i(),this.closed=!0,this.$emit("close"),this.timer=setTimeout((function(){t.visible=!1,t.$emit("closed")}),400)},trigger:function(t){var e=this,n=this.$content,i=t.name,s=t.action||"on".concat(i[0].toUpperCase()).concat(i.slice(1));if(this.action=i,(0,Ct.HD)(s)&&(s=n&&n.componentInstance?n.componentInstance[s]:null),this.lock(),(0,Ct.mf)(s)){var a=s();a&&a.then&&(0,Ct.mf)(a.then)?a.then((function(){e.unlock(),e.close()})).catch((function(){e.unlock()})):(this.unlock(),this.close())}else this.unlock(),this.close()},onClose:function(){var t=this.beforeClose;if(this.locked||this.opening)return!1;t&&(0,Ct.mf)(t)?t(this.close):this.close()},onTrigger:function(t){this.trigger(t)},onOverlayClick:function(){if(!this.overlayClosable)return!1;this.onClose()}}},kt=Bt,Nt=(0,b.Z)(kt,pt,mt,!1,null,null,null),$t=Nt.exports;$t.install=function(t){t.component($t.name,$t)};var Zt=$t,At=function(){var t=this,e=t._self._c;return e("nav",{class:t.className},[t.isScrollable?e("div",{class:t.prevClassName,on:{click:t.onScrollPrev}},[e("svg-icon",{attrs:{name:"arrow-left",size:12}})],1):t._e(),e("div",{class:t.mainClassName},[e("ul",{class:t.listClassName,style:t.cssRules},[t._t("default",(function(){return t._l(t.items,(function(n,i){return e("base-tab-item",{key:i,attrs:{index:i,closable:t.closable,editable:t.editable,disabled:n.disabled,label:n.label,value:n.value,icon:n.icon,"before-leave":t.beforeLeave},on:{click:t.onChange,remove:t.onRemove}})}))}),{items:t.items})],2)]),t.isScrollable?e("div",{class:t.nextClassName,on:{click:t.onScrollNext}},[e("svg-icon",{attrs:{name:"arrow-right",size:12}})],1):t._e(),t.addable||t.editable?e("div",{staticClass:"base-tab-nav__add",on:{click:t.onAdd}},[e("svg-icon",{attrs:{name:"circle-plus",size:16}})],1):t._e(),t.type?t._e():e("base-tab-bar",{attrs:{left:t.barLeft,width:t.barWidth}})],1)},It=[];n(7941),n(2526),n(7327),n(1539),n(5003),n(4747),n(9337);function Tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?zt(Object(n),!0).forEach((function(e){Tt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n(4363),n(4553);var Dt=function(){var t=this,e=t._self._c;return e("li",{class:t.className,on:{click:t.onTrigger}},[t.icon?e("span",{staticClass:"base-tab-item__icon"},[e("svg-icon",{attrs:{name:t.icon,size:14}})],1):t._e(),t._t("default",(function(){return[t._v(t._s(t.text))]})),!t.closable&&!t.editable||t.disabled?t._e():e("span",{staticClass:"base-tab-item__close",on:{click:function(e){return e.stopPropagation(),t.onRemove.apply(null,arguments)}}},[e("svg-icon",{attrs:{name:"close",size:12}})],1)],2)},Ot=[],Wt={name:"BaseTabItem",componentName:"BaseTabItem",components:{SvgIcon:f.Z},props:{index:{type:Number,default:0},label:{type:String,default:""},value:{type:[String,Number,Boolean],default:""},icon:{type:String,default:""},closable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},beforeLeave:{type:Function,default:null}},data:function(){return{id:0,text:""}},computed:{isActive:function(){return this.id===this.$parent.index},isRemovable:function(){return this.closable||this.editable},className:function(){return["base-tab-item",{"base-tab-item_editable":this.isRemovable},{"is-active":this.isActive},{"is-disabled":this.disabled}]}},watch:{index:function(){this.update()},label:function(){this.update()}},created:function(){this.update()},methods:{update:function(){this.id=this.index,this.text=this.label},onTrigger:function(){if(this.disabled)return!1;this.$emit("click",{label:this.label,value:this.value},this.id)},onRemove:function(){if(!this.isRemovable)return!1;this.$emit("remove",this.id)}}},Pt=Wt,jt=(0,b.Z)(Pt,Dt,Ot,!1,null,null,null),Et=jt.exports;Et.install=function(t){t.component(Et.name,Et)};var Rt=Et,Mt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"base-tab-bar",style:t.cssRules})},Ft=[],Ht={name:"BaseTabBar",componentName:"BaseTabBar",props:{left:{type:Number,default:16},width:{type:Number,default:40}},computed:{cssRules:function(){var t=this.width,e=this.left;return{width:"".concat(t,"px"),transform:"translateX(".concat(e,"px)")}}}},Vt=Ht,Xt=(0,b.Z)(Vt,Mt,Ft,!1,null,null,null),Gt=Xt.exports;Gt.install=function(t){t.component(Gt.name,Gt)};var qt=Gt,Jt=".base-tab-item",Qt=0,Ut={name:"BaseTabNav",componentName:"BaseTabNav",components:{BaseTabItem:Rt,BaseTabBar:qt,SvgIcon:f.Z},props:{value:{type:[String,Number],default:""},type:{type:String,default:""},closable:{type:Boolean,default:!1},addable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},position:{type:String,default:"top"},stretch:{type:Boolean,default:!1},tabs:{type:Array,default:function(){return[]}},beforeLeave:{type:Function,default:null}},data:function(){return{items:[],index:0,active:null,barLeft:0,barWidth:40,isScrollable:!1,listWidth:0,step:1,scrollLeft:0}},computed:{count:function(){return this.items.length},maxStep:function(){var t=this.getMaxWidth(),e=this.listWidth;return Math.ceil(e/t)},className:function(){var t=this.type;return["base-tab-nav",t?"base-tab-nav_".concat(t):""]},prevClassName:function(){var t=1===this.step;return["base-tab-nav__prev",{"is-disabled":t}]},nextClassName:function(){var t=this.step===this.maxStep,e=this.getListWidth(),n=this.getMaxWidth(),i=e-n,s=this.scrollLeft;return["base-tab-nav__next",{"is-disabled":t&&s>=i}]},mainClassName:function(){var t=this.addable||this.editable;return["base-tab-nav__main",{"is-max":this.isScrollable&&t},{"is-full":this.isScrollable&&!t}]},listClassName:function(){var t=this.stretch;return["base-tabs__list",{"base-tabs__list_flex":t},{direction_row:t},{"is-scrollable":this.isScrollable}]},cssRules:function(){var t=this.isScrollable,e=this.listWidth,n=this.scrollLeft;return t?{width:"".concat(e+1,"px"),transform:"translateX(-".concat(n,"px)")}:null}},watch:{tabs:function(){var t=this;this.update(),this.$nextTick((function(){t.calculateNavBarPosition()}))},index:function(){var t=this;if(this.type)return!1;this.$nextTick((function(){t.calculateNavBarPosition()}))},count:function(){var t=this;this.$nextTick((function(){t.listWidth=t.getListWidth(),t.isScrollable=t.isScrollButtonsVisible()}))},value:function(){this.setActive()}},created:function(){this.update(),this.setActive()},mounted:function(){var t=this;if(this.type)return!1;this.$nextTick((function(){t.calculateNavBarPosition(),t.listWidth=t.getListWidth(),t.isScrollable=t.isScrollButtonsVisible()}))},methods:{update:function(){this.items=(0,a.Z)(this.tabs)},isScrollButtonsVisible:function(){var t=this.getListWidth(),e=this.getMaxWidth();return t>e&&this.scrollable},getScrollLeft:function(){var t=this.getListWidth(),e=this.getMaxWidth(),n=e*(this.step-1),i=t-e;return n<i?n:i},getListWidth:function(){var t,e=this.$el,n=0;return!!e&&(t=e.querySelectorAll(Jt),t.forEach((function(t){n+=t.offsetWidth})),n+2)},getMaxWidth:function(){var t=this.$el,e=this.addable||this.editable;return t?t.offsetWidth-(e?120:80):Number.MAX_SAFE_INTEGER},getBarLeft:function(){var t,e=this.index,n=this.$el.querySelectorAll(Jt),i=(0,a.Z)(n),s=0;return this.type||!i&&i.length<1?0:(t=i.splice(0,e),t.length<1?0:(t.forEach((function(t){s+=t.offsetWidth})),s))},getBarWidth:function(){var t=this.active;return this.type||!t?40:t.offsetWidth-32},calculateNavBarPosition:function(){var t=this.$el.querySelectorAll(Jt);if(this.type||!t||t.length<1)return!1;this.active=t[this.index],this.barLeft=this.getBarLeft(),this.barWidth=this.getBarWidth()},setActive:function(){var t,e=this;this.$nextTick((function(){t=e.items.findIndex((function(t){return t.value===e.value})),e.index=t>=0?t:0}))},switchActive:function(){var t=this;this.$nextTick((function(){var e=t.items,n=t.index;if(e.length<1)return!1;t.onChange(e[n],n)}))},add:function(t){this.items.push(t),this.index=this.count-1,this.switchActive()},remove:function(t){var e=(0,a.Z)(this.items);if(t<0)return!1;e.splice(t,1),this.items=e,e[t]?this.index=t:e[t-1]?this.index=t-1:this.index=0,this.switchActive()},onScrollPrev:function(){var t=this.step;if(t<=1)return this.scrollLeft=this.getScrollLeft(),!1;t-=1,this.step=t,this.scrollLeft=this.getScrollLeft()},onScrollNext:function(){var t=this.step;if(t>=this.maxStep)return this.scrollLeft=this.getScrollLeft(),!1;t+=1,this.step=t,this.scrollLeft=this.getScrollLeft()},onChange:function(t,e){this.index=e,this.$emit("input",t.value),this.$emit("change",t)},onAdd:function(){var t=Qt+=1,e={label:"New Tab ".concat(t),editable:this.editable,closable:this.closable,disabled:!1};if(!this.addable&&!this.editable)return!1;this.add(e),this.$emit("add",e),this.$emit("edit",e,"add")},onRemove:function(t){var e=Lt({},this.items[t]);if(!this.closable&&!this.editable)return!1;this.remove(t),this.$emit("remove",t),this.$emit("edit",e,"remove")}}},Kt=Ut,Yt=(0,b.Z)(Kt,At,It,!1,null,null,null),te=Yt.exports;te.install=function(t){t.component(te.name,te)};var ee=te,ne=function(){var t=this,e=t._self._c;return e("div",{staticClass:"base-empty"},[t.showIcon?e("div",{staticClass:"base-empty__icon"},[t._t("icon",(function(){return[e("svg-icon",{attrs:{name:t.icon,size:[120,120]}})]}))],2):t._e(),e("p",{staticClass:"base-empty__text"},[t._t("default",(function(){return[t._v(t._s(t.text))]}))],2)])},ie=[],se={name:"BaseEmpty",componentName:"BaseEmpty",components:{SvgIcon:f.Z},props:{text:{type:String,default:"暂无数据"},showIcon:{type:Boolean,default:!0},icon:{type:String,default:"empty"},iconSize:{type:[String,Number,Array],default:function(){return[120,120]}}}},ae=se,oe=(0,b.Z)(ae,ne,ie,!1,null,null,null),re=oe.exports;re.install=function(t){t.component(re.name,re)};var ce=re,le=function(){var t=this,e=t._self._c;return e("li",{class:["cart-drawer-item",{"is-empty":t.isEmpty}]},[t._t("default",(function(){return[e("div",{staticClass:"cart-drawer-item__icon"},[e("svg-icon",{attrs:{name:t.name,size:32}})],1),e("div",{staticClass:"cart-drawer-item__meta"},[e("h3",{staticClass:"cart-drawer-item__title"},[t._v(t._s(t.name))]),e("dl",{staticClass:"cart-drawer-item__dl"},[e("dt",{staticClass:"cart-drawer-item__dt"},[t._v("宽：")]),e("dd",{staticClass:"cart-drawer-item__dd"},[t._v(t._s(t.width))]),e("dt",{staticClass:"cart-drawer-item__dt"},[t._v("高：")]),e("dd",{staticClass:"cart-drawer-item__dd"},[t._v(t._s(t.height))])])]),e("div",{staticClass:"cart-drawer-item__delete",on:{click:t.onDelete}},[e("svg-icon",{attrs:{name:"trash",size:20}})],1)]}))],2)},ue=[],de=(n(4916),n(4723),{name:"CartDrawerItem",componentName:"CartDrawerItem",components:{SvgIcon:f.Z},props:{index:{type:Number,default:0},symbol:{type:String,default:""},isEmpty:{type:Boolean,default:!1}},data:function(){return{item:""}},computed:{name:function(){var t=this.item.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},size:function(){var t=this.item.match(/viewBox="0 0 (.*?)"/)[1].split(" "),e=0,n=0;return t&&(e=t[0]?parseInt(t[0],10):0,n=t[1]?parseInt(t[1],10):0),{width:e,height:n}},width:function(){var t=this.size.width;return t>200?200:t},height:function(){var t=this.size.height;return t>200?200:t}},watch:{symbol:function(){this.update()}},created:function(){this.update()},methods:{update:function(){this.item=this.symbol},onDelete:function(){this.$emit("delete",{symbol:this.item,name:this.name,id:this.id})}}}),he=de,fe=(0,b.Z)(he,le,ue,!1,null,"00a883a4",null),pe=fe.exports;pe.install=function(t){t.component(pe.name,pe)};var me=pe,be=n(481),ve=n(8249),ge={name:"CartDrawer",componentName:"CartDrawer",components:{BaseDrawer:Zt,BaseTabNav:ee,BaseEmpty:ce,CartDrawerItem:me},props:{title:{type:String,default:"购物车"},items:{type:Array,default:function(){return[]}}},data:function(){return{active:"icon",tabs:[{label:"SVG 图标",value:"icon"},{label:"JavaScript 代码",value:"code"}],buttons:[]}},computed:{isIconView:function(){return"icon"===this.active},disabled:function(){return 0===this.items.length},code:function(){var t={title:"SvgIcon 图标集",code:"SvgIconSet",symbols:this.items},e=JSON.stringify(t,null,2);return"// Generated by svg-icon.vue\nconst SvgIconSet = ".concat(e,"\n\nexport default SvgIconSet\n")},svg:function(){return'\x3c!-- Generated by svg-icon.vue --\x3e\n<svg id="svg-icons" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden;">\n'+this.items.join("\n")+"\n</svg>"}},watch:{items:function(){this.update()}},created:function(){this.update()},mounted:function(){this.$subscribe("show:drawer",this.show),this.$subscribe("hide:drawer",this.hide)},beforeDestroy:function(){this.$unsubscribe("show:drawer",this.show),this.$unsubscribe("hide:drawer",this.hide)},methods:{update:function(){var t=this;this.buttons=[{name:"cancel",text:"取消",size:"small"},{name:"clean",text:"清空",icon:"trash",disabled:this.disabled,action:function(){(0,be.B$)("svg.icon.set"),t.$message.success({round:!0,message:"购物车已清空！"}),t.$broadcast("clean:cart")}},{name:"download",text:"下载",icon:"download",disabled:this.disabled,action:function(){t.isIconView?(0,ve.dX)("svg-icon-set.svg",t.svg):(0,ve.dX)("svg-icon-set.js",t.code)}},{name:"confirm",text:"复制",icon:"copy",size:"small",type:"primary",disabled:this.disabled,action:function(){(0,ve.vQ)(t.isIconView?t.svg:t.code),t.$message.success({round:!0,message:"代码已复制！"})}}]},show:function(){this.$refs.drawer.open()},hide:function(){this.$refs.drawer.close()},close:function(){var t=this;setTimeout((function(){t.$broadcast("show:cart")}),300)},onClose:function(){this.close()},onDelete:function(t){var e=t.symbol,n=t.name;this.$broadcast("remove:icon",e),this.$message.success({round:!0,message:"图标 ".concat(n," 已移除购物车！")})}}},_e=ge,ye=(0,b.Z)(_e,ht,ft,!1,null,"5ae51df5",null),we=ye.exports;we.install=function(t){t.component(we.name,we)};var xe=we,Se={name:"AppLayout",componentName:"AppLayout",components:{BaseContainer:o.Z,BaseMain:r.Z,AppHeader:Z,AppAside:st,TheCart:dt,CartDrawer:xe},data:function(){return{icons:[]}},watch:{icons:function(){(0,be.po)("svg.icon.set",JSON.stringify(this.icons))}},created:function(){this.update()},mounted:function(){this.$subscribe("add:icon",this.add),this.$subscribe("remove:icon",this.remove),this.$subscribe("clean:cart",this.clean)},beforeDestroy:function(){this.$unsubscribe("add:icon",this.add),this.$unsubscribe("remove:icon",this.remove),this.$unsubscribe("clean:cart",this.clean),(0,be.B$)("svg.icon.set")},methods:{update:function(){var t=(0,be.cF)("svg.icon.set");t&&(this.icons=JSON.parse(t))},add:function(t){var e=(0,a.Z)(this.icons);e.push(t),this.icons=e},remove:function(t){var e=(0,a.Z)(this.icons),n=e.indexOf(t);if(n<0)return!1;e.splice(n,1),this.icons=e},clean:function(){this.icons=[]}}},Ce=Se,Be=(0,b.Z)(Ce,i,s,!1,null,"890fc12a",null),ke=Be.exports},4363:function(t,e,n){var i=n(2109);i({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991})},9337:function(t,e,n){var i=n(2109),s=n(9781),a=n(3887),o=n(5656),r=n(1236),c=n(6135);i({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,n,i=o(t),s=r.f,l=a(i),u={},d=0;while(l.length>d)n=s(i,e=l[d++]),void 0!==n&&c(u,e,n);return u}})},481:function(t,e,n){"use strict";n.d(e,{B$:function(){return a},cF:function(){return s},po:function(){return i}});var i=function(t,e){localStorage.setItem(t,e)},s=function(t){return localStorage.getItem(t)},a=function(t){localStorage.removeItem(t)}}}]);