import React,{useState} from 'react'
import CounterInput from './CounterInput'
import CounterOutput from './Counteroutput'
export default function App() {

    // const [counter, setCounter] = useState(0)
    return (
        <div>
            {/* <CounterOutput counter={counter} /> */}
            <CounterOutput />

            <br/>
            {/* <CounterInput setCounter={setCounter} counter={counter} /> */}
            <CounterInput />

        </div>
    )
}
