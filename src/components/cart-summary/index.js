"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./cart-summary.scss");
const CartSummary = ({ totalCount, totalPrice }) => {
    return (react_1.default.createElement("div", { className: "cart-summary" },
        react_1.default.createElement("div", { className: "cart-summary__title" }, "Cart Summary"),
        react_1.default.createElement("div", { className: "cart-summary__row" },
            react_1.default.createElement("span", null, "Total items"),
            react_1.default.createElement("span", null, totalCount)),
        react_1.default.createElement("div", { className: "cart-summary__row free" },
            react_1.default.createElement("span", null, "Free delivery"),
            react_1.default.createElement("span", null, "0$")),
        react_1.default.createElement("div", { className: "cart-summary__row" },
            react_1.default.createElement("span", null, "Total price"),
            react_1.default.createElement("span", null,
                totalPrice,
                "$")),
        react_1.default.createElement("div", { className: "btn" }, "Proceed to checkout")));
};
exports.default = CartSummary;
//# sourceMappingURL=index.js.map