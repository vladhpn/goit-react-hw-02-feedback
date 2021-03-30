import React, {Component} from 'react';
import Controls from './Controls';
import Statistics from './Statistics';
import 'modern-normalize/modern-normalize.css';



class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,   
    };

    onLeaveFeedback = ({target}) => {
		const type = target.dataset.action;
		this.setState((prevState) => ({
			[type]: prevState[type] + 1
		}));
	};


    totalQuantityOfFeedbacks = () => {
        const { good, neutral, bad } = this.state;
    
       return good + neutral + bad;
        
      };

      countPositiveFeedbackPercentage = () => {
        const {good} = this.state;
        const total = this.totalQuantityOfFeedbacks();
        if (total) {
            return `${Math.round((good / total) * 100)}%`;
          }
          return '0%';
      }
    
    render() {
       
        const options = ['good', 'neutral', 'bad'];
        const {good, neutral, bad} = this.state;
        const total = this.totalQuantityOfFeedbacks();
        const positiveFeedback = this.countPositiveFeedbackPercentage();

        return (<>
      

        <Controls options={options} onLeaveFeedback={this.onLeaveFeedback} />

        <Statistics good={good} neutral={neutral} bad={bad}
            total={total} positiveFeedback={positiveFeedback}/>
        
            </>)
    }
}

export default Feedback;