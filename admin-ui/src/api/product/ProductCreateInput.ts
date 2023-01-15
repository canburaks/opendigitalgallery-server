import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { ProductMetaCreateNestedManyWithoutProductsInput } from "./ProductMetaCreateNestedManyWithoutProductsInput";
import { ProductVariantCreateNestedManyWithoutProductsInput } from "./ProductVariantCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  productMetas?: ProductMetaCreateNestedManyWithoutProductsInput;
  productVariants?: ProductVariantCreateNestedManyWithoutProductsInput;
  slug?: string | null;
};
