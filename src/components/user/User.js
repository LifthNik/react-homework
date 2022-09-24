export default function Users(props) {
    let {user} = props;

    return (
        <div className= 'users'>

            <h3>{user.id}. {user.name}</h3>

            <button>Posts</button>

        </div>
    )
}