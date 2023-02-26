import {useSearchParams} from "react-router-dom";

import {PaginationButton} from "../PaginationButton/PaginationButton";

const Pagination = ({total_pages}) => {
    const [searchParams] = useSearchParams();

    return (
        <div className="paginationBtns">
            <PaginationButton to={`?page=${+searchParams.get("page") - 1}`}
                              disabled={searchParams.get("page") <= 1}>⬅</PaginationButton>
            <PaginationButton to={`?page=${+searchParams.get("page") + 1}`}
                              disabled={searchParams.get("page") >= total_pages}>⮕</PaginationButton>
        </div>
    );
};

export {Pagination};
