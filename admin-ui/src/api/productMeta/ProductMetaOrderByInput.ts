import { SortOrder } from "../../util/SortOrder";

export type ProductMetaOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  localeId?: SortOrder;
  metaDescription?: SortOrder;
  metaTitle?: SortOrder;
  productId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
