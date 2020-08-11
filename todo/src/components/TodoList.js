import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    const { dispatch } = props

    const toggleTodo = id => {
        dispatch({ type: "COMPLETE_TODO", payload: id })
    }

    console.log(props)
    console.log(props.dispatch)

    return(
        <div>
            {props.props.map(item => (
                <Todo key={item.id} item={item} toggle={toggleTodo} />
            ))}
        </div>
    )
}

export default TodoList