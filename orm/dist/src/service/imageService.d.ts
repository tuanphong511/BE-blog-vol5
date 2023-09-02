declare class ImageService {
    private Repository;
    constructor();
    getAll: () => Promise<any>;
    add: (image: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    update: (id: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
}
declare const _default: ImageService;
export default _default;
