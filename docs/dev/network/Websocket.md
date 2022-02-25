# Websocket

## 概述 

Webscoket是Web浏览器和服务器之间的一种全双工通信协议，其中WebSocket协议由IETF定为标准，WebSocket API由W3C定为标准。一旦Web客户端与服务器建立起连接，之后的全部数据通信都通过这个连接进行。通信过程中，可互相发送JSON、XML、HTML或图片等任意格式的数据。

## WS与HTTP对比

相同点主要有：
- 都是基于TCP的应用层协议；
- 都使用Request/Response模型进行连接的建立；
- 在连接的建立过程中对错误的处理方式相同，在这个阶段WS可能返回和HTTP相同的返回码；
- 都可以在网络中传输数据。

不同之处在于：
- WS使用HTTP来建立连接，但是定义了一系列新的header域，这些域在HTTP中并不会使用；
- WS的连接不能通过中间人来转发，它必须是一个直接连接；
- WS连接建立之后，通信双方都可以在任何时刻向另一方发送数据；
- WS连接建立之后，数据的传输使用帧来传递，不再需要Request消息；
- WS的数据帧有序。

> ref：
> [websocket协议详解及报文分析](https://blog.csdn.net/LL845876425/article/details/106393358)