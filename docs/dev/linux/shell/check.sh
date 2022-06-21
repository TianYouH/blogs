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