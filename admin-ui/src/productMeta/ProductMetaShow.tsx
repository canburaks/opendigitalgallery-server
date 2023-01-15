import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { LOCALE_TITLE_FIELD } from "../locale/LocaleTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const ProductMetaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Locale" source="locale.id" reference="Locale">
          <TextField source={LOCALE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="MetaDescription" source="metaDescription" />
        <TextField label="MetaTitle" source="metaTitle" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
