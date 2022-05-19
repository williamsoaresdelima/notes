import { IsString, IsInt, Min, MaxLength, IsEmail } from 'class-validator';

export class NoteSchema {

    @IsInt()
    @Min(1)
    left: number;

    @IsInt()
    @Min(1)
    top: number;
  
    @IsString()
    @MaxLength(255)
    description: string;

    createdAt: Date;

}