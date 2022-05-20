import { createAsyncThunk } from "@reduxjs/toolkit"
import noteService from "../../service/note.service"

export const getAllNote = createAsyncThunk(
    'note/getAll',
    async (a, { rejectWithValue }) => {
        try {
            return await noteService.getAll()
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)
  
export const createNote = createAsyncThunk(
    'note/create',
    async (note, { rejectWithValue }) => {
        try {
            return await noteService.createNote(note)
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const updateNote = createAsyncThunk(
    'note/update',
    async (note, { rejectWithValue }) => {
        try {
            return await noteService.updateNote(note)
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const deleteNote = createAsyncThunk(
    'note/delete',
    async (id, { rejectWithValue }) => {
        try {
            return await noteService.deleteNote(id)
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)