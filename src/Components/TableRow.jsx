import React from 'react'
import Options from './Options';
import pollIcon from '../Assets/img/poll-icon.png'
import reportsIcon from '../Assets/img/reports-icon.png'
import interviewIcon from '../Assets/img/interview-icon.png'

export default function TableRow({ data, dropdownIcon, checkboxIcon, isVisible,onToggle, type = 'default' }) {
    let classToSeeEl= '';
    if(!isVisible) classToSeeEl +='hide '
    if(type === 'default')  classToSeeEl +='show'
    return (
        <tr className={classToSeeEl}>
            <td >
                <div className="checkboxContainer">
                    {isVisible}
                    {
                        type && type === 'default' ? (
                            <>
                                <img className="checkboxIcon" src={checkboxIcon} alt="" />
                                <img className="iconDown" src={dropdownIcon} alt="" onClick={() => onToggle(data.id)} />
                            </>
                        ) : (
                                <img className="checkboxIcon ml" src={checkboxIcon} alt="" />
                            )
                    }
                </div>

            </td>
            <td>{data.name}</td>
            <td><img className="imgIcon" src={data.category === 'R' ? reportsIcon : data.category === 'I' ? interviewIcon : pollIcon} alt="" /></td>
            <td>{data.data}</td>
            <td>{data.participants}</td>
            <td className="optionTable"><Options /></td>
        </tr>
    )
}
