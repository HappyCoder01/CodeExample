const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function MyPromise(constructor) {
    let self = this;

    self.status = PENDING //定义状态改变前的初始状态
    self.value = undefined;//定义状态为resolved的时候的状态
    self.reason = undefined;//定义状态为rejected的时候的状态
    self.fulfilled = undefined;//fulfilled 回调执行函数队列
    self.rejected = undefined;//rejected 回调执行函数队列

    function resolve(value) {
        // 状态改变只触发一次（pending-》fulfilled），异步暂时用setTimeout模拟
        setTimeout(() => {
            if (self.status === PENDING) {
                self.status = FULFILLED;
                self.value = value;
            }

            self.fulfilled(value);
        }, 0);
    }

    function reject(reason) {
        // 状态改变只触发一次（pending-》rejected），异步暂时用setTimeout模拟
        setTimeout(() => {
            if (self.status === PENDING) {
                self.status = REJECTED;
                self.reason = reason;
            }
            self.rejected(reason);
        }, 0);
    }

    //捕获构造异常

    try {
        constructor(resolve, reject);
    } catch (e) {
        reject(e);
    }

}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    if (this.status === PENDING) {
        let self = this;

        return new MyPromise(function (resolve, reject) {
            self.fulfilled = async function (data) {
                try {
                    let value = await onFulfilled(data);
                    resolve(value);
                } catch (e) {
                    reject(e);
                }
            };

            self.rejected = async function (data) {
                try {
                    let value = await onRejected(data);
                    resolve(value);
                } catch (e) {
                    reject(e);
                }
            }
        });
    } else {
        let value = this.value;
        let reason = this.reason;
        let isFulfilled = this.status === FULFILLED;
        return new MyPromise(async function (resolve, reject) {
            try {
                let v =  isFulfilled ? await onFulfilled(value) : await onRejected(reason);
                resolve(v);
            } catch (e) {
                reject(e);
            }
        });
    }
}

