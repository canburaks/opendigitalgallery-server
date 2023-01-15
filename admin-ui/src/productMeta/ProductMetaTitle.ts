import { ProductMeta as TProductMeta } from "../api/productMeta/ProductMeta";

export const PRODUCTMETA_TITLE_FIELD = "metaTitle";

export const ProductMetaTitle = (record: TProductMeta): string => {
  return record.metaTitle || String(record.id);
};
