import React, { Component } from 'react'
import Search from './Search';
import Category from './Category';
import Options from './Options';
import ViewTable from './ViewTable';
import Pagination from './Pagination';
import { dataForTable, categories } from './../Utils/MockupData';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            categorySelected: 'A',
            dataForTableFiltered: [],
            totalCount: 0,
            pollsCount: 0,
            intervieCount: 0,
            reportsCount: 0,
            rowsPerPage: 5,
            toggledIds: [],
            currentPage: 1
        }
    }

    handleOnToggle = id => {
        const toggledIdsTemp = this.state.toggledIds;
        if (toggledIdsTemp.includes(id)) {
            toggledIdsTemp.splice(toggledIdsTemp.indexOf(id), 1)
        } else {
            toggledIdsTemp.push(id)
        }
        this.setState({
            toggledIds: toggledIdsTemp
        })
    }

    handleOnChangeSearch = (e) => {
        this.setState({
            searchValue: e.target.value,
            dataForTableFiltered: this.getFilteredData(dataForTable)
        })
    }

    handleOnClickCategories = (category) => {
        this.setState({
            categorySelected: category[0],
            dataForTableFiltered: this.getFilteredData(dataForTable)
        })
    }

    checkSearchMatch = (row) => { // check row with searched value
        const { searchValue } = this.state;
        const lowerCaseSearchValue = searchValue.toLowerCase();
        return row.name.toLowerCase().includes(lowerCaseSearchValue) ||
            row.participants.toLowerCase().includes(lowerCaseSearchValue) ||
            row.category.toLowerCase().includes(lowerCaseSearchValue) ||
            row.data.toLowerCase().includes(lowerCaseSearchValue)
    }

    checkCategoryMatch = (row) => { // check row with category selected
        const { categorySelected } = this.state;

        return categorySelected === 'A' ? true : row.category === categorySelected
    }

    handleOnClickPage = page => {
        this.setState({
            currentPage: page
        })
    }

    getFilteredData = (arr) => {
        const result = [];
        dataForTable.map(el => {
            if (el.subsetInformation && el.subsetInformation.length) {
                const subsetInformationAfterFiler = el.subsetInformation.filter(row => (this.checkSearchMatch(row) && this.checkCategoryMatch(row)))
                if (subsetInformationAfterFiler && subsetInformationAfterFiler.length) {
                    result.push(el)
                } else {
                    if (this.checkSearchMatch(el) && this.checkCategoryMatch(el)) {
                        result.push(el)
                    }
                }
            } else {
                if (this.checkSearchMatch(el) && this.checkCategoryMatch(el)) {
                    result.push(el)
                }
            }
            return null;
        })
        return result;
    }

    countCategoryInArray = (arr, category) => {
        return arr.filter(el => el.category === category).length
    }

    countItems = (category) => {

        let res = 0;
        if (category === 'A') {
            dataForTable.map(el => {
                res++;
                if (el.subsetInformation && el.subsetInformation.length) {
                    res += el.subsetInformation.length
                }
                return null;
            })
            return res;
        }
        dataForTable.map(el => {
            if (el.subsetInformation && el.subsetInformation.length) {
                res += this.countCategoryInArray(el.subsetInformation, category)
            }
            return null;
        })
        res += this.countCategoryInArray(dataForTable, category)

        return res;
    }


    render() {

        const pageNumbers = [];
        const dataCurrent = this.getFilteredData(dataForTable)
        for (let i = 1; i <= Math.ceil(dataCurrent.length / this.state.rowsPerPage); i++) {
            pageNumbers.push(i);
        }

        const indexOfLastItem = this.state.currentPage * this.state.rowsPerPage;
        const indexOfFirstItem = indexOfLastItem - this.state.rowsPerPage;
        const currentItems = dataCurrent.slice(indexOfFirstItem, indexOfLastItem)
        return (
            <>
                <Search handleOnChange={this.handleOnChangeSearch} value={this.state.searchValue} />
                <div className="categoryOptions">
                    {
                        categories.map((category,index) => {
                            return <Category key={index} active={category.title[0] === this.state.categorySelected} onClick={this.handleOnClickCategories} title={category.title} score={this.countItems(category.title[0])} button1={category.button1} button2={category.button2} />
                        })
                    }
                    <Options />
                </div>
                <ViewTable rowsPerPage={this.state.rowsPerPage} currentPage={this.state.currentPage} dataForTable={currentItems} toggledIds={this.state.toggledIds} onToggle={this.handleOnToggle} />
                <Pagination currentPage={this.state.currentPage} pageNumbers={pageNumbers} onClick={this.handleOnClickPage} />
            </>
        )
    }
}
