"use strict";
// Giant Robot class
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
var Robot = /** @class */ (function () {
    function Robot(name, power, type) {
        this.name = name;
        this.power = power;
        this.type = type;
    }
    Robot.prototype.describe = function () {
        console.log("name: ".concat(this.name, " type: ").concat(this.type, " power: ").concat(this.power));
    };
    return Robot;
}());
exports.Robot = Robot;
// Test Robot class
var robot1 = new Robot('Bender', 100, 'Bending Robot');
robot1.describe();
