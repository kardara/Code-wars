"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcType = calcType;
function calcType(a, b, c) {
    return "addition|multiplication|subtraction|division".split('|')[a + b == c ? 0 : a * b == c ? 1 : a - b == c ? 2 : 3];
}
