import {Column, Entity, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';


@Entity('facile')
export class Facile extends BaseEntity{
  @PrimaryGeneratedColumn()
    id:number;
  
  @Column({ type: 'json' })
    mensagem: string;
   
}