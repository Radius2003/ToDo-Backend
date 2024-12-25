import { IsString } from 'class-validator';

export class CreateTodoDTO {
  @IsString()
  text: string;
}
