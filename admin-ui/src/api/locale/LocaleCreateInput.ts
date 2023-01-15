import { PriceCreateNestedManyWithoutLocalesInput } from "./PriceCreateNestedManyWithoutLocalesInput";
import { ProductMetaCreateNestedManyWithoutLocalesInput } from "./ProductMetaCreateNestedManyWithoutLocalesInput";

export type LocaleCreateInput = {
  country?: Array<"USA" | "Turkey" | "Germany" | "France" | "UK" | "Japan">;
  currency?: Array<"USD" | "TRY" | "EUR" | "GBP">;
  name?: string | null;
  prices?: PriceCreateNestedManyWithoutLocalesInput;
  productMetas?: ProductMetaCreateNestedManyWithoutLocalesInput;
};
