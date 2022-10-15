export default function User ({user}) {

    return (<div className = 'User'>
            {user.name} -- {user.email}
        </div>
    );
};

export {User}