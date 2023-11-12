import { IsString } from 'class-validator';

export class CreateQuestionDTO {
  @IsString()
  readonly title: number;

  @IsString() 
  readonly category: string;

}