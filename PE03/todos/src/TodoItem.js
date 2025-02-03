export default function TodoItem( {todo, deleteTodo} ) {
    return (
        <li className="todo-item">
            <span>{todo.name}</span>
            <button  className="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}