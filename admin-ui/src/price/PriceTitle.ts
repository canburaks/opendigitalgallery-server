import { Price as TPrice } from "../api/price/Price";

export const PRICE_TITLE_FIELD = "name";

export const PriceTitle = (record: TPrice): string => {
  return record.name || String(record.id);
};
