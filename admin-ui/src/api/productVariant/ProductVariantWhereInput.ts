import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PriceWhereUniqueInput } from "../price/PriceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductVariantWhereInput = {
  height?: IntNullableFilter;
  id?: StringFilter;
  price?: PriceWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  title?: StringNullableFilter;
  width?: IntNullableFilter;
};
