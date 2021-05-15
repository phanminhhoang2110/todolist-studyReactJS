import './App.css';
import TodoItem from "./Component/TodoItem";
import {Component} from "react";

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      {title: "Mua bim bim", isComplete: true},
      {title: "Di da bong", isComplete: false },
      {title: "Di do xang" , isComplete: true}
    ]
  }

  render() {
    return (
        <div className="App">
          {this.todoItems.map((item,index)=> <TodoItem key={index} item={item} />)}
        </div>
    );
  }
}

export default App;
