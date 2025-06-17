"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printerError = printerError;
function printerError(s) {
    var validColors = /^[a-m]$/;
    var errorCount = 0;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (!validColors.test(char)) {
            errorCount++;
        }
    }
    return "".concat(errorCount, "/").concat(s.length);
}
