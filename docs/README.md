# 欢迎来到我的博客

<img :src="$withBase('/image/home.jpg')" alt="图片测试">

[[toc]]

## vuepress 常用语法及组件测试

### 组件

#### Badge

**输入**

```md
VuePress - <Badge type="tip" text="v2" vertical="top" />
VuePress - <Badge type="warning" text="v2" vertical="middle" />
VuePress - <Badge type="danger" text="v2" vertical="bottom" />
```

**输出**

- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />

#### CodeGroup

<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

### 自定义容器

::: tip 你好
这是一个提示
:::

::: warning 你好
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details 这是标题
这是一个 details 标签
:::

### 代码块

#### 行高亮

```ts{1,6-8}
import type { UserConfig } from "@vuepress/cli";

export const config: UserConfig = {
  title: "你好， VuePress",

  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
  },
};
```

#### 行号禁用

```ts
const line2 = "This is line 2";
const line3 = "This is line 3";
```

```ts:no-line-numbers
// 行号被禁用，行号默认是开启的
const line2 = "This is line 2";
const line3 = "This is line 3";
```

### 模板语法

#### 基础

**输入**

```md
一加一等于： {{ 1 + 1 }}
<span v-for="i in 3"> span: {{ i }} </span>
```

**输出**  
一加一等于： 2  
span: 1 span: 2 span: 3

#### 添加 v-pre

```md
<!-- 默认情况下，这里会被保持原样 -->

1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->

1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

#### 导入代码块

最简单的语法  
`@[code](../foo.js)`

导入 '../foo.js' 文件的第 3 行至第 10 行  
指定语言为 'js'  
对导入代码的第 3 行进行高亮，即 '../foo.js' 文件的第 5 行  
禁用行号  
`@[code{3-10} js{3}:no-line-numbers](../foo.js)`

## Markdown 基础语法

### 换行

这是一个换行测试  
请以两个或多个空格结束一行，然后键入 return

### 着重

这是**粗体**，这个也是 **粗体**;  
这是*斜体*，这个也是 _斜体_;  
这是**_粗斜体_**，这个也是 **_粗斜体_**，这个也是 **_粗斜体_**，这个也是 **_粗斜体_**;

### 链接

[Makdown](http://markdown.p2hp.com/).  
http://markdown.p2hp.com/
禁用自动 URL 链接  
`http://markdown.p2hp.com/`

### 块引用

> #### 中国少年说!
>
> - 少年强则国强.
> - 少年富则国富.
>
>   _引用块_ 内的粗体斜体 **测试**.
>
> > 嵌套块测试
>
> > > 嵌套块测试

### 清单

1.  有序列表
2.  测试
3.  这里会显示序号三
    1. 缩进测试
4.  段落测试 1

    这个是段落

    > 块引用测试

        <head>
          <title>代码块测试</title>
        </head>

    ![破图测试](https://d33wubrfki0l68.cloudfront.net/e7ed9fe4bafe46e275c807d63591f85f9ab246ba/e2d28/assets/images/tux.png)

5.  段落测试 3

- 无序列表

* 测试

- 测试
  - 无需缩进测试

### 表格

| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| `git status` |  git _status_  |    git &#124; |
| git diff     |  git **diff**  |            \| |

### 水平线

---

---

---

### 代码

`code`

    代码块

`` 特殊 `符号` 转译测试 ``

```js
// 围栏代码块
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### 其它语法

这是脚注 [^1]

[^1]: http://markdown.p2hp.com/cheat-sheet/

~~这是删除线~~

### vuepress 不支持语法

#### 标题编号 {#custom-id}

- [x] 任务清单
- [ ] 任务清单

定义清单
: 清单一.
: 清单二.
