import * as TypeGraphQL from "type-graphql";
import { Person } from "../../../models/Person";
import { Specialty } from "../../../models/Specialty";
import { PersonSpecialtiesArgs } from "./args/PersonSpecialtiesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Person)
export class PersonRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Specialty], {
    nullable: false
  })
  async specialties(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonSpecialtiesArgs): Promise<Specialty[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).specialties(args);
  }
}
