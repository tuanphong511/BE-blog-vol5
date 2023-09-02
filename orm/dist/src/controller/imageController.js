"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imageService_1 = __importDefault(require("../service/imageService"));
class ImageController {
    constructor() {
        this.findAll = async (req, res) => {
            let list = await this.imageService.getAll();
            res.json(list);
        };
        this.add = async (req, res) => {
            let list = await this.imageService.add(req.body);
            res.json("thêm thu chi thành công");
        };
        this.delete = async (req, res) => {
            await this.imageService.delete(req.params.id);
            res.json('xoá thành công');
        };
        this.update = async (req, res) => {
            await this.imageService.update(req.params.id);
            res.json('thêm thành công');
        };
        this.findById = async (req, res) => {
            let listClassRoom = await imageService_1.default.findById(req.params.id);
            res.json(listClassRoom);
        };
        this.imageService = imageService_1.default;
    }
}
exports.default = new ImageController();
//# sourceMappingURL=imageController.js.map