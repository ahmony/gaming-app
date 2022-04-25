import axios from 'axios'
import { stateInterface } from '../reducers/dataFetching'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Home = (): JSX.Element =>
{
    const dispatch = useDispatch();
    const fetchUser = () =>
    {
        axios.get('https://rawg.io/api/games?key=873668b4248e462cb16ef5e138945339')
            .then(resp => resp.data.results)
            .then(user => dispatch({ type: 'GET_DATA', payload: user }))
    };

    useEffect(() =>
    {
        fetchUser();
    }, [])

    const state: stateInterface[] = useSelector((state: stateInterface[]) => state);
    console.log(state) //test

    return (
        <div className='games container'>
            {state.length > 0 ? state.map((game: stateInterface) =>
            {

                return (<div className="card" key={game.id}>
                    <img src={`${game.background_image}`} alt="" className="card-img-top card-img-myEdit" />
                    <div className="card-body">
                        <h4 className="card-title">{game.name}</h4>
                        <p className="card-text">Released: {game.released} </p>
                    </div>
                </div>)
            }) : <p>Data is loading..</p>}

        </div>
    )
}

export default Home;