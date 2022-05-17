import React, {useState} from "react";
import Timer from "./Timer"


const TimerManager = () => {
    const [TimerNames, setTimerNames] = useState(
        [
    "Workout",
    "Drawing",
    "Studing"
    ])

    const [name, setName] = useState("")


    return (
        <div class="form">
            <form onSubmit={(event) => {
                    event.preventDefault()

                    const copyOfTimerNames = [...TimerNames]
                    copyOfTimerNames.push(name)
                    setTimerNames(copyOfTimerNames)

                    setName("")

            }}>
                    <input class="inp" value={name} 
                            onChange={(event) => {
                                setName(event.target.value)}} />
                    <button class="butt"> Add new Timer </button>
            </form>
        
                
            
            {TimerNames.map(timerName => (
                <Timer name={timerName} />
            )
            )}


        </div>
    );
}

export default TimerManager