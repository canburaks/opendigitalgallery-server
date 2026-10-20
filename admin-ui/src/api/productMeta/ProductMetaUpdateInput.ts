import { LocaleWhereUniqueInput } from "../locale/LocaleWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductMetaUpdateInput = {
  description?: string | null;
  locale?: LocaleWhereUniqueInput | null;
  metaDescription?: string | null;
  metaTitle?: string | null;
  product?: ProductWhereUniqueInput | null;
  title?: string | null;
};
