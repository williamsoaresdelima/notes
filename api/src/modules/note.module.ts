import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NoteController } from "src/controllers/note.controller";
import { NoteModel } from "src/model/note.model";

@Module({
    imports: [TypeOrmModule.forFeature([NoteModel])],
    controllers: [NoteController],
})
export class NoteModule{}