import React from "react";
import {nanoid} from "nanoid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";

export default function Pagination({NumberOfPages, flipToNext, flipToPrev, currentPage, changePageNumberByPaginationBox}) {

    function getPaginationArray(numberOfPages, currentPage) {
        const PaginationArr = []
        for ( let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
            const currentPageStyle = pageNumber === Number(currentPage) ? 'current-page': ''
            PaginationArr.push(
                <div
                    className={`pagination-box ${currentPageStyle}`}
                    key={nanoid()}
                    data-value = {pageNumber}
                    onClick={changePageNumberByPaginationBox}
                >
                    {pageNumber}
                </div>)
        }
        return PaginationArr
    }

    const pageNumbers = getPaginationArray(NumberOfPages, currentPage).slice(0, 14)
    return (
        <div
            className={`pagination-container`}>
                <FontAwesomeIcon
                    icon={faAngleLeft}
                    size="2x"
                    className={"angle-icon"}
                    onClick={flipToPrev}
                />
                {pageNumbers}
                {/*<div className={'pagination-box'}>{'...'}</div>*/}
                <FontAwesomeIcon
                    icon={faAngleRight}
                    size="2x"
                    className={"angle-icon"}
                    onClick={flipToNext}
                />
        </div>
    )
}