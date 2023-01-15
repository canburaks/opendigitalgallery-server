import { Address } from "../address/Address";
import { Order } from "../order/Order";
import { User } from "../user/User";

export type Customer = {
  address?: Address | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string | null;
  updatedAt: Date;
  user?: User | null;
};
