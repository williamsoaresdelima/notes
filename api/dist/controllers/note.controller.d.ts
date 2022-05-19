import { Repository } from 'typeorm';
import { NoteModel } from "src/model/note.model";
import { NoteSchema } from 'src/schemas/Note.schemas';
export declare class NoteController {
    private model;
    constructor(model: Repository<NoteModel>);
    create(body: NoteSchema): Promise<NoteModel>;
    getById(id: number): Promise<NoteModel>;
    getAll(): Promise<{
        data: NoteModel[];
    }>;
    update(id: number, body: NoteSchema): Promise<NoteModel>;
    delete(id: number): Promise<string>;
}
