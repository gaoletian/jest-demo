/**
 * Created by gaoletian on 17/4/1.
 */
/**
 * 返回结果包装函数
 * @param {{code: number, message: string}} message - Message中定议的消息
 * @param {any} result - 真实的返回结果，可以是任意类型
 * @returns {{code: number, message: string, result: *}}
 * @constructor
 */
export function ReplyResult (message, result = {}) {
  return Object.assign({}, message, {result})
}
