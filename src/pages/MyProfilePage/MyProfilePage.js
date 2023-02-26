import {useSelector} from "react-redux";
import {Header} from "../../components";

const MyProfilePage = () => {
    const {darkMode} = useSelector(state => state.theme);

    return (
        <div className={darkMode ? "dark-style" : "light-style"}>
            <Header/>
            <div style={{margin: "50px"}}><h1>Yankovyi Mykola</h1>
                <h2>JUNIOR FULL STACK DEVELOPER</h2>
                <ul>
                    <h2>CONTACTS</h2>
                    <li>+48 604 858 811</li>
                    <li>nankovoj799@gmail.com</li>
                    <li>@Nikolai_Yan</li>
                </ul>
            </div>


        </div>
    );
};

export {MyProfilePage};
