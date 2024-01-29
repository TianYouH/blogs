# Mongodb

[官网](https://www.mongodb.com/zh-cn)

MongoDB是一个基于分布式文件存储的开源数据库，由C++语言编写，它提供了一个可扩展的高性能数据存储解决方案。

MongoDB是一个文档型数据库,它的数据是以文档的形式来存储的，文档在MongoDB中是一个非常重要的概念（类似于MySQL中的行），数据库是由一个个的集合组成的

特点  
MongoDB并不需要事先创建好数据库和集合，也不需要预先定义好集合中字段的类型和长度，同一个集合中的数据也不需要有相同的结构等等

关系型数据库：MySQL  
非关系型数据库：Redis（键值型数据据库），MongoDB（文档型数据库）

对比

|MongoDB|关系型数据库|
|-|-|
|数据库(Database)|数据库(Database)|
|集合(Collection)|表(Table)|
|文档(Document)|行(Row)|
|字段（Field）|列(Column)|
|索引 (Index)|索引 (Index)|
|_id|主键(Primary Key)|
|$lookup|join|
|$group|aroup bv|

应用场景

|MongoDB|关系型数据库|
|-|-|
|实时分析|数据结构固定|
|内容管理|关系型数据库|
|非结构化数据|结构化数据|
|物联网|多表关联查询|
|移动Apps|传统应用|

数据库（Database）  
是集合的容器，相当于关系型DB （SQL）中的数据库。

集合（Collection）  
数据库中的一组文档，相当于SQL中的表。

文档（Document）  
集合中的一条记录,相当于SQL的表中的一行。不同的文档之间不必有相同的结构,这一点是和SQL不同的。

字段（Field）  
文档中的键值对，相当于SQL中的列。比较重要的区别是MongoDB中的一个field可以是一个JSON对象或者数组。


## 安装配置

windows

前往官网下载（社区版下面的CommunityServer）.msi安装包，本地安装,安装中会带一个图形化的GUI工具Compass。

### 包管理器安装

Windows

`$ choco install mongodb -y`

Linux

```shell
# Redhat
sudo yum install -y mongodb-org
# Ubuntu & Debian &SUSE
sudo apt-get update
sudo apt-get install -y mongodb-org
# Fedora
sudo dnf install mongodb-org
```

Mас
```shell
# 安装
brew tap mongodb/brew
brew install mongodb-community
# 启动
brew services start mongodb-community
```

## 常用命令

### 基本命令

- `mongosh`打开一个连接到本地实例的MongoShell。所有其他命令都需要再mongosh中执行。
- `show databases show dbs`显示当前 MongoDB实例中的所有数据库。
- `use` `<dbname>`切换到数据库`<dbname>`。
- `db`显示当前使用中的数据库名称。cls清屏。
- `show collections`显示当前数据库中的所有集合。
- `db.dropDatabase()`删除当前的数据库。
- `exit`退出mongosh会话。

### 创建/插入

- `insertOne`在集合中插入一个新的文档。e.g.`db.users.insertOne({name: "老杨"})`
- `insertManye`在集合中插入多个新的文档。e.g.`db.users.insertMany([{name: "李四"}, {name: "王五"}])`

### 删除

- `deleteOne` 删除满⾜条件的第⼀个⽂档。
- `deleteMany` 删除满⾜条件的所有⽂档。

### 更新

- `updateOne`更新满足条件的第一个文档。
- `updateMany`更新满足条件的所有文档。
- `replaceOne`替换满足条件的第一个文档。
- `save`通过传入的文档替换已有文档或插入一个新的文档。
- `$set`只更新文档中$set 指定的字段，不会影响其他字段。
- `$inc`用于递增（或递减）文档中指定字段值的操作符。
- `$rename`更新某个字段的名称。
- `$unset`删除一个字段。
- `$push`将值加入一个数组中,不会判断是否有重复的值。
- `$pull`将值从一个数组中移除。
- `$addToSet`将值加入一个数组中,会判断是否有重复的值,若重复则不加入。

### 查找

- `find`查询所有的文档。e.g.`db.users.find()`
- `find(<filterObject>)`查询所有满足参数对象`<filterObject>`中指定过滤条件的数据。e.g.`db.users.find({name:"老杨"})`
- `db.find(<filterObject>,<selectObject>)`查询所有满足参数对象`<filterObiect>`中指定过滤条件的数据,并且只返回`<selectObject>`中指定的字段。e.g.`db.users.find({name: "老杨"},{name: 1, email: 1})`
- `findOne` 与find 用法相同，找到满足过滤条件的对象，但是只返回第findOne一条。e.g.`db.users.findOne({level: 1})`
- `countDocuments`返回满足条件的记录的数量。

- `sort` 使⽤给定的字段按照升序或者降序来排序。 
- `limit` 限定只返回给定数量的⽂档。
- `skip` 从头开始跳过给定数值的⽂档。

### 过滤条件

- `$eq`等于(equal)。
- `$ne`不等于（not equal）。
- `$gt / $gte`大于（greater than) /大于等于 （greater than or equal to)
- `$it /$ite`小于（less than) /小于等于 （less than or equal to)
- `$in`值在指定值列表中，就返回该文档。
- `$nin`值不等于指定值列表中的任何一个,就返回该文档。
- `$and`检查复数条件是否均为真，可以简单理解为“并且”。
- `$or`检查复数条件中是否有一个为真，可以简单理解为“或者”。
- `$not`将$not里面的过滤条件取反。
- `$exists`检查一个字段是否存在。
- `$expr`在不同的字段之间做比较。

### 聚合

- `$sum`计算总和。
- `$avg`计算平均值。
- `$min`获取最小值。
- `$max`获取最大值。
- `$push`将值加入一个数组中，不会判断是否有重复的值。
- `$first`获取第一个文档数据。
- `$last`获取最后一个文档数据。

## GUI工具

- Compass
- Navicat

- [MongodbShell](https://www.mongodb.com/try/download/shell)

