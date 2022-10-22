"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oscpu = void 0;
const os_1 = __importDefault(require("os"));
function oscpu() {
    return `${os_1.default.type()} ${os_1.default.machine()}`;
}
exports.oscpu = oscpu;
