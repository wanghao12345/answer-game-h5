/**
 * Created by wanghao on 2020/1/27
 */
import axios from '@/config/axios'

/**
 * 检查用户接口
 */
export const checkUser = (phone) => axios({
  method: 'get',
  url: `/202001Yx/checkPhone.do?phone=${phone}`
})

/**
 * 更新题目
 */
export const updateTis = (phone, tis) => axios({
  method: 'get',
  url: `/202001Yx/updateTis.do?phone=${phone}&tis=${tis}`
})

