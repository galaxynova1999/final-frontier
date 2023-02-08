import{_ as s,c as n,o as l,d as a}from"./app.84a20b76.js";const A=JSON.parse('{"title":"300. 最长递增子序列","description":"","frontmatter":{"title":"300. 最长递增子序列"},"headers":[{"level":3,"title":"解题思路：","slug":"解题思路","link":"#解题思路","children":[]},{"level":3,"title":"复杂度分析：","slug":"复杂度分析","link":"#复杂度分析","children":[]},{"level":3,"title":"代码：","slug":"代码","link":"#代码","children":[]}],"relativePath":"algorithm/leetcode/longest-increasing-subsequence.md","lastUpdated":1631613661000}'),p={name:"algorithm/leetcode/longest-increasing-subsequence.md"},o=a(`<div class="tip custom-block"><p class="custom-block-title">原题链接</p><p><a href="https://leetcode-cn.com/problems/longest-increasing-subsequence/" target="_blank" rel="noreferrer">LeetCode 300</a></p></div><h3 id="解题思路" tabindex="-1">解题思路： <a class="header-anchor" href="#解题思路" aria-hidden="true">#</a></h3><ul><li><p><strong>状态定义：</strong></p><ul><li>$dp[i]$ 的值代表 <code>nums</code> 前 $i$ 个数字的最长子序列长度，或者说以第i个数字结尾的最长上升子序列长度</li></ul></li><li><p><strong>转移方程：</strong> 设 $j∈[0,i)$，考虑每轮计算新 $dp[i]$ 时，遍历 $[0,i)$ 列表区间，做以下判断：</p><ol><li><strong>当 $nums[i] &gt; nums[j]$ 时：</strong> 说明$nums[i]$ 可以接在 $nums[j]$ 之后（此题要求严格递增），此情况下最长上升子序列长度为 $dp[j] + 1$ ；</li><li><strong>当 $nums[i] &lt;= nums[j]$ 时：</strong> 说明$nums[i]$ 无法接在 $nums[j]$ 之后，此情况上升子序列不成立，跳过。</li></ol><ul><li>上述所有 <strong>1情况</strong> 下计算出的 $dp[j] + 1$ 的最大值，为直到 $i$ 的最长上升子序列长度（即 $dp[i]$ ）。实现方式为遍历 $j$ 时，每轮执行 $dp[i] = max(dp[i], dp[j] + 1)$。</li><li><strong>转移方程：</strong> <code>dp[i] = max(dp[i], dp[j] + 1) for j in [0, i)</code>。</li></ul></li><li><p><strong>初始状态：</strong></p><ul><li>$dp[i]$ 所有元素置 $1$，含义是每个元素都至少可以单独成为子序列，此时长度都为 $1$。</li></ul></li><li><p><strong>返回值：</strong></p><ul><li>返回 $dp$ 列表最大值，即可得到全局最长上升子序列长度。</li></ul></li></ul><h3 id="复杂度分析" tabindex="-1">复杂度分析： <a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a></h3><ul><li><strong>时间复杂度 $O(N^2)$ ：</strong> 遍历计算 $dp$ 列表需 $O(N)$，计算每个 $dp[i]$ 需 $O(N)$。</li><li><strong>空间复杂度 $O(N)$ ：</strong> $dp$ 列表占用线性大小额外空间。</li></ul><h3 id="代码" tabindex="-1">代码： <a class="header-anchor" href="#代码" aria-hidden="true">#</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">lengthOfLIS</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// dp[i] 代表以第i个数字结尾的最长上升子序列长度</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 状态转移： dp[i] = Max(dp[j]) + 1  (0 &lt;= j &lt;= i)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;font-style:italic;">// 可以接在若干数字后面 但只选能使子序列长度最大的那个</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,7),e=[o];function t(r,c,F,y,i,D){return l(),n("div",null,e)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};
