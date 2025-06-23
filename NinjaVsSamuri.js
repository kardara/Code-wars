"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
var Warrior = /** @class */ (function () {
    function Warrior(name) {
        this.name = name;
        this.health = 100;
    }
    Warrior.prototype.strike = function (enemy, swings) {
        enemy.health = Math.max(0, enemy.health - (swings * 10));
    };
    return Warrior;
}());
exports.Warrior = Warrior;
