import { Field, ObjectType } from '@nestjs/graphql';
import { CarPhoto } from './carPhoto';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'cars' })
@ObjectType()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  dailyPrice: number;

  @Column()
  @Field()
  monthlyPrice: number;

  @Column()
  @Field()
  mileage: number;

  @Column()
  @Field()
  gas: string;

  @Column()
  @Field()
  gearType: string;

  @OneToOne(() => CarPhoto)
  @JoinColumn()
  photos: CarPhoto;
}
