define(['./select.js'], function (select) {
    Jquery = function(selector, contenxt) {
        return new Jquery.fn.init(selector, contenxt);
    };

    Jquery.fn = Jquery.prototype = {
        length: 0,
        constructor: Jquery,
        toArray: function () {
            console.log(this, arguments);
        },
        eq: function (index) {
            return this.pushStack([this[index]]);
        },
        pushStack: function (elems) {
            // this.constructor() return一个jquery为了链式调用
            var ret = Jquery.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
        },
        end: function () {
            return this.prevObject || this.constructor();
        }
    };

    var init = Jquery.fn.init = function (selector, contenxt) {
        // 返回非基本类型 new init()接收return  否则是该实例对象
        var selects = select(selector, contenxt) || [];
        this.length = selects.length;
        for(var i= 0; i < selects.length; i++) {
            this[i] = selects[i];
        }
        return this;
    };

    init.prototype = Jquery.fn;

    // jquery用Jquery,extent定义的
    Jquery.merge = function (first, second) {
        var len = +second.length,
            j = 0,
            i = first.length;

        for ( ; j < len; j++ ) {
            first[ i++ ] = second[ j ];
        }

        first.length = i;

        return first;
    };

    return Jquery;
});



