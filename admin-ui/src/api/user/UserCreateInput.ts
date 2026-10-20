import { CustomerCreateNestedManyWithoutUsersInput } from "./CustomerCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  customers?: CustomerCreateNestedManyWithoutUsersInput;
  email: string;
  firstName?: string | null;
  isAdmin?: boolean | null;
  isStaff?: boolean | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
