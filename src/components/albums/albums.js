import {useEffect, useState} from "react";

import {getAlbums} from "../../services/albumsUrl";
import Album from "./album";

export default function Albums () {

    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums().then(value => setAlbums(value))
    }, [])

    return (<div className = 'Albums'>
            {
                albums.map(album => <Album key = {album.id} album={album}/>)
            }
        </div>
    );
};