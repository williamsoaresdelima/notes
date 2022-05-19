import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class NoteModel{
    @PrimaryGeneratedColumn()
    id: number;
    @Column('int')
    left: number;
    @Column('int')
    top: number;
    @Column({length: 255})
    description: string;
    @Column()
    createdAt: Date;
    
}