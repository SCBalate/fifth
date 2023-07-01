import React, { useState ,useCallback} from 'react';
import { useDropzone } from 'react-dropzone';

import axios from 'axios';
import { Button } from 'react-bootstrap';



const AddHabitForm = ({ onAddHabit }) => {
  const [habit, setHabit] = useState({
    name: '',
    url: '',
    Ingredients: '',
    Method: '',
    
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleFileUpload = async () => {
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result.split(',')[1];
  
        const imageData = {
          image: base64Image,
        };
  
        try {
          // Make an HTTP POST request to the server to upload the file
          const response = await axios.post('/api/upload', imageData);
  
          // Handle the response from the server
          console.log('Upload successful!', response.data);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };
  
      reader.readAsDataURL(selectedFile);
    } catch (error) {
      console.error('Error reading file:', error);
    }
  }; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabit((prevHabit) => ({
      ...prevHabit,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHabit(habit);
    setHabit({
      name: '',
      url: '',
    Ingredients: [],
    Method: []
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Habit</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={habit.name} onChange={handleChange} required />
      </div>
      <div>
      <div>
      <h2>Image Uploader</h2>
      <div {...getRootProps()}>
        <input {...getInputProps()} value={habit.url}/>
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Drag and drop an image here, or click to select a file</p>
        )}
        
      </div>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      <Button onClick={handleFileUpload}>Upload</Button>
    </div>
     
    </div>
      <div>
        <label>Ingredients:</label>
        <input
          type="text"
          name="frequency"
          value={habit.Ingredients}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="text"
          name="startDate"
          value={habit.Method}
          onChange={handleChange}
          required
        />
      </div>
     
      <button type="submit">Add Recepie</button>
    </form>
  );
};

export default AddHabitForm;
