import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SpecialtyScalarWhereInput", {
  isAbstract: true
})
export class SpecialtyScalarWhereInput {
  @TypeGraphQL.Field(_type => [SpecialtyScalarWhereInput], {
    nullable: true
  })
  AND?: SpecialtyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyScalarWhereInput], {
    nullable: true
  })
  OR?: SpecialtyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyScalarWhereInput], {
    nullable: true
  })
  NOT?: SpecialtyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
