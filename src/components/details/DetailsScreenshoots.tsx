import React from 'react'
import { screenshootsStateInt } from '../redux/reducers/screenshootsFetching';
import { useSelector } from 'react-redux';

const DetailsScreenshoots = (): JSX.Element =>
{

    const screenshoots: screenshootsStateInt[] = useSelector((state: any) => state.screenshoots)

    return (
        <div className='screenshoots-container container'>
            {screenshoots.map((item: any) => <img key={Math.random()} className='screenshoots-img' src={item.image}></img>)}
        </div>
    )
}

export default DetailsScreenshoots;