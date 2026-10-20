import { LocaleWhereUniqueInput } from "../locale/LocaleWhereUniqueInput";
import { ProductVariantUpdateManyWithoutPricesInput } from "./ProductVariantUpdateManyWithoutPricesInput";

export type PriceUpdateInput = {
  description?: string | null;
  locale?: LocaleWhereUniqueInput | null;
  name?: string | null;
  productVariants?: ProductVariantUpdateManyWithoutPricesInput;
};
