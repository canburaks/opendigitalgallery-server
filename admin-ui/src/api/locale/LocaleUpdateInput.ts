import { PriceUpdateManyWithoutLocalesInput } from "./PriceUpdateManyWithoutLocalesInput";
import { ProductMetaUpdateManyWithoutLocalesInput } from "./ProductMetaUpdateManyWithoutLocalesInput";

export type LocaleUpdateInput = {
  country?: Array<"USA" | "Turkey" | "Germany" | "France" | "UK" | "Japan">;
  currency?: Array<"USD" | "TRY" | "EUR" | "GBP">;
  name?: string | null;
  prices?: PriceUpdateManyWithoutLocalesInput;
  productMetas?: ProductMetaUpdateManyWithoutLocalesInput;
};
