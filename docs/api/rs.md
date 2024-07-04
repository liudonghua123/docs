---
title: 接口文档
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

# 接口文档

Base URLs:

* <a href="https://api.ynu.edu.cn">服务地址: https://api.ynu.edu.cn</a>

# Authentication

* API Key (apikey-header-Authorization)
    - Parameter Name: **Authorization**, in: header. 

# 人事-rs

## GET 教职工列表查询

GET /v1/rs/list_jzg

教职工列表查询

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|dep|query|string| 否 |单位|
|dqztdm|query|string| 否 |当前状态代码|
|yrfsdm|query|string| 否 |用人方式代码|

> 返回示例

> 成功

```json
{
  "data": [
    {
      "XM": "XM",
      "ZGH": "ZGH"
    },
    {
      "XM": "XM",
      "ZGH": "ZGH"
    }
  ],
  "msg": null,
  "success": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» XM|string|true|none|姓名|none|
|» ZGH|string|true|none|职工号|none|

## GET 获取校聘校管人员列表

GET /v1/rs/lis_xpxg

获取校聘校管人员列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|dep|query|string| 否 |单位|

> 返回示例

> 成功

```json
{
  "data": [
    {
      "XM": "",
      "DEP": "2012",
      "DQZTDM": "22",
      "ZGH": "",
      "YRFSDM": "101"
    }
  ],
  "msg": null,
  "success": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» XM|string|true|none|姓名|none|
|» DEP|string|true|none|单位|none|
|» DQZTDM|string|true|none|当前状态代码|none|
|» ZGH|string|true|none|职工号|none|
|» YRFSDM|string|true|none|用人方式代码|none|

## GET 教职工详情查询

GET /v1/rs/detail_jzg

教职工详情查询

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|zgh|query|array[string]| 否 |职工号|

> 返回示例

> 成功

```json
{
  "data": [
    {
      "YXDM": "YXDM",
      "MZDM": "MZDM",
      "XM": "XM",
      "ZZMMDM": "ZZMMDM",
      "DQZTDM": "DQZTDM",
      "ZGH": "ZGH",
      "YRFSDM": "YRFSDM",
      "ZGXLDM": "ZGXLDM",
      "ZYJSZWJBDM": "ZYJSZWJBDM"
    }
  ],
  "msg": null,
  "success": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» YXDM|string|true|none|院系代码|none|
|» MZDM|string|true|none|民族代码|none|
|» XM|string|true|none|姓名|none|
|» ZZMMDM|string|true|none|政治面貌代码|none|
|» DQZTDM|string|true|none|当前状态代码|none|
|» ZGH|string|true|none|职工号|none|
|» YRFSDM|string|true|none|用人方式代码|none|
|» ZGXLDM|string|true|none|最高学历代码|none|
|» ZYJSZWJBDM|string|true|none|专业技术职务级别代码|none|

## GET 人事系统民族代码

GET /v1/rs/dm_mzdm

人事系统民族代码

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|dm|query|string| 否 |民族代码|

> 返回示例

> 成功

```json
{
  "data": [
    {
      "MC": "羌族",
      "DM": "33"
    }
  ],
  "msg": null,
  "success": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» MC|string|true|none|名称|none|
|» DM|string|true|none|代码|none|

## GET 人事系统政治面貌代码

GET /v1/rs/dm_zzmmdm

人事系统政治面貌代码

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|dm|query|string| 否 |政治面貌代码|

> 返回示例

> 成功

```json
{
  "data": [
    {
      "MC": "群众",
      "DM": "13"
    }
  ],
  "msg": null,
  "success": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» MC|string|true|none|名称|none|
|» DM|string|true|none|代码|none|

## GET 人事系统组织机构代码

GET /v1/rs/dm_yxdm

人事系统组织机构代码

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|dm|query|string| 否 |院系代码|
|Authorization|header|string| 是 |none|
|Content-Type|header|string| 否 |none|

> 返回示例

> 成功

```json
{
  "data": [
    {
      "MC": "党政办公室",
      "DM": "1001"
    }
  ],
  "msg": null,
  "success": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» MC|string|true|none|代码|none|
|» DM|string|true|none|名称|none|

## GET 人事教职工当前状态代码

GET /v1/rs/dm_dqztdm

人事教职工当前状态代码

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|dm|query|string| 否 |当前状态代码|

> 返回示例

> 成功

```json
{
  "data": [
    {
      "MC": "退休",
      "DM": "01"
    }
  ],
  "msg": null,
  "success": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» MC|string|true|none|代码|none|
|» DM|string|true|none|名称|none|

## GET 人事系统用人方式代码

GET /v1/rs/dm_yrfsdm

人事系统用人方式代码

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|dm|query|string| 否 |用人方式代码|

> 返回示例

> 成功

```json
{
  "data": [
    {
      "MC": "事业编制",
      "DM": "101"
    }
  ],
  "msg": null,
  "success": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» MC|string|true|none|代码|none|
|» DM|string|true|none|名称|none|

## GET 人事系统学历代码

GET /v1/rs/dm_xldm

人事系统学历代码

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|dm|query|string| 否 |学历代码|

> 返回示例

> 成功

```json
{
  "data": [
    {
      "MC": "硕士研究生毕业",
      "DM": "14"
    }
  ],
  "msg": null,
  "success": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» MC|string|true|none|名称|none|
|» DM|string|true|none|代码|none|

## GET 人事系统专业技术职务级别，党政职务代码

GET /v1/rs/dm_gbzwjb

人事系统专业技术职务级别，党政职务代码

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|dm|query|string| 否 |专业技术职务或党政职务代码|

> 返回示例

> 成功

```json
{
  "data": [
    {
      "MC": "厅级正职",
      "LS": "1",
      "DM": "121"
    }
  ],
  "msg": null,
  "success": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» MC|string|true|none|名称|none|
|» LS|string|true|none|类属|none|
|» DM|string|true|none|代码|none|

## GET 获得apisix的token

GET /gen_token

过期时间为1天

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|key|query|string| 否 |none|

> 返回示例

> 成功

```json
"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJlZTI1OTMwYzk0NjI0YTU3ZmY1NzMwNzQ3YTUyZjc4NCIsImV4cCI6MTcxODc4NDYxM30.A0V-f99nss18twxOFdBTd1rkyVmoqpUN0HhIJ3cj_SI"
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 数据模型

