import{_ as n,p as s,q as a,a1 as e}from"./framework-8fa3e4ce.js";const l={},i=e(`<h1 id="shell编程" tabindex="-1"><a class="header-anchor" href="#shell编程" aria-hidden="true">#</a> shell编程</h1><h2 id="case-语句" tabindex="-1"><a class="header-anchor" href="#case-语句" aria-hidden="true">#</a> case 语句</h2><ul><li>检查、判断变量的取值 <ul><li>效果类似于多分支的if语句</li><li>如果与预设的值相匹配，则执行对应的操作</li><li>命令序列最后必须以“双分号”结尾</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">case</span> 变量 <span class="token keyword">in</span>
模式1<span class="token punctuation">)</span>
  命令学列1<span class="token punctuation">;</span><span class="token punctuation">;</span>
模式2<span class="token punctuation">)</span>
  命令学列2<span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token punctuation">..</span> <span class="token punctuation">..</span>
*<span class="token punctuation">)</span>
  默认命令序列 <span class="token comment"># 最后一个命令序列“双分号”结尾可选</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：判断用户输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#!\\bin\\bash</span>
<span class="token comment"># 输入h返回huang,输入j返回jin,输入其它返回用法。</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入h|j:&quot;</span> key
<span class="token keyword">case</span> <span class="token variable">$key</span> <span class="token keyword">in</span>
h<span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;huang.&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
j<span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;jin.&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;必须输入h或j.&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell-函数" tabindex="-1"><a class="header-anchor" href="#shell-函数" aria-hidden="true">#</a> shell 函数</h2><p>在shell环境中，将一些需要重复使用的操作，定义为公共的语句块，即可称为函数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> 函数名 <span class="token punctuation">{</span>
  命令序列
  <span class="token punctuation">..</span> <span class="token punctuation">..</span>
<span class="token punctuation">}</span>

函数名<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  命令序列
  <span class="token punctuation">..</span> <span class="token punctuation">..</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 声明</span>
<span class="token function-name function">imsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;你好世界&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;函数测试&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment"># 调用</span>
imsg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数传递参数" tabindex="-1"><a class="header-anchor" href="#函数传递参数" aria-hidden="true">#</a> 函数传递参数</h3><ul><li>调用已定义的函数 <ul><li>格式：函数名</li></ul></li><li>函数传值 <ul><li>格式：函数名 值1 值2 .. ..</li><li>传递的值作为函数的&quot;位置参数&quot;</li></ul></li></ul><p>示例：加法器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">add</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span><span class="token variable">$1</span>+<span class="token variable">$2</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token function">add</span> <span class="token number">2</span> <span class="token number">5</span> <span class="token comment"># 7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：输入颜色</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">cecho</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[<span class="token variable">$1m</span><span class="token variable">$2</span><span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token punctuation">}</span>
cecho <span class="token number">31</span> 你好帅 <span class="token comment"># 你好帅</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数-相关关键字" tabindex="-1"><a class="header-anchor" href="#函数-相关关键字" aria-hidden="true">#</a> 函数 相关关键字</h3><ul><li>&amp;：使用&amp;符号，将函数执行后放入后台执行。</li><li>wait：等待所有后台进程结束后退出脚本。</li></ul><blockquote><p>下方有示例</p></blockquote><h2 id="中断与退出" tabindex="-1"><a class="header-anchor" href="#中断与退出" aria-hidden="true">#</a> 中断与退出</h2><ul><li>continue：可以结束单次循环</li><li>break：可以结束循环体</li><li>exit：可以退出脚本</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># continue</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">do</span>
  <span class="token punctuation">[</span> <span class="token variable">$i</span> <span class="token parameter variable">-eq</span> <span class="token number">3</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">continue</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> over <span class="token comment"># 1 2 4 5 over</span>

<span class="token comment"># break</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">do</span>
  <span class="token punctuation">[</span> <span class="token variable">$i</span> <span class="token parameter variable">-eq</span> <span class="token number">3</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">break</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> over <span class="token comment"># 1 2 over</span>

<span class="token comment"># exit</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">do</span>
  <span class="token punctuation">[</span> <span class="token variable">$i</span> <span class="token parameter variable">-eq</span> <span class="token number">3</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> over <span class="token comment"># 1 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>下方有示例</p></blockquote><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="判断用户输入-case-语句" tabindex="-1"><a class="header-anchor" href="#判断用户输入-case-语句" aria-hidden="true">#</a> 判断用户输入（case 语句）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#!\\bin\\bash</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Are you sure?[y/n]:&quot;</span> sure
<span class="token keyword">case</span> <span class="token variable">$sure</span> <span class="token keyword">in</span>
y<span class="token operator">|</span>Y<span class="token operator">|</span><span class="token function">yes</span><span class="token operator">|</span>YES<span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;你输入 <span class="token variable">$sure</span>,好的&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
n<span class="token operator">|</span>N<span class="token operator">|</span>no<span class="token operator">|</span>NO<span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;你输入 <span class="token variable">$sure</span>,结束&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;error.&quot;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="石头剪刀布-case-语句" tabindex="-1"><a class="header-anchor" href="#石头剪刀布-case-语句" aria-hidden="true">#</a> 石头剪刀布（case 语句）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#!\\bin\\bash</span>

<span class="token assign-left variable">game</span><span class="token operator">=</span><span class="token punctuation">(</span>石头 剪刀 布<span class="token punctuation">)</span>
<span class="token assign-left variable">num</span><span class="token operator">=</span>$<span class="token punctuation">[</span>README%3<span class="token punctuation">]</span>
<span class="token assign-left variable">computer</span><span class="token operator">=</span><span class="token variable">\${game<span class="token punctuation">[</span>$sum<span class="token punctuation">]</span>}</span>
<span class="token comment"># 通过随机数获取计算机的出拳</span>
<span class="token comment"># 出拳的可能性保存在一个数组中</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;请根据下列提示选择您的出拳手势&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;1.石头&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;2.剪刀&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;3.布&quot;</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请选择1-3:&quot;</span> person
<span class="token keyword">case</span> <span class="token variable">$person</span> <span class="token keyword">in</span>
<span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$sum</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;平局&quot;</span>
  <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$sum</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;你赢了&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;你输了&quot;</span>
  <span class="token keyword">fi</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$sum</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;你输了&quot;</span>
  <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$sum</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;平局&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;你赢了&quot;</span>
  <span class="token keyword">fi</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$sum</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;你赢了&quot;</span>
  <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$sum</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;你输了&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;平局&quot;</span>
  <span class="token keyword">fi</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;乖宝宝，听话，别瞎输入值&quot;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="石头剪刀布-shell-函数" tabindex="-1"><a class="header-anchor" href="#石头剪刀布-shell-函数" aria-hidden="true">#</a> 石头剪刀布（shell 函数）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token function-name function">myping</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">ping</span> <span class="token parameter variable">-c3</span> <span class="token parameter variable">-i0.2</span> <span class="token parameter variable">-W1</span> <span class="token variable">$1</span> <span class="token operator">&amp;&gt;</span>/dev/null
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> is up&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> is down&quot;</span>
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">254</span><span class="token punctuation">}</span>
<span class="token keyword">do</span>
  myping <span class="token string">&quot;192.168.1.<span class="token variable">$i</span>&quot;</span> <span class="token operator">&amp;</span> <span class="token comment"># 使用&amp;符号，将函数执行后放入后台执行。</span>
<span class="token keyword">done</span>
<span class="token function">wait</span> <span class="token comment"># wait等待所有后台进程结束后退出脚本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="机选双色球-中断与退出" tabindex="-1"><a class="header-anchor" href="#机选双色球-中断与退出" aria-hidden="true">#</a> 机选双色球（中断与退出）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 红球1~33，6组，不可重复</span>
<span class="token comment"># 蓝球1~16，1组</span>

<span class="token assign-left variable">red_ball</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
<span class="token assign-left variable">blue_ball</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>

<span class="token comment"># 每选一个号码，通过+=的方式存储到变量中</span>
<span class="token comment"># 通过 grep 判断新机选的红色号码是否已经存在，-w选项过滤单词</span>

<span class="token keyword">while</span> <span class="token builtin class-name">:</span>
<span class="token keyword">do</span>
  <span class="token function">clear</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;__机选双色球__&quot;</span>
  <span class="token assign-left variable">tmp</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token environment constant">RANDOM</span>%33+1<span class="token punctuation">]</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$red_ball</span>&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-w</span> <span class="token variable">$tmp</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">continue</span>
  <span class="token assign-left variable">red_ball</span><span class="token operator">+=</span><span class="token string">&quot; <span class="token variable">$tmp</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-en</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[91m<span class="token variable">$red_ball</span><span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
  <span class="token assign-left variable">word</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$red_ball</span>&quot;</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-w</span><span class="token variable">)</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$word</span> <span class="token parameter variable">-eq</span> <span class="token number">6</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token assign-left variable">blue_ball</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token environment constant">RANDOM</span>%16+1<span class="token punctuation">]</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[34m <span class="token variable">$blue_ball</span><span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
    <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
  <span class="token function">sleep</span> <span class="token number">0.5</span>
<span class="token keyword">done</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),p=[i];function t(c,o){return s(),a("div",null,p)}const r=n(l,[["render",t],["__file","shell编程.html.vue"]]);export{r as default};
