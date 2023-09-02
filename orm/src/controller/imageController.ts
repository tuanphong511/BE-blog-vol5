import blogService from "../service/blogService";
import {Request, Response} from "express";

import imageService from "../service/imageService";

class ImageController{
    private imageService

    constructor() {
        this.imageService = imageService
    }
    findAll = async (req: Request, res: Response) => {
        let list = await this.imageService.getAll();
        res.json(list);
    }
    add = async (req: Request, res: Response) => {
        let list = await this.imageService.add(req.body);
        res.json("thêm thu chi thành công");
    }
    delete =async (req: Request, res: Response) => {
        await this.imageService.delete(req.params.id);
        res.json('xoá thành công');
    }
    update =async (req: Request, res: Response) => {
        await this.imageService.update(req.params.id);
        res.json('thêm thành công');
    }


    findById = async (req: Request, res: Response) => {
        let  listClassRoom= await imageService.findById(req.params.id)
        res.json(listClassRoom);
    }

}
export default new ImageController()