export default function User (props) {
    const {user,lift} = props;

    return(
        <div className='users'>
            <h4>{user.id}: {user.name}</h4>

            <button onClick={ () => {
                lift(user)
            }}>More Info</button>



        </div>
    )
}