import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpecialtyCreateOrConnectWithoutPersonsInput } from "../inputs/SpecialtyCreateOrConnectWithoutPersonsInput";
import { SpecialtyCreateWithoutPersonsInput } from "../inputs/SpecialtyCreateWithoutPersonsInput";
import { SpecialtyWhereUniqueInput } from "../inputs/SpecialtyWhereUniqueInput";

@TypeGraphQL.InputType("SpecialtyCreateNestedManyWithoutPersonsInput", {
  isAbstract: true
})
export class SpecialtyCreateNestedManyWithoutPersonsInput {
  @TypeGraphQL.Field(_type => [SpecialtyCreateWithoutPersonsInput], {
    nullable: true
  })
  create?: SpecialtyCreateWithoutPersonsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyCreateOrConnectWithoutPersonsInput], {
    nullable: true
  })
  connectOrCreate?: SpecialtyCreateOrConnectWithoutPersonsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyWhereUniqueInput], {
    nullable: true
  })
  connect?: SpecialtyWhereUniqueInput[] | undefined;
}
