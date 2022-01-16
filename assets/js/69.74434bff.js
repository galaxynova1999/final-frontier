(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{269:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("原题链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/longest-increasing-subsequence/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeetCode 300"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"解题思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("状态定义：")])]),t._v(" "),s("ul",[s("li",[s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp[i]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mord mathdefault"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v(" 的值代表 "),s("code",[t._v("nums")]),t._v(" 前 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("i")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("i")])])])])]),t._v(" 个数字的最长子序列长度，或者说以第i个数字结尾的最长上升子序列长度")],1)])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("转移方程：")]),t._v(" 设 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("j")]),s("mo",[t._v("∈")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mn",[t._v("0")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("j∈[0,i)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.85396em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[t._v("∈")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord"},[t._v("0")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("，考虑每轮计算新 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp[i]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mord mathdefault"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v(" 时，遍历 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mn",[t._v("0")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("[0,i)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord"},[t._v("0")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" 列表区间，做以下判断：")],1),t._v(" "),s("ol",[s("li",[s("strong",[t._v("当 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mi",[t._v("s")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",[t._v(">")]),s("mi",[t._v("n")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mi",[t._v("s")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("nums[i] > nums[j]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mord mathdefault"},[t._v("u")]),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mord mathdefault"},[t._v("s")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[t._v(">")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mord mathdefault"},[t._v("u")]),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mord mathdefault"},[t._v("s")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v(" 时：")],1),t._v(" 说明"),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mi",[t._v("s")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("nums[i]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mord mathdefault"},[t._v("u")]),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mord mathdefault"},[t._v("s")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v(" 可以接在 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mi",[t._v("s")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("nums[j]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mord mathdefault"},[t._v("u")]),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mord mathdefault"},[t._v("s")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v(" 之后（此题要求严格递增），此情况下最长上升子序列长度为 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",[t._v("+")]),s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp[j] + 1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mord mathdefault"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("1")])])])])]),t._v(" ；")],1),t._v(" "),s("li",[s("strong",[t._v("当 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mi",[t._v("s")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",[t._v("<")]),s("mo",[t._v("=")]),s("mi",[t._v("n")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mi",[t._v("s")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("nums[i] <= nums[j]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mord mathdefault"},[t._v("u")]),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mord mathdefault"},[t._v("s")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[t._v("<")])]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mord mathdefault"},[t._v("u")]),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mord mathdefault"},[t._v("s")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v(" 时：")],1),t._v(" 说明"),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mi",[t._v("s")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("nums[i]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mord mathdefault"},[t._v("u")]),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mord mathdefault"},[t._v("s")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v(" 无法接在 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mi",[t._v("s")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("nums[j]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mord mathdefault"},[t._v("u")]),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mord mathdefault"},[t._v("s")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v(" 之后，此情况上升子序列不成立，跳过。")],1)]),t._v(" "),s("ul",[s("li",[t._v("上述所有 "),s("strong",[t._v("1情况")]),t._v(" 下计算出的 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",[t._v("+")]),s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp[j] + 1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mord mathdefault"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("1")])])])])]),t._v(" 的最大值，为直到 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("i")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("i")])])])])]),t._v(" 的最长上升子序列长度（即 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp[i]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mord mathdefault"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v(" ）。实现方式为遍历 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("j")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("j")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.85396em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])])]),t._v(" 时，每轮执行 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",[t._v("=")]),s("mi",[t._v("m")]),s("mi",[t._v("a")]),s("mi",[t._v("x")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",[t._v("+")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp[i] = max(dp[i], dp[j] + 1)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mord mathdefault"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mord mathdefault"},[t._v("a")]),s("span",{staticClass:"mord mathdefault"},[t._v("x")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mord mathdefault"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mord mathdefault"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("。")],1),t._v(" "),s("li",[s("strong",[t._v("转移方程：")]),t._v(" "),s("code",[t._v("dp[i] = max(dp[i], dp[j] + 1) for j in [0, i)")]),t._v("。")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("初始状态：")])]),t._v(" "),s("ul",[s("li",[s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp[i]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mord mathdefault"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v(" 所有元素置 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("1")])])])])]),t._v("，含义是每个元素都至少可以单独成为子序列，此时长度都为 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("1")])])])])]),t._v("。")],1)])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("返回值：")])]),t._v(" "),s("ul",[s("li",[t._v("返回 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mord mathdefault"},[t._v("p")])])])])]),t._v(" 列表最大值，即可得到全局最长上升子序列长度。")],1)])])]),t._v(" "),s("h3",{attrs:{id:"复杂度分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析"}},[t._v("#")]),t._v(" 复杂度分析：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("时间复杂度 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("msup",[s("mi",[t._v("N")]),s("mn",[t._v("2")])],1),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(N^2)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1.064108em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[t._v("2")])])])])])])])]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" ：")],1),t._v(" 遍历计算 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mord mathdefault"},[t._v("p")])])])])]),t._v(" 列表需 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("N")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(N)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("，计算每个 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp[i]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mord mathdefault"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v(" 需 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("N")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(N)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("。")],1),t._v(" "),s("li",[s("strong",[t._v("空间复杂度 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("N")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(N)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" ：")],1),t._v(" "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mord mathdefault"},[t._v("p")])])])])]),t._v(" 列表占用线性大小额外空间。")],1)]),t._v(" "),s("h3",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lengthOfLIS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("nums "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dp[i] 代表以第i个数字结尾的最长上升子序列长度")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 状态转移： dp[i] = Max(dp[j]) + 1  (0 <= j <= i)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以接在若干数字后面 但只选能使子序列长度最大的那个")]),t._v("\n              dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);