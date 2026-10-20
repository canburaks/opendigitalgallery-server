import { SortOrder } from "../../util/SortOrder";

export type LocaleOrderByInput = {
  country?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
