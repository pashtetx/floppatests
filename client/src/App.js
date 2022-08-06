import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { Quizs } from './components/Quiz/Quizs'
import { HomePage } from './pages/Home';
import { Quiz } from './components/Quiz/Quiz';
import { CreateQuiz } from './pages/CreateQuiz';


function App() {
  return (
    <Routes>
      <Route path="/tests" element={ <Quizs /> } />
      <Route path="/" element={ <HomePage /> } />
      <Route path="/tests/:id" element={ <Quiz /> } />
      <Route path="/create-quiz" element={ <CreateQuiz /> } />
    </Routes>
  );
}

export default App;
