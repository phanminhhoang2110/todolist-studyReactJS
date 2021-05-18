import './App.css';
import TodoItem from "./Component/TodoItem";
import React, {Component} from "react";
import tick from './tick.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        {title: "Mua bim bim", isComplete: true},
        {title: "Di da bong", isComplete: false},
        {title: "Di do xang", isComplete: true}
      ]
    }
    this.inputElement = React.createRef();
    this.onKeyUp = this.onKeyUp.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount(){
    this.inputElement.current.focus();
  }
  onItemClick(item){
    return (event) =>{
      const isComplete = item.isComplete;
      const todoItems = this.state.todoItems;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
            ...todoItems.slice(0,index),
          {
            ...item,
            isComplete: !isComplete
          },
            ...todoItems.slice(index+1)
        ]
      })
    }
  }

  onKeyUp(event){
    if(event.keyCode === 13){
    let text = event.target.value;
    if(!text){
      return
    }
    text = text.trim();
    if(!text){
      return;
    }
    this.setState({
      newItem: '',
      todoItems: [
        {title: text, isComplete: false},
        ...this.state.todoItems
      ]
    });
  }
}
  onChange(event){
   this.setState(
      {newItem: event.target.value}
    );
  }

  render() {
    const {todoItems,newItem} = this.state;
    return (
        <div className="App">
        <div className='Header'>
          <img src={tick} width={32} height={32} alt="tick" value={newItem}/>
          <input ref={this.inputElement} value={newItem} type='text' placeholder='Add new item' onKeyUp={this.onKeyUp} onChange={this.onChange}/>
        </div>
          {
            todoItems.length > 0 &&
            todoItems.map(
                (item,index)=>
                    <TodoItem
                        key={index}
                        item={item}
                        onClick={this.onItemClick(item)}/>
                        )
          }
          {
            todoItems.length === 0 && 'Nothing here'
          }
        </div>
    );
  }
}

export default App;
