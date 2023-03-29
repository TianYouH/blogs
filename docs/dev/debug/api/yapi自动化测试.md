# Yapi 自动化测试

## 背景

越来越多的应用基于前后端分离构建，后端提供数据接口，前端调用接口返回 json 数据渲染到 UI，这个时候保证后端接口数据正确性变的愈来愈重要，接口测试就是来解决这个问题。很多团队，接口测试就是手动运行接口，肉眼比对接口返回的数据，这样的操作流程效率低下，容易出错。接口管理平台 YApi 解决这一痛点，用户只需要在可视化 GUI 下，配置每个接口的入参和对 RESPONSE 断言，即可实现对接口的自动化测试，大大提升了接口测试的效率。

## 基础概念

需要学习的基础概念主要包含测试集、Pre-Script 、Test-Script 三方面。

### 测试集

在平时的开发过程中，经常遇到的一个问题是每次调试接口都需要重新填写参数，YApi测试集能够保存之前填写的参数，方便下次的调试。每个的请求参数还可以通过前面已请求的接口数据读取，或填写mock随机字符串，通过设置断言脚本验证返回数据的正确性。

<img :src="$withBase('/image/dev/debug/api/yapi1.png')" alt="示例">

### Pre-Script

<img :src="$withBase('/image/dev/debug/api/yapi2.png')" alt="示例">

Pre-Script 包括请求参数处理脚本和响应数据处理脚本两部分。通过自定义 js 脚本方式改变请求的参数和返回的 response 数据。他的使用场景如下：

- 接口请求参数需要加工 response code 数据
- 接口请求参数需要添加计算 token 字段

#### 请求参数处理脚本示例

以 jquery ajax 为例，假设当前的请求参数是

```js:no-line-numbers
{
  url: '/api/user?id=1',
  method: 'POST',
  headers: {
    xxx: 'xxx'
  },
  data: {
    type: 1
  }
}
```
那么公共变量 context 包含以下属性：
```js:no-line-numbers
context = {
  // pathname: '/api/user',
  // query: {
  //   id: 1
  // },
  requestHeader: {
    xxx: 'xxx'
  },
  method: 'POST',
  requestBody: {
    type:1
  }
}
```
假设我们需要在 url 增加一个 token 参数，可以写如下自定义脚本：

<img :src="$withBase('/image/dev/debug/api/yapi3.png')" alt="示例">

#### 返回数据处理脚本示例

在上面的示例请求完成后，假设返回 responseBody={code:"1"},公共变量 context 包含以下属性：

```js:no-line-numbers
context = {
  // pathname: '/api/user',
  // query: {
  //   id: 1
  // },
  requestHeader: {
    xxx: 'xxx'
  },
  method: 'POST',
  requestBody: {
    type:1
  },
  responseData: {
    code:"1"
  },
  responseHeader: {
    content-type: 'application/json'
    ...
  }
}
```

假设我们需要修改响应数据 responseBody code 的值为 "300"，可以填写如下自定义脚本：

<img :src="$withBase('/image/dev/debug/api/yapi4.png')" alt="示例">

### Test-Script (测试脚本)

<img :src="$withBase('/image/dev/debug/api/yapi5.png')" alt="示例">

通过自定义脚本断言接口参数或返回 response 数据，在接口用例页面点击 Test 编辑。

#### 支持的公共变量

1. assert
    - assert(value)
    判断 value 是否为 truth, 例如 assert(1) 通过， assert(0) 不通过，只要 value 不是 null, 0, false等值验证通过
    - assert.equal(actual, expected)
    判断 actual 是否等于 expected，例如 assert(1, 1)通过
    - assert.notEqual(actual, expected)
    判断 actual 是否不等于 expected
    - assert.deepEqual(actual, expected)
    假设： actual = {a:1} 是一个对象，即便 expected = {a:1}，如果使用 assert.equal 可能也是不相等的，因为在 js 引用的只是对象的一个指针，需要使用 assert.deepEqual 比较两个对象是否相等
    - assert.notDeepEaual(actual, expected)
    深度比较两个对象是否不相等

2. status
http 状态码

3. params
http request params, 合并了 query 和 body

4. body
返回 response body

5. header
返回 response header

6. records
记录的 http 请求信息，假设需要获取 key 为 555 的接口参数或者响应数据，可通过 records[555].params 或 records[555].body 获取

7. log
log（message） 函数,调试时使用，log 信息仅仅在断言失败后打印

#### 示例

```js:no-line-numbers
assert.equal(body.errcode, 0)
assert.equal(body.data.group_name, 'testGroup')
assert.equal(status, 200)
```

## 开始测试

### 配置参数

YApi 除了支持常量字符串外，还支持 mock 随机字符串和变量字符串。

### Mock参数

Mock 参数每次请求都会生成随机字符串,支持 mockjs 所有占位符

<img :src="$withBase('/image/dev/debug/api/yapi6.png')" alt="示例">

#### 变量参数

YApi 提供了强大的变量参数功能，你可以在测试的时候使用前面接口的 参数 或 返回值 作为 后面接口的参数，即使接口之间存在依赖，也可以轻松 一键测试~

格式：

```js:no-line-numbers
$.{key}.{params|body}.{path}
```

例如：现有三个接口，分别是“创建数据集”和“模糊查询数据集”和“删除数据集”

<img :src="$withBase('/image/dev/debug/api/yapi7.png')" alt="示例">

模糊查询数据集接口需要传参数: 数据集名称(xxx)，而这个 （xxx） 需要通过 创建数据集 的创建名称获取，这时应在 数据集名称 的参数输入框中根据前者的 key 找到对应 xxx。

```js:no-line-numbers
"name": "{{ $.438.params.xxx }}"
"id": "{{ $.414.body.data[0].id }}"
```

其中 $. 是使用 动态变量 的标志，$.438.params 即表示 key 值为 438 用例的请求参数，$.414.body 即表示 key 值为 414 用例的返回值。

目前yapi中的query，body,header和pathParam的输入参数已经支持点击选择功能。无需自己填写表达式，只需在弹窗中选择需要展示的表达式即可。 输入选项包括常量，mock数据，在测试集合中也支持变量选择。

### 开始测试

<img :src="$withBase('/image/dev/debug/api/yapi8.png')" alt="示例">

在测试列表可以看到每个测试用例的 key,还有 开始测试、报告等功能 点击开始测试会按照 case 定义的参数从上往下一个一个进行测试，如果顺序有问题，可以拖动调整 测试完成之后，点击报告查看该次请求的结果
