import React from "react";
import {nanoid} from "nanoid";

export default function PaginationBox({currentPageStyle, pageNumber, changePageNumberByPaginationBox, key }) {
    return (
        <div
            className={`pagination-box ${currentPageStyle}`}
            key={key}
            data-value = {pageNumber}
            onClick={changePageNumberByPaginationBox}
            >
            {pageNumber}
        </div>
    )
}