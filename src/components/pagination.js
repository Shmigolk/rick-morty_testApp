import React from "react";

export default function Pagination(props) {
    return (
        <div
            className="pagination__box"
            onClick={props.changePageNumber}>
            {props.pageNumber}
        </div>
    )
}