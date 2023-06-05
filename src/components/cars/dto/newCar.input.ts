import { Field, InputType, Int } from '@nestjs/graphql';
import { IsIn, Max, Min } from 'class-validator';
import { NewCarPhotoInput } from './newCarPhoto.input';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field(() => Int)
  @Min(10)
  @Max(1000)
  dailyPrice: number;

  @Field(() => Int)
  @Min(300)
  @Max(30000)
  monthlyPrice: number;

  @Field(() => Int)
  @Min(0)
  mileage: number;

  @Field()
  @IsIn(['electric', 'petrol', 'hybrid', 'diesel'], {
    message: 'allowed gas type: electric, petrol, hybrid or diesel',
  })
  gas: string;

  @Field()
  @IsIn(['auto', 'manual'], {
    message: 'allowed gear type: auto, manual',
  })
  gearType: string;

  @Field({ nullable: true })
  thumbnail: NewCarPhotoInput;
}
