import Model from './Model'
export default {
  user: new Model(require('./mysql/user')),
  channel: new Model(require('./mysql/channel')),
  user_identity_status: new Model(require('./mysql/user_identity_status')),
  user_login_log: new Model(require('./mysql/user_login_log')),
  user_state: new Model(require('./mysql/user_state')),
  user_token: new Model(require('./mysql/user_token')),
}
