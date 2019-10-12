function on(elem, type, selector, data, fn) {
    // 处理成add正常接收的参数

    // type 如果是object 循环不写了，看源码
    //  on('click', fn)
    if (data === undefined && fn === undefined) {
        fn = selector;
        selector = null;
    }

    // undefined 源码是null ？？？
    if (fn === undefined) {
        if (typeof selector === 'string') {
            //  on('click', 'p', fn)
            fn = data;
            data = null;
        } else {
            //  on('click', {value: 1}, fn)
            fn = data;
            data = selector;
            selector = null;
        }
    }

    for (var i=0;i<elem.length;i++){
        Jquery.add(elem[i], type, selector, data, fn);
    }
}

define(['./jquery.js'], function (Jquery) {
    ['click', 'dbclick'].forEach(function (name) {
        Jquery.fn[name] = function (data, fn) {
            this.on(name, null, data, fn);
        }
    });

    var expandNo = 'jquery1213123123';  // 随机生成

    Jquery.fn.on = function (type, selector, data, fn) {
        return on( this, type, selector, data, fn );
    };

    Jquery.add = function (elem, type, selector, data, fn) {
        // var expandNo = 'jquery1213123123'  随机生成
        var handlers;
        var elemData = elem[expandNo] = elem[expandNo]|| {};
        var events = elemData.events = elemData.events || {};
        var eventHandle = function (e) {
            Jquery.dispatch.apply(elem, arguments)
        };

        if (!(handlers = events[type])) {
            handlers = events[type] = [];
            handlers.delegateCount = 0;
            elem.addEventListener(type, eventHandle);
        }
        var handleObj = {
            handle: fn,
            selector: selector
        };
        if (selector) {
            handlers.splice(handlers.delegateCount++, 0, handleObj)
        } else {
            handlers.push(handleObj);
        }
    };

    Jquery.handlers = function (event, handlers) {
        var cur = event.target;
        var handlerQueue = [];
        var delegateCount = handlers.delegateCount;
        if (delegateCount) {
            var matchedHandlers = [];
            for (var i = 0; i < delegateCount; i++ ) {
                // 源码没有这么简单
                if (cur.tagName.toLowerCase() === handlers[i].selector.toLowerCase()) {
                    matchedHandlers.push(handlers[i]);
                }
            }
            handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
            });
        }

        if (delegateCount < handlers.length) {
            handlerQueue.push({
                elem: this,
                handlers: handlers.slice( delegateCount )
            });
        }
        return handlerQueue;
    };
    Jquery.dispatch = function (event) {
        var handlers = this[expandNo].events[event.type];
        var handlerQueue = Jquery.handlers.call( this, event, handlers );
        var i = 0;
        var matched;
        var handleObj;
        while ( matched = handlerQueue[ i++ ] ) {
            var j = 0;
            while ( handleObj = matched.handlers[ j++ ] ) {
                handleObj.handle();
            }
        }
    }
});




//
cacheData = {
  events: {
      click: [],
      dbclick: []
  }
};