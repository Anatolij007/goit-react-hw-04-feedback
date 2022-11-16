// import { Component } from 'react';
import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const positivePercentage = Math.round((good / total) * 100);

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};

// export class App extends Component {

//   handleGood = () => {
//     this.setState(prevState => {
//       return {
//         good: prevState.good + 1,
//       };
//     });
//   };
//   handleNeutral = () => {
//     this.setState(prevState => {
//       return {
//         neutral: prevState.neutral + 1,
//       };
//     });
//   };

//   handleBad = () => {
//     this.setState(prevState => {
//       return {
//         bad: prevState.bad + 1,
//       };
//     });
//   };

//   countTotalFeedback = ({ good, neutral, bad }) => {
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = ({ total, good }) => {
//     return Math.round((good / total) * 100);
//   };

//   onLeaveFeedback = event => {
//     const { name } = event.target;
//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback(this.state);
//     const positivePercentage = this.countPositiveFeedbackPercentage({
//       total,
//       good,
//     });

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
