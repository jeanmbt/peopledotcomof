import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonCreateInput } from "../../../inputs/PersonCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePersonArgs {
  @TypeGraphQL.Field(_type => PersonCreateInput, {
    nullable: false
  })
  data!: PersonCreateInput;
}
