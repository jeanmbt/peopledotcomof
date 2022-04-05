import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonUpdateWithoutSpecialtiesInput } from "../inputs/PersonUpdateWithoutSpecialtiesInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpdateWithWhereUniqueWithoutSpecialtiesInput", {
  isAbstract: true
})
export class PersonUpdateWithWhereUniqueWithoutSpecialtiesInput {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutSpecialtiesInput, {
    nullable: false
  })
  data!: PersonUpdateWithoutSpecialtiesInput;
}
