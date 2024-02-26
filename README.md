[TOC]

# 微信小程序-电子元宵贺卡

### 注意事项

该小程序不支持 skyline 渲染，请确保使用 2.29.2 以下的基础库进行测试。

### 使用说明

实现了打勾的基本功能

- [x] 1.贺卡内容可编辑（发送者)，样式自定义
- [x] 2.支持分享功能，被分享者只可查看不可编辑卡片内容
- [x] 3.背景音乐播放与暂停、音符图标旋转动画
- [ ] 3.卡片内容带入当前用户元素(昵称、头像等)

1. **导入到微信开发者工具**：打开微信开发者工具，选择根目录导入项目。
2. **运行程序**：在微信开发者工具中点击“编译”按钮，运行小程序并查看其效果。

### 效果预览

<div align=center >
    <img src="https://mmbiz.qpic.cn/mmbiz_jpg/R0b2UA2kvZhicD71lia3YHibzn0Onu1v2nPYhiaKsFBD7Rliax3KPxW70nUOibZKFUwN9LwYvyZClklHcmiatB4Zb6Wyg/640?wx_fmt=jpeg&amp;from=appmsg" width="120">
    <div>iphone 14</div>
    </div>
    
<div align=center>
    <img src="https://mmbiz.qpic.cn/mmbiz_jpg/R0b2UA2kvZhicD71lia3YHibzn0Onu1v2nPq9JaMkSRAicjY7J99Hac8m3qe6Ip57sOPib12Ac5qzzAr7TuKUQ068HA/640?wx_fmt=jpeg&amp;from=appmsg" width="150">
    <div>ipad</div>
</div>

### 文件说明

![tree](https://mmbiz.qpic.cn/mmbiz_png/R0b2UA2kvZhicD71lia3YHibzn0Onu1v2nPPZgrrU8kFsQUPPcmQhnicKt2RLCgJds6JuWbGT77NcftPUsIYiazjETQ/640?wx_fmt=png&from=appmsg")

- `index.js`: 主要实现了小程序的逻辑处理，包括用户登录、页面跳转和音乐播放等功能。包含了处理用户输入和背景音乐控制的函数。
- `index.json`: 配置了小程序页面的一些基础设置，如窗口背景色。
- `index.wxml`: 定义了小程序页面的结构和内容，包括文本输入框、按钮等 UI 组件。
- `index.wxss`: 提供了小程序页面的样式定义，包括颜色、布局和字体样式等。

### 开发参考

仓促上传，当前只得使用 webview 渲染。主要原因在于背景音乐（[《彩云追月》](https://y.qq.com/n/ryqq/songDetail/472509948?songtype=0)）部分代码。直到 2024.02.26，没能成功完成 [从 WebView 迁移](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/migration/compatibility.html) 的工作。

- [背景图片适应-博客园](https://www.cnblogs.com/huangzs/p/13646580.html)
- [替换分享卡片-哔哩哔哩](https://www.bilibili.com/video/BV1Hw411j7c5)
- [背景音乐-脚本之家](https://www.jb51.net/article/234209.htm)
