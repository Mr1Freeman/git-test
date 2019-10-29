import React from 'react'

//----------------Primo stile------------------//
// function car() {
//     return (
//         <h2>This is car component</h2>
//     )
// }


//-----------------Secondo stile-----------------//
// const car = () => {
//     return (
//         <div> This is car component </div>
//     )
// }

//export default car

// export default (props) => (
//     <div style={{marginLeft: '25px'}}> 
//         <h3>Car name: {props.name}</h3> 
//         <p>Year: <strong>{props.year }</strong></p>
//     </div>
// )


export default props => (
    <div style={{marginLeft: '25px'}}> 
        <h3>Car name: {props.name}</h3> 
        <p>Year: <strong>{props.year }</strong></p>
    </div>
)
