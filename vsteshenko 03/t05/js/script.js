'use strict'

function Calculator() {

    this.result = 0;

    this.init = function(num) {
        this.result = num;
    }
    this.add = function(num) {
        this.result += num;
    }
    this.sub = function(num) {
        this.result -= num;
    }
    this.mul = function(num) {
        this.result *= num;
    }
    this.div = function(num) {
        this.result /= num;
    }
    this.alert = function() {
        setTimeout(alert(this.result), 5000);
    }
}