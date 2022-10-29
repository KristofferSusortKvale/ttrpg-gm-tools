import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Note } from "../../models/Note";
import './Notes.css';


export const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState<string>();

  const add_note = (title: string, text?: string) => {
    let newNotes: Note[] = [];
    for (const note of notes) {
      newNotes.push(note);
    }
    newNotes.push(new Note(title, text));
    setNotes(newNotes);
  }

  const remove_note = (note: Note) => {
    let newNotes: Note[] = [];
    for (const n of notes) {
      if (n !== note) {
        newNotes.push(n);
      }
    }
    setNotes(newNotes);
  }

  return (
    <>
      <div>
        <h1>Notes</h1>
          <div className="NotesControls">
          <div className="Control">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={(e) => {setTitle(e.target.value)}}
            />
          </div>
          <div className="Control">
            <Form.Label>Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {setText(e.target.value)}}
            />
          </div>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {add_note(title, text)}}
          >
            Submit
          </Button>
        </div>
      </div>
      <hr />
      <div className="Notes">
        {notes.map((note, i) => {
          return(
            <div key={i}>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
              <Button size="lg" onClick={() => {remove_note(note)}}>
                Delete
              </Button>
            </div>
        )})}
      </div>
    </>
  )
}
