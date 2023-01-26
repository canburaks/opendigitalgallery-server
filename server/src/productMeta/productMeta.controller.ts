import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductMetaService } from "./productMeta.service";
import { ProductMetaControllerBase } from "./base/productMeta.controller.base";

@swagger.ApiTags("productMetas")
@common.Controller("productMetas")
export class ProductMetaController extends ProductMetaControllerBase {
  constructor(
    protected readonly service: ProductMetaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
