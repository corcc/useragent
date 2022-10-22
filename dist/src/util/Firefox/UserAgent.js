"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAgent = void 0;
const Version_1 = require("./Version");
const AppCodeName_1 = require("./AppCodeName");
const AppVersion_1 = require("./AppVersion");
const OSCpu_1 = require("./OSCpu");
const ProductSub_1 = require("./ProductSub");
const process_1 = __importDefault(require("process"));
process_1.default.env.FIREFOX_USER_AGENT = '';
function userAgent() {
    return __awaiter(this, void 0, void 0, function* () {
        let firefoxVersionsResponse = null;
        let firefoxVersions = null;
        if (!firefoxVersionsResponse.length) {
            firefoxVersionsResponse = yield (0, Version_1.fetchVersion)();
            firefoxVersions = JSON.parse(`${firefoxVersionsResponse}`);
        }
        const { LATEST_FIREFOX_RELEASED_DEVEL_VERSION } = firefoxVersions;
        return (process_1.default.env.FIREFOX_USER_AGENT = `${(0, AppCodeName_1.appCodeName)()}/${(0, AppVersion_1.appVersion)()} (${(0, OSCpu_1.oscpu)()}; rv:${LATEST_FIREFOX_RELEASED_DEVEL_VERSION}) Gecko/${(0, ProductSub_1.productSub)()} Firefox/${LATEST_FIREFOX_RELEASED_DEVEL_VERSION}`);
    });
}
exports.userAgent = userAgent;
