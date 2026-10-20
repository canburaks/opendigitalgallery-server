import { Price } from "../price/Price";
import { ProductMeta } from "../productMeta/ProductMeta";

export type Locale = {
  country?: Array<"USA" | "Turkey" | "Germany" | "France" | "UK" | "Japan">;
  createdAt: Date;
  currency?: Array<"USD" | "TRY" | "EUR" | "GBP">;
  id: string;
  name: string | null;
  prices?: Array<Price>;
  productMetas?: Array<ProductMeta>;
  updatedAt: Date;
};
