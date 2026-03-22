import React,{useState,useEffect,useRef} from 'react';

function StopWatch(){
    const[isRunning, setIsRunning] = useState(false);
    const[elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimerRef = useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimerRef.current);

            },10);
        }
        return()=>{
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);

    function start(){
        startTimerRef.current = Date.now()-elapsedTime; 
        setIsRunning(true);
  
    }
    function stop(){
        setIsRunning(false);

    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);

    }
    function formatTime(){
        // let hours = Math.floor(elapsedTime/(1000*60*60));
        let min = Math.floor(elapsedTime/(1000*60)%60);
        let sec = Math.floor(elapsedTime/(1000)%60);
        let milisec = Math.floor((elapsedTime%1000)/10);

        min = String(min).padStart(2,"0");
        sec = String(sec).padStart(2,"0");
        milisec = String(milisec).padStart(2,"0");
        return `${min}:${sec}:${milisec}`;
    }
    return (<div className="StopWatch">
        <div className="display"> {formatTime()}</div>
            <div className="control"> 
                <button onClick={start} className="Start-Button">Start</button>
                <button onClick={reset} className="Reset-Button">Reset</button>
                <button onClick={stop} className="Stop-Button">Stop</button>
            </div>
    </div>);
}
export default StopWatch