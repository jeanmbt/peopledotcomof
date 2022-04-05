import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutSpecialtiesInput } from "../inputs/PersonCreateWithoutSpecialtiesInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonCreateOrConnectWithoutSpecialtiesInput", {
  isAbstract: true
})
export class PersonCreateOrConnectWithoutSpecialtiesInput {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutSpecialtiesInput, {
    nullable: false
  })
  create!: PersonCreateWithoutSpecialtiesInput;
}
