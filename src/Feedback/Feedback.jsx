import React, {Component} from 'react';

class Feedback extends Component {
    btnTypeGood = event =>{
        console.log('good')
        const {target} = event;
    }

    btnTypeNeutral = () =>{
        console.log('Neutral')
    }

    btnTypeBad = () =>{
        console.log('bad')
    }

    

    render() {
        return (<>
        <h1>Please leave feedback</h1>
            <div>
                <button type="button" onClick={this.btnTypeGood}>Good</button>
                <button type="button" onClick={this.btnTypeNeutral}>Neutral</button>
                <button type="button" onClick={this.btnTypeBad}>Bad</button>
            </div>
            <h2>Statistics</h2>
            <ul>
                <li>Good:</li>
                <li>Neutral:</li>
                <li>Bad:</li>
                <li>Total:</li>
                <li>Positive Feedback:</li>
            </ul>
            </>)
    }
}

export default Feedback;