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
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const tsodinPog = yield stbi_load_from_url("img/tsodinPog.png");
        const tsodinThink = yield stbi_load_from_url("img/tsodinThink.png");
        const appId = "app";
        const app = document.getElementById(appId);
        if (app === null) {
            throw new Error(`Could not find canvas with id ${appId}`);
        }
        app.width = tsodinPog.width + tsodinThink.width;
        app.height = Math.max(tsodinPog.height, tsodinThink.height);
        const ctx = app.getContext("2d");
        if (ctx === null) {
            throw new Error("Could not create 2d context");
        }
        ctx.putImageData(tsodinPog, 0, 0);
        ctx.putImageData(tsodinThink, tsodinPog.width, 0);
    });
}
start();
//# sourceMappingURL=index.js.map