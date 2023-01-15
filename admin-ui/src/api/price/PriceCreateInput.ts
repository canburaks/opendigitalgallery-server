import { LocaleWhereUniqueInput } from "../locale/LocaleWhereUniqueInput";
import { ProductVariantCreateNestedManyWithoutPricesInput } from "./ProductVariantCreateNestedManyWithoutPricesInput";

export type PriceCreateInput = {
  description?: string | null;
  locale?: LocaleWhereUniqueInput | null;
  name?: string | null;
  productVariants?: ProductVariantCreateNestedManyWithoutPricesInput;
};
