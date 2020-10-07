import React from 'react'
import '../Assets/style/viewTable.scss'
import checkbox2 from '../Assets/img/checkbox2.png'
import checkbox from '../Assets/img/checkbox.png'
import iconDown from '../Assets/img/arrow-icon-down.png'
import iconUp from '../Assets/img/arrow-icon-up.png'
import TableRow from './TableRow';

export default function ViewTable({ dataForTable, toggledIds, onToggle }) {
    return (
        <div>
            <table className="tableContainer">
                <thead>
                <tr className="tableName" >
                    <th></th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Data</th>
                    <th>Participants</th>
                    <th></th>
                </tr>
                </thead>
                
                <tbody>
                    {
                        dataForTable.map((data, index) => {
                            return (
                                <>
                                    <TableRow
                                        key={index}
                                        data={data}
                                        dropdownIcon={toggledIds.includes(data.id) ? iconUp : iconDown}
                                        checkboxIcon={checkbox2}
                                        type='default'
                                        isVisible={true}
                                        toggledIds={toggledIds}
                                        onToggle={onToggle}
                                    />
                                    {
                                        data.subsetInformation && data.subsetInformation.length && data.subsetInformation.map((subData,index) => {
                                            return (
                                                <TableRow
                                                    key={index}
                                                    data={subData}
                                                    dropdownIcon={iconDown}
                                                    checkboxIcon={checkbox}
                                                    type='custom'
                                                    isVisible={toggledIds.includes(data.id) ? true : false}
                                                    toggledIds={toggledIds}
                                                    onToggle={onToggle}
                                                />
                                            )
                                        })
                                    }
                                </>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
