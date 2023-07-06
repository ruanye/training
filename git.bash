#!/bin/zsh

# 获取当前分支名
branch=$(git symbolic-ref --short HEAD)

# 获取最新的 commit message
last_commit_msg=$(git log -1 --pretty=%B)

# 提交信息
commit_msg="Auto commit on branch $branch: $last_commit_msg"

# 添加所有修改
git add .

# 提交修改
git commit -m "$commit_msg"

# 推送修改
git push