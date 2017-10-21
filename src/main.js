import * as provider from 'NirvanaNodeSdk/provider'
import Sequelize from 'sequelize'


const L = console.log

/**
 * 数据库连接
 */

global.__seq = new Sequelize('database', 'mysql_user', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false // true by default
  }
})

async function start () {
  try {
    let res
    res = await provider.nirvana.user.addUser()
    L('<===', res)

    res = await provider.nirvana.user.addUser({mobile: '13622287689', sex: 1})
    L('<===', res)


    res = await provider.nirvana.user.addUser({mobile: '13622287689', sex: 0, name: 'gaoletian'})
    L('===>', res)
  } catch (err) {
    L(err)
  }

}

start()
