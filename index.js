import React from "react"
import ReactDOM from "react-dom"

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {value1: '', value2: '', result: ''};
  }
  handleFirstChange = (event) => {
    this.setState({value1: parseFloat(event.target.value)});
  }
  onClick = (event) => {
    switch (event.target.value) {
      case '+':
        var solution = this.state.value1 + this.state.value2
        this.setState({value1: '', value2: '', result: solution});
        break;
      case '-':
        var solution = this.state.value1 - this.state.value2
        this.setState({value1: '', value2: '', result: this.state.value1 - this.state.value2});
        break;
      case '*':
        this.setState({value1: '', value2: '', result: this.state.value1 - this.state.value2});
      case '/':
        if (this.state.value2 == 0) {
            var solution = ("ERROR: DIVIDE BY 0 IS UNDEFINED")
            this.setState({value1: '', value2: '', result: solution})
            }
        break
    }
  }

function App() {
  return (
    <div>
      <div> Simple React Calculator</div>
      <form>
        <label>
            <div><input name= 'value1' type = 'number' value = {this.state.value1} onChange = {this.handleFirstChange}/></div>
        </label>
        <input onClick = {this.onClick} type = 'button' value = '+'/>
        <input onClick = {this.onClick} type ='button' value = '-'/>
        <input onClick = {this.onClick} type= 'button', value = '*'/>
        <input onClick = {this.onClick} type= 'button', value = '/'/>
      </form>
      <div> Result: {this.state.result} </div>
    </div>
 );
}
}
ReactDOM.render(<App />, document.getElementById("root"))