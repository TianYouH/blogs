import{i as e,r as t,s as n,t as r}from"./app-DAdNbjbm.js";var i=JSON.parse(`{"path":"/ai/keywords/","title":"关键词说明","lang":"en-US","frontmatter":{},"git":{"updatedTime":1775468409000,"contributors":[{"name":"TianYouH","username":"TianYouH","email":"1406957473@qq.com","commits":1,"url":"https://github.com/TianYouH"}],"changelog":[{"hash":"07204c6d5c46927bf866affc9bcb493e1bda0be6","time":1775468409000,"email":"1406957473@qq.com","author":"TianYouH","message":"docs(ai): 添加AI相关文档及配置"}]},"filePathRelative":"ai/keywords/README.md"}`),a={name:`README.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="关键词说明" tabindex="-1"><a class="header-anchor" href="#关键词说明"><span>关键词说明</span></a></h1><h2 id="起点-大模型语言" tabindex="-1"><a class="header-anchor" href="#起点-大模型语言"><span>起点：大模型语言</span></a></h2><p><strong>大语言模型（LLM, Large Language Model）</strong> 是一种基于深度学习的人工智能系统，核心能力是通过学习海量文本数据，<strong>理解并生成人类语言</strong>。</p><p>以下是通俗易懂的拆解：</p><hr><h3 id="_1-本质-高级-文字接龙-玩家" tabindex="-1"><a class="header-anchor" href="#_1-本质-高级-文字接龙-玩家"><span>1. 本质：高级&quot;文字接龙&quot;玩家</span></a></h3><p>想象一个读过<strong>万亿级文字</strong>（书籍、网页、代码、对话）的&quot;超级学霸&quot;。</p><p>当你输入&quot;今天天气&quot;，它会基于学到的规律，<strong>预测下一个最可能出现的词</strong>：</p><ul><li>&quot;很好&quot;（概率 40%）</li><li>&quot;晴朗&quot;（概率 35%）</li><li>&quot;糟糕&quot;（概率 10%）</li></ul><p>然后不断重复这个过程，生成完整的句子、段落甚至长文章。</p><p><strong>技术术语</strong>：这叫 <strong>&quot;自回归生成&quot;（Auto-regressive Generation）</strong>。</p><hr><h3 id="_2-关键能力-与传统软件的区别" tabindex="-1"><a class="header-anchor" href="#_2-关键能力-与传统软件的区别"><span>2. 关键能力（与传统软件的区别）</span></a></h3><table><thead><tr><th>能力</th><th>传统软件（如SonarQube）</th><th>大语言模型（LLM）</th></tr></thead><tbody><tr><td><strong>理解方式</strong></td><td>基于<strong>固定规则</strong>（正则、配置）</td><td>基于<strong>概率和模式</strong>（模糊理解）</td></tr><tr><td><strong>处理输入</strong></td><td>必须严格格式化（API参数、JSON）</td><td>可以理解<strong>自然语言</strong>（&quot;帮我查昨天的高危漏洞&quot;）</td></tr><tr><td><strong>输出结果</strong></td><td>精确、确定性（0或1）</td><td>概率性、创造性（可能给出意外但合理的答案）</td></tr><tr><td><strong>适应性</strong></td><td>改规则需重部署</td><td>通过提示词（Prompt）即时调整行为</td></tr></tbody></table><hr><h3 id="_3-典型应用场景" tabindex="-1"><a class="header-anchor" href="#_3-典型应用场景"><span>3. 典型应用场景</span></a></h3><ul><li><strong>智能客服/问答</strong>：直接回答技术问题（如解释SonarQube错误）</li><li><strong>代码辅助</strong>：GitHub Copilot、通义灵码（自动生成/补全代码）</li><li><strong>文本分析</strong>：从非结构化文本（如邮件、日志）中提取关键信息</li><li><strong>内容生成</strong>：写文档、生成测试用例、翻译技术文档</li></ul><hr><h3 id="_4-重要局限性-使用须知" tabindex="-1"><a class="header-anchor" href="#_4-重要局限性-使用须知"><span>4. 重要局限性（使用须知）</span></a></h3><ol><li><strong>&quot;幻觉&quot;（Hallucination）</strong>：可能自信地编造不存在的信息（比如虚构一个不存在的SonarQube参数）</li><li><strong>知识截止</strong>：模型训练数据有截止日期（如GPT-4知识截止到2024年初），不知道最新版本特性</li><li><strong>无状态</strong>：每次对话独立，不自动保存上下文（除非程序特别处理）</li><li><strong>计算成本</strong>：相比查数据库，调用LLM API成本高、延迟大（几百毫秒到几秒）</li></ol><hr><h2 id="创造价值-从对话到记忆" tabindex="-1"><a class="header-anchor" href="#创造价值-从对话到记忆"><span>创造价值：从对话到记忆</span></a></h2><h3 id="_1-prompt-提示词-你现在说的话" tabindex="-1"><a class="header-anchor" href="#_1-prompt-提示词-你现在说的话"><span>1. Prompt（提示词）= <strong>你现在说的话</strong></span></a></h3><p>就是<strong>当前的指令或问题</strong>。</p><ul><li>例子：<code>&quot;把这段话翻译成英文&quot;</code>、<code>&quot;我叫张三&quot;</code></li><li>特点：一次性的，说完就完了</li></ul><h3 id="_2-context-上下文-聊天记录" tabindex="-1"><a class="header-anchor" href="#_2-context-上下文-聊天记录"><span>2. Context（上下文）= <strong>聊天记录</strong></span></a></h3><p>就是<strong>本次对话的历史记录</strong>。</p><ul><li>例子：你刚才说&quot;我叫张三&quot;，助手记住了；然后你问&quot;我叫什么&quot;，助手翻看**聊天记录（Context）**回答&quot;张三&quot;</li><li>特点：关窗口就消失，下次打开新对话就清零了</li></ul><h3 id="_3-memory-记忆-备忘录-小本本" tabindex="-1"><a class="header-anchor" href="#_3-memory-记忆-备忘录-小本本"><span>3. Memory（记忆）= <strong>备忘录/小本本</strong></span></a></h3><p>就是<strong>跨会话保存的长期记忆</strong>（通常需要存到数据库）。</p><ul><li>例子：你告诉助手&quot;以后请用正式语气回答我&quot;，助手把这个偏好<strong>写进数据库（Memory）</strong>，下次你开新对话，它还记得用正式语气</li><li>特点：永久保存，除非主动删除</li></ul><hr><h3 id="一句话总结关系" tabindex="-1"><a class="header-anchor" href="#一句话总结关系"><span>一句话总结关系</span></a></h3><blockquote><p><strong>Prompt</strong> 是当前问题，<strong>Context</strong> 是短期记忆（本次聊天），<strong>Memory</strong> 是长期记忆（存硬盘）。</p></blockquote><p><strong>类比流程图：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">你: &quot;我叫张三&quot;（Prompt）→ 助手看 Context（空）→ 回答&quot;你好张三&quot;</span>
<span class="line">你: &quot;我叫什么？&quot;（Prompt）→ 助手看 Context（之前说过叫张三）→ 回答&quot;张三&quot;</span>
<span class="line">[关窗口]</span>
<span class="line">[第二天重开]</span>
<span class="line">你: &quot;我叫什么？&quot;（Prompt）→ 助手看 Context（空的），查 Memory（空的）→ 回答&quot;我不知道&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加工具-智能体的诞生" tabindex="-1"><a class="header-anchor" href="#添加工具-智能体的诞生"><span>添加工具：智能体的诞生</span></a></h2><p>Agent（智能体）</p><ol><li>用户向智能体下达复杂任务</li><li>智能体判断：“我需要LLM大脑，还是外部工具？“</li><li>智能体执行工具和/或调用LLM</li><li>智能体将最终整合的结果返回给用户</li></ol><h3 id="agent-的核心特点" tabindex="-1"><a class="header-anchor" href="#agent-的核心特点"><span>Agent 的核心特点</span></a></h3><ul><li><strong>自主决策</strong>：根据任务自动选择使用工具还是调用LLM</li><li><strong>工具集成</strong>：可以调用多个外部工具（API、数据库、搜索引擎等）</li><li><strong>迭代执行</strong>：支持多轮交互，逐步完成复杂任务</li><li><strong>结果整合</strong>：将多个信息源的结果综合处理后返回给用户</li></ul><p><strong>例子：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">用户: &quot;帮我查一下明天北京的天气，然后告诉我穿什么衣服&quot;</span>
<span class="line">智能体流程:</span>
<span class="line">1. 识别需求：需要天气工具 + LLM建议</span>
<span class="line">2. 调用天气API → 获得&quot;明天北京15°C，有雨&quot;</span>
<span class="line">3. 调用LLM → 基于天气数据生成穿衣建议</span>
<span class="line">4. 返回结果：&quot;明天北京有雨，建议穿长袖+外套&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>一句话结论：Agent 是身体，LLM 是大脑——没有大脑的身体是植物人，没有身体的大脑只能干瞪眼。</strong></p><p>你<strong>不能</strong>不要 LLM，就像你不能让一辆车&quot;包含引擎的一切功能&quot;但却拆掉引擎。</p><hr><h3 id="_1-分层架构-agent-是-壳-llm-是-核" tabindex="-1"><a class="header-anchor" href="#_1-分层架构-agent-是-壳-llm-是-核"><span>1. 分层架构：Agent 是&quot;壳&quot;，LLM 是&quot;核&quot;</span></a></h3><p>从软件架构看，它们的关系是<strong>组合</strong>而非<strong>替代</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">┌─────────────────────────────────────┐</span>
<span class="line">│           Agent（智能体）            │  ← 你写的代码：工具调用、记忆管理、流程控制</span>
<span class="line">│  ┌─────────────────────────────┐    │</span>
<span class="line">│  │      LLM（大语言模型）       │    │  ← 外部API：思考、推理、决策</span>
<span class="line">│  │  · 理解你的指令              │    │</span>
<span class="line">│  │  · 规划执行步骤              │    │</span>
<span class="line">│  │  · 生成代码/参数             │    │</span>
<span class="line">│  └─────────────────────────────┘    │</span>
<span class="line">│  ┌─────────────────────────────┐    │</span>
<span class="line">│  │   Tools（工具集）            │    │  ← Sonar API、数据库、邮件服务</span>
<span class="line">│  └─────────────────────────────┘    │</span>
<span class="line">└─────────────────────────────────────┘</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关键区别：</strong></p><ul><li><strong>Agent 负责&quot;动手&quot;</strong>：调用 API、操作数据库、记录日志</li><li><strong>LLM 负责&quot;动脑&quot;</strong>：理解需求、规划步骤、生成参数</li></ul><p><strong>如果没有 LLM</strong>，你的 Agent 就变成了<strong>传统脚本</strong>：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 没有 LLM 的 &quot;Agent&quot;（其实就是个脚本）</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">传统脚本</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 没有思考能力，只能写死逻辑</span></span>
<span class="line">    <span class="token keyword">const</span> issues <span class="token operator">=</span> <span class="token function">调用SonarAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>issues<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">插入数据库</span><span class="token punctuation">(</span>issues<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 遇到意外情况（API返回新字段、数据格式变了）直接崩溃</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>有了 LLM 的 Agent</strong>：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 真正的 Agent</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">智能Agent</span><span class="token punctuation">(</span><span class="token parameter">用户需求</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// LLM 理解模糊需求</span></span>
<span class="line">    <span class="token keyword">const</span> 执行计划 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token constant">LLM</span><span class="token punctuation">.</span><span class="token function">规划</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        用户说：&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>用户需求<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span>
<span class="line">        请规划执行步骤，考虑异常处理</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// LLM 动态生成代码/参数</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> 步骤 <span class="token keyword">of</span> 执行计划<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>步骤<span class="token punctuation">.</span>类型 <span class="token operator">===</span> <span class="token string">&#39;调用Sonar&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> 参数 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token constant">LLM</span><span class="token punctuation">.</span><span class="token function">生成参数</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">                根据需求提取查询参数：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>用户需求<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> 结果 <span class="token operator">=</span> <span class="token keyword">await</span> SonarAPI<span class="token punctuation">.</span><span class="token function">查询</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// LLM 处理异常（比如新字段）</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>结果<span class="token punctuation">.</span>有未知字段<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">await</span> <span class="token constant">LLM</span><span class="token punctuation">.</span><span class="token function">自适应处理</span><span class="token punctuation">(</span>结果<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_2-为什么-agent-包含-llm-功能-是错觉" tabindex="-1"><a class="header-anchor" href="#_2-为什么-agent-包含-llm-功能-是错觉"><span>2. 为什么 &quot;Agent 包含 LLM 功能&quot; 是错觉？</span></a></h3><p>你觉得&quot;Agent 包含 LLM 的一切&quot;，可能是因为：</p><ul><li>你通过 <strong>Agent 调用</strong> LLM</li><li>Agent <strong>包装</strong>了 LLM 的 API</li><li>最终功能看起来都是&quot;智能回答&quot;</li></ul><p><strong>但剥离 LLM 后，Agent 只是空壳：</strong></p><table><thead><tr><th>功能</th><th>有 LLM 的 Agent</th><th>无 LLM 的 &quot;Agent&quot;（普通程序）</th></tr></thead><tbody><tr><td>理解模糊指令</td><td>✅ &quot;同步最近有问题的代码&quot;</td><td>❌ 只能识别 <code>sync --branch=master --status=OPEN</code> 这种精确命令</td></tr><tr><td>处理意外情况</td><td>✅ API 返回新字段，LLM 自动适应</td><td>❌ 直接崩溃或数据丢失</td></tr><tr><td>多步骤规划</td><td>✅ 自动拆解：查Sonar→分析→写库→发邮件</td><td>❌ 只能按预设死流程执行</td></tr><tr><td>生成动态内容</td><td>✅ 根据数据自动生成分析报告</td><td>❌ 只能填充固定模板</td></tr></tbody></table><hr><h3 id="_3-总结-正确的使用姿势" tabindex="-1"><a class="header-anchor" href="#_3-总结-正确的使用姿势"><span>3. 总结：正确的使用姿势</span></a></h3><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code class="language-markdown"><span class="line">LLM 是大脑 → 负责思考、理解、决策</span>
<span class="line">Agent 是身体 → 负责执行、记忆、协调工具</span>
<span class="line"></span>
<span class="line">关系：Agent 调用 LLM，而非替代 LLM</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rag-检索增强生成" tabindex="-1"><a class="header-anchor" href="#rag-检索增强生成"><span>RAG（检索增强生成）</span></a></h3><h4 id="用一个生活例子理解" tabindex="-1"><a class="header-anchor" href="#用一个生活例子理解"><span>用一个生活例子理解</span></a></h4><p>想象你是一个<strong>参加考试的学生</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">📚 普通 AI (没有RAG)</span>
<span class="line">= 只能用脑子里记住的知识答题</span>
<span class="line">= 知识有截止日期，可能答错或瞎编</span>
<span class="line"></span>
<span class="line">📖 RAG 的 AI  </span>
<span class="line">= 考试时允许带小抄/参考资料</span>
<span class="line">= 先查资料，再结合资料回答</span>
<span class="line">= 答案更准确、更有依据</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="rag-是什么" tabindex="-1"><a class="header-anchor" href="#rag-是什么"><span>RAG 是什么？</span></a></h4><blockquote><p><strong>R</strong>etrieval（检索）<strong>A</strong>ugmented（增强）<strong>G</strong>eneration（生成）</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">简单说就是：</span>
<span class="line"></span>
<span class="line">先去查相关资料  →  再根据资料回答问题</span>
<span class="line"></span>
<span class="line">&quot;有据可查&quot;的 AI 回答方式</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程"><span>工作流程</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">你提问：&quot;我们公司的年假政策是什么？&quot;</span>
<span class="line">         ↓</span>
<span class="line">   🔍 第一步：检索</span>
<span class="line">   AI 去公司文档库搜索</span>
<span class="line">   找到《员工手册第3章：年假规定》</span>
<span class="line">         ↓</span>
<span class="line">   📋 第二步：获取相关内容</span>
<span class="line">   &quot;员工入职满1年可享有10天年假...&quot;</span>
<span class="line">         ↓</span>
<span class="line">   🤖 第三步：生成回答</span>
<span class="line">   AI 结合找到的内容，</span>
<span class="line">   用自然语言组织成完整回答</span>
<span class="line">         ↓</span>
<span class="line">   💬 最终回答：</span>
<span class="line">   &quot;根据公司规定，您入职满1年后</span>
<span class="line">    可以享有10天带薪年假...&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="对比理解" tabindex="-1"><a class="header-anchor" href="#对比理解"><span>对比理解</span></a></h4><table><thead><tr><th></th><th>普通 AI</th><th>RAG</th></tr></thead><tbody><tr><td>知识来源</td><td>训练时学的</td><td>实时查询文档</td></tr><tr><td>知识时效</td><td>有截止日期</td><td>实时最新</td></tr><tr><td>会不会瞎编</td><td>可能会</td><td>较少，有依据</td></tr><tr><td>能否用私有数据</td><td>❌</td><td>✅</td></tr><tr><td>例子</td><td>凭记忆答题</td><td>开卷考试</td></tr></tbody></table><hr><h4 id="真实使用场景" tabindex="-1"><a class="header-anchor" href="#真实使用场景"><span>真实使用场景</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">🏢 企业内部知识库</span>
<span class="line">   员工问：项目A的技术方案是什么？</span>
<span class="line">   AI 查：内部文档 → 准确回答</span>
<span class="line"></span>
<span class="line">📜 法律咨询</span>
<span class="line">   用户问：合同第5条怎么理解？</span>
<span class="line">   AI 查：具体合同内容 → 精准解释</span>
<span class="line"></span>
<span class="line">🏥 医疗问答</span>
<span class="line">   医生问：患者用药有无冲突？</span>
<span class="line">   AI 查：最新药典资料 → 给出建议</span>
<span class="line"></span>
<span class="line">💻 代码助手</span>
<span class="line">   开发问：我们项目怎么调用这个接口？</span>
<span class="line">   AI 查：项目文档/代码 → 给出示例</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="核心价值" tabindex="-1"><a class="header-anchor" href="#核心价值"><span>核心价值</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">解决了 AI 的三大痛点：</span>
<span class="line"></span>
<span class="line">1. 📅 知识过时</span>
<span class="line">   → RAG 可以查最新文档</span>
<span class="line"></span>
<span class="line">2. 🤥 一本正经的胡说八道（幻觉）</span>
<span class="line">   → RAG 基于真实资料回答</span>
<span class="line"></span>
<span class="line">3. 🔒 不了解你的私有数据</span>
<span class="line">   → RAG 可以接入你的私有知识库</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="一句话总结" tabindex="-1"><a class="header-anchor" href="#一句话总结"><span>一句话总结</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">RAG = 给 AI 配了一个&quot;实时搜索引擎&quot;</span>
<span class="line"></span>
<span class="line">让 AI 回答问题之前，</span>
<span class="line">先去你指定的资料库查一查，</span>
<span class="line">再给你一个有据可查的回答</span>
<span class="line"></span>
<span class="line">就像让 AI 从&quot;死记硬背&quot;</span>
<span class="line">升级为&quot;开卷考试&quot; 📖✨</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="function-calling" tabindex="-1"><a class="header-anchor" href="#function-calling"><span>Function Calling</span></a></h3><h4 id="一句话解释" tabindex="-1"><a class="header-anchor" href="#一句话解释"><span>一句话解释</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">给 AI 配了一套&quot;工具&quot;</span>
<span class="line">AI 自己决定什么时候用哪个工具</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生活例子" tabindex="-1"><a class="header-anchor" href="#生活例子"><span>生活例子</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">你有一个超级助理（AI）</span>
<span class="line"></span>
<span class="line">你给他配了几个工具：</span>
<span class="line">🔧 计算器    - 算数学题</span>
<span class="line">🌤️ 天气查询  - 查天气</span>
<span class="line">📅 日历      - 查日程</span>
<span class="line">📧 发邮件    - 发送邮件</span>
<span class="line"></span>
<span class="line">你说：&quot;帮我看看明天天气，</span>
<span class="line">       如果下雨就帮我把户外会议改到室内&quot;</span>
<span class="line"></span>
<span class="line">助理自动：</span>
<span class="line">1. 调用天气工具 → 查明天天气</span>
<span class="line">2. 发现明天下雨</span>
<span class="line">3. 调用日历工具 → 修改会议地点</span>
<span class="line">4. 回复你结果</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="工作流程-1" tabindex="-1"><a class="header-anchor" href="#工作流程-1"><span>工作流程</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">用户提问</span>
<span class="line">   ↓</span>
<span class="line">AI 分析：我需要用什么工具？</span>
<span class="line">   ↓</span>
<span class="line">AI 调用对应工具（函数）</span>
<span class="line">   ↓</span>
<span class="line">获取工具返回结果</span>
<span class="line">   ↓</span>
<span class="line">AI 组织语言回答用户</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码直观感受" tabindex="-1"><a class="header-anchor" href="#代码直观感受"><span>代码直观感受</span></a></h4><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 你提前告诉 AI 有哪些工具可以用</span></span>
<span class="line">tools<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;get_weather&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;查询天气&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;parameters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;城市名&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;send_email&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;发送邮件&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;parameters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;收件人&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;内容&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// AI 自己决定调用哪个</span></span>
<span class="line"><span class="token comment">// AI → 调用 get_weather(city=&quot;北京&quot;)</span></span>
<span class="line"><span class="token comment">// AI → 调用 send_email(to=&quot;xx&quot;, content=&quot;xx&quot;)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="mcp-model-context-protocol" tabindex="-1"><a class="header-anchor" href="#mcp-model-context-protocol"><span>MCP（Model Context Protocol）</span></a></h3><h4 id="一句话解释-1" tabindex="-1"><a class="header-anchor" href="#一句话解释-1"><span>一句话解释</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Function Calling 是给一个 AI 配工具</span>
<span class="line">MCP 是制定了一套标准</span>
<span class="line">让所有 AI 都能用所有工具</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生活例子-1" tabindex="-1"><a class="header-anchor" href="#生活例子-1"><span>生活例子</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">没有 MCP 之前：</span>
<span class="line">😫 每个电器充电口都不一样</span>
<span class="line">   苹果用苹果线</span>
<span class="line">   安卓用安卓线</span>
<span class="line">   相机用相机线</span>
<span class="line">   = 每个 AI 工具都要单独适配</span>
<span class="line"></span>
<span class="line">有了 MCP 之后：</span>
<span class="line">😄 统一用 Type-C 充电口！</span>
<span class="line">   一根线走天下</span>
<span class="line">   = 工具写一次，所有 AI 都能用</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对比理解-1" tabindex="-1"><a class="header-anchor" href="#对比理解-1"><span>对比理解</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Function Calling        MCP</span>
<span class="line">─────────────────      ──────────────────</span>
<span class="line">单个 AI 的工具调用      跨 AI 的工具标准协议</span>
<span class="line">─────────────────      ──────────────────</span>
<span class="line">厂商各自定义格式        统一标准格式</span>
<span class="line">─────────────────      ──────────────────</span>
<span class="line">工具要单独适配          工具写一次到处用</span>
<span class="line">─────────────────      ──────────────────</span>
<span class="line">范围小                  范围更大</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mcp-架构" tabindex="-1"><a class="header-anchor" href="#mcp-架构"><span>MCP 架构</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">        MCP 标准协议</span>
<span class="line">            ↕</span>
<span class="line">  ┌─────────────────────┐</span>
<span class="line">  │    MCP Server        │  ← 提供工具的地方</span>
<span class="line">  │  (工具/数据提供方)    │</span>
<span class="line">  │  - 文件系统          │</span>
<span class="line">  │  - 数据库            │</span>
<span class="line">  │  - 第三方API         │</span>
<span class="line">  └─────────────────────┘</span>
<span class="line">            ↕</span>
<span class="line">        MCP 标准协议</span>
<span class="line">            ↕</span>
<span class="line">  ┌─────────────────────┐</span>
<span class="line">  │    MCP Client        │  ← 使用工具的地方</span>
<span class="line">  │    (AI 应用)         │</span>
<span class="line">  │  - Claude            │</span>
<span class="line">  │  - GPT               │</span>
<span class="line">  │  - 其他AI            │</span>
<span class="line">  └─────────────────────┘</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="两者关系" tabindex="-1"><a class="header-anchor" href="#两者关系"><span>两者关系</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Function Calling 是 MCP 的基础能力</span>
<span class="line"></span>
<span class="line">Function Calling  →  AI 能调用工具</span>
<span class="line">MCP              →  规范了怎么调用工具的标准</span>
<span class="line"></span>
<span class="line">就像：</span>
<span class="line">Function Calling = 汽车能加油这个能力</span>
<span class="line">MCP             = 统一了加油口的标准规格</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="总结对比" tabindex="-1"><a class="header-anchor" href="#总结对比"><span>总结对比</span></a></h4><table><thead><tr><th></th><th>Function Calling</th><th>MCP</th></tr></thead><tbody><tr><td>是什么</td><td>AI调用工具的能力</td><td>工具调用的统一标准</td></tr><tr><td>解决什么</td><td>AI能用外部工具</td><td>工具跨AI复用</td></tr><tr><td>范围</td><td>单个AI应用</td><td>整个AI生态</td></tr><tr><td>类比</td><td>会用工具</td><td>工具接口标准化</td></tr><tr><td>谁提出</td><td>OpenAI</td><td>Anthropic(Claude)</td></tr></tbody></table><hr><h4 id="一句话记忆" tabindex="-1"><a class="header-anchor" href="#一句话记忆"><span>一句话记忆</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Function Calling：</span>
<span class="line">&quot;AI 学会了使用工具&quot; 🔧</span>
<span class="line"></span>
<span class="line">MCP：</span>
<span class="line">&quot;所有 AI 和工具说同一种语言&quot; 🌐</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建工作流-从代码到技能" tabindex="-1"><a class="header-anchor" href="#构建工作流-从代码到技能"><span>构建工作流：从代码到技能</span></a></h2><p>LangChain、Workflow、Skill、纯Agent 简单说明</p><h3 id="先用一个比喻整体理解" tabindex="-1"><a class="header-anchor" href="#先用一个比喻整体理解"><span>先用一个比喻整体理解</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">把 AI 完成任务想象成&quot;做一道复杂的菜&quot;</span>
<span class="line"></span>
<span class="line">Skill      = 单个厨艺技能（切菜、炒菜、摆盘）</span>
<span class="line">Workflow   = 按菜谱一步步做（固定流程）</span>
<span class="line">纯Agent    = 大厨自由发挥（自己决定怎么做）</span>
<span class="line">LangChain  = 厨房里所有工具和设备的集合</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="skill-技能" tabindex="-1"><a class="header-anchor" href="#skill-技能"><span>Skill（技能）</span></a></h3><h4 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么"><span>是什么</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">一个独立的、可复用的单一能力</span>
<span class="line"></span>
<span class="line">就是一个具体会干某件事的模块</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">🔍 搜索技能    - 会搜索网络信息</span>
<span class="line">📝 总结技能    - 会总结文章内容  </span>
<span class="line">🌤️ 天气技能    - 会查天气</span>
<span class="line">💰 计算技能    - 会做数学计算</span>
<span class="line">📧 发邮件技能  - 会发送邮件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">✅ 功能单一</span>
<span class="line">✅ 可以被复用</span>
<span class="line">✅ 像积木一样可以随意组合</span>
<span class="line">❌ 单独使用能力有限</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="提示词-skill打包提示词" tabindex="-1"><a class="header-anchor" href="#提示词-skill打包提示词"><span>提示词 Skill打包提示词</span></a></h4><p>我们刚才的对话已经磨合出了完整的工作流程和输出标准。 请现在将这个过程整理成一个标准的Agent Skill,要求如下: 1.创建完整的Skill文件夹结构 2.SKILL.md写清楚:Skill职责、触发场景、执行步骤、输出标准 3.references放入我们确认过的所有格式要求和内容标准 4.可自动化的步骤写入scripts 5.assets放入需要复用的模板文件 6.在 SKILL.md 中添加版本信息块 输出一个我可以直接安装使用的Skill文件夹</p><h3 id="workflow-工作流" tabindex="-1"><a class="header-anchor" href="#workflow-工作流"><span>Workflow（工作流）</span></a></h3><h4 id="是什么-1" tabindex="-1"><a class="header-anchor" href="#是什么-1"><span>是什么</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">把多个 Skill 按固定顺序串起来</span>
<span class="line">流程是提前定好的，不会变</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子-1" tabindex="-1"><a class="header-anchor" href="#例子-1"><span>例子</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&quot;每天早报生成&quot; Workflow：</span>
<span class="line"></span>
<span class="line">第一步 → 搜索今日新闻</span>
<span class="line">   ↓</span>
<span class="line">第二步 → 筛选重要内容</span>
<span class="line">   ↓</span>
<span class="line">第三步 → AI 总结成摘要</span>
<span class="line">   ↓</span>
<span class="line">第四步 → 发送到邮件/微信</span>
<span class="line"></span>
<span class="line">流程固定，每次都这样走</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1"><span>特点</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">✅ 流程可控、稳定</span>
<span class="line">✅ 结果可预期</span>
<span class="line">✅ 适合固定业务流程</span>
<span class="line">❌ 不灵活，遇到意外不会变通</span>
<span class="line">❌ 流程要人工提前设计好</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="纯-agent" tabindex="-1"><a class="header-anchor" href="#纯-agent"><span>纯 Agent</span></a></h3><h4 id="是什么-2" tabindex="-1"><a class="header-anchor" href="#是什么-2"><span>是什么</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">给 AI 一个目标</span>
<span class="line">AI 自己思考、自己决定怎么做</span>
<span class="line">自己选工具、自己规划步骤</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子-2" tabindex="-1"><a class="header-anchor" href="#例子-2"><span>例子</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">你说：&quot;帮我调研一下竞争对手，</span>
<span class="line">       出一份分析报告&quot;</span>
<span class="line"></span>
<span class="line">Agent 自己思考：</span>
<span class="line">🤔 我需要做什么？</span>
<span class="line">   ↓</span>
<span class="line">1. 先搜索竞争对手信息      ← 自己决定</span>
<span class="line">   ↓</span>
<span class="line">2. 发现需要看他们官网      ← 自己决定</span>
<span class="line">   ↓</span>
<span class="line">3. 抓取官网内容分析        ← 自己决定</span>
<span class="line">   ↓</span>
<span class="line">4. 对比数据整理成表格      ← 自己决定</span>
<span class="line">   ↓</span>
<span class="line">5. 生成分析报告            ← 自己决定</span>
<span class="line"></span>
<span class="line">全程 AI 自主规划，不需要人指定步骤</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特点-2" tabindex="-1"><a class="header-anchor" href="#特点-2"><span>特点</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">✅ 非常灵活</span>
<span class="line">✅ 能处理复杂、未知的任务</span>
<span class="line">❌ 结果不可控</span>
<span class="line">❌ 可能走弯路，消耗多</span>
<span class="line">❌ 有时会&quot;乱来&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="langchain" tabindex="-1"><a class="header-anchor" href="#langchain"><span>LangChain</span></a></h3><h4 id="是什么-3" tabindex="-1"><a class="header-anchor" href="#是什么-3"><span>是什么</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">不是一种模式</span>
<span class="line">而是一个开发框架/工具库</span>
<span class="line"></span>
<span class="line">帮你快速构建上面三种东西的工具集合</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="包含什么" tabindex="-1"><a class="header-anchor" href="#包含什么"><span>包含什么</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">LangChain 工具箱里有：</span>
<span class="line"></span>
<span class="line">🔗 Chain       - 帮你串联多个步骤（Workflow）</span>
<span class="line">🤖 Agent       - 帮你构建自主 Agent</span>
<span class="line">📚 RAG 工具    - 帮你做知识库检索</span>
<span class="line">🔧 Tools       - 各种预置 Skill 工具</span>
<span class="line">💾 Memory      - 帮 AI 记住上下文</span>
<span class="line">📋 Prompt 管理 - 管理提示词模板</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类比" tabindex="-1"><a class="header-anchor" href="#类比"><span>类比</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">LangChain 就像：</span>
<span class="line"></span>
<span class="line">盖房子时的&quot;建筑工具包&quot;</span>
<span class="line">砖头、水泥、脚手架都帮你准备好了</span>
<span class="line">你专注设计房子就行</span>
<span class="line"></span>
<span class="line">而不是你自己去造砖头</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="四者对比总结" tabindex="-1"><a class="header-anchor" href="#四者对比总结"><span>四者对比总结</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">复杂度 &amp; 灵活度</span>
<span class="line"></span>
<span class="line">Skill          最简单，单一能力</span>
<span class="line">  ↓</span>
<span class="line">Workflow       固定流程，多个Skill组合</span>
<span class="line">  ↓</span>
<span class="line">纯Agent        自主决策，高度灵活</span>
<span class="line">  ↓</span>
<span class="line">LangChain      构建以上三种的框架工具</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th></th><th>Skill</th><th>Workflow</th><th>纯Agent</th><th>LangChain</th></tr></thead><tbody><tr><td>是什么</td><td>单一技能</td><td>固定流程</td><td>自主决策</td><td>开发框架</td></tr><tr><td>灵活性</td><td>⭐</td><td>⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>-</td></tr><tr><td>可控性</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td><td>⭐⭐</td><td>-</td></tr><tr><td>适合场景</td><td>单一功能</td><td>固定业务</td><td>复杂未知任务</td><td>快速开发</td></tr><tr><td>类比</td><td>单个技能</td><td>菜谱流程</td><td>大厨自由发挥</td><td>厨房设备</td></tr></tbody></table><hr><h3 id="实际怎么选" tabindex="-1"><a class="header-anchor" href="#实际怎么选"><span>实际怎么选？</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">任务简单固定          →  用 Skill</span>
<span class="line">──────────────────────────────────</span>
<span class="line">流程清晰可预期        →  用 Workflow</span>
<span class="line">──────────────────────────────────</span>
<span class="line">任务复杂、不确定      →  用 纯Agent</span>
<span class="line">──────────────────────────────────</span>
<span class="line">想快速搭建以上任何一种 →  用 LangChain</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="一句话记忆-1" tabindex="-1"><a class="header-anchor" href="#一句话记忆-1"><span>一句话记忆</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Skill      → AI 的一个具体技能 🔧</span>
<span class="line">Workflow   → AI 按剧本演出 📋</span>
<span class="line">纯Agent    → AI 自由发挥 🤖</span>
<span class="line">LangChain  → 搭建AI应用的工具箱 🧰</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局视角-本质与未来" tabindex="-1"><a class="header-anchor" href="#全局视角-本质与未来"><span>全局视角：本质与未来</span></a></h2><p>“智能体，是由所有‘不需要智能’的部分构成的”</p>`,164)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};