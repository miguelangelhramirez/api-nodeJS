import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, Index, OneToOne, JoinColumn} from 'typeorm';

@Entity('roles')
export class Rol extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 255})
    nombre: string

}