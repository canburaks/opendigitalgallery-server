import { Locale } from "../locale/Locale";
import { ProductVariant } from "../productVariant/ProductVariant";

export type Price = {
  createdAt: Date;
  description: string | null;
  id: string;
  locale?: Locale | null;
  name: string | null;
  productVariants?: Array<ProductVariant>;
  updatedAt: Date;
};
