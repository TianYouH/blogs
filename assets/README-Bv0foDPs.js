import{i as e,r as t,s as n,t as r}from"./app-DAdNbjbm.js";var i=JSON.parse(`{"path":"/dev/git/","title":"Git常用命令","lang":"en-US","frontmatter":{},"git":{"updatedTime":1693832846000,"contributors":[{"name":"LAPTOP-CRCIOU48\\\\hjl","username":"","email":"1406957473@qq.com","commits":5},{"name":"DESKTOP-ER5718D\\\\zt","username":"","email":"huangjinliang@zto.com","commits":4}],"changelog":[{"hash":"f3cc3b6e6e94d780bdac21883188e42a23867387","time":1693832846000,"email":"1406957473@qq.com","author":"LAPTOP-CRCIOU48\\\\hjl","message":"feat: 更新git文档"},{"hash":"5cc1286a12bf7a3858ae40c8cefe020120ad4d4e","time":1649390998000,"email":"1406957473@qq.com","author":"LAPTOP-CRCIOU48\\\\hjl","message":"feat: 更新 dev git 文档"},{"hash":"a6e568bc05a52d6107a959080147ca8a49b806c8","time":1640854209000,"email":"huangjinliang@zto.com","author":"DESKTOP-ER5718D\\\\zt","message":"更新 git 文档"},{"hash":"759efdf1a0878e230702c673d3d5740dc3843b5d","time":1640779857000,"email":"huangjinliang@zto.com","author":"DESKTOP-ER5718D\\\\zt","message":"更新git 文档"},{"hash":"d528f3d4e514be614d3b7f64dc1cd90caf863dc0","time":1640588423000,"email":"huangjinliang@zto.com","author":"DESKTOP-ER5718D\\\\zt","message":"feat:  提交 git 更新"},{"hash":"e508e7bb07fba042d618d65c99591ef8e54e1e88","time":1631691898000,"email":"huangjinliang@zto.com","author":"DESKTOP-ER5718D\\\\zt","message":"feat(开发): 提交vscode C环境配置"},{"hash":"1c1487fe46d1ea7a08842ea35a3ae4b581b6dbb3","time":1617192442000,"email":"1406957473@qq.com","author":"LAPTOP-CRCIOU48\\\\hjl","message":"feat: 更新文档"},{"hash":"2e512803a608c6eada77c32112d43a7182254dc2","time":1615453157000,"email":"1406957473@qq.com","author":"LAPTOP-CRCIOU48\\\\hjl","message":"提交 git 使用基础文档"},{"hash":"97e2deb073a4e06814d19656db9aa626d99f33ce","time":1615013169000,"email":"1406957473@qq.com","author":"LAPTOP-CRCIOU48\\\\hjl","message":"feat: 提交Git Commit message 和 Change log 验证配置日志"}]},"filePathRelative":"dev/git/README.md"}`),a={name:`README.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="git常用命令" tabindex="-1"><a class="header-anchor" href="#git常用命令"><span>Git常用命令</span></a></h1><p>你好世界</p><h3 id="关键字符" tabindex="-1"><a class="header-anchor" href="#关键字符"><span>关键字符</span></a></h3><ul><li><p>HEAD</p><pre><code>HEAD 是一个对当前检出记录的符号引用 —— 也就是指向你正在其基础上进行工作的提交记录。
HEAD 总是指向当前分支上最近一次提交记录。大多数修改提交树的 Git 命令都是从改变 HEAD 的指向开始的。
</code></pre></li><li><p>^</p><pre><code>向上移动 1 个提交记录;
例子：git checkout main^; git checkout HEAD^;
</code></pre></li><li><p>~[number]</p><pre><code>向上移动多个提交记录，如 ~3
git checkout main~3; git checkout HEAD~5;
</code></pre></li></ul><h3 id="创建仓库命令" tabindex="-1"><a class="header-anchor" href="#创建仓库命令"><span>创建仓库命令</span></a></h3><ul><li><p>git init</p><pre><code>初始化仓库
</code></pre></li><li><p>git clone</p><pre><code>拷贝一份远程仓库，也就是下载一个项目。
</code></pre></li></ul><h3 id="提交与修改" tabindex="-1"><a class="header-anchor" href="#提交与修改"><span>提交与修改</span></a></h3><ul><li><p>git add</p><pre><code>提交暂存区到仓库区
</code></pre></li><li><p>git status</p><pre><code>查看仓库当前的状态，显示有变更的文件。
</code></pre></li><li><p>git diff</p><pre><code>比较文件的不同，即暂存区和工作区的差异。
</code></pre></li><li><p>git commit</p><pre><code>-m [message]                      # 提交暂存区到仓库区
[file1] [file2] ... -m [message]  # 提交暂存区的指定文件到仓库区
</code></pre></li><li><p>git rm</p><pre><code>删除工作区文件
</code></pre></li><li><p>git mv</p><pre><code>移动或重命名工作区文件。
</code></pre></li></ul><h3 id="基础命令" tabindex="-1"><a class="header-anchor" href="#基础命令"><span>基础命令</span></a></h3><ul><li><p>git branch</p><pre><code>                                  # 列出所有本地分支
-r                                # 列出所有远程分支
-a                                # 列出所有本地分支和远程分支
-f [barnch] [target-branch]       # 强制修改分支指向位置
[branch-name]                     # 新建一个分支，但依然停留在当前分支
[branch] [commit]                 # 新建一个分支，指向指定commit
--track [branch] [remote-branch]  # 新建一个分支，与指定的远程分支建立追踪关系
</code></pre></li><li><p>git checkout</p><pre><code>-b [branch]                       # 新建一个分支，并切换到该分支
[branch-name]                     # 切换到指定分支，并更新工作区
-                                 # 切换到上一个分支
-b [branch] [tag]                 # 新建一个分支，指向某个tag
</code></pre></li><li><p>git merge</p><pre><code>[branch]                          # 合并指定分支到当前分支
[branch] --no-ff                  # 不使用fast-forward方式合并，保留分支的commit历史
[branch] --squash                 # 使用squash方式合并，把多次分支commit历史压缩为一次
</code></pre></li><li><p>git rebase</p><pre><code>[branch]                          # 将当前所在分支工作移动到目标分支
[branch] [target-branch]          # 将target分支，移动到指定分支,并切换到target分支
-i [target-node]                  # 重构选中提交节点（顺序、移除、合并）详情见示例区
</code></pre></li></ul><blockquote><p><a href="https://www.cnblogs.com/xueweihan/p/5743327.html" target="_blank" rel="noopener noreferrer">merge和rebase的区别</a></p></blockquote><h3 id="撤销变更" tabindex="-1"><a class="header-anchor" href="#撤销变更"><span>撤销变更</span></a></h3><ul><li><p>git reset</p><pre><code>[target-node]                     # 通过把分支记录回退几个提交记录来实现撤销改动
</code></pre></li></ul><blockquote><p>注：对远程分支是无效；git push -f 强行推送到远程；</p></blockquote><ul><li><p>git revert</p><pre><code>[target-node]                     # 创建一次新的提交，覆盖目标节点之后的提交
</code></pre></li></ul><p>git reset和git revert都是属于重新恢复工作区以及远程提交的方式，但这两种操作有着截然不同的结果：</p><p>git reset是将之前的提交记录全部抹去，将 HEAD 指向自己重置的提交记录，对应的提交记录都不复存在；</p><p>git revert 操作是将选择的某一次提交记录 重做，若之后又有提交，提交记录还存在，只是将指定提交的代码给清除掉。</p><h3 id="提交日志" tabindex="-1"><a class="header-anchor" href="#提交日志"><span>提交日志</span></a></h3><ul><li><p>git log</p><pre><code>查看历史提交记录
</code></pre></li><li><p>git blame</p><pre><code>[file]                            # 以列表形式查看指定文件的历史修改记录
</code></pre></li></ul><h3 id="远程操作" tabindex="-1"><a class="header-anchor" href="#远程操作"><span>远程操作</span></a></h3><ul><li><p>git remote</p><pre><code>远程仓库操作;
</code></pre></li><li><p>git fetch</p><pre><code>将本地仓库中的远程分支更新成了远程仓库相应分支最新的状态;
</code></pre></li><li><p>git pull</p><pre><code>git pull 是 git fetch 和 git merge 的缩写
</code></pre></li><li><p>git push</p><pre><code>提交 本地库记录 到远程仓库，并同步更新本地远程库；
</code></pre></li></ul><h3 id="其它命令" tabindex="-1"><a class="header-anchor" href="#其它命令"><span>其它命令</span></a></h3><ul><li><p>git cherry-pick</p><pre><code>[hash] [hash] ...                 # 将选择的commit，按顺序合并进当前分支 
</code></pre></li><li><p>git tag</p><pre><code>[tag-name] [hash]                 # 将选择的commit，打上指定标签
</code></pre></li></ul><blockquote><p>注：起“锚点”作用；</p></blockquote><ul><li><p>git describe</p><pre><code>                                  # 检出当前位置，离得最近锚点标签
[ref]                             # 检出指定位置，离得最近锚点标签
</code></pre></li><li><p>git stash</p><pre><code>                                  # 会把所有未提交的修改（包括暂存的和非暂存的）都保存起来，用于后续恢复当前工作目录
pop                               # 恢复之前缓存的工作目录
list                              # 查看现有stash
drop [stash-name]                 # 移除stash
clear                             # 删除所有缓存的stash
</code></pre></li></ul><h3 id="示例区" tabindex="-1"><a class="header-anchor" href="#示例区"><span>示例区</span></a></h3><p>git rebase</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># -i [target-node] 示例：</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更改提交顺序</span></span>
<span class="line">pick 8b485bb <span class="token number">4</span></span>
<span class="line">pick a75ed74 <span class="token number">5</span></span>
<span class="line"><span class="token comment"># 更改为</span></span>
<span class="line">pick 8b485bb <span class="token number">5</span></span>
<span class="line">pick a75ed74 <span class="token number">4</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除一个提交 </span></span>
<span class="line">pick 060046b <span class="token number">4</span></span>
<span class="line">pick 78cd80c <span class="token number">5</span></span>
<span class="line"><span class="token comment"># 更改为</span></span>
<span class="line">pick 8b485bb <span class="token number">5</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># record 修改提交消息(提交内容不变)</span></span>
<span class="line">pick 8b182fa <span class="token number">2</span></span>
<span class="line">pick b21c896 <span class="token number">3</span></span>
<span class="line">pick 6d5e9c8 <span class="token number">5</span></span>
<span class="line"><span class="token comment"># 更改为</span></span>
<span class="line">r 8b182fa <span class="token number">2</span></span>
<span class="line">pick b21c896 <span class="token number">3</span></span>
<span class="line">pick 6d5e9c8 <span class="token number">5</span></span>
<span class="line"><span class="token comment"># 保存后，进入编辑 2 提交vim窗口。编辑后保存成功</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># edit修改提交(想要在两个提交之间 再加提交)</span></span>
<span class="line">pick b21c896 <span class="token number">3</span></span>
<span class="line">pick 6d5e9c8 <span class="token number">5</span></span>
<span class="line"><span class="token comment"># 更改为</span></span>
<span class="line">e b21c896 <span class="token number">3</span></span>
<span class="line">pick 6d5e9c8 <span class="token number">5</span></span>
<span class="line"><span class="token comment"># 保存后，进入 编辑变基模式 （编辑节点后提交会被移除）</span></span>
<span class="line"><span class="token comment"># 提交期望插入 内容提交</span></span>
<span class="line"><span class="token comment"># 最后执行 git rebase --continue 恢复正常状态 同时恢复之前移除节点；</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># edit修改提交(单纯的修改这次提交内容和消息)</span></span>
<span class="line">pick b21c896 <span class="token number">3</span></span>
<span class="line">pick 6d5e9c8 <span class="token number">5</span></span>
<span class="line"><span class="token comment"># 更改为</span></span>
<span class="line">e b21c896 <span class="token number">3</span></span>
<span class="line">pick 6d5e9c8 <span class="token number">5</span></span>
<span class="line"><span class="token comment"># 保存后，进入 编辑变基模式 （编辑节点后提交会被移除）</span></span>
<span class="line"><span class="token comment"># 更新 内容 ，使用 git commit --amend 提交</span></span>
<span class="line"><span class="token comment"># 执行 git commit --continue 恢复正常状态 同时恢复之前移除节点；</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># squash合并提交</span></span>
<span class="line">pick 79baa21 <span class="token number">444</span> 测试不增加提交次数 更新提交记录及内容444</span>
<span class="line">pick 616d8f4 <span class="token number">5</span></span>
<span class="line"><span class="token comment"># 更改为</span></span>
<span class="line">pick 79baa21 <span class="token number">444</span> 测试不增加提交次数 更新提交记录及内容444</span>
<span class="line">s 616d8f4 <span class="token number">5</span></span>
<span class="line"><span class="token comment"># 保存后，进入 重新编辑提交命名vim窗口。编辑后保存成功</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># fixup合并提交，只保留较早的提交信息</span></span>
<span class="line">pick 79baa21 <span class="token number">444</span> 测试不增加提交次数 更新提交记录及内容444</span>
<span class="line">pick 616d8f4 <span class="token number">5</span></span>
<span class="line"><span class="token comment"># 更改为</span></span>
<span class="line">pick 79baa21 <span class="token number">444</span> 测试不增加提交次数 更新提交记录及内容444</span>
<span class="line">f 616d8f4 <span class="token number">5</span></span>
<span class="line"><span class="token comment"># 保存成功 得到 commit 名为 444 测试不增加提交次数 更新提交记录及内容444 合并后记录</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># exec 略</span></span>
<span class="line"><span class="token comment"># drop 略</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};