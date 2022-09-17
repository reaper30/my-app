import React, {useState} from "react"

const Counter = (props) => {
  const { value } = props

  const formatValue = () => {
    return value === 0 ? 'empty' : value
  }

  const getBageClasses = () => {
    let classes = 'm-2 badge '
    classes += value === 0 ? 'bg-warning' : 'bg-primary'
    return classes
  }

  // const handleIncrement = () => {
  //   console.log('handle increment');
  //   // setValue((prevState) => prevState + 1)
  // }
  // const handleDecrement = () => {
  //   console.log('handle increment');
  //   // setValue((prevState) => prevState - 1)
  // }


  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button 
       className="btn btn-primary m-2" 
       onClick={props.onIncrement}
      >
        +
      </button>
      <button 
        className="btn btn-primary m-2"
        onClick={props.onDecrement}
      >
        -
      </button>
      <button className="btn btn-danger btn-sm m-2 " onClick = {() => props.onDelete(props.id)}>Delete</button>
    </div>
    
  )  
}

export default Counter