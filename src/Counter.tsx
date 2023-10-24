import { useState } from "react"

export default function Counter() {

    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    function minusStep() {
        if (step > 1) {
            setStep(s => s - 1)
            setCount(s => 0)
        }
    }

    function plusStep() {
        setStep(s => s + 1)
        setCount(s => 0)
    }

    function minusCount() {
        setCount(c => c - step)
    }

    function plusCount() {
        setCount(c => c + step)
    }

    return (
        <div>
            <div>
                <button onClick={minusStep}>-</button>
                Step: {step}
                <button onClick={plusStep}>+</button>
            </div>

            <div>
                <button onClick={minusCount}>-</button>
                Count: {count}
                <button onClick={plusCount}>+</button>
            </div>

            <span>

                {count === 0 ? `Today is ${new Date().toDateString()}` :
                    `${count} days from today is ${new Date(new Date().getTime() + count * 24 * 60 * 60 * 1000).toDateString()}`}
            </span>
        </div>
    )
}