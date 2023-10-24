import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {

  const [step, setStep] = useState(1);
  let [test, updateName] = useState({ name: 'sajitha' })


  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
    // test.name = 'sajj';
    updateName({ name: 'hemm' })
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }

    // bad pratice , always use use update
    // test.name = 'hem';
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' : ''}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]} {test.name}
      </p>

      <div className="buttons">
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handlePrevious}>Prevous</button>
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handleNext}>Next</button>
      </div>
    </div >
  );
}

export default App;
