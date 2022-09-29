let Todo = ({todo}) => {

    return (
        <div className='Todo' id={todo.id}>
            {todo.id} - {todo.title}
        </div>
    );
};

export {Todo};