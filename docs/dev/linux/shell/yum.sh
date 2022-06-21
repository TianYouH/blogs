#!/bin/bash
# 配置YUM文件脚本

# 定义YUM源路径
URL=ftp://192.168.0.1/centos # 路径是瞎写的

# 创建YUM源配置文件
echo "[CentOS]
name=centos
baseurl=$URL
gpgcheck=0" > /ect/yum.repos.d/iyum.repo
