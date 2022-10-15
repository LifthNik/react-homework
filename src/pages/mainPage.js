import Menu from "../components/menu/menu";
import {Outlet} from "react-router-dom";

export default function MainPage () {

    return (<div className = 'MainPage'>

            <Menu/>
            <Outlet/>

        </div>
    );
};

export {MainPage}