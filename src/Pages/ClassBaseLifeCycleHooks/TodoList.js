import React from 'react';
import TodoItem from './TodoItem';
class TodoList extends React.Component{

    render(){

        return(
            <div>
                {this.props.todos.map((todo,index) => (
                    <TodoItem
                    key= {todo.id}
                    todo = {todo}
                    />
                ))}

            </div>
            
        );
    }
}
export default TodoList;