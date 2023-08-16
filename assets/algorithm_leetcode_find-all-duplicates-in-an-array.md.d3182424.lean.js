import{_ as n,o as l,c as t,k as s,a,X as e}from"./chunks/framework.cc6e947e.js";const k=JSON.parse('{"title":"442. 数组中重复的数据","description":"","frontmatter":{"title":"442. 数组中重复的数据"},"headers":[],"relativePath":"algorithm/leetcode/find-all-duplicates-in-an-array.md","filePath":"algorithm/leetcode/find-all-duplicates-in-an-array.md","lastUpdated":1684324492000}'),p={name:"algorithm/leetcode/find-all-duplicates-in-an-array.md"},o=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"原题链接"),s("p",null,[s("a",{href:"https://leetcode.cn/problems/find-all-duplicates-in-an-array/",target:"_blank",rel:"noreferrer"},"LeetCode")])],-1),c=s("p",null,[s("strong",null,"思路与算法")],-1),m=s("p",null,[a("我们也可以给 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",{mathvariant:"italic"},"nums"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\textit{nums}[i]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")]),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]")])])]),a(" 加上「负号」表示数 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"i+1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.74285em","vertical-align":"-0.08333em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.64444em","vertical-align":"0em"}}),s("span",{class:"mord"},"1")])])]),a(" 已经出现过一次。具体地，我们首先对数组进行一次遍历。当遍历到位置 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i")]),s("annotation",{encoding:"application/x-tex"},"i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.65952em","vertical-align":"0em"}}),s("span",{class:"mord mathnormal"},"i")])])]),a(" 时，我们考虑 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",{mathvariant:"italic"},"nums"),s("mo",{stretchy:"false"},"["),s("mtext",{mathvariant:"italic"},"nums"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\textit{nums}[\\textit{nums}[i] - 1]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")]),s("span",{class:"mopen"},"["),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")]),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"]")])])]),a(" 的正负性：")],-1),r=s("ul",null,[s("li",null,[s("p",null,[a("如果 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",{mathvariant:"italic"},"nums"),s("mo",{stretchy:"false"},"["),s("mtext",{mathvariant:"italic"},"nums"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\textit{nums}[\\textit{nums}[i] - 1]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")]),s("span",{class:"mopen"},"["),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")]),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"]")])])]),a(" 是正数，说明 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",{mathvariant:"italic"},"nums"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\textit{nums}[i]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")]),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]")])])]),a(" 还没有出现过，我们将 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",{mathvariant:"italic"},"nums"),s("mo",{stretchy:"false"},"["),s("mtext",{mathvariant:"italic"},"nums"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\textit{nums}[\\textit{nums}[i] - 1]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")]),s("span",{class:"mopen"},"["),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")]),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"]")])])]),a(" 加上负号；")])]),s("li",null,[s("p",null,[a("如果 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",{mathvariant:"italic"},"nums"),s("mo",{stretchy:"false"},"["),s("mtext",{mathvariant:"italic"},"nums"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\textit{nums}[\\textit{nums}[i] - 1]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")]),s("span",{class:"mopen"},"["),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")]),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"]")])])]),a(" 是负数，说明 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",{mathvariant:"italic"},"nums"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\textit{nums}[i]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")]),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]")])])]),a(" 已经出现过一次，我们将 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",{mathvariant:"italic"},"nums"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\textit{nums}[i]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")]),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]")])])]),a(" 放入答案。")])])],-1),i=s("p",null,[s("strong",null,"细节")],-1),h=s("p",null,[a("由于 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",{mathvariant:"italic"},"nums"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\textit{nums}[i]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")]),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]")])])]),a(" 本身可能已经为负数，因此在将 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",{mathvariant:"italic"},"nums"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\textit{nums}[i]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")]),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]")])])]),a(" 作为下标或者放入答案时，需要取绝对值。")],-1),y=s("p",null,[s("strong",null,"复杂度分析")],-1),u=s("ul",null,[s("li",null,[s("p",null,[a("时间复杂度："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a("。我们只需要对数组 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",{mathvariant:"italic"},"nums")]),s("annotation",{encoding:"application/x-tex"},"\\textit{nums}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.43056em","vertical-align":"0em"}}),s("span",{class:"mord text"},[s("span",{class:"mord textit"},"nums")])])])]),a(" 进行一次遍历。")])]),s("li",null,[s("p",null,[a("空间复杂度："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),a("。返回值不计入空间复杂度。")])])],-1),x=e("",1),d=[o,c,m,r,i,h,y,u,x];function F(g,D,w,C,b,A){return l(),t("div",null,d)}const M=n(p,[["render",F]]);export{k as __pageData,M as default};