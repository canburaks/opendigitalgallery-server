import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductMetaResolverBase } from "./base/productMeta.resolver.base";
import { ProductMeta } from "./base/ProductMeta";
import { ProductMetaService } from "./productMeta.service";

@graphql.Resolver(() => ProductMeta)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductMetaResolver extends ProductMetaResolverBase {
  constructor(
    protected readonly service: ProductMetaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
