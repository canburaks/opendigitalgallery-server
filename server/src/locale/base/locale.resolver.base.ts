/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateLocaleArgs } from "./CreateLocaleArgs";
import { UpdateLocaleArgs } from "./UpdateLocaleArgs";
import { DeleteLocaleArgs } from "./DeleteLocaleArgs";
import { LocaleFindManyArgs } from "./LocaleFindManyArgs";
import { LocaleFindUniqueArgs } from "./LocaleFindUniqueArgs";
import { Locale } from "./Locale";
import { PriceFindManyArgs } from "../../price/base/PriceFindManyArgs";
import { Price } from "../../price/base/Price";
import { ProductMetaFindManyArgs } from "../../productMeta/base/ProductMetaFindManyArgs";
import { ProductMeta } from "../../productMeta/base/ProductMeta";
import { LocaleService } from "../locale.service";

@graphql.Resolver(() => Locale)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LocaleResolverBase {
  constructor(
    protected readonly service: LocaleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Locale",
    action: "read",
    possession: "any",
  })
  async _localesMeta(
    @graphql.Args() args: LocaleFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Locale])
  @nestAccessControl.UseRoles({
    resource: "Locale",
    action: "read",
    possession: "any",
  })
  async locales(@graphql.Args() args: LocaleFindManyArgs): Promise<Locale[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Locale, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Locale",
    action: "read",
    possession: "own",
  })
  async locale(
    @graphql.Args() args: LocaleFindUniqueArgs
  ): Promise<Locale | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Locale)
  @nestAccessControl.UseRoles({
    resource: "Locale",
    action: "create",
    possession: "any",
  })
  async createLocale(@graphql.Args() args: CreateLocaleArgs): Promise<Locale> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Locale)
  @nestAccessControl.UseRoles({
    resource: "Locale",
    action: "update",
    possession: "any",
  })
  async updateLocale(
    @graphql.Args() args: UpdateLocaleArgs
  ): Promise<Locale | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Locale)
  @nestAccessControl.UseRoles({
    resource: "Locale",
    action: "delete",
    possession: "any",
  })
  async deleteLocale(
    @graphql.Args() args: DeleteLocaleArgs
  ): Promise<Locale | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Price])
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "read",
    possession: "any",
  })
  async prices(
    @graphql.Parent() parent: Locale,
    @graphql.Args() args: PriceFindManyArgs
  ): Promise<Price[]> {
    const results = await this.service.findPrices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductMeta])
  @nestAccessControl.UseRoles({
    resource: "ProductMeta",
    action: "read",
    possession: "any",
  })
  async productMetas(
    @graphql.Parent() parent: Locale,
    @graphql.Args() args: ProductMetaFindManyArgs
  ): Promise<ProductMeta[]> {
    const results = await this.service.findProductMetas(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
