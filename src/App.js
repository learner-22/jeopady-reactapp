
import './App.css';
import {Component} from 'react';
import Question from './components/question'
import Scores from './components/scores'
import Answer from './components/answer'
class App extends Component {
  state ={
    randomQuestion : '',
    answer : '',
    score :0
  }
  
  handleQuestionClick = (event) =>{
    event.preventDefault()
    fetch('http://jservice.io/api/random')
    .then(res =>res.json())
    .then(json => this.setState(
      {randomQuestion :json,
       answer : ''}))
    console.log(this.state.randomQuestion)
    
  }
  
  handleAnswerClick =(event) =>{
    event.preventDefault()
    this.state.randomQuestion && this.setState({ answer : this.state.randomQuestion[0].answer,})
     console.log(this.state.answer)
  }

  handleIncreaseClick =(event) =>{
    event.preventDefault()
    this.setState({ score :  this.state.randomQuestion[0].value + this.state.score})
  }

  handleDecreaseClick =(event) =>{
    event.preventDefault()
    this.setState({ score :  this.state.score - this.state.randomQuestion[0].value })
  }

  handleResetClick =(event) =>{
    event.preventDefault()
    this.setState({ score : 0})
  }

  render () {
    console.log(this.state.randomQuestion)
    return (
      
    <div className="App">
      
      <h1> Welcome to Jeopardy ! </h1>
      
      <Scores value={this.state.score} handleIncrease ={this.handleIncreaseClick} handleDecrease ={this.handleDecreaseClick} handleReset ={this.handleResetClick} />
      <h3 id= 'span'> Let's play !</h3>
      
      <button  id ='questionButton' onClick = {this.handleQuestionClick}>Get Question</button>
      {this.state.randomQuestion && <Question value = { this.state.randomQuestion[0]} /> }

      <Answer value = {this.state.answer}  handleAnswer ={this.handleAnswerClick}/>

    </div>
  );
    }
}

export default App;
