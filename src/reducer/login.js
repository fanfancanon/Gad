const defaultState = {
  data:[]
}
export default function(state = defaultState,action) {
  switch (action.type) {
      case 'LOGIN':
        console.log(action.payload)
        return {...state, data:action.payload.data}
      default:
        return state
  }
}