import React from 'react';
import propTypes from 'prop-types';
import './App.css';

const Controls = (props) => (

    <div className="d-flex flex-row">
        <div className="controls btn-group"> 
            {
                props.status !== 'started' && 
                
                <button 
                    className="btn btn-lg btn-success"
                    onClick={props.startTimer}>Start
                </button>
                
            }       
        </div>
        <div className="controls btn-group"> 
            {
                props.status !== 'stopped' && 
                
                <button 
                    className="btn btn-lg btn-danger"
                    onClick={props.stopTimer}>Stop
                </button>
                
            }       
        </div>
        <div class="controls btn-group">
            <button 
                className="btn btn-lg btn-secondary"
                onClick={props.resetTimer}>Reset
            </button>
        </div>
    </div>
)

Controls.defaultProps = {
    startTimer: () => alert('startTimer'),
    stopTImer: () => alert('stopTimer'),
    resetTimer: () => alert('resetTimer'),
    status:null,
    canStart: false
};

Controls.propTypes = {
    startTimer: propTypes.func,
    stopTimer: propTypes.func,
    resetTimer: propTypes.func
};

export default Controls;



