import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ProductMetaListRelationFilter } from "../productMeta/ProductMetaListRelationFilter";
import { ProductVariantListRelationFilter } from "../productVariant/ProductVariantListRelationFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  productMetas?: ProductMetaListRelationFilter;
  productVariants?: ProductVariantListRelationFilter;
  slug?: StringNullableFilter;
};
