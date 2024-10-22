import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, Index, OneToOne, JoinColumn, ManyToOne} from 'typeorm';
import { Rol } from '../../roles/entities/Roles';

@Entity('usuarios')
export class Usuario extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 255})
    nombre: string

    @Column('int')
    documento: number

    @Index({ unique: true })
    @Column('varchar')
    email: string

    @Index({ unique: true })
    @Column('varchar')
    username: string

    @Column('varchar')
    password: string

    @ManyToOne(() => Rol)
    @JoinColumn()
    rol: Rol

    @Column('boolean', {default: true})
    activo: number

}