---
title: auth
language_tabs:
- shell: Shell
- http: HTTP
- javascript: JavaScript
- ruby: Ruby
- python: Python
- php: PHP
- java: Java
- go: Go
  toc_footers: []
  includes: []
  search: true
  code_clipboard: true
  highlight_theme: darkula
  headingLevel: 2
  generator: "@tarslib/widdershins v4.0.23"

---

* <a href="https://api.ynu.edu.cn">服务地址: https://api.ynu.edu.cn</a>

## GET 获取token

GET /gen_token

通过当前接口获取token, 请求接口时在header中通过Authorization字段携带token, 过期时间为1天

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|key|query|string| 否 |none|

> 返回示例

> 成功

```json
"<you-generated-token>"
```




