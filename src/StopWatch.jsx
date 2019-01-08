import React from 'react'
import Time from './Time';

const StopWatch = (props) => {

    const time = new Time();

    const onChange = (event) => {
        props.onSecondsChanged(event.target.value);
    };
    

        

    return (
        <div>
            <div 
                className="display-time">
                {time.getTime(props.time)}
            </div>
            <input 
                className="display-time"
                maxLength="6"
                value={props.seconds} 
                onChange={onChange} />
        </div>
    );
    
};

StopWatch.defualtProps = {
    seconds: 0,
    status: null,
    time: 0,
    onSecondsChanged: (event) => console.log(event.target.value)
}

export default StopWatch;