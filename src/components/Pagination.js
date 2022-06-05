import React from "react";
import {nanoid} from "nanoid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import PaginationBox from "./PaginationBox";

export default function Pagination({NumberOfPages, flipToNext, flipToPrev, currentPage, changePageNumberByPaginationBox}) {

    function getPaginationArray(numberOfPages, currentPage) {
        let PaginationArr = []
        currentPage = Number(currentPage)
        for ( let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
            const currentPageStyle = pageNumber === Number(currentPage) ? 'current-page': ''
            PaginationArr.push(
                <PaginationBox
                    currentPageStyle = {currentPageStyle}
                    key = {nanoid()}
                    pageNumber={pageNumber}
                    changePageNumberByPaginationBox = {changePageNumberByPaginationBox}
                />)
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
                        if (currentPage < 39){
                        PaginationArr = [
                            PaginationArr.slice(0, 1),
                            <div className={`pagination-box`}>{'...'}</div>,
                            PaginationArr.slice(Math.floor(numberOfPages/3) - 1, Math.floor(numberOfPages/3) + 3),
                            <div className={`pagination-box`}>{'...'}</div>,
                            PaginationArr.slice(currentPage - 3, currentPage +2),
                            <div className={`pagination-box`}>{'...'}</div>,
                            PaginationArr[41]
                        ]
                    }
                        else {
                            PaginationArr = [
                                PaginationArr.slice(0, 4),
                                <div className={`pagination-box`}>{'...'}</div>, PaginationArr.slice(Math.floor(numberOfPages/3) - 2, Math.floor(numberOfPages/3) + 2),
                                <div className={`pagination-box`}>{'...'}</div>, PaginationArr.slice(numberOfPages - 4, numberOfPages)
                            ]
                        }
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