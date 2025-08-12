import { IsArray, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @IsString({ each: true }) // ensures each item is a string
  artists: string[];

  @IsDateString()
  releaseDate: string; // use string for date in DTO

  @IsString()
  @IsNotEmpty()
  duration: string; // e.g. "03:45"
}
