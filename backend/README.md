# 后端运行

## 安装
安装后端的所有依赖
```sh
    npm install
```
运行数据库
```sh
    npx run-rs -v 4.0.0
```

## 如何运行
修改.env中的HOSTNAME为你自己主机的hostname，不要使用localhost,或者回送地址. 
记得先创建dbName的数据库，这个不会自动创建。而collection和document都是在插入的时候自动创建.
成功运行后，可以尝试call /users端点，如果没有报错，那么数据库就成功运行了。
数据库的连接被注入到了req中，每次想要连接就可以通过req.db就行了.