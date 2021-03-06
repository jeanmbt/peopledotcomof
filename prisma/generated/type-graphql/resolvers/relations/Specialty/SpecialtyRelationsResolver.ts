import * as TypeGraphQL from "type-graphql";
import { Person } from "../../../models/Person";
import { Specialty } from "../../../models/Specialty";
import { SpecialtyPersonsArgs } from "./args/SpecialtyPersonsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Specialty)
export class SpecialtyRelationsResolver {
  map(arg0: (specialty: { id: number; name: {}; }) => JSX.Element): import("react").ReactNode {
    throw new Error("Method not implemented.");
  }
  @TypeGraphQL.FieldResolver(_type => [Person], {
    nullable: false
  })
  async persons(@TypeGraphQL.Root() specialty: Specialty, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SpecialtyPersonsArgs): Promise<Person[]> {
    return getPrismaFromContext(ctx).specialty.findUnique({
      where: {
        id: specialty.id,
      },
    }).persons(args);
  }
}
