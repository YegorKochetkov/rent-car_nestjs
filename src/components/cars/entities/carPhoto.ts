import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'carsPhoto' })
@ObjectType()
export class CarPhoto {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  xs: string;

  @Column()
  @Field()
  sm: string;
}
