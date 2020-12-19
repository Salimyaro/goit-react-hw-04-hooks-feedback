import { useState } from 'react';

import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = { good, neutral, bad };

  const handleButtonClick = ({ target: { value } }) => {
    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          feedbacks={feedbacks}
          onLeaveFeedback={handleButtonClick}
        />
      </Section>
      <Section title="Statistics">
        <Statistics feedbacks={feedbacks} />
      </Section>
    </>
  );
}
