import {Message, ReplyResult} from 'NirvanaNodeSdk/common'
import Model from 'NirvanaNodeSdk/kernel/model'
import Joi from 'joi'
const debug = (...args) => console.log('--->', ...args)
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
 * await addUser(param)
 *
 */
export async function addUser (param = {}) {
  let message = Message.Success
  try {
    // todo 参数校验

    let res = Joi.validate(param, Joi.object({
      mobile: Joi.string().required(),
      name: Joi.string()
    }))

    if (res && res.error) {
      debug(res.error.details[0].message)
      message = Message.ParamError
      return ReplyResult(message)
    }

    /** 数据库操作 **/
    const result = await Model.user.create(param)
    if (!result) {
      // 根据具体情况设置消息内容
      message = Message.NoResult
      // return ReplyResult(message, result)
    }
    // 正常返回
    return ReplyResult(message, result.dataValues)

  } catch (err) {
    message = Message.UnKnownError
    return ReplyResult(message, err)
  }
}
