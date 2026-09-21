
export function Submission(props){
    return (
        <>
        <h1>Car Rental Website</h1>
        <h3> Name: {props.name} </h3>
        <h3> email: {props.email} </h3>
        <h3> car: {props.car} </h3>
        <h3> days: {props.days} </h3>
        </>
    )

}