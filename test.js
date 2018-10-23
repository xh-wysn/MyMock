define(function (require, exports, module) {

    var MyMock = require('../component/mymock');
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
    MyMock.RespJSON.start();
    MyMock.Mock().proxy(jQuery);

    setTimeout(function () {
        jQuery.getJSON('/earth/users', {type: 'book', age: 19}, function (resp) {
            console.log(resp.data);
        });

        jQuery.ajax({
            type:'post',
            url: '/earth/admins',
            data: {name: 'ych'},
            success: function (resp) {
                console.log(resp);
            },
            error: function () {
                console.log('error');
            },
            complete: function () {
                console.log('complete');
            }
        });
    },3000);


});
