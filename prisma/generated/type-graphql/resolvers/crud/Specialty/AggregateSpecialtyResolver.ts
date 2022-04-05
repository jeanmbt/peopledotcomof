import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSpecialtyArgs } from "./args/AggregateSpecialtyArgs";
import { Specialty } from "../../../models/Specialty";
import { AggregateSpecialty } from "../../outputs/AggregateSpecialty";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Specialty)
export class AggregateSpecialtyResolver {
  @TypeGraphQL.Query(_returns => AggregateSpecialty, {
    nullable: false
  })
  async aggregateSpecialty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSpecialtyArgs): Promise<AggregateSpecialty> {
    return getPrismaFromContext(ctx).specialty.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
