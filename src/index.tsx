import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/application/application';
import Greet from './components/greet/greet';
import { Skills } from './components/skills/skills';
import './index.css';
import reportWebVitals from './reportWebVitals';

const skills = ["HTML", "CSS", "JavaScript", "React"];
const names = ["John", "Jane", "Mary", "Sarah", "Mike"];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Application />
    <Greet />
    <Skills skills={skills} names={names}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
