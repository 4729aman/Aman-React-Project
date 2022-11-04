import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddWorkouts from "./Components/AddWorkouts";
import CanvasView from "./Components/CanvasView";
import Header from "./Components/Header";
import ViewWorkouts from "./Components/Workouts";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
  <Routes>
    <Route path="/" element={<ViewWorkouts />} />
    <Route path="add" element={<AddWorkouts />} />
    <Route path="graph" element={<CanvasView />} />
  </Routes>
    </BrowserRouter>
    
  );
}



