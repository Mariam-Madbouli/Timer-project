import React, {useState, useEffect} from 'react'

const Timer = ({name}) => {
    const[seconds, setSeconds] = useState('60')
    const[isCountdownRunning, setIsCountdownRunning] = useState(false)
    const[shouldAlert, setShouldAlert] = useState(false)
    
    useEffect (()=> {
        const secondsLeft = parseInt(seconds)
        if(isCountdownRunning && secondsLeft > 0){
            setTimeout (()=> {
                setSeconds(secondsLeft - 1)
            }, 1000) 
            
        } else {
            if(shouldAlert) {
                alert(`the Countdown is over for the timer ${name}`)
                setShouldAlert(false)
            }
            setIsCountdownRunning(false)
        }

    }, [isCountdownRunning, seconds])



    return (
        <div className="Timer"> 
            <h3>This is {name}</h3>
            <input 
                disabled= {isCountdownRunning}
                type ="number"
                value= {seconds}
                onChange = {(event) => {setSeconds(event.target.value)}}
            />
            <button 
                onClick={() => {
                    setIsCountdownRunning(true)
                    setShouldAlert(true)
                }}
            >
                Start countdown
            </button>
        </div>
    )
}

export default Timer