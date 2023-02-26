import {useSelector} from "react-redux";

import {Layout} from "../../components";

const HomePage = () => {
    const {darkMode} = useSelector(state => state.theme);
    return (
        <div className={darkMode ? "dark-style" : "light-style"}>
           <Layout/>
        </div>
    );
};

export {HomePage};
