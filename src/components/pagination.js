import React from "react";

export default function Pagination(props) {
    return (
        <div
            className="pagination__box"
            style={props.style}
            onClick={props.changePageNumber}>
            {props.pageNumber}
        </div>
    )
}