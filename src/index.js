"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const index_1 = __importDefault(require("./components/app/index"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const error_boundry_1 = __importDefault(require("./components/error-boundry"));
const store_service_1 = __importDefault(require("./services/store-service"));
const store_service_context_1 = __importDefault(require("./components/store-service-context"));
const store_1 = __importDefault(require("./store"));
require("./index.scss");
const storeService = new store_service_1.default();
react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },
    react_1.default.createElement(error_boundry_1.default, null,
        react_1.default.createElement(store_service_context_1.default.Provider, { value: storeService },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(index_1.default, null))))), document.getElementById('root'));
//# sourceMappingURL=index.js.map