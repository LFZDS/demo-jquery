define(function () {
   return function (selector, contenxt) {
       if (!selector) {
           return;
       }
       var contenxtOri = contenxt || document;

       // 简单举例 #name .name  p  情况 （ jquery源码复杂的多 div > .name:nth-child等， 另外 找dom是从右往左找的，为了性能)
       if (selector[0] === '#') {
           return contenxtOri.getElementById(selector);
       } else if (selector[0] === '.') {
           return contenxtOri.getElementsByClassName(selector);
       } else {
           return contenxtOri.getElementsByTagName(selector);
       }
   }
});