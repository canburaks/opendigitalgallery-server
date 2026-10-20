import { PriceWhereUniqueInput } from "../price/PriceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductVariantUpdateInput = {
  height?: number | null;
  price?: PriceWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  title?: string | null;
  width?: number | null;
};
