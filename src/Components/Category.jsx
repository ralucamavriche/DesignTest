import React from 'react'
import '../Assets/style/category.scss'



export default function Category({title, score, button1, button2}) {
    return (
        <div  style={{
            background: `url(${button1})`,
            backgroundSize: '100% 100%'
        }}className='categoryContainer'>
            <div className="categoryTitle">
                <span>
                {title}
                </span>
            </div>
            <div style={{
                background: `url(${button2})`,
                backgroundSize: '100% 100%'
            }} className="categoryScore">
                <span>
                {score}
               </span>
            </div>
        </div>
    )
}