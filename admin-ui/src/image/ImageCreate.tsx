import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Alt Text" source="altText" />
        <BooleanInput label="Featured" source="featured" />
        <TextInput label="Height" source="height" />
        <TextInput label="URL" source="url" />
        <TextInput label="Width" source="width" />
      </SimpleForm>
    </Create>
  );
};
