import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  TextInput,
  ReferenceArrayInput,
} from "react-admin";

import { PriceTitle } from "../price/PriceTitle";
import { ProductMetaTitle } from "../productMeta/ProductMetaTitle";

export const LocaleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="Country"
          source="country"
          choices={[
            { label: "USA", value: "USA" },
            { label: "Turkey", value: "Turkey" },
            { label: "Germany", value: "Germany" },
            { label: "France", value: "France" },
            { label: "UK", value: "UK" },
            { label: "Japan", value: "Japan" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectArrayInput
          label="Currency"
          source="currency"
          choices={[
            { label: "USD", value: "USD" },
            { label: "TRY", value: "TRY" },
            { label: "EUR", value: "EUR" },
            { label: "GBP", value: "GBP" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="prices"
          reference="Price"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PriceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productMetas"
          reference="ProductMeta"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductMetaTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
