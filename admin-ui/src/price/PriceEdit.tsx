import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LocaleTitle } from "../locale/LocaleTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";

export const PriceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="locale.id" reference="Locale" label="Locale">
          <SelectInput optionText={LocaleTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="productVariants"
          reference="ProductVariant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductVariantTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
