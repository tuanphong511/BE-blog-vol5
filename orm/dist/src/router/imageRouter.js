"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const likeController_1 = __importDefault(require("../controller/likeController"));
const imageRouter = (0, express_1.Router)();
imageRouter.get('/', likeController_1.default.findAll);
imageRouter.post('/', likeController_1.default.add);
imageRouter.delete('/:id', likeController_1.default.delete);
imageRouter.get('/:id', likeController_1.default.findById);
exports.default = imageRouter;
//# sourceMappingURL=imageRouter.js.map