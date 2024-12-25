import { IsBoolean } from 'class-validator';

export class UpdateAllDTO {
  @IsBoolean()
  status: boolean;
}
