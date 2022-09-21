export default function User (props) {
    const {user} = props;

    return(
        <div>
            <h3>{user.id}: {user.name}</h3>


        </div>
    )
}