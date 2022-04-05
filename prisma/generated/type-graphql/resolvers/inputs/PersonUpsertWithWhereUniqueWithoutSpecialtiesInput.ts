import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutSpecialtiesInput } from "../inputs/PersonCreateWithoutSpecialtiesInput";
import { PersonUpdateWithoutSpecialtiesInput } from "../inputs/PersonUpdateWithoutSpecialtiesInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpsertWithWhereUniqueWithoutSpecialtiesInput", {
  isAbstract: true
})
export class PersonUpsertWithWhereUniqueWithoutSpecialtiesInput {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutSpecialtiesInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutSpecialtiesInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutSpecialtiesInput, {
    nullable: false
  })
  create!: PersonCreateWithoutSpecialtiesInput;
}
