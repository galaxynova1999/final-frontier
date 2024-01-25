import{_ as n,c as l,o as h,V as a,m as s,a as i}from"./chunks/framework.NjhEB-Lt.js";const F=JSON.parse('{"title":"88. 合并两个有序数组","description":"","frontmatter":{"title":"88. 合并两个有序数组"},"headers":[],"relativePath":"algorithm/leetcode/merge-sorted-array.md","filePath":"algorithm/leetcode/merge-sorted-array.md","lastUpdated":1632328687000}'),t={name:"algorithm/leetcode/merge-sorted-array.md"},e=a("",2),p=s("ul",null,[s("li",null,"核心：从后向前数组遍历"),s("li",null,[i("因为 "),s("code",null,"nums1"),i(" 的空间都集中在后面，所以从后向前处理排序的数据会更好，节省空间，一边遍历一边将值填充进去")]),s("li",null,[i("设置指针 "),s("code",null,"len1"),i(" 和 "),s("code",null,"len2"),i(" 分别指向 "),s("code",null,"nums1"),i(" 和 "),s("code",null,"nums2"),i(" 的有值的尾部，从尾部值开始比较遍历，同时设置指针 "),s("code",null,"len"),i(" 指向 "),s("code",null,"nums1"),i(" 的数组末尾，每次遍历比较值大小之后，进行填充")]),s("li",null,[i("当 "),s("code",null,"len1 < 0"),i(" 时遍历结束，此时 "),s("code",null,"nums2"),i(" 中如果还有数据未移动，将其直接拷贝到 "),s("code",null,"nums1"),i(" 的最前面，最后得到结果数组")]),s("li",null,[i("时间复杂度："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,"+"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(m+n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])])],-1),k=a("",2),r=[e,p,k];function d(E,c,g,y,m,o){return h(),l("div",null,r)}const A=n(t,[["render",d]]);export{F as __pageData,A as default};