import React from 'react';
import PropTypes from 'prop-types';
import questions from '../../api/questions.json';
import './Game.scss';

const Game = ({
  question,
  onClickVariant,
  step,
}) => {
  const percentage = Math.round(step / questions.length * 100);

  return (
    <div className="Game">
      <div className="Game__progress">
        <div className="Game__inner" style={{ width: `${percentage}%` }} />
      </div>
      <h1 className="Game__question">{question.title}</h1>
      <ul className="Game__list">
        {question.variants.map((text, index) => (
          <li
            role="presentation"
            onClick={() => onClickVariant(index)}
            key={text}
            className="Game__li"
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

Game.propTypes = {
  question: PropTypes.objectOf(PropTypes.object).isRequired,
  onClickVariant: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

export default Game;
