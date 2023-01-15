import { ProductVariant as TProductVariant } from "../api/productVariant/ProductVariant";

export const PRODUCTVARIANT_TITLE_FIELD = "title";

export const ProductVariantTitle = (record: TProductVariant): string => {
  return record.title || String(record.id);
};
