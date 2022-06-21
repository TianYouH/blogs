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

