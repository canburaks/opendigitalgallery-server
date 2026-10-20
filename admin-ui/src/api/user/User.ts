import { Customer } from "../customer/Customer";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  customers?: Array<Customer>;
  email: string;
  firstName: string | null;
  id: string;
  isAdmin: boolean | null;
  isStaff: boolean | null;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
