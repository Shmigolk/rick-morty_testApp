import React from "react";
import {nanoid} from "nanoid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";

export default function Pagination({NumberOfPages, flipToNext, flipToPrev, currentPage, changePageNumberByPaginationBox}) {

    function getPaginationArray(numberOfPages, currentPage) {
        let PaginationArr = []
        currentPage = Number(currentPage)
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
            if (numberOfPages < 15) return PaginationArr
            else {
                if ( currentPage <= 3 ) {
                        PaginationArr = [
                            PaginationArr.slice(0, 4),
                            <div className={`pagination-box`}>{'...'}</div>, PaginationArr.slice(Math.floor(numberOfPages/3) - 2, Math.floor(numberOfPages/3) + 2),
                            <div className={`pagination-box`}>{'...'}</div>, PaginationArr.slice(numberOfPages - 4, numberOfPages)
                        ]
                }
                else{
                    // eslint-disable-next-line no-mixed-operators
                    if ( currentPage < numberOfPages / 2) {
                        PaginationArr = [
                            PaginationArr[0],
                            <div className={`pagination-box`}>{'...'}</div>,
                            PaginationArr.slice(currentPage - 3, currentPage + 4),
                            <div className={`pagination-box`}>{'...'}</div>,
                            PaginationArr.slice(numberOfPages - 4, numberOfPages)
                        ]
                    }
                    else {
                        PaginationArr = [
                            PaginationArr.slice(0, 2),
                            <div className={`pagination-box`}>{'...'}</div>

                        ]
                    }
                }
            }
        return PaginationArr
    }

    const pageNumbers = getPaginationArray(NumberOfPages, currentPage)
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
                <FontAwesomeIcon
                    icon={faAngleRight}
                    size="2x"
                    className={"angle-icon"}
                    onClick={flipToNext}
                />
        </div>
    )
}