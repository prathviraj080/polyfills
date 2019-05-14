function curry(f) {
    return function curryfy() {
        var args = Array.prototype.slice.call(arguments);
        return args.length >= f.length ? f.apply(null, args) : curryfy.bind(null, ...args);
    }
}
