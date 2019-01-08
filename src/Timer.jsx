import React, { Component } from 'react';
import './App.css'
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
import StopWatch from './StopWatch';


class Timer extends Component {
    constructor(props){
        super(props);
        this.state ={
            deadLine: 'August 16, 2019',
            seconds: 0,
            time: 0,
            status: null
        }
        this.onSecondsChanged = this.onSecondsChanged.bind(this);
    }

    onSecondsChanged(seconds){
        seconds = parseInt(seconds);
        
        if(seconds && typeof seconds === 'number'){
            if(seconds <= 359999) {
                this.setState(() => ({ seconds: seconds, time: seconds * 1000 }))
            
            } else {
                this.setState(() =>({ seconds: 0, time: 0 }));
            }
        }
    }

    changedDeadLine() {
        
        this.setState({deadLine: this.state.newDeadline})
    }

    render() {

        return (
            <div>
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadLine}
                </div>
                <Clock 
                    deadline={this.state.deadLine}
                />
                <Form inline>
                    <FormControl
                        className="Deadline-input" 
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                        />
                    <Button onClick = { () => this.changedDeadLine() } >
                        Submit
                    </Button>
                </Form>
            </div>

            <div className="App">
                <div className="App-title">Stop Watch</div>
                <StopWatch 
                    seconds ={this.state.seconds}
                    time={this.state.time}
                    onSecondsChanged={this.onSecondsChanged}
                />
                
            </div>
        </div>
        )
    }
}

export default Timer;
