import { IsBoolean, IsInt, IsNumber, IsOptional, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @IsInt()
  @Min(1)
  page?: number;

  @IsOptional()
  @IsNumber()
  @IsInt()
  @Min(25)
  results?: number;

  @IsOptional()
  @IsBoolean()
  count?: boolean;
}
