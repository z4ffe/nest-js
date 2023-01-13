import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name: 'Post'})
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number
  @Column({type: 'text'})
  text: string
}
