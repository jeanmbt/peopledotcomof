import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpecialtyUpdateInput } from "../../../inputs/SpecialtyUpdateInput";
import { SpecialtyWhereUniqueInput } from "../../../inputs/SpecialtyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSpecialtyArgs {
  @TypeGraphQL.Field(_type => SpecialtyUpdateInput, {
    nullable: false
  })
  data!: SpecialtyUpdateInput;

  @TypeGraphQL.Field(_type => SpecialtyWhereUniqueInput, {
    nullable: false
  })
  where!: SpecialtyWhereUniqueInput;
}
