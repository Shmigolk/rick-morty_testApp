import React from "react";

export default function Pagination(props) {
    return (
        <div
            className="box--number"
            onClick={props.changePageNumber}
        >{props.pageNumber}</div>
    )
}