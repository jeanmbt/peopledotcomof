import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpecialtyWhereInput } from "../../../inputs/SpecialtyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySpecialtyArgs {
  @TypeGraphQL.Field(_type => SpecialtyWhereInput, {
    nullable: true
  })
  where?: SpecialtyWhereInput | undefined;
}
