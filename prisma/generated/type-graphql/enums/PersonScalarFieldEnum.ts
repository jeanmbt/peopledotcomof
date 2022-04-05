import * as TypeGraphQL from "type-graphql";

export enum PersonScalarFieldEnum {
  id = "id",
  email = "email",
  name = "name",
  phone = "phone",
  street = "street",
  streetNumber = "streetNumber",
  zip = "zip",
  city = "city",
  website = "website"
}
TypeGraphQL.registerEnumType(PersonScalarFieldEnum, {
  name: "PersonScalarFieldEnum",
  description: undefined,
});
