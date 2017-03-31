import {Message, ReplyResult} from 'NirvanaNodeSdk/common'
import coreService from 'NirvanaNodeSdk/kernel/service'

/**
 * 函数注释参考：
 * https://esdoc.org/manual/usage/tags.html
 * 参数类型: {number}, {string}, {Object}, {{foo: number, bar: string}},
 * https://esdoc.org/manual/usage/tags.html#type-syntax
 */

/**
 * todo 函数作用描述
 * @param {*} param - 参数说明
 * @returns {Promise.<ReplyResult>} param - 返回结果说明
 * @example <caption>示例代码标题</caption>
 *
 * await addUser(param)
 *
 */
export async function addUser (param) {

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
