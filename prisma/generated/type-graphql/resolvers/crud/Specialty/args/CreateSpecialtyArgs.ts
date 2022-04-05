import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpecialtyCreateInput } from "../../../inputs/SpecialtyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSpecialtyArgs {
  @TypeGraphQL.Field(_type => SpecialtyCreateInput, {
    nullable: false
  })
  data!: SpecialtyCreateInput;
}
