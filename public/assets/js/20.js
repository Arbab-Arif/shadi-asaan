(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{146:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{data:{name:""}}},methods:{submit:function(){var t=this;for(var e in this.data)if(""===this.data[e])return this.$alertify.error("".concat(e," is required")),!1;axios.post("/admin/category",this.data).then((function(){t.$alertify.success("Category Created Successfully!"),setTimeout((function(){window.location.href="/admin/category"}),1e3)})).catch((function(e){if(422===e.response.status)for(var a=0,s=Object.values(e.response.data.errors);a<s.length;a++){var i=s[a];t.$alertify.error(i[0])}}))}}},i=a(0),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("div",{staticClass:"grid grid-cols-12 gap-6 mt-5"},[a("div",{staticClass:"intro-y col-span-12 lg:col-span-12"},[a("div",{staticClass:"intro-y box"},[t._m(1),t._v(" "),a("div",{staticClass:"p-5",attrs:{id:"form-validation"}},[a("div",{staticClass:"preview"},[a("div",{staticClass:"flex flex-wrap -mx-3 mb-2"},[a("div",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0"},[a("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},[t._v("Name\n                                ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"cols-3 input w-full border mt-2",attrs:{type:"text",name:"name",id:"name",placeholder:"Enter John Legend",minlength:"2"},domProps:{value:t.data.name},on:{input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}})])]),t._v(" "),a("button",{staticClass:"button bg-theme-1 text-white mt-5",on:{click:t.submit}},[t._v("Submit")]),t._v(" "),t._m(2)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro-y flex items-center mt-8"},[e("h2",{staticClass:"text-lg font-medium mr-auto"},[this._v("\n            Create Category\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"},[e("h2",{staticClass:"font-medium text-base mr-auto"},[this._v("\n                        Category\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/admin/category"}},[e("button",{staticClass:"button bg-red-600 text-white"},[this._v("Cancel")])])}],!1,null,null,null);e.default=n.exports}}]);