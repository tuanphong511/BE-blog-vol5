import { User } from "./user";
import { Blog } from "./blog";
export declare class Comment {
    id: number;
    user: User;
    blog: Blog;
    content: string;
    date: string;
}
