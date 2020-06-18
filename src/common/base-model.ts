import { Model, QueryBuilder, Page, GraphOptions } from 'objection';

export type RelationsGraph = {
  [key: string]: true | RelationsGraph | undefined;
};

export class MyQueryBuilder<M extends Model, R = M[]> extends QueryBuilder<
  M,
  R
> {
  ArrayQueryBuilderType!: MyQueryBuilder<M, M[]>;
  SingleQueryBuilderType!: MyQueryBuilder<M, M>;
  NumberQueryBuilderType!: MyQueryBuilder<M, number>;
  PageQueryBuilderType!: MyQueryBuilder<M, Page<M>>;

  load<T extends RelationsGraph>(graph: T, options?: GraphOptions): this {
    return this.withGraphFetched(graph, options);
  }
}

export default class BaseModel extends Model {
  QueryBuilderType!: MyQueryBuilder<this>;
  static QueryBuilder = MyQueryBuilder;

  static graph: { [key: string]: boolean };
}
