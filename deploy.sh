#!/usr/bin/env bash
# 不要随意修改这个脚本
# $1 [PROJECT_NAME] 项目名称
if [ $# -ne 1 ];then
  echo "Usage : $0 [PROJECT_NAME]" >&2
  exit 1
fi
# 清空目录 以下为前端资源 相关逻辑 拆分到前端项目的部署脚本中，暂时用此后端项目来测试
# nginx目录 /usr/local/nginx/html/[PROJECT_NAME]/
rm -rf /usr/local/nginx/html/$1/*
# 拷贝静态资源
cp -r ./public/* /usr/local/nginx/html/$1/
# 启动项目
npm run start