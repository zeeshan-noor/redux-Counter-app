import React from 'react'
import {useSelector} from 'react-redux'
// export default function Counteroutput(props) {
//     return (
//         <>
//             Couunter Value : {props.counter}
//         </>
//     )
// }

export default function Counteroutput() {
   const counter = useSelector(state => state.counter)
    return (
        <>
            Couunter Value : {counter}
        </>
    )
}