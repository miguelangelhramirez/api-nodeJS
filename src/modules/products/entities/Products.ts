import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity} from 'typeorm';

@Entity('productos')
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 255})
    nombre: string

    @Column('varchar', {length: 255})            
    referencia: string

    @Column()
    precio: number

    @Column()
    peso: number

    @Column('varchar', {length: 255})
    categoria: string

    @Column()
    stock: number

    @CreateDateColumn()
    fecha_creacion: Date

    @Column()
    activo: number
}