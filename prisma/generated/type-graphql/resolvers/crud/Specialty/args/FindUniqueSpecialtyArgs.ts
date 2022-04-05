import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpecialtyWhereUniqueInput } from "../../../inputs/SpecialtyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSpecialtyArgs {
  @TypeGraphQL.Field(_type => SpecialtyWhereUniqueInput, {
    nullable: false
  })
  where!: SpecialtyWhereUniqueInput;
}
