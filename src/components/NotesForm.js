import React, { useContext } from 'react'
import NotesContext from '../contexts/notes-context';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid'


const NotesForm = ({ title, setTitle}) => {

  const { dispatch } = useContext(NotesContext)
  
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_NOTE',
      note: {
        id: uuidv4(),
        createdAt: moment(),
        title
      }
    })
  }

  return (
    <form
      onSubmit={onSubmit}
    > 
      <input 
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add Note</button>
    </form> 
  )
}

export default NotesForm
