import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateSpecialtyArgs } from "./args/CreateSpecialtyArgs";
import { Specialty } from "../../../models/Specialty";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Specialty)
export class CreateSpecialtyResolver {
  @TypeGraphQL.Mutation(_returns => Specialty, {
    nullable: false
  })
  async createSpecialty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateSpecialtyArgs): Promise<Specialty> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).specialty.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
