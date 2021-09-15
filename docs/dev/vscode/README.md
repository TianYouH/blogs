# vscode

## C/C++环境配置

1. 安装[插件](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
2. 下载安装 C/C++ [编译库](https://sourceforge.net/projects/mingw-w64/files/)
   - x86_64-posix-seh 下载这个压缩包，解压到期望目录
3. 配置环境变量 Path 增加步骤二解压包的 bin 目录
   - 示例：C:\Program Files\mingw64\bin
4. 验证安装是否成功
   - 控制台，分别输入 g++ -v 和 gcc -v、gdb -v 查看环境是否安装成功（是否有当前版本号）

参考调试配置

launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "g++.exe build and debug active file",
      "type": "cppdbg",
      "request": "launch",
      "program": "${fileDirname}\\${fileBasenameNoExtension}.exe",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${workspaceFolder}",
      "environment": [],
      "externalConsole": true, //修改此项，让其弹出终端
      "MIMode": "gdb",
      "miDebuggerPath": "D:\\2Software\\mingw64\\bin\\gdb.exe",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        }
      ],
      "preLaunchTask": "task g++" //修改此项
    }
  ]
}
```

tasks.json

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "shell",
      "label": "task g++", //修改此项
      "command": "D:\\2Software\\mingw64\\bin\\g++.exe",
      "args": [
        "-g",
        "${file}",
        "-o",
        "${fileDirname}\\${fileBasenameNoExtension}.exe"
      ],
      "options": {
        "cwd": "D:\\2Software\\mingw64\\bin"
      },
      "problemMatcher": ["$gcc"],
      "group": "build"
    }
  ]
}
```

> launch.json 文件中 "preLaunchTask" 的值 必须与 tasks.json 文件中 "label"的值一致。值的设置看个人喜好，保持默认也是OK的。

测试文件
```c
#include <stdio.h>
int main()
{
    float a,b,h,s;
    scanf("%f%f%f",&a,&b,&h);
    s=(a+b)*h/2;
    printf("结果是：%.1f",s);
    system("pause");
    return 1;
}
```