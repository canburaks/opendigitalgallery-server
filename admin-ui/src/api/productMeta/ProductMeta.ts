import { Locale } from "../locale/Locale";
import { Product } from "../product/Product";

export type ProductMeta = {
  createdAt: Date;
  description: string | null;
  id: string;
  locale?: Locale | null;
  metaDescription: string | null;
  metaTitle: string | null;
  product?: Product | null;
  title: string | null;
  updatedAt: Date;
};
