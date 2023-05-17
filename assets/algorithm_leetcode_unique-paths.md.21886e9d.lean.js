import{_ as n,c as t,o as e,V as l,C as s,a}from"./chunks/framework.4bc1d7e5.js";const _=JSON.parse('{"title":"62. 不同路径","description":"","frontmatter":{"title":"62. 不同路径"},"headers":[],"relativePath":"algorithm/leetcode/unique-paths.md","filePath":"algorithm/leetcode/unique-paths.md","lastUpdated":1633712417000}'),p={name:"algorithm/leetcode/unique-paths.md"},o=l("",2),c=s("p",null,[a("我们用 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{separator:"true"},","),s("mi",null,"j"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f(i, j)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mclose"},")")])])]),a(" 表示从左上角走到 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{separator:"true"},","),s("mi",null,"j"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"(i, j)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mclose"},")")])])]),a(" 的路径数量，其中 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i")]),s("annotation",{encoding:"application/x-tex"},"i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.65952em","vertical-align":"0em"}}),s("span",{class:"mord mathnormal"},"i")])])]),a(" 和 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"j")]),s("annotation",{encoding:"application/x-tex"},"j")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.85396em","vertical-align":"-0.19444em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j")])])]),a(" 的范围分别是 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"["),s("mn",null,"0"),s("mo",{separator:"true"},","),s("mi",null,"m"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"[0, m)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mclose"},")")])])]),a(" 和 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"["),s("mn",null,"0"),s("mo",{separator:"true"},","),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"[0, n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a("。")],-1),r=s("p",null,[a("由于我们每一步只能从向下或者向右移动一步，因此要想走到 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{separator:"true"},","),s("mi",null,"j"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"(i, j)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mclose"},")")])])]),a("，如果向下走一步，那么会从 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{separator:"true"},","),s("mi",null,"j"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"(i-1, j)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mclose"},")")])])]),a(" 走过来；如果向右走一步，那么会从 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{separator:"true"},","),s("mi",null,"j"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"(i, j-1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),a(" 走过来。因此我们可以写出动态规划转移方程：")],-1),m=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{separator:"true"},","),s("mi",null,"j"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{separator:"true"},","),s("mi",null,"j"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{separator:"true"},","),s("mi",null,"j"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f(i, j) = f(i-1, j) + f(i, j-1) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])])],-1),i=s("p",null,[a("需要注意的是，如果 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"},"i=0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.65952em","vertical-align":"0em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.64444em","vertical-align":"0em"}}),s("span",{class:"mord"},"0")])])]),a("，那么 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{separator:"true"},","),s("mi",null,"j"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f(i-1,j)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mclose"},")")])])]),a(" 并不是一个满足要求的状态，我们需要忽略这一项；同理，如果 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"j"),s("mo",null,"="),s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"},"j=0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.85396em","vertical-align":"-0.19444em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.64444em","vertical-align":"0em"}}),s("span",{class:"mord"},"0")])])]),a("，那么 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{separator:"true"},","),s("mi",null,"j"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f(i,j-1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),a(" 并不是一个满足要求的状态，我们需要忽略这一项。")],-1),h=s("p",null,[a("初始条件为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mn",null,"0"),s("mo",{separator:"true"},","),s("mn",null,"0"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"f(0,0)=1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord"},"0"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.64444em","vertical-align":"0em"}}),s("span",{class:"mord"},"1")])])]),a("，即从左上角走到左上角有一种方法。")],-1),y=s("p",null,[a("最终的答案即为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{separator:"true"},","),s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f(m-1,n-1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8388800000000001em","vertical-align":"-0.19444em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),a("。")],-1),u=s("h3",{id:"细节",tabindex:"-1"},[a("细节 "),s("a",{class:"header-anchor",href:"#细节","aria-label":'Permalink to "细节"'},"​")],-1),F=s("p",null,[a("为了方便代码编写，我们可以将所有的 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mn",null,"0"),s("mo",{separator:"true"},","),s("mi",null,"j"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f(0, j)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mclose"},")")])])]),a(" 以及 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{separator:"true"},","),s("mn",null,"0"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f(i, 0)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),s("span",{class:"mord"},"0"),s("span",{class:"mclose"},")")])])]),a(" 都设置为边界条件，它们的值均为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.64444em","vertical-align":"0em"}}),s("span",{class:"mord"},"1")])])]),a("。")],-1),g=l("",2),d=[o,c,r,m,i,h,y,u,F,g];function D(C,x,A,w,b,f){return e(),t("div",null,d)}const M=n(p,[["render",D]]);export{_ as __pageData,M as default};
