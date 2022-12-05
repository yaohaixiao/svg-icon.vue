"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[287],{758:function(e,t,s){s.r(t),s.d(t,{default:function(){return X}});var n=function(){var e=this,t=e._self._c;return t("base-container",[e._m(0),t("base-main",{attrs:{"use-main-tag":"",flex:"",overflow:"hidden"}},[e._m(1),t("base-main",{attrs:{overflow:"hidden"}},[t("keep-alive",[t("router-view")],1)],1)],1),t("cart-bar",{attrs:{items:e.icons}}),t("cart-drawer",{attrs:{items:e.icons}})],1)},o=[function(){var e=this,t=e._self._c;return t("app-header")},function(){var e=this,t=e._self._c;return t("app-aside")}],a=(s(7658),s(90)),i=s(3839),r=s(3647),l=s(2329),c=function(){var e=this,t=e._self._c;return t("base-header",{attrs:{flex:"",padding:"inner",height:"outer"}},[t("app-logo"),t("app-nav")],1)},u=[],p=s(2941),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-logo",on:{click:e.toHome}},[t("span",{staticClass:"app-logo__icon"},[t("svg-icon",{attrs:{name:"bold-deploy",size:22}})],1),e._m(0)])},h=[function(){var e=this,t=e._self._c;return t("h1",{staticClass:"app-logo__title"},[t("em",{staticClass:"app-logo__key"},[e._v("svg-icon")]),e._v(" .vue ")])}],m=s(6105),f={name:"AppLogo",componentName:"AppLogo",components:{SvgIcon:m.Z},computed:{isHome(){return"PageDocumentation"===this.$route.name}},methods:{toHome(){if(this.isHome)return!1;this.$router.push({path:"/docs"})}}},v=f,_=s(1001),b=(0,_.Z)(v,d,h,!1,null,null,null),g=b.exports,y=function(){var e=this,t=e._self._c;return t("ul",{staticClass:"app-nav"},e._l(e.navs,(function(e,s){return t("li",{key:`nav-${s}`,staticClass:"app-nav__item"},[t("base-link",{staticClass:"app-nav__link",attrs:{route:e.route,role:e.role,href:e.href,icon:e.icon,"icon-size":e.iconSize,target:e.target,download:e.download}})],1)})),0)},Z=[],k=s(8040),C={name:"AppNav",componentName:"AppNav",components:{BaseLink:k.Z},data(){return{navs:[{route:!1,role:"link",href:"http://www.yaohaixiao.com/",icon:"bold-home",iconSize:18},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue",icon:"bold-branch",iconSize:16},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/archive/refs/heads/main.zip",icon:"bold-download",iconSize:20,download:"svg-icon.vue-main.zip",target:"_blank"},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/issues",icon:"bold-help",iconSize:20}]}}},w=C,A=(0,_.Z)(w,y,Z,!1,null,null,null),x=A.exports,S={name:"AppHeader",componentName:"AppHeader",components:{BaseHeader:p.Z,AppLogo:g,AppNav:x}},$=S,N=(0,_.Z)($,c,u,!1,null,null,null),z=N.exports,B=function(){var e=this,t=e._self._c;return t("base-aside",{attrs:{background:"",flex:"",padding:"none",collapsed:e.collapsed}},[t("base-main",{staticClass:"aside-main"},[t("app-menu")],1),t("base-footer",{attrs:{border:"",aling:"right",height:"inner"}},[t("div",{staticClass:"aside-collapse",on:{click:e.onToggle}},[t("svg-icon",{attrs:{name:"aside-collapse",size:20}})],1)])],1)},M=[],H=s(7371),L=s(4139),I=function(){var e=this,t=e._self._c;return t("nav",{staticClass:"app-menu"},[t("ul",{staticClass:"app-menu__list"},e._l(e.routes,(function(s,n){return t("li",{key:`menu-${n}`,staticClass:"app-menu__item"},[t("div",{staticClass:"app-menu__title"},[t("router-link",{staticClass:"app-menu__link",attrs:{to:`/${s.path}`}},[t("svg-icon",{attrs:{name:s.icon,size:16}}),t("span",{staticClass:"app-menu__text"},[e._v(e._s(s.text))])],1),e.hasChildren(s)?t("span",{class:["app-menu__arrow",{"is-folded":e.folded}],on:{click:e.onFold}},[t("svg-icon",{attrs:{name:"arrow-down",size:16}})],1):e._e()],1),t("transition",{attrs:{name:"fold"}},[!s.children||s.meta.hide||e.folded?e._e():t("ul",{staticClass:"app-submenu__list",attrs:{id:`submenu-${n}`}},e._l(s.children,(function(s,n){return t("li",{key:`child-${n}`,staticClass:"app-submenu__item"},[t("router-link",{staticClass:"app-menu__link",attrs:{to:{name:s.name}}},[t("span",{staticClass:"app-submenu__text"},[e._v(e._s(s.text))])])],1)})),0)])],1)})),0)])},F=[],T=s(254),D=s(7712),O=s(6366),q={name:"AppMenu",componentName:"AppMenu",components:{SvgIcon:m.Z},data(){return{routes:[T.Z,D.Z,O.Z],folded:!1}},methods:{hasChildren(e){const t=e.children;return!e.meta.hide&&t&&t.length>0},onFold(){this.folded=!this.folded}}},E=q,J=(0,_.Z)(E,I,F,!1,null,null,null),j=J.exports,P={name:"AppAside",componentName:"AppAside",components:{BaseAside:L.Z,BaseMain:i.Z,BaseFooter:H.Z,AppMenu:j,SvgIcon:m.Z},data(){return{collapsed:!1}},methods:{onToggle(){this.collapsed=!this.collapsed}}},G=P,K=(0,_.Z)(G,B,M,!1,null,null,null),Q=K.exports,R=s(481),U={name:"AppLayout",componentName:"AppLayout",components:{BaseContainer:a.Z,BaseMain:i.Z,AppHeader:z,AppAside:Q,CartBar:r.Z,CartDrawer:l.Z},data(){return{icons:[]}},watch:{icons(){(0,R.po)("svg.icon.set",JSON.stringify(this.icons)),this.$broadcast("update:icons")}},created(){this.update()},mounted(){this.$subscribe("add:icon",this.add),this.$subscribe("remove:icon",this.remove),this.$subscribe("clean:cart",this.clean)},beforeDestroy(){this.$unsubscribe("add:icon",this.add),this.$unsubscribe("remove:icon",this.remove),this.$unsubscribe("clean:cart",this.clean),(0,R.B$)("svg.icon.set")},methods:{update(){const e=(0,R.cF)("svg.icon.set");e&&(this.icons=JSON.parse(e))},add(e){const t=[...this.icons];t.push(e),this.icons=t},remove(e){const t=[...this.icons],s=t.indexOf(e);if(s<0)return!1;t.splice(s,1),this.icons=t},clean(){this.icons=[]}}},V=U,W=(0,_.Z)(V,n,o,!1,null,null,null),X=W.exports},3388:function(e,t,s){s.d(t,{oq:function(){return a}});const n=(e,t)=>{if(!t)return!1;if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(s){return!1}return!1},o=e=>e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode,a=(e,t,s,a)=>{if(e){s=s||document;do{if(null!=t&&(">"===t[0]?e.parentNode===s&&n(e,t):n(e,t))||a&&e===s)return e;if(e===s)break}while(e=o(e))}return null}},481:function(e,t,s){s.d(t,{B$:function(){return a},cF:function(){return o},po:function(){return n}});const n=(e,t)=>{localStorage.setItem(e,t)},o=e=>localStorage.getItem(e),a=e=>{localStorage.removeItem(e)}},8638:function(e,t,s){s.d(t,{x:function(){return f},s:function(){return m}});s(7658);var n=s(8236),o=s(8820),a=s(1505),i=s(5681),r=s(8868),l=s(1471),c=s(329),u=s(2919);const p=[];p.push(...n.Z.symbols),p.push(...o.Z.symbols),p.push(...a.Z.symbols),p.push(...i.Z.symbols),p.push(...r.Z.symbols),p.push(...l.Z.symbols),p.push(...c.Z.symbols),p.push(...u.Z.symbols);var d={title:"Default",code:"default",symbols:p};const h=[],m=e=>{const t=document.body,s=document.createElement("div"),n=document.querySelector("#svg-icons");let o;e?Array.isArray(e)?e.forEach((e=>{h.push(...e.symbols)})):h.push(...e.symbols):h.push(...d.symbols),o=h.join(""),n?n.innerHTML+=o:(s.innerHTML=`<svg id="svg-icons" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden;">${o}</svg>`,t.insertBefore(s.firstChild,t.firstChild))},f=()=>h}}]);