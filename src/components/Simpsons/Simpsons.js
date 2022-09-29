import {simpsons} from "./simpsonsInfo";
import Simpson from "./Simpson";

export default function Simpsons () {

    return (

        <div className='simpsonFam'>

            {
                simpsons.map((simpson, index) =>
                    <Simpson key={index} simpson={simpson}/>)
            }

        </div>
    );
}