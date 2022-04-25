export interface stateInterface {
    id: number,
    name: string,
    released: string,
    background_image: string
}

interface actionInt {
    type: string,
    payload: any
}

const initialState: stateInterface[] = []

const dataFetchingReducer = (state: stateInterface[] = initialState, action: actionInt) => {
  if(action.type === 'GET_DATA') {
    const data: stateInterface[] = action.payload.map((game: stateInterface) => {
      return {id: game.id,
              name: game.name,
              released: game.released,
              background_image: game.background_image}
            })
    return data

  }
  return state;
}

export default dataFetchingReducer;