import { CustomerUpdateManyWithoutUsersInput } from "./CustomerUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  customers?: CustomerUpdateManyWithoutUsersInput;
  email?: string;
  firstName?: string | null;
  isAdmin?: boolean | null;
  isStaff?: boolean | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
