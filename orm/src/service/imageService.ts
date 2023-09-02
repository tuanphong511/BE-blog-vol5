import {AppDataSource} from "../data-source";
import {User} from "../entity/user";
import {Blog} from "../entity/blog";
import {Like} from "../entity/like";

class ImageService{
    private Repository
    constructor() {
        this.Repository = AppDataSource.getRepository(Like);
    }
    getAll = async () => {
        return await this.Repository.find({
            relation: {
                user: true,
            }
        })
    }
    add = async (image) => {
        return await this.Repository.save(image)
    }
    delete = async (id) => {
        return await this.Repository.delete(id)
    }
    update = async (id) => {
        return await this.Repository.update(id)
    }

    findById = async (id) => {
        return await this.Repository.find(
            {
                relation:{
                    user: true,
                }
            },
            {
                where: id
            }

        )
    }



}
export default new ImageService()