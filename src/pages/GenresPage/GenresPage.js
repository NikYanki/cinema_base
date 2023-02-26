import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {Genres, Header} from "../../components";

const GenresPage = () => {
    const {darkMode} = useSelector(state => state.theme);

    return (
        <div className={darkMode ? "dark-style" : "light-style"}>
            <Header/>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};
