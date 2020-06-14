const defaultState = {
  data:[]
}
export default function(state = defaultState,action) {
  switch (action.type) {
    //渲染
      case 'TABLE_DATA':
        return {...state, data:action.payload.users}
    //添加
      case 'ADD_DATA':
        return {...state }
    //删除
      case 'DEL_DATA':
        return {...state }
    //查询
      case 'SEA_DATA':
        console.log(state,111)
        console.log(action.payload.users)
        return {...state, data:action.payload.users}
      default:
        return state
  }
}