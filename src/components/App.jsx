import React from 'react';
import { useState } from 'react';
import style from './App.module.css';
import { Feedback } from './Feedback/Feedback';
import { Notifications } from './Notifications/Notifications';
import { Sections } from './Sections/Sections';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = value => {
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
        throw new Error();
    }
  };

  const countTotal = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotal()) * 100);
  };

  const options = Object.keys({ good, neutral, bad });
    return (
      <div className={style.container}>
        <Sections title="Please leave feedback!">
          <Feedback options={options} onLeaveFeedback={onLeaveFeedback} />
        </Sections>

        <Sections title="Statistics">
          {countTotal() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotal()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notifications message="There is no feedback!" />
          )}
        </Sections>
      </div>
    );
};