import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewCarPhotoInput {
  @Field()
  xs: string;

  @Field()
  sm: string;
}
