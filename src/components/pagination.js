import React from "react";

export default function Pagination(props) {
    const pageNumber = props.changePageNumber

    return (
        <div
            className="pagination__box"
            style={props.style}
            onClick={props.changePageNumber}>
            {props.pageNumber}
            onClick={pageNumber}>
            {pageNumber}
        </div>
    )
}