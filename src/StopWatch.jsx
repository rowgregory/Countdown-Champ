import React from 'react'
import Time from './Time';

const StopWatch = (props) => {

    const time = new Time();

    const onChange = (event) => {
        props.onSecondsChanged(event.target.value);
    };

    const styling = {
        color: props.time <= 10000 ? '#FE5C5C' : '#000000'
    };
    

        

    return (
        <div>
            <div 
                className="display-time">
                {
                    props.status ==='started'
                    && <div className="display-time" style={styling}>
                        {time.getTime(props.time)}
                        </div>
                }
                
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