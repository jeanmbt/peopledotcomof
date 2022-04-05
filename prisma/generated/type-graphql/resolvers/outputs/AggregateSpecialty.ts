import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpecialtyAvgAggregate } from "../outputs/SpecialtyAvgAggregate";
import { SpecialtyCountAggregate } from "../outputs/SpecialtyCountAggregate";
import { SpecialtyMaxAggregate } from "../outputs/SpecialtyMaxAggregate";
import { SpecialtyMinAggregate } from "../outputs/SpecialtyMinAggregate";
import { SpecialtySumAggregate } from "../outputs/SpecialtySumAggregate";

@TypeGraphQL.ObjectType("AggregateSpecialty", {
  isAbstract: true
})
export class AggregateSpecialty {
  @TypeGraphQL.Field(_type => SpecialtyCountAggregate, {
    nullable: true
  })
  _count!: SpecialtyCountAggregate | null;

  @TypeGraphQL.Field(_type => SpecialtyAvgAggregate, {
    nullable: true
  })
  _avg!: SpecialtyAvgAggregate | null;

  @TypeGraphQL.Field(_type => SpecialtySumAggregate, {
    nullable: true
  })
  _sum!: SpecialtySumAggregate | null;

  @TypeGraphQL.Field(_type => SpecialtyMinAggregate, {
    nullable: true
  })
  _min!: SpecialtyMinAggregate | null;

  @TypeGraphQL.Field(_type => SpecialtyMaxAggregate, {
    nullable: true
  })
  _max!: SpecialtyMaxAggregate | null;
}
