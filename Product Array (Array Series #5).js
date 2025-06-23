"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productArray = productArray;
function productArray(nums) {
    var l = nums.length;
    var r = new Array(l).fill(1);
    var p = 1;
    for (var i = 0; i < l; i++) {
        r[i] = p;
        p *= nums[i];
    }
    var s = 1;
    for (var i = l - 1; i >= 0; i--) {
        r[i] *= s;
        s *= nums[i];
    }
    return r;
}
