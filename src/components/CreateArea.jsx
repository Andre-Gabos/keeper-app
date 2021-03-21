import React, { useState } from "react";

function CreateArea(props) {

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

  return (
    <div>
      <form>
        <input 
        value={note.title} 
        onChange={handleNote} 
        name="title" 
        placeholder="Title" 
        />
        <textarea 
        value={note.content} 
        onChange={handleNote} 
        name="content" 
        placeholder="Take a note..." 
        rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
