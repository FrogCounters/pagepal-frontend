(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{303:function(t,o,e){var content=e(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(40).default)("e2132fe8",content,!0,{sourceMap:!1})},306:function(t,o,e){"use strict";e(303)},307:function(t,o,e){var n=e(39)((function(i){return i[1]}));n.push([t.i,"a[data-v-fd43bfe0]{text-decoration:underline;text-decoration-color:#2fb195}.modal-overlay[data-v-fd43bfe0]{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;background-color:rgba(69,66,66,.8549019607843137)}.modal[data-v-fd43bfe0]{text-align:center;background-color:#fff;height:60vh;width:40vw;min-width:300px;margin-top:10vh;padding:60px 0;border-radius:20px}h6[data-v-fd43bfe0]{font-weight:500;font-size:28px}h6[data-v-fd43bfe0],p[data-v-fd43bfe0]{margin:20px 0}p[data-v-fd43bfe0]{font-size:16px}button[data-v-fd43bfe0]{background:#2fb195}",""]),n.locals={},t.exports=n},315:function(t,o,e){"use strict";e.r(o);var n={name:"Modal",props:{custom_url:{type:String,required:!0}},data:function(){return{has_copied:!1}},methods:{copy:function(){navigator.clipboard.writeText("https://bookpal1.herokuapp.com/book/user/"+this.custom_url),this.has_copied=!0}}},r=(e(306),e(20)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"modal-overlay",on:{click:function(o){return t.$emit("close-modal")}}},[o("div",{staticClass:"modal",on:{click:function(t){t.stopPropagation()}}},[o("h6",[t._v("Saved!")]),t._v(" "),o("p",[t._v("Your Story has been saved!")]),t._v(" "),o("p",[t._v("Book ID: "),o("NuxtLink",{attrs:{to:"/book/user/"+t.custom_url}},[t._v(t._s(t.custom_url))])],1),t._v(" "),o("p",[o("button",{staticClass:"text-white font-bold py-2 px-4 border rounded",on:{click:t.copy}},[t._v(t._s(t.has_copied?"Copied":"Copy"))]),t._v(" "),o("button",{staticClass:"text-white font-bold py-2 px-4 border rounded",on:{click:function(o){return t.$emit("close-modal")}}},[t._v("Close")])])])])}),[],!1,null,"fd43bfe0",null);o.default=component.exports}}]);