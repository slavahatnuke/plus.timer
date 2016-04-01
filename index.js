var TimerService = function () {
    function Timer(name) {
        this.total = 0;
        this.name = name;

        var simpleTimer = require('simple-timer');

        this.start = function () {
            console.log('[timer]', this.name, 'started');
            simpleTimer.start(this.name);
        };

        this.log = function (context) {
            simpleTimer.stop(this.name);
            var delta = simpleTimer.get(this.name).delta;
            this.total += delta;

            console.log('[timer>]', this.name, '>', '' + context + ':', delta, 'ms', ' | [timeline]:', this.total, 'ms');
            simpleTimer.start(this.name);
        };

        this.stop = function () {
            this.log('stopping..');
            simpleTimer.stop(this.name);

            console.log('[timer total]', this.name, 'total:', this.total, 'ms');
        };
    }

    this.create = function (name) {
        return new Timer(name);
    };
};

module.exports = new TimerService();