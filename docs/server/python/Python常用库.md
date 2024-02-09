# Python常用库

## turtle - [海龟绘图](https://docs.python.org/zh-cn/3/library/turtle.html)

海龟绘图最初是作为一种教学工具被创建的，供教师在课堂上使用。 对于需要生成一些图形输出的程序员来说这是一种无需在工作中引入更高复杂度或外部库的方式。

## scrapy - [网站爬虫](https://scrapy.org/)

[中文文档](https://www.osgeo.cn/scrapy/index.html)

Scrapy 是一种快速的高级 web crawling 和 web scraping 框架，用于对网站进行爬网并从其页面提取结构化数据。它可以用于广泛的用途，从数据挖掘到监控和自动化测试

## openpyxl - [导出excel](https://openpyxl-chinese-docs.readthedocs.io/zh-cn/latest/index.html)

# pip包管理器常用命令

requirements.txt 文件清单。一般接手新的python都会根据项目中该文件清单拉取依赖

获取当前环境安装依赖  
`pip list` 或者 `pip freeze`

创建依当前环境依赖清单
`pip freeze > requirements.txt`

根据文件清单安装依赖  
`pip install -r requirements.txt`



