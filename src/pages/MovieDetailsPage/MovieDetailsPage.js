import {useSelector} from "react-redux";

import {Header, MovieDetails} from "../../components";

const MovieDetailsPage = () => {
    const {darkMode} = useSelector(state => state.theme);

    return (
        <div className={darkMode ? "dark-style" : "light-style"} >
            <Header/>
          <MovieDetails/>
        </div>
    );
};

export {MovieDetailsPage};
