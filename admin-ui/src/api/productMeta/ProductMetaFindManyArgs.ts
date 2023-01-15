import { ProductMetaWhereInput } from "./ProductMetaWhereInput";
import { ProductMetaOrderByInput } from "./ProductMetaOrderByInput";

export type ProductMetaFindManyArgs = {
  where?: ProductMetaWhereInput;
  orderBy?: Array<ProductMetaOrderByInput>;
  skip?: number;
  take?: number;
};
