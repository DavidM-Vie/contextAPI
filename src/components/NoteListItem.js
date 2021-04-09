import React, { useContext } from 'react'
import NotesContext from '../contexts/notes-context'

const NoteListItem = ({note}) => {

  const { dispatch } = useContext(NotesContext)

  return (
    <React.Fragment>
      <li>{note.title}</li>
      <button onClick={() => dispatch({type: 'REMOVE_NOTE', id: note.id})}>Remove</button>
    </React.Fragment>

  )
}

export default NoteListItem
