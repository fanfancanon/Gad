import { get, post } from '@/utils/request'
import api from '@/services/api'
//渲染
export function tableAction(option) {
    return {
        type: 'TABLE_DATA',
        payload:get(api.tableData)
    }
}
//添加
export function addAction(option) {
    return {
        type: 'ADD_DATA',
        payload:post(api.addData, option)
    }
}
//删除
export function delAction(option) {
    return {
        type: 'DEL_DATA',
        payload:post(api.delData, option)
    }
}
//搜索
export function seaAction(option) {
    return {
        type: 'SEA_DATA',
        payload:post(api.seaData+'?keyword='+option)
    }
}
