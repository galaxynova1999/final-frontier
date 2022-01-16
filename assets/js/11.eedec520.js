(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{197:function(t,s,a){t.exports=a.p+"assets/img/nullish-coalescing-operator-1.104ef289.png"},357:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("ol",[n("li",[n("p",[t._v("空值合并操作符"),n("code",[t._v("??")]),t._v("是一个逻辑操作符，当左侧的操作数为 "),n("code",[t._v("null")]),t._v("或者"),n("code",[t._v("undefined")]),t._v("时，返回其右侧操作数，否则返回左侧操作数。")]),t._v(" "),n("p",[t._v("例如：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nullValue "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" emptyText "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 空字符串，也是一个假值")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" someNumber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" valA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nullValue "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"valA 的默认值"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" valB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" emptyText "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"valB 的默认值"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" valC "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" someNumber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("valA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "valA 的默认值"')]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("valB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "" (空字符串虽然是假值，但不是 null 或者 undefined)')]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("valC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 42")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("与逻辑或操作符"),n("code",[t._v("||")]),t._v("不同，逻辑或操作符会在左侧操作数为"),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy",target:"_blank",rel:"noopener noreferrer"}},[t._v("假值"),n("OutboundLink")],1),t._v("时返回右侧操作数")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" text "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 42")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hi'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "hi!"')]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("使用逻辑或来赋值一般不会出现问题，但比较特殊的就是数字零，零也是一种假值，所以如果我们非常明确我们就是要在左侧为null或者是undefined的时候赋默认值，那么使用空值合并运算符会更加安全")])]),t._v(" "),n("li",[n("p",[t._v("空值合并运算符与或运算符等一起使用时的运算优先级还暂未定义，所有目前使用时要注意不要与其他运算符连用")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抛出 SyntaxError")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抛出 SyntaxError")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("空值合并运算符具有和或运算符等一样的短路特性")])]),t._v(" "),n("li",[n("p",[t._v("浏览器兼容性")]),t._v(" "),n("p",[n("img",{attrs:{src:a(197),alt:"canIUse"}})]),t._v(" "),n("p",[t._v("目前来说这个特性还比较新，iOS上的safari从13.7才开始支持")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);