import PropTypes from 'prop-types';
import Notification from './Notification';
import s from './Statistics.module.css';

export default function Statistics({ feedbacks }) {
  const feedbackTitles = Object.keys(feedbacks);
  const total = Object.values(feedbacks).reduce((acc, value) => acc + value, 0);

  const countPositiveFeedbackPercentage = totalFeedbacks => {
    const res = Math.round((feedbacks.good / totalFeedbacks) * 100);
    return isNaN(res) ? 0 : res;
  };

  if (total < 1) {
    return <Notification message="No feedback given"></Notification>;
  }
  return (
    <ul className={s.list}>
      {feedbackTitles.map(item => {
        return (
          <li className={s.listItem} key={item}>
            <span className={s.itemName}>{item}:</span>
            <span className={s.itemVal}>{feedbacks[item]}</span>
          </li>
        );
      })}
      <li className={s.listItem} key="Total">
        <span className={s.itemName}>Total:</span>
        <span className={s.itemVal}>{total}</span>
      </li>
      <li className={s.listItem} key="PositiveFeedback">
        <span className={s.itemName}>Positive feedback:</span>
        <span className={s.itemVal}>
          {countPositiveFeedbackPercentage(total)}%
        </span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  feedbacks: PropTypes.objectOf(PropTypes.number).isRequired,
};
