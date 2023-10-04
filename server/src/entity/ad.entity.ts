import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

export enum AdType {
  RENT = 'RENT',
  BUY = 'BUY',
  EXCHANGE = 'EXCHANGE',
  DONATION = 'DONATION',
}

@Entity()
export class Ad {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', length: 155 })
  title: string;

  @Column({
    name: 'type',
    type: 'enum',
    enum: AdType,
    default: AdType.RENT,
  })
  type: AdType;

  @Column({ name: 'area', nullable: false })
  area: string;

  @Column({ name: 'place_id', nullable: false })
  placeId: string;

  @Column({ name: 'price', type: 'integer', nullable: false })
  price: number;

  @Column({ name: 'description', nullable: true, type: 'text' })
  description: string;

  @Column({ nullable: false, type: 'integer' })
  level: number;

  @Column({ nullable: false, type: 'integer' })
  bathrooms: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
