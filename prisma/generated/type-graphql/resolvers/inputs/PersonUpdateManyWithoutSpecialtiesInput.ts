import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutSpecialtiesInput } from "../inputs/PersonCreateOrConnectWithoutSpecialtiesInput";
import { PersonCreateWithoutSpecialtiesInput } from "../inputs/PersonCreateWithoutSpecialtiesInput";
import { PersonScalarWhereInput } from "../inputs/PersonScalarWhereInput";
import { PersonUpdateManyWithWhereWithoutSpecialtiesInput } from "../inputs/PersonUpdateManyWithWhereWithoutSpecialtiesInput";
import { PersonUpdateWithWhereUniqueWithoutSpecialtiesInput } from "../inputs/PersonUpdateWithWhereUniqueWithoutSpecialtiesInput";
import { PersonUpsertWithWhereUniqueWithoutSpecialtiesInput } from "../inputs/PersonUpsertWithWhereUniqueWithoutSpecialtiesInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpdateManyWithoutSpecialtiesInput", {
  isAbstract: true
})
export class PersonUpdateManyWithoutSpecialtiesInput {
  @TypeGraphQL.Field(_type => [PersonCreateWithoutSpecialtiesInput], {
    nullable: true
  })
  create?: PersonCreateWithoutSpecialtiesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonCreateOrConnectWithoutSpecialtiesInput], {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutSpecialtiesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonUpsertWithWhereUniqueWithoutSpecialtiesInput], {
    nullable: true
  })
  upsert?: PersonUpsertWithWhereUniqueWithoutSpecialtiesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  set?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  delete?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  connect?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonUpdateWithWhereUniqueWithoutSpecialtiesInput], {
    nullable: true
  })
  update?: PersonUpdateWithWhereUniqueWithoutSpecialtiesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonUpdateManyWithWhereWithoutSpecialtiesInput], {
    nullable: true
  })
  updateMany?: PersonUpdateManyWithWhereWithoutSpecialtiesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PersonScalarWhereInput[] | undefined;
}
