import { Module } from "@nestjs/common";
import { ProductMetaModuleBase } from "./base/productMeta.module.base";
import { ProductMetaService } from "./productMeta.service";
import { ProductMetaController } from "./productMeta.controller";
import { ProductMetaResolver } from "./productMeta.resolver";

@Module({
  imports: [ProductMetaModuleBase],
  controllers: [ProductMetaController],
  providers: [ProductMetaService, ProductMetaResolver],
  exports: [ProductMetaService],
})
export class ProductMetaModule {}
