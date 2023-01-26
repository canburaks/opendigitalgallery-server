import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ImageWhereInput = {
  altText?: StringNullableFilter;
  featured?: BooleanNullableFilter;
  height?: StringNullableFilter;
  id?: StringFilter;
  url?: StringNullableFilter;
  width?: StringNullableFilter;
};
