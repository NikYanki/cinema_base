import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const Rating = ({grade}) => {
    const color = ['#f3d661', '#100f0f', '#757679']
    return (
        <div>
            <StarRatings numberOfStars={5}
                         typeOfWidget={"heart"}
                         rating={grade}
                         starHoverColor={color[1]}
                         starRatedColor={color[0]}
                         starEmptyColor={color[2]}
                         starDimension={"15px"}
                         starSpacing={"2px"}/>
        </div>
    );
};

export {Rating}
