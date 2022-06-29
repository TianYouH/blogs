# Shell 基础总结

Shell是所有解释器的总称  
Shell是用户与Linux内核之间的解释器  
解释器负责将用户的指令翻译为内核可以识别的指令

- 常见的Shell解释器

/bin/bash 默认  
/bin/sh  
/bin/csh  
/bin/tcsh  

::: details bash基本特性

快捷键、Tab键补齐（Ctrl+A：光标移至当前行最前面、Ctrl+E：光标移至当前行最前面、Ctrl+C：撤销准备执行命令、**Ctrl+L：清屏**）  

history：命令历史  

aliase：命令别名  

标准输入与输出的重定向（>、>>、2>、3>>、&>）  
`>`重定向输出`ls > a.text`（每次执行，会覆盖上次输出同名文件）  
`>>`重定向追加输出`ls > a.text`（每次执行，会基于上次输出同名文件内容追加输出内容）
`2>`重定向输出报错信息`ls 不存在文件.text 2> a.text`  
`&>`重定向输出正确及报错信息`ls 不存在文件.text b.text &> a.text`  

管道（|）：将多条命令组合，满足复杂功能  
将前一个命令的输出结果 通过管道 传递第二条命令作为它的输入信息  
`ls | grep -`根据列表数据过滤出包含 - 的文件名

:::

> 可以通过usermod、chsh修改所使用的解释器

Shell执行命令的方式

- 交互式（命令行）
  - 人工干预
  - 逐条解释执行、效率低
- 非交互式（脚本）
  - 需要提前设计
  - 批量执行、效率高

## 脚本设计与运行

脚本：提前将可执行的命令语句写入一个文件（顺序执行、解释器逐行解释代码）

常见的脚本语言（Shell脚本、Python/Perl/Ruby脚本、JSP/PHP脚本...）

- 一个合格规范脚本应该包含以下这些内容
  - #!脚本声明（使用哪种解释器解释代码）
  - 注释信息（步骤、思路、用途等），以#开头的为注释信息
  - 可执行语句
```bash
#!/bin/bash
#一个bash测试脚本
echo "你好世界"
```

- 执行脚本的多种方式
  - 方法一，需要为文件赋予可执行权限（通过chmod分配权限）
    - 绝对路径执行
    - 相对路径执行
  - 方法二，不需要文件有可执行的权限
    - sh [脚本文件名]
    - source [脚本文件名]  #不会启动子进程（通过pstree查看进程树）

## 变量

### 自定义变量

```bash
a=3
echo $a       #3
echo ${a}     #3
echo ${a}456  #3456
unset a
```

#### 定义变量

以固定的名称，存放可以能有变化的值

- 定义变量的格式
  - 变量名=变量值
- 取消变量的格式
  - unset 变量名

> =两边不能有空格，不要使用关键字做变量名，如ls、cd等  
> 如果变量名已经存在则覆盖之前的变量值  
> 变量名称由 字母/数字/下划线组成，不能以数字开始  

#### 查看变量

- 查看变量的语法格式
  - $变量名
  - ${变量名}

### 数组

- 存储多个数据的集合就是数组

```bash
test=(1 2 3 4) # 定义数组
# 调用数组的值
echo ${test[0]} # 1
echo ${test[1]} # 2
echo ${test[2]} # 3
```

### 环境变量

变量名通常大写，由操作系统维护

- 存储在/etc/profile或~/.bash_profile（linux）
- 命令env可以列出所有环境变量
- 常见环境变量
  - PATH：命令搜索路径（查询命令所在路径）
  - PWD：工作目录路径
  - USER: 当前用户名
  - UID：当前用户ID号
  - HOME：当前用户的家目录
  - SHELL：当前shell解释器

### 位置变量

bash（解释器）内置变量，存储脚本执行时的参数

- 存储脚本执行时的参数
- 使用$n表示，n为数字序列号
- $1、$2、...、${10}、${11}、... （10之后需要用花括号包裹）

```bash
#定义vars.sh文件
echo $1
echo $2
echo $3

#执行vars.sh
sh vars.sh aa 99 cc
#打印 aa 99 cc
```

### 预定义变量

bash（解释器）内置变量，可以调用但是不能赋值或修改

- 用来保存脚本程序的执行信息
  - 直接使用这些变量
  - 不能直接为这些变量赋值

| 变量名 | 含义 |
| :-: | :-: |
|$?|*上一条*命令执行后的返回状态，0：正常，[不等于0]：表示异常|
|$0|当前所在的进程或脚本名|
|$$|当前运行进程的PID号|
|$#|已加载的位置变量的个数|
|$*|所有位置变量的值|

### 变量的扩展应用

#### 多种引号的区别

- 区分三种定界符
  - 双引号""：允许扩展，以$引用其它变量
  - 单引号''：禁用扩展，即便$也视为普通字符
  - 反引号``：将命令的执行输出作为变量值，$()与反引号等效

```bash
echo "$USER id is $UID"
#root id is 0

echo '$USER id is $UID'
#$USER id is $UID

a=`ls` #a=$(ls)
echo a
#CNAME data.json deploy.sh docs logo.png node_modules package.json package-lock.json test 我的博客.xmind
```

#### read标准输入取值

- read从键盘读入变量值完成赋值
  - 格式：`read -p "提示信息" 变量名`
  - -p 可选（提示文字），-t 指定超时秒数，-s 设置是否在终端显示输入内容

下方有示例

### 局部与全局

变量的作用范围

- 局部变量
  - 新定义的变量默认只在当前Shell环境中有效，无法在子Shell环境中使用
- 全局变量
  - 全局变量在当前Shell及子Shell环境中均有效

```bash
a=123 #定义局部变量
export b=456 #定义全局变量
```

## 运算

### 基本运算法则（整数）

- 使用$[]或$(())表达式进行运算
  - 格式：$[数字2 + 数字2 ...]

- 四则运算
  - 加法：num1 + num2
  - 减法：num1 - num2
  - 乘法：num1 * num2
  - 除法：num1 / num2
- 取余：num1 % num2

```bash
echo $[1+2] #3
echo $((1+2)) #3
a=2;b=3
echo $[a*b] #6
```

### 变量的自增/减等操作

|简写表达式|完整表达式|
|:-:|:-:|
|i++|i=i+1|
|i+=2|i=i+2|
|i-=2|i=i-2|
|i*=2|i=i*2|
|i/=2|i=i/2|
|i%=2|i=i%2|

### 命令：let

let 命令是 BASH 中用于计算的工具，用于执行一个或多个表达式，变量计算中不需要加上 $ 来表示变量。如果表达式中包含了空格或其他特殊字符，则必须引起来。

```bash
let a=5+4
let b=9-3 
echo $a $b
```

### bc计算器（扩展：小数）

Bash内建机制仅支持整数运算，不支持小数运算
```bash
$ echo $[1.1+1.5]
#bash: 1.1+1.5: syntax error: invalid arithmetic operator (error token is ".1+1.5")
```

需要通过计算器软件bc实现小数运算
- 如果没有该软件需要使用yum安装
- bc支持交互式和非交互式两种方式计算，scale=n可以约束小数位
- bc支持的比较符：>、>=、<、<=、==、!=，表达式成立返回1，否则返回0

```bash
echo "1.3*2.4" | bc #3.12
echo "1>2" | bc #0
bc
1.5+2.4 #3.9
quit
```

## 示例

### 第一个Shell脚本

1. 新建文件
2. 添加可执行语句（命令）
3. 给文件添加x（可执行权限）执行权限

first.sh
```
echo "你好世界"
```

### 位置变量示例

user.sh
```bash
#!/bin/bash
# 新增用户并修改密码 sh user.sh huang 123456

useradd "$1"

echo "$2" | passwd --stdin $1
```

### read标准输入取值

read.sh
```bash
#!/bin/bash
# 新增用户并修改密码

read -p "请输入用户名：" name
read -t 6 -s -p "请输入密码：" pass

useradd "$name" #加引号防止用户输入空格，如 "huang jin"
echo "$pass" | passwd --stdin $name
```

### 监控脚本之显示硬件信息

check.sh
```bash
#!/bin/bash
# 查询硬件信息

echo -e "\033[34m----服务器硬件信息----\033[0m"

echo -e "\033[34m----网卡信息----\033[0m"
ifconfig ens33 | grep "inet "

echo -e "\033[34m----内存的剩余容量信息：----\033[0m"
grep MemAvailable /proc/meminfo

echo -e "\033[34m----磁盘根分区的使用情况：----\033[0m"
df -h /

echo -e "\033[34m----本机CPU型号信息如下：----\033[0m"
grep "model name" /proc/cpuinfo

exit
```

### 数据计算

calc.sh
```bash
#!/bin/bash
# 计算脚本

# 计算1+2+3，...，+n的和，可以使用n*(n+1)/2公式快速计算结果
read -p "请输入一个正整数：" num
sum=$[num*(num+1)/2]
echo -e "\033[32m$num以内的整数和是：$sum\033[0m"

# 使用三角形的底边和高计算面积：A=1/2bh
read -p "请输入三角形底边长度：" bottom
read -p "请输入三角形高度：" hight
A=$(echo "scale=1;1/2*$bottom*$hight" | bc)
echo -e "\033[32m三角形的面积是：$A\033[0m"

# 梯形面积：(上底边长度+下底边长度)*高/2
read -p "请输入梯形上底边长度：" a
read -p "请输入梯形下底边长度：" b
read -p "请输入梯形高度：" h
A=$(echo "scale=2;($a+$b)*$h/2" | bc)
echo -e "\033[32m梯形的面积是：$A\033[0m"

# 使用A=πr2公式计算圆的面积，取2位小数点精度，π=3.14
read -p "请输入圆的半径：" r
A=$(echo "scale=2;3.14*$r^2" | bc)
echo -e "\033[32m圆的面积是：$A\033[0m"
```

### 配置YUM源脚本

```bash
#!/bin/bash
# 配置YUM文件脚本

# 定义YUM源路径
URL=ftp://192.168.0.1/centos # 路径是瞎写的

# 创建YUM源配置文件
echo "[CentOS]
name=centos
baseurl=$URL
gpgcheck=0" > /ect/yum.repos.d/iyum.repo
```