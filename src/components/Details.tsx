import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { detailsStateInt } from './reducers/detailsFetching';
import { screenshootsStateInt } from './reducers/screenshootsFetching';
import { trailersStateInt } from './reducers/trailersFetching';
import { errorStateInt } from './reducers/errorFetching';


const Details = (): JSX.Element =>
{
    const [detailName, setDetailName] = useState('');

    const data: detailsStateInt = useSelector((state: any) => state.details)
    const screenshoots: screenshootsStateInt[] = useSelector((state: any) => state.screenshoots)
    const trailers: trailersStateInt[] = useSelector((state: any) => state.trailers)
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
                {detailName === 'About' && <div className="details-home container">
                    <ThumbUpIcon className="details-marginBottom" /> {data.ratings.filter((positive: any) => positive.title === 'recommended')[0]?.count}<ThumbDownIcon className='details-home-thumbsDown details-marginBottom' /> {data.ratings.filter((positive: any) => positive.title === 'skip')[0]?.count}
                    <h5 className="details-marginBottom">Platforms: <span>{data.platforms.map((platform: any) => (platform.platform.name)).join(", ")}</span></h5>
                    <h5 className="details-marginBottom">Publishers: <span>{data.publishers.map((publisher: any) => (publisher.name + ', '))}</span></h5>
                    <h5 className="details-marginBottom">Website: <span><a href={data.website} target='_blank'>{data.website}</a></span></h5>
                    <p>{data.description_raw}</p>

                </div>}

                {detailName === 'Screenshoots' &&
                    <div className='screenshoots-container container'>
                        {screenshoots.map((item: any) => <img key={Math.random()} className='screenshoots-img' src={item.image}></img>)}
                    </div>}
                {detailName === 'Trailers' &&
                    <div className='trailers-container container'>
                        {trailers.length > 0 ? trailers.map((item: any) => <video width="420" height="250" controls><source src={item.data} /></video>) : <p>No available trailers for this game.</p>}
                    </div>}
            </div> : <h2 className='error'>{error.message}</h2>}
        </div>
    )
}

export default Details;