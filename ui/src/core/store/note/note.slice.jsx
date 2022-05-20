import { createSlice } from '@reduxjs/toolkit'
import LoadingStatus from "../loadingStatus"
import { fulfilledGetAllNoteReducer, fulfilledReducer, pendingReducer, rejectedReducer } from './note.reducer'
import { createNote, deleteNote, getAllNote, updateNote } from './note.thunk'

const initialState = {
  data: [],
  loading: LoadingStatus.idle,
  currentRequestId: undefined,
  error: null,
}

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNote.pending, pendingReducer)
      .addCase(getAllNote.fulfilled, fulfilledGetAllNoteReducer)
      .addCase(getAllNote.rejected, rejectedReducer)

    builder
      .addCase(createNote.pending, pendingReducer)
      .addCase(createNote.fulfilled, fulfilledReducer)
      .addCase(createNote.rejected, rejectedReducer)
      
    builder
      .addCase(updateNote.pending, pendingReducer)
      .addCase(updateNote.fulfilled, fulfilledReducer)
      .addCase(updateNote.rejected, rejectedReducer)
      
    builder
      .addCase(deleteNote.pending, pendingReducer)
      .addCase(deleteNote.fulfilled, fulfilledReducer)
      .addCase(deleteNote.rejected, rejectedReducer)   
  },
})


export const noteReducer = noteSlice.reducer