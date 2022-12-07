"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[8420],{6958:function(e,n,s){s.r(n),s.d(n,{default:function(){return u}});var a=function(){var e=this;e._self._c;return e._m(0)},o=[function(){var e=this,n=e._self._c;return n("section",{staticClass:"article__section"},[n("h2",{staticClass:"article__h2"},[e._v("设置颜色")]),n("p",[e._v(" SvgIcon 组件既可以使用包含 icon 的父节点设置 CSS 样式控制图标颜色，也可以直接设置 color 属性设置颜色。 ")]),n("h3",{staticClass:"article__h3"},[e._v("通过 CSS 设置颜色")]),n("base-usage",{scopedSlots:e._u([{key:"case",fn:function(){return[n("base-usage-case",[n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"database-read",size:24}})],1),n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"database-lock",size:24}})],1),n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"plugins",size:24}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[e._v(" 通过设置 SvgIcon 父组件的 CSS 颜色，SvgIcon 组件的图标颜色将其父元素 case-icon 的 color 值一致。 ")]},proxy:!0},{key:"code",fn:function(){return[n("pre",{staticClass:"base-usage-code__pre"},[n("code",{staticClass:"base-usage-code__code"},[e._v('<template>\n  <span class="case-icon">\n    <svg-icon name="database-read" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="database-lock" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="plugins" :size="24" />\n  </span>\n</template>\n\n<script>\nimport { render } from \'svg-icon.vue/utils/utils\'\nimport SvgIcon from \'svg-icon.vue\'\n\nrender()\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>')])])]},proxy:!0}])}),n("h3",{staticClass:"article__h3"},[e._v("通过 color 属性设置颜色")]),n("base-usage",{scopedSlots:e._u([{key:"case",fn:function(){return[n("base-usage-case",[n("span",{staticClass:"base-usage-case__cell"},[n("svg-icon",{attrs:{name:"aside-environment",size:24,color:"#07B759"}})],1),n("span",{staticClass:"base-usage-case__cell"},[n("svg-icon",{attrs:{name:"aside-branch",size:24,color:"#507AFE"}})],1),n("span",{staticClass:"base-usage-case__cell"},[n("svg-icon",{attrs:{name:"aside-pc",size:24,color:"#FF9901"}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[e._v(" 设置 color 属性后，SvgIcon 的父组件通过 CSS 设置的 color 样式将不再起作用。 ")]},proxy:!0},{key:"code",fn:function(){return[n("pre",{staticClass:"base-usage-code__pre"},[n("code",{staticClass:"base-usage-code__code"},[e._v('<template>\n  <span class="case-icon">\n    <svg-icon name="aside-environment" :size="24" color="#07B759"/>\n  </span>\n  <span class="case-icon">\n    <svg-icon name="aside-branch" :size="24" color="#507AFE"/>\n  </span>\n  <span class="case-icon">\n    <svg-icon name="aside-pc" :size="24" color="#FF9901"/>\n  </span>\n</template>\n\n<script>\nimport { render } from \'svg-icon.vue/utils/utils\'\nimport SvgIcon from \'svg-icon.vue\'\n\nrender()\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>')])])]},proxy:!0}])})],1)}],t=s(767),c=s(8134),i=s(6105),r={name:"UsageSetColorSection",componentName:"UsageSetColorSection",components:{BaseUsage:t.Z,BaseUsageCase:c.Z,SvgIcon:i.Z}},l=r,p=s(1001),d=(0,p.Z)(l,a,o,!1,null,null,null),u=d.exports},8134:function(e,n,s){s.d(n,{Z:function(){return p}});var a=function(){var e=this,n=e._self._c;return n("div",{class:e.className},[e._t("default")],2)},o=[],t={name:"UsageCaseItem",componentName:"UsageCaseItem",props:{flex:{type:Boolean,default:!1},textAlign:{type:String,default:"left"}},computed:{className(){return["base-usage-case",`util-align-${this.textAlign}`,{"base-usage-case--flex":this.flex}]}}},c=t,i=s(1001),r=(0,i.Z)(c,a,o,!1,null,"28600699",null),l=r.exports;l.install=function(e){e.component(l.name,l)};var p=l},767:function(e,n,s){s.d(n,{Z:function(){return v}});var a=function(){var e=this,n=e._self._c;return n("div",{staticClass:"base-usage"},[n("base-usage-header",{ref:"header"},[e._t("case")],2),n("base-usage-main",{attrs:{expanded:e.folded}},[e.$slots.tips?n("base-usage-tips",{ref:"tips"},[e._t("tips")],2):e._e(),n("base-usage-code",{ref:"code"},[e._t("code")],2)],1),n("base-usage-footer",{ref:"footer",attrs:{folded:e.folded},on:{toggle:e.onToggle}})],1)},o=[];const t=()=>s.e(4784).then(s.bind(s,1381)),c=()=>s.e(8008).then(s.bind(s,3965)),i=()=>s.e(8494).then(s.bind(s,2980)),r=()=>s.e(5557).then(s.bind(s,3247)),l=()=>s.e(8338).then(s.bind(s,9341));var p={name:"BaseUsage",componentName:"BaseUsage",components:{BaseUsageHeader:t,BaseUsageMain:c,BaseUsageCode:i,BaseUsageTips:r,BaseUsageFooter:l},props:{expanded:{type:Boolean,default:!0}},data(){return{folded:!0}},watch:{expanded(){this.update()}},created(){this.update()},methods:{update(){this.folded=!this.expanded},onToggle(){this.folded=!this.folded}}},d=p,u=s(1001),g=(0,u.Z)(d,a,o,!1,null,null,null),_=g.exports;_.install=function(e){e.component(_.name,_)};var v=_}}]);