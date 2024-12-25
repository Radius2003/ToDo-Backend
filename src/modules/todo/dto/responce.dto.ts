import { IsString } from 'class-validator';

export class ResponceDTO {
  @IsString()
  result: string;
}
