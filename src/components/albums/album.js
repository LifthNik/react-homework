export default function Album ({album}) {

    return (<div className = 'Album' id={album.id}>
            {album.id} - {album.title}
        </div>
    );
};

export {Album}