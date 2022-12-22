"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[287],{756:function(e,t,n){n.r(t),n.d(t,{default:function(){return ae}});var a=function(){var e=this,t=e._self._c;return t("base-container",[e._m(0),t("base-main",{attrs:{"use-main-tag":"",flex:"",overflow:"hidden"}},[e._m(1),t("base-main",{attrs:{overflow:"hidden"}},[t("keep-alive",[t("router-view")],1)],1)],1),t("cart-bar",{attrs:{items:e.icons}}),t("cart-drawer",{attrs:{items:e.icons}})],1)},s=[function(){var e=this,t=e._self._c;return t("app-header")},function(){var e=this,t=e._self._c;return t("app-aside")}],o=(n(7658),n(90)),i=n(3839),r=function(){var e=this,t=e._self._c;return t("base-header",{attrs:{flex:"",padding:"inner",height:"outer"}},[t("app-logo"),t("app-nav")],1)},l=[],c=n(2941),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-logo",on:{click:e.toHome}},[t("span",{staticClass:"app-logo__icon"},[t("svg-icon",{attrs:{name:"bold-deploy",size:22}})],1),e._m(0)])},u=[function(){var e=this,t=e._self._c;return t("h1",{staticClass:"app-logo__title"},[t("em",{staticClass:"app-logo__key"},[e._v("svg-icon")]),e._v(" .vue ")])}],d=n(6105),h={name:"AppLogo",componentName:"AppLogo",components:{SvgIcon:d.Z},computed:{isHome(){return"PageDocumentation"===this.$route.name}},methods:{toHome(){if(this.isHome)return!1;this.$router.push({path:"/docs"})}}},m=h,_=n(1001),v=(0,_.Z)(m,p,u,!1,null,null,null),f=v.exports,g=function(){var e=this,t=e._self._c;return t("ul",{staticClass:"app-nav"},e._l(e.navs,(function(e,n){return t("li",{key:`nav-${n}`,staticClass:"app-nav__item"},[t("base-link",{staticClass:"app-nav__link",attrs:{route:e.route,role:e.role,href:e.href,icon:e.icon,"icon-size":e.iconSize,target:e.target,download:e.download}})],1)})),0)},b=[],k=n(8040),C={name:"AppNav",componentName:"AppNav",components:{BaseLink:k.Z},data(){return{navs:[{route:!1,role:"link",href:"http://www.yaohaixiao.com/",icon:"bold-home",iconSize:18},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue",icon:"bold-branch",iconSize:16},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/archive/refs/heads/main.zip",icon:"bold-download",iconSize:20,download:"svg-icon.vue-main.zip",target:"_blank"},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/issues",icon:"bold-help",iconSize:20}]}}},x=C,A=(0,_.Z)(x,g,b,!1,null,null,null),w=A.exports,Z={name:"AppHeader",componentName:"AppHeader",components:{BaseHeader:c.Z,AppLogo:f,AppNav:w}},$=Z,y=(0,_.Z)($,r,l,!1,null,null,null),z=y.exports,N=function(){var e=this,t=e._self._c;return t("base-aside",{attrs:{background:"",flex:"",padding:"none",collapsed:e.collapsed}},[t("base-main",{staticClass:"aside-main"},[t("app-menu")],1),t("base-footer",{attrs:{border:"",aling:"right",height:"inner"}},[t("div",{staticClass:"aside-collapse",on:{click:e.onToggle}},[t("svg-icon",{attrs:{name:"aside-collapse",size:20}})],1)])],1)},S=[],B=n(7371),H=n(4139),L=function(){var e=this,t=e._self._c;return t("nav",{staticClass:"app-menu"},[t("ul",{staticClass:"app-menu__list"},e._l(e.routes,(function(n,a){return t("li",{key:`menu-${a}`,staticClass:"app-menu__item"},[t("div",{staticClass:"app-menu__title"},[t("router-link",{staticClass:"app-menu__link",attrs:{to:`/${n.path}`}},[t("svg-icon",{attrs:{name:n.icon,size:16}}),t("span",{staticClass:"app-menu__text"},[e._v(e._s(n.text))])],1),e.hasChildren(n)?t("span",{class:["app-menu__arrow",{"is-folded":e.folded}],on:{click:e.onFold}},[t("svg-icon",{attrs:{name:"arrow-down",size:16}})],1):e._e()],1),t("transition",{attrs:{name:"fold"}},[!n.children||n.meta.hide||e.folded?e._e():t("ul",{staticClass:"app-submenu__list",attrs:{id:`submenu-${a}`}},e._l(n.children,(function(n,a){return t("li",{key:`child-${a}`,staticClass:"app-submenu__item"},[t("router-link",{staticClass:"app-menu__link",attrs:{to:{name:n.name}}},[t("span",{staticClass:"app-submenu__text"},[e._v(e._s(n.text))])])],1)})),0)])],1)})),0)])},M=[],F=n(254),T=n(7712),D=n(6366),I={name:"AppMenu",componentName:"AppMenu",components:{SvgIcon:d.Z},data(){return{routes:[F.Z,T.Z,D.Z],folded:!1}},methods:{hasChildren(e){const t=e.children;return!e.meta.hide&&t&&t.length>0},onFold(){this.folded=!this.folded}}},O=I,J=(0,_.Z)(O,L,M,!1,null,null,null),P=J.exports,j={name:"AppAside",componentName:"AppAside",components:{BaseAside:H.Z,BaseMain:i.Z,BaseFooter:B.Z,AppMenu:P,SvgIcon:d.Z},data(){return{collapsed:!1}},methods:{onToggle(){this.collapsed=!this.collapsed}}},q=j,E=(0,_.Z)(q,N,S,!1,null,null,null),G=E.exports,K=n(481),Q=n(9584);const R=new Set,U=e=>{const t=e.name,n=e.value,a=e.rating,s=location.pathname+location.hash;R.add({page:s,name:t,record:n,rating:a})},V=()=>{(0,Q.Tb)(U),(0,Q.Tx)(U),(0,Q.kz)(U)},W=()=>{const e=[...R];console.table(e)},X=()=>n.e(257).then(n.bind(n,7169)),Y=()=>Promise.all([n.e(836),n.e(924)]).then(n.bind(n,7087));V();var ee={name:"AppLayout",componentName:"AppLayout",components:{BaseContainer:o.Z,BaseMain:i.Z,AppHeader:z,AppAside:G,CartBar:X,CartDrawer:Y},data(){return{icons:[]}},watch:{icons(){(0,K.po)("svg.icon.set",JSON.stringify(this.icons)),this.$broadcast("update:icons")},"$route.path"(){W()}},created(){this.update()},mounted(){this.$subscribe("add:icon",this.add),this.$subscribe("remove:icon",this.remove),this.$subscribe("clean:cart",this.clean)},beforeDestroy(){this.$unsubscribe("add:icon",this.add),this.$unsubscribe("remove:icon",this.remove),this.$unsubscribe("clean:cart",this.clean),(0,K.B$)("svg.icon.set")},methods:{update(){const e=(0,K.cF)("svg.icon.set");e&&(this.icons=JSON.parse(e))},add(e){const t=[...this.icons];t.push(e),this.icons=t},remove(e){const t=[...this.icons],n=t.indexOf(e);if(n<0)return!1;t.splice(n,1),this.icons=t},clean(){this.icons=[]}}},te=ee,ne=(0,_.Z)(te,a,s,!1,null,null,null),ae=ne.exports}}]);