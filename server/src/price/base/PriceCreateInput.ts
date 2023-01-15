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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { LocaleWhereUniqueInput } from "../../locale/base/LocaleWhereUniqueInput";
import { Type } from "class-transformer";
import { ProductVariantCreateNestedManyWithoutPricesInput } from "./ProductVariantCreateNestedManyWithoutPricesInput";

@InputType()
class PriceCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => LocaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocaleWhereUniqueInput)
  @IsOptional()
  @Field(() => LocaleWhereUniqueInput, {
    nullable: true,
  })
  locale?: LocaleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductVariantCreateNestedManyWithoutPricesInput,
  })
  @ValidateNested()
  @Type(() => ProductVariantCreateNestedManyWithoutPricesInput)
  @IsOptional()
  @Field(() => ProductVariantCreateNestedManyWithoutPricesInput, {
    nullable: true,
  })
  productVariants?: ProductVariantCreateNestedManyWithoutPricesInput;
}

export { PriceCreateInput };
