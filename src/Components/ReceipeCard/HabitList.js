
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';


const HabitList = ({ habits, onEditHabit, onDeleteHabit, onAddHabit}) => {
  const [selectedHabit, setSelectedHabit] = useState(null);
  
  const handleHabitClick = (habit) => {
    setSelectedHabit(habit);
  };

  const handleCloseModal = () => {
    setSelectedHabit(null);
  };

  const handleEditClick = (habit) => {
    onEditHabit(habit);
  };

  const handleDeleteClick = (habit) => {
    onDeleteHabit(habit);
  };

  // const handleArchieveClick = (habit) => {
  //   onArchieveHabit(habit);
  // };

  const handleAddHabit = () => {
   
    const newHabit = {
      id: Math.random().toString(),
      name: 'New Habit',
      goal: 'New Habit Goal',
      frequency: 'New Habit Frequency',
      startDate: 'New Habit Start Date',
      endDate: 'New Habit End Date',
    };
    onAddHabit(newHabit);
  };


  const navigate = useNavigate();

  const handleAddRecepieClick = () => {
    debugger
    navigate('/Add Recepie'); 
  };

  return (
    <div>
      <h2>Recepie Listing Page</h2>
      <button onClick={handleAddRecepieClick} className="btn btn-primary p-2 w-50 m-2">
        + Add Recepie
      </button>
      {habits.map((habit) => (
        <div className="row" key={habit?.id}>
          <div
            onClick={() => handleHabitClick(habit)}
            className="card p-3 col mx-5 w-50 bg-secondary  m-2"
          >
            <img src = {habit?.url} alt={habit?.Name} height={200} width={500} className='mx-auto'/>
            <div>{habit?.Name}</div>
            <span>
              <button
                onClick={() => handleEditClick(habit)}
                className="btn btn-primary p-2 m-2"
              >
                Edit
              </button>
              
               
            
              <button
                onClick={() => handleDeleteClick(habit)}
                className="btn btn-danger p-2 m-2"
              >
                Delete
              </button>
            </span>
          </div>
        </div>
      ))}

      {selectedHabit && (
        <Modal show={!!selectedHabit} onHide={handleCloseModal} centered width={100}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">{selectedHabit?.Name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedHabit?.url} alt={selectedHabit?.Name}/> 
            <p>{selectedHabit?.Description}</p>
        <ul>{selectedHabit?.Ingredients.map((x)=>{
          return(
<li>{x}</li>
          )
        })}
          </ul>
<p>Method</p>
<ul>{selectedHabit?.Method.map((x)=>{
          return(
<li>{x}</li>
          )
        })}
          </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default HabitList;
