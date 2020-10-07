import React from 'react'
import '../Assets/style/pagination.scss'
import pageSelected from '../Assets/img/page-numbers-selected.png'
import pageNumbersBackground from '../Assets/img/page-numbers.png'

export default function Pagination({ pageNumbers, onClick, currentPage }) {
    return (
        <div className="paginationContiner">
            <div className="paginations">
                {
                    pageNumbers.length <= 5 ? (
                        pageNumbers.map((page, index) => {
                            return (
                                <div key={index} style={{
                                    background: currentPage === page ? `url(${pageSelected}) 0% 0% / 100% 100%` : `url(${pageNumbersBackground}) 0% 0% / 100% 100%`
                                }} onClick={() => onClick(page)} className="page">
                                    <span>{page}</span>
                                </div>
                            )
                        })
                    ) : (
                            <>
                                {
                                    currentPage === 1 && (
                                        pageNumbers.map((page, index) => {
                                            if (index + 1 === currentPage || index + 1 === currentPage + 1 || index + 1 === currentPage + 2 || index + 1 === pageNumbers.length)
                                                return (
                                                    <div style={{
                                                        background: currentPage === page ? `url(${pageSelected}) 0% 0% / 100% 100%` : `url(${pageNumbersBackground}) 0% 0% / 100% 100%`
                                                    }} onClick={() => onClick(page)} className="page">
                                                        <span>{page}</span>

                                                    </div>
                                                )
                                            if (index + 1 === pageNumbers.length - 1) {
                                                return (
                                                    <div className="page pageDots">
                                                        <p>...</p>
                                                    </div>
                                                )
                                            }
                                            return null;
                                        })

                                    )
                                }
                                {
                                    currentPage > 1 && (
                                        
                                        pageNumbers.map((page, index) => {
                                            
                                            if (index + 1 === 1 || index + 1 === currentPage - 1 || index + 1 === currentPage + 1 || index + 1 === currentPage || index + 1 === pageNumbers.length)
                                                return (
                                                    <div style={{
                                                        background: currentPage === page ? `url(${pageSelected}) 0% 0% / 100% 100%` : `url(${pageNumbersBackground}) 0% 0% / 100% 100%`
                                                    }} onClick={() => onClick(page)} className="page">
                                                        <span>{page}</span>

                                                    </div>
                                                )
                                                if (index + 1 === pageNumbers.length - 1 || index + 1 === 2) {
                                                    return (
                                                        <div className="page pageDots">
                                                            <p>...</p>
                                                        </div>
                                                    )
                                                }

                                            return null;
                                        })

                                    )
                                }


                            </>
                        )
                }
            </div>
        </div>
    )
}
