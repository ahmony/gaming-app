export interface screenshootsStateInt {
    image: string
}

interface screenshootsActionState {
    type: string,
    payload: any
}

const initialState: screenshootsStateInt[] = []

const screenshootsFetchingReducer = (state: screenshootsStateInt[] = initialState, action: screenshootsActionState) => {
    if(action.type === 'GET_SCREENSHOOTS'){
        const data: screenshootsStateInt[] = action.payload.results.map((item:any) => {
            return {
                image: item.image
            }
        })
        return data;
    }
    return state;
}

export default screenshootsFetchingReducer;