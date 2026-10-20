import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocaleWhereUniqueInput } from "../locale/LocaleWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductMetaWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  locale?: LocaleWhereUniqueInput;
  metaDescription?: StringNullableFilter;
  metaTitle?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  title?: StringNullableFilter;
};
