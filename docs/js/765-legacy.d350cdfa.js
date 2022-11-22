"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[765],{8134:function(e,t,n){n.d(t,{Z:function(){return r}});n(8309);var a=function(){var e=this,t=e._self._c;return t("div",{class:e.className},[e._t("default")],2)},s=[],o={name:"UsageCaseItem",componentName:"UsageCaseItem",props:{flex:{type:Boolean,default:!1},textAlign:{type:String,default:"left"}},computed:{className:function(){return["base-usage-case","util-align-".concat(this.textAlign),{"base-usage-case--flex":this.flex}]}}},i=o,c=n(1001),u=(0,c.Z)(i,a,s,!1,null,"28600699",null),l=u.exports;l.install=function(e){e.component(l.name,l)};var r=l},7515:function(e,t,n){n.d(t,{Z:function(){return P}});n(8309);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"base-usage"},[t("base-usage-header",{ref:"header"},[e._t("case")],2),t("base-usage-main",{attrs:{expanded:e.folded}},[e.$slots.tips?t("base-usage-tips",{ref:"tips"},[e._t("tips")],2):e._e(),t("base-usage-code",{ref:"code"},[e._t("code")],2)],1),t("base-usage-footer",{ref:"footer",attrs:{folded:e.folded},on:{toggle:e.onToggle}})],1)},s=[],o=function(){var e=this,t=e._self._c;return t("header",{staticClass:"base-usage-header"},[e._t("default")],2)},i=[],c={name:"BaseUsageHeader",componentName:"BaseUsageHeader"},u=c,l=n(1001),r=(0,l.Z)(u,o,i,!1,null,null,null),d=r.exports;d.install=function(e){e.component(d.name,d)};var f=d,p=function(){var e=this,t=e._self._c;return t("div",{ref:"main",class:e.className,style:e.cssRules},[e._t("default")],2)},g=[],h={name:"BaseUsageMain",componentName:"BaseUsageMain",props:{expanded:{type:Boolean,default:!0}},data:function(){return{folded:!1,defaultHeight:"auto",codeHeight:"auto"}},computed:{className:function(){return["base-usage-main",{"base-usage-main--folded":this.folded}]},cssRules:function(){var e=this.codeHeight,t="auto"===e?e:e+"px";return{height:t}}},watch:{expanded:function(){this.update()},folded:function(){this.toggle()}},created:function(){this.update()},mounted:function(){var e=this.$refs.main,t=e.offsetHeight-2;t>36&&(this.codeHeight=t,this.defaultHeight=t),this.folded&&(this.codeHeight=0)},methods:{update:function(){this.folded=!this.expanded},expand:function(){this.codeHeight=this.defaultHeight},fold:function(){this.codeHeight=0},toggle:function(){this.folded?this.expand():this.fold()}}},m=h,_=(0,l.Z)(m,p,g,!1,null,"029061d7",null),v=_.exports;v.install=function(e){e.component(v.name,v)};var x=v,b=function(){var e=this,t=e._self._c;return t("div",{ref:"code",staticClass:"base-usage-code"},[t("span",{staticClass:"base-usage-code__copy",on:{click:e.onCopy}},[t("svg-icon",{attrs:{name:"copy"}}),e._v(" 复制代码 ")],1),e._t("default")],2)},B=[],U=(n(1539),n(8783),n(3948),n(8249)),C=n(5068),y=function(){return n.e(27).then(n.bind(n,9126))},H={name:"BaseUsageCode",componentName:"BaseUsageCode",components:{SvgIcon:y},methods:{copy:function(){var e=this.$refs.code,t=e.querySelector(".article__code").innerHTML;(0,U.vQ)((0,C.p1)(t))},onCopy:function(){this.copy(),this.$message.success({round:!0,message:"代码已复制到粘贴板！"})}}},N=H,Z=(0,l.Z)(N,b,B,!1,null,"12437787",null),T=Z.exports;T.install=function(e){e.component(T.name,T)};var w=T,k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"base-usage-tips"},[t("div",{staticClass:"base-usage-tips__inner"},[e._t("default")],2)])},$=[],I={name:"BaseUsageTips",componentName:"BaseUsageTips"},M=I,S=(0,l.Z)(M,k,$,!1,null,"16333420",null),q=S.exports;q.install=function(e){e.component(q.name,q)};var F=q,A=function(){var e=this,t=e._self._c;return t("footer",{ref:"footer",staticClass:"base-usage-footer",on:{click:e.onToggle}},[t("span",{staticClass:"base-usage-footer__icon"},[t("svg-icon",{attrs:{name:e.icon}})],1),t("span",{staticClass:"base-usage-footer__text"},[e._v(e._s(e.text))])])},R=[],L=function(){return n.e(27).then(n.bind(n,9126))},Q={name:"BaseUsageFooter",componentName:"BaseUsageFooter",components:{SvgIcon:L},props:{folded:{type:Boolean,default:!1}},computed:{icon:function(){return this.folded?"arrow-down":"arrow-up"},text:function(){return this.folded?"显示代码":"隐藏代码"}},methods:{onToggle:function(){this.$emit("toggle")}}},j=Q,z=(0,l.Z)(j,A,R,!1,null,"fcb52342",null),D=z.exports;D.install=function(e){e.component(D.name,D)};var E=D,G={name:"BaseUsage",componentName:"BaseUsage",components:{BaseUsageHeader:f,BaseUsageMain:x,BaseUsageCode:w,BaseUsageTips:F,BaseUsageFooter:E},props:{expanded:{type:Boolean,default:!0}},data:function(){return{folded:!0}},watch:{expanded:function(){this.update()}},created:function(){this.update()},methods:{update:function(){this.folded=!this.expanded},onToggle:function(){this.folded=!this.folded}}},J=G,K=(0,l.Z)(J,a,s,!1,null,null,null),O=K.exports;O.install=function(e){e.component(O.name,O)};var P=O},5068:function(e,t,n){n.d(t,{hc:function(){return a},p1:function(){return s}});n(4916),n(5306);var a=function(e){return e.replace(/<script[^>]*>.*?<\/script>/gi,"")},s=function(e){var t={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};return e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(function(e){return t[e]||e})).replace(/\{\s+\{/g,"{{")}}}]);