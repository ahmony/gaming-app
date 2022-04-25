import React from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const SearchBar = (): JSX.Element =>
{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchUser = async (query: string) =>
    {
        axios.get(`https://rawg.io/api/games?search=${query}&key=873668b4248e462cb16ef5e138945339`)
            .then(resp => resp.data.results)
            .then(user => dispatch({ type: 'GET_DATA', payload: user }))
    };

    const onSearch = async (event: React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        const searchValue: string = (event.target as HTMLFormElement).search.value
        await fetchUser(searchValue);
        navigate(`/search/${searchValue}`);
        (event.target as HTMLFormElement).search.value = ''
    }

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={onSearch}>
                <span className='search-logo' onClick={() => navigate('/')}>GMNG</span>
                <input className='search-input' name='search' placeholder='Search over 50,000 games' type="text" />
                <button className='search-button'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;