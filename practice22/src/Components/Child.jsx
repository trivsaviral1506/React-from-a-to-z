 import React from "react";
 const Child = React.memo(function Child(props){

    console.log("child render");
return (
    <>
    <h1> {props.name} </h1>
    </>
)
}
 )
export default Child;