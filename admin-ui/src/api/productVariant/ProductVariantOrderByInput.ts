import { SortOrder } from "../../util/SortOrder";

export type ProductVariantOrderByInput = {
  createdAt?: SortOrder;
  height?: SortOrder;
  id?: SortOrder;
  priceId?: SortOrder;
  productId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  width?: SortOrder;
};
