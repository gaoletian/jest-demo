export const Message = {
  // 通过消息
  Success: {code: 200, message: '操作成功'},
  ParamError: {code: 400, message: '参数错误'},
  NotAllow: {code: 401, message: '无权访问'},
  SystemError: {code: 500, message: '内部服务错误'},
  UnKnownError: {code: 501, message: '未知错误'},

  // 以下为自定义消息
  NoResult: {code: 800, message: '没有返回结果'},
}
