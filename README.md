# z-ajax
AJAX for myself
简单的AJAX请求函数
只能post一组数据对象到指定地址，服务器端收到的是表单提交数据，返回的结果将会初始化为JSON并执行回调函数
使用方法：
import zAJAX from 'z-ajax'
zAJAX(url, datas, func)
