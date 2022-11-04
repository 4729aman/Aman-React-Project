import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ViewWorkouts from "./../Components/Workouts";

export default function AddWork() {
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState()
    const [cb, setCb] = useState()
    const [description, setDescription] = useState()

    const handleTitleChange = (w) => {
        console.log('Change event.. ', w.target.value)
        setTitle(w.target.value)
    }
    const addWorkout = () => {
        console.log('Add Workout.. ', title, cb, description)
        //http post
        fetch('http://localhost:8000/workouts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title, cb, description })
        })
            .then(res => {
                console.log(res);
                if (res.status == 201) {
                    setMessage('Workout added successfully!')
                        return (
                            < BrowserRouter >
                        <Routes>
                            <Route path="/" element={<ViewWorkouts />} />
                        </Routes>
                </BrowserRouter >
                        );
            }
        })
      
    }
return (
    <div>
        {message && <div class="alert alert-success" role="alert">
            {message}
        </div>}

        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Title</span>
            <input type="text" value={title} onChange={handleTitleChange} className="form-control" placeholder="Enter name" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Cb</span>
            <input type="number" value={cb} onChange={(w) => setCb(w.target.value)} className="form-control" placeholder="Enter calories burn" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Description</span>
            <input type="text" value={description} onChange={(w) => setDescription(w.target.value)} className="form-control" placeholder="Enter Description" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
            <button onClick={addWorkout} className='btn btn-info'>Add Workout..</button>
        </div>
    </div>
)
}