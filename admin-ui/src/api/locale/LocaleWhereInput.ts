import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PriceListRelationFilter } from "../price/PriceListRelationFilter";
import { ProductMetaListRelationFilter } from "../productMeta/ProductMetaListRelationFilter";

export type LocaleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  prices?: PriceListRelationFilter;
  productMetas?: ProductMetaListRelationFilter;
};
