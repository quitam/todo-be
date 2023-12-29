import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly nametask: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly desctask: string;
}
