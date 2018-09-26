- css 命名规范 BEM 
Block
页面是由多个Block构成的，跟其他的block区分开来，tabbar
Element_
在区块中担负的职责，取唯一性的名字
并不是简单的父子关系
_label
_icon
Modifier
状态的修改
_item_on
- WEUI
微信UI规范，内嵌公众号，小程序，调起webview，为了让用户体验一致，让用户有认同感
mobile web app
前端界面框架 weui.css
- 组件
大部分的项目，70%都是由通用组件构成的，组件，拿来用的。
1. tabbar
.tabbar>a.item>(span>img+span.badge)+p
词汇量    组件词汇量tabbar badge     一般词汇item  
良好的结构和语义化标签
flex 1:1:1

- http 状态码
有状态码，方便分析
2开头的 都是好 200
3开头的 跳转
4开头 404 not found     403 无权使用
5开头 错误