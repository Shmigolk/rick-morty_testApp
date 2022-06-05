import React from "react";
import {nanoid} from "nanoid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";

function getPaginationArray(numberOfPages, currentPage, pageNumber) {
    const PaginationArr = []

    for ( let i = 1; i <= numberOfPages; i++) {
        const currentPageStyle = currentPage === i ? 'current-page': ''
        PaginationArr.push(
            <div
                className={`pagination-box ${currentPageStyle}`}
                key={nanoid()}
            >
                {i}
            </div>)
    }
    return PaginationArr
}

export default function Pagination({pageNumber, flipToNext, flipToPrev, currentPage}) {

    const pageNumbers = getPaginationArray(pageNumber, currentPage, pageNumber).slice(0, 5)
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

                <div className={'pagination-box'}>{'...'}</div>

                <FontAwesomeIcon
                    icon={faAngleRight}
                    size="2x"
                    className={"angle-icon"}
                    onClick={flipToNext}
                />

        </div>
    )
}