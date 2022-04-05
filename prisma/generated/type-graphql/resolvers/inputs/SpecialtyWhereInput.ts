import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PersonListRelationFilter } from "../inputs/PersonListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SpecialtyWhereInput", {
  isAbstract: true
})
export class SpecialtyWhereInput {
  @TypeGraphQL.Field(_type => [SpecialtyWhereInput], {
    nullable: true
  })
  AND?: SpecialtyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyWhereInput], {
    nullable: true
  })
  OR?: SpecialtyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyWhereInput], {
    nullable: true
  })
  NOT?: SpecialtyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PersonListRelationFilter, {
    nullable: true
  })
  persons?: PersonListRelationFilter | undefined;
}
