import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Coffee')
export class Coffee {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: false })
  img: string;
}
