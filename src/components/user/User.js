export default function User ({user,getUserId}) {


    return (
        <div className= 'users'>

            <h3>{user.id}. {user.name}</h3>

            <button onClick={ () => getUserId(user.id)}>Show Posts</button>

        </div>
    )
}