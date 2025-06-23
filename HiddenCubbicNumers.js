"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSumOfCubes = isSumOfCubes;
function isSumOfCubes(s) {
    var digitGroups = [];
    var matches = s.match(/\d+/g);
    if (!matches)
        return "Unlucky";
    for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
        var match = matches_1[_i];
        for (var i = 0; i < match.length; i += 3) {
            digitGroups.push(match.slice(i, i + 3));
        }
    }
    var cubics = digitGroups.filter(function (group) {
        var num = Number(group);
        var cubeSum = __spreadArray([], group, true).reduce(function (sum, digit) { return sum + Math.pow(Number(digit), 3); }, 0);
        return cubeSum === num;
    }).map(Number);
    if (cubics.length === 0) {
        return "Unlucky";
    }
    else {
        var sum = cubics.reduce(function (a, b) { return a + b; }, 0);
        return "".concat(cubics.join(' '), " ").concat(sum, " Lucky");
    }
}
