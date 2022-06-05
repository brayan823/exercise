import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Tea')
export class Tea {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  img: string;
}
