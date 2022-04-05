import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateSpecialtyArgs } from "./args/UpdateSpecialtyArgs";
import { Specialty } from "../../../models/Specialty";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Specialty)
export class UpdateSpecialtyResolver {
  @TypeGraphQL.Mutation(_returns => Specialty, {
    nullable: true
  })
  async updateSpecialty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateSpecialtyArgs): Promise<Specialty | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).specialty.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
