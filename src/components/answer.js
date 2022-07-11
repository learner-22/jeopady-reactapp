const Answer =(props) => {
    return (
        <div>
      
        <p id ='content'> <span id= 'span'>Answer : </span>{ props.value}</p>
        <button className ='answerButton' onClick ={props.handleAnswer}> Reveal Answer</button>
      </div>
    )
}

export default Answer