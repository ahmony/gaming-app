import React from 'react';
import { useSelector } from 'react-redux';
import { trailersStateInt } from '../redux/reducers/trailersFetching';

const DetailsTrailers = (): JSX.Element =>
{

    const trailers: trailersStateInt[] = useSelector((state: any) => state.trailers)

    return (
        <div className='trailers-container container'>
            {trailers.length > 0 ? trailers.map((item: any) => <video key={Math.random()} width="420" height="250" controls><source src={item.data} /></video>) : <p>No available trailers for this game.</p>}
        </div>
    )
}

export default DetailsTrailers;