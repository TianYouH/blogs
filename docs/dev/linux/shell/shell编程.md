# shell编程

## case 语句

- 检查、判断变量的取值
  - 效果类似于多分支的if语句
  - 如果与预设的值相匹配，则执行对应的操作
  - 命令序列最后必须以“双分号”结尾

```bash
case 变量 in
模式1)
  命令学列1;;
模式2)
  命令学列2;;
  .. ..
*)
  默认命令序列 # 最后一个命令序列“双分号”结尾可选
esac
```

示例：判断用户输入
```bash
#!\bin\bash
# 输入h返回huang,输入j返回jin,输入其它返回用法。

read -p "请输入h|j:" key
case $key in
h)
  echo "huang.";;
j)
  echo "jin.";;
*)
  echo "必须输入h或j.";;
esac
```

## shell 函数

在shell环境中，将一些需要重复使用的操作，定义为公共的语句块，即可称为函数

```bash
function 函数名 {
  命令序列
  .. ..
}

函数名() {
  命令序列
  .. ..
}
```

```bash
# 声明
imsg(){
  echo "你好世界"
  echo "函数测试"
}
# 调用
imsg
```

### 函数传递参数

- 调用已定义的函数
  - 格式：函数名
- 函数传值
  - 格式：函数名 值1 值2 .. ..
  - 传递的值作为函数的"位置参数"

示例：加法器
```bash
function add {
  echo $[$1+$2]
}
add 2 5 # 7
```

示例：输入颜色
```bash
function cecho {
  echo -e "\033[$1m$2\033[0m"
}
cecho 31 你好帅 # 你好帅
```

### 函数 相关关键字

- &：使用&符号，将函数执行后放入后台执行。
- wait：等待所有后台进程结束后退出脚本。

> 下方有示例

## 中断与退出

- continue：可以结束单次循环
- break：可以结束循环体
- exit：可以退出脚本

```bash
# continue
for i in {1..5}
do
  [ $i -eq 3 ] && continue
  echo $i
done
echo over # 1 2 4 5 over

# break
for i in {1..5}
do
  [ $i -eq 3 ] && break
  echo $i
done
echo over # 1 2 over

# exit
for i in {1..5}
do
  [ $i -eq 3 ] && exit
  echo $i
done
echo over # 1 2
```

> 下方有示例 

## 示例

### 判断用户输入（case 语句）

```bash
#!\bin\bash

read -p "Are you sure?[y/n]:" sure
case $sure in
y|Y|yes|YES)
  echo "你输入 $sure,好的";;
n|N|no|NO)
  echo "你输入 $sure,结束";;
*)
  echo "error."
esac
```

### 石头剪刀布（case 语句）

```bash
#!\bin\bash

game=(石头 剪刀 布)
num=$[README%3]
computer=${game[$sum]}
# 通过随机数获取计算机的出拳
# 出拳的可能性保存在一个数组中

echo "请根据下列提示选择您的出拳手势"
echo "1.石头"
echo "2.剪刀"
echo "3.布"

read -p "请选择1-3:" person
case $person in
1)
  if [ $sum -eq 0 ];then
    echo "平局"
  elif [ $sum -eq 1 ];then
    echo "你赢了"
  else
    echo "你输了"
  fi;;
2)
  if [ $sum -eq 0 ];then
    echo "你输了"
  elif [ $sum -eq 1 ];then
    echo "平局"
  else
    echo "你赢了"
  fi;;
3)
  if [ $sum -eq 0 ];then
    echo "你赢了"
  elif [ $sum -eq 1 ];then
    echo "你输了"
  else
    echo "平局"
  fi;;
*)
  echo "乖宝宝，听话，别瞎输入值"
esac
```

### 石头剪刀布（shell 函数）

```bash
#!/bin/bash
myping(){
  ping -c3 -i0.2 -W1 $1 &>/dev/null
  if [ $? -eq 0 ];then
    echo "$1 is up"
  else
    echo "$1 is down"
  fi
}
for i in {1..254}
do
  myping "192.168.1.$i" & # 使用&符号，将函数执行后放入后台执行。
done
wait # wait等待所有后台进程结束后退出脚本
```

### 机选双色球（中断与退出）

```bash
#!/bin/bash
# 红球1~33，6组，不可重复
# 蓝球1~16，1组

red_ball=""
blue_ball=""

# 每选一个号码，通过+=的方式存储到变量中
# 通过 grep 判断新机选的红色号码是否已经存在，-w选项过滤单词

while :
do
  clear
  echo "__机选双色球__"
  tmp=$[RANDOM%33+1]
  echo "$red_ball" | grep -q -w $tmp && continue
  red_ball+=" $tmp"
  echo -en "\033[91m$red_ball\033[0m"
  word=$(echo "$red_ball" | wc -w)
  if [ $word -eq 6 ];then
    blue_ball=$[RANDOM%16+1]
    echo -e "\033[34m $blue_ball\033[0m"
    break
  fi
  sleep 0.5
done


```