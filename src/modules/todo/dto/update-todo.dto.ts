import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTodoDTO {
  @IsOptional()
  @IsString()
  text: string;

  @IsOptional()
  @IsBoolean()
  isChecked: boolean;
}
