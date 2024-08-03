import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <BooleanInput label="processed" source="processed" />
        <DateTimeInput label="processedAt" source="processedAt" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
