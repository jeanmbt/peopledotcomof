import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpecialtyCreateWithoutPersonsInput } from "../inputs/SpecialtyCreateWithoutPersonsInput";
import { SpecialtyUpdateWithoutPersonsInput } from "../inputs/SpecialtyUpdateWithoutPersonsInput";
import { SpecialtyWhereUniqueInput } from "../inputs/SpecialtyWhereUniqueInput";

@TypeGraphQL.InputType("SpecialtyUpsertWithWhereUniqueWithoutPersonsInput", {
  isAbstract: true
})
export class SpecialtyUpsertWithWhereUniqueWithoutPersonsInput {
  @TypeGraphQL.Field(_type => SpecialtyWhereUniqueInput, {
    nullable: false
  })
  where!: SpecialtyWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpecialtyUpdateWithoutPersonsInput, {
    nullable: false
  })
  update!: SpecialtyUpdateWithoutPersonsInput;

  @TypeGraphQL.Field(_type => SpecialtyCreateWithoutPersonsInput, {
    nullable: false
  })
  create!: SpecialtyCreateWithoutPersonsInput;
}
