import React from "react";
import {nanoid} from "nanoid";

export default function PaginationBox({currentPageStyle,pageNumber, changePageNumberByPaginationBox }) {
    return (
        <div
            className={`pagination-box ${currentPageStyle}`}
            key={nanoid()}
            data-value = {pageNumber}
            onClick={changePageNumberByPaginationBox}
            >
            {pageNumber}
        </div>
    )
}