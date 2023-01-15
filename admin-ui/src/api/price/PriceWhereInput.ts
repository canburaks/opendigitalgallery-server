import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocaleWhereUniqueInput } from "../locale/LocaleWhereUniqueInput";
import { ProductVariantListRelationFilter } from "../productVariant/ProductVariantListRelationFilter";

export type PriceWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  locale?: LocaleWhereUniqueInput;
  name?: StringNullableFilter;
  productVariants?: ProductVariantListRelationFilter;
};
