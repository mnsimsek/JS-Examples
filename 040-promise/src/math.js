class Math {

    Sum(a, b) {
        return a + b;
    }
    Substract(a, b) {
        return a - b;
    }

    SumLong(a, b) {
        this.Sleep();
        return a + b;
    }

    SubstractLong(a, b) {
        this.Sleep();
        return a - b;
    }

    SumLongPromise(a, b) {
        return new Promise((resolve, reject) => {
            this.Sleep();
            resolve(a + b);
        });
    }

    DivideLongPromise(a, b) {
        return new Promise((resolve, reject) => {
            this.Sleep();
            const result = a / b;
            resolve(result);
        });
    }
    DivideLongPromiseWithError(a, b) {
        return new Promise((resolve, reject) => {
            this.Sleep();
            if (b == 0)
                reject('divider is zero');

            const result = a / b;
            resolve(result);
        });
    }
    Sleep() {
        for (let index = 0; index < 1000000000; index++) {
            // waiting
        }
    }
}

module.exports = Math;