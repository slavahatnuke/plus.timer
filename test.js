var timer = require('./index').create('Timer #1');

timer.start();

setTimeout(function () {
    timer.log('Check point #1');

    setTimeout(function () {
        timer.log('Check point #2');


        setTimeout(function () {
            timer.stop();

        }, 300);

    }, 200);

}, 500);