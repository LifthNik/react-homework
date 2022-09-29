let Todo = ({todo}) => {

    return (
        <div className='Todo'>
            {todo.id} - {todo.title
        }</div>
    );
};

export {Todo};