/*
* 防抖 debounce
* */

function debounce(fn, delay) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
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
            setTimeout(() => {
                fn.apply(this, arguments);
                flag = true;
            }, delay);
            flag = false;
        }
    }
}

