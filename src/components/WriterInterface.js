import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

export default function WriterInterface() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleAIButtonClick = () => {
    // Handle AI feedback logic here
  };

  return (
    <div className="container mx-auto py-10 px-5 bg-white rounded shadow-lg">
      <input 
        className="mb-4 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
      />
      <input 
        className="mb-4 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={e => setDescription(e.target.value)} 
      />
      <ReactQuill value={content} onChange={setContent} />
      <button 
        className="btn btn-primary mt-4" 
        onClick={handleAIButtonClick}
      >
        Activate AI
      </button>
    </div>
  );
}
