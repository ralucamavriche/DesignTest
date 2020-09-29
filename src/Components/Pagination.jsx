import React from 'react'
import '../Assets/style/pagination.scss'
import pageSelected from '../Assets/img/page-numbers-selected.png'
import pageNumbers from '../Assets/img/page-numbers.png'

export default function Pagination() {
    return (
        <div className="paginationContiner">
            <div className="paginations">
                <div style={{
                    background: `url(${pageSelected})`,
                    backgroundSize: '100% 100%'
                }} className="page">
                    <span>1</span>
                </div>
                <div style={{
                    background: `url(${pageNumbers})`,
                    backgroundSize: '100% 100%'
                }} className="page">
                    <span>2</span>
                </div>
                <div style={{
                    background: `url(${pageNumbers})`,
                    backgroundSize: '100% 100%'
                }} className="page">
                    <span>3</span>
                </div>
                <div  className="page pageDots">
                    <p>...</p>
                </div>
                <div style={{
                    background: `url(${pageNumbers})`,
                    backgroundSize: '100% 100%'
                }} className="page">
                    <span>16</span>
                </div>
            </div>
        </div>
    )
}
