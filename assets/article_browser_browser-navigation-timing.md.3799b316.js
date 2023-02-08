import{_ as e,c as n,o as a,d as t}from"./app.84a20b76.js";const s="/final-frontier/assets/navigation-timing.9dbc2868.png",v=JSON.parse('{"title":"浏览器Navigation Timing API","description":"","frontmatter":{"title":"浏览器Navigation Timing API"},"headers":[{"level":2,"title":"浏览器页面导航事件图","slug":"浏览器页面导航事件图","link":"#浏览器页面导航事件图","children":[]},{"level":2,"title":"Navigation Timing Level 1 (已过时)","slug":"navigation-timing-level-1-已过时","link":"#navigation-timing-level-1-已过时","children":[{"level":3,"title":"navigationStart","slug":"navigationstart","link":"#navigationstart","children":[]},{"level":3,"title":"unloadEventStart","slug":"unloadeventstart","link":"#unloadeventstart","children":[]},{"level":3,"title":"unloadEventEnd","slug":"unloadeventend","link":"#unloadeventend","children":[]},{"level":3,"title":"redirectStart","slug":"redirectstart","link":"#redirectstart","children":[]},{"level":3,"title":"redirectEnd","slug":"redirectend","link":"#redirectend","children":[]},{"level":3,"title":"fetchStart","slug":"fetchstart","link":"#fetchstart","children":[]},{"level":3,"title":"domainLookupStart","slug":"domainlookupstart","link":"#domainlookupstart","children":[]},{"level":3,"title":"domainLookupEnd","slug":"domainlookupend","link":"#domainlookupend","children":[]},{"level":3,"title":"connectStart","slug":"connectstart","link":"#connectstart","children":[]},{"level":3,"title":"connectEnd","slug":"connectend","link":"#connectend","children":[]},{"level":3,"title":"secureConnectionStart","slug":"secureconnectionstart","link":"#secureconnectionstart","children":[]},{"level":3,"title":"requestStart","slug":"requeststart","link":"#requeststart","children":[]},{"level":3,"title":"responseStart","slug":"responsestart","link":"#responsestart","children":[]},{"level":3,"title":"responseEnd","slug":"responseend","link":"#responseend","children":[]},{"level":3,"title":"domLoading","slug":"domloading","link":"#domloading","children":[]},{"level":3,"title":"domInteractive","slug":"dominteractive","link":"#dominteractive","children":[]},{"level":3,"title":"domContentLoadedEventStart","slug":"domcontentloadedeventstart","link":"#domcontentloadedeventstart","children":[]},{"level":3,"title":"domContentLoadedEventEnd","slug":"domcontentloadedeventend","link":"#domcontentloadedeventend","children":[]},{"level":3,"title":"domComplete","slug":"domcomplete","link":"#domcomplete","children":[]},{"level":3,"title":"loadEventStart","slug":"loadeventstart","link":"#loadeventstart","children":[]},{"level":3,"title":"loadEventEnd","slug":"loadeventend","link":"#loadeventend","children":[]}]},{"level":2,"title":"Navigation Timing Level 2","slug":"navigation-timing-level-2","link":"#navigation-timing-level-2","children":[]}],"relativePath":"article/browser/browser-navigation-timing.md","lastUpdated":1633355423000}'),o={name:"article/browser/browser-navigation-timing.md"},l=t('<div class="tip custom-block"><p class="custom-block-title">原文链接</p><p><a href="https://w3c.github.io/navigation-timing/#dom-performancenavigationtiming" target="_blank" rel="noreferrer">W3C</a></p></div><h2 id="浏览器页面导航事件图" tabindex="-1">浏览器页面导航事件图 <a class="header-anchor" href="#浏览器页面导航事件图" aria-hidden="true">#</a></h2><p><img src="'+s+`" alt="events"></p><h2 id="navigation-timing-level-1-已过时" tabindex="-1">Navigation Timing Level 1 (已过时) <a class="header-anchor" href="#navigation-timing-level-1-已过时" aria-hidden="true">#</a></h2><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[Exposed=Window]</span></span>
<span class="line"><span style="color:#A6ACCD;">interface PerformanceTiming {</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long navigationStart;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long unloadEventStart;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long unloadEventEnd;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long redirectStart;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long redirectEnd;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long fetchStart;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long domainLookupStart;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long domainLookupEnd;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long connectStart;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long connectEnd;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long secureConnectionStart;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long requestStart;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long responseStart;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long responseEnd;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long domLoading;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long domInteractive;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long domContentLoadedEventStart;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long domContentLoadedEventEnd;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long domComplete;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long loadEventStart;</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly attribute unsigned long long loadEventEnd;</span></span>
<span class="line"><span style="color:#A6ACCD;">  [Default] object toJSON();</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="navigationstart" tabindex="-1">navigationStart <a class="header-anchor" href="#navigationstart" aria-hidden="true">#</a></h3><p>该属性将在卸载前一个页面后立即返回时间。如果是在空白页面打开的，则返回当前页面的创建时间</p><h3 id="unloadeventstart" tabindex="-1">unloadEventStart <a class="header-anchor" href="#unloadeventstart" aria-hidden="true">#</a></h3><p>如果前一个页面和当前页面同源，则返回前一个页面卸载事件开始的时间；如果没有前一个页面，或者 两个页面不同源，则返回 <code>0</code></p><h3 id="unloadeventend" tabindex="-1">unloadEventEnd <a class="header-anchor" href="#unloadeventend" aria-hidden="true">#</a></h3><p>如果前一个页面和当前页面同源，则返回前一个页面卸载事件结束的时间；如果没有前一个页面，或者 两个页面不同源，或者前一个页面的卸载事件还未结束，则返回 <code>0</code></p><p>如果导航时存在<code>HTTP重定向</code>，且<strong>不是</strong>所有的重定向都是同源的，则<code>PerformanceTiming.unloadEventStart</code>和<code>PerformanceTiming.unloadEventEnd</code> 都返回 <code>0</code></p><h3 id="redirectstart" tabindex="-1">redirectStart <a class="header-anchor" href="#redirectstart" aria-hidden="true">#</a></h3><p>如果导航时存在<code>HTTP重定向</code>，且<strong>所有</strong>的重定向都是同源的，则此属性返回获取(<code>fetch</code>)重定向开始的时间，否则返回<code>0</code></p><h3 id="redirectend" tabindex="-1">redirectEnd <a class="header-anchor" href="#redirectend" aria-hidden="true">#</a></h3><p>如果导航时存在<code>HTTP重定向</code>，且<strong>所有</strong>的重定向都是同源的，则返回接收到最后一个重定向请求的最后一个字节的时间，否则返回<code>0</code></p><h3 id="fetchstart" tabindex="-1">fetchStart <a class="header-anchor" href="#fetchstart" aria-hidden="true">#</a></h3><p>如果指向的新的页面资源需要使用<code>GET</code>请求去获取的话，这个属性将返回浏览器开始检查缓存(也就是检查浏览器缓存)是否命中的时间 ，否则，返回浏览器发起请求的开始时间。</p><h3 id="domainlookupstart" tabindex="-1">domainLookupStart <a class="header-anchor" href="#domainlookupstart" aria-hidden="true">#</a></h3><p>该属性返回浏览器开始进行DNS解析的时间。如果命中了缓存（非DNS缓存），或者是长连接，则返回和<code>fetchStart</code>一样的时间</p><h3 id="domainlookupend" tabindex="-1">domainLookupEnd <a class="header-anchor" href="#domainlookupend" aria-hidden="true">#</a></h3><p>该属性返回浏览器结束DNS解析的时间。如果命中了缓存(非DNS缓存)，或者是长连接，则返回和<code>fetchStart</code>一样的时间</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果浏览器从各种缓存中取到了DNS信息(浏览器本身的缓存、操作系统缓存、hosts文件等), 则上述两个属性表示了 浏览器开始读取缓存以及读取结束的时间</p></div><h3 id="connectstart" tabindex="-1">connectStart <a class="header-anchor" href="#connectstart" aria-hidden="true">#</a></h3><p>该属性返回浏览器建立连接的开始时间，如果命中了缓存(浏览器缓存)，或者是长连接，则返回和<code>domainLookupEnd</code>一样的时间</p><h3 id="connectend" tabindex="-1">connectEnd <a class="header-anchor" href="#connectend" aria-hidden="true">#</a></h3><p>该属性返回浏览器建立连接的结束时间，如果命中了缓存(浏览器缓存)，或者是长连接，则返回和<code>domainLookupEnd</code>一样的时间</p><p>如果连接建立失败，并且浏览器重发了连接请求，<code>PerformanceTiming.connectStart</code> 和 <code>PerformanceTiming.connectEnd</code> 返回新连接对应的值</p><p><code>PerformanceTiming.connectEnd</code>包括建立传输连接的时间以及其他时间，如<code>SSL</code>握手时间以及<code>SOCKS</code>身份验证时间</p><h3 id="secureconnectionstart" tabindex="-1">secureConnectionStart <a class="header-anchor" href="#secureconnectionstart" aria-hidden="true">#</a></h3><p>该属性时可选的。如果当前页面是<code>HTTPS</code>安全连接， 则返回浏览器开始<code>HTTPS</code>握手的时间，否则返回<code>0</code></p><h3 id="requeststart" tabindex="-1">requestStart <a class="header-anchor" href="#requeststart" aria-hidden="true">#</a></h3><p>此属性必须返回浏览器开始从服务器、缓存或本地资源请求当前文档的时间。</p><p>如果在发送请求后传输连接失败，并且浏览器重新建立连接并重发了请求， <code>PerformanceTiming.requestStart</code>应该返回新请求的相应值。</p><h3 id="responsestart" tabindex="-1">responseStart <a class="header-anchor" href="#responsestart" aria-hidden="true">#</a></h3><p>此属性返回浏览器从服务器、缓存或本地资源接收到响应的第一个字节后的时间。</p><h3 id="responseend" tabindex="-1">responseEnd <a class="header-anchor" href="#responseend" aria-hidden="true">#</a></h3><p>此属性返回的是，浏览器接收到当前文档的最后一个字节的时间，或者传输连接关闭的时间，取两者中的较小值。</p><h3 id="domloading" tabindex="-1">domLoading <a class="header-anchor" href="#domloading" aria-hidden="true">#</a></h3><p>返回浏览器将当前文档状态设置成<code>loading</code>的时间点</p><h3 id="dominteractive" tabindex="-1">domInteractive <a class="header-anchor" href="#dominteractive" aria-hidden="true">#</a></h3><p>返回浏览器将当前文档状态设置成<code>interactive</code>（可交互）的时间点</p><h3 id="domcontentloadedeventstart" tabindex="-1">domContentLoadedEventStart <a class="header-anchor" href="#domcontentloadedeventstart" aria-hidden="true">#</a></h3><p>返回浏览器触发<code>DOMContentLoaded</code>事件执行的时间点</p><h3 id="domcontentloadedeventend" tabindex="-1">domContentLoadedEventEnd <a class="header-anchor" href="#domcontentloadedeventend" aria-hidden="true">#</a></h3><p>返回<code>DOMContentLoaded</code>事件执行完成的时间点</p><h3 id="domcomplete" tabindex="-1">domComplete <a class="header-anchor" href="#domcomplete" aria-hidden="true">#</a></h3><p>返回浏览器将当前文档状态设置成<code>complete</code>的时间点</p><h3 id="loadeventstart" tabindex="-1">loadEventStart <a class="header-anchor" href="#loadeventstart" aria-hidden="true">#</a></h3><p>返回浏览器触发<code>onload</code>事件执行的时间点，否则为0</p><h3 id="loadeventend" tabindex="-1">loadEventEnd <a class="header-anchor" href="#loadeventend" aria-hidden="true">#</a></h3><p>返回<code>onload</code>事件执行完成的时间点</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>浏览器加载转圈结束的时间点为<code>loadEventEnd</code></p></div><h2 id="navigation-timing-level-2" tabindex="-1">Navigation Timing Level 2 <a class="header-anchor" href="#navigation-timing-level-2" aria-hidden="true">#</a></h2><p>TBD</p>`,55),r=[l];function d(i,c,p,h,u,g){return a(),n("div",null,r)}const b=e(o,[["render",d]]);export{v as __pageData,b as default};
