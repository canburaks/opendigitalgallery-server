import { Price } from "../price/Price";
import { Product } from "../product/Product";

export type ProductVariant = {
  createdAt: Date;
  height: number | null;
  id: string;
  price?: Price | null;
  product?: Product | null;
  title: string | null;
  updatedAt: Date;
  width: number | null;
};
