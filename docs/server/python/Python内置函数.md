# Python内置函数/模块

## 函数

1. bin 返回一个整数 int 或者长整数 long int 的二进制表示。
```py
>>>bin(10) # '0b1010'
>>> bin(20) # '0b10100'
```

2. open() 方法用于打开一个文件，并返回文件对象。

open() 函数常用形式是接收两个参数：文件名(file)和模式(mode)。

`open(file, mode='r')`

打开一个文件，并且设置需要的打开选项，mode参数是可选的

> 注意：当读取非英文文件时，需要给open函数传入[encoding]编码参数,防止显示乱码

完整的语法格式为：

- file: 必需，文件路径（相对或者绝对路径）。
- mode: 可选，文件打开模式
- buffering: 设置缓冲
- encoding: 一般使用utf8
- errors: 报错级别
- newline: 区分换行符
- closefd: 传入的file参数类型
- opener: 设置自定义开启器，开启器的返回值必须是一个打开的文件描述符。

mode 常用参数有：

- r 读出 如果file不存在，报错
- w 写入 如果file不存在，创建新文件；如果file存在，现有内容被清空；
- a 追加 如果file存在，新内容被追加到现有内容之后；如果file不存在，创建新文件；


> 参考[菜鸟](https://www.runoob.com/python3/python3-file-methods.html)
> 练习[示例](https://github.com/TianYouH/python-test/blob/main/file_1.py)

## 模块

1. csv

文件优点：逗号分隔值,纯文本,没有数据类型差别，都有值都是字符串

> 练习[示例](https://github.com/TianYouH/python-test/blob/main/csv_1.py)


