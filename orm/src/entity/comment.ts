import {Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import {User} from "./user";
import {Blog} from "./blog";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => User, (user) => user.id)
    user: User;
    @ManyToOne(() => Blog, (blog) => blog.id)
    blog: Blog;
    @Column({type:"text"})
    content: string
    @Column({type:"date"})
    date:string
}