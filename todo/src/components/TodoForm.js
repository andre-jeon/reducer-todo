import React from 'react'

const TodoForm = props => {
    const { value, setValues, dispatch } = props
    console.log(props)

    const clear = e => {
        dispatch({ type: 'CLEAR' })
    }

    const handleChanges = e => {
        setValues(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        dispatch({ type: 'ADD_TODO', payload: value })
        setValues('')
    }

    return(
        <div className="todo-form-container">
            <form onSubmit={onSubmit}>
                <label>
                    <input 
                    type="text" 
                    name="newItem" 
                    placeholder="Do what you gotta do..." 
                    onChange={handleChanges}
                    value={value}  
                    />
                </label>
                <button>Submit</button>
                <button onClick={clear}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm