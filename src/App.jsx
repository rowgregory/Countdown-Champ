import React, { Component } from 'react';
import './App.css'
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';

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
                <Form inline>
                    <FormControl 
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                        />
                    <Button onClick = { () => this.changedDeadLine() } >
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default App;
