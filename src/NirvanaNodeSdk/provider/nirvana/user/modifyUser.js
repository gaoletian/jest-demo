import {Message, ReplyResult} from 'NirvanaNodeSdk/common'
import coreService from 'NirvanaNodeSdk/kernel/service'

/**
 * 函数注释参考：
 * https://esdoc.org/manual/usage/tags.html
 * 参数类型: {number}, {string}, {Object}, {{foo: number, bar: string}},
 * https://esdoc.org/manual/usage/tags.html#type-syntax
 */

/**
 * 修改用户信息
 * @param {Object} userData - 参数对象
 * @param {string} userData.name - 姓名
 * @param {number} userData.sex - 性别
 * @param {string} userData.idNo - 身份证号码
 * @param {string} userData.channelCode - 渠道号
 * @returns {Promise.<ReplyResult>} - 成功 {code: 200} 失败 {code: 大于200}
 * @example
 * await modifyUser({name: 'name', sex: 1|0, idNo:'123123123123', channelCode: 'qianzhan'})
 */
export async function modifyUser (userData) {

  let message = Message.Success, result = null

  try {

    // todo 参数校验

    /** 微服务调用 **/
    result = await coreService.assertService.methodName()

    // 验证返回的结果 请根据具体情况修改判断逻辑
    if (!result || result.code !== 1 || result.code !== '00000') {
      // 根据具体情况设置消息内容
      message = Message.NoResult
      return ReplyResult(message)
    }

    // 正常返回
    return ReplyResult(message, result)

  } catch (err) {
    message = Message.UnKnowError
    return ReplyResult(message, err)
  }
}
