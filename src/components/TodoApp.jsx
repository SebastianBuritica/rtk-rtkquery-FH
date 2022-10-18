import React, {useState} from 'react'
import { useGetTodoQuery, useGetTodosQuery } from '../store/apis/todosApi'

const TodoApp = () => {
  
    const [todoId, setTodoId] = useState(1)

    // const getTodos = useGetTodosQuery()
    // console.log(getTodos)
    
    const { 
        // data = [],
        isLoading,
        data 
    } 
        = useGetTodoQuery(todoId)
        console.log(data)


    return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

        <pre>{JSON.stringify(data)}</pre>

        {/* <ul>
        {data.map(todo => (
            <li key={todo.id}>
                <strong>{todo.completed ? 'Done' : 'Pending' }</strong> -
                {todo.title}
            </li>
        ))
        }
        </ul> */}

        <button
            onClick={() => setTodoId(prevTodoId => prevTodoId + 1)}
        >
            Next ToDo
        </button>
        <button
            onClick={() => { 
                if(todoId === 1) return; 
                setTodoId(prevTodoId => prevTodoId - 1)}
            }
        >
            Previous ToDo
        </button>
    </>
  )
}

export default TodoApp