import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpecialtyScalarWhereInput } from "../inputs/SpecialtyScalarWhereInput";
import { SpecialtyUpdateManyMutationInput } from "../inputs/SpecialtyUpdateManyMutationInput";

@TypeGraphQL.InputType("SpecialtyUpdateManyWithWhereWithoutPersonsInput", {
  isAbstract: true
})
export class SpecialtyUpdateManyWithWhereWithoutPersonsInput {
  @TypeGraphQL.Field(_type => SpecialtyScalarWhereInput, {
    nullable: false
  })
  where!: SpecialtyScalarWhereInput;

  @TypeGraphQL.Field(_type => SpecialtyUpdateManyMutationInput, {
    nullable: false
  })
  data!: SpecialtyUpdateManyMutationInput;
}
