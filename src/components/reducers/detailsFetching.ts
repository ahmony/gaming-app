export interface detailsStateInt {
    background_image: string,
    name: string,
    released: string,
    website: string,
    description_raw: string,
    genres: [],
    ratings: {count: number,id:number,percent:number,title:string}[],
    platforms: [],
    publishers: [],

}
interface detailsActionInt {
    type: string,
    payload: any
}

const initialState: detailsStateInt = {
    background_image: '',
    name: '',
    released: '',
    website: '',
    description_raw: '',
    genres: [],
    ratings: [],
    platforms: [],
    publishers: [],
}

const detailsFetchingReducer = (state: detailsStateInt = initialState, action: detailsActionInt) => {
    if(action.type === 'GET_DETAILS'){
        const data =  {
                background_image: action.payload.background_image,
                name: action.payload.name,
                released: action.payload.released,
                website: action.payload.website,
                description_raw: action.payload.description_raw,
                genres: action.payload.genres,
                ratings: action.payload.ratings,
                platforms: action.payload.platforms,
                publishers: action.payload.publishers
            };
        return data;
        }
       return state;
    }


export default detailsFetchingReducer;