import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductVariantResolverBase } from "./base/productVariant.resolver.base";
import { ProductVariant } from "./base/ProductVariant";
import { ProductVariantService } from "./productVariant.service";

@graphql.Resolver(() => ProductVariant)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductVariantResolver extends ProductVariantResolverBase {
  constructor(
    protected readonly service: ProductVariantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
