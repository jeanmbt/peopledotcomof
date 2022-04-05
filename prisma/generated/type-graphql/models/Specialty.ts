import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Person } from "../models/Person";
import { SpecialtyCount } from "../resolvers/outputs/SpecialtyCount";

@TypeGraphQL.ObjectType("Specialty", {
  isAbstract: true
})
export class Specialty {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  persons?: Person[];

  @TypeGraphQL.Field(_type => SpecialtyCount, {
    nullable: true
  })
  _count?: SpecialtyCount | null;
}
