/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductMetaWhereInput } from "./ProductMetaWhereInput";
import { Type } from "class-transformer";
import { ProductMetaOrderByInput } from "./ProductMetaOrderByInput";

@ArgsType()
class ProductMetaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductMetaWhereInput,
  })
  @Field(() => ProductMetaWhereInput, { nullable: true })
  @Type(() => ProductMetaWhereInput)
  where?: ProductMetaWhereInput;

  @ApiProperty({
    required: false,
    type: [ProductMetaOrderByInput],
  })
  @Field(() => [ProductMetaOrderByInput], { nullable: true })
  @Type(() => ProductMetaOrderByInput)
  orderBy?: Array<ProductMetaOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProductMetaFindManyArgs };
