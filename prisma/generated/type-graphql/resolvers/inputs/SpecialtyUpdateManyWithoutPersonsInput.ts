import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpecialtyCreateOrConnectWithoutPersonsInput } from "../inputs/SpecialtyCreateOrConnectWithoutPersonsInput";
import { SpecialtyCreateWithoutPersonsInput } from "../inputs/SpecialtyCreateWithoutPersonsInput";
import { SpecialtyScalarWhereInput } from "../inputs/SpecialtyScalarWhereInput";
import { SpecialtyUpdateManyWithWhereWithoutPersonsInput } from "../inputs/SpecialtyUpdateManyWithWhereWithoutPersonsInput";
import { SpecialtyUpdateWithWhereUniqueWithoutPersonsInput } from "../inputs/SpecialtyUpdateWithWhereUniqueWithoutPersonsInput";
import { SpecialtyUpsertWithWhereUniqueWithoutPersonsInput } from "../inputs/SpecialtyUpsertWithWhereUniqueWithoutPersonsInput";
import { SpecialtyWhereUniqueInput } from "../inputs/SpecialtyWhereUniqueInput";

@TypeGraphQL.InputType("SpecialtyUpdateManyWithoutPersonsInput", {
  isAbstract: true
})
export class SpecialtyUpdateManyWithoutPersonsInput {
  @TypeGraphQL.Field(_type => [SpecialtyCreateWithoutPersonsInput], {
    nullable: true
  })
  create?: SpecialtyCreateWithoutPersonsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyCreateOrConnectWithoutPersonsInput], {
    nullable: true
  })
  connectOrCreate?: SpecialtyCreateOrConnectWithoutPersonsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyUpsertWithWhereUniqueWithoutPersonsInput], {
    nullable: true
  })
  upsert?: SpecialtyUpsertWithWhereUniqueWithoutPersonsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyWhereUniqueInput], {
    nullable: true
  })
  set?: SpecialtyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SpecialtyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyWhereUniqueInput], {
    nullable: true
  })
  delete?: SpecialtyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyWhereUniqueInput], {
    nullable: true
  })
  connect?: SpecialtyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyUpdateWithWhereUniqueWithoutPersonsInput], {
    nullable: true
  })
  update?: SpecialtyUpdateWithWhereUniqueWithoutPersonsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyUpdateManyWithWhereWithoutPersonsInput], {
    nullable: true
  })
  updateMany?: SpecialtyUpdateManyWithWhereWithoutPersonsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SpecialtyScalarWhereInput[] | undefined;
}
