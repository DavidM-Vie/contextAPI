import React, { useState, useReducer } from 'react';


import notesReducer  from '../reducers/notesReducer';
import NotesContext from '../contexts/notes-context'

import NotesForm from './NotesForm';
import NotesList from './NotesList';

const NotesApp = () => {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [ title, setTitle ] = useState("")

  return(

    <NotesContext.Provider value={{ notes, dispatch}}>
      <React.Fragment> 
        <NotesList />
        <NotesForm  title={title} setTitle={setTitle}/>

      </React.Fragment>
    </NotesContext.Provider>

  )
}

export default NotesApp;