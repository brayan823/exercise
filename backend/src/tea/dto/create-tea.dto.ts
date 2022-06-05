import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTeaDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  img: string;
}
