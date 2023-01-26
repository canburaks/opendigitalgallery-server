import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LocaleService } from "./locale.service";
import { LocaleControllerBase } from "./base/locale.controller.base";

@swagger.ApiTags("locales")
@common.Controller("locales")
export class LocaleController extends LocaleControllerBase {
  constructor(
    protected readonly service: LocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
