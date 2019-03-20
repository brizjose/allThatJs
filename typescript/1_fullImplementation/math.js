"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var M1 = __importStar(require("./module1"));
var M2 = __importStar(require("./module2"));
var result = M1.doubleUp(3);
console.log(result);
result = M2.doubleDown(3);
console.log(result);
result = M2.logNatural(100);
console.log(result);
result = M1.sqrtOf(100);
console.log(result);
