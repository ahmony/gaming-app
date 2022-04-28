
export interface trailersStateInt {
    data: string
}

interface trailersActionInt {
    type: string,
    payload: any
}

const initialState: trailersStateInt[] = [];

const trailersFetchingReducer = (state: trailersStateInt[] = initialState, action: trailersActionInt) => {
    if(action.type === 'GET_TRAILERS' && action.payload.results.length > 0){
        const data: trailersActionInt[] = action.payload.results.map((item:any) => {
            return {
                data: item.data[480]
            }
        })
         return data;
    }
    return initialState;
}

export default trailersFetchingReducer;