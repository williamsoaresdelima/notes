import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteModule } from './modules/note.module';


@Module({
  imports: [NoteModule, TypeOrmModule.forRoot()],
  
})
export class AppModule {}
