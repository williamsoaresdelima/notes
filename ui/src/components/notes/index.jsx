import { filter, isEmpty, map } from 'lodash'
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import { useDrop } from 'react-dnd'
import Note from './note'
import { NotesContainer } from './styles'
import { useDispatch } from 'react-redux'
import { createNote, deleteNote, updateNote } from '../../core/store/note/note.thunk'

const Notes = ({ data }, ref) => {
  const [notes, setNotes] = useState([])
  const dispatch = useDispatch()
  
  useImperativeHandle(ref, ()=>({
    addNote
  }))

  useEffect(()=>{
    if(!isEmpty(data)) {
      setNotes(data)
    }
  }, [data])  

  const getNoteNew = () => ({ top: 10, left: 10, description: 'Add your note!!!' })

  const addNote = async () => {
    const noteNew = getNoteNew()
    const noteNewResponse = await dispatch(createNote(noteNew))
    const note = noteNewResponse.payload.data

    setNotes(notes => [...notes, note])
  }  

  const removeNote = async id => {
    await dispatch(deleteNote(id))
    setNotes(notes => filter(notes, note => note.id !== id))
  }

  const putNote = useCallback(
    async note => {
      await dispatch(updateNote(note))
      setNotes( map(notes, n => n.id === note.id ? { ...note } : n) )
    },
    [notes, setNotes, dispatch],
  )

  const [, drop] = useDrop(
    () => ({
      accept: 'box',
      drop(note, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset()
        const left = Math.round(note.left + delta.x)
        const top = Math.round(note.top + delta.y)
        putNote({ ...note, left, top })
        return undefined
      },
    }),
    [putNote],
  )  

  return (
    <NotesContainer ref={drop}>
      { map(notes, note => <Note key={note.id} { ...note } removeHandle={removeNote} updateHandle={putNote} /> ) }
    </NotesContainer>
  )
}
export default forwardRef(Notes)
