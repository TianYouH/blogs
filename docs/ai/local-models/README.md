# 本地模型安装及下载

本章节介绍如何在本地安装和运行 AI 大语言模型，包括使用 Ollama 和 Hugging Face 两种方式。

## 目录

- [为什么选择本地模型](#为什么选择本地模型)
- [使用 Ollama 运行本地模型](#使用-ollama-运行本地模型)
- [使用 Hugging Face 下载模型](#使用-hugging-face-下载模型)
- [常用模型推荐](#常用模型推荐)
- [本地运行注意事项](#本地运行注意事项)

## 为什么选择本地模型

在线 AI 服务（如 ChatGPT、Claude、DeepSeek 等）虽然方便，但存在以下限制：

- **网络依赖**：断网后无法使用
- **费用问题**：大量使用会产生按量计费成本
- **隐私顾虑**：敏感数据需要上传到第三方服务器
- **访问限制**：部分服务在特定地区不可用

相比之下，本地模型具有以下优势：

- **离线可用**：下载后无需网络即可使用
- **永久免费**：一次性下载，终身使用
- **隐私保护**：数据完全在本地处理，无需上传
- **自定义部署**：可以根据需求调整模型参数

## 使用 Ollama 运行本地模型

Ollama 是最简单、最方便的本地模型运行工具，支持一键下载和运行多种主流模型。

### 第一步：下载并安装 Ollama

访问官方网站下载适合你系统的安装包：

- **官方网站**：[https://ollama.com/](https://ollama.com/)
- **下载地址**：[https://ollama.com/download](https://ollama.com/download)

支持的操作系统：
- macOS
- Windows
- Linux

### 第二步：验证安装

安装完成后，打开终端或命令提示符，运行以下命令验证安装是否成功：

```bash
ollama --version
```

如果安装成功，会显示当前 Ollama 的版本号。

### 第三步：查找合适的模型

Ollama 提供了丰富的模型库，可以通过以下方式浏览和搜索模型：

- **模型搜索页面**：[https://ollama.com/search](https://ollama.com/search)
- **终端搜索命令**：
  ```bash
  ollama search <关键词>
  ```

### 第四步：下载并运行模型

使用以下命令下载并运行模型：

```bash
# 下载并运行 Llama 3 8B 模型
ollama run llama3

# 下载并运行 Qwen 7B 模型
ollama run qwen

# 下载并运行 Mistral 7B 模型
ollama run mistral
```

### 常用命令

```bash
# 查看已下载的模型
ollama list

# 删除指定模型
ollama rm <模型名称>

# 创建自定义模型
ollama create <模型名称> -f Modelfile

# 查看模型信息
ollama show <模型名称>
```

## 使用 Hugging Face 下载模型

Hugging Face 是一个开源社区平台，可以简单理解为 LLM 领域的 GitHub。

### 关于 Hugging Face

- **官方网站**：[https://huggingface.co/](https://huggingface.co/)
- **模型库**：[https://huggingface.co/models](https://huggingface.co/models)

平台特点：
- 汇集了超过 200 万个大语言模型和数据集
- 涵盖各大科技公司和研究机构的开源模型
- 提供统一的模型下载和使用接口
- 活跃的社区支持和丰富的文档资源

### 下载模型

#### 方法一：使用 git clone

```bash
# 克隆模型仓库
git clone https://huggingface.co/<用户名>/<模型名>

# 示例：克隆 Qwen-7B-Chat 模型
git clone https://huggingface.co/Qwen/Qwen-7B-Chat
```

#### 方法二：使用 huggingface-cli

```bash
# 安装 huggingface-cli
pip install huggingface-hub

# 登录（首次使用需要）
huggingface-cli login

# 下载模型
huggingface-cli download <用户名>/<模型名> --local-dir ./models/<模型名>
```

#### 方法三：使用 Python API

```python
from huggingface_hub import snapshot_download

# 下载模型到指定目录
snapshot_download(
    repo_id="Qwen/Qwen-7B-Chat",
    local_dir="./models/Qwen-7B-Chat"
)
```

## 常用模型推荐

### 推荐模型列表

| 模型名称 | 模型大小 | 特点 | 推荐场景 |
|----------|----------|------|----------|
| Llama 3 8B | 8B 参数 | Meta 开源，多语言支持 | 通用对话、日常使用 |
| Llama 3 70B | 70B 参数 | 性能优秀，功能强大 | 需要高质量输出的场景 |
| Qwen 7B | 7B 参数 | 阿里云开源，中文支持好 | 中文对话、写作辅助 |
| Qwen 14B | 14B 参数 | 平衡性能和资源占用 | 中等规模任务 |
| Mistral 7B | 7B 参数 | 效率高，响应快 | 资源受限环境 |
| Zephyr 7B | 7B 参数 | 专门优化对话场景 | 聊天机器人 |

### 模型选择建议

1. **入门尝试**：从 7B-8B 模型开始，资源占用较低
2. **日常使用**：推荐 Llama 3 8B 或 Qwen 7B
3. **追求性能**：选择 14B 或更大模型
4. **中文场景**：优先选择 Qwen 系列模型

## 本地运行注意事项

### 硬件要求

| 模型大小 | 建议显存 | 建议内存 |
|----------|----------|----------|
| 7B-8B | 8GB+ | 16GB+ |
| 14B | 16GB+ | 32GB+ |
| 70B | 48GB+ | 64GB+ |

### 性能优化建议

1. **使用量化版本**：减少显存占用，提升运行速度
2. **调整 batch size**：根据硬件配置合理设置
3. **关闭不必要的后台程序**：释放系统资源
4. **使用专用工具**：如 llama.cpp、text-generation-webui

### 常见问题

**Q：模型下载速度慢怎么办？**

A：可以尝试以下方法：
- 使用国内镜像源
- 使用 Hugging Face 镜像站
- 通过代理下载
- 选择网络空闲时段下载

**Q：显存不足怎么办？**

A：可以尝试以下方法：
- 使用更小的模型
- 使用量化版本（4-bit/8-bit）
- 降低 batch size
- 使用 CPU 运行（速度较慢）

**Q：模型格式不兼容怎么办？**

A：检查模型格式要求，使用转换工具进行格式转换，如 llama.cpp 的 convert.py 脚本。

## 参考资料

- [Ollama 官方文档](https://github.com/ollama/ollama)
- [Hugging Face 文档](https://huggingface.co/docs/)
- [llama.cpp 项目](https://github.com/ggerganov/llama.cpp)
- [text-generation-webui](https://github.com/oobabooga/text-generation-webui)