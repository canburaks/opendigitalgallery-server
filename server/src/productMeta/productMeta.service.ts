import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductMetaServiceBase } from "./base/productMeta.service.base";

@Injectable()
export class ProductMetaService extends ProductMetaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
