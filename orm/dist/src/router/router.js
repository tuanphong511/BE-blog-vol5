"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const blogRouter_1 = __importDefault(require("./blogRouter"));
const likeRouter_1 = __importDefault(require("./likeRouter"));
const router = (0, express_1.Router)();
router.use('/users', userRouter_1.default);
router.use('/blogs', blogRouter_1.default);
router.use('/likes', likeRouter_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map