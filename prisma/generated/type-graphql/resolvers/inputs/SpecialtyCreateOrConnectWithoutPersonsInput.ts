import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpecialtyCreateWithoutPersonsInput } from "../inputs/SpecialtyCreateWithoutPersonsInput";
import { SpecialtyWhereUniqueInput } from "../inputs/SpecialtyWhereUniqueInput";

@TypeGraphQL.InputType("SpecialtyCreateOrConnectWithoutPersonsInput", {
  isAbstract: true
})
export class SpecialtyCreateOrConnectWithoutPersonsInput {
  @TypeGraphQL.Field(_type => SpecialtyWhereUniqueInput, {
    nullable: false
  })
  where!: SpecialtyWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpecialtyCreateWithoutPersonsInput, {
    nullable: false
  })
  create!: SpecialtyCreateWithoutPersonsInput;
}
