const Scores = (props) => {
return(
    <div>
    <h2 id ='content'> <span id= 'span'>Score : </span>{props.value} </h2>
    <button className ='decreaseButton' onClick ={props.handleDecrease}> Decrease</button>
    <button className ='increaseButton'onClick ={props.handleIncrease}> Increase</button>
    <button className ='resetButton'onClick ={props.handleReset}> Reset </button>
    </div>
)
}

export default Scores