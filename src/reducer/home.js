const defaultState = {
  data: [],
  selectData: []
}
export default function (state = defaultState , action) {
  switch(action.type){
    case 'HOME':
      return {...state, data:action.payload}
    case 'SELECT':
      return {...state, selectData:action.payload}
    default:
      return state
  }
}