import PropTypes from 'prop-types';
import './FeedbackOptions.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          className="btn"
          type="Submit"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.string.isRequired,
};
