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

export type AggregateComment = {
  __typename?: 'AggregateComment';
  _avg?: Maybe<CommentAvgAggregate>;
  _count?: Maybe<CommentCountAggregate>;
  _max?: Maybe<CommentMaxAggregate>;
  _min?: Maybe<CommentMinAggregate>;
  _sum?: Maybe<CommentSumAggregate>;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  _avg?: Maybe<PostAvgAggregate>;
  _count?: Maybe<PostCountAggregate>;
  _max?: Maybe<PostMaxAggregate>;
  _min?: Maybe<PostMinAggregate>;
  _sum?: Maybe<PostSumAggregate>;
};

export type AggregateSpecialty = {
  __typename?: 'AggregateSpecialty';
  _avg?: Maybe<SpecialtyAvgAggregate>;
  _count?: Maybe<SpecialtyCountAggregate>;
  _max?: Maybe<SpecialtyMaxAggregate>;
  _min?: Maybe<SpecialtyMinAggregate>;
  _sum?: Maybe<SpecialtySumAggregate>;
};

export type Person = {
  __typename?: 'Person';
  _count?: Maybe<PersonCount>;
  city?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  posts: Array<Post>;
  specialties: Array<Specialty>;
  street?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};


export type PersonPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
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
  posts: Scalars['Int'];
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
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  specialties?: InputMaybe<SpecialtyCreateNestedManyWithoutPersonsInput>;
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

export type PersonCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<PersonCreateWithoutPostsInput>;
};

export type PersonCreateOrConnectWithoutPostsInput = {
  create: PersonCreateWithoutPostsInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutSpecialtiesInput = {
  create: PersonCreateWithoutSpecialtiesInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateWithoutPostsInput = {
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

export type PersonCreateWithoutSpecialtiesInput = {
  city?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
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
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
  specialties?: InputMaybe<SpecialtyOrderByRelationAggregateInput>;
  street?: InputMaybe<SortOrder>;
  streetNumber?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
  zip?: InputMaybe<SortOrder>;
};

export type PersonRelationFilter = {
  is?: InputMaybe<PersonWhereInput>;
  isNot?: InputMaybe<PersonWhereInput>;
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
  posts?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
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

export type PersonUpdateOneRequiredWithoutPostsInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<PersonCreateWithoutPostsInput>;
  update?: InputMaybe<PersonUpdateWithoutPostsInput>;
  upsert?: InputMaybe<PersonUpsertWithoutPostsInput>;
};

export type PersonUpdateWithWhereUniqueWithoutSpecialtiesInput = {
  data: PersonUpdateWithoutSpecialtiesInput;
  where: PersonWhereUniqueInput;
};

export type PersonUpdateWithoutPostsInput = {
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

export type PersonUpdateWithoutSpecialtiesInput = {
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
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

export type PersonUpsertWithoutPostsInput = {
  create: PersonCreateWithoutPostsInput;
  update: PersonUpdateWithoutPostsInput;
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
  posts?: InputMaybe<PostListRelationFilter>;
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

export type Comment = {
  __typename?: 'Comment';
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  post: Post;
  postId: Scalars['Int'];
  text: Scalars['String'];
};

export type CommentAvgAggregate = {
  __typename?: 'CommentAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

export type CommentAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type CommentCountAggregate = {
  __typename?: 'CommentCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  postId: Scalars['Int'];
  text: Scalars['Int'];
};

export type CommentCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type CommentCreateInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  post: PostCreateNestedOneWithoutCommentsInput;
  text: Scalars['String'];
};

export type CommentCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutPostInput>>;
};

export type CommentCreateOrConnectWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutPostInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  text: Scalars['String'];
};

export type CommentGroupBy = {
  __typename?: 'CommentGroupBy';
  _avg?: Maybe<CommentAvgAggregate>;
  _count?: Maybe<CommentCountAggregate>;
  _max?: Maybe<CommentMaxAggregate>;
  _min?: Maybe<CommentMinAggregate>;
  _sum?: Maybe<CommentSumAggregate>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  postId: Scalars['Int'];
  text: Scalars['String'];
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type CommentMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type CommentMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithAggregationInput = {
  _avg?: InputMaybe<CommentAvgOrderByAggregateInput>;
  _count?: InputMaybe<CommentCountOrderByAggregateInput>;
  _max?: InputMaybe<CommentMaxOrderByAggregateInput>;
  _min?: InputMaybe<CommentMinOrderByAggregateInput>;
  _sum?: InputMaybe<CommentSumOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name',
  PostId = 'postId',
  Text = 'text'
}

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  postId?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  postId?: InputMaybe<IntWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
};

export type CommentSumAggregate = {
  __typename?: 'CommentSumAggregate';
  id?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
};

export type CommentSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type CommentUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutCommentsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutPostInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutPostInput>>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  data: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutPostInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  update: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
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
  createPerson: Person;
  createComment: Comment;
  createPost: Post;
  createSpecialty: Specialty;
  deletePerson?: Maybe<Person>;
  deleteComment?: Maybe<Comment>;
  deleteManyPerson: AffectedRowsOutput;
  deleteManyComment: AffectedRowsOutput;
  deleteManyPost: AffectedRowsOutput;
  deleteManySpecialty: AffectedRowsOutput;
  deletePost?: Maybe<Post>;
  deleteSpecialty?: Maybe<Specialty>;
  updatePerson?: Maybe<Person>;
  updateComment?: Maybe<Comment>;
  updateManyPerson: AffectedRowsOutput;
  updateManyComment: AffectedRowsOutput;
  updateManyPost: AffectedRowsOutput;
  updateManySpecialty: AffectedRowsOutput;
  updatePost?: Maybe<Post>;
  updateSpecialty?: Maybe<Specialty>;
  upsertPerson: Person;
  upsertComment: Comment;
  upsertPost: Post;
  upsertSpecialty: Specialty;
};


export type MutationCreatePersonArgs = {
  data: PersonCreateInput;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateSpecialtyArgs = {
  data: SpecialtyCreateInput;
};


export type MutationDeletePersonArgs = {
  where: PersonWhereUniqueInput;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteManyPersonArgs = {
  where?: InputMaybe<PersonWhereInput>;
};


export type MutationDeleteManyCommentArgs = {
  where?: InputMaybe<CommentWhereInput>;
};


export type MutationDeleteManyPostArgs = {
  where?: InputMaybe<PostWhereInput>;
};


export type MutationDeleteManySpecialtyArgs = {
  where?: InputMaybe<SpecialtyWhereInput>;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteSpecialtyArgs = {
  where: SpecialtyWhereUniqueInput;
};


export type MutationUpdatePersonArgs = {
  data: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateManyPersonArgs = {
  data: PersonUpdateManyMutationInput;
  where?: InputMaybe<PersonWhereInput>;
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: InputMaybe<CommentWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: InputMaybe<PostWhereInput>;
};


export type MutationUpdateManySpecialtyArgs = {
  data: SpecialtyUpdateManyMutationInput;
  where?: InputMaybe<SpecialtyWhereInput>;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
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


export type MutationUpsertCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertPostArgs = {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
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

export type Post = {
  __typename?: 'Post';
  _count?: Maybe<PostCount>;
  author: Person;
  personId: Scalars['Int'];
  comments: Array<Comment>;
  content: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};


export type PostCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};

export type PostAvgAggregate = {
  __typename?: 'PostAvgAggregate';
  personId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PostAvgOrderByAggregateInput = {
  personId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PostCount = {
  __typename?: 'PostCount';
  comments: Scalars['Int'];
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  _all: Scalars['Int'];
  personId: Scalars['Int'];
  content: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
};

export type PostCountOrderByAggregateInput = {
  personId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PostCreateInput = {
  author: PersonCreateNestedOneWithoutPostsInput;
  comments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  content: Scalars['String'];
  title: Scalars['String'];
};

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
};

export type PostCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PostCreateWithoutCommentsInput>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutCommentsInput = {
  create: PostCreateWithoutCommentsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  content: Scalars['String'];
  title: Scalars['String'];
};

export type PostCreateWithoutCommentsInput = {
  author: PersonCreateNestedOneWithoutPostsInput;
  content: Scalars['String'];
  title: Scalars['String'];
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  _avg?: Maybe<PostAvgAggregate>;
  _count?: Maybe<PostCountAggregate>;
  _max?: Maybe<PostMaxAggregate>;
  _min?: Maybe<PostMinAggregate>;
  _sum?: Maybe<PostSumAggregate>;
  personId: Scalars['Int'];
  content: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  personId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type PostMaxOrderByAggregateInput = {
  personId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  personId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type PostMinOrderByAggregateInput = {
  personId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostOrderByWithAggregationInput = {
  _avg?: InputMaybe<PostAvgOrderByAggregateInput>;
  _count?: InputMaybe<PostCountOrderByAggregateInput>;
  _max?: InputMaybe<PostMaxOrderByAggregateInput>;
  _min?: InputMaybe<PostMinOrderByAggregateInput>;
  _sum?: InputMaybe<PostSumOrderByAggregateInput>;
  personId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PostOrderByWithRelationInput = {
  author?: InputMaybe<PersonOrderByWithRelationInput>;
  personId?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PostRelationFilter = {
  is?: InputMaybe<PostWhereInput>;
  isNot?: InputMaybe<PostWhereInput>;
};

export enum PostScalarFieldEnum {
  PersonId = 'personId',
  Content = 'content',
  Id = 'id',
  Title = 'title'
}

export type PostScalarWhereInput = {
  AND?: InputMaybe<Array<PostScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereInput>>;
  OR?: InputMaybe<Array<PostScalarWhereInput>>;
  personId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  personId?: InputMaybe<IntWithAggregatesFilter>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type PostSumAggregate = {
  __typename?: 'PostSumAggregate';
  personId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type PostSumOrderByAggregateInput = {
  personId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PostUpdateInput = {
  author?: InputMaybe<PersonUpdateOneRequiredWithoutPostsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPostInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostUpdateOneRequiredWithoutCommentsInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PostCreateWithoutCommentsInput>;
  update?: InputMaybe<PostUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<PostUpsertWithoutCommentsInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutAuthorInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutPostInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCommentsInput = {
  author?: InputMaybe<PersonUpdateOneRequiredWithoutPostsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  update: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutCommentsInput = {
  create: PostCreateWithoutCommentsInput;
  update: PostUpdateWithoutCommentsInput;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<PersonRelationFilter>;
  personId?: InputMaybe<IntFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregatePerson: AggregatePerson;
  aggregateComment: AggregateComment;
  aggregatePost: AggregatePost;
  aggregateSpecialty: AggregateSpecialty;
  person?: Maybe<Person>;
  persons: Array<Person>;
  comment?: Maybe<Comment>;
  comments: Array<Comment>;
  findFirstPerson?: Maybe<Person>;
  findFirstComment?: Maybe<Comment>;
  findFirstPost?: Maybe<Post>;
  findFirstSpecialty?: Maybe<Specialty>;
  groupByPerson: Array<PersonGroupBy>;
  groupByComment: Array<CommentGroupBy>;
  groupByPost: Array<PostGroupBy>;
  groupBySpecialty: Array<SpecialtyGroupBy>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  randomPerson?: Maybe<Person>;
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


export type QueryAggregateCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryAggregatePostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryAggregateSpecialtyArgs = {
  cursor?: InputMaybe<SpecialtyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SpecialtyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecialtyWhereInput>;
};


export type QueryPersonArgs = {
  where: PersonWhereUniqueInput;
};


export type QueryPersonsArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFindFirstPersonArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryFindFirstCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFindFirstPostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
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


export type QueryGroupByCommentArgs = {
  by: Array<CommentScalarFieldEnum>;
  having?: InputMaybe<CommentScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CommentOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryGroupByPostArgs = {
  by: Array<PostScalarFieldEnum>;
  having?: InputMaybe<PostScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PostOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryGroupBySpecialtyArgs = {
  by: Array<SpecialtyScalarFieldEnum>;
  having?: InputMaybe<SpecialtyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SpecialtyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecialtyWhereInput>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
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

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Specialty = {
  __typename?: 'Specialty';
  _count?: Maybe<SpecialtyCount>;
  persons: Array<Person>;
  id: Scalars['Int'];
  name: Scalars['String'];
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
  persons?: InputMaybe<PersonCreateNestedManyWithoutSpecialtiesInput>;
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
  persons?: InputMaybe<PersonOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
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
  persons?: InputMaybe<PersonUpdateManyWithoutSpecialtiesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
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
  persons?: InputMaybe<PersonListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
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
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type PersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type PersonsQuery = { __typename?: 'Query', persons: Array<{ __typename?: 'Person', name: string, email: string }> };


export const PersonsDocument = gql`
    query persons {
    persons {
    name
    email
  }
}
    `;

/**
 * __usePersonsQuery__
 *
 within a React component, call `usePersonsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePersonsQuery(baseOptions?: Apollo.QueryHookOptions<PersonsQuery, PersonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonsQuery, PersonsQueryVariables>(PersonsDocument, options);
      }
export function usePersonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonsQuery, PersonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonsQuery, PersonsQueryVariables>(PersonsDocument, options);
        }
export type PersonsQueryHookResult = ReturnType<typeof usePersonsQuery>;
export type PersonsLazyQueryHookResult = ReturnType<typeof usePersonsLazyQuery>;
export type PersonsQueryResult = Apollo.QueryResult<PersonsQuery, PersonsQueryVariables>;