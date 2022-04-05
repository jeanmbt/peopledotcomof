import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SpecialtyScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SpecialtyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SpecialtyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SpecialtyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SpecialtyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SpecialtyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
