import React from "react";

export default function Pagination(props) {
    const pageNumber = props.changePageNumber

    return (
        <div
            className="pagination__box"
            onClick={pageNumber}>
            {pageNumber}
        </div>
    )
}