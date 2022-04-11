import {useContext} from 'react'
import AddTodo from '../component/AddTodo'
import Todo from '../component/Todo'
import TodoContext from '../context/TodoContext'

function DiaryScreen() {
    const {todos, setTodos} = useContext(TodoContext)

    const addTodo = title => {
        const todo = {
            todoId: 100,
            title,
            done: false
        }
        setTodos([todo, ...todos])
    }

    const delTodo = todoId => {
        const todosNext = todos.filter(todo => todo.todoId !== todoId)
        setTodos(todosNext)
    }

    return (
        <>
            <AddTodo addTodo={addTodo}/>
            {todos.map((todo, i) => 
                <Todo item={todo} key={todo.todoId+''} delTodo={delTodo}/>)}
        </>
    )
}

export default DiaryScreen

/*
{
  addTodo: addTodo
}
*/