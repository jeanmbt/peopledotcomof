import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutSpecialtiesInput } from "../inputs/PersonCreateOrConnectWithoutSpecialtiesInput";
import { PersonCreateWithoutSpecialtiesInput } from "../inputs/PersonCreateWithoutSpecialtiesInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonCreateNestedManyWithoutSpecialtiesInput", {
  isAbstract: true
})
export class PersonCreateNestedManyWithoutSpecialtiesInput {
  @TypeGraphQL.Field(_type => [PersonCreateWithoutSpecialtiesInput], {
    nullable: true
  })
  create?: PersonCreateWithoutSpecialtiesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonCreateOrConnectWithoutSpecialtiesInput], {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutSpecialtiesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  connect?: PersonWhereUniqueInput[] | undefined;
}
