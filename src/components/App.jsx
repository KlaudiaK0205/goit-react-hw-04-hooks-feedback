import React from 'react';
import style from './App.module.css';
import { Feedback } from './Feedback/Feedback';
import { Notifications } from './Notifications/Notifications';
import { Sections } from './Sections/Sections';
import { Statistics } from './Statistics/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotal() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  }
  
  countTotalPositive() {
    return Math.round((this.state.good / this.countTotal()) * 100);
  }

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div className={style.container}>
        <Sections title="Please leave feedback">
          <Feedback
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Sections>
        <Sections title="Statistics">
          {this.countTotal() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotal()}
              positivePercentage={this.countTotalPositive()}
            />
          ) : (
            <Notifications message="There is no feedback!" />
          )}
        </Sections>
      </div>
    );
  }
}
