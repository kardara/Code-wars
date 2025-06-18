"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = encode;
exports.decode = decode;
// turn vowels into numbers
function encode(string) {
    var vowelToNumber = {
        a: '1',
        e: '2',
        i: '3',
        o: '4',
        u: '5',
    };
    return string.replace(/[aeiou]/g, function (char) { return vowelToNumber[char]; });
}
// turn numbers back into vowels
function decode(string) {
    var numberToVowel = {
        '1': 'a',
        '2': 'e',
        '3': 'i',
        '4': 'o',
        '5': 'u',
    };
    return string.replace(/[1-5]/g, function (num) { return numberToVowel[num]; });
}
