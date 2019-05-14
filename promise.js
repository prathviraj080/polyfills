class iPromose {
    constructor(fn) {
        this.value = void 0;
        this.state = '';
        const resolve = (data) => {
            this.value = data;
            if(this.onFullFill) this.onFullFill(data);
        }
        const reject = () => {
        }
        fn(resolve, reject);    
    }
    then(onfullfill, onreject) {
        this.onFullFill = onfullfill;
        if(this.value) onfullfill(this.value);
    }
}
