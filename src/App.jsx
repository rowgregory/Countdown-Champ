import React, { Component } from 'react';
import './App.css'
import Clock from './Clock';

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            deadLine: 'August 16, 2019'
        }
    }

    changedDeadLine() {
        console.log('state', this.state)
        this.setState({deadLine: this.state.newDeadline})
    }

    render() {

        return (
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadLine}
                </div>
                <Clock 
                    deadline={this.state.deadLine}
                />
                <div>
                    <input 
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                        />
                    <button onClick = { () => this.changedDeadLine() } >
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default App;
