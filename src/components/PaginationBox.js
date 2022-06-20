import React, {useContext} from "react";
import {Context} from "../Context";

export default function PaginationBox({currentPageStyle, pageNumber}) {
    const {changePageNumberByPaginationBox} = useContext(Context)
    return (
        <div
            className={`pagination-box ${currentPageStyle}`}
            data-value={pageNumber}
            onClick={changePageNumberByPaginationBox}
        >
            {pageNumber}
        </div>
    )
}