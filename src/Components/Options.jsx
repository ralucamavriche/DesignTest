import React from 'react'
import view from '../Assets/img/save-view-button.png'
import saveIcon from '../Assets/img/save-icon.png'
import reportsIcon from '../Assets/img/view-reports-icon.png'
import '../Assets/style/options.scss'

export default function Options() {
    return (
        <div style={{
            background: `url(${view})`,
            backgroundSize: '100% 100%'
        }} className="optionsContainer">

            <div className='saveContainer'>
                <img className="iconImg" src={saveIcon} alt="" />
            </div>

            <div className='reportsContainer'>
                <img className="iconImg" src={reportsIcon} alt="" />
            </div>

        </div>
    )
}
