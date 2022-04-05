import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpecialtyCreateManyInput } from "../../../inputs/SpecialtyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySpecialtyArgs {
  @TypeGraphQL.Field(_type => [SpecialtyCreateManyInput], {
    nullable: false
  })
  data!: SpecialtyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
