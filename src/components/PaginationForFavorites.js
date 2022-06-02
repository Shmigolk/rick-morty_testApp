import React from "react";

export default function PaginationForFavorites({style, changePageNumber,pageNumber}) {

    return (
        <div
            className="pagination__box"
            style={style}
            onClick={changePageNumber}>
            {pageNumber}
        </div>
    )
}