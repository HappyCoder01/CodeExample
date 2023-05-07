/*
* 两数之和等于target
* */
function twoNumberSum(nums, target) {
    let res = [];
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            res.push([map.get(nums[i]), nums[i]])
        } else {
            map.set(target - nums[i], nums[i]);
        }
    }
    return res;
}

console.dir(twoNumberSum([1, 2, 3, 4, 3], 6));
console.dir(twoNumberSum([1, 3, 3, 4], 6));

/*
* 三数之和等于0，去重
* 核心思路，排序后方面处理，起始大于0可跳出，起始位置去重，left去重，right去重
* */
function threeNumberSum(nums) {
    let res = [];
    // 深拷贝避免影响原始数组产生副作用
    nums = JSON.parse(JSON.stringify(nums));
    // 从小到大排序方便处理
    nums.sort();

    for (let i = 0; i < nums.length; i++) {
        // 排序后如果起始位置大于零，加和一定大于零可调出循环
        if (nums[i] > 0) {
            break;
        }
        // 起始位置去重
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                // left去重
                while (left < right && nums[left + 1] === nums[left]) {
                    left++;
                }
                // right去重
                while (left < right && nums[right - 1] === nums[right]) {
                    right--;
                }
                left++;
                right--;
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }

    return res;
}

console.dir(threeNumberSum([-1, 0, 1, 2, -1, -4]))