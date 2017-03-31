import {Message, ReplyResult} from 'NirvanaNodeSdk/common'
import Model from 'NirvanaNodeSdk/kernel/model'

/**
 * 函数注释参考：
 * https://esdoc.org/manual/usage/tags.html
 * 参数类型: {number}, {string}, {Object}, {{foo: number, bar: string}},
 * https://esdoc.org/manual/usage/tags.html#type-syntax
 */

/**
 * todo 函数作用描述
 * @param {*} param - 参数描述
 * @returns {Promise.<ReplyResult>} - 返回结果说明
 * @example <caption>示例代码标题</caption>
 *
 * await isUserExistByMobile(param)
 *
 */
export async function isUserExistByMobile (param) {
  let message = Message.Success, result = null
  try {
    // todo 参数校验


    /** 数据库操作 **/
    result = await Model.user.findOne({where: {id: userId}})

    if (!result) {
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
