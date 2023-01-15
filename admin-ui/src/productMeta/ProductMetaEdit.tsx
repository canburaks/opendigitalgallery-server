import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LocaleTitle } from "../locale/LocaleTitle";
import { ProductTitle } from "../product/ProductTitle";

export const ProductMetaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="locale.id" reference="Locale" label="Locale">
          <SelectInput optionText={LocaleTitle} />
        </ReferenceInput>
        <TextInput label="MetaDescription" multiline source="metaDescription" />
        <TextInput label="MetaTitle" source="metaTitle" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
