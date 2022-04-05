import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpecialtyCreateNestedManyWithoutPersonsInput } from "../inputs/SpecialtyCreateNestedManyWithoutPersonsInput";

@TypeGraphQL.InputType("PersonCreateInput", {
  isAbstract: true
})
export class PersonCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  street?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  streetNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zip?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => SpecialtyCreateNestedManyWithoutPersonsInput, {
    nullable: true
  })
  specialties?: SpecialtyCreateNestedManyWithoutPersonsInput | undefined;
}
