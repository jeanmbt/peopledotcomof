import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Person: crudResolvers.PersonCrudResolver,
  Specialty: crudResolvers.SpecialtyCrudResolver
};
const actionResolversMap = {
  Person: {
    person: actionResolvers.FindUniquePersonResolver,
    findFirstPerson: actionResolvers.FindFirstPersonResolver,
    people: actionResolvers.FindManyPersonResolver,
    createPerson: actionResolvers.CreatePersonResolver,
    createManyPerson: actionResolvers.CreateManyPersonResolver,
    deletePerson: actionResolvers.DeletePersonResolver,
    updatePerson: actionResolvers.UpdatePersonResolver,
    deleteManyPerson: actionResolvers.DeleteManyPersonResolver,
    updateManyPerson: actionResolvers.UpdateManyPersonResolver,
    upsertPerson: actionResolvers.UpsertPersonResolver,
    aggregatePerson: actionResolvers.AggregatePersonResolver,
    groupByPerson: actionResolvers.GroupByPersonResolver
  },
  Specialty: {
    specialty: actionResolvers.FindUniqueSpecialtyResolver,
    findFirstSpecialty: actionResolvers.FindFirstSpecialtyResolver,
    specialties: actionResolvers.FindManySpecialtyResolver,
    createSpecialty: actionResolvers.CreateSpecialtyResolver,
    createManySpecialty: actionResolvers.CreateManySpecialtyResolver,
    deleteSpecialty: actionResolvers.DeleteSpecialtyResolver,
    updateSpecialty: actionResolvers.UpdateSpecialtyResolver,
    deleteManySpecialty: actionResolvers.DeleteManySpecialtyResolver,
    updateManySpecialty: actionResolvers.UpdateManySpecialtyResolver,
    upsertSpecialty: actionResolvers.UpsertSpecialtyResolver,
    aggregateSpecialty: actionResolvers.AggregateSpecialtyResolver,
    groupBySpecialty: actionResolvers.GroupBySpecialtyResolver
  }
};
const crudResolversInfo = {
  Person: ["person", "findFirstPerson", "people", "createPerson", "createManyPerson", "deletePerson", "updatePerson", "deleteManyPerson", "updateManyPerson", "upsertPerson", "aggregatePerson", "groupByPerson"],
  Specialty: ["specialty", "findFirstSpecialty", "specialties", "createSpecialty", "createManySpecialty", "deleteSpecialty", "updateSpecialty", "deleteManySpecialty", "updateManySpecialty", "upsertSpecialty", "aggregateSpecialty", "groupBySpecialty"]
};
const argsInfo = {
  FindUniquePersonArgs: ["where"],
  FindFirstPersonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPersonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePersonArgs: ["data"],
  CreateManyPersonArgs: ["data", "skipDuplicates"],
  DeletePersonArgs: ["where"],
  UpdatePersonArgs: ["data", "where"],
  DeleteManyPersonArgs: ["where"],
  UpdateManyPersonArgs: ["data", "where"],
  UpsertPersonArgs: ["where", "create", "update"],
  AggregatePersonArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPersonArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSpecialtyArgs: ["where"],
  FindFirstSpecialtyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySpecialtyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSpecialtyArgs: ["data"],
  CreateManySpecialtyArgs: ["data", "skipDuplicates"],
  DeleteSpecialtyArgs: ["where"],
  UpdateSpecialtyArgs: ["data", "where"],
  DeleteManySpecialtyArgs: ["where"],
  UpdateManySpecialtyArgs: ["data", "where"],
  UpsertSpecialtyArgs: ["where", "create", "update"],
  AggregateSpecialtyArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySpecialtyArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Person: relationResolvers.PersonRelationsResolver,
  Specialty: relationResolvers.SpecialtyRelationsResolver
};
const relationResolversInfo = {
  Person: ["specialties"],
  Specialty: ["persons"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Person: ["id", "email", "name", "phone", "street", "streetNumber", "zip", "city", "website"],
  Specialty: ["id", "name"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregatePerson: ["_count", "_avg", "_sum", "_min", "_max"],
  PersonGroupBy: ["id", "email", "name", "phone", "street", "streetNumber", "zip", "city", "website", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSpecialty: ["_count", "_avg", "_sum", "_min", "_max"],
  SpecialtyGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  PersonCount: ["specialties"],
  PersonCountAggregate: ["id", "email", "name", "phone", "street", "streetNumber", "zip", "city", "website", "_all"],
  PersonAvgAggregate: ["id"],
  PersonSumAggregate: ["id"],
  PersonMinAggregate: ["id", "email", "name", "phone", "street", "streetNumber", "zip", "city", "website"],
  PersonMaxAggregate: ["id", "email", "name", "phone", "street", "streetNumber", "zip", "city", "website"],
  SpecialtyCount: ["persons"],
  SpecialtyCountAggregate: ["id", "name", "_all"],
  SpecialtyAvgAggregate: ["id"],
  SpecialtySumAggregate: ["id"],
  SpecialtyMinAggregate: ["id", "name"],
  SpecialtyMaxAggregate: ["id", "name"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  PersonWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "phone", "street", "streetNumber", "zip", "city", "website", "specialties"],
  PersonOrderByWithRelationInput: ["id", "email", "name", "phone", "street", "streetNumber", "zip", "city", "website", "specialties"],
  PersonWhereUniqueInput: ["id", "email"],
  PersonOrderByWithAggregationInput: ["id", "email", "name", "phone", "street", "streetNumber", "zip", "city", "website", "_count", "_avg", "_max", "_min", "_sum"],
  PersonScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name", "phone", "street", "streetNumber", "zip", "city", "website"],
  SpecialtyWhereInput: ["AND", "OR", "NOT", "id", "name", "persons"],
  SpecialtyOrderByWithRelationInput: ["id", "name", "persons"],
  SpecialtyWhereUniqueInput: ["id"],
  SpecialtyOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  SpecialtyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  PersonCreateInput: ["email", "name", "phone", "street", "streetNumber", "zip", "city", "website", "specialties"],
  PersonUpdateInput: ["email", "name", "phone", "street", "streetNumber", "zip", "city", "website", "specialties"],
  PersonCreateManyInput: ["id", "email", "name", "phone", "street", "streetNumber", "zip", "city", "website"],
  PersonUpdateManyMutationInput: ["email", "name", "phone", "street", "streetNumber", "zip", "city", "website"],
  SpecialtyCreateInput: ["name", "persons"],
  SpecialtyUpdateInput: ["name", "persons"],
  SpecialtyCreateManyInput: ["id", "name"],
  SpecialtyUpdateManyMutationInput: ["name"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  SpecialtyListRelationFilter: ["every", "some", "none"],
  SpecialtyOrderByRelationAggregateInput: ["_count"],
  PersonCountOrderByAggregateInput: ["id", "email", "name", "phone", "street", "streetNumber", "zip", "city", "website"],
  PersonAvgOrderByAggregateInput: ["id"],
  PersonMaxOrderByAggregateInput: ["id", "email", "name", "phone", "street", "streetNumber", "zip", "city", "website"],
  PersonMinOrderByAggregateInput: ["id", "email", "name", "phone", "street", "streetNumber", "zip", "city", "website"],
  PersonSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  PersonListRelationFilter: ["every", "some", "none"],
  PersonOrderByRelationAggregateInput: ["_count"],
  SpecialtyCountOrderByAggregateInput: ["id", "name"],
  SpecialtyAvgOrderByAggregateInput: ["id"],
  SpecialtyMaxOrderByAggregateInput: ["id", "name"],
  SpecialtyMinOrderByAggregateInput: ["id", "name"],
  SpecialtySumOrderByAggregateInput: ["id"],
  SpecialtyCreateNestedManyWithoutPersonsInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  SpecialtyUpdateManyWithoutPersonsInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PersonCreateNestedManyWithoutSpecialtiesInput: ["create", "connectOrCreate", "connect"],
  PersonUpdateManyWithoutSpecialtiesInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SpecialtyCreateWithoutPersonsInput: ["name"],
  SpecialtyCreateOrConnectWithoutPersonsInput: ["where", "create"],
  SpecialtyUpsertWithWhereUniqueWithoutPersonsInput: ["where", "update", "create"],
  SpecialtyUpdateWithWhereUniqueWithoutPersonsInput: ["where", "data"],
  SpecialtyUpdateManyWithWhereWithoutPersonsInput: ["where", "data"],
  SpecialtyScalarWhereInput: ["AND", "OR", "NOT", "id", "name"],
  PersonCreateWithoutSpecialtiesInput: ["email", "name", "phone", "street", "streetNumber", "zip", "city", "website"],
  PersonCreateOrConnectWithoutSpecialtiesInput: ["where", "create"],
  PersonUpsertWithWhereUniqueWithoutSpecialtiesInput: ["where", "update", "create"],
  PersonUpdateWithWhereUniqueWithoutSpecialtiesInput: ["where", "data"],
  PersonUpdateManyWithWhereWithoutSpecialtiesInput: ["where", "data"],
  PersonScalarWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "phone", "street", "streetNumber", "zip", "city", "website"],
  SpecialtyUpdateWithoutPersonsInput: ["name"],
  PersonUpdateWithoutSpecialtiesInput: ["email", "name", "phone", "street", "streetNumber", "zip", "city", "website"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

