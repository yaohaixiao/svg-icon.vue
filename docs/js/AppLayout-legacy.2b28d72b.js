"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[287],{176:function(e,t,n){n.r(t),n.d(t,{default:function(){return Te}});var a=function(){var e=this,t=e._self._c;return t("base-container",[t("app-header"),t("base-main",{attrs:{"use-main-tag":"",flex:"",overflow:"hidden"}},[t("app-aside"),t("base-main",{attrs:{overflow:"hidden"}},[t("router-view")],1)],1),t("the-cart",{attrs:{icons:e.icons}}),t("base-drawer",{ref:"iconSetDrawer",attrs:{title:"图标集购物车",size:"medium",buttons:e.buttons},on:{close:e.onDrawerClose}},[t("textarea",{staticClass:"icons-code",domProps:{value:e.code}})])],1)},o=[],i=(n(8862),n(7658),n(561),n(90)),s=n(6635),l=function(){var e=this,t=e._self._c;return t("base-header",{attrs:{flex:"",padding:"inner",height:"outer"}},[t("app-logo"),t("app-nav")],1)},r=[],c=n(7534),u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-logo",on:{click:e.toHome}},[t("span",{staticClass:"app-logo__icon"},[t("svg-icon",{attrs:{name:"card-deploy",size:22}})],1),e._m(0)])},d=[function(){var e=this,t=e._self._c;return t("h1",{staticClass:"app-logo__title"},[t("em",{staticClass:"app-logo__key"},[e._v("svg-icon")]),e._v(" .vue ")])}],p=(n(8309),n(9467)),f={name:"AppLogo",componentName:"AppLogo",components:{SvgIcon:p.Z},computed:{isHome:function(){return"PageDocumentation"===this.$route.name}},methods:{toHome:function(){if(this.isHome)return!1;this.$router.push({path:"/docs"})}}},h=f,m=n(1001),g=(0,m.Z)(h,u,d,!1,null,"4c447a04",null),b=g.exports,v=function(){var e=this,t=e._self._c;return t("ul",{staticClass:"app-nav"},e._l(e.navs,(function(e,n){return t("li",{key:"nav-".concat(n),staticClass:"app-nav__item"},[t("base-link",{staticClass:"app-nav__link",attrs:{route:e.route,role:e.role,href:e.href,icon:e.icon,"icon-size":e.iconSize,target:e.target,download:e.download}})],1)})),0)},_=[],y=n(1294),C={name:"AppNav",componentName:"AppNav",components:{BaseLink:y.Z},data:function(){return{navs:[{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue",icon:"card-branch",iconSize:16},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/archive/refs/heads/main.zip",icon:"card-download",iconSize:20,download:"svg-icon.vue-main.zip",target:"_blank"},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/issues",icon:"card-help",iconSize:20}]}}},w=C,x=(0,m.Z)(w,v,_,!1,null,"025c2045",null),B=x.exports,k={name:"AppHeader",componentName:"AppHeader",components:{BaseHeader:c.Z,AppLogo:b,AppNav:B}},S=k,N=(0,m.Z)(S,l,r,!1,null,"3130f84b",null),Z=N.exports,$=function(){var e=this,t=e._self._c;return t("base-aside",{attrs:{background:"",flex:"",padding:"none",collapsed:e.collapsed}},[t("base-main",{staticClass:"aside-main"},[t("app-menu")],1),t("base-footer",{attrs:{border:"",aling:"right",height:"inner"}},[t("div",{staticClass:"aside-collapse",on:{click:e.onToggle}},[t("svg-icon",{attrs:{name:"aside-collapse",size:20}})],1)])],1)},z=[],A=function(){var e=this,t=e._self._c;return t("footer",{class:e.className},[e._t("default")],2)},I=[],T={name:"BaseFooter",componentName:"BaseFooter",props:{flex:{type:Boolean,default:!1},border:{type:Boolean,default:!0},padding:{type:String,default:"outer"},height:{type:String,default:"auto"},align:{type:String,default:"left"}},computed:{className:function(){var e=this.align,t=this.flex,n=this.height,a=this.padding,o=this.border;return["base-footer",{"base-footer--flex":t,"util-border-top":o},"util-height-".concat(n),"util-padding-".concat(a),"util-align-".concat(e)]}}},D=T,H=(0,m.Z)(D,A,I,!1,null,null,null),O=H.exports;O.install=function(e){e.component(O.name,O)};var M=O,F=function(){var e=this,t=e._self._c;return t("aside",{class:e.className},[e._t("default")],2)},L=[],R={name:"BaseAside",componentName:"BaseAside",props:{width:{type:String,default:"regular"},padding:{type:String,default:"inner"},border:{type:String,default:"right"},flex:{type:Boolean,default:!1},background:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!1}},computed:{className:function(){return["base-aside","base-aside_".concat(this.width),"util-border-".concat(this.border),"util-padding-".concat(this.padding),{"base-aside--flex":this.flex,"base-aside--background":this.background,"base-aside--collapsed":this.collapsed}]}}},J=R,q=(0,m.Z)(J,F,L,!1,null,null,null),P=q.exports;P.install=function(e){e.component(P.name,P)};var Q=P,j=function(){var e=this,t=e._self._c;return t("nav",{staticClass:"app-menu"},[t("ul",{staticClass:"app-menu__list"},e._l(e.routes,(function(n,a){return t("li",{key:"menu-".concat(a),staticClass:"app-menu__item"},[t("div",{staticClass:"app-menu__title"},[t("router-link",{staticClass:"app-menu__link",attrs:{to:"/".concat(n.path)}},[t("svg-icon",{attrs:{name:n.icon,size:16}}),t("span",{staticClass:"app-menu__text"},[e._v(e._s(n.text))])],1),e.hasChildren(n)?t("span",{class:["app-menu__arrow",{"is-folded":e.folded}],on:{click:e.onFold}},[t("svg-icon",{attrs:{name:"arrow-down",size:16}})],1):e._e()],1),n.children&&!n.meta.hide?t("ul",{class:["app-submenu__list",{"is-folded":e.folded}],attrs:{id:"submenu-".concat(a)}},e._l(n.children,(function(n,a){return t("li",{key:"child-".concat(a),staticClass:"app-submenu__item"},[t("router-link",{staticClass:"app-menu__link",attrs:{to:{name:n.name}}},[t("span",{staticClass:"app-submenu__text"},[e._v(e._s(n.text))])])],1)})),0):e._e()])})),0)])},E=[],U=n(254),G=n(7712),K=n(6366),V={name:"AppMenu",componentName:"AppMenu",components:{SvgIcon:p.Z},data:function(){return{routes:[U.Z,G.Z,K.Z],folded:!1}},methods:{hasChildren:function(e){var t=e.children;return!e.meta.hide&&t&&t.length>0},onFold:function(){this.folded=!this.folded}}},W=V,X=(0,m.Z)(W,j,E,!1,null,"036fd20f",null),Y=X.exports,ee={name:"AppAside",componentName:"AppAside",components:{BaseAside:Q,BaseMain:s.Z,BaseFooter:M,AppMenu:Y,SvgIcon:p.Z},data:function(){return{collapsed:!1}},methods:{onToggle:function(){this.collapsed=!this.collapsed}}},te=ee,ne=(0,m.Z)(te,$,z,!1,null,"2258cf46",null),ae=ne.exports,oe=function(){var e=this,t=e._self._c;return t("div",{class:["base-drawer",{"base-drawer_opened":e.visible}],style:e.cssRules},[t("base-container",{class:e.className},[e.showClose?t("div",{staticClass:"base-drawer__close",on:{click:e.onClose}},[t("svg-icon",{attrs:{name:"close",size:20}})],1):e._e(),e._t("header",(function(){return[e.title?t("base-header",{attrs:{flex:"",align:"left",height:"outer",padding:"inner",border:!1}},[t("h2",{staticClass:"base-drawer__title"},[e._v(" "+e._s(e.title)+" "),t("span",{staticClass:"base-drawer__icon"},[e._t("icon")],2)]),t("div",{staticClass:"base-drawer__help"},[e._t("help")],2)]):e._e()]})),t("base-main",{class:{"base-drawer__main":!e.title&&e.buttons.length<1},attrs:{padding:"inner"}},[e._t("default")],2),e._t("footer",(function(){return[e.buttons.length>0?t("base-footer",{attrs:{align:e.align,padding:"inner",border:!1}},e._l(e.buttons,(function(n){return t("base-button",{key:n.name,attrs:{size:"regular",type:n.type,disabled:n.disabled||e.locked,loading:e.locked&&n.name===e.action},on:{click:function(t){return e.onTrigger(n)}}},[e._v(" "+e._s(n.text)+" ")])})),1):e._e()]}))],2),t("div",{staticClass:"base-drawer__overlay",on:{click:e.onOverlayClick}})],1)},ie=[],se=(n(2222),n(7042),function(){var e=this,t=e._self._c;return t("button",{class:e.className,attrs:{type:e.nativeType,autofocus:e.autofocus,disabled:e.isDisabled},on:{click:e.onClick}},[e.icon||e.loading?t("svg-icon",{class:["base-button__icon",{loading:e.loading}],attrs:{name:e.loading?"is-loading":e.icon,size:"mini"===e.size?12:e.iconSize}}):e._e(),e.$slots.default?t("span",{staticClass:"base-button__inner"},[e._t("default")],2):[!e.circle&&e.loading&&e.loadingText?t("span",{staticClass:"base-button__inner"},[e._v(" "+e._s(e.loadingText)+" ")]):e._e()]],2)}),le=[],re=(n(9653),{name:"BaseButton",componentName:"BaseButton",components:{SvgIcon:p.Z},props:{type:{type:String,default:"default"},plain:{type:Boolean,default:!1},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},size:{type:String,default:"regular"},icon:{type:String,default:""},iconSize:{type:Number,default:16},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingText:{type:String,default:"加载中..."},autofocus:{type:Boolean,default:!1},nativeType:{type:String,default:"button"}},inject:{form:{default:""},formItem:{default:""}},computed:{isDisabled:function(){var e=this.formItem;return e&&e.isDisabled||this.disabled||this.loading},className:function(){var e=this.type,t=this.plain,n=this.round,a=this.circle,o=this.size,i=this.isDisabled;return["base-button","base-button_".concat(e),"text"!==e?"base-button_".concat(o):"",{"base-button_round":n,"base-button_circle":a,"base-button_plain":t,"is-disabled":i}]}},methods:{onClick:function(){this.$emit("click")}}}),ce=re,ue=(0,m.Z)(ce,se,le,!1,null,null,null),de=ue.exports;de.install=function(e){e.component(de.name,de)};var pe=de,fe=2e3,he={getZIndex:function(){return fe},prevZIndex:function(){return fe-=1,fe},nextZIndex:function(){return fe+=1,fe}},me=he,ge=n(8673),be={name:"DevDrawer",componentName:"DevDrawer",components:{BaseContainer:i.Z,BaseHeader:c.Z,BaseFooter:M,BaseMain:s.Z,BaseButton:pe,SvgIcon:p.Z},props:{appendToBody:{type:Boolean,default:!0},beforeClose:{type:Function,default:null},title:{type:String,default:"标题"},direction:{type:String,default:"rtl",validator:function(e){return-1!==["ltr","rtl","ttb","btt"].indexOf(e)}},size:{type:String,default:"regular"},padding:{type:String,default:"inner"},shorter:{type:Boolean,default:!1},customClass:{type:String,default:""},buttons:{type:Array,default:function(){return[]}},overlayClosable:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0}},data:function(){return{zIndex:3,timer:null,action:"",visible:!1,opening:!1,closed:!0,closing:!1,locked:!1,$content:null}},computed:{align:function(){var e=this.direction;switch(e){case"rtl":case"ltr":return"right";case"ttb":case"btt":return"center";default:return"left"}},className:function(){var e=this.size,t=this.direction,n=this.shorter,a=this.closed,o=this.customClass,i=this.visible;return["base-drawer__modal","base-drawer_".concat(e),"base-drawer_".concat(t),{"base-drawer_shorter":n},"".concat(o),{"base-drawer_closed":a},{"base-drawer_opened":i}]},cssRules:function(){var e=null;return this.appendToBody&&this.visible&&(e={zIndex:this.zIndex}),e}},watch:{visible:function(){this.visible?this.zIndex=me.nextZIndex():this.zIndex=me.prevZIndex()}},mounted:function(){this.appendToBody&&document.body.appendChild(this.$el),this.$content=this.getContent()},destroyed:function(){var e=this.$el;this.timer&&(clearTimeout(this.timer),this.timer=null),this.appendToBody&&e&&e.parentNode&&e.parentNode.removeChild(e)},methods:{getContent:function(){return this.$slots.default[0]},lock:function(){this.locked=!0,this.$emit("lock")},unlock:function(){this.locked=!1,this.$emit("unlock")},open:function(){var e=this,t=this.$content,n=t.componentInstance,a=n&&n.onOpen;if(this.closing)return!1;this.visible=!0,this.closed=!1,this.opening=!0,a&&(0,ge.mf)(a)&&a(),this.$emit("open"),this.timer=setTimeout((function(){e.$emit("opened"),e.opening=!1}),400)},close:function(){var e=this,t=this.$content,n=t.componentInstance,a=n&&n.onClose;a&&(0,ge.mf)(a)&&a(),this.closed=!0,this.$emit("close"),this.timer=setTimeout((function(){e.visible=!1,e.$emit("closed")}),400)},onClose:function(){var e=this.beforeClose;if(this.locked||this.opening)return!1;e&&(0,ge.mf)(e)?e(this.close):this.close()},onTrigger:function(e){var t=this,n=this.$content,a=e.name,o=e.action||"on".concat(a[0].toUpperCase()).concat(a.slice(1));if(this.action=a,(0,ge.HD)(o)&&(o=n&&n.componentInstance?n.componentInstance[o]:null),this.lock(),(0,ge.mf)(o)){var i=o();i&&i.then&&(0,ge.mf)(i.then)?i.then((function(){t.unlock(),t.close()})).catch((function(){t.unlock()})):(this.unlock(),this.close())}else this.unlock(),this.close()},onOverlayClick:function(){if(!this.overlayClosable)return!1;this.onClose()}}},ve=be,_e=(0,m.Z)(ve,oe,ie,!1,null,null,null),ye=_e.exports;ye.install=function(e){e.component(ye.name,ye)};var Ce=ye,we=function(){var e=this,t=e._self._c;return t("div",{class:["the-cart",{"is-hidden":!e.isOpen}],on:{click:e.onToggle}},[t("div",{staticClass:"the-cart__icon"},[t("svg-icon",{attrs:{name:"put-on",size:30}})],1),t("sup",{staticClass:"the-cart__count"},[e._v(e._s(e.count))])])},xe=[],Be={name:"TheCart",componentName:"TheCart",components:{SvgIcon:p.Z},props:{icons:{type:Array,default:function(){return[]}}},data:function(){return{isOpen:!0}},computed:{count:function(){return this.icons.length}},mounted:function(){var e=this.$el,t=document.body;t.appendChild(e),this.$subscribe("show:cart",this.toggle)},beforeDestroy:function(){this.$unsubscribe("show:cart",this.toggle)},methods:{toggle:function(){this.isOpen=!this.isOpen},show:function(){this.$broadcast("show:drawer")},hide:function(){this.$broadcast("hide:drawer")},onToggle:function(){var e=this;this.toggle(),this.isOpen?setTimeout((function(){e.hide()}),300):setTimeout((function(){e.show()}),300)}}},ke=Be,Se=(0,m.Z)(ke,we,xe,!1,null,"da9df9ae",null),Ne=Se.exports;Ne.install=function(e){e.component(Ne.name,Ne)};var Ze=Ne,$e=n(8249),ze={name:"AppLayout",componentName:"AppLayout",components:{BaseContainer:i.Z,BaseMain:s.Z,AppHeader:Z,AppAside:ae,BaseDrawer:Ce,TheCart:Ze},data:function(){var e=this;return{icons:[],buttons:[{name:"cancel",text:"取消"},{name:"clean",text:"清空购物车",action:function(){e.icons=[],(0,$e.B$)("svg.icon.set"),e.$message.success({round:!0,message:"图标集购物车已清空！"}),e.$broadcast("clean:cart")}},{name:"confirm",text:"复制代码",size:"small",type:"primary",action:function(){(0,$e.vQ)(e.code),e.$message.success({round:!0,message:"图标集代码已复制到粘贴板！"})}}]}},computed:{code:function(){var e={title:"SvgIcon 图标集",code:"svg-icon-set",symbols:this.icons};return JSON.stringify(e,null,2)}},watch:{icons:function(){(0,$e.po)("svg.icon.set",JSON.stringify(this.icons))}},created:function(){this.update()},mounted:function(){this.$subscribe("add:icon",this.add),this.$subscribe("remove:icon",this.remove),this.$subscribe("show:drawer",this.show),this.$subscribe("hide:drawer",this.hide)},beforeDestroy:function(){this.$unsubscribe("add:icon",this.add),this.$unsubscribe("remove:icon",this.remove),this.$unsubscribe("show:drawer",this.show),this.$unsubscribe("hide:drawer",this.hide),(0,$e.B$)("svg.icon.set")},methods:{update:function(){var e=(0,$e.cF)("svg.icon.set");e&&(this.icons=JSON.parse(e))},show:function(){this.$refs.iconSetDrawer.open()},hide:function(){this.$refs.iconSetDrawer.close()},add:function(e){this.icons.push(e)},remove:function(e){var t=this.icons.indexOf(e);if(t<0)return!1;this.icons.splice(t,1)},onDrawerClose:function(){var e=this;setTimeout((function(){e.$broadcast("show:cart")}),300)}}},Ae=ze,Ie=(0,m.Z)(Ae,a,o,!1,null,"861884d2",null),Te=Ie.exports},90:function(e,t,n){n.d(t,{Z:function(){return u}});n(8309);var a=function(){var e=this,t=e._self._c;return t("div",{class:e.className},[e._t("default")],2)},o=[],i={name:"BaseContainer",componentName:"BaseContainer",props:{direction:{type:String,default:"column"},isAutoHeight:{type:Boolean,default:!1}},computed:{className:function(){return["base-container","util-direction-".concat(this.direction),{"util-overflow-auto":this.isAutoHeight}]}}},s=i,l=n(1001),r=(0,l.Z)(s,a,o,!1,null,null,null),c=r.exports;c.install=function(e){e.component(c.name,c)};var u=c},7534:function(e,t,n){n.d(t,{Z:function(){return u}});n(8309);var a=function(){var e=this,t=e._self._c;return t("header",{class:e.className},[e._t("default")],2)},o=[],i={name:"BaseHeader",componentName:"BaseHeader",props:{flex:{type:Boolean,default:!1},border:{type:Boolean,default:!0},padding:{type:String,default:"outer"},height:{type:String,default:"auto"},align:{type:String,default:"left"}},computed:{className:function(){return["base-header",{"base-header--flex":this.flex,"util-border-bottom":this.border},"util-height-".concat(this.height),"util-padding-".concat(this.padding),"util-align-".concat(this.align)]}}},s=i,l=n(1001),r=(0,l.Z)(s,a,o,!1,null,null,null),c=r.exports;c.install=function(e){e.component(c.name,c)};var u=c},1294:function(e,t,n){n.d(t,{Z:function(){return d}});n(8309);var a=function(){var e=this,t=e._self._c;return e.route?t("router-link",{class:e.className,attrs:{to:e.disabled?null:e.href,target:e.target}},[e.icon?t("svg-icon",{staticClass:"base-link__icon",attrs:{name:e.icon,size:e.iconSize}}):e._e(),t("span",{staticClass:"base-link__inner"},[e._t("default")],2)],1):t("a",{class:e.className,attrs:{href:e.disabled?null:e.href,target:e.target,download:e.download}},[e.icon?t("svg-icon",{staticClass:"base-link__icon",attrs:{name:e.icon,size:e.iconSize}}):e._e(),t("span",{staticClass:"base-link__inner"},[e._t("default")],2)],1)},o=[],i=(n(9653),n(9467)),s={name:"BaseLink",componentName:"BaseLink",components:{SvgIcon:i.Z},props:{type:{type:String,default:"default"},href:{type:String,default:""},target:{type:String,default:"_self"},route:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},download:{type:[Boolean,String],default:null},underline:{type:Boolean,default:!1},icon:{type:String,default:""},iconSize:{type:Number,default:16}},computed:{className:function(){var e=this.disabled?"util-anchor-".concat(this.type,"--disabled"):"";return["base-link","util-anchor-".concat(this.type),{"util-anchor-underline":this.underline,clsDisabled:e}]}}},l=s,r=n(1001),c=(0,r.Z)(l,a,o,!1,null,null,null),u=c.exports;u.install=function(e){e.component(u.name,u)};var d=u},6635:function(e,t,n){n.d(t,{Z:function(){return u}});n(8309);var a=function(){var e=this,t=e._self._c;return e.useMainTag?t("main",{class:e.className},[e._t("default")],2):t("div",{class:e.className},[e._t("default")],2)},o=[],i={name:"BaseMain",componentName:"BaseMain",props:{flex:{type:Boolean,default:!1},useMainTag:{type:Boolean,default:!1},padding:{type:String,default:"none"},overflow:{type:String,default:"auto"},direction:{type:String,default:"row"}},computed:{className:function(){var e=this.flex,t=e?"util-direction-".concat(this.direction):"";return["base-main","util-padding-".concat(this.padding),"util-overflow-".concat(this.overflow),{"base-main--flex":e},t]}}},s=i,l=n(1001),r=(0,l.Z)(s,a,o,!1,null,null,null),c=r.exports;c.install=function(e){e.component(c.name,c)};var u=c},8249:function(e,t,n){n.d(t,{B$:function(){return l},cF:function(){return s},p1:function(){return o},po:function(){return i},vQ:function(){return a}});n(4916),n(5306);var a=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))},o=function(e){var t={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};return e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(function(e){return t[e]||e})).replace(/\{\s+\{/g,"{{")},i=function(e,t){localStorage.setItem(e,t)},s=function(e){return localStorage.getItem(e)},l=function(e){localStorage.removeItem(e)}}}]);