import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    Put,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';

import { NoteModel } from "src/model/note.model"
import { NoteSchema } from 'src/schemas/Note.schemas';
@Controller('/note')
export class NoteController{
   constructor(
    @InjectRepository(NoteModel) private model: Repository<NoteModel>,
  ) {}
    @Post('create')
    public async create(@Body() body: NoteSchema): Promise<NoteModel> {
        body.createdAt = new Date();
        return this.model.save(body);
      }
    @Get(':id')
    public async getById(
      @Param('id', ParseIntPipe) id: number,
    ): Promise<NoteModel> {
      const note = await this.model.findOne({ where: { id } });
  
      if (!note) {
        throw new NotFoundException(`not found id ${id}`);
      }
  
      return note;
    }

    @Get()
    public async getAll():Promise<{ data: NoteModel[]}>{
        const list = await this.model.find();
        return {data: list};
    }
 
    @Put(':id')
    public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: NoteSchema,
    ): Promise<NoteModel> {
    const note = await this.model.findOne({ where: { id } });

    if (!note) {
      throw new NotFoundException(`not found id ${id}`);
    }

    await this.model.update({ id }, body);

    return this.model.findOne({ where: { id } });
  }

    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
      const note = await this.model.findOne({ where: { id } });
  
      if (!note) {
        throw new NotFoundException(`not found idd ${id}`);
      }
  
      await this.model.delete(id);
  
      return `Note was successfully deleted`;
    }
}