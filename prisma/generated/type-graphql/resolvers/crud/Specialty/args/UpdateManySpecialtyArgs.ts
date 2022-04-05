import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpecialtyUpdateManyMutationInput } from "../../../inputs/SpecialtyUpdateManyMutationInput";
import { SpecialtyWhereInput } from "../../../inputs/SpecialtyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySpecialtyArgs {
  @TypeGraphQL.Field(_type => SpecialtyUpdateManyMutationInput, {
    nullable: false
  })
  data!: SpecialtyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SpecialtyWhereInput, {
    nullable: true
  })
  where?: SpecialtyWhereInput | undefined;
}
