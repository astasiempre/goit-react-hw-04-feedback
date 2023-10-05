
import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Statistics/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };


  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] += 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
           <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback}></FeedbackOptions>
        
        </Section>
        
        <Section title="Statistics"> 
          {total > 0 ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          ): (<Notification message="There is no feedback" />
          )}
      </Section>
      </div>
    );
  }
}

export default App;
