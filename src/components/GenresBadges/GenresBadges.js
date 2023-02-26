import React from 'react';
import {Link} from "react-router-dom";
import {randomColor} from "randomcolor"
import Badge from "react-simple-badges";

const GenresBadges = ({genres}) => {
    return (
        <div>{genres.map(({name, id}) => {
            return <Link to={'/genres/' + id} key={id}>
                <Badge name={name}
                       style={{color: 'white'}}
                       backgroundColor={`${randomColor()}`}/>
            </Link>
        })}
        </div>
    );
};

export {GenresBadges};
