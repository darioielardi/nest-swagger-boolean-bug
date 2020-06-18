import { Model, Page } from 'objection';
import { MyQueryBuilder } from '../common/base-model';
import { PaginationDto } from '../common/common.dto';

export function paginate<T extends Model>(
  query: MyQueryBuilder<T, T[]>,
  dto?: PaginationDto,
): MyQueryBuilder<T, Page<T>> {
  const { page, results } = dto ?? {};
  const p = page ?? 0;
  const r = results ?? 25;

  return query.page(p - 1, p * r);
}
