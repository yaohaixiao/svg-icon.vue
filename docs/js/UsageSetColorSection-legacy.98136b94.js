"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[420],{2577:function(n,s,e){e.r(s),e.d(s,{default:function(){return _}});var a=function(){var n=this,s=n._self._c;return s("section",{staticClass:"article__section"},[s("h2",{staticClass:"article__h2"},[n._v("设置颜色")]),s("p",[n._v(" SvgIcon 组件既可以使用包含 icon 的父节点设置 CSS 样式控制图标颜色，也可以直接设置 color 属性设置颜色。 ")]),s("h3",{staticClass:"article__h3"},[n._v("通过 CSS 设置颜色")]),s("base-usage",{scopedSlots:n._u([{key:"case",fn:function(){return[s("base-usage-case",[s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"database-read",size:24}})],1),s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"database-lock",size:24}})],1),s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"plugins",size:24}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[n._v(" 通过设置 SvgIcon 父组件的 CSS 颜色，SvgIcon 组件的图标颜色将其父元素 case-icon 的 color 值一致。 ")]},proxy:!0},{key:"code",fn:function(){return[s("pre",{staticClass:"base-usage-code__pre"},[s("code",{staticClass:"base-usage-code__code"},[n._v('<template>\n  <span class="case-icon">\n    <svg-icon name="database-read" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="database-lock" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="plugins" :size="24" />\n  </span>\n</template>\n\n<script>\nimport { render } from \'svg-icon.vue/utils/utils\'\nimport SvgIcon from \'svg-icon.vue\'\n\nrender()\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>')])])]},proxy:!0}])}),s("h3",{staticClass:"article__h3"},[n._v("通过 color 属性设置颜色")]),s("base-usage",{scopedSlots:n._u([{key:"case",fn:function(){return[s("base-usage-case",[s("span",{staticClass:"base-usage-case__cell"},[s("svg-icon",{attrs:{name:"aside-environment",size:24,color:"#07B759"}})],1),s("span",{staticClass:"base-usage-case__cell"},[s("svg-icon",{attrs:{name:"aside-branch",size:24,color:"#507AFE"}})],1),s("span",{staticClass:"base-usage-case__cell"},[s("svg-icon",{attrs:{name:"aside-pc",size:24,color:"#FF9901"}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[n._v(" 设置 color 属性后，SvgIcon 的父组件通过 CSS 设置的 color 样式将不再起作用。 ")]},proxy:!0},{key:"code",fn:function(){return[s("pre",{staticClass:"base-usage-code__pre"},[s("code",{staticClass:"base-usage-code__code"},[n._v('<template>\n  <span class="case-icon">\n    <svg-icon name="aside-environment" :size="24" color="#07B759"/>\n  </span>\n  <span class="case-icon">\n    <svg-icon name="aside-branch" :size="24" color="#507AFE"/>\n  </span>\n  <span class="case-icon">\n    <svg-icon name="aside-pc" :size="24" color="#FF9901"/>\n  </span>\n</template>\n\n<script>\nimport { render } from \'svg-icon.vue/utils/utils\'\nimport SvgIcon from \'svg-icon.vue\'\n\nrender()\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>')])])]},proxy:!0}])})],1)},c=[],o=(e(1539),e(8783),e(3948),e(7515)),i=e(8134),t=function(){return e.e(27).then(e.bind(e,9126))},r={name:"UsageSetColorSection",componentName:"UsageSetColorSection",components:{BaseUsage:o.Z,BaseUsageCase:i.Z,SvgIcon:t}},l=r,p=e(1001),u=(0,p.Z)(l,a,c,!1,null,"1b7b5c4e",null),_=u.exports}}]);