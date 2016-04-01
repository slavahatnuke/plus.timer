# plus.timer 
The simplest timer for debug
`npm install plus.timer --save`

#### Example:

```javascript

var timer = require('plus.timer').create('Timer #1');

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
```

#### Output:
```
[timer] Timer #1 started
[timer>] Timer #1 > Check point #1: 505 ms  | [timeline]: 505 ms
[timer>] Timer #1 > Check point #2: 206 ms  | [timeline]: 711 ms
[timer>] Timer #1 > stopping..: 305 ms  | [timeline]: 1016 ms
[timer total] Timer #1 total: 1016 ms
```

Have a nice debug :)
[plus one generation team](http://plus1generation.com)
