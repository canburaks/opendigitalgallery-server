import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { PriceTitle } from "../price/PriceTitle";
import { ProductTitle } from "../product/ProductTitle";

export const ProductVariantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Height" source="height" />
        <ReferenceInput source="price.id" reference="Price" label="Price">
          <SelectInput optionText={PriceTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <NumberInput step={1} label="Width" source="width" />
      </SimpleForm>
    </Edit>
  );
};
