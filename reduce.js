Object.defineProperty(Array.prototype, 'ireduce', {
writable: true,
enumerable: false, 
configurable: true,
value: function(fn, initV) {
    var sum = initV || 0;
    for(var i=0;i<this.length;i++) {
        sum=fn(sum,this[i]);
    }
    return sum;
},
});
