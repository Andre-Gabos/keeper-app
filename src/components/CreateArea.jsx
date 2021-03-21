import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleNote(event) {
    const {name, value} = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">

        {isExpanded && (
          <input 
            value={note.title} 
            onChange={handleNote} 
            name="title" 
            placeholder="Title" 
          />)}

        <textarea 
        value={note.content} 
        onClick={expand}
        onChange={handleNote} 
        name="content" 
        placeholder="Take a note..." 
        rows={isExpanded ? 3 : 1}
        />

        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
