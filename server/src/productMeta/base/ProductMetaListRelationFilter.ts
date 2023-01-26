/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductMetaWhereInput } from "./ProductMetaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductMetaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductMetaWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductMetaWhereInput)
  @IsOptional()
  @Field(() => ProductMetaWhereInput, {
    nullable: true,
  })
  every?: ProductMetaWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductMetaWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductMetaWhereInput)
  @IsOptional()
  @Field(() => ProductMetaWhereInput, {
    nullable: true,
  })
  some?: ProductMetaWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductMetaWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductMetaWhereInput)
  @IsOptional()
  @Field(() => ProductMetaWhereInput, {
    nullable: true,
  })
  none?: ProductMetaWhereInput;
}
export { ProductMetaListRelationFilter };
