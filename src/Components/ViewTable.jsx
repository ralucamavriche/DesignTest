import React from 'react'
import '../Assets/style/viewTable.scss'
import pollIcon from '../Assets/img/poll-icon.png'
import reportsIcon from '../Assets/img/reports-icon.png'
import interviewIcon from '../Assets/img/interview-icon.png'
import checkbox2 from '../Assets/img/checkbox2.png'
import checkbox from '../Assets/img/checkbox.png'
import iconDown from '../Assets/img/arrow-icon-down.png'
import iconUp from '../Assets/img/arrow-icon-up.png'
import Options from './Options'

const dataForTable = [
    {
        name: 'Name 1',
        category: 'P',
        data: '12.12.12',
        participants: '123',
        subsetInformation: [
            {
                name: 'Name 1',
                category: 'P',
                data: '12.12.12',
                participants: '123'
            },
            {
                name: 'Name 1',
                category: 'P',
                data: '12.12.12',
                participants: '123'
            },
            {
                name: 'Name 1',
                category: 'P',
                data: '12.12.12',
                participants: '123'
            },
        ]
    },
    {
        name: 'Name 1',
        category: 'P',
        data: '12.12.12',
        participants: '123'
    },
    {
        name: 'Name 1',
        category: 'P',
        data: '12.12.12',
        participants: '123'
    },
    {
        name: 'Name 1',
        category: 'R',
        data: '12.12.12',
        participants: '123'
    },
    {
        name: 'Name 1',
        category: 'I',
        data: '12.12.12',
        participants: '123',
        subsetInformation: [
            {
                name: 'Name 1',
                category: 'P',
                data: '12.12.12',
                participants: '123'
            },
            {
                name: 'Name 1',
                category: 'P',
                data: '12.12.12',
                participants: '123'
            },
            {
                name: 'Name 1',
                category: 'P',
                data: '12.12.12',
                participants: '123'
            },
        ]
    },
    {
        name: 'Name 1',
        category: 'P',
        data: '12.12.12',
        participants: '123'
    },

]
export default function ViewTable() {
    return (
        <div>

            <table className="tabelContainer">
                <tr className="tabelName" >
                    <th></th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Data</th>
                    <th>Participants</th>
                    <th></th>
                </tr>
                {
                    dataForTable.map(data => {
                        return (
                            <>
                                <tr>
                                    <td >
                                        <div className="checkboxContainer">
                                            <img className="checkboxIcon" src={checkbox2} alt="" />
                                            <img className="iconDown" src={iconDown} alt="" />
                                        </div>

                                    </td>
                                    <td>{data.name}</td>
                                    <td><img className="imgIcon" src={data.category === 'R' ? reportsIcon : data.category === 'I' ? interviewIcon : pollIcon} alt="" /></td>
                                    <td>{data.data}</td>
                                    <td>{data.participants}</td>
                                    <td className="optionTable"><Options /></td>
                                </tr>
                                {
                                   data.subsetInformation && data.subsetInformation.length && data.subsetInformation.map(subData => {
                                        return (
                                            <tr>
                                                <td >
                                                    <div className="checkboxContainer">
                                                        <img className="checkboxIcon ml" src={checkbox} alt="" />
                                                    </div>

                                                </td>
                                                <td>{data.name}</td>
                                                <td><img className="imgIcon" src={data.category === 'R' ? reportsIcon : data.category === 'I' ? interviewIcon : pollIcon} alt="" /></td>
                                                <td>{data.data}</td>
                                                <td>{data.participants}</td>
                                                <td className="optionTable"><Options /></td>
                                            </tr>)
                                    })
                                }
                            </>
                        )
                    })
                }
            </table>

        </div>
    )
}
