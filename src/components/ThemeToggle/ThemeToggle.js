import {useDispatch, useSelector} from "react-redux";

import './ThemeToggle.css';
import {changeTheme} from "../../redux/slices";

const ThemeToggle = () => {
    const {darkMode} = useSelector(state => state.theme);
    const dispatch = useDispatch();

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="container">
                <div>
                    <span style={{color: "yellow"}}>{!darkMode && " 𖤓"}</span>
                    <span style={{color: "lightyellow"}}>{darkMode && " ₊☾⋆⁺"}</span>
                </div>
                <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox" onChange={() => dispatch(changeTheme(!darkMode))}/>
                        <span className="slider round"> </span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export {ThemeToggle};
