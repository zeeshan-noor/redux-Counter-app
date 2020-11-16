import React from 'react'
import {increamentAction,decreamentAction, resetAction} from './Action';
import {useDispatch} from 'react-redux'
// export default function CounterInput(props) {
//     return (
//         <>
//             <button  onClick={()=>props.setCounter(props.counter +1)} > + </button>
//             <button onClick={()=> props.setCounter(props.counter - 1)} > - </button>
//         </>
//     )
// }

export default function CounterInput() {
    const dispatch = useDispatch();
    return (
        <>
            <button  onClick={()=>dispatch(increamentAction())} > + </button>
            <button onClick={()=> dispatch(decreamentAction())} > - </button>
            <button onClick={()=>dispatch(resetAction())}>Reset Counter</button>
        </>
    );
}