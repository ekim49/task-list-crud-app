import { useState } from "react";

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <div className="create">
      <h2>hello</h2>
    </div>
  )
}

export default CreateNote;