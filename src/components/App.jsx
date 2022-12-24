import React from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics'
import Notification from './Notification/Notification';




class App extends React.Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0,
  
}

onLeaveFeedback = (state) => {
  this.setState((prevState) => ({
    [state]: prevState[state] + 1,
  }))
  
}

countTotalFeedback = () => {
return Object.values(this.state).reduce((acc, el) => {
  return acc += el;
}, 0)
}

countPositiveFeedbackPercentage = () => {
  const total = ((100 / this.countTotalFeedback()) * this.state.good).toFixed()
  return total;
}

render(){
  const {good, neutral, bad} = this.state
  
  const options = Object.keys(this.state)
  
  return (
    <>
    <Section title="Please leave feedback">
    <FeedbackOptions option={options} onLeaveFeedback={this.onLeaveFeedback}/>
    </Section>
    
    {this.countTotalFeedback() > 0 && 
    <Section title="Statistics" children>
    <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
    </Section>
    }
    
    {this.countTotalFeedback() === 0 &&
    <Notification message="No feedback given"/>
    }
    
      
    </>
  )
}
}


export default App;
