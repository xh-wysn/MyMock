# MyMock
模拟后台返回的数据。在后台开发未完成时用于模拟数据。
- 可代理jQuery/zepto框架的ajax方法。正常的使用ajax方法，Mock会先请求后台，如果后台开发完成，不会再代理生成数据；反之，没有后台没有完成则代理生成数据，但控制台会正常生成报错信息提醒用户。

## 返回值的基本类别

    '_string'
    '_uuid'
    '_date'
    '_stringZh'
    '_stringEn'
    '_number'


## 使用
1.MyMock.RespJSON.route(...)

配置URL地址，接受参数（http类别暂未匹配），以及返回的json格式。可以多次调用，只要在start()之前就行。
    
    MyMock.RespJSON.route({
        '/earth/users': {
            methodName: 'getUsers',
            request: {
                type: 'get', // 默认：get
                params: {
                    type: 'require',
                    name: 'optional',
                    age: '' // 默认：require
                }
            },
            response: {
                code: 0,
                message: '当前数据来自mock',
                data: {
                    id: '_uuid',
                    header: '_stringZh',
                    content: '_string',
                    date: '_date'
                }
            }
        }
    });

2.MyMock.RespJSON.start(options);

    options.root = '根目录';

3.代理jQuery/zepto库的ajax方法
    
    var mock = MyMock.Mock(); // 一个Mock实例只能代理一个库
    mock.proxy(jQuery);

4.像正常使用jQuery的ajax方法一样就行，所以日后后台完成，这里不用改动
    
    jQuery.ajax({
        url: '/news',
        data: {
            userid: 1001
        },
        success: function (resp) {
            console.log(resp);
        }
    });

    jQuery.post(...);

5.取消代理
    
    mock.unproxy();


## TO DO
1. 直接返回数据，不通过jQuery/zepto框架的ajax方法
2. 添加测试


