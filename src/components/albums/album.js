export default function Album ({album}) {

    return (<div className = 'Album'>
            {album.id} - {album.title}
        </div>
    );
};

export {Album}