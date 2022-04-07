import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregatePerson = {
  __typename?: 'AggregatePerson';
  _avg?: Maybe<PersonAvgAggregate>;
  _count?: Maybe<PersonCountAggregate>;
  _max?: Maybe<PersonMaxAggregate>;
  _min?: Maybe<PersonMinAggregate>;
  _sum?: Maybe<PersonSumAggregate>;
};

export type AggregateSpecialty = {
  __typename?: 'AggregateSpecialty';
  _avg?: Maybe<SpecialtyAvgAggregate>;
  _count?: Maybe<SpecialtyCountAggregate>;
  _max?: Maybe<SpecialtyMaxAggregate>;
  _min?: Maybe<SpecialtyMinAggregate>;
  _sum?: Maybe<SpecialtySumAggregate>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyPerson: AffectedRowsOutput;
  createManySpecialty: AffectedRowsOutput;
  createPerson: Person;
  createSpecialty: Specialty;
  deleteManyPerson: AffectedRowsOutput;
  deleteManySpecialty: AffectedRowsOutput;
  deletePerson?: Maybe<Person>;
  deleteSpecialty?: Maybe<Specialty>;
  updateManyPerson: AffectedRowsOutput;
  updateManySpecialty: AffectedRowsOutput;
  updatePerson?: Maybe<Person>;
  updateSpecialty?: Maybe<Specialty>;
  upsertPerson: Person;
  upsertSpecialty: Specialty;
};


export type MutationCreateManyPersonArgs = {
  data: Array<PersonCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySpecialtyArgs = {
  data: Array<SpecialtyCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreatePersonArgs = {
  data: PersonCreateInput;
};


export type MutationCreateSpecialtyArgs = {
  data: SpecialtyCreateInput;
};


export type MutationDeleteManyPersonArgs = {
  where?: InputMaybe<PersonWhereInput>;
};


export type MutationDeleteManySpecialtyArgs = {
  where?: InputMaybe<SpecialtyWhereInput>;
};


export type MutationDeletePersonArgs = {
  where: PersonWhereUniqueInput;
};


export type MutationDeleteSpecialtyArgs = {
  where: SpecialtyWhereUniqueInput;
};


export type MutationUpdateManyPersonArgs = {
  data: PersonUpdateManyMutationInput;
  where?: InputMaybe<PersonWhereInput>;
};


export type MutationUpdateManySpecialtyArgs = {
  data: SpecialtyUpdateManyMutationInput;
  where?: InputMaybe<SpecialtyWhereInput>;
};


export type MutationUpdatePersonArgs = {
  data: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};


export type MutationUpdateSpecialtyArgs = {
  data: SpecialtyUpdateInput;
  where: SpecialtyWhereUniqueInput;
};


export type MutationUpsertPersonArgs = {
  create: PersonCreateInput;
  update: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};


export type MutationUpsertSpecialtyArgs = {
  create: SpecialtyCreateInput;
  update: SpecialtyUpdateInput;
  where: SpecialtyWhereUniqueInput;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  _count?: Maybe<PersonCount>;
  city?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  specialties: Array<Specialty>;
  street?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};


export type PersonSpecialtiesArgs = {
  cursor?: InputMaybe<SpecialtyWhereUniqueInput>;
  distinct?: InputMaybe<Array<SpecialtyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SpecialtyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecialtyWhereInput>;
};

export type PersonAvgAggregate = {
  __typename?: 'PersonAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PersonAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PersonCount = {
  __typename?: 'PersonCount';
  specialties: Scalars['Int'];
};

export type PersonCountAggregate = {
  __typename?: 'PersonCountAggregate';
  _all: Scalars['Int'];
  city: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  phone: Scalars['Int'];
  street: Scalars['Int'];
  streetNumber: Scalars['Int'];
  website: Scalars['Int'];
  zip: Scalars['Int'];
};

export type PersonCountOrderByAggregateInput = {
  city?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  street?: InputMaybe<SortOrder>;
  streetNumber?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
  zip?: InputMaybe<SortOrder>;
};

export type PersonCreateInput = {
  city?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  specialties?: InputMaybe<SpecialtyCreateNestedManyWithoutPersonsInput>;
  street?: InputMaybe<Scalars['String']>;
  streetNumber?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type PersonCreateManyInput = {
  city?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  streetNumber?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type PersonCreateNestedManyWithoutSpecialtiesInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PersonCreateOrConnectWithoutSpecialtiesInput>>;
  create?: InputMaybe<Array<PersonCreateWithoutSpecialtiesInput>>;
};

export type PersonCreateOrConnectWithoutSpecialtiesInput = {
  create: PersonCreateWithoutSpecialtiesInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateWithoutSpecialtiesInput = {
  city?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  streetNumber?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type PersonGroupBy = {
  __typename?: 'PersonGroupBy';
  _avg?: Maybe<PersonAvgAggregate>;
  _count?: Maybe<PersonCountAggregate>;
  _max?: Maybe<PersonMaxAggregate>;
  _min?: Maybe<PersonMinAggregate>;
  _sum?: Maybe<PersonSumAggregate>;
  city?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type PersonListRelationFilter = {
  every?: InputMaybe<PersonWhereInput>;
  none?: InputMaybe<PersonWhereInput>;
  some?: InputMaybe<PersonWhereInput>;
};

export type PersonMaxAggregate = {
  __typename?: 'PersonMaxAggregate';
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type PersonMaxOrderByAggregateInput = {
  city?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  street?: InputMaybe<SortOrder>;
  streetNumber?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
  zip?: InputMaybe<SortOrder>;
};

export type PersonMinAggregate = {
  __typename?: 'PersonMinAggregate';
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type PersonMinOrderByAggregateInput = {
  city?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  street?: InputMaybe<SortOrder>;
  streetNumber?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
  zip?: InputMaybe<SortOrder>;
};

export type PersonOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PersonOrderByWithAggregationInput = {
  _avg?: InputMaybe<PersonAvgOrderByAggregateInput>;
  _count?: InputMaybe<PersonCountOrderByAggregateInput>;
  _max?: InputMaybe<PersonMaxOrderByAggregateInput>;
  _min?: InputMaybe<PersonMinOrderByAggregateInput>;
  _sum?: InputMaybe<PersonSumOrderByAggregateInput>;
  city?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  street?: InputMaybe<SortOrder>;
  streetNumber?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
  zip?: InputMaybe<SortOrder>;
};

export type PersonOrderByWithRelationInput = {
  city?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  specialties?: InputMaybe<SpecialtyOrderByRelationAggregateInput>;
  street?: InputMaybe<SortOrder>;
  streetNumber?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
  zip?: InputMaybe<SortOrder>;
};

export enum PersonScalarFieldEnum {
  City = 'city',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Phone = 'phone',
  Street = 'street',
  StreetNumber = 'streetNumber',
  Website = 'website',
  Zip = 'zip'
}

export type PersonScalarWhereInput = {
  AND?: InputMaybe<Array<PersonScalarWhereInput>>;
  NOT?: InputMaybe<Array<PersonScalarWhereInput>>;
  OR?: InputMaybe<Array<PersonScalarWhereInput>>;
  city?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  street?: InputMaybe<StringNullableFilter>;
  streetNumber?: InputMaybe<StringNullableFilter>;
  website?: InputMaybe<StringNullableFilter>;
  zip?: InputMaybe<StringNullableFilter>;
};

export type PersonScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PersonScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PersonScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PersonScalarWhereWithAggregatesInput>>;
  city?: InputMaybe<StringNullableWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringNullableWithAggregatesFilter>;
  street?: InputMaybe<StringNullableWithAggregatesFilter>;
  streetNumber?: InputMaybe<StringNullableWithAggregatesFilter>;
  website?: InputMaybe<StringNullableWithAggregatesFilter>;
  zip?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type PersonSumAggregate = {
  __typename?: 'PersonSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type PersonSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PersonUpdateInput = {
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  specialties?: InputMaybe<SpecialtyUpdateManyWithoutPersonsInput>;
  street?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  streetNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zip?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PersonUpdateManyMutationInput = {
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  street?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  streetNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zip?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PersonUpdateManyWithWhereWithoutSpecialtiesInput = {
  data: PersonUpdateManyMutationInput;
  where: PersonScalarWhereInput;
};

export type PersonUpdateManyWithoutSpecialtiesInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PersonCreateOrConnectWithoutSpecialtiesInput>>;
  create?: InputMaybe<Array<PersonCreateWithoutSpecialtiesInput>>;
  delete?: InputMaybe<Array<PersonWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PersonScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  set?: InputMaybe<Array<PersonWhereUniqueInput>>;
  update?: InputMaybe<Array<PersonUpdateWithWhereUniqueWithoutSpecialtiesInput>>;
  updateMany?: InputMaybe<Array<PersonUpdateManyWithWhereWithoutSpecialtiesInput>>;
  upsert?: InputMaybe<Array<PersonUpsertWithWhereUniqueWithoutSpecialtiesInput>>;
};

export type PersonUpdateWithWhereUniqueWithoutSpecialtiesInput = {
  data: PersonUpdateWithoutSpecialtiesInput;
  where: PersonWhereUniqueInput;
};

export type PersonUpdateWithoutSpecialtiesInput = {
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  street?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  streetNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zip?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PersonUpsertWithWhereUniqueWithoutSpecialtiesInput = {
  create: PersonCreateWithoutSpecialtiesInput;
  update: PersonUpdateWithoutSpecialtiesInput;
  where: PersonWhereUniqueInput;
};

export type PersonWhereInput = {
  AND?: InputMaybe<Array<PersonWhereInput>>;
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  OR?: InputMaybe<Array<PersonWhereInput>>;
  city?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  specialties?: InputMaybe<SpecialtyListRelationFilter>;
  street?: InputMaybe<StringNullableFilter>;
  streetNumber?: InputMaybe<StringNullableFilter>;
  website?: InputMaybe<StringNullableFilter>;
  zip?: InputMaybe<StringNullableFilter>;
};

export type PersonWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregatePerson: AggregatePerson;
  aggregateSpecialty: AggregateSpecialty;
  findFirstPerson?: Maybe<Person>;
  findFirstSpecialty?: Maybe<Specialty>;
  groupByPerson: Array<PersonGroupBy>;
  groupBySpecialty: Array<SpecialtyGroupBy>;
  people: Array<Person>;
  person?: Maybe<Person>;
  specialties: Array<Specialty>;
  specialty?: Maybe<Specialty>;
};


export type QueryAggregatePersonArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryAggregateSpecialtyArgs = {
  cursor?: InputMaybe<SpecialtyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SpecialtyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecialtyWhereInput>;
};


export type QueryFindFirstPersonArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryFindFirstSpecialtyArgs = {
  cursor?: InputMaybe<SpecialtyWhereUniqueInput>;
  distinct?: InputMaybe<Array<SpecialtyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SpecialtyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecialtyWhereInput>;
};


export type QueryGroupByPersonArgs = {
  by: Array<PersonScalarFieldEnum>;
  having?: InputMaybe<PersonScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PersonOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryGroupBySpecialtyArgs = {
  by: Array<SpecialtyScalarFieldEnum>;
  having?: InputMaybe<SpecialtyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SpecialtyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecialtyWhereInput>;
};


export type QueryPeopleArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryPersonArgs = {
  where: PersonWhereUniqueInput;
};


export type QuerySpecialtiesArgs = {
  cursor?: InputMaybe<SpecialtyWhereUniqueInput>;
  distinct?: InputMaybe<Array<SpecialtyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SpecialtyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecialtyWhereInput>;
};


export type QuerySpecialtyArgs = {
  where: SpecialtyWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Specialty = {
  __typename?: 'Specialty';
  _count?: Maybe<SpecialtyCount>;
  id: Scalars['Int'];
  name: Scalars['String'];
  persons: Array<Person>;
};


export type SpecialtyPersonsArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};

export type SpecialtyAvgAggregate = {
  __typename?: 'SpecialtyAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type SpecialtyAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type SpecialtyCount = {
  __typename?: 'SpecialtyCount';
  persons: Scalars['Int'];
};

export type SpecialtyCountAggregate = {
  __typename?: 'SpecialtyCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type SpecialtyCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type SpecialtyCreateInput = {
  name: Scalars['String'];
  persons?: InputMaybe<PersonCreateNestedManyWithoutSpecialtiesInput>;
};

export type SpecialtyCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type SpecialtyCreateNestedManyWithoutPersonsInput = {
  connect?: InputMaybe<Array<SpecialtyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SpecialtyCreateOrConnectWithoutPersonsInput>>;
  create?: InputMaybe<Array<SpecialtyCreateWithoutPersonsInput>>;
};

export type SpecialtyCreateOrConnectWithoutPersonsInput = {
  create: SpecialtyCreateWithoutPersonsInput;
  where: SpecialtyWhereUniqueInput;
};

export type SpecialtyCreateWithoutPersonsInput = {
  name: Scalars['String'];
};

export type SpecialtyGroupBy = {
  __typename?: 'SpecialtyGroupBy';
  _avg?: Maybe<SpecialtyAvgAggregate>;
  _count?: Maybe<SpecialtyCountAggregate>;
  _max?: Maybe<SpecialtyMaxAggregate>;
  _min?: Maybe<SpecialtyMinAggregate>;
  _sum?: Maybe<SpecialtySumAggregate>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type SpecialtyListRelationFilter = {
  every?: InputMaybe<SpecialtyWhereInput>;
  none?: InputMaybe<SpecialtyWhereInput>;
  some?: InputMaybe<SpecialtyWhereInput>;
};

export type SpecialtyMaxAggregate = {
  __typename?: 'SpecialtyMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type SpecialtyMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type SpecialtyMinAggregate = {
  __typename?: 'SpecialtyMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type SpecialtyMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type SpecialtyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SpecialtyOrderByWithAggregationInput = {
  _avg?: InputMaybe<SpecialtyAvgOrderByAggregateInput>;
  _count?: InputMaybe<SpecialtyCountOrderByAggregateInput>;
  _max?: InputMaybe<SpecialtyMaxOrderByAggregateInput>;
  _min?: InputMaybe<SpecialtyMinOrderByAggregateInput>;
  _sum?: InputMaybe<SpecialtySumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type SpecialtyOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  persons?: InputMaybe<PersonOrderByRelationAggregateInput>;
};

export enum SpecialtyScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type SpecialtyScalarWhereInput = {
  AND?: InputMaybe<Array<SpecialtyScalarWhereInput>>;
  NOT?: InputMaybe<Array<SpecialtyScalarWhereInput>>;
  OR?: InputMaybe<Array<SpecialtyScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type SpecialtyScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SpecialtyScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SpecialtyScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SpecialtyScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type SpecialtySumAggregate = {
  __typename?: 'SpecialtySumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type SpecialtySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type SpecialtyUpdateInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  persons?: InputMaybe<PersonUpdateManyWithoutSpecialtiesInput>;
};

export type SpecialtyUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SpecialtyUpdateManyWithWhereWithoutPersonsInput = {
  data: SpecialtyUpdateManyMutationInput;
  where: SpecialtyScalarWhereInput;
};

export type SpecialtyUpdateManyWithoutPersonsInput = {
  connect?: InputMaybe<Array<SpecialtyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SpecialtyCreateOrConnectWithoutPersonsInput>>;
  create?: InputMaybe<Array<SpecialtyCreateWithoutPersonsInput>>;
  delete?: InputMaybe<Array<SpecialtyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SpecialtyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SpecialtyWhereUniqueInput>>;
  set?: InputMaybe<Array<SpecialtyWhereUniqueInput>>;
  update?: InputMaybe<Array<SpecialtyUpdateWithWhereUniqueWithoutPersonsInput>>;
  updateMany?: InputMaybe<Array<SpecialtyUpdateManyWithWhereWithoutPersonsInput>>;
  upsert?: InputMaybe<Array<SpecialtyUpsertWithWhereUniqueWithoutPersonsInput>>;
};

export type SpecialtyUpdateWithWhereUniqueWithoutPersonsInput = {
  data: SpecialtyUpdateWithoutPersonsInput;
  where: SpecialtyWhereUniqueInput;
};

export type SpecialtyUpdateWithoutPersonsInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SpecialtyUpsertWithWhereUniqueWithoutPersonsInput = {
  create: SpecialtyCreateWithoutPersonsInput;
  update: SpecialtyUpdateWithoutPersonsInput;
  where: SpecialtyWhereUniqueInput;
};

export type SpecialtyWhereInput = {
  AND?: InputMaybe<Array<SpecialtyWhereInput>>;
  NOT?: InputMaybe<Array<SpecialtyWhereInput>>;
  OR?: InputMaybe<Array<SpecialtyWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  persons?: InputMaybe<PersonListRelationFilter>;
};

export type SpecialtyWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type PeopleQueryVariables = Exact<{ [key: string]: never; }>;


export type PeopleQuery = { __typename?: 'Query', people: Array<{ __typename?: 'Person', name: string, email: string }> };


export const PeopleDocument = gql`
    query people {
  people {
    name
    email
  }
}
    `;

/**
 * __usePeopleQuery__
 *
 * To run a query within a React component, call `usePeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeopleQuery({
 *   variables: {
 *   },
 * });
 */
export function usePeopleQuery(baseOptions?: Apollo.QueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, options);
      }
export function usePeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, options);
        }
export type PeopleQueryHookResult = ReturnType<typeof usePeopleQuery>;
export type PeopleLazyQueryHookResult = ReturnType<typeof usePeopleLazyQuery>;
export type PeopleQueryResult = Apollo.QueryResult<PeopleQuery, PeopleQueryVariables>;