import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonUpdateManyWithoutSpecialtiesInput } from "../inputs/PersonUpdateManyWithoutSpecialtiesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SpecialtyUpdateInput", {
  isAbstract: true
})
export class SpecialtyUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateManyWithoutSpecialtiesInput, {
    nullable: true
  })
  persons?: PersonUpdateManyWithoutSpecialtiesInput | undefined;
}
