const Question = (props)=>{
  
    return(
        <div>
        <p id ='content'>  <span id= 'span'> Question :</span> {props.value.question }</p>
        <p id ='content'> <span id= 'span'> Category :</span> {props.value.category.title }</p> 
        <p id ='content'> <span id= 'span'>Points : </span>{props.value.value }</p>
        </div>
    )
}

export default Question