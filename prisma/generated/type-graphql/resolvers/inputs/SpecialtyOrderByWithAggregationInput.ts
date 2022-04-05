import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpecialtyAvgOrderByAggregateInput } from "../inputs/SpecialtyAvgOrderByAggregateInput";
import { SpecialtyCountOrderByAggregateInput } from "../inputs/SpecialtyCountOrderByAggregateInput";
import { SpecialtyMaxOrderByAggregateInput } from "../inputs/SpecialtyMaxOrderByAggregateInput";
import { SpecialtyMinOrderByAggregateInput } from "../inputs/SpecialtyMinOrderByAggregateInput";
import { SpecialtySumOrderByAggregateInput } from "../inputs/SpecialtySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SpecialtyOrderByWithAggregationInput", {
  isAbstract: true
})
export class SpecialtyOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SpecialtyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SpecialtyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpecialtyAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SpecialtyAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpecialtyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SpecialtyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpecialtyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SpecialtyMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpecialtySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SpecialtySumOrderByAggregateInput | undefined;
}
