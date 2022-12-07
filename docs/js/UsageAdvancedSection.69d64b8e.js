"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[1523],{5948:function(e,n,s){s.r(n),s.d(n,{default:function(){return h}});var a=function(){var e=this;e._self._c;return e._m(0)},o=[function(){var e=this,n=e._self._c;return n("section",{staticClass:"article__section"},[n("h2",{staticClass:"article__h2"},[e._v("高级用法")]),n("p",[e._v(" 如果 SvgIcon 组件自带的图标没有您需要的，SvgIcon 组件还支持使用 render() 方法添加自定义的图标集，方法如下。 ")]),n("h3",{staticClass:"article__h3"},[e._v("导入外部文件中的图标集")]),n("base-usage",{scopedSlots:e._u([{key:"case",fn:function(){return[n("base-usage-case",[n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"fa-asterisk",size:24}})],1),n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"fa-plus",size:24}})],1),n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"fa-glass",size:24}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[e._v(" 使用 import 导入外部 .js 文件中的自定义的组件集，然后使用 render() 方法绘制图标集。 ")]},proxy:!0},{key:"code",fn:function(){return[n("pre",{staticClass:"base-usage-code__pre"},[n("code",{staticClass:"base-usage-code__code"},[e._v('<template>\n  <span class="case-icon">\n    <svg-icon name="fa-asterisk" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="fa-plus" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="fa-glass" :size="24" />\n  </span>\n</template>\n\n<script>\nimport SvgIcon from \'svg-icon.vue\'\n\nimport { render } from \'svg-icon.vue/utils/utils\'\n// 导入自带的 Font Awesome 图标集，当然也可以导入任何你拥有的图标集\nimport fontAwesomeSet from \'svg-icon.vue/assets/font-awesome\'\n\nrender(fontAwesomeSet)\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>')])])]},proxy:!0}])}),n("h3",{staticClass:"article__h3"},[e._v("导入对象中的图标集")]),n("base-usage",{scopedSlots:e._u([{key:"case",fn:function(){return[n("base-usage-case",[n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"moon-home",size:24}})],1),n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"moon-home2",size:24}})],1),n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"moon-home3",size:24}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[e._v(" render() 可以直接绘制 JavaScript 对象数据中的图标集。 ")]},proxy:!0},{key:"code",fn:function(){return[n("pre",{staticClass:"base-usage-code__pre"},[n("code",{staticClass:"base-usage-code__code"},[e._v('<template>\n  <span class="case-icon">\n    <svg-icon name="moon-home" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="moon-home2" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="moon-home3" :size="24" />\n  </span>\n</template>\n\n<script>\n<script>\nimport SvgIcon from \'svg-icon.vue\'\nimport { render } from \'svg-icon.vue/utils/utils\'\n\nconst icoMoonSet = {\n  title: \'icoMoon 图标集\',\n  symbols: [\n    \'<symbol id="icon-moon-home" viewBox="0 0 16 16"><path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path></symbol>\',\n    \'<symbol id="icon-moon-home2" viewBox="0 0 16 16"><path d="M8 0.5l-8 8 1.5 1.5 1.5-1.5v6.5h4v-3h2v3h4v-6.5l1.5 1.5 1.5-1.5-8-8zM8 7c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></symbol>\',\n    \'<symbol id="icon-moon-home3" viewBox="0 0 16 16"><path d="M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"></path></symbol>\'\n  ]\n}\n\n// 绘制自定义图标集\nrender(icoMoonSet)\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>')])])]},proxy:!0}])})],1)}],t=s(767),i=s(8134),c=s(6105);const l={title:"icoMoon 图标集",symbols:['<symbol id="icon-moon-home" viewBox="0 0 16 16"><path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path></symbol>','<symbol id="icon-moon-home2" viewBox="0 0 16 16"><path d="M8 0.5l-8 8 1.5 1.5 1.5-1.5v6.5h4v-3h2v3h4v-6.5l1.5 1.5 1.5-1.5-8-8zM8 7c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></symbol>','<symbol id="icon-moon-home3" viewBox="0 0 16 16"><path d="M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"></path></symbol>']};var r=l,p=s(2648);(0,p.s)(r);var d={name:"UsageAdvancedSection",componentName:"UsageAdvancedSection",components:{BaseUsage:t.Z,BaseUsageCase:i.Z,SvgIcon:c.Z}},v=d,m=s(1001),u=(0,m.Z)(v,a,o,!1,null,null,null),h=u.exports},8134:function(e,n,s){s.d(n,{Z:function(){return p}});var a=function(){var e=this,n=e._self._c;return n("div",{class:e.className},[e._t("default")],2)},o=[],t={name:"UsageCaseItem",componentName:"UsageCaseItem",props:{flex:{type:Boolean,default:!1},textAlign:{type:String,default:"left"}},computed:{className(){return["base-usage-case",`util-align-${this.textAlign}`,{"base-usage-case--flex":this.flex}]}}},i=t,c=s(1001),l=(0,c.Z)(i,a,o,!1,null,"28600699",null),r=l.exports;r.install=function(e){e.component(r.name,r)};var p=r},767:function(e,n,s){s.d(n,{Z:function(){return h}});var a=function(){var e=this,n=e._self._c;return n("div",{staticClass:"base-usage"},[n("base-usage-header",{ref:"header"},[e._t("case")],2),n("base-usage-main",{attrs:{expanded:e.folded}},[e.$slots.tips?n("base-usage-tips",{ref:"tips"},[e._t("tips")],2):e._e(),n("base-usage-code",{ref:"code"},[e._t("code")],2)],1),n("base-usage-footer",{ref:"footer",attrs:{folded:e.folded},on:{toggle:e.onToggle}})],1)},o=[];const t=()=>s.e(4784).then(s.bind(s,1381)),i=()=>s.e(8008).then(s.bind(s,3965)),c=()=>s.e(8494).then(s.bind(s,2980)),l=()=>s.e(5557).then(s.bind(s,3247)),r=()=>s.e(8338).then(s.bind(s,9341));var p={name:"BaseUsage",componentName:"BaseUsage",components:{BaseUsageHeader:t,BaseUsageMain:i,BaseUsageCode:c,BaseUsageTips:l,BaseUsageFooter:r},props:{expanded:{type:Boolean,default:!0}},data(){return{folded:!0}},watch:{expanded(){this.update()}},created(){this.update()},methods:{update(){this.folded=!this.expanded},onToggle(){this.folded=!this.folded}}},d=p,v=s(1001),m=(0,v.Z)(d,a,o,!1,null,null,null),u=m.exports;u.install=function(e){e.component(u.name,u)};var h=u}}]);