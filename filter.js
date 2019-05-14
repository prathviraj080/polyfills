Object.defineProperty(Array.prototype, 'ifilter', {
writable: true,
enumerable: false, 
configurable: true,
value: function(fn, args) {
    debugger;
    var newArr = [];
    for(var i=0;i<this.length;i++) {
        var m = fn(this[i]);
        if(m) newArr.push(this[i]);
    }
    return newArr;
},
})
