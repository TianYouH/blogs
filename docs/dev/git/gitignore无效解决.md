# gitignore无效解决

解决方法是先把本地缓存删除，然后再提交。

```bsah
git rm -r --cached .
git add .
git commit -m "update .gitignore"
```