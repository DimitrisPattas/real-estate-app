import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

enum AdType {
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

  @Column({ name: 'area' })
  area: string;

  //   @Column({ type: 'jsonb', nullable: true })
  //   areaDetails: { placeId: string; mainText: string; secondaryText: string }[];

  @Column({ name: 'price', type: 'integer' })
  price: number;

  @Column({ name: 'description', nullable: true, type: 'text' })
  description: string;

  @Column({ nullable: true, type: 'integer' })
  level: number;

  @Column({ nullable: true, type: 'integer' })
  bathrooms: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  //   @Column({ name: 'image' })
  //   image: string;

  //   @Column('text', { array: true, nullable: true })
  //   images: string[];
}
