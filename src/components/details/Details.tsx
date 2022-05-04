import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { detailsStateInt } from '../redux/reducers/detailsFetching';
import { errorStateInt } from '../redux/reducers/errorFetching';
import DetailsAbout from './DetailsAbout';
import DetailsScreenshoots from './DetailsScreenshoots';
import DetailsTrailers from './DetailsTrailers';

const Details = (): JSX.Element =>
{
    const [detailName, setDetailName] = useState('');
    const data: detailsStateInt = useSelector((state: any) => state.details)
    const error: errorStateInt = useSelector((state: any) => state.error)

    return (
        <div>
            {error.message === '' ? <div className='details'>
                <div className="game-banner">
                    <img className='game-banner-img' src={data.background_image} alt="" />
                </div>
                <div className="game-content">
                    <div className="details-wrapper">
                        <div className="game-header">
                            <h1 className="game-header-title">{data.name}</h1>
                            <h2 className="game-header-release-date">{data.released}</h2>
                            <p className="game-header-genres">{data.genres.map((genre: any) => genre.name).join(', ')}</p>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <ul className="details-list">
                        <li><a className={`details-list-a ${detailName === 'About' ? 'active' : null}`} onClick={() => setDetailName('About')}>About</a></li>
                        <li><a className={`details-list-a ${detailName === 'Screenshoots' ? 'active' : null}`} onClick={() => setDetailName('Screenshoots')}>Screenshoots</a></li>
                        <li><a className={`details-list-a ${detailName === 'Trailers' ? 'active' : null}`} onClick={() => setDetailName('Trailers')}>Trailers</a></li>
                    </ul>
                </div>

                {detailName === 'About' && <DetailsAbout />}
                {detailName === 'Screenshoots' && <DetailsScreenshoots />}
                {detailName === 'Trailers' && <DetailsTrailers />}

            </div> : <h2 className='error'>{error.message}</h2>}
        </div>
    )
}

export default Details;