import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpecialtyOrderByWithRelationInput } from "../../../inputs/SpecialtyOrderByWithRelationInput";
import { SpecialtyWhereInput } from "../../../inputs/SpecialtyWhereInput";
import { SpecialtyWhereUniqueInput } from "../../../inputs/SpecialtyWhereUniqueInput";
import { SpecialtyScalarFieldEnum } from "../../../../enums/SpecialtyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSpecialtyArgs {
  @TypeGraphQL.Field(_type => SpecialtyWhereInput, {
    nullable: true
  })
  where?: SpecialtyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SpecialtyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SpecialtyWhereUniqueInput, {
    nullable: true
  })
  cursor?: SpecialtyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SpecialtyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
