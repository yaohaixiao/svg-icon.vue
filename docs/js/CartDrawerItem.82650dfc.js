"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[6752],{9292:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var s=function(){var t=this,e=t._self._c;return e("li",{class:["cart-drawer-item",{"is-empty":t.isEmpty}],attrs:{"data-index":t.id},on:{dragenter:t.dragEnter,dragover:t.dragOver,dragleave:t.dragLeave,drop:t.dragDrop,dragend:t.dragEnd}},[t._t("default",(function(){return[e("div",{staticClass:"cart-drawer-item__inner",attrs:{draggable:"true"},on:{dragstart:t.dragStart,drag:t.drag}},[e("div",{staticClass:"cart-drawer-item__draggable"},[e("svg-icon",{attrs:{name:"drag",size:20}})],1),e("div",{staticClass:"cart-drawer-item__checkbox"},[e("base-checkbox",{on:{change:t.onCheck},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1),e("div",{staticClass:"cart-drawer-item__icon"},[e("svg-icon",{attrs:{name:t.name,size:32}})],1),e("div",{staticClass:"cart-drawer-item__meta"},[e("h3",{staticClass:"cart-drawer-item__title"},[t._v(" "+t._s(t.name)+" "),t.buildIn?t._e():e("base-tag",{attrs:{type:"success",size:"small"}},[t._v(" 导入 ")])],1),e("dl",{staticClass:"cart-drawer-item__dl"},[e("dt",{staticClass:"cart-drawer-item__dt"},[t._v("宽：")]),e("dd",{staticClass:"cart-drawer-item__dd"},[t._v(t._s(t.width))]),e("dt",{staticClass:"cart-drawer-item__dt"},[t._v("高：")]),e("dd",{staticClass:"cart-drawer-item__dd"},[t._v(t._s(t.height))]),e("dt",{staticClass:"cart-drawer-item__dt"},[t._v("viewBox：")]),e("dd",{staticClass:"cart-drawer-item__dd"},[t._v(" "+t._s(`0 0 ${t.size.width} ${t.size.height}`)+" ")])])]),e("div",{staticClass:"cart-drawer-item__delete",on:{click:t.onDelete}},[e("svg-icon",{attrs:{name:"trash",size:20}})],1)])]}))],2)},r=[],i=a(6105);const d=(t,e)=>{if(!e)return!1;if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(a){return!1}return!1},n=t=>t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode,c=(t,e,a,s)=>{if(t){a=a||document;do{if(null!=e&&(">"===e[0]?t.parentNode===a&&d(t,e):d(t,e))||s&&t===a)return t;if(t===a)break}while(t=n(t))}return null},o=()=>a.e(3722).then(a.bind(a,6674)),l=()=>a.e(7218).then(a.bind(a,9147)),h="cart-drawer-item",m=`${h}_over`,u=`${h}_dragging`;var g={name:"CartDrawerItem",componentName:"CartDrawerItem",components:{BaseCheckbox:o,BaseTag:l,SvgIcon:i.Z},props:{index:{type:Number,default:0},symbol:{type:String,default:""},isChecked:{type:Boolean,default:!1},isBuildIn:{type:Boolean,default:!0},isEmpty:{type:Boolean,default:!1}},data(){return{id:0,checked:!1,buildIn:!0,item:""}},computed:{name(){const t=this.item.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},size(){const t=this.item.match(/viewBox="0 0 (.*?)"/)[1].split(" ");let e=0,a=0;return t&&(e=t[0]?parseInt(t[0],10):0,a=t[1]?parseInt(t[1],10):0),{width:e,height:a}},width(){const{width:t}=this.size;return t>200?200:t},height(){const{height:t}=this.size;return t>200?200:t}},watch:{index(){this.update()},symbol(){this.update()},isChecked(){this.update()},isBuiltIn(){this.update()}},created(){this.update()},methods:{update(){this.id=this.index,this.item=this.symbol,this.checked=this.isChecked,this.buildIn=this.isBuildIn},dragStart(t){const e=t.target,a=c(e,`.${h}`,this.$el,!0),s=a.cloneNode(!0);a.classList.add(u),s.id="drag-drawer-item-ghost",s.classList.add("cart-drawer-item--ghost"),document.body.appendChild(s),t.dataTransfer.setDragImage(s,0,0),this.$emit("dragstart",a.getAttribute("data-index"))},drag(t){const e=document.querySelector("#drag-drawer-item-ghost");e.style.top=`${t.pageY}px`,e.style.left=`${t.pageX}px`,t.dataTransfer.dropEffect="move",t.dataTransfer.effectAllowed="move"},dragEnter(t){const e=c(t.target,`.${h}`,this.$el,!0);t.preventDefault(),e.classList.add(m)},dragOver(t){const e=c(t.target,`.${h}`,this.$el,!0);t.preventDefault(),e.classList.add(m)},dragLeave(t){const e=c(t.target,`.${h}`,this.$el,!0);e.classList.remove(m)},dragDrop(t){const e=c(t.target,`.${h}`,this.$el,!0);e.classList.remove(m),this.$emit("drop",e.getAttribute("data-index"))},dragEnd(t){const e=document.querySelector("#drag-drawer-item-ghost"),a=c(t.target,`.${h}`,this.$el,!0);a.classList.remove(u),e&&e.parentNode.removeChild(e),this.$emit("dragend")},onCheck(){this.$emit("check",{id:this.id,symbol:this.item,checked:this.checked,name:this.name})},onDelete(){this.$emit("delete",{id:this.id,symbol:this.item,name:this.name,isBuildIn:this.buildIn})}}},_=g,p=a(1001),v=(0,p.Z)(_,s,r,!1,null,"131ba4a5",null),w=v.exports;w.install=function(t){t.component(w.name,w)};var f=w}}]);