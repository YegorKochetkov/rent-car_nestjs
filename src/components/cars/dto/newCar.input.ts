import { Field, InputType, Int } from '@nestjs/graphql';
import { NewCarPhotoInput } from './newCarPhoto.input';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field(() => Int)
  dailyPrice: number;

  @Field(() => Int)
  monthlyPrice: number;

  @Field(() => Int)
  mileage: number;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field({ nullable: true })
  thumbnail: NewCarPhotoInput;
}
