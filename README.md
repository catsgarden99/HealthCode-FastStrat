## 二马合一
### 感谢
几乎所有代码均来自于此，仅做轻微修改与打包
[原作者](https://github.com/qianjiachun/u-health-code)
### 效果
大大降低打开苏康码行程码的速度，在第一次配置之后均只需约1-2s即可打开(测试环境米9SE)
### 食用方法
1. 在realse中下载app
2. 手机或电脑浏览器(推荐电脑)打开[苏康码登录网站](https://scm.szgaj.cn/wjw/health_skm.html?v=1.1)
3. 输入个人信息，官方网站别怕
4. 跳转之后会去到`jsstm.jszwfw.gov.cn`这个开头的网址
5. `https://jsstm.jszwfw.gov.cn/jkmIndex.html?token=xxxxxx&uuid=bbbbbbb`类似于这样的，把`xxxxxx`部分复制出来
6. 打开app把`xxxxxx`部分粘贴进token的框框里，然后按下冲冲冲即可
7. 行程码第一次以手机号验证码获取后就依赖于缓存一直存在了
### 附加
1. 苏康码坏了什么的先尝试重置，会让你重新输token
2. 行程码显示的时间是固定的，要更新可以在苏康码界面按大数据行程卡更新
### 碎碎念
1. 有bug可以提issue(虽然我也不会修建议直接pr)
2. 原作者用的接口获取token,但是用的是无锡的,懒得找苏康码的了
3. (ios版的还不会搞
