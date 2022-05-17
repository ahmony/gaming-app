import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchGames } from './redux/actions/actions';
import DarkMode from './DarkMode';

const SearchBar = (): JSX.Element =>
{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSearch = async (event: React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        const searchValue: string = (event.target as HTMLFormElement).search.value
        await searchGames(searchValue).then(data => dispatch(data))
        navigate(`/search/${searchValue}`);
        (event.target as HTMLFormElement).search.value = ''
    }

    return (
        <div className="search-container ">
            <form className="search-form" onSubmit={onSearch}>
                <span className='search-logo' onClick={() => navigate('/')}>GMNG</span>
                <input className='search-input' name='search' placeholder='Search over 50,000 games' type="text" />
                <button className='search-button'>Search</button>
            </form>
            <DarkMode></DarkMode>
        </div>
    )
}

export default SearchBar;