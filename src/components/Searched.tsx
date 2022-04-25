import { stateInterface } from '../reducers/dataFetching'
import { useSelector } from 'react-redux'


const Searched = (): JSX.Element =>
{
    const state: stateInterface[] = useSelector((state: stateInterface[]) => state);

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

export default Searched;