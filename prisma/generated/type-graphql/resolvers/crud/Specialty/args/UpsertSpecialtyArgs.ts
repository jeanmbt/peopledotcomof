import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpecialtyCreateInput } from "../../../inputs/SpecialtyCreateInput";
import { SpecialtyUpdateInput } from "../../../inputs/SpecialtyUpdateInput";
import { SpecialtyWhereUniqueInput } from "../../../inputs/SpecialtyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSpecialtyArgs {
  @TypeGraphQL.Field(_type => SpecialtyWhereUniqueInput, {
    nullable: false
  })
  where!: SpecialtyWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpecialtyCreateInput, {
    nullable: false
  })
  create!: SpecialtyCreateInput;

  @TypeGraphQL.Field(_type => SpecialtyUpdateInput, {
    nullable: false
  })
  update!: SpecialtyUpdateInput;
}
