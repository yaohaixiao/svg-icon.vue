"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[287],{9029:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var a=function(){var e=this,t=e._self._c;return t("base-container",[t("app-header"),t("base-main",{attrs:{"use-main-tag":"",flex:"",overflow:"hidden"}},[t("app-aside"),t("base-main",{attrs:{overflow:"hidden"}},[t("router-view")],1)],1)],1)},o=[],i=n(90),s=n(6635),l=function(){var e=this,t=e._self._c;return t("base-header",{attrs:{flex:"",padding:"inner",height:"outer"}},[t("app-logo"),t("app-nav")],1)},r=[],c=n(7534),u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-logo",on:{click:e.toHome}},[t("span",{staticClass:"app-logo__icon"},[t("svg-icon",{attrs:{name:"card-deploy",size:22}})],1),e._m(0)])},d=[function(){var e=this,t=e._self._c;return t("h1",{staticClass:"app-logo__title"},[t("em",{staticClass:"app-logo__key"},[e._v("svg-icon")]),e._v(" .vue ")])}],p=(n(8309),n(7658),n(9467)),f={name:"AppLogo",componentName:"AppLogo",components:{SvgIcon:p.Z},computed:{isHome:function(){return"PageDocumentation"===this.$route.name}},methods:{toHome:function(){if(this.isHome)return!1;this.$router.push({path:"/docs"})}}},m=f,h=n(1001),g=(0,h.Z)(m,u,d,!1,null,"4c447a04",null),_=g.exports,v=function(){var e=this,t=e._self._c;return t("ul",{staticClass:"app-nav"},e._l(e.navs,(function(e,n){return t("li",{key:"nav-".concat(n),staticClass:"app-nav__item"},[t("base-link",{staticClass:"app-nav__link",attrs:{route:e.route,role:e.role,href:e.href,icon:e.icon,"icon-size":e.iconSize,target:e.target,download:e.download}})],1)})),0)},b=[],y=n(1294),x={name:"AppNav",componentName:"AppNav",components:{BaseLink:y.Z},data:function(){return{navs:[{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue",icon:"card-branch",iconSize:16},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/archive/refs/heads/main.zip",icon:"card-download",iconSize:20,download:"svg-icon.vue-main.zip",target:"_blank"},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/issues",icon:"card-help",iconSize:20}]}}},k=x,B=(0,h.Z)(k,v,b,!1,null,"025c2045",null),N=B.exports,C={name:"AppHeader",componentName:"AppHeader",components:{BaseHeader:c.Z,AppLogo:_,AppNav:N}},S=C,Z=(0,h.Z)(S,l,r,!1,null,"3130f84b",null),A=Z.exports,w=function(){var e=this,t=e._self._c;return t("base-aside",{attrs:{background:"",flex:"",padding:"none",collapsed:e.collapsed}},[t("base-main",{staticClass:"aside-main"},[t("app-menu")],1),t("base-footer",{attrs:{border:"",aling:"right",height:"inner"}},[t("div",{staticClass:"aside-collapse",on:{click:e.onToggle}},[t("svg-icon",{attrs:{name:"aside-collapse",size:20}})],1)])],1)},z=[],H=function(){var e=this,t=e._self._c;return t("footer",{class:e.className},[e._t("default")],2)},M=[],L={name:"BaseFooter",componentName:"BaseFooter",props:{flex:{type:Boolean,default:!1},border:{type:Boolean,default:!0},padding:{type:String,default:"outer"},height:{type:String,default:"auto"},align:{type:String,default:"left"}},computed:{className:function(){var e=this.align,t=this.flex,n=this.height,a=this.padding,o=this.border;return["base-footer",{"base-footer--flex":t,"util-border-top":o},"util-height-".concat(n),"util-padding-".concat(a),"util-align-".concat(e)]}}},F=L,I=(0,h.Z)(F,H,M,!1,null,null,null),T=I.exports;T.install=function(e){e.component(T.name,T)};var D=T,$=function(){var e=this,t=e._self._c;return t("aside",{class:e.className},[e._t("default")],2)},P=[],j={name:"BaseAside",componentName:"BaseAside",props:{width:{type:String,default:"regular"},padding:{type:String,default:"inner"},border:{type:String,default:"right"},flex:{type:Boolean,default:!1},background:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!1}},computed:{className:function(){return["base-aside","base-aside_".concat(this.width),"util-border-".concat(this.border),"util-padding-".concat(this.padding),{"base-aside--flex":this.flex,"base-aside--background":this.background,"base-aside--collapsed":this.collapsed}]}}},q=j,E=(0,h.Z)(q,$,P,!1,null,null,null),G=E.exports;G.install=function(e){e.component(G.name,G)};var J=G,K=function(){var e=this,t=e._self._c;return t("nav",{staticClass:"app-menu"},[t("ul",{staticClass:"app-menu__list"},e._l(e.routes,(function(n,a){return t("li",{key:"menu-".concat(a),staticClass:"app-menu__item"},[t("div",{staticClass:"app-menu__title"},[t("router-link",{staticClass:"app-menu__link",attrs:{to:"/".concat(n.path)}},[t("svg-icon",{attrs:{name:n.icon,size:16}}),t("span",{staticClass:"app-menu__text"},[e._v(e._s(n.text))])],1),e.hasChildren(n)?t("span",{class:["app-menu__arrow",{"is-folded":e.folded}],on:{click:e.onFold}},[t("svg-icon",{attrs:{name:"arrow-down",size:16}})],1):e._e()],1),n.children&&!n.meta.hide?t("ul",{class:["app-submenu__list",{"is-folded":e.folded}],attrs:{id:"submenu-".concat(a)}},e._l(n.children,(function(n,a){return t("li",{key:"child-".concat(a),staticClass:"app-submenu__item"},[t("router-link",{staticClass:"app-menu__link",attrs:{to:{name:n.name}}},[t("span",{staticClass:"app-submenu__text"},[e._v(e._s(n.text))])])],1)})),0):e._e()])})),0)])},O=[],Q=n(254),R=n(7712),U=n(6366),V={name:"AppMenu",componentName:"AppMenu",components:{SvgIcon:p.Z},data:function(){return{routes:[Q.Z,R.Z,U.Z],folded:!1}},methods:{hasChildren:function(e){var t=e.children;return!e.meta.hide&&t&&t.length>0},onFold:function(){this.folded=!this.folded}}},W=V,X=(0,h.Z)(W,K,O,!1,null,"036fd20f",null),Y=X.exports,ee={name:"AppAside",componentName:"AppAside",components:{BaseAside:J,BaseMain:s.Z,BaseFooter:D,AppMenu:Y,SvgIcon:p.Z},data:function(){return{collapsed:!1}},methods:{onToggle:function(){this.collapsed=!this.collapsed}}},te=ee,ne=(0,h.Z)(te,w,z,!1,null,"2258cf46",null),ae=ne.exports,oe={name:"AppLayout",componentName:"AppLayout",components:{BaseContainer:i.Z,BaseMain:s.Z,AppHeader:A,AppAside:ae}},ie=oe,se=(0,h.Z)(ie,a,o,!1,null,"8211eec8",null),le=se.exports},90:function(e,t,n){n.d(t,{Z:function(){return u}});n(8309);var a=function(){var e=this,t=e._self._c;return t("div",{class:e.className},[e._t("default")],2)},o=[],i={name:"BaseContainer",componentName:"BaseContainer",props:{direction:{type:String,default:"column"},isAutoHeight:{type:Boolean,default:!1}},computed:{className:function(){return["base-container","util-direction-".concat(this.direction),{"util-overflow-auto":this.isAutoHeight}]}}},s=i,l=n(1001),r=(0,l.Z)(s,a,o,!1,null,null,null),c=r.exports;c.install=function(e){e.component(c.name,c)};var u=c},7534:function(e,t,n){n.d(t,{Z:function(){return u}});n(8309);var a=function(){var e=this,t=e._self._c;return t("header",{class:e.className},[e._t("default")],2)},o=[],i={name:"BaseHeader",componentName:"BaseHeader",props:{flex:{type:Boolean,default:!1},border:{type:Boolean,default:!0},padding:{type:String,default:"outer"},height:{type:String,default:"auto"},align:{type:String,default:"left"}},computed:{className:function(){return["base-header",{"base-header--flex":this.flex,"util-border-bottom":this.border},"util-height-".concat(this.height),"util-padding-".concat(this.padding),"util-align-".concat(this.align)]}}},s=i,l=n(1001),r=(0,l.Z)(s,a,o,!1,null,null,null),c=r.exports;c.install=function(e){e.component(c.name,c)};var u=c},1294:function(e,t,n){n.d(t,{Z:function(){return d}});n(8309);var a=function(){var e=this,t=e._self._c;return e.route?t("router-link",{class:e.className,attrs:{to:e.disabled?null:e.href,target:e.target}},[e.icon?t("svg-icon",{staticClass:"base-link__icon",attrs:{name:e.icon,size:e.iconSize}}):e._e(),t("span",{staticClass:"base-link__inner"},[e._t("default")],2)],1):t("a",{class:e.className,attrs:{href:e.disabled?null:e.href,target:e.target,download:e.download}},[e.icon?t("svg-icon",{staticClass:"base-link__icon",attrs:{name:e.icon,size:e.iconSize}}):e._e(),t("span",{staticClass:"base-link__inner"},[e._t("default")],2)],1)},o=[],i=(n(9653),n(9467)),s={name:"BaseLink",componentName:"BaseLink",components:{SvgIcon:i.Z},props:{type:{type:String,default:"default"},href:{type:String,default:""},target:{type:String,default:"_self"},route:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},download:{type:[Boolean,String],default:null},underline:{type:Boolean,default:!1},icon:{type:String,default:""},iconSize:{type:Number,default:16}},computed:{className:function(){var e=this.disabled?"util-anchor-".concat(this.type,"--disabled"):"";return["base-link","util-anchor-".concat(this.type),{"util-anchor-underline":this.underline,clsDisabled:e}]}}},l=s,r=n(1001),c=(0,r.Z)(l,a,o,!1,null,null,null),u=c.exports;u.install=function(e){e.component(u.name,u)};var d=u},6635:function(e,t,n){n.d(t,{Z:function(){return u}});n(8309);var a=function(){var e=this,t=e._self._c;return e.useMainTag?t("main",{class:e.className},[e._t("default")],2):t("div",{class:e.className},[e._t("default")],2)},o=[],i={name:"BaseMain",componentName:"BaseMain",props:{flex:{type:Boolean,default:!1},useMainTag:{type:Boolean,default:!1},padding:{type:String,default:"none"},overflow:{type:String,default:"auto"},direction:{type:String,default:"row"}},computed:{className:function(){var e=this.flex,t=e?"util-direction-".concat(this.direction):"";return["base-main","util-padding-".concat(this.padding),"util-overflow-".concat(this.overflow),{"base-main--flex":e},t]}}},s=i,l=n(1001),r=(0,l.Z)(s,a,o,!1,null,null,null),c=r.exports;c.install=function(e){e.component(c.name,c)};var u=c}}]);