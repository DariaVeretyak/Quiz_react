import React, { useState } from 'react';
import questions from './api/questions.json';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import './App.scss';

export const App = () => {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          question={question}
          onClickVariant={onClickVariant}
          step={step}
        />
      ) : (
        <Result correct={correct} allQuestions={questions.length} />
      )}

    </div>
  );
};
