import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Alt Text" source="altText" />
        <BooleanInput label="Featured" source="featured" />
        <TextInput label="Height" source="height" />
        <TextInput label="URL" source="url" />
        <TextInput label="Width" source="width" />
      </SimpleForm>
    </Edit>
  );
};
