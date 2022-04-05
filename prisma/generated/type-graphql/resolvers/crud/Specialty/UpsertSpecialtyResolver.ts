import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertSpecialtyArgs } from "./args/UpsertSpecialtyArgs";
import { Specialty } from "../../../models/Specialty";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Specialty)
export class UpsertSpecialtyResolver {
  @TypeGraphQL.Mutation(_returns => Specialty, {
    nullable: false
  })
  async upsertSpecialty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertSpecialtyArgs): Promise<Specialty> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).specialty.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
