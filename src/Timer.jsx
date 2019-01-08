import React, { Component } from 'react';
import './App.css'
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
import StopWatch from './StopWatch';
import Controls from './Controls';


class Timer extends Component {
    constructor(props){
        super(props);
        this.state ={
            deadLine: 'August 16, 2019',
            seconds: 0,
            time: 0,
            status: null
        }
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.onSecondsChanged = this.onSecondsChanged.bind(this);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    onSecondsChanged(seconds){
        seconds = parseInt(seconds);
        
        if(seconds && typeof seconds === 'number'){
            if(seconds <= 359999) {
                this.setState(() => ({ seconds: seconds, time: seconds * 1000 }))
            
            } else {
                this.setState(() =>({ seconds: 0, time: 0 }));
            };
        };
    }

    startTimer(){
        if(this.state.status !== 'started'){
            this.interval = setInterval(() => {
                if(this.state.time !== 0) {
                    this.setState(prevState => ({
                        time: prevState.time - 10
                    }))
                } else {
                    this.setState(() => ({ seconds: 0, status: null, time: 0}))
                
                    clearInterval(this.interval);
                }
            }, 10);
        this.setState(() => ({ status: 'started'}));
        
        };
    }

    stopTimer(){
        if(this.state.status && this.state.status === 'started') {
            clearInterval(this.interval);
            this.setState((prevState) => {
                return ({
                    status:'stopped',
                    seconds: Math.floor(prevState.time / 1000)
                });
            });
        }
    }

    resetTimer(){
        clearInterval(this.interval);
        this.setState(() => ({
            seconds: 0,
            time: 0,
            status:null
        }));
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
                        status={this.state.status}
                        time={this.state.time}
                        onSecondsChanged={this.onSecondsChanged}>
                    </StopWatch>
                    <div>
                    <Controls  
                        startTimer={this.startTimer}
                        stopTimer={this.stopTimer}
                        resetTimer={this.resetTimer}
                        status={this.state.status}
                        canStart={this.state.seconds > 0} >
                    </Controls>

                    </div>
                    
                </div>
            </div>
        );
    };
}

export default Timer;
