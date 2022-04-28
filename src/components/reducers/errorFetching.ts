 export interface errorStateInt {
    message: string
}

interface actionInt {
    type: string,
    payload: any
}

const initialState: errorStateInt = {message: ''}

const errorFetchingReducer = (state: errorStateInt = initialState, action: actionInt) => {
  if(action.type === 'GET_ERROR') {
    return {message: action.payload.message}
  }
  return state;
}

export default errorFetchingReducer;