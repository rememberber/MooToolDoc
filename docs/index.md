---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MooTool"
  text: "Handy desktop toolset for developers"
  tagline: 开发者常备桌面小工具
  image: /logo/logo-256.png
  actions:
    - theme: brand
      text: 立即下载
      link: https://github.com/rememberber/MooTool/releases
    - theme: alt
      text: 文档
      link: /function-map

features:
  - title: 随手记
    icon:
      src: /icon/edit.svg
    details: 记录代码片段、常用的SQL、常用的接口、常用的数据、暂存一些临时log等。<br/>支持丰富的快捷替换和转换操作。
  - title: 时间转换
    icon:
      src: /icon/time.svg
    details: Unix时间戳和本地时间的互相转换。<br/>操作直观，自动保存每次转换记录，支持毫秒和秒级别的时间戳。
  - title: JSON
    icon:
      src: /icon/json.svg
    details: JSON格式化、压缩、转义、解析、排序、转换等。<br/>支持JSONPath、JSON和XML互转、JSON和JavaBean互转等。
  - title: Host
    icon:
      src: /icon/check.svg
    details: Host管理，支持快速切换、添加、删除、导入、导出等。<br/>管理本地Host文件的好帮手。
  - title: HTTP
    icon:
      src: /icon/global.svg
    details: 发送和管理HTTP请求，支持GET、POST、PUT、DELETE、PATCH等请求方式。<br/>支持自定义请求头、请求体、请求参数、请求Cookie等。
  - title: 编码转换
    icon:
      src: /icon/exchange.svg
    details: 支持常见的编码转换，如Base64、URL、Unicode、HEX等。
  - title: 二维码
    icon:
      src: /icon/QRcode.svg
    details: 生成和解析二维码。<br/>自动保存历史记录。
  - title: 加解密/随机
    icon:
      src: /icon/method.svg
    details: 支持常见的加解密算法，如MD5、SHA1、AES、DES、RSA等。<br/>支持生成随机字符串、随机数字、随机密码等。
  - title: 计算
    icon:
      src: /icon/calculate.svg
    details: 四则运算、进制转换、最大公约数、最小公倍数、排列组合等。<br/>自动保存历史记录。
  - title: 网络/IP
    icon:
      src: /icon/network.svg
    details: 系统网络查询、IP地址转换、Ping、DNS刷新、本机IP列表、域名解析等。
  - title: 调色板
    icon:
      src: /icon/color.svg
    details: 颜色管理神器，支持取色、颜色选择器、颜色转换、颜色搭配等。
  - title: 图片助手
    icon:
      src: /icon/image.svg
    details: 本地图床、剪贴板图片的好去处。<br/>支持图片和Base64互转等。
  - title: 翻译
    icon:
      src: /icon/translate.svg
    details: 使用谷歌翻译API，支持自动检测语言
  - title: Cron
    icon:
      src: /icon/schedule.svg
    details: Cron表达式生成、解析、校验、计算等。<br/>支持常用的Cron表达式。<br/>支持收藏。
  - title: 正则
    icon:
      src: /icon/reg.svg
    details: 正则表达式解析、校验、匹配等。<br/>支持常用的正则表达式。<br/>支持收藏。
  - title: Java
    icon:
      src: /icon/java.svg
    details: Java和Groovy代码的解释执行。
  - title: 格式化
    icon:
      src: /icon/format_painter.svg
    details: 格式化文本或者文件，支持Nginx配置文件、XML、Java、HTML等。
  - title: PDF
    icon:
      src: /icon/pdf.svg
    details: PDF文件的合并、拆分等。
  - title: 环境变量
    icon:
      src: /icon/fx.svg
    details: 系统和Java环境变量的查看。
  - title: 配置文件转换
    icon:
      src: /icon/suffix-yml.svg
    details: 支持YAML、Properties配置文件的互转。
---

<!--@include: ./overview.md-->