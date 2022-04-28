import { dataStateInt } from './reducers/dataFetching'
import { errorStateInt } from './reducers/errorFetching'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGames, getScreenshoots, getTrailers } from './actions/actions'
import { useNavigate } from 'react-router-dom';
import { getDetails } from './actions/actions';


const Home = (): JSX.Element =>
{
    const data: dataStateInt[] = useSelector((state: any) => state.data);
    const error: errorStateInt = useSelector((state: any) => state.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() =>
    {
        getGames().then((data: { type: string, payload: dataStateInt[] }) => dispatch(data));
    }, [])

    return (

        <div className='games container'>
            {error.message === '' ? data.map((game: dataStateInt) =>
            {
                return (<div className="card" onClick={async () => { await getDetails(game.id).then(data => dispatch(data)); await getScreenshoots(game.slug).then(data => dispatch(data)); await getTrailers(game.id).then(data => dispatch(data)); navigate(`/details/${game.name}`) }} key={game.id}>
                    <img src={`${game.background_image}`} alt="" className="card-img-top card-img-myEdit" />
                    <div className="card-body">
                        <h4 className="card-title">{game.name}</h4>
                    </div>
                </div>)
            }) : <h2>{error.message}</h2>}

        </div>

    )
}

export default Home;