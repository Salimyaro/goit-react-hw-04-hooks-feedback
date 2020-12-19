import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ feedbacks, onLeaveFeedback }) {
  const feedbackTitles = Object.keys(feedbacks);
  return (
    <>
      {feedbackTitles.map(item => {
        return (
          <button
            key={`${item}button`}
            className={s.button}
            type="button"
            value={item}
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        );
      })}
    </>
  );
}

FeedbackOptions.propTypes = {
  feedbacks: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
