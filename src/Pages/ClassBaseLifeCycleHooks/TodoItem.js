import React from 'react';

class TodoItem extends React.Component{

    render(){

        const {userId, id, title ,body} = this.props.todo;
      
        return(

        <div className='container'>
            <table className='table'>
            <thead> 
            <tr>
                <th>Id</th>
                
                <th>Title</th>
                <th>Comments</th>
              
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{body}</td>
                </tr>
            </tbody>
            </table>
        </div>
        );
    }
}
export default TodoItem;