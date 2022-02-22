"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const cart_header_1 = __importDefault(require("../cart-header"));
const cart_list_1 = __importDefault(require("../cart-list"));
const bestsellers_1 = __importDefault(require("../bestsellers"));
const add_form_1 = __importDefault(require("../add-form"));
require("./app.scss");
const App = () => {
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement(cart_header_1.default, null),
        react_1.default.createElement(cart_list_1.default, null),
        react_1.default.createElement(bestsellers_1.default, null),
        react_1.default.createElement(add_form_1.default, null)));
};
exports.default = App;
//# sourceMappingURL=index.js.map