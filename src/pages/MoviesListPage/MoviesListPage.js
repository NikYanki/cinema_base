import {useSelector} from "react-redux";

import {Header, Movies} from "../../components";

const MoviesListPage = () => {
    const {darkMode} = useSelector(state => state.theme);

    return (
        <div className={darkMode ? "dark-style" : "light-style"}>
            <Header/>
            <Movies/>
        </div>
    );
};

export {MoviesListPage};
