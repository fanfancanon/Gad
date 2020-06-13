const defaultState = {
  data:[]
}
export default function(state = defaultState,action) {
  switch (action.type) {
      case 'TABLE_DATA':
        return {...state, data:action.payload.users}
      default:
        return state
  }
}