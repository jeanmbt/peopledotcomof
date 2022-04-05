import * as TypeGraphQL from "type-graphql";

export enum SpecialtyScalarFieldEnum {
  id = "id",
  name = "name"
}
TypeGraphQL.registerEnumType(SpecialtyScalarFieldEnum, {
  name: "SpecialtyScalarFieldEnum",
  description: undefined,
});
