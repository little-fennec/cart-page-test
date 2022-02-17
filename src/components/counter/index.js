"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./counter.scss");
const Counter = () => {
    return (react_1.default.createElement("div", { className: "counter" },
        react_1.default.createElement("button", { className: "btn-minus" }, "-"),
        react_1.default.createElement("input", { type: "text", className: "counter-amount", value: 3 }),
        react_1.default.createElement("button", { className: "btn-plus" }, "+")));
};
exports.default = Counter;
//# sourceMappingURL=index.js.map