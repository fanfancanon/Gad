import { get } from '@/utils/request'
import api from '@/services/api'
export function tableAction(option) {
    return {
        type: 'TABLE_DATA',
        payload:get(api.tableData)
    }
}
