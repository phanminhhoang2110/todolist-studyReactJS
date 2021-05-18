import React, {Component} from 'react';
import './TodoItem.css';
import check from '../nodone.png';
import checkDone from '../done.png';
import propTypes from 'prop-types';

class TodoItem extends Component {

    render() {
        const {item,onClick} = this.props;
        let url = check;
        if(item.isComplete){
            url = checkDone;
        }
        let className = 'TodoItem'
        if (item.isComplete){
            className += ' TodoItem-complete'
        }
        return(
            <div className={className}>
                <img alt="Check" src={url} onClick={onClick} />
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

TodoItem.prototypes = {
    item: propTypes.shape({
        isComplete: propTypes.bool,
        title: propTypes.string
    }),
    onClick: propTypes.func
}

export default TodoItem