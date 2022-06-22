#!/bin/bash
# 获取系统各项性能参数指数，并与预设阈值进行比较

local_time=$(date +"%Y%m%d %H:%M:%S") # 获取时间
local_ip=$(ifconfig ens33 | grep netmask | tr -s " " | cut -d" " -f3) # 获取ens33网卡IP
free_mem=$(cat /proc/meminfo | grep Avai | tr -s " " | cut -d" " -f2) # 获取剩余内存大小
free_disk=$(df | grep "\$" | tr -s " " | cut -d" " -f4) # 获取剩余磁盘大小
cpu_load=$(cat /proc/loadavg | cut -d" " -f3) # 获取工作负载
login_user=$(who | wc -l) # 获取登录系统用户
procs=$(ps aux | wc -l) # 获取当前进程数

# 当剩余内存不足1GB时发送邮件给root进行报警
[ $free_mem -lt 1048576 ] && echo "$local_time 可用内存不足，可用内存：$free_mem 在 $local_ip 机器" | mail -s 警告 root@localhost

# 当剩余磁盘不足10GB时发送邮件给root进行报警
[ $free_disk -lt 10485760 ] && echo "$local_time 可用磁盘不足，可用内存：$free_disk 在 $local_ip 机器" | mail -s 警告 root@localhost

# 当剩CPU 15min 平均负载超过4时发送邮件给root进行报警，因为包含小数所以使用bc
result=$(echo "$cpu_load > 4" | bc)
[ $result -eq 1 ] && echo "$local_time CPU负载过高，CPU负载：$cpu_load 在 $local_ip 机器" | mail -s 警告 root@localhost

# 当剩实时在线人数大于3人时发送邮件给root进行报警
[ $login_user -gt 3 ] && echo "$local_time 登录用户过多，$login_user 登录在 $local_ip 机器" | mail -s 警告 root@localhost

# 当剩实时进程数大于50时发送邮件给root进行报警
[ $procs -gt 50 ] && echo "$local_time 进行执行过多，$procs 执行在 $local_ip 机器" | mail -s 警告 root@localhost