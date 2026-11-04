import React from 'react'
import { useState, useRef } from 'react';
import ResultModal from './ResultModal';
// let timer
const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef()
    const dialog = useRef()
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000 
    if (timeRemaining <= 0 ) { 
        clearInterval(timer.current)
        
        dialog.current.showModal()
    }

    function handlReset() {
        setTimeRemaining(targetTime * 1000)
    }

    function handleStart() {

        timer.current = setInterval(() => {
            setTimeRemaining(prevtimeRemaining => prevtimeRemaining - 10);
        },10);
    }

    function handleStop() {
        dialog.current.showModal()
        clearInterval(timer.current)
    }


    return (
        <>
           <ResultModal onReset={handlReset} ref={dialog} targetTime={targetTime} result={"Lost"} remainingTime={timeRemaining} />
            <section className='challenge'>
                <h2>{title}</h2>
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Start"} Challemge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : ''}>
                    {timerIsActive ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge
