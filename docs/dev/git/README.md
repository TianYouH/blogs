# Git
你好世界

## 常用

### 关键字符

- HEAD

      HEAD 是一个对当前检出记录的符号引用 —— 也就是指向你正在其基础上进行工作的提交记录。
      HEAD 总是指向当前分支上最近一次提交记录。大多数修改提交树的 Git 命令都是从改变 HEAD 的指向开始的。

- ^

      向上移动 1 个提交记录;
      例子：git checkout main^; git checkout HEAD^;

- ~[number]

      向上移动多个提交记录，如 ~3
      git checkout main~3; git checkout HEAD~5;

### 创建仓库命令

- git init

      初始化仓库

- git clone

      拷贝一份远程仓库，也就是下载一个项目。

### 提交与修改

- git add
  
      提交暂存区到仓库区

- git status
  
      查看仓库当前的状态，显示有变更的文件。

- git diff
  
      比较文件的不同，即暂存区和工作区的差异。

- git commit
  
      -m [message]                      # 提交暂存区到仓库区
      [file1] [file2] ... -m [message]  # 提交暂存区的指定文件到仓库区

- git rm
  
      删除工作区文件

- git mv
  
      移动或重命名工作区文件。

### 基础命令

- git branch
      
                                        # 列出所有本地分支
      -r                                # 列出所有远程分支
      -a                                # 列出所有本地分支和远程分支
      -f [barnch] [target-branch]       # 强制修改分支指向位置
      [branch-name]                     # 新建一个分支，但依然停留在当前分支
      [branch] [commit]                 # 新建一个分支，指向指定commit
      --track [branch] [remote-branch]  # 新建一个分支，与指定的远程分支建立追踪关系

- git checkout

      -b [branch]                       # 新建一个分支，并切换到该分支
      [branch-name]                     # 切换到指定分支，并更新工作区
      -                                 # 切换到上一个分支
      -b [branch] [tag]                 # 新建一个分支，指向某个tag

- git merge

      [branch]                          # 合并指定分支到当前分支
      [branch] --no-ff                  # 不使用fast-forward方式合并，保留分支的commit历史
      [branch] --squash                 # 使用squash方式合并，把多次分支commit历史压缩为一次

- git rebase

      [branch]                          # 将当前所在分支工作移动到目标分支
      -i [target-node]                  # 重构选中提交节点（顺序、移除、合并）详情见示例区

> [merge和rebase的区别](https://www.cnblogs.com/xueweihan/p/5743327.html)

### 撤销变更

- git reset

      [target-node]                     # 通过把分支记录回退几个提交记录来实现撤销改动

> 注：对远程分支是无效；

- git revert

      [target-node]                     # 创建一次新的提交，覆盖目标节点之后的提交

### 提交日志

- git log

      查看历史提交记录

- git blame

      [file]                            # 以列表形式查看指定文件的历史修改记录

### 远程操作

- git remote

      远程仓库操作;

- git fetch

      将本地仓库中的远程分支更新成了远程仓库相应分支最新的状态;

- git pull

      git pull 是 git fetch 和 git merge 的缩写

- git push

      提交 本地库记录 到远程仓库，并同步更新本地远程库；

### 其它命令

- git cherry-pick

      [hash] [hash] ...                 # 将选择的commit，按顺序合并进当前分支 

- git tag

      [tag-name] [hash]                 # 将选择的commit，打上指定标签

> 注：起“锚点”作用；

- git describe

                                        # 检出当前位置，离得最近锚点标签
      [ref]                             # 检出指定位置，离得最近锚点标签

- git stash

                                        # 会把所有未提交的修改（包括暂存的和非暂存的）都保存起来，用于后续恢复当前工作目录
      pop                               # 恢复之前缓存的工作目录
      list                              # 查看现有stash
      drop [stash-name]                 # 移除stash
      clear                             # 删除所有缓存的stash
      
### 示例区

git rebase
```bash
# -i [target-node] 示例：

# 更改提交顺序
pick 8b485bb 4
pick a75ed74 5
# 更改为
pick 8b485bb 5
pick a75ed74 4

# 删除一个提交 
pick 060046b 4
pick 78cd80c 5
# 更改为
pick 8b485bb 5

# record 修改提交消息(提交内容不变)
pick 8b182fa 2
pick b21c896 3
pick 6d5e9c8 5
# 更改为
r 8b182fa 2
pick b21c896 3
pick 6d5e9c8 5
# 保存后，进入编辑 2 提交vim窗口。编辑后保存成功

# edit修改提交(想要在两个提交之间 再加提交)
pick b21c896 3
pick 6d5e9c8 5
# 更改为
e b21c896 3
pick 6d5e9c8 5
# 保存后，进入 编辑变基模式 （编辑节点后提交会被移除）
# 提交期望插入 内容提交
# 最后执行 git rebase --continue 恢复正常状态 同时恢复之前移除节点；

# edit修改提交(单纯的修改这次提交内容和消息)
pick b21c896 3
pick 6d5e9c8 5
# 更改为
e b21c896 3
pick 6d5e9c8 5
# 保存后，进入 编辑变基模式 （编辑节点后提交会被移除）
# 更新 内容 ，使用 git commit --amend 提交
# 执行 git commit --continue 恢复正常状态 同时恢复之前移除节点；

# squash合并提交
pick 79baa21 444 测试不增加提交次数 更新提交记录及内容444
pick 616d8f4 5
# 更改为
pick 79baa21 444 测试不增加提交次数 更新提交记录及内容444
s 616d8f4 5
# 保存后，进入 重新编辑提交命名vim窗口。编辑后保存成功

# fixup合并提交，只保留较早的提交信息
pick 79baa21 444 测试不增加提交次数 更新提交记录及内容444
pick 616d8f4 5
# 更改为
pick 79baa21 444 测试不增加提交次数 更新提交记录及内容444
f 616d8f4 5
# 保存成功 得到 commit 名为 444 测试不增加提交次数 更新提交记录及内容444 合并后记录

# exec 略
# drop 略
```
