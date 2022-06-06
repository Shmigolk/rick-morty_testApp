import React from "react";

export default function PaginationBox({currentPageStyle, pageNumber, changePageNumberByPaginationBox}) {
    return (
            <div
                className={`pagination-box ${currentPageStyle}`}
                data-value = {pageNumber}
                onClick={changePageNumberByPaginationBox}
                >
                {pageNumber}
            </div>
    )
}