import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/";


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();

    return (
        <>
            <h1>TodoApp: { todosCount }</h1>
            <small>Pendientes : { pendingTodosCount }</small>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={ todos }
                        onDeleteTodo = { handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <TodoAdd
                        onNewTodo={ handleNewTodo }
                    />
                </div>
            </div>

        </>
    )
}
