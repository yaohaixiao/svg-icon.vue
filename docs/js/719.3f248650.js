"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[719],{719:function(e,a,s){s.r(a),s.d(a,{default:function(){return k}});var n=function(){var e=this,a=e._self._c;return a("base-aside",{attrs:{background:"",flex:"",padding:"none",collapsed:e.collapsed}},[a("base-main",{staticClass:"aside-main"},[a("app-menu")],1),a("base-footer",{attrs:{border:"",aling:"right",height:"inner"}},[a("div",{staticClass:"aside-collapse",on:{click:e.onToggle}},[a("svg-icon",{attrs:{name:"aside-collapse",size:20}})],1)])],1)},t=[],i=s(3839),l=s(7371),o=function(){var e=this,a=e._self._c;return a("aside",{class:e.className},[e._t("default")],2)},d=[],r={name:"BaseAside",componentName:"BaseAside",props:{width:{type:String,default:"regular"},padding:{type:String,default:"inner"},border:{type:String,default:"right"},flex:{type:Boolean,default:!1},background:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!1}},computed:{className(){return["base-aside",`base-aside_${this.width}`,`util-border-${this.border}`,`util-padding-${this.padding}`,{"base-aside--flex":this.flex,"base-aside--background":this.background,"base-aside--collapsed":this.collapsed}]}}},c=r,p=s(1001),u=(0,p.Z)(c,o,d,!1,null,null,null),g=u.exports;g.install=function(e){e.component(g.name,g)};var h=g;const f=()=>s.e(507).then(s.bind(s,5498)),b=()=>s.e(27).then(s.bind(s,6105));var m={name:"AppAside",componentName:"AppAside",components:{BaseAside:h,BaseMain:i.Z,BaseFooter:l.Z,AppMenu:f,SvgIcon:b},data(){return{collapsed:!1}},methods:{onToggle(){this.collapsed=!this.collapsed}}},_=m,v=(0,p.Z)(_,n,t,!1,null,"75731dc0",null),k=v.exports}}]);