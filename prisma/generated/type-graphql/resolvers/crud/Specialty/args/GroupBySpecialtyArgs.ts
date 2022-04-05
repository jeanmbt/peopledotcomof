import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpecialtyOrderByWithAggregationInput } from "../../../inputs/SpecialtyOrderByWithAggregationInput";
import { SpecialtyScalarWhereWithAggregatesInput } from "../../../inputs/SpecialtyScalarWhereWithAggregatesInput";
import { SpecialtyWhereInput } from "../../../inputs/SpecialtyWhereInput";
import { SpecialtyScalarFieldEnum } from "../../../../enums/SpecialtyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySpecialtyArgs {
  @TypeGraphQL.Field(_type => SpecialtyWhereInput, {
    nullable: true
  })
  where?: SpecialtyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SpecialtyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => SpecialtyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SpecialtyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
