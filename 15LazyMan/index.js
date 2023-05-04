/*
* 主要是链式调用+异步编程
* */
function LazyMan(text) {
    this.queue = [];
    this.pushTask(1, text);
    setTimeout(async () => {
        for (let i = 0; i < this.queue.length; i++) {
            await this.queue[i].then(v => console.log(v));
        }
    }, 0);
    return this;
}

LazyMan.prototype.eat = function (text) {
    this.pushTask(1, text);
    return this;
}
LazyMan.prototype.sleep = function (time) {
    this.pushTask(2, `Sleep ${time} 毫秒`, time);
    return this;
}
LazyMan.prototype.sleepFirst = function (time) {
    this.pushTask(3, `First sleep ${time} 毫秒`, time);
    return this;
}
LazyMan.prototype.pushTask = function (type, text, time) {
    if (type === 1) {
        this.queue.push(
            new Promise(function (resolve) {
                resolve(text);
            })
        )
    } else if (type === 2) {
        this.queue.push(
            new Promise(function (resolve) {
                setTimeout(() => {
                    resolve(text);
                }, time)
            })
        )
    } else {
        this.queue.unshift(
            new Promise(function (resolve) {
                setTimeout(() => {
                    resolve(text);
                }, time)
            })
        )
    }
}

// new LazyMan(1).eat(2);
// new LazyMan(1).sleep(1000).eat(2);
// new LazyMan(1).sleepFirst(1000).eat(2);
new LazyMan(1).sleepFirst(1000).eat(2).sleep(2000).eat(3);