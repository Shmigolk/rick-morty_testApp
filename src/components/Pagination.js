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
                if (currentPage === 1) {
                    PaginationArr = [
                        PaginationArr.slice(currentPage - 1, currentPage + 3),
                        <div className={`pagination-box`}>{'...'}</div>, PaginationArr.slice(13,17),
                        <div className={`pagination-box`}>{'...'}</div>, PaginationArr.slice(37, 41)
                    ]
                }
                else{

                }
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