import React from "react";

export default function Pagination({style, changePageNumber,pageNumber}) {

    return (
        <div
            className="pagination__box"
            style={style}
            onClick={changePageNumber}>
            {pageNumber}
        </div>
    )
}