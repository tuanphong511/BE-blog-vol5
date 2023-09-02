"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const like_1 = require("../entity/like");
class ImageService {
    constructor() {
        this.getAll = async () => {
            return await this.Repository.find({
                relation: {
                    user: true,
                }
            });
        };
        this.add = async (image) => {
            return await this.Repository.save(image);
        };
        this.delete = async (id) => {
            return await this.Repository.delete(id);
        };
        this.update = async (id) => {
            return await this.Repository.update(id);
        };
        this.findById = async (id) => {
            return await this.Repository.find({
                relation: {
                    user: true,
                }
            }, {
                where: id
            });
        };
        this.Repository = data_source_1.AppDataSource.getRepository(like_1.Like);
    }
}
exports.default = new ImageService();
//# sourceMappingURL=imageService.js.map