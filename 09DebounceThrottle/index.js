/*
* 防抖 debounce
* */

function debounce(fn, delay) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout((...args) => {
            fn.apply(this, args);
        }, delay);
    }
}


/*
* 节流 throttle
* */

function throttle(fn, delay) {
    let flag = true;
    return function () {
        if (flag) {
            setTimeout((...args) => {
                fn.apply(this, args);
                flag = true;
            }, delay);
            flag = false;
        }
    }
}

