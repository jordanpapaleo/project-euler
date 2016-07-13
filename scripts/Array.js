'use strict';

if('function' !== typeof Array.prototype.sum) {
    Array.prototype.sum = function() {
        var sum = 0;

        for(var i = 0, j = this.length; i < j; i++) {
            var num = this[i];

            if(typeof num === 'number') {
                sum += num;
            }
            else {
                var parsedNum = parseFloat(num);

                if(typeof parsedNum === 'number') {
                    console.info('number 2');

                    sum += num;
                }
                else {
                    sum = NaN;
                }
            }
        }

        return sum;
    };
}

if('function' !== typeof Array.prototype.sortAsc) {
    Array.prototype.sortAsc = function() {
        var sorter = function(a, b) {
            return b - a;
        };

        return this.sort(sorter)
    };
}

if('function' !== typeof Array.prototype.sortDesc) {
    Array.prototype.sortDesc = function() {
        var sorter = function(a, b) {
            return a - b;
        };

        return this.sort(sorter)
    };
}