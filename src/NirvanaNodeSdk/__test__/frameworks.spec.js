import {Message, ReplyResult} from '../common'
import Model from '../kernel/model'
import * as Provider from '../provider'
import CoreService from '../kernel/service'


/**
 * 静态导入测试
 */
describe('es6 import test', () => {

  let allImport = {Provider, Message, ReplyResult, CoreService}

  Object.keys(allImport).forEach(item => {
    it(`import ${item}`, () => {
      expect(allImport[item]).toBeDefined()
    });
  })

});

/**
 * 命名空间测试
 */
describe('name-space test', () => {
  it('provider.nirvana', () => {
    expect(Provider.nirvana).toBeDefined()
    expect(Provider.nirvana.user).toBeDefined()
    expect(Provider.nirvana.user.addUser).toBeDefined()
  });
  it('provider.jiea', () => {
    expect(Provider.jiea).toBeDefined()
    expect(Provider.jiea.addUser).toBeDefined()
  });
});


/**
 * 返回结果测试
 */
describe(`"provider.nirvana.user" all method should contain { code, message, result}`, async () => {
  const allMethod = Object.keys(Provider.nirvana.user)
  const expected = ['code', 'message', 'result']

  allMethod.forEach( fucName => {
    it(`provider.nirvana.user.${fucName}()`, async () => {
      let res = await Provider.nirvana.user[fucName]()
      expect(Object.keys(res)).toEqual(expect.arrayContaining(expected));
    })
  })
})

describe(`"provider.jiea" all method should contain { code, message, result}`, async () => {
  const allMethod = Object.keys(Provider.jiea)
  const expected = ['code', 'message', 'result']

  allMethod.forEach( fucName => {
    it(`provider.jiea.${fucName}()`, async () => {
      let res = await Provider.jiea[fucName]()
      expect(Object.keys(res)).toEqual(expect.arrayContaining(expected));
    })
  })
})




