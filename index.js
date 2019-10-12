require(['./jquery.js', './event.js'], function (Jquery) {
    console.log(Jquery('p').eq(0).end());
    Jquery('p').click(function () {
        console.log(21212);
    });
    Jquery('p').click(function () {
        console.log(1111);
    });

    Jquery('p').on('click', function () {
        console.log('p click');
    });

    Jquery('body').on('click', 'p', function () {
        console.log('body p click');
    });
});

// $('body').on('click', 'p', function () {
//     console.log(1111);
// });
// $('body').click(function () {
//     console.log(2121);
// });

$('p').hide();
setTimeout(function () {
    $('p').show();
    $("span").animate({opacity:'0'});
}, 1000);