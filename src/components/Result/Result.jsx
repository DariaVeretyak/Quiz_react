import React from 'react';
import PropTypes from 'prop-types';
import './Result.scss';

const Result = ({ correct, allQuestions }) => (
  <div className="Result">
    <img src="" alt="" className="Result__img" />
    <h2 className="Result__info">
      Вірних відповідей &nbsp;
      {correct}
      &nbsp; з &nbsp;
      {allQuestions}
    </h2>
    <a href="/">
      <button
        type="button"
        className="Result__btn"
      >
        Спробувати знову
      </button>
    </a>
  </div>
);

Result.propTypes = {
  correct: PropTypes.number.isRequired,
  allQuestions: PropTypes.number.isRequired,
};

export default Result;
