export interface dataStateInt {
    id: number,
    name: string,
    released: string,
    background_image: string,
    slug: string
}

interface dataActionInt {
    type: string,
    payload: dataStateInt[]
}

const initialState: dataStateInt[] = []

const dataFetchingReducer = (state: dataStateInt[] = initialState, action: dataActionInt) => {
  if(action.type === 'GET_DATA') {
    const data: dataStateInt[] = action.payload.map((game: any) => {
      return {id: game.id,
              name: game.name,
              released: game.released,
              background_image: game.background_image,
              slug: game.slug
              }
            })
    return data
  }
  return state;
}

export default dataFetchingReducer;
