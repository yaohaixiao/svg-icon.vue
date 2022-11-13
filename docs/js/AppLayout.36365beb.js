"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[287],{7680:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var a=function(){var e=this,t=e._self._c;return t("base-container",[t("app-header"),t("base-main",{attrs:{"use-main-tag":"",flex:"",overflow:"hidden"}},[t("app-aside"),t("base-main",{attrs:{overflow:"hidden"}},[t("router-view")],1)],1),t("cart-bar",{attrs:{items:e.icons}}),t("cart-drawer",{attrs:{items:e.icons}})],1)},o=[],s=(n(7658),n(90)),i=n(6635),r=function(){var e=this,t=e._self._c;return t("base-header",{attrs:{flex:"",padding:"inner",height:"outer"}},[t("app-logo"),t("app-nav")],1)},c=[],l=n(1592),u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-logo",on:{click:e.toHome}},[t("span",{staticClass:"app-logo__icon"},[t("svg-icon",{attrs:{name:"card-deploy",size:22}})],1),e._m(0)])},p=[function(){var e=this,t=e._self._c;return t("h1",{staticClass:"app-logo__title"},[t("em",{staticClass:"app-logo__key"},[e._v("svg-icon")]),e._v(" .vue ")])}],d=n(6105),m={name:"AppLogo",componentName:"AppLogo",components:{SvgIcon:d.Z},computed:{isHome(){return"PageDocumentation"===this.$route.name}},methods:{toHome(){if(this.isHome)return!1;this.$router.push({path:"/docs"})}}},h=m,f=n(1001),g=(0,f.Z)(h,u,p,!1,null,"4c447a04",null),v=g.exports,_=function(){var e=this,t=e._self._c;return t("ul",{staticClass:"app-nav"},e._l(e.navs,(function(e,n){return t("li",{key:`nav-${n}`,staticClass:"app-nav__item"},[t("base-link",{staticClass:"app-nav__link",attrs:{route:e.route,role:e.role,href:e.href,icon:e.icon,"icon-size":e.iconSize,target:e.target,download:e.download}})],1)})),0)},b=[],C=n(1294),k={name:"AppNav",componentName:"AppNav",components:{BaseLink:C.Z},data(){return{navs:[{route:!1,role:"link",href:"http://www.yaohaixiao.com/",icon:"card-home",iconSize:18},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue",icon:"card-branch",iconSize:16},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/archive/refs/heads/main.zip",icon:"card-download",iconSize:20,download:"svg-icon.vue-main.zip",target:"_blank"},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/issues",icon:"card-help",iconSize:20}]}}},y=k,A=(0,f.Z)(y,_,b,!1,null,"5bd03314",null),x=A.exports,Z={name:"AppHeader",componentName:"AppHeader",components:{BaseHeader:l.Z,AppLogo:v,AppNav:x}},w=Z,S=(0,f.Z)(w,r,c,!1,null,"ea729972",null),$=S.exports,z=function(){var e=this,t=e._self._c;return t("base-aside",{attrs:{background:"",flex:"",padding:"none",collapsed:e.collapsed}},[t("base-main",{staticClass:"aside-main"},[t("app-menu")],1),t("base-footer",{attrs:{border:"",aling:"right",height:"inner"}},[t("div",{staticClass:"aside-collapse",on:{click:e.onToggle}},[t("svg-icon",{attrs:{name:"aside-collapse",size:20}})],1)])],1)},B=[],N=n(7371),L=n(4139),H=function(){var e=this,t=e._self._c;return t("nav",{staticClass:"app-menu"},[t("ul",{staticClass:"app-menu__list"},e._l(e.routes,(function(n,a){return t("li",{key:`menu-${a}`,staticClass:"app-menu__item"},[t("div",{staticClass:"app-menu__title"},[t("router-link",{staticClass:"app-menu__link",attrs:{to:`/${n.path}`}},[t("svg-icon",{attrs:{name:n.icon,size:16}}),t("span",{staticClass:"app-menu__text"},[e._v(e._s(n.text))])],1),e.hasChildren(n)?t("span",{class:["app-menu__arrow",{"is-folded":e.folded}],on:{click:e.onFold}},[t("svg-icon",{attrs:{name:"arrow-down",size:16}})],1):e._e()],1),n.children&&!n.meta.hide?t("ul",{class:["app-submenu__list",{"is-folded":e.folded}],attrs:{id:`submenu-${a}`}},e._l(n.children,(function(n,a){return t("li",{key:`child-${a}`,staticClass:"app-submenu__item"},[t("router-link",{staticClass:"app-menu__link",attrs:{to:{name:n.name}}},[t("span",{staticClass:"app-submenu__text"},[e._v(e._s(n.text))])])],1)})),0):e._e()])})),0)])},O=[],R=n(254),I=n(7712),j=n(6366),F={name:"AppMenu",componentName:"AppMenu",components:{SvgIcon:d.Z},data(){return{routes:[R.Z,I.Z,j.Z],folded:!1}},methods:{hasChildren(e){const t=e.children;return!e.meta.hide&&t&&t.length>0},onFold(){this.folded=!this.folded}}},M=F,D=(0,f.Z)(M,H,O,!1,null,"0774e6fe",null),T=D.exports,U={name:"AppAside",componentName:"AppAside",components:{BaseAside:L.Z,BaseMain:i.Z,BaseFooter:N.Z,AppMenu:T,SvgIcon:d.Z},data(){return{collapsed:!1}},methods:{onToggle(){this.collapsed=!this.collapsed}}},E=U,q=(0,f.Z)(E,z,B,!1,null,"0d3e58ac",null),J=q.exports,X=n(3647),P=n(6938),Q=n(481),G={name:"AppLayout",componentName:"AppLayout",components:{BaseContainer:s.Z,BaseMain:i.Z,AppHeader:$,AppAside:J,CartBar:X.Z,CartDrawer:P.Z},data(){return{icons:[]}},watch:{icons(){(0,Q.po)("svg.icon.set",JSON.stringify(this.icons)),this.$broadcast("update:icons")}},created(){this.update()},mounted(){this.$subscribe("add:icon",this.add),this.$subscribe("remove:icon",this.remove),this.$subscribe("clean:cart",this.clean)},beforeDestroy(){this.$unsubscribe("add:icon",this.add),this.$unsubscribe("remove:icon",this.remove),this.$unsubscribe("clean:cart",this.clean),(0,Q.B$)("svg.icon.set")},methods:{update(){const e=(0,Q.cF)("svg.icon.set");e&&(this.icons=JSON.parse(e))},add(e){const t=[...this.icons];t.push(e),this.icons=t},remove(e){const t=[...this.icons],n=t.indexOf(e);if(n<0)return!1;t.splice(n,1),this.icons=t},clean(){this.icons=[]}}},K=G,V=(0,f.Z)(K,a,o,!1,null,"f26d0480",null),W=V.exports},481:function(e,t,n){n.d(t,{B$:function(){return s},cF:function(){return o},po:function(){return a}});const a=(e,t)=>{localStorage.setItem(e,t)},o=e=>localStorage.getItem(e),s=e=>{localStorage.removeItem(e)}},8249:function(e,t,n){n.d(t,{Ds:function(){return i},Xh:function(){return r},dX:function(){return s},p1:function(){return o},vQ:function(){return a}});const a=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))},o=e=>{const t={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};return e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(e=>t[e]||e)).replace(/\{\s+\{/g,"{{")},s=(e,t)=>{const n=new Blob([t]),a=document.createElement("a");a.download=e,a.href=URL.createObjectURL(n),a.click(),URL.revokeObjectURL(n)},i=(e,t=300)=>{let n;return function(...a){clearTimeout(n),n=setTimeout((()=>e.apply(this,a)),t)}},r=e=>{if(null===e)return null;let t=Object.assign({},e);return Object.keys(t).forEach((n=>t[n]="object"===typeof e[n]?r(e[n]):e[n])),Array.isArray(e)?(t.length=e.length,Array.from(t)):t}}}]);