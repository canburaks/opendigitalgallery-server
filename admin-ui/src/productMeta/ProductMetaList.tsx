import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LOCALE_TITLE_FIELD } from "../locale/LocaleTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const ProductMetaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProductMetas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
