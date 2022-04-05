import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedManyWithoutSpecialtiesInput } from "../inputs/PersonCreateNestedManyWithoutSpecialtiesInput";

@TypeGraphQL.InputType("SpecialtyCreateInput", {
  isAbstract: true
})
export class SpecialtyCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => PersonCreateNestedManyWithoutSpecialtiesInput, {
    nullable: true
  })
  persons?: PersonCreateNestedManyWithoutSpecialtiesInput | undefined;
}
