import { http } from "../config/http"

const getAll = () => http.get('/note').then(r => r.data.data)

const updateNote = note => http.put(`/note/${note.id}`, note)

const createNote = note => http.post(`/note/create`, note)

const deleteNote = id => http.delete(`/note/${id}`)

const noteService = { getAll, updateNote, createNote, deleteNote }

export default noteService