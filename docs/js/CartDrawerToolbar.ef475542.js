"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[552],{9860:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var o=function(){var e=this,t=e._self._c;return t("base-toolbar",{staticClass:"cart-drawer-toolbar",attrs:{role:"toolbar",flex:"",border:"",padding:"outer",height:"inner"},scopedSlots:e._u([{key:"left",fn:function(){return[t("base-checkbox",{staticClass:"cart-drawer-toolbar__checkbox",attrs:{indeterminate:e.isIndeterminate,disabled:e.disabled},on:{change:e.onCheck},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v(" 全选（"+e._s(e.count)+"） ")])]},proxy:!0},{key:"right",fn:function(){return[t("base-button",{attrs:{type:"text",icon:"import"},on:{click:e.onImport}},[e._v(" 导入 ")]),t("input",{ref:"file",staticClass:"cart-drawer-toolbar__import",attrs:{multiple:"",type:"file",accept:"image/svg+xml"},on:{change:e.onReadFiles}})]},proxy:!0}])})},n=[],i=a(8486),r=a(6674),s=a(954),c={name:"CartDrawerToolbar",componentName:"CartDrawerToolbar",components:{BaseToolbar:i.Z,BaseCheckbox:r.Z,BaseButton:s.Z},props:{isChecked:{type:Boolean,default:!0},selected:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},data(){return{checked:!0}},computed:{disabled(){return 0===this.items.length},count(){return this.selected.length},isIndeterminate(){const e=this.count;return e>0&&e<this.items.length}},watch:{isChecked(){this.update()}},created(){this.update()},methods:{update(){this.checked=this.isChecked},doImport(e,t){const a=/viewBox="(.*?)"/,o=/<title(([\s\S])*?)>(.*?)<\/title>/,n=/(<path(([\s\S])*?)>(.*?)<\/path>)/gi,i=t.match(o),r=i&&i[3]?i[3]:"",s=`icon-${r||e}`,c=t.match(a),l=c&&c[1]?c[1]:"",h=t.match(n),d=`<symbol id="${s}" viewBox="${l}">\n${h.join("\n")}\n</symbol>`;this.$emit("import",d,s)},readFiles(e){let t=0;e.forEach((a=>{const o=new FileReader;o.readAsText(new Blob([a]),"UTF-8"),o.addEventListener("load",(o=>{const n=o.target.result;t+=1,this.doImport(a.name,n),t===e.length&&(this.$refs.file.value="")}))}))},onCheck(){this.$emit("check",this.checked,this.isIndeterminate)},onImport(){this.$refs.file.click()},onReadFiles(e){this.readFiles([...e.target.files])}}},l=c,h=a(1001),d=(0,h.Z)(l,o,n,!1,null,"c9cb392c",null),u=d.exports;u.install=function(e){e.component(u.name,u)};var p=u}}]);