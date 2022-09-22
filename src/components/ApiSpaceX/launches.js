import {getRocketsAxios} from "../../services/rockets.axios";
import {useEffect, useState} from "react";
import Rocket from "./rockets";


export default function Rockets () {

let [rockets, setRockets] = useState([])

    useEffect(() => {
        getRocketsAxios().then(value => setRockets(value.data.filter(value => value.launch_year !== '2020')))
    }, []);

    return (
        <div className= 'rockets'>
            {rockets.map((rocket, index) =>

            <Rocket

            key = {rocket.flight_number}
            rocket={rocket}

            />)}



        </div>
    )
}