import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySpecialtyArgs } from "./args/GroupBySpecialtyArgs";
import { Specialty } from "../../../models/Specialty";
import { SpecialtyGroupBy } from "../../outputs/SpecialtyGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Specialty)
export class GroupBySpecialtyResolver {
  @TypeGraphQL.Query(_returns => [SpecialtyGroupBy], {
    nullable: false
  })
  async groupBySpecialty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySpecialtyArgs): Promise<SpecialtyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).specialty.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
