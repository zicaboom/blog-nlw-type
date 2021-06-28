import { Expose } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid} from "uuid"


@Entity("posts")
class Post {

    @PrimaryColumn()
    readonly id: string

    @Column()
    title: string 

    @Column()
    content: string 

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Expose({ name: "custom-title"})
    customTitle(): string{
        return `#${this.title}`
    }

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { Post }
