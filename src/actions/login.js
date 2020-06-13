import { post } from '@/utils/request'
import api from '@/services/api'
export function getLogin (option) {
  return {
    type: 'LOGIN',
    payload:post(api.loginData,option)
  }
}