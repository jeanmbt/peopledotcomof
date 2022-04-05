import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpecialtyWhereInput } from "../inputs/SpecialtyWhereInput";

@TypeGraphQL.InputType("SpecialtyListRelationFilter", {
  isAbstract: true
})
export class SpecialtyListRelationFilter {
  @TypeGraphQL.Field(_type => SpecialtyWhereInput, {
    nullable: true
  })
  every?: SpecialtyWhereInput | undefined;

  @TypeGraphQL.Field(_type => SpecialtyWhereInput, {
    nullable: true
  })
  some?: SpecialtyWhereInput | undefined;

  @TypeGraphQL.Field(_type => SpecialtyWhereInput, {
    nullable: true
  })
  none?: SpecialtyWhereInput | undefined;
}
