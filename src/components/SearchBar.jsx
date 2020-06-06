import React from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
    return (
        <div className='searchBar'>
            <form onSubmit={props.searchSubmit}>
                <div>
                    <input 
                        id='search'
                        type='text'
                        value={props.searchValue}
                        placeholder='Buscar localização'
                        onChange={props.search}
                        autoComplete='off'
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar