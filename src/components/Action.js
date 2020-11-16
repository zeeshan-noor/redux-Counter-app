export const increament ="INCREAMENT";
export const decrement = "DECREAMENT";
export const reset  = "RESET";

export const increamentAction = () =>({
    type:increament
})

export const decreamentAction = () => ({
    type:decrement
})

export const resetAction = ()=>({
    type:reset
})