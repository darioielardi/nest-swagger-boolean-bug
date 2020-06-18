import { applyDecorators } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { PaginationDto } from '../../common/common.dto';

export function Obj(type: Function) {
  return applyDecorators(
    ValidateNested() as PropertyDecorator,
    Type(() => type) as PropertyDecorator,
  );
}

export function Pagination() {
  const decorators = [ValidateNested(), Type(() => PaginationDto)];
  return applyDecorators(...(decorators as PropertyDecorator[]));
}

type CommonOptions = {
  opt?: boolean;
};

type StringOptions = CommonOptions & {
  empty?: boolean;
  min?: number;
  max?: number;
  regex?: RegExp;
};

export function String(options?: StringOptions): PropertyDecorator {
  const opts: StringOptions = {
    opt: false,
    empty: false,
    ...options,
  };

  const decorators = [];

  if (opts.opt) {
    decorators.push(IsOptional());
  }

  decorators.push(IsString());

  if (!opts.empty) {
    decorators.push(IsNotEmpty);
  }

  if (opts.min !== undefined || opts.max !== undefined) {
    decorators.push(Length(opts.min ?? 0, opts.max));
  }

  if (opts.regex) {
    decorators.push(Matches(opts.regex));
  }

  return applyDecorators(...(decorators as PropertyDecorator[]));
}

type NumberOptions = CommonOptions & {
  int?: boolean;
  min?: number;
  max?: number;
};

export function Num(options?: NumberOptions): PropertyDecorator {
  const opts: NumberOptions = {
    opt: false,
    int: true,
    ...options,
  };

  const decorators = [];

  if (opts.opt) {
    decorators.push(IsOptional());
  }

  decorators.push(IsNumber());

  if (opts.int) {
    decorators.push(IsInt());
  }

  if (opts.min !== undefined) {
    decorators.push(Min(opts.min));
  }

  if (opts.max !== undefined) {
    decorators.push(Max(opts.max));
  }

  return applyDecorators(...(decorators as PropertyDecorator[]));
}

type BooleanOptions = CommonOptions & {};

export function Bool(options?: BooleanOptions): PropertyDecorator {
  const opts: BooleanOptions = {
    opt: false,
    ...options,
  };

  const decorators = [];

  if (opts.opt) {
    decorators.push(IsOptional());
  }

  decorators.push(IsBoolean());

  return applyDecorators(...(decorators as PropertyDecorator[]));
}
