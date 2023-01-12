// export const initState = {
//     currentValue: "0",
//     operator: null,
//     prevValue: null,
// };
//
// export const handleNumber = (value, state) => {
//     console.log(value, state)
//     if (state.currentValue === "0") {
//         this.setState({
//         })
//     }
//     return {
//         currentValue: `${state.currentValue}${value}`,
//     };
// };
//
// const handleEqual = (state) => {
//     const {currentValue, prevValue, operator} = state;
//
//     const current = parseFloat(currentValue);
//     const prev = parseFloat(prevValue);
//     const reset = {operator: null, previousValue: null};
//
//     switch (operator) {
//         case "+":
//             return this.currentValue = prev + current;
//
//         case "-":
//             return {
//                 currentValue: `${prevVal - currentVal}`,
//                 ...reset,
//             };
//         case "*":
//             return {
//                 currentValue: `${prevVal * currentVal}`,
//                 ...reset,
//             };
//         case "/":
//             return {
//                 currentValue: `${prevVal / currentVal}`,
//                 ...reset,
//             };
//         default:
//             return state;
//     }
// }
//
// const calculator = (type, value, state) => {
//     switch (type) {
//         case "number":
//             return handleNumber(value, state);
//         case "clear":
//             return initState;
//         case "operator":
//             return {
//                 operator: value,
//                 prevValue: state.currentValue,
//                 currentValue: "0"
//             }
//         case "equal":
//             console.log(state)
//             return handleEqual(state)
//         default:
//             return state;
//     }
// };
//
// export default calculator;