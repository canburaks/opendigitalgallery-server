import { Order } from "../order/Order";
import { ProductMeta } from "../productMeta/ProductMeta";
import { ProductVariant } from "../productVariant/ProductVariant";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  productMetas?: Array<ProductMeta>;
  productVariants?: Array<ProductVariant>;
  slug: string | null;
  updatedAt: Date;
};
