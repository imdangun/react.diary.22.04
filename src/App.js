import Todo from './component/Todo'
import AddTodo from './component/AddTodo'

function App() {
    const items = [
        {
            todoId: 1,
            title: '자바 공부',
            done: true
        },
        {
            todoId: 2,
            title: '연극 관람',
            done: false
        },
        {
            todoId: 3,
            title: '수학 공부',
            done: true
        }
    ]

    return (
        <>
            <AddTodo/>
            {items.map(item => <Todo item={item}/>)}
        </>
    )
}

export default App