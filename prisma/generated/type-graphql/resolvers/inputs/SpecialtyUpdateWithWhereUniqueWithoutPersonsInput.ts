import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpecialtyUpdateWithoutPersonsInput } from "../inputs/SpecialtyUpdateWithoutPersonsInput";
import { SpecialtyWhereUniqueInput } from "../inputs/SpecialtyWhereUniqueInput";

@TypeGraphQL.InputType("SpecialtyUpdateWithWhereUniqueWithoutPersonsInput", {
  isAbstract: true
})
export class SpecialtyUpdateWithWhereUniqueWithoutPersonsInput {
  @TypeGraphQL.Field(_type => SpecialtyWhereUniqueInput, {
    nullable: false
  })
  where!: SpecialtyWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpecialtyUpdateWithoutPersonsInput, {
    nullable: false
  })
  data!: SpecialtyUpdateWithoutPersonsInput;
}
