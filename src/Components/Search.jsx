import React from 'react'
import '../Assets/style/search.scss'
import searchIcon from '../Assets/img/search-icon.png'
import searchBackground from '../Assets/img/search-background.png'


export default function Search(props) {
    return (
        <div style={{
            background: `url(${searchBackground})`,
            backgroundSize: '100% 100%'
        }} className="searchContainer">
            <input onChange={props.handleOnChange} value={props.value} placeholder= "Search... " className="searchInput"  type="text" name="seachText" />
            <div className="iconContainer">
            <img className="searchImg" src={searchIcon} alt="Search-icon" />
            </div>
        </div>
    )
}
