import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { detailsStateInt } from '../redux/reducers/detailsFetching';
import { useSelector } from 'react-redux';

const DetailsAbout = (): JSX.Element =>
{

    const data: detailsStateInt = useSelector((state: any) => state.details)

    return (
        <div className="details-home container">
            <ThumbUpIcon className="details-marginBottom" /> <span className="rate">{data.ratings.filter((positive: any) => positive.title === 'recommended')[0]?.count}</span><ThumbDownIcon className='details-home-thumbsDown details-marginBottom' /> <span className="rate">{data.ratings.filter((positive: any) => positive.title === 'skip')[0]?.count}</span>
            <h5 className="details-marginBottom">Platforms: <span>{data.platforms.map((platform: any) => (platform.platform.name)).join(", ")}</span></h5>
            <h5 className="details-marginBottom">Publishers: <span>{data.publishers.map((publisher: any) => (publisher.name + ', '))}</span></h5>
            <h5 className="details-marginBottom">Website: <span><a href={data.website} target='_blank'>{data.website}</a></span></h5>
            <p>{data.description_raw}</p>
        </div>
    )
}

export default DetailsAbout;