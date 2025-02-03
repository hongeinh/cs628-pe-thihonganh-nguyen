import TodoItem from "./TodoItem";

export default function TodoList( {todos, deleteTodo} ) {
    return (
        <ul className="todoList">
            {todos.map((todo) =>  <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/> )}
        </ul>
    );
}