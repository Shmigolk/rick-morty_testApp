import React from "react";
import {nanoid} from "nanoid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import PaginationBox from "./PaginationBox";

export default function Pagination({
                                       NumberOfPages,
                                       flipToNext,
                                       flipToPrev,
                                       currentPage,
                                       changePageNumberByPaginationBox
                                   }) {

    function getPaginationArray(numberOfPages, currentPage) {
        let PaginationArr = []
        currentPage = Number(currentPage)
        for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
            const currentPageStyle = pageNumber === Number(currentPage) ? 'current-page' : ''
            PaginationArr.push(
                <PaginationBox
                    currentPageStyle={currentPageStyle}
                    key={nanoid()}
                    pageNumber={pageNumber}
                    changePageNumberByPaginationBox={changePageNumberByPaginationBox}
                />)
        }

        if (numberOfPages < 7) return PaginationArr
        else {
            if (currentPage <= 4) {
                PaginationArr = [
                    PaginationArr.slice(0, 6),
                    <div className={`pagination-box`}
                         key={nanoid()}>{'...'}</div>,
                    PaginationArr[numberOfPages - 1]
                ]
            } else {

                if (currentPage < numberOfPages - 5) {
                    PaginationArr = [
                        PaginationArr[0],
                        <div className={`pagination-box`}
                             key={nanoid()}>{'...'}</div>,
                        PaginationArr.slice(currentPage - 2, currentPage + 2),
                        <div className={`pagination-box`}
                             key={nanoid()}>{'...'}</div>,
                        PaginationArr[numberOfPages - 1]
                    ]
                } else {
                    PaginationArr = [
                        PaginationArr[0],
                        <div className={`pagination-box`}
                             key={nanoid()}>{'...'}</div>,
                        PaginationArr.slice(numberOfPages - 6, numberOfPages)
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