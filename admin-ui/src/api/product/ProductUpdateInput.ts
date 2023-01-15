import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { ProductMetaUpdateManyWithoutProductsInput } from "./ProductMetaUpdateManyWithoutProductsInput";
import { ProductVariantUpdateManyWithoutProductsInput } from "./ProductVariantUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  productMetas?: ProductMetaUpdateManyWithoutProductsInput;
  productVariants?: ProductVariantUpdateManyWithoutProductsInput;
  slug?: string | null;
};
