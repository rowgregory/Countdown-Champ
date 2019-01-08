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
                    onClick={props.startTimer}>
                    <div className="first-icon">
                        <i className="fa fa-play fa-2x" />
                    </div>
                </button>
                
            }       
        </div>
        <div className="controls btn-group"> 
            {
                props.status !== 'stopped' && 
                
                <button 
                    className="btn btn-lg btn-danger"
                    onClick={props.stopTimer}>
                    <div className="second-icon">
                        <i className="fa fa-stop fa-2x" />
                    </div>
                </button>
                
            }       
        </div>
        <div class="controls btn-group">
            <button 
                className="btn btn-lg btn-secondary"
                onClick={props.resetTimer}>
                <div className="third-icon">
                    <i className="fa fa-refresh fa-3x" />
                </div>
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



