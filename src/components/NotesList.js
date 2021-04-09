import React, { useContext } from 'react'

import NoteListItem from './NoteListItem';

import NotesContext from '../contexts/notes-context';

const NotesList = ({onRemove}) => {

  const { notes } = useContext(NotesContext)

  return (
    <React.Fragment>
      <h3>Notes</h3>
      <ul>
        {notes.map((note) => <NoteListItem key={note.id} note={note}/>)} 
      </ul>
    </React.Fragment>

  )
}

export default NotesList
