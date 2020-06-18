import { IsString, Length, IsNumber, IsInt, Min, Max } from 'class-validator';

export class UsersFindByNameDto {
  @IsString()
  @Length(3)
  name: string;
}

export class UsersFindByAgeDto {
  @IsNumber()
  @IsInt()
  @Min(1)
  @Max(99)
  age: number;
}
